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
  name: "trained-bot-20261008-092953",
  trainedAt: "2026-10-08T09:29:53.411Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 61.9464,
    shieldDiff: 77.5659,
    drawBonusDiff: 14.8767,
    manaBonusDiff: 76.5331,
    poisonDiff: 64.9305,
    controlDiff: 35.0162,
    boardStrengthDiff: 16.2746,
    boardManaDiff: 71.2798,
    stackSynergyDiff: 64.9083,
    reserveStrengthDiff: 25.835,
    handStrengthDiff: 12.9173,
    mobilityDiff: -0.8405,
    cornerControlDiff: 6.0675,
    occupiedBoardDiff: -10.4558,
    imminentRoundDamageDiff: 45.6794,
    activeTurnTempo: 24.1368,
    specialCardValue: 17.172,
    deckTrimValue: 2.0282,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 8.9158,
    treasureRouteBias: 8.2856,
    branchingRouteBias: 9.5613,
    riskTolerance: -4,
    aggressionPlanBias: -3.6856,
    controlPlanBias: 14.4933,
    tempoPlanBias: -8.4517,
    fusionPlanBias: 6.5405,
    precisionPlanBias: -0.653,
    uncommonCardBias: 8.2147,
    rareCardBias: 3.3538,
    charmSynergyBias: 1.383,
    duplicateCardPenalty: 8.769,
    enemyProfileRespect: 1.3807,
  },
};
