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
  name: "trained-bot-20260810-180144",
  trainedAt: "2026-08-10T18:01:44.662Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.76820000000001,
    shieldDiff: 89.7262,
    drawBonusDiff: 36.645799999999994,
    manaBonusDiff: 87.7598,
    poisonDiff: 36.1429,
    controlDiff: 79.84285,
    boardStrengthDiff: 14.857800000000001,
    boardManaDiff: 43.075900000000004,
    stackSynergyDiff: 29.15875,
    reserveStrengthDiff: -0.80325,
    handStrengthDiff: 50,
    mobilityDiff: -1.7019499999999999,
    cornerControlDiff: 10.94405,
    occupiedBoardDiff: 16.1455,
    imminentRoundDamageDiff: 41.089150000000004,
    activeTurnTempo: 24.23705,
    specialCardValue: 17.05655,
    deckTrimValue: 9.27025,
    eliteRouteBias: -4.03575,
    restRouteBias: 5.7654499999999995,
    forgeRouteBias: 6.537999999999999,
    treasureRouteBias: 7.666,
    branchingRouteBias: 1.5863,
    riskTolerance: 4.8037,
    aggressionPlanBias: 0.2809999999999999,
    controlPlanBias: 12.03545,
    tempoPlanBias: -11.129850000000001,
    fusionPlanBias: -2.6852500000000004,
    precisionPlanBias: 9.1261,
    uncommonCardBias: 1.95885,
    rareCardBias: 1.96315,
    charmSynergyBias: -3.0199,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 6.901,
  },
};
