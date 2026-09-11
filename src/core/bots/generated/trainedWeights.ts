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
  name: "trained-bot-20260911-184546",
  trainedAt: "2026-09-11T18:45:46.820Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.1945,
    shieldDiff: 113.4278,
    drawBonusDiff: 45.2189,
    manaBonusDiff: 88.2153,
    poisonDiff: 51.0334,
    controlDiff: 60.4761,
    boardStrengthDiff: 5.2907,
    boardManaDiff: 48.002,
    stackSynergyDiff: 27.8579,
    reserveStrengthDiff: 26.447,
    handStrengthDiff: -10,
    mobilityDiff: 30,
    cornerControlDiff: 20.4227,
    occupiedBoardDiff: -8.6173,
    imminentRoundDamageDiff: 58.736,
    activeTurnTempo: 51.8128,
    specialCardValue: 14.9394,
    deckTrimValue: 0,
    eliteRouteBias: -8,
    restRouteBias: 0.5744,
    forgeRouteBias: 0.6894,
    treasureRouteBias: 3.6765,
    branchingRouteBias: 6.3177,
    riskTolerance: 4.6916,
    aggressionPlanBias: -7.2218,
    controlPlanBias: 10.9997,
    tempoPlanBias: 4.4698,
    fusionPlanBias: 13.0031,
    precisionPlanBias: 2.5818,
    uncommonCardBias: 5.7959,
    rareCardBias: 8.2669,
    charmSynergyBias: 1.2835,
    duplicateCardPenalty: 9.221,
    enemyProfileRespect: 5.6757,
  },
};
