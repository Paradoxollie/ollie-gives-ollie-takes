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
  name: "trained-bot-20260531-141401",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-31T14:14:01.931Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.5625,
  winRateVsChampion: 0.6875,
  averageHpEdge: 7.895833,
  campaignScoreVsHeuristic: 124.666667,
  campaignScoreVsChampion: 119,
  campaignBossReachVsHeuristic: 0.5,
  campaignBossReachVsChampion: 0.666667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 72.5319,
    controlDiff: 12.5217,
    boardStrengthDiff: 38.5084,
    reserveStrengthDiff: 58.3229,
    handStrengthDiff: 0.065,
    mobilityDiff: 10.6068,
    cornerControlDiff: 33.342,
    occupiedBoardDiff: 27.404,
    imminentRoundDamageDiff: -17.4582,
    activeTurnTempo: -14.9851,
    specialCardValue: 11.3747,
    deckTrimValue: -22.9578,
    eliteRouteBias: -63.922,
    restRouteBias: 4.1358,
    forgeRouteBias: 24.6666,
    treasureRouteBias: 23.8338,
    branchingRouteBias: 15.2248,
    riskTolerance: 42.6387,
    aggressionPlanBias: 19.4251,
    controlPlanBias: 24.0268,
    tempoPlanBias: -2.9346,
    fusionPlanBias: -6.229,
    precisionPlanBias: 1.2152,
    uncommonCardBias: 32.9435,
    rareCardBias: 38.671,
    charmSynergyBias: 55.4662,
    duplicateCardPenalty: 5.1876,
    enemyProfileRespect: 1.4597,
  },
};
