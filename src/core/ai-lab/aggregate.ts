import type {
  AiLabDeckSummary,
  AiLabMatchResult,
  AiLabModelSummary,
  AiLabPairingSummary,
  AiLabStarterFamilyMatchupSummary,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import type { CardFamily, PlayerId } from "@/core/types";

function safeRate(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Summarizes balanced starter-deck matchups independently from player-model strength.
 */
export function summarizeAiLabStarterFamilyMatchups(
  results: AiLabMatchResult[],
): AiLabStarterFamilyMatchupSummary[] {
  const matchups = new Map<string, Omit<AiLabStarterFamilyMatchupSummary, "leftWinRate" | "rightWinRate">>();

  for (const result of results) {
    const playerFamily = result.playerStarterFamily;
    const enemyFamily = result.enemyStarterFamily;
    if (!playerFamily || !enemyFamily || playerFamily === enemyFamily) {
      continue;
    }

    const [leftFamily, rightFamily] = [playerFamily, enemyFamily].sort() as [CardFamily, CardFamily];
    const id = `${leftFamily}-vs-${rightFamily}`;
    const matchup = matchups.get(id) ?? {
      id,
      leftFamily,
      rightFamily,
      games: 0,
      leftWins: 0,
      rightWins: 0,
      draws: 0,
    };
    matchup.games += 1;

    if (result.winnerSeat === "draw") {
      matchup.draws += 1;
    } else {
      const winnerFamily = result.winnerSeat === "player" ? playerFamily : enemyFamily;
      if (winnerFamily === leftFamily) {
        matchup.leftWins += 1;
      } else {
        matchup.rightWins += 1;
      }
    }

    matchups.set(id, matchup);
  }

  return Array.from(matchups.values())
    .map((matchup) => ({
      ...matchup,
      leftWinRate: safeRate(matchup.leftWins, matchup.games),
      rightWinRate: safeRate(matchup.rightWins, matchup.games),
    }))
    .sort(
      (left, right) =>
        right.games - left.games ||
        Math.abs(right.leftWinRate - right.rightWinRate) - Math.abs(left.leftWinRate - left.rightWinRate) ||
        left.id.localeCompare(right.id),
    );
}

function getHpEdgeForModel(result: AiLabMatchResult, modelId: AiPlayerModelId): number {
  const seats = Object.entries(result.modelBySeat) as Array<[PlayerId, AiPlayerModelId]>;
  const seat = seats.find(([, seatModelId]) => seatModelId === modelId)?.[0] ?? null;
  if (!seat) {
    return 0;
  }

  const opponentSeat: PlayerId = seat === "player" ? "enemy" : "player";
  return result.finalChampionHealth[seat] - result.finalChampionHealth[opponentSeat];
}

function createModelSummary(modelId: AiPlayerModelId): AiLabModelSummary {
  return {
    modelId,
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winRate: 0,
    averageHpEdge: 0,
  };
}

/**
 * Aggregates deterministic AI-lab matches by model id rather than raw bot id.
 */
export function summarizeAiLabPairing(results: AiLabMatchResult[]): AiLabPairingSummary {
  if (results.length === 0) {
    throw new Error("Cannot summarize an empty AI lab result set.");
  }

  const first = results[0];
  const modelIds = Array.from(new Set(first.matchup));
  const modelSummaries = new Map<AiPlayerModelId, AiLabModelSummary>(
    modelIds.map((modelId) => [modelId, createModelSummary(modelId)]),
  );
  const startingPlayer = {
    player: { games: 0, wins: 0, winRate: 0 },
    enemy: { games: 0, wins: 0, winRate: 0 },
    overallStartingPlayerWinRate: 0,
  };
  let totalTurns = 0;
  let totalRounds = 0;
  let totalFlips = 0;
  let totalReshuffles = 0;
  let totalDeadTurns = 0;
  let totalFinalHpDifference = 0;
  let totalDraws = 0;
  let startingPlayerWins = 0;

  for (const result of results) {
    totalTurns += result.turns;
    totalRounds += result.rounds;
    totalFlips += result.totalFlips;
    totalReshuffles += result.totalReshuffles;
    totalDeadTurns += result.deadTurns;
    totalFinalHpDifference += result.finalHpDifference;
    startingPlayer[result.startingPlayer].games += 1;

    for (const modelId of modelIds) {
      const summary = modelSummaries.get(modelId);
      if (!summary) {
        continue;
      }

      summary.games += 1;
      summary.averageHpEdge += getHpEdgeForModel(result, modelId);
    }

    if (result.winnerSeat === "draw") {
      totalDraws += 1;
      for (const modelId of modelIds) {
        const summary = modelSummaries.get(modelId);
        if (summary) {
          summary.draws += 1;
        }
      }
      continue;
    }

    if (result.winnerSeat === result.startingPlayer) {
      startingPlayer[result.startingPlayer].wins += 1;
      startingPlayerWins += 1;
    }

    const winnerModelId = result.modelBySeat[result.winnerSeat];
    for (const modelId of modelIds) {
      const summary = modelSummaries.get(modelId);
      if (!summary) {
        continue;
      }

      if (modelId === winnerModelId && modelIds.length > 1) {
        summary.wins += 1;
      } else if (modelIds.length > 1) {
        summary.losses += 1;
      }
    }
  }

  for (const summary of modelSummaries.values()) {
    summary.winRate = safeRate(summary.wins, summary.games);
    summary.averageHpEdge = safeRate(summary.averageHpEdge, summary.games);
  }

  startingPlayer.player.winRate = safeRate(startingPlayer.player.wins, startingPlayer.player.games);
  startingPlayer.enemy.winRate = safeRate(startingPlayer.enemy.wins, startingPlayer.enemy.games);
  startingPlayer.overallStartingPlayerWinRate = safeRate(startingPlayerWins, results.length);

  return {
    scenarioId: first.scenarioId,
    scenarioLabel: first.scenarioLabel,
    startingDeckCardCount: first.startingDeckCardCount,
    matchup: first.matchup,
    totalGames: results.length,
    drawRate: safeRate(totalDraws, results.length),
    startingPlayer,
    modelSummaries: Array.from(modelSummaries.values()),
    averages: {
      turns: totalTurns / results.length,
      rounds: totalRounds / results.length,
      flipsPerMatch: totalFlips / results.length,
      flipsPerTurn: safeRate(totalFlips, totalTurns),
      reshuffles: totalReshuffles / results.length,
      deadTurns: totalDeadTurns / results.length,
      finalHpDifference: totalFinalHpDifference / results.length,
    },
    deadTurnFrequency: safeRate(totalDeadTurns, totalTurns),
  };
}

function deckStatusFromNotes(notes: string[]): AiLabDeckSummary["status"] {
  if (notes.some((note) => note.startsWith("[problem]"))) {
    return "problem";
  }

  if (notes.some((note) => note.startsWith("[watch]"))) {
    return "watch";
  }

  return "healthy";
}

function cleanNote(note: string): string {
  return note.replace(/^\[(problem|watch|ok)\]\s*/, "");
}

/**
 * Converts a mirror-match summary into a deck-balance row for the lab report.
 */
export function summarizeAiLabDeck(
  mirrorModelId: AiPlayerModelId,
  mirrorSummary: AiLabPairingSummary,
): AiLabDeckSummary {
  const notes: string[] = [];
  const firstPlayerWinRate = mirrorSummary.startingPlayer.overallStartingPlayerWinRate;
  const hasEnoughMirrorGamesForStrongOpeningCall = mirrorSummary.totalGames >= 32;

  if (firstPlayerWinRate >= 0.62 || firstPlayerWinRate <= 0.38) {
    const severity = hasEnoughMirrorGamesForStrongOpeningCall ? "problem" : "watch";
    notes.push(`[${severity}] Avantage premier joueur a confirmer (${Math.round(firstPlayerWinRate * 100)}%).`);
  } else if (firstPlayerWinRate >= 0.57 || firstPlayerWinRate <= 0.43) {
    notes.push(`[watch] Avantage premier joueur a surveiller (${Math.round(firstPlayerWinRate * 100)}%).`);
  } else {
    notes.push("[ok] Ouverture stable sur ce depart.");
  }

  if (mirrorSummary.drawRate >= 0.2) {
    notes.push(`[problem] Trop d'egalites (${Math.round(mirrorSummary.drawRate * 100)}%).`);
  } else if (mirrorSummary.drawRate >= 0.12) {
    notes.push(`[watch] Egalites visibles (${Math.round(mirrorSummary.drawRate * 100)}%).`);
  }

  if (mirrorSummary.deadTurnFrequency >= 0.12) {
    notes.push(`[problem] Tours morts frequents (${Math.round(mirrorSummary.deadTurnFrequency * 100)}%).`);
  } else if (mirrorSummary.deadTurnFrequency >= 0.07) {
    notes.push(`[watch] Tours morts a surveiller (${Math.round(mirrorSummary.deadTurnFrequency * 100)}%).`);
  }

  if (mirrorSummary.averages.flipsPerTurn < 0.22) {
    notes.push(`[watch] Peu de flips par tour (${mirrorSummary.averages.flipsPerTurn.toFixed(2)}).`);
  }

  return {
    scenarioId: mirrorSummary.scenarioId,
    scenarioLabel: mirrorSummary.scenarioLabel,
    startingDeckCardCount: mirrorSummary.startingDeckCardCount,
    mirrorModelId,
    totalGames: mirrorSummary.totalGames,
    drawRate: mirrorSummary.drawRate,
    startingPlayerWinRate: firstPlayerWinRate,
    averages: { ...mirrorSummary.averages },
    deadTurnFrequency: mirrorSummary.deadTurnFrequency,
    status: deckStatusFromNotes(notes),
    notes: notes.map(cleanNote),
  };
}
