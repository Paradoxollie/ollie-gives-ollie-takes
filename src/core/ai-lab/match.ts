import { getBot } from "@/core/bots";
import { getAiPlayerModel } from "@/core/ai-lab/models";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import {
  CURRENT_FAMILY_START_SCENARIO,
  getAiLabScenario,
  getCurrentFamilyPairForAiLabSeries,
  getCurrentFamilyStarterCardIdsForAiLab,
} from "@/core/ai-lab/scenarios";
import { createAiLabMoveRecord } from "@/core/ai-lab/telemetry";
import { DEFAULT_DECK_PRESET_ID } from "@/core/config/decks";
import type {
  AiLabMatchResult,
  AiLabScenarioId,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import { applyMove, createMatch, passTurn } from "@/core/engine";
import type { PlayerId } from "@/core/types";
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

function getDecisionPolicyKey(modelId: AiPlayerModelId): string {
  const model = getAiPlayerModel(modelId);
  const resolvedBotId =
    model.botId === "champion" &&
    !(
      LIVE_CHAMPION_PROFILE.source === "trained" &&
      LIVE_CHAMPION_PROFILE.approved &&
      LIVE_CHAMPION_PROFILE.weights
    )
      ? "heuristic"
      : model.botId;

  return `${resolvedBotId}:d${model.searchDepth}:b${model.beamWidth}`;
}

function usesSameDecisionPolicy(matchup: [AiPlayerModelId, AiPlayerModelId]): boolean {
  return getDecisionPolicyKey(matchup[0]) === getDecisionPolicyKey(matchup[1]);
}

function remapEquivalentMatchResult(
  result: AiLabMatchResult,
  matchup: [AiPlayerModelId, AiPlayerModelId],
  matchIndex: number,
): AiLabMatchResult {
  const schedule = getSchedule(matchup, matchIndex);
  if (schedule.startingPlayer !== result.startingPlayer) {
    throw new Error("Cannot remap an AI lab match to a different starting player.");
  }

  return {
    ...result,
    matchIndex,
    modelBySeat: schedule.modelBySeat,
    winnerModelId: result.winnerSeat === "draw" ? "draw" : schedule.modelBySeat[result.winnerSeat],
    moveHistory: result.moveHistory.map((move) => ({
      ...move,
      modelId: schedule.modelBySeat[move.playerId],
    })),
  };
}

/**
 * Plays one deterministic AI-lab match with model-specific bot depth settings.
 */
export function simulateAiLabMatch(config: AiLabMatchConfig, matchIndex: number): AiLabMatchResult {
  const scenarioId = config.scenarioId ?? CURRENT_FAMILY_START_SCENARIO.id;
  const scenario = getAiLabScenario(scenarioId);
  const schedule = getSchedule(config.matchup, matchIndex);
  const balanceBlock = Math.floor(matchIndex / 4);
  const familyPair = getCurrentFamilyPairForAiLabSeries(config.matchup, matchIndex, config.seed);
  const matchSeed = mixSeed(config.seed, `${scenarioId}:${config.matchup.join("-")}:block:${balanceBlock}`);
  let decisionSeed = mixSeed(config.seed, `${scenarioId}:${config.matchup.join("-")}:decision-block:${balanceBlock}`);
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

    const nextState = applyMove(state, decision.move);
    moveHistory.push(createAiLabMoveRecord({ state, nextState, move: decision.move, modelId }));

    state = nextState;
  }

  return {
    matchIndex,
    source: "ladder",
    scenarioId,
    scenarioLabel: scenario.label,
    startingDeckCardCount: scenario.startingDeckCardCount,
    playerStarterFamily: familyPair.playerFamily,
    enemyStarterFamily: familyPair.enemyFamily,
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
  if (!usesSameDecisionPolicy(config.matchup)) {
    return Array.from({ length: config.matches }, (_, index) => simulateAiLabMatch(config, index));
  }

  const results: AiLabMatchResult[] = [];
  for (let blockStart = 0; blockStart < config.matches; blockStart += 4) {
    const remaining = config.matches - blockStart;
    if (remaining < 4) {
      for (let index = blockStart; index < config.matches; index += 1) {
        results.push(simulateAiLabMatch(config, index));
      }
      continue;
    }

    const playerStarts = simulateAiLabMatch(config, blockStart);
    const enemyStarts = simulateAiLabMatch(config, blockStart + 2);
    results.push(
      playerStarts,
      remapEquivalentMatchResult(playerStarts, config.matchup, blockStart + 1),
      enemyStarts,
      remapEquivalentMatchResult(enemyStarts, config.matchup, blockStart + 3),
    );
  }

  return results;
}
