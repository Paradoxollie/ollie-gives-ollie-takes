import { getBot } from "@/core/bots";
import { applyMove, createMatch, passTurn } from "@/core/engine";
import type { BotId } from "@/core/bots";
import type { PlayerId } from "@/core/types";
import { mixSeed } from "@/core/utils/rng";
import type { SimulatedMatchResult, SimulationSeriesConfig } from "@/core/sim/types";

function getSchedule(
  matchup: [BotId, BotId],
  matchIndex: number,
): {
  botBySeat: Record<PlayerId, BotId>;
  startingPlayer: PlayerId;
} {
  const cycle = matchIndex % 4;

  if (cycle === 0) {
    return {
      botBySeat: { player: matchup[0], enemy: matchup[1] },
      startingPlayer: "player",
    };
  }

  if (cycle === 1) {
    return {
      botBySeat: { player: matchup[1], enemy: matchup[0] },
      startingPlayer: "player",
    };
  }

  if (cycle === 2) {
    return {
      botBySeat: { player: matchup[0], enemy: matchup[1] },
      startingPlayer: "enemy",
    };
  }

  return {
    botBySeat: { player: matchup[1], enemy: matchup[0] },
    startingPlayer: "enemy",
  };
}

/**
 * Plays a single deterministic self-play match using the shared engine and the configured bots.
 */
export function simulateMatch(config: SimulationSeriesConfig, matchIndex: number): SimulatedMatchResult {
  const schedule = getSchedule(config.matchup, matchIndex);
  const matchSeed = mixSeed(config.seed, `${config.deckPresetId}:${config.matchup.join("-")}:match:${matchIndex}`);
  let decisionSeed = mixSeed(config.seed, `${config.deckPresetId}:${config.matchup.join("-")}:decision:${matchIndex}`);
  let state = createMatch({
    deckPresetId: config.deckPresetId,
    seed: matchSeed,
    startingPlayer: schedule.startingPlayer,
  });
  const moveHistory: SimulatedMatchResult["moveHistory"] = [];

  while (!state.result) {
    const activePlayer = state.turn.activePlayer;
    const botId = schedule.botBySeat[activePlayer];
    const bot = getBot(botId);

    if (state.turn.choices.length === 0) {
      state = passTurn(state);
      continue;
    }

    const decision = bot.chooseMove(state, {
      playerId: activePlayer,
      seed: decisionSeed,
    });
    decisionSeed = decision.nextSeed;

    if (!decision.move) {
      throw new Error(`Bot ${botId} returned no move while choices were available.`);
    }

    const turnNumber = state.turn.index;
    const roundNumber = state.round.number;
    const roundTurnNumber = state.turn.roundTurn;
    const nextState = applyMove(state, decision.move);
    const lastMove = nextState.lastMove;
    if (!lastMove) {
      throw new Error("Simulation expected a lastMove summary after applying a move.");
    }

    moveHistory.push({
      turn: turnNumber,
      round: roundNumber,
      roundTurn: roundTurnNumber,
      botId,
      playerId: activePlayer,
      row: lastMove.position.row,
      col: lastMove.position.col,
      flippedCount: lastMove.impacts.filter((impact) => impact.result === "flipped").length,
      roundEnded: lastMove.roundEnded,
      roundEndControl: lastMove.roundEndSummary
        ? {
            player: lastMove.roundEndSummary.control.player,
            enemy: lastMove.roundEndSummary.control.enemy,
          }
        : { player: 0, enemy: 0 },
      roundEndDamage: lastMove.roundEndSummary
        ? {
            player: lastMove.roundEndSummary.damageApplied.player,
            enemy: lastMove.roundEndSummary.damageApplied.enemy,
          }
        : { player: 0, enemy: 0 },
      lethal: nextState.result?.winner === activePlayer,
    });

    state = nextState;
  }

  return {
    matchIndex,
    deckPresetId: config.deckPresetId,
    matchup: config.matchup,
    boardSize: state.config.boardSize,
    botBySeat: schedule.botBySeat,
    startingPlayer: schedule.startingPlayer,
    winnerSeat: state.result.winner,
    winnerBotId: state.result.winner === "draw" ? "draw" : schedule.botBySeat[state.result.winner],
    reason: state.result.reason,
    endingSource: state.result.endingSource,
    turns: state.turn.index,
    rounds: state.round.number,
    roundsCompleted: state.metrics.roundsCompleted,
    totalFlips: state.metrics.totalFlips,
    totalRoundEndControlDifference: state.metrics.totalRoundEndControlDifference,
    totalRoundEndDamage: state.metrics.totalRoundEndDamage,
    totalControlledCardsBySide: {
      player: state.metrics.totalControlledCardsBySide.player,
      enemy: state.metrics.totalControlledCardsBySide.enemy,
    },
    totalReshuffles: state.players.player.reshuffles + state.players.enemy.reshuffles,
    totalRoundEndOccupancy: state.metrics.totalRoundEndOccupancy,
    averageRoundEndOccupancy:
      state.metrics.roundsCompleted === 0 ? 0 : state.metrics.totalRoundEndOccupancy / state.metrics.roundsCompleted,
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
 * Plays a full simulation series for one deck preset and one bot matchup.
 */
export function simulateSeries(config: SimulationSeriesConfig): SimulatedMatchResult[] {
  return Array.from({ length: config.matches }, (_, index) => simulateMatch(config, index));
}
