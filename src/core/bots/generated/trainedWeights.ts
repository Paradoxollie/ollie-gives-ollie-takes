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
  name: "trained-bot-20261008-143323",
  trainedAt: "2026-10-08T14:33:23.674Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.0282,
    shieldDiff: 75.7986,
    drawBonusDiff: 21.3425,
    manaBonusDiff: 73.3648,
    poisonDiff: 63.1155,
    controlDiff: 36.7441,
    boardStrengthDiff: 19.0075,
    boardManaDiff: 71.0312,
    stackSynergyDiff: 61.4966,
    reserveStrengthDiff: 26.9237,
    handStrengthDiff: 12.3054,
    mobilityDiff: -1.5561,
    cornerControlDiff: 7.1728,
    occupiedBoardDiff: -6.6409,
    imminentRoundDamageDiff: 50.3389,
    activeTurnTempo: 17.8799,
    specialCardValue: 15.4552,
    deckTrimValue: 0,
    eliteRouteBias: -5.7261,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 6.2524,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -3.3667,
    controlPlanBias: 10.7407,
    tempoPlanBias: -12,
    fusionPlanBias: 4.5934,
    precisionPlanBias: 0.7448,
    uncommonCardBias: 10,
    rareCardBias: 2.3695,
    charmSynergyBias: 0.3555,
    duplicateCardPenalty: 8,
    enemyProfileRespect: 1.6371,
  },
};
