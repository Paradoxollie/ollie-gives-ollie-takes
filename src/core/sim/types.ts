import type { BotId } from "@/core/bots";
import type { BattleResult, ControlTotals, DeckPresetId, MatchEndSource, MatchOutcome, PlayerId } from "@/core/types";

export interface SimulationSeriesConfig {
  matches: number;
  seed: number;
  deckPresetId: DeckPresetId;
  matchup: [BotId, BotId];
}

export interface SimulatedMoveRecord {
  turn: number;
  round: number;
  roundTurn: number;
  botId: BotId;
  playerId: PlayerId;
  row: number;
  col: number;
  flippedCount: number;
  roundEnded: boolean;
  roundEndControl: ControlTotals;
  roundEndDamage: Record<PlayerId, number>;
  lethal: boolean;
}

export interface SimulatedMatchResult {
  matchIndex: number;
  deckPresetId: DeckPresetId;
  matchup: [BotId, BotId];
  boardSize: number;
  botBySeat: Record<PlayerId, BotId>;
  startingPlayer: PlayerId;
  winnerSeat: MatchOutcome;
  winnerBotId: BotId | "draw";
  reason: BattleResult["reason"];
  endingSource: MatchEndSource;
  turns: number;
  rounds: number;
  roundsCompleted: number;
  totalFlips: number;
  totalRoundEndControlDifference: number;
  totalRoundEndDamage: number;
  totalControlledCardsBySide: ControlTotals;
  totalReshuffles: number;
  totalRoundEndOccupancy: number;
  averageRoundEndOccupancy: number;
  deadTurns: number;
  finalChampionHealth: Record<PlayerId, number>;
  finalHpDifference: number;
  moveHistory: SimulatedMoveRecord[];
  matchSeed: number;
  decisionSeed: number;
}

export interface WinRateByBot {
  botId: BotId;
  games: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
}

export interface StartingPlayerStats {
  player: {
    games: number;
    wins: number;
    winRate: number;
  };
  enemy: {
    games: number;
    wins: number;
    winRate: number;
  };
  overallStartingPlayerWinRate: number;
}

export interface MoveDistribution {
  overall: number[][];
  byBot: Partial<Record<BotId, number[][]>>;
}

export interface SimulationSummary {
  deckPresetId: DeckPresetId;
  matchup: [BotId, BotId];
  boardSize: number;
  totalGames: number;
  drawRate: number;
  botWinRates: WinRateByBot[];
  startingPlayer: StartingPlayerStats;
  averages: {
    turns: number;
    rounds: number;
    flipsPerMatch: number;
    flipsPerTurn: number;
    reshuffles: number;
    roundEndOccupancy: number;
    roundEndControlDifference: number;
    roundEndDamage: number;
    controlledCardsPerRoundBySide: ControlTotals;
    deadTurns: number;
    finalHpDifference: number;
  };
  deadTurnFrequency: number;
  moveDistribution: MoveDistribution;
  resultReasons: Record<BattleResult["reason"], number>;
  endingSources: Record<MatchEndSource, number>;
}

export interface SimulationReport {
  reportId: string;
  generatedAt: string;
  config: {
    matchesPerSeries: number;
    seed: number;
    requestedDeckPreset: DeckPresetId;
    matchup: [BotId, BotId];
  };
  primarySummary: SimulationSummary;
  deckComparison: SimulationSummary[];
  interpretation: string[];
}
