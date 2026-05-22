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
  name: "trained-bot-20260522-162805",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-22T16:28:05.488Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.5625,
  winRateVsChampion: 0.5,
  averageHpEdge: 8.166667,
  campaignScoreVsHeuristic: 46.666667,
  campaignScoreVsChampion: 51.666667,
  campaignBossReachVsHeuristic: 0,
  campaignBossReachVsChampion: 0,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 29.381433333333334,
    controlDiff: 12.244366666666666,
    boardStrengthDiff: 22.48196666666667,
    reserveStrengthDiff: 39.2159,
    handStrengthDiff: 11.075433333333331,
    mobilityDiff: 3.4373,
    cornerControlDiff: 28.449866666666665,
    occupiedBoardDiff: 18.421266666666668,
    imminentRoundDamageDiff: -5.196533333333334,
    activeTurnTempo: -13.959333333333333,
    specialCardValue: -23.497733333333333,
    deckTrimValue: -18.763066666666663,
    eliteRouteBias: -50.13653333333334,
    restRouteBias: -1.3675333333333333,
    forgeRouteBias: -2.0681,
    treasureRouteBias: 11.800666666666666,
    branchingRouteBias: 21.3028,
    riskTolerance: 15.204966666666666,
    aggressionPlanBias: 24.894499999999997,
    controlPlanBias: 17.666633333333333,
    tempoPlanBias: 2.7701666666666664,
    fusionPlanBias: 20.2655,
    precisionPlanBias: 6.066633333333333,
    uncommonCardBias: 2.3616333333333333,
    rareCardBias: 17.1281,
    charmSynergyBias: 41.8201,
    duplicateCardPenalty: -9.478900000000001,
    enemyProfileRespect: 33.409533333333336,
  },
};
