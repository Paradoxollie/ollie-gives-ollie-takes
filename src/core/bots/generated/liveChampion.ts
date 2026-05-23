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
  name: "trained-bot-20260523-194049",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-23T19:40:49.638Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.6875,
  winRateVsChampion: 0.75,
  averageHpEdge: 12.229167,
  campaignScoreVsHeuristic: 165.666667,
  campaignScoreVsChampion: 142.333333,
  campaignBossReachVsHeuristic: 0.833333,
  campaignBossReachVsChampion: 0.666667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 32.8679,
    controlDiff: 13.6836,
    boardStrengthDiff: 25.6007,
    reserveStrengthDiff: 38.6486,
    handStrengthDiff: 18.6106,
    mobilityDiff: 0.6098,
    cornerControlDiff: 18.1614,
    occupiedBoardDiff: 20.3051,
    imminentRoundDamageDiff: -2.72,
    activeTurnTempo: -16.0564,
    specialCardValue: -12.1922,
    deckTrimValue: -30.1485,
    eliteRouteBias: -47.7245,
    restRouteBias: -2.8404,
    forgeRouteBias: -2.2333,
    treasureRouteBias: 14.0394,
    branchingRouteBias: 19.9559,
    riskTolerance: 17.2674,
    aggressionPlanBias: 32.0576,
    controlPlanBias: 13.9565,
    tempoPlanBias: 5.8897,
    fusionPlanBias: 18.7156,
    precisionPlanBias: 5.9282,
    uncommonCardBias: 8.5358,
    rareCardBias: 19.1672,
    charmSynergyBias: 39.7459,
    duplicateCardPenalty: -17.2456,
    enemyProfileRespect: 23.2097,
  },
};
