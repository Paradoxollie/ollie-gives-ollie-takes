import { getBot } from "@/core/bots";
import { getAiPlayerModel } from "@/core/ai-lab/models";
import type { AiLabMatchResult, AiPlayerModelId } from "@/core/ai-lab/types";
import { applyMove, createMatch, passTurn } from "@/core/engine";
import type { DeckPresetId, PlayerId } from "@/core/types";
import { mixSeed } from "@/core/utils/rng";

interface AiLabMatchConfig {
  deckPresetId: DeckPresetId;
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

/**
 * Plays one deterministic AI-lab match with model-specific bot depth settings.
 */
export function simulateAiLabMatch(config: AiLabMatchConfig, matchIndex: number): AiLabMatchResult {
  const schedule = getSchedule(config.matchup, matchIndex);
  const matchSeed = mixSeed(config.seed, `${config.deckPresetId}:${config.matchup.join("-")}:match:${matchIndex}`);
  let decisionSeed = mixSeed(config.seed, `${config.deckPresetId}:${config.matchup.join("-")}:decision:${matchIndex}`);
  let state = createMatch({
    deckPresetId: config.deckPresetId,
    seed: matchSeed,
    startingPlayer: schedule.startingPlayer,
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

    const turnNumber = state.turn.index;
    const roundNumber = state.round.number;
    const roundTurnNumber = state.turn.roundTurn;
    const nextState = applyMove(state, decision.move);
    const lastMove = nextState.lastMove;
    if (!lastMove) {
      throw new Error("AI lab expected a lastMove summary after applying a move.");
    }

    moveHistory.push({
      turn: turnNumber,
      round: roundNumber,
      roundTurn: roundTurnNumber,
      modelId,
      playerId: activePlayer,
      row: lastMove.position.row,
      col: lastMove.position.col,
      flippedCount: lastMove.impacts.filter((impact) => impact.result === "flipped").length,
      roundEnded: lastMove.roundEnded,
    });

    state = nextState;
  }

  return {
    matchIndex,
    deckPresetId: config.deckPresetId,
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
 * Plays a deterministic batch for one deck and one AI-model matchup.
 */
export function simulateAiLabSeries(config: AiLabMatchConfig & { matches: number }): AiLabMatchResult[] {
  return Array.from({ length: config.matches }, (_, index) => simulateAiLabMatch(config, index));
}
