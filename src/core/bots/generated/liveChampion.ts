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
  name: "trained-bot-20260524-194335",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-24T19:43:35.156Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.625,
  winRateVsChampion: 0.5625,
  averageHpEdge: 6.520833,
  campaignScoreVsHeuristic: 54.666667,
  campaignScoreVsChampion: 107,
  campaignBossReachVsHeuristic: 0,
  campaignBossReachVsChampion: 0.666667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 41.92,
    controlDiff: 8.6269,
    boardStrengthDiff: 26.4892,
    reserveStrengthDiff: 31.3207,
    handStrengthDiff: 20.2734,
    mobilityDiff: 7.9492,
    cornerControlDiff: 29.5562,
    occupiedBoardDiff: 25.6377,
    imminentRoundDamageDiff: -16.1401,
    activeTurnTempo: -27.5853,
    specialCardValue: -0.3077,
    deckTrimValue: -39.0588,
    eliteRouteBias: -53.4711,
    restRouteBias: -7.0215,
    forgeRouteBias: 8.846,
    treasureRouteBias: 19.5891,
    branchingRouteBias: 28.233,
    riskTolerance: 16.4663,
    aggressionPlanBias: 21.4857,
    controlPlanBias: 9.9515,
    tempoPlanBias: 3.5963,
    fusionPlanBias: 2.0425,
    precisionPlanBias: 4.9146,
    uncommonCardBias: 8.8228,
    rareCardBias: 23.2682,
    charmSynergyBias: 33.6376,
    duplicateCardPenalty: -14.3797,
    enemyProfileRespect: 16.5685,
  },
};
