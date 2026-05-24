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
  name: "trained-bot-20260524-140438",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-24T14:04:38.970Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.5625,
  winRateVsChampion: 0.625,
  averageHpEdge: 8.333333,
  campaignScoreVsHeuristic: 62.333333,
  campaignScoreVsChampion: 154.666667,
  campaignBossReachVsHeuristic: 0,
  campaignBossReachVsChampion: 0.666667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 36.5411,
    controlDiff: 15.9738,
    boardStrengthDiff: 25.5132,
    reserveStrengthDiff: 38.0989,
    handStrengthDiff: 16.9503,
    mobilityDiff: 4.06,
    cornerControlDiff: 28.0056,
    occupiedBoardDiff: 21.2799,
    imminentRoundDamageDiff: -11.4035,
    activeTurnTempo: -18.3476,
    specialCardValue: -2.2619,
    deckTrimValue: -40.4086,
    eliteRouteBias: -53.1397,
    restRouteBias: -9.6133,
    forgeRouteBias: 6.4909,
    treasureRouteBias: 21.8135,
    branchingRouteBias: 26.9716,
    riskTolerance: 13.5657,
    aggressionPlanBias: 24.3752,
    controlPlanBias: 10.7145,
    tempoPlanBias: 1.2974,
    fusionPlanBias: 10.4759,
    precisionPlanBias: 5.2055,
    uncommonCardBias: 12.9318,
    rareCardBias: 25.7567,
    charmSynergyBias: 37.6843,
    duplicateCardPenalty: -16.4698,
    enemyProfileRespect: 27.4032,
  },
};
