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
  name: "trained-bot-20260722-185159",
  trainedAt: "2026-07-22T18:51:59.700Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 116.6529,
    shieldDiff: 73.043,
    drawBonusDiff: 34.7163,
    manaBonusDiff: 50.6336,
    poisonDiff: 71.8,
    controlDiff: 63.0224,
    boardStrengthDiff: 36.1205,
    boardManaDiff: 6.9545,
    stackSynergyDiff: 11.4907,
    reserveStrengthDiff: 24.0719,
    handStrengthDiff: 6.2647,
    mobilityDiff: 25.8833,
    cornerControlDiff: 4.4548,
    occupiedBoardDiff: -8.4092,
    imminentRoundDamageDiff: 39.1091,
    activeTurnTempo: 18.8931,
    specialCardValue: 16.9139,
    deckTrimValue: 7.9243,
    eliteRouteBias: -0.833,
    restRouteBias: 12,
    forgeRouteBias: 0.4943,
    treasureRouteBias: 7.2564,
    branchingRouteBias: 10,
    riskTolerance: 2.248,
    aggressionPlanBias: 4.7434,
    controlPlanBias: 18,
    tempoPlanBias: -1.0499,
    fusionPlanBias: 4.5334,
    precisionPlanBias: -0.6556,
    uncommonCardBias: 1.6287,
    rareCardBias: 12,
    charmSynergyBias: -0.5618,
    duplicateCardPenalty: 8.3443,
    enemyProfileRespect: 8.107,
  },
};
