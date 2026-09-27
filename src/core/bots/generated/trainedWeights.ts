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
  name: "trained-bot-20260927-072507",
  trainedAt: "2026-09-27T07:25:07.071Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 71.94495,
    shieldDiff: 110.91795,
    drawBonusDiff: 25.38395,
    manaBonusDiff: 60.8962,
    poisonDiff: 59.2618,
    controlDiff: 36.6812,
    boardStrengthDiff: 23.179699999999997,
    boardManaDiff: 57.551550000000006,
    stackSynergyDiff: 68.71289999999999,
    reserveStrengthDiff: 9.58325,
    handStrengthDiff: -1.694,
    mobilityDiff: 18.12665,
    cornerControlDiff: 12.00305,
    occupiedBoardDiff: -25.5402,
    imminentRoundDamageDiff: 30.095950000000002,
    activeTurnTempo: 28.7358,
    specialCardValue: 14.8387,
    deckTrimValue: 10.885100000000001,
    eliteRouteBias: 1.4713500000000002,
    restRouteBias: 10.116050000000001,
    forgeRouteBias: 2.8385499999999997,
    treasureRouteBias: 9.1355,
    branchingRouteBias: 4.09535,
    riskTolerance: 0.4231,
    aggressionPlanBias: 1.1103500000000002,
    controlPlanBias: 3.9399499999999996,
    tempoPlanBias: -10.611899999999999,
    fusionPlanBias: -9.99015,
    precisionPlanBias: -9.3543,
    uncommonCardBias: 10,
    rareCardBias: 4.97345,
    charmSynergyBias: -3.34525,
    duplicateCardPenalty: 6.5087,
    enemyProfileRespect: 0.09165,
  },
};
