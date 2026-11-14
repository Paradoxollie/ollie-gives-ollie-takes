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
  name: "trained-bot-20261113-233649",
  trainedAt: "2026-11-13T23:36:49.338Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 48.6329,
    shieldDiff: 90.8972,
    drawBonusDiff: 6.9617,
    manaBonusDiff: 23.6441,
    poisonDiff: 76.6518,
    controlDiff: 125.1881,
    boardStrengthDiff: 2.1179,
    boardManaDiff: 28.7335,
    stackSynergyDiff: 103.677,
    reserveStrengthDiff: 30,
    handStrengthDiff: 2.6063,
    mobilityDiff: 25.3264,
    cornerControlDiff: 14.3534,
    occupiedBoardDiff: -25.2167,
    imminentRoundDamageDiff: 99.4555,
    activeTurnTempo: 23.7229,
    specialCardValue: 11.6875,
    deckTrimValue: 2.1587,
    eliteRouteBias: 3.083,
    restRouteBias: 12,
    forgeRouteBias: 7.9719,
    treasureRouteBias: 12,
    branchingRouteBias: 3.9485,
    riskTolerance: -0.6424,
    aggressionPlanBias: -12,
    controlPlanBias: -4.2801,
    tempoPlanBias: -10.6801,
    fusionPlanBias: 0.4637,
    precisionPlanBias: -4.1211,
    uncommonCardBias: 0.082,
    rareCardBias: 4.127,
    charmSynergyBias: 14,
    duplicateCardPenalty: 3.3345,
    enemyProfileRespect: 0,
  },
};
