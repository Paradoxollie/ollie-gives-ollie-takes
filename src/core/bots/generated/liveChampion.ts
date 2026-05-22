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
  name: "trained-bot-20260522-043905",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-22T04:39:05.595Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.5625,
  winRateVsChampion: 0.5,
  averageHpEdge: 8.104167,
  campaignScoreVsHeuristic: 52.666667,
  campaignScoreVsChampion: 52,
  campaignBossReachVsHeuristic: 0,
  campaignBossReachVsChampion: 0,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 33.0812,
    controlDiff: 14.715,
    boardStrengthDiff: 22.9385,
    reserveStrengthDiff: 38.1374,
    handStrengthDiff: 3.8606,
    mobilityDiff: 10.2464,
    cornerControlDiff: 41.4735,
    occupiedBoardDiff: 12.156,
    imminentRoundDamageDiff: -8.695,
    activeTurnTempo: -20.6181,
    specialCardValue: -25.5991,
    deckTrimValue: -18.2461,
    eliteRouteBias: -44.4199,
    restRouteBias: 5.3947,
    forgeRouteBias: -12.3131,
    treasureRouteBias: 15.8858,
    branchingRouteBias: 22.3297,
    riskTolerance: 13.7319,
    aggressionPlanBias: 31.7319,
    controlPlanBias: 16.6299,
    tempoPlanBias: 4.7828,
    fusionPlanBias: 18.6398,
    precisionPlanBias: 4.2068,
    uncommonCardBias: 3.8677,
    rareCardBias: 11.6884,
    charmSynergyBias: 45.4066,
    duplicateCardPenalty: -10.1013,
    enemyProfileRespect: 34.0896,
  },
};
