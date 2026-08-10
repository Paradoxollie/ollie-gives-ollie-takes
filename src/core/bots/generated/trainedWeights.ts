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
  name: "trained-bot-20260810-082722",
  trainedAt: "2026-08-10T08:27:22.459Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.5173,
    shieldDiff: 92.7059,
    drawBonusDiff: 34.3599,
    manaBonusDiff: 90.3481,
    poisonDiff: 34.8962,
    controlDiff: 76.7916,
    boardStrengthDiff: 11.7461,
    boardManaDiff: 43.331,
    stackSynergyDiff: 28.9783,
    reserveStrengthDiff: 1.5232,
    handStrengthDiff: 50,
    mobilityDiff: -0.0447,
    cornerControlDiff: 9.4213,
    occupiedBoardDiff: 20.2474,
    imminentRoundDamageDiff: 41.2144,
    activeTurnTempo: 24.4123,
    specialCardValue: 17.5538,
    deckTrimValue: 14,
    eliteRouteBias: -8,
    restRouteBias: 4.9023,
    forgeRouteBias: 6.3901,
    treasureRouteBias: 7.1948,
    branchingRouteBias: 0.5039,
    riskTolerance: 2.4988,
    aggressionPlanBias: 0.4841,
    controlPlanBias: 7.7086,
    tempoPlanBias: -11.0408,
    fusionPlanBias: 0.2194,
    precisionPlanBias: 9.6587,
    uncommonCardBias: 7.4285,
    rareCardBias: -0.1504,
    charmSynergyBias: -3.1835,
    duplicateCardPenalty: 0.7932,
    enemyProfileRespect: 0,
  },
};
