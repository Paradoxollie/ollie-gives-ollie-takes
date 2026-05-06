import { getEnemyProfile } from "@/core/config/enemyProfiles";
import { applyAutomatedPlayerCharmActions } from "@/core/player-charms";
import { applyMove, createMatch, passTurn } from "@/core/engine";
import { mixSeed } from "@/core/utils/rng";
import { getBotTrainingScenarios, type BotTrainingScenario } from "@/core/training/scenarios";
import type { Bot } from "@/core/bots";
import type { MatchOutcome, PlayerId, TrainedBotWeights } from "@/core/types";

export interface ConfiguredBotSpec {
  id: string;
  label: string;
  bot: Bot;
  searchDepth?: number;
  beamWidth?: number;
  weights?: TrainedBotWeights | null;
}

export interface HeadToHeadScenarioResult {
  scenarioId: string;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  averageHpEdge: number;
}

export interface HeadToHeadSummary {
  opponentId: string;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number;
  averageHpEdge: number;
  scenarios: HeadToHeadScenarioResult[];
}

export interface BotBenchmarkSummary {
  candidateId: string;
  totalMatches: number;
  totalWins: number;
  totalDraws: number;
  totalLosses: number;
  overallWinRate: number;
  averageHpEdge: number;
  opponents: HeadToHeadSummary[];
}

interface MatchSeatSpec {
  bot: ConfiguredBotSpec;
  playerId: PlayerId;
}

function getSeatSchedule(candidate: ConfiguredBotSpec, opponent: ConfiguredBotSpec, matchIndex: number) {
  const cycle = matchIndex % 4;

  if (cycle === 0) {
    return {
      startingPlayer: "player" as const,
      playerSeat: { bot: candidate, playerId: "player" as const },
      enemySeat: { bot: opponent, playerId: "enemy" as const },
    };
  }

  if (cycle === 1) {
    return {
      startingPlayer: "player" as const,
      playerSeat: { bot: opponent, playerId: "player" as const },
      enemySeat: { bot: candidate, playerId: "enemy" as const },
    };
  }

  if (cycle === 2) {
    return {
      startingPlayer: "enemy" as const,
      playerSeat: { bot: candidate, playerId: "player" as const },
      enemySeat: { bot: opponent, playerId: "enemy" as const },
    };
  }

  return {
    startingPlayer: "enemy" as const,
    playerSeat: { bot: opponent, playerId: "player" as const },
    enemySeat: { bot: candidate, playerId: "enemy" as const },
  };
}

function playConfiguredMatch(options: {
  seed: number;
  scenario: BotTrainingScenario;
  candidate: ConfiguredBotSpec;
  opponent: ConfiguredBotSpec;
  matchIndex: number;
}): { winner: MatchOutcome; hpEdge: number; scenarioId: string } {
  const schedule = getSeatSchedule(options.candidate, options.opponent, options.matchIndex);
  const candidateSeat = schedule.playerSeat.bot.id === options.candidate.id ? "player" : "enemy";
  let state = createMatch({
    deckPresetId: "starter10",
    seed: options.seed,
    startingPlayer: schedule.startingPlayer,
    playerCardIds: options.scenario.playerCardIds,
    enemyCardIds: options.scenario.enemyCardIds,
    playerCharmIds: options.scenario.playerCharmIds,
    enemyProfile: options.scenario.enemyProfileId ? getEnemyProfile(options.scenario.enemyProfileId) : null,
  });

  while (!state.result) {
    if (state.turn.activePlayer === "player" && state.playerCharms.length > 0) {
      state = applyAutomatedPlayerCharmActions(state, schedule.playerSeat.bot.weights ?? null);
    }

    if (state.turn.choices.length === 0) {
      state = passTurn(state);
      continue;
    }

    const activeSeat: MatchSeatSpec = state.turn.activePlayer === "player" ? schedule.playerSeat : schedule.enemySeat;
    const decision = activeSeat.bot.bot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: state.rngState,
      searchDepth: activeSeat.bot.searchDepth,
      beamWidth: activeSeat.bot.beamWidth,
    });

    state = decision.move ? applyMove(state, decision.move) : passTurn(state);
  }

  const hpEdge =
    candidateSeat === "player"
      ? state.champions.player.health - state.champions.enemy.health
      : state.champions.enemy.health - state.champions.player.health;

  return {
    winner: state.result.winner,
    hpEdge,
    scenarioId: options.scenario.id,
  };
}

