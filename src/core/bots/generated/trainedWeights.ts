import type { TrainedBotWeights } from "@/core/types";

export interface TrainedBotProfile {
  name: string;
  trainedAt: string;
  iterations: number;
  matchesPerOpponent: number;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights;
}

export const TRAINED_BOT_PROFILE: TrainedBotProfile = {
  name: "trained-bot-20260616-072745",
  trainedAt: "2026-06-16T07:27:45.959Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 109.4195,
    shieldDiff: 76.66225,
    drawBonusDiff: 46.4985,
    manaBonusDiff: 79.21145,
    poisonDiff: 102.43035,
    controlDiff: 16.0761,
    boardStrengthDiff: 50.1528,
    boardManaDiff: 17.52975,
    stackSynergyDiff: 0.8552,
    reserveStrengthDiff: 11.74995,
    handStrengthDiff: 45.6472,
    mobilityDiff: -6.55665,
    cornerControlDiff: 61.390299999999996,
    occupiedBoardDiff: 29.87265,
    imminentRoundDamageDiff: 29.81315,
    activeTurnTempo: -4.49355,
    specialCardValue: 16.29155,
    deckTrimValue: 5.655799999999999,
    eliteRouteBias: -6.42295,
    restRouteBias: 11.1038,
    forgeRouteBias: 8.51875,
    treasureRouteBias: 6.7200500000000005,
    branchingRouteBias: 8.5273,
    riskTolerance: -0.73015,
    aggressionPlanBias: 2.98405,
    controlPlanBias: 18,
    tempoPlanBias: 4.5375,
    fusionPlanBias: -2.8007500000000003,
    precisionPlanBias: -9.2056,
    uncommonCardBias: -2.2159999999999997,
    rareCardBias: 5.5397,
    charmSynergyBias: 6.7748,
    duplicateCardPenalty: 9.44595,
    enemyProfileRespect: 5.1894,
  },
};
