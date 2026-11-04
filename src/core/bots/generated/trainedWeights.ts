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
  name: "trained-bot-20261103-210148",
  trainedAt: "2026-11-03T21:01:48.488Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.0991,
    shieldDiff: 64.1177,
    drawBonusDiff: 11.1183,
    manaBonusDiff: 30.9631,
    poisonDiff: 66.1648,
    controlDiff: 108.8736,
    boardStrengthDiff: 18.0184,
    boardManaDiff: 5.2638,
    stackSynergyDiff: 120,
    reserveStrengthDiff: 22.4853,
    handStrengthDiff: 0.3982,
    mobilityDiff: 25.5312,
    cornerControlDiff: 18.275,
    occupiedBoardDiff: -29.4774,
    imminentRoundDamageDiff: 103.8278,
    activeTurnTempo: 14.9899,
    specialCardValue: 14.3957,
    deckTrimValue: 4.0851,
    eliteRouteBias: -0.7963,
    restRouteBias: 6.3538,
    forgeRouteBias: 4.736,
    treasureRouteBias: 11.6812,
    branchingRouteBias: 5.8402,
    riskTolerance: 8,
    aggressionPlanBias: -1.8461,
    controlPlanBias: 16.5617,
    tempoPlanBias: -9.1859,
    fusionPlanBias: 5.2584,
    precisionPlanBias: -4.7267,
    uncommonCardBias: -1.0957,
    rareCardBias: 10.0189,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.0284,
  },
};
