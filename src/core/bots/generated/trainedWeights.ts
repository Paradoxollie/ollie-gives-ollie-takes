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
  name: "trained-bot-20260815-154759",
  trainedAt: "2026-08-15T15:47:59.626Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.07,
    shieldDiff: 111.3925,
    drawBonusDiff: 47.3324,
    manaBonusDiff: 99.4832,
    poisonDiff: 49.6899,
    controlDiff: 67.0731,
    boardStrengthDiff: 12.9087,
    boardManaDiff: 43.7865,
    stackSynergyDiff: 27.2952,
    reserveStrengthDiff: -3.2944,
    handStrengthDiff: 38.103,
    mobilityDiff: -2.4472,
    cornerControlDiff: 6.976,
    occupiedBoardDiff: 4.0803,
    imminentRoundDamageDiff: 48.2082,
    activeTurnTempo: 30.4747,
    specialCardValue: 16.3773,
    deckTrimValue: 3.0349,
    eliteRouteBias: 5.9782,
    restRouteBias: 12,
    forgeRouteBias: 0.5892,
    treasureRouteBias: 9.7276,
    branchingRouteBias: 2.8845,
    riskTolerance: -1.4064,
    aggressionPlanBias: 15.522,
    controlPlanBias: 15.0191,
    tempoPlanBias: -12,
    fusionPlanBias: 17.652,
    precisionPlanBias: 2.4505,
    uncommonCardBias: 4.5662,
    rareCardBias: 2.1933,
    charmSynergyBias: 7.202,
    duplicateCardPenalty: 4.5654,
    enemyProfileRespect: 8.0026,
  },
};
