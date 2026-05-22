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
  name: "trained-bot-20260522-201405",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-22T20:14:05.322Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.625,
  winRateVsChampion: 0.625,
  averageHpEdge: 10.208333,
  campaignScoreVsHeuristic: 81,
  campaignScoreVsChampion: 71.666667,
  campaignBossReachVsHeuristic: 0.166667,
  campaignBossReachVsChampion: 0,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 31.1517,
    controlDiff: 10.9244,
    boardStrengthDiff: 25.7948,
    reserveStrengthDiff: 37.0603,
    handStrengthDiff: 15.2646,
    mobilityDiff: -0.1612,
    cornerControlDiff: 28.6719,
    occupiedBoardDiff: 20.4003,
    imminentRoundDamageDiff: -7.3172,
    activeTurnTempo: -12.2707,
    specialCardValue: -21.2356,
    deckTrimValue: -21.962,
    eliteRouteBias: -53.4021,
    restRouteBias: -0.4641,
    forgeRouteBias: 4.6885,
    treasureRouteBias: 17.6128,
    branchingRouteBias: 19.8835,
    riskTolerance: 16.2745,
    aggressionPlanBias: 28.8581,
    controlPlanBias: 22.1148,
    tempoPlanBias: 0.5779,
    fusionPlanBias: 18.2123,
    precisionPlanBias: 3.2738,
    uncommonCardBias: 9.3203,
    rareCardBias: 19.0399,
    charmSynergyBias: 40.4253,
    duplicateCardPenalty: -16.3507,
    enemyProfileRespect: 33.9418,
  },
};
