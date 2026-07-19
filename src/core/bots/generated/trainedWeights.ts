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
  name: "trained-bot-20260719-092929",
  trainedAt: "2026-07-19T09:29:29.615Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 134.3798,
    shieldDiff: 64.3468,
    drawBonusDiff: 40.6921,
    manaBonusDiff: 51.9065,
    poisonDiff: 67.5881,
    controlDiff: 41.0012,
    boardStrengthDiff: 45.1895,
    boardManaDiff: 11.774,
    stackSynergyDiff: 33.6296,
    reserveStrengthDiff: 30,
    handStrengthDiff: 1.8873,
    mobilityDiff: 29.8666,
    cornerControlDiff: 4.3847,
    occupiedBoardDiff: 16.4501,
    imminentRoundDamageDiff: 64.3846,
    activeTurnTempo: 31.3388,
    specialCardValue: 18,
    deckTrimValue: 0.8253,
    eliteRouteBias: 6.905,
    restRouteBias: 8.3865,
    forgeRouteBias: 4.2654,
    treasureRouteBias: 8.5506,
    branchingRouteBias: 10,
    riskTolerance: -1.3457,
    aggressionPlanBias: 1.9497,
    controlPlanBias: -3.9192,
    tempoPlanBias: -7.8099,
    fusionPlanBias: 2.6549,
    precisionPlanBias: -10.6149,
    uncommonCardBias: 4.9009,
    rareCardBias: -3.9409,
    charmSynergyBias: 3.3786,
    duplicateCardPenalty: 7.4202,
    enemyProfileRespect: 4.235,
  },
};
