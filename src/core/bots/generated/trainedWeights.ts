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
  name: "trained-bot-20260901-223023",
  trainedAt: "2026-09-01T22:30:23.297Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.8137,
    shieldDiff: 120,
    drawBonusDiff: 16.965,
    manaBonusDiff: 94.1587,
    poisonDiff: 62.1981,
    controlDiff: 67.394,
    boardStrengthDiff: 23.7104,
    boardManaDiff: 68.1426,
    stackSynergyDiff: 15.8731,
    reserveStrengthDiff: 22.4252,
    handStrengthDiff: 19.6007,
    mobilityDiff: 25.7923,
    cornerControlDiff: 13.7402,
    occupiedBoardDiff: 1.3726,
    imminentRoundDamageDiff: 67.6831,
    activeTurnTempo: 50.6267,
    specialCardValue: 12.7119,
    deckTrimValue: 6.002,
    eliteRouteBias: -8,
    restRouteBias: 3.7569,
    forgeRouteBias: 6.813,
    treasureRouteBias: 11.1456,
    branchingRouteBias: 7.1953,
    riskTolerance: 0.1494,
    aggressionPlanBias: 15.7993,
    controlPlanBias: -2.093,
    tempoPlanBias: 3.4086,
    fusionPlanBias: -8.7587,
    precisionPlanBias: -1.5408,
    uncommonCardBias: 8.7248,
    rareCardBias: -2.0408,
    charmSynergyBias: 12.7969,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.5309,
  },
};
