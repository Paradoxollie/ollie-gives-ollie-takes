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
  name: "trained-bot-20260826-211654",
  trainedAt: "2026-08-26T21:16:54.938Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.5797,
    shieldDiff: 114.8119,
    drawBonusDiff: 23.6693,
    manaBonusDiff: 98.5012,
    poisonDiff: 67.1151,
    controlDiff: 81.7104,
    boardStrengthDiff: 33.6888,
    boardManaDiff: 40.604,
    stackSynergyDiff: 8.293,
    reserveStrengthDiff: 16.1825,
    handStrengthDiff: 15.2836,
    mobilityDiff: 15.4766,
    cornerControlDiff: 14.9882,
    occupiedBoardDiff: -18.5044,
    imminentRoundDamageDiff: 69.7992,
    activeTurnTempo: 36.6044,
    specialCardValue: 8.3521,
    deckTrimValue: 7.1629,
    eliteRouteBias: 2.1042,
    restRouteBias: 12,
    forgeRouteBias: 1.6605,
    treasureRouteBias: 11.0443,
    branchingRouteBias: 0.3641,
    riskTolerance: 1.0743,
    aggressionPlanBias: 15.2555,
    controlPlanBias: -0.0874,
    tempoPlanBias: 13.5197,
    fusionPlanBias: -0.6633,
    precisionPlanBias: 3.8338,
    uncommonCardBias: 0.4446,
    rareCardBias: -2.9186,
    charmSynergyBias: 3.1236,
    duplicateCardPenalty: 3.1546,
    enemyProfileRespect: 5.5803,
  },
};
