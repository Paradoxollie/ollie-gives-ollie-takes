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
  name: "trained-bot-20260527-203104",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-27T20:31:04.641Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.5625,
  winRateVsChampion: 0.5625,
  averageHpEdge: 6.104167,
  campaignScoreVsHeuristic: 60.666667,
  campaignScoreVsChampion: 61.666667,
  campaignBossReachVsHeuristic: 0.166667,
  campaignBossReachVsChampion: 0.166667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 61.0954,
    controlDiff: 15.038,
    boardStrengthDiff: 27.2737,
    reserveStrengthDiff: 34.1267,
    handStrengthDiff: 3.8421,
    mobilityDiff: -2.3918,
    cornerControlDiff: 36.103,
    occupiedBoardDiff: 20.3162,
    imminentRoundDamageDiff: -28.0961,
    activeTurnTempo: -25.304,
    specialCardValue: 0.2691,
    deckTrimValue: -30.7629,
    eliteRouteBias: -65.4865,
    restRouteBias: -13.4822,
    forgeRouteBias: 9.5234,
    treasureRouteBias: 20.4702,
    branchingRouteBias: 20.2418,
    riskTolerance: 39.509,
    aggressionPlanBias: 10.8035,
    controlPlanBias: 27.0457,
    tempoPlanBias: -9.0137,
    fusionPlanBias: 15.8979,
    precisionPlanBias: 10.534,
    uncommonCardBias: 7.2264,
    rareCardBias: 24.935,
    charmSynergyBias: 37.2101,
    duplicateCardPenalty: -18.866,
    enemyProfileRespect: 20.4536,
  },
};
