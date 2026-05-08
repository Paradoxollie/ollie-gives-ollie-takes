import { BOT_IDS } from "@/core/bots";
import type { BotId } from "@/core/bots";
import type { SimulationSummary, SimulatedMatchResult } from "@/core/sim/types";

function createBoardMatrix(size: number): number[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
}

function safeRate(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Aggregates raw self-play match outputs into report-friendly summary metrics.
 */
export function summarizeSeries(results: SimulatedMatchResult[]): SimulationSummary {
  if (results.length === 0) {
    throw new Error("Cannot summarize an empty simulation result set.");
  }

  const first = results[0];
  const botIds = new Set<BotId>(first.matchup);
  const botStats = Array.from(botIds).map((botId) => ({
    botId,
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winRate: 0,
  }));
  const overallDistribution = createBoardMatrix(first.boardSize);
  const byBotDistribution: Partial<Record<BotId, number[][]>> = {};
  const startingPlayer = {
    player: { games: 0, wins: 0, winRate: 0 },
    enemy: { games: 0, wins: 0, winRate: 0 },
    overallStartingPlayerWinRate: 0,
  };
  let totalTurns = 0;
  let totalRounds = 0;
  let totalFlips = 0;
  let totalControlDifference = 0;
  let totalRoundEndDamage = 0;
  let totalControlledCardsPlayer = 0;
  let totalControlledCardsEnemy = 0;
  let totalReshuffles = 0;
  let totalRoundEndOccupancy = 0;
  let totalRoundsCompleted = 0;
  let totalDeadTurns = 0;
  let totalFinalHpDifference = 0;
  let totalDraws = 0;
  let startingPlayerWins = 0;
  const resultReasons = {
    "champion-ko": 0,
    "double-ko": 0,
    stalemate: 0,
  } as SimulationSummary["resultReasons"];
  const endingSources = {
    "round-end-control": 0,
    "direct-damage": 0,
    stalemate: 0,
  } as SimulationSummary["endingSources"];

  for (const botId of BOT_IDS) {
    if (botIds.has(botId)) {
      byBotDistribution[botId] = createBoardMatrix(first.boardSize);
    }
  }

  for (const result of results) {
    totalTurns += result.turns;
    totalRounds += result.rounds;
    totalFlips += result.totalFlips;
    totalControlDifference += result.totalRoundEndControlDifference;
    totalRoundEndDamage += result.totalRoundEndDamage;
    totalControlledCardsPlayer += result.totalControlledCardsBySide.player;
    totalControlledCardsEnemy += result.totalControlledCardsBySide.enemy;
    totalReshuffles += result.totalReshuffles;
    totalRoundEndOccupancy += result.totalRoundEndOccupancy;
    totalRoundsCompleted += result.roundsCompleted;
    totalDeadTurns += result.deadTurns;
    totalFinalHpDifference += result.finalHpDifference;
    resultReasons[result.reason] += 1;
    endingSources[result.endingSource] += 1;
    startingPlayer[result.startingPlayer].games += 1;

    if (result.winnerSeat !== "draw") {
      const winnerBot = result.botBySeat[result.winnerSeat];
      const winnerStats = botStats.find((entry) => entry.botId === winnerBot);
      if (winnerStats) {
        winnerStats.wins += 1;
      }

      if (result.winnerSeat === result.startingPlayer) {
        startingPlayer[result.startingPlayer].wins += 1;
        startingPlayerWins += 1;
      }

      for (const botId of botIds) {
        const stats = botStats.find((entry) => entry.botId === botId);
        if (!stats) {
          continue;
        }

        stats.games += 1;
        if (botId !== winnerBot) {
          stats.losses += 1;
        }
      }
    } else {
      totalDraws += 1;
      for (const botId of botIds) {
        const stats = botStats.find((entry) => entry.botId === botId);
        if (!stats) {
          continue;
        }

        stats.games += 1;
        stats.draws += 1;
      }
    }

    for (const move of result.moveHistory) {
      overallDistribution[move.row][move.col] += 1;
      byBotDistribution[move.botId]![move.row][move.col] += 1;
    }
  }

  for (const stats of botStats) {
    stats.winRate = safeRate(stats.wins, stats.games);
  }

  startingPlayer.player.winRate = safeRate(startingPlayer.player.wins, startingPlayer.player.games);
  startingPlayer.enemy.winRate = safeRate(startingPlayer.enemy.wins, startingPlayer.enemy.games);
  startingPlayer.overallStartingPlayerWinRate = safeRate(startingPlayerWins, results.length);

  return {
    deckPresetId: first.deckPresetId,
    matchup: first.matchup,
    boardSize: first.boardSize,
    totalGames: results.length,
    drawRate: safeRate(totalDraws, results.length),
    botWinRates: botStats,
    startingPlayer,
    averages: {
      turns: totalTurns / results.length,
      rounds: totalRounds / results.length,
      flipsPerMatch: totalFlips / results.length,
      flipsPerTurn: safeRate(totalFlips, totalTurns),
      reshuffles: totalReshuffles / results.length,
      roundEndOccupancy: totalRoundsCompleted === 0 ? 0 : totalRoundEndOccupancy / totalRoundsCompleted,
      roundEndControlDifference: totalRoundsCompleted === 0 ? 0 : totalControlDifference / totalRoundsCompleted,
      roundEndDamage: totalRoundsCompleted === 0 ? 0 : totalRoundEndDamage / totalRoundsCompleted,
      controlledCardsPerRoundBySide: {
        player: totalRoundsCompleted === 0 ? 0 : totalControlledCardsPlayer / totalRoundsCompleted,
        enemy: totalRoundsCompleted === 0 ? 0 : totalControlledCardsEnemy / totalRoundsCompleted,
      },
      deadTurns: totalDeadTurns / results.length,
      finalHpDifference: totalFinalHpDifference / results.length,
    },
    deadTurnFrequency: safeRate(totalDeadTurns, totalTurns),
    moveDistribution: {
      overall: overallDistribution,
      byBot: byBotDistribution,
    },
    resultReasons,
    endingSources,
  };
}
