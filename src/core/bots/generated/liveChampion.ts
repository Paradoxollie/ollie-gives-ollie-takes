import type { TrainedBotWeights } from "@/core/types";

export interface LiveChampionProfile {
  name: string;
  source: "heuristic" | "trained";
  approved: boolean;
  promotedAt: string;
  benchmarkMatchesPerOpponent: number;
  winRateVsHeuristic: number;
  winRateVsChampion: number;
  averageHpEdge: number;
  campaignScoreVsHeuristic: number;
  campaignScoreVsChampion: number;
  campaignBossReachVsHeuristic: number;
  campaignBossReachVsChampion: number;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights | null;
}

export const LIVE_CHAMPION_PROFILE: LiveChampionProfile = {
  name: "heuristic-guardrail-20260603",
  source: "heuristic",
  approved: false,
  promotedAt: "2026-06-03T07:01:00.000Z",
  benchmarkMatchesPerOpponent: 0,
  winRateVsHeuristic: 0,
  winRateVsChampion: 0,
  averageHpEdge: 0,
  campaignScoreVsHeuristic: 0,
  campaignScoreVsChampion: 0,
  campaignBossReachVsHeuristic: 0,
  campaignBossReachVsChampion: 0,
  searchDepth: 3,
  beamWidth: 12,
  weights: null,
};
