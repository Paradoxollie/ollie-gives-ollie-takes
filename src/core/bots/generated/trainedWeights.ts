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
  name: "trained-bot-20260902-062750",
  trainedAt: "2026-09-02T06:27:50.000Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.6425,
    shieldDiff: 120,
    drawBonusDiff: 25.5377,
    manaBonusDiff: 101.9575,
    poisonDiff: 64.0272,
    controlDiff: 78.268,
    boardStrengthDiff: 12.8424,
    boardManaDiff: 72.9134,
    stackSynergyDiff: 10.089,
    reserveStrengthDiff: 19.4722,
    handStrengthDiff: 16.4466,
    mobilityDiff: 26.399,
    cornerControlDiff: 6.3704,
    occupiedBoardDiff: -1.7851,
    imminentRoundDamageDiff: 75.6822,
    activeTurnTempo: 50.4485,
    specialCardValue: 11.2349,
    deckTrimValue: 0.4916,
    eliteRouteBias: 0.8046,
    restRouteBias: 8.4862,
    forgeRouteBias: 7.561,
    treasureRouteBias: 8.718,
    branchingRouteBias: 6.8958,
    riskTolerance: 4.0358,
    aggressionPlanBias: 18,
    controlPlanBias: 4.9792,
    tempoPlanBias: -0.1534,
    fusionPlanBias: -6.0349,
    precisionPlanBias: 4.6716,
    uncommonCardBias: 9.4038,
    rareCardBias: -2.593,
    charmSynergyBias: 9.5867,
    duplicateCardPenalty: 5.7986,
    enemyProfileRespect: 0,
  },
};
