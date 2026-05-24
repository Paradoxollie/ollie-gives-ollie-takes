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
  name: "trained-bot-20260524-130916",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-24T13:09:16.080Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.625,
  winRateVsChampion: 0.5,
  averageHpEdge: 7.9375,
  campaignScoreVsHeuristic: 49,
  campaignScoreVsChampion: 62.666667,
  campaignBossReachVsHeuristic: 0.166667,
  campaignBossReachVsChampion: 0.166667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 37.4913,
    controlDiff: 14.709,
    boardStrengthDiff: 24.6413,
    reserveStrengthDiff: 37.0118,
    handStrengthDiff: 18.148,
    mobilityDiff: 4.4149,
    cornerControlDiff: 29.1195,
    occupiedBoardDiff: 15.3359,
    imminentRoundDamageDiff: -7.8973,
    activeTurnTempo: -19.5565,
    specialCardValue: -2.2167,
    deckTrimValue: -40.1942,
    eliteRouteBias: -52.3866,
    restRouteBias: -9.322,
    forgeRouteBias: -0.3379,
    treasureRouteBias: 17.7729,
    branchingRouteBias: 23.9243,
    riskTolerance: 22.1999,
    aggressionPlanBias: 27.9585,
    controlPlanBias: 9.905,
    tempoPlanBias: 6.4986,
    fusionPlanBias: 16.6299,
    precisionPlanBias: 5.8211,
    uncommonCardBias: 13.3292,
    rareCardBias: 22.953,
    charmSynergyBias: 42.4068,
    duplicateCardPenalty: -16.0847,
    enemyProfileRespect: 22.3069,
  },
};
