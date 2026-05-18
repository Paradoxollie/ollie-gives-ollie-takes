import type { BotId } from "@/core/bots";
import type { BattleResult, DeckPresetId, MatchOutcome, PlayerId } from "@/core/types";

export const AI_PLAYER_MODEL_IDS = ["beginner", "opportunist", "regular", "expert", "champion"] as const;

export type AiPlayerModelId = (typeof AI_PLAYER_MODEL_IDS)[number];

export type AiLabInsightSeverity = "info" | "watch" | "problem";

export interface AiPlayerModel {
  id: AiPlayerModelId;
  label: string;
  skillLabel: string;
  rank: number;
  botId: BotId;
  searchDepth: number;
  beamWidth: number;
  description: string;
}

export interface AiLabRunConfig {
  matchesPerPairing: number;
  seed: number;
  deckPresetIds: DeckPresetId[];
  modelIds: AiPlayerModelId[];
}

export interface AiLabMoveRecord {
  turn: number;
  round: number;
  roundTurn: number;
  modelId: AiPlayerModelId;
  playerId: PlayerId;
  row: number;
  col: number;
  flippedCount: number;
  roundEnded: boolean;
}

export interface AiLabMatchResult {
  matchIndex: number;
  deckPresetId: DeckPresetId;
  matchup: [AiPlayerModelId, AiPlayerModelId];
  boardSize: number;
  modelBySeat: Record<PlayerId, AiPlayerModelId>;
  startingPlayer: PlayerId;
  winnerSeat: MatchOutcome;
  winnerModelId: AiPlayerModelId | "draw";
  reason: BattleResult["reason"];
  turns: number;
  rounds: number;
  roundsCompleted: number;
  totalFlips: number;
  totalReshuffles: number;
  deadTurns: number;
  finalChampionHealth: Record<PlayerId, number>;
  finalHpDifference: number;
  moveHistory: AiLabMoveRecord[];
  matchSeed: number;
  decisionSeed: number;
}

export interface AiLabModelSummary {
  modelId: AiPlayerModelId;
  games: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  averageHpEdge: number;
}

export interface AiLabStartingPlayerSummary {
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

export interface AiLabPairingSummary {
  deckPresetId: DeckPresetId;
  matchup: [AiPlayerModelId, AiPlayerModelId];
  totalGames: number;
  drawRate: number;
  startingPlayer: AiLabStartingPlayerSummary;
  modelSummaries: AiLabModelSummary[];
  averages: {
    turns: number;
    rounds: number;
    flipsPerMatch: number;
    flipsPerTurn: number;
    reshuffles: number;
    deadTurns: number;
    finalHpDifference: number;
  };
  deadTurnFrequency: number;
}

export interface AiLabDeckSummary {
  deckPresetId: DeckPresetId;
  mirrorModelId: AiPlayerModelId;
  totalGames: number;
  drawRate: number;
  startingPlayerWinRate: number;
  averages: {
    turns: number;
    rounds: number;
    flipsPerMatch: number;
    flipsPerTurn: number;
    reshuffles: number;
    deadTurns: number;
    finalHpDifference: number;
  };
  deadTurnFrequency: number;
  status: "healthy" | "watch" | "problem";
  notes: string[];
}

export interface AiLabInsight {
  id: string;
  severity: AiLabInsightSeverity;
  title: string;
  detail: string;
  recommendation: string;
}

export interface AiLabReport {
  reportId: string;
  generatedAt: string;
  config: AiLabRunConfig;
  playerModels: AiPlayerModel[];
  skillSummaries: AiLabModelSummary[];
  deckSummaries: AiLabDeckSummary[];
  ladderPairings: AiLabPairingSummary[];
  insights: AiLabInsight[];
}
