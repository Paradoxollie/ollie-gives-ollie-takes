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
  name: "trained-bot-20260819-191109",
  source: "trained",
  approved: true,
  promotedAt: "2026-08-19T19:11:09.970Z",
  benchmarkMatchesPerOpponent: 28,
  winRateVsHeuristic: 0.607143,
  winRateVsChampion: 0.571429,
  averageHpEdge: 5.75,
  campaignScoreVsHeuristic: 123,
  campaignScoreVsChampion: 95.5,
  campaignBossReachVsHeuristic: 0.375,
  campaignBossReachVsChampion: 0.625,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 114.0679,
    shieldDiff: 104.2507,
    drawBonusDiff: 49.5491,
    manaBonusDiff: 104.1821,
    poisonDiff: 75.1573,
    controlDiff: 85.8152,
    boardStrengthDiff: 15.2029,
    boardManaDiff: 46.0739,
    stackSynergyDiff: 12.0493,
    reserveStrengthDiff: -9.7418,
    handStrengthDiff: 47.4138,
    mobilityDiff: -6.5718,
    cornerControlDiff: 6.3597,
    occupiedBoardDiff: 3.0435,
    imminentRoundDamageDiff: 63.949,
    activeTurnTempo: 38.6771,
    specialCardValue: 11.8477,
    deckTrimValue: 3.6371,
    eliteRouteBias: 5.5644,
    restRouteBias: 9.8941,
    forgeRouteBias: 8.7808,
    treasureRouteBias: 9.127,
    branchingRouteBias: 4.9008,
    riskTolerance: -0.0959,
    aggressionPlanBias: -8.3562,
    controlPlanBias: 13.9662,
    tempoPlanBias: 12.4489,
    fusionPlanBias: -0.8027,
    precisionPlanBias: -5.2638,
    uncommonCardBias: -1.4627,
    rareCardBias: -2.161,
    charmSynergyBias: 2.2515,
    duplicateCardPenalty: 5.0182,
    enemyProfileRespect: 7.572,
  },
};
