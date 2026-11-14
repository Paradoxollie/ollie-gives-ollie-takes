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
  name: "trained-bot-20261114-062917",
  trainedAt: "2026-11-14T06:29:17.345Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 51.7218,
    shieldDiff: 87.7967,
    drawBonusDiff: 5.6432,
    manaBonusDiff: 15.1826,
    poisonDiff: 75.9219,
    controlDiff: 122.645,
    boardStrengthDiff: 7.9873,
    boardManaDiff: 28.7603,
    stackSynergyDiff: 113.1716,
    reserveStrengthDiff: 30,
    handStrengthDiff: 10.434,
    mobilityDiff: 25.8775,
    cornerControlDiff: 18.0353,
    occupiedBoardDiff: -27.4967,
    imminentRoundDamageDiff: 95.5186,
    activeTurnTempo: 16.5107,
    specialCardValue: 14.4341,
    deckTrimValue: 1.7284,
    eliteRouteBias: 2.4944,
    restRouteBias: 7.7883,
    forgeRouteBias: 9.3213,
    treasureRouteBias: 8.3569,
    branchingRouteBias: 4.8693,
    riskTolerance: 1.7269,
    aggressionPlanBias: -12,
    controlPlanBias: -1.0682,
    tempoPlanBias: -12,
    fusionPlanBias: -5.1113,
    precisionPlanBias: 1.6398,
    uncommonCardBias: -2.3064,
    rareCardBias: 7.8411,
    charmSynergyBias: 14,
    duplicateCardPenalty: 1.0481,
    enemyProfileRespect: 0.6479,
  },
};
