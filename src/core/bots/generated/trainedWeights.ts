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
  name: "trained-bot-20261002-132051",
  trainedAt: "2026-10-02T13:20:51.961Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 58.9815,
    shieldDiff: 94.812,
    drawBonusDiff: 22.8264,
    manaBonusDiff: 54.5946,
    poisonDiff: 64.1327,
    controlDiff: 43.3506,
    boardStrengthDiff: 20.5746,
    boardManaDiff: 56.9663,
    stackSynergyDiff: 68.4483,
    reserveStrengthDiff: 17.2373,
    handStrengthDiff: 1.8227,
    mobilityDiff: -3.7628,
    cornerControlDiff: 7.7203,
    occupiedBoardDiff: -11.9521,
    imminentRoundDamageDiff: 36.3359,
    activeTurnTempo: 20.9969,
    specialCardValue: 3.6116,
    deckTrimValue: 4.1457,
    eliteRouteBias: 8,
    restRouteBias: 3.6012,
    forgeRouteBias: 3.6133,
    treasureRouteBias: 5.2402,
    branchingRouteBias: 0,
    riskTolerance: 3.5771,
    aggressionPlanBias: -8.7992,
    controlPlanBias: -12,
    tempoPlanBias: -7.9122,
    fusionPlanBias: -9.1168,
    precisionPlanBias: -5.2882,
    uncommonCardBias: 0.6955,
    rareCardBias: 3.7733,
    charmSynergyBias: -3.1188,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
