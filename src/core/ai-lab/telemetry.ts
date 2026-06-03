import type { AiLabCardSnapshot, AiLabEffectTally, AiLabMoveRecord, AiLabPositionKind, AiPlayerModelId } from "@/core/ai-lab/types";
import { getMoveCardInstanceIds } from "@/core/engine";
import type { BoardCard, CardEffectEvent, CardInstance, MatchState, MoveInput, PlayerId, Position } from "@/core/types";
import { getAdjacentPositions } from "@/core/utils/board";

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

function tallyEffects(events: CardEffectEvent[]): AiLabEffectTally[] {
  const tallies = new Map<string, AiLabEffectTally>();

  for (const event of events) {
    const key = `${event.sourceCardArchetypeId}:${event.kind}`;
    const tally = tallies.get(key) ?? {
      kind: event.kind,
      sourceCardId: event.sourceCardArchetypeId,
      sourceCardName: event.sourceCardName,
      sourceFamily: event.sourceFamily,
      count: 0,
      amount: 0,
    };
    tally.count += 1;
    tally.amount += event.amount;
    tallies.set(key, tally);
  }

  return Array.from(tallies.values()).sort(
    (left, right) => left.sourceCardId.localeCompare(right.sourceCardId) || left.kind.localeCompare(right.kind),
  );
}

/**
 * Captures one applied move in a format shared by ladder and adventure diagnostics.
 */
export function createAiLabMoveRecord(options: {
  state: MatchState;
  nextState: MatchState;
  move: MoveInput;
  modelId: AiPlayerModelId;
}): AiLabMoveRecord {
  const { state, nextState, move, modelId } = options;
  const activePlayer = state.turn.activePlayer;
  const moveCardIds = getMoveCardInstanceIds(move);
  const playedCardIds = new Set(moveCardIds);
  const stackCards = moveCardIds
    .map((instanceId) => state.turn.choices.find((card) => card.instanceId === instanceId) ?? null)
    .filter((card): card is CardInstance => card !== null);
  const chosenCard = state.turn.choices.find((card) => card.instanceId === moveCardIds[0]);
  if (!chosenCard) {
    throw new Error(`AI model ${modelId} selected a card that is not in the current choices.`);
  }

  const lastMove = nextState.lastMove;
  if (!lastMove) {
    throw new Error("AI lab expected a lastMove summary after applying a move.");
  }

  const activeOpponent: PlayerId = activePlayer === "player" ? "enemy" : "player";
  const healthBefore = {
    player: state.champions.player.health,
    enemy: state.champions.enemy.health,
  };
  const adjacentCards = collectAdjacentCards(state.board, move.position, activePlayer);
  const offeredCards = state.turn.choices.map(cardSnapshot);
  const flippedImpacts = lastMove.impacts.filter((impact) => impact.result === "flipped");
  const noFlipImpacts = lastMove.impacts.filter((impact) => impact.result === "no-flip");
  const flipMargins = flippedImpacts.map((impact) => impact.margin);
  const effectEvents = tallyEffects(lastMove.effectEvents);
  const damageDealt = Math.max(0, healthBefore[activeOpponent] - lastMove.championsAfterMove[activeOpponent].health);
  const damageTaken = Math.max(0, healthBefore[activePlayer] - lastMove.championsAfterMove[activePlayer].health);

  return {
    turn: state.turn.index,
    round: state.round.number,
    roundTurn: state.turn.roundTurn,
    modelId,
    playerId: activePlayer,
    row: lastMove.position.row,
    col: lastMove.position.col,
    positionKind: getPositionKind(lastMove.position, state.config.boardSize),
    card: cardSnapshot(chosenCard),
    playedCards: stackCards.map(cardSnapshot),
    offeredCards,
    ignoredCardIds: offeredCards
      .filter((card) => !playedCardIds.has(card.instanceId))
      .map((card) => card.cardId),
    adjacentFriendlyCount: adjacentCards.friendly.length,
    adjacentEnemyCount: adjacentCards.enemy.length,
    adjacentFriendlyFamilies: adjacentCards.friendly.map((card) => card.family).sort(),
    adjacentEnemyFamilies: adjacentCards.enemy.map((card) => card.family).sort(),
    stackSize: stackCards.length,
    stackFamilies: stackCards.map((card) => card.family).sort(),
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
  };
}
