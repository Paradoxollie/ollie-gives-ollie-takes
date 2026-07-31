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
  name: "trained-bot-20260731-161449",
  trainedAt: "2026-07-31T16:14:49.806Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 123.0214,
    shieldDiff: 53.4981,
    drawBonusDiff: 38.9131,
    manaBonusDiff: 58.4758,
    poisonDiff: 54.1369,
    controlDiff: 79.8974,
    boardStrengthDiff: 25.262,
    boardManaDiff: 31.2228,
    stackSynergyDiff: 18.4209,
    reserveStrengthDiff: 14.6104,
    handStrengthDiff: 30.7504,
    mobilityDiff: 20.8525,
    cornerControlDiff: 0,
    occupiedBoardDiff: 9.7903,
    imminentRoundDamageDiff: 46.7762,
    activeTurnTempo: 15.0378,
    specialCardValue: 18,
    deckTrimValue: 2.4813,
    eliteRouteBias: -1.6161,
    restRouteBias: 11.2948,
    forgeRouteBias: 8.0819,
    treasureRouteBias: 12,
    branchingRouteBias: 1.6779,
    riskTolerance: 8,
    aggressionPlanBias: 5.2318,
    controlPlanBias: 13.7213,
    tempoPlanBias: 1.938,
    fusionPlanBias: 12.9592,
    precisionPlanBias: 15.2184,
    uncommonCardBias: -0.7706,
    rareCardBias: 1.6383,
    charmSynergyBias: 3.556,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.4606,
  },
};
