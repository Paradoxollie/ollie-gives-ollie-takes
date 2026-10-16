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
  name: "trained-bot-20261016-142844",
  trainedAt: "2026-10-16T14:28:44.995Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.6107,
    shieldDiff: 78.3686,
    drawBonusDiff: 8.0957,
    manaBonusDiff: 84.9983,
    poisonDiff: 50.7439,
    controlDiff: 60.8739,
    boardStrengthDiff: 28.9307,
    boardManaDiff: 55.1729,
    stackSynergyDiff: 89.6695,
    reserveStrengthDiff: 30,
    handStrengthDiff: 20.436,
    mobilityDiff: 20.8128,
    cornerControlDiff: 0,
    occupiedBoardDiff: -24.0846,
    imminentRoundDamageDiff: 62.3401,
    activeTurnTempo: 31.8764,
    specialCardValue: 11.6797,
    deckTrimValue: 4.0443,
    eliteRouteBias: 3.5466,
    restRouteBias: 3.4189,
    forgeRouteBias: 4.0689,
    treasureRouteBias: 6.0579,
    branchingRouteBias: 7.7992,
    riskTolerance: -1.6528,
    aggressionPlanBias: -4.7727,
    controlPlanBias: -3.4306,
    tempoPlanBias: -0.668,
    fusionPlanBias: 18,
    precisionPlanBias: -11.5368,
    uncommonCardBias: 6.2137,
    rareCardBias: 11.7863,
    charmSynergyBias: 0.47,
    duplicateCardPenalty: 9.576,
    enemyProfileRespect: 1.5524,
  },
};
