import { getBot } from "@/core/bots";
import { getAiPlayerModel } from "@/core/ai-lab/models";
import {
  CURRENT_FAMILY_START_SCENARIO,
  getAiLabScenario,
  getCurrentFamilyPairForAiLabMatch,
  getCurrentFamilyStarterCardIdsForAiLab,
} from "@/core/ai-lab/scenarios";
import { DEFAULT_DECK_PRESET_ID } from "@/core/config/decks";
import type {
  AiLabCardSnapshot,
  AiLabEffectTally,
  AiLabMatchResult,
  AiLabPositionKind,
  AiLabScenarioId,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import { applyMove, createMatch, getMoveCardInstanceIds, passTurn } from "@/core/engine";
import type { BoardCard, CardEffectKind, CardInstance, PlayerId, Position } from "@/core/types";
import { getAdjacentPositions } from "@/core/utils/board";
import { mixSeed } from "@/core/utils/rng";

interface AiLabMatchConfig {
  scenarioId?: AiLabScenarioId;
  seed: number;
  matchup: [AiPlayerModelId, AiPlayerModelId];
}

function getSchedule(
  matchup: [AiPlayerModelId, AiPlayerModelId],
  matchIndex: number,
): {
  modelBySeat: Record<PlayerId, AiPlayerModelId>;
  startingPlayer: PlayerId;
} {
  const cycle = matchIndex % 4;

  if (cycle === 0) {
    return {
      modelBySeat: { player: matchup[0], enemy: matchup[1] },
      startingPlayer: "player",
    };
  }

  if (cycle === 1) {
    return {
      modelBySeat: { player: matchup[1], enemy: matchup[0] },
      startingPlayer: "player",
    };
  }

  if (cycle === 2) {
    return {
      modelBySeat: { player: matchup[0], enemy: matchup[1] },
      startingPlayer: "enemy",
    };
  }

  return {
    modelBySeat: { player: matchup[1], enemy: matchup[0] },
    startingPlayer: "enemy",
  };
}

function getStableCardId(card: Pick<CardInstance, "archetypeId" | "baseArchetypeId">): string {
  return card.baseArchetypeId ?? card.archetypeId;
}

function sumSides(card: Pick<CardInstance, "sides">): number {
  return Object.values(card.sides).reduce((sum, value) => sum + value, 0);
}

function cardSnapshot(card: CardInstance): AiLabCardSnapshot {
  const sideValues = Object.values(card.sides);

  return {
    cardId: getStableCardId(card),
    instanceId: card.instanceId,
    archetypeId: card.archetypeId,
    name: card.name,
    family: card.family,
    rarity: card.rarity,
    role: card.role,
    sourceType: card.sourceType,
    manaCost: card.manaCost,
    sideTotal: sumSides(card),
    maxSide: Math.max(...sideValues),
    minSide: Math.min(...sideValues),
    effectKinds: Array.from(new Set(card.effects?.map((effect) => effect.kind) ?? [])).sort(),
    buildTags: [...(card.buildTags ?? [])].sort(),
    preferredPositions: [...(card.preferredPositions ?? [])].sort(),
  };
}

function getPositionKind(position: Position, boardSize: number): AiLabPositionKind {
  const isTopOrBottom = position.row === 0 || position.row === boardSize - 1;
  const isLeftOrRight = position.col === 0 || position.col === boardSize - 1;

  if (isTopOrBottom && isLeftOrRight) {
    return "corner";
  }

  if (boardSize % 2 === 1 && position.row === Math.floor(boardSize / 2) && position.col === Math.floor(boardSize / 2)) {
    return "center";
  }

  if (isTopOrBottom || isLeftOrRight) {
    return "edge";
  }

  return "inner";
}

function collectAdjacentCards(
  board: Array<Array<BoardCard | null>>,
  position: Position,
  activePlayer: PlayerId,
): {
  friendly: BoardCard[];
  enemy: BoardCard[];
} {
  const adjacentCards = getAdjacentPositions(position, board.length)
    .map((entry) => board[entry.position.row]?.[entry.position.col] ?? null)
    .filter((card): card is BoardCard => card !== null);

  return {
    friendly: adjacentCards.filter((card) => card.owner === activePlayer),
    enemy: adjacentCards.filter((card) => card.owner !== activePlayer),
  };
}

function tallyEffects(events: Array<{ kind: CardEffectKind; amount: number }>): AiLabEffectTally[] {
  const tallies = new Map<CardEffectKind, AiLabEffectTally>();

  for (const event of events) {
    const tally = tallies.get(event.kind) ?? {
      kind: event.kind,
      count: 0,
      amount: 0,
    };
    tally.count += 1;
    tally.amount += event.amount;
    tallies.set(event.kind, tally);
  }

  return Array.from(tallies.values()).sort((left, right) => left.kind.localeCompare(right.kind));
}

/**
 * Plays one deterministic AI-lab match with model-specific bot depth settings.
 */
export function simulateAiLabMatch(config: AiLabMatchConfig, matchIndex: number): AiLabMatchResult {
  const scenarioId = config.scenarioId ?? CURRENT_FAMILY_START_SCENARIO.id;
  const scenario = getAiLabScenario(scenarioId);
  const schedule = getSchedule(config.matchup, matchIndex);
  const familyPair = getCurrentFamilyPairForAiLabMatch(matchIndex);
  const matchSeed = mixSeed(config.seed, `${scenarioId}:${config.matchup.join("-")}:match:${matchIndex}`);
  let decisionSeed = mixSeed(config.seed, `${scenarioId}:${config.matchup.join("-")}:decision:${matchIndex}`);
  let state = createMatch({
    deckPresetId: DEFAULT_DECK_PRESET_ID,
    seed: matchSeed,
    startingPlayer: schedule.startingPlayer,
    playerCardIds: getCurrentFamilyStarterCardIdsForAiLab(familyPair.playerFamily),
    enemyCardIds: getCurrentFamilyStarterCardIdsForAiLab(familyPair.enemyFamily),
  });
  const moveHistory: AiLabMatchResult["moveHistory"] = [];

  while (!state.result) {
    const activePlayer = state.turn.activePlayer;
    const modelId = schedule.modelBySeat[activePlayer];
    const model = getAiPlayerModel(modelId);
    const bot = getBot(model.botId);

    if (state.turn.choices.length === 0) {
      state = passTurn(state);
      continue;
    }

    const decision = bot.chooseMove(state, {
      playerId: activePlayer,
      seed: decisionSeed,
      searchDepth: model.searchDepth,
      beamWidth: model.beamWidth,
    });
    decisionSeed = decision.nextSeed;

    if (!decision.move) {
      throw new Error(`AI model ${modelId} returned no move while choices were available.`);
    }

    const moveCardIds = getMoveCardInstanceIds(decision.move);
    const playedCardIds = new Set(moveCardIds);
    const chosenCard = state.turn.choices.find((card) => card.instanceId === moveCardIds[0]);
    if (!chosenCard) {
      throw new Error(`AI model ${modelId} selected a card that is not in the current choices.`);
    }

    const turnNumber = state.turn.index;
    const roundNumber = state.round.number;
    const roundTurnNumber = state.turn.roundTurn;
    const activeOpponent: PlayerId = activePlayer === "player" ? "enemy" : "player";
    const healthBefore = {
      player: state.champions.player.health,
      enemy: state.champions.enemy.health,
    };
    const adjacentCards = collectAdjacentCards(state.board, decision.move.position, activePlayer);
    const offeredCards = state.turn.choices.map(cardSnapshot);
    const nextState = applyMove(state, decision.move);
    const lastMove = nextState.lastMove;
    if (!lastMove) {
      throw new Error("AI lab expected a lastMove summary after applying a move.");
    }
    const flippedImpacts = lastMove.impacts.filter((impact) => impact.result === "flipped");
    const noFlipImpacts = lastMove.impacts.filter((impact) => impact.result === "no-flip");
    const flipMargins = flippedImpacts.map((impact) => impact.margin);
    const effectEvents = tallyEffects(lastMove.effectEvents);
    const damageDealt = Math.max(0, healthBefore[activeOpponent] - lastMove.championsAfterMove[activeOpponent].health);
    const damageTaken = Math.max(0, healthBefore[activePlayer] - lastMove.championsAfterMove[activePlayer].health);

    moveHistory.push({
      turn: turnNumber,
      round: roundNumber,
      roundTurn: roundTurnNumber,
      modelId,
      playerId: activePlayer,
      row: lastMove.position.row,
      col: lastMove.position.col,
      positionKind: getPositionKind(lastMove.position, state.config.boardSize),
      card: cardSnapshot(chosenCard),
      offeredCards,
      ignoredCardIds: offeredCards
        .filter((card) => !playedCardIds.has(card.instanceId))
        .map((card) => card.cardId),
      adjacentFriendlyCount: adjacentCards.friendly.length,
      adjacentEnemyCount: adjacentCards.enemy.length,
      adjacentFriendlyFamilies: adjacentCards.friendly.map((card) => card.family).sort(),
      adjacentEnemyFamilies: adjacentCards.enemy.map((card) => card.family).sort(),
      flippedCount: flippedImpacts.length,
      failedImpactCount: noFlipImpacts.length,
      flipMargins,
      averageFlipMargin: flipMargins.length === 0 ? 0 : flipMargins.reduce((sum, margin) => sum + margin, 0) / flipMargins.length,
      effectEvents,
      effectAmountTotal: effectEvents.reduce((sum, event) => sum + event.amount, 0),
      damageDealt,
      damageTaken,
      roundWinner: lastMove.roundEndSummary?.roundWinner ?? null,
      roundControlDifference: lastMove.roundEndSummary?.controlDifference ?? null,
      roundEnded: lastMove.roundEnded,
      matchEnded: nextState.result !== null,
      lethal: nextState.result?.winner === activePlayer,
    });

    state = nextState;
  }

  return {
    matchIndex,
    scenarioId,
    scenarioLabel: scenario.label,
    startingDeckCardCount: scenario.startingDeckCardCount,
    matchup: config.matchup,
    boardSize: state.config.boardSize,
    modelBySeat: schedule.modelBySeat,
    startingPlayer: schedule.startingPlayer,
    winnerSeat: state.result.winner,
    winnerModelId: state.result.winner === "draw" ? "draw" : schedule.modelBySeat[state.result.winner],
    reason: state.result.reason,
    turns: state.turn.index,
    rounds: state.round.number,
    roundsCompleted: state.metrics.roundsCompleted,
    totalFlips: state.metrics.totalFlips,
    totalReshuffles: state.players.player.reshuffles + state.players.enemy.reshuffles,
    deadTurns: state.metrics.deadTurns,
    finalChampionHealth: {
      player: state.champions.player.health,
      enemy: state.champions.enemy.health,
    },
    finalHpDifference: Math.abs(state.champions.player.health - state.champions.enemy.health),
    moveHistory,
    matchSeed,
    decisionSeed,
  };
}

/**
 * Plays a deterministic batch for the current game scenario and one AI-model matchup.
 */
export function simulateAiLabSeries(config: AiLabMatchConfig & { matches: number }): AiLabMatchResult[] {
  return Array.from({ length: config.matches }, (_, index) => simulateAiLabMatch(config, index));
}
