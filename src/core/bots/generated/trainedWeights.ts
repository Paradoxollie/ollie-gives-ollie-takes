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
  name: "trained-bot-20260610-205633",
  trainedAt: "2026-06-10T20:56:33.636Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.6153,
    shieldDiff: 50.9297,
    drawBonusDiff: 72.5062,
    manaBonusDiff: 112.5907,
    poisonDiff: 108.9413,
    controlDiff: 0,
    boardStrengthDiff: 53.5136,
    boardManaDiff: 7.7561,
    stackSynergyDiff: 2.4508,
    reserveStrengthDiff: 26.519,
    handStrengthDiff: 17.7749,
    mobilityDiff: 11.2216,
    cornerControlDiff: 53.6945,
    occupiedBoardDiff: 44.7532,
    imminentRoundDamageDiff: 0.9002,
    activeTurnTempo: 8.8802,
    specialCardValue: 6.1108,
    deckTrimValue: 1.481,
    eliteRouteBias: 4.4302,
    restRouteBias: 9.8616,
    forgeRouteBias: 2.568,
    treasureRouteBias: 0,
    branchingRouteBias: 4.3894,
    riskTolerance: 0.8524,
    aggressionPlanBias: 4.3304,
    controlPlanBias: 15.5477,
    tempoPlanBias: -8.1354,
    fusionPlanBias: -4.1462,
    precisionPlanBias: 9.1432,
    uncommonCardBias: 5.994,
    rareCardBias: 10.5425,
    charmSynergyBias: -0.8415,
    duplicateCardPenalty: 8.5062,
    enemyProfileRespect: 2.1041,
  },
};
