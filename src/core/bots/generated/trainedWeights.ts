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
  name: "trained-bot-20260723-214511",
  trainedAt: "2026-07-23T21:45:11.381Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 119.5148,
    shieldDiff: 77.6822,
    drawBonusDiff: 37.9892,
    manaBonusDiff: 56.7606,
    poisonDiff: 72.2347,
    controlDiff: 69.4883,
    boardStrengthDiff: 34.7103,
    boardManaDiff: 3.5784,
    stackSynergyDiff: 10.8623,
    reserveStrengthDiff: 16.8737,
    handStrengthDiff: 9.3895,
    mobilityDiff: 30,
    cornerControlDiff: 7.5162,
    occupiedBoardDiff: -3.3782,
    imminentRoundDamageDiff: 39.5914,
    activeTurnTempo: 31.5965,
    specialCardValue: 18,
    deckTrimValue: 5.7475,
    eliteRouteBias: -2.5161,
    restRouteBias: 7.5853,
    forgeRouteBias: 0,
    treasureRouteBias: 1.3528,
    branchingRouteBias: 10,
    riskTolerance: 3.2305,
    aggressionPlanBias: 2.4015,
    controlPlanBias: 18,
    tempoPlanBias: -10.5534,
    fusionPlanBias: 18,
    precisionPlanBias: 9.4034,
    uncommonCardBias: 1.4202,
    rareCardBias: 7.4114,
    charmSynergyBias: -0.5317,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 1.2834,
  },
};