function createEmptyScenarioSummary(scenarioId: string): HeadToHeadScenarioResult {
  return {
    scenarioId,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    averageHpEdge: 0,
  };
}

export function benchmarkBotAgainstOpponents(options: {
  seed: number;
  candidate: ConfiguredBotSpec;
  opponents: ConfiguredBotSpec[];
  matchesPerOpponent: number;
  scenarios?: BotTrainingScenario[];
}): BotBenchmarkSummary {
  const scenarios = options.scenarios ?? getBotTrainingScenarios();
  const summaries: HeadToHeadSummary[] = [];
  let totalWins = 0;
  let totalDraws = 0;
  let totalLosses = 0;
  let totalHpEdge = 0;

  for (const opponent of options.opponents) {
    const scenarioSummaries = new Map<string, HeadToHeadScenarioResult>(
      scenarios.map((scenario) => [scenario.id, createEmptyScenarioSummary(scenario.id)]),
    );
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let hpEdge = 0;

    for (let matchIndex = 0; matchIndex < options.matchesPerOpponent; matchIndex += 1) {
      const scenario = scenarios[matchIndex % scenarios.length];
      const schedule = getSeatSchedule(options.candidate, opponent, matchIndex);
      const seed = mixSeed(
        options.seed,
        `benchmark:${options.candidate.id}:vs:${opponent.id}:scenario:${scenario.id}:match:${matchIndex}`,
      );
      const result = playConfiguredMatch({
        seed,
        scenario,
        candidate: options.candidate,
        opponent,
        matchIndex,
      });

      const scenarioSummary = scenarioSummaries.get(result.scenarioId);
      if (!scenarioSummary) {
        throw new Error(`Missing scenario summary for ${result.scenarioId}.`);
      }

      scenarioSummary.matches += 1;
      scenarioSummary.averageHpEdge += result.hpEdge;
      hpEdge += result.hpEdge;
      totalHpEdge += result.hpEdge;

      if (
        (result.winner === "player" && schedule.playerSeat.bot.id === options.candidate.id) ||
        (result.winner === "enemy" && schedule.enemySeat.bot.id === options.candidate.id)
      ) {
        wins += 1;
        totalWins += 1;
        scenarioSummary.wins += 1;
      } else if (result.winner === "draw") {
        draws += 1;
        totalDraws += 1;
        scenarioSummary.draws += 1;
      } else {
        losses += 1;
        totalLosses += 1;
        scenarioSummary.losses += 1;
      }
    }

    const orderedScenarios = Array.from(scenarioSummaries.values()).map((scenarioSummary) => ({
      ...scenarioSummary,
      averageHpEdge: scenarioSummary.matches === 0 ? 0 : scenarioSummary.averageHpEdge / scenarioSummary.matches,
    }));

    summaries.push({
      opponentId: opponent.id,
      matches: options.matchesPerOpponent,
      wins,
      draws,
      losses,
      winRate: options.matchesPerOpponent === 0 ? 0 : wins / options.matchesPerOpponent,
      averageHpEdge: options.matchesPerOpponent === 0 ? 0 : hpEdge / options.matchesPerOpponent,
      scenarios: orderedScenarios,
    });
  }

  const totalMatches = options.opponents.length * options.matchesPerOpponent;

  return {
    candidateId: options.candidate.id,
    totalMatches,
    totalWins,
    totalDraws,
    totalLosses,
    overallWinRate: totalMatches === 0 ? 0 : totalWins / totalMatches,
    averageHpEdge: totalMatches === 0 ? 0 : totalHpEdge / totalMatches,
    opponents: summaries,
  };
}
