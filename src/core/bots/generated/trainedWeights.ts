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
  name: "trained-bot-20260620-233624",
  trainedAt: "2026-06-20T23:36:24.855Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.3158,
    shieldDiff: 76.1634,
    drawBonusDiff: 19.8949,
    manaBonusDiff: 74.73145,
    poisonDiff: 86.3212,
    controlDiff: 11.607800000000001,
    boardStrengthDiff: 46.44255,
    boardManaDiff: 27.87465,
    stackSynergyDiff: 1.13085,
    reserveStrengthDiff: 18.7999,
    handStrengthDiff: 40.69855,
    mobilityDiff: 4.922000000000001,
    cornerControlDiff: 52.927,
    occupiedBoardDiff: 6.45715,
    imminentRoundDamageDiff: 56.9155,
    activeTurnTempo: 13.25805,
    specialCardValue: 2.4076,
    deckTrimValue: 9.46715,
    eliteRouteBias: 8,
    restRouteBias: 5.75225,
    forgeRouteBias: 7.9834499999999995,
    treasureRouteBias: 0,
    branchingRouteBias: 0,
    riskTolerance: 6.0359,
    aggressionPlanBias: -5.7357,
    controlPlanBias: 7.3145500000000006,
    tempoPlanBias: -2.89795,
    fusionPlanBias: -11.1578,
    precisionPlanBias: -7.7331,
    uncommonCardBias: 7.1406,
    rareCardBias: -0.5843499999999999,
    charmSynergyBias: -1.1248,
    duplicateCardPenalty: 0.8185,
    enemyProfileRespect: 1.77385,
  },
};
