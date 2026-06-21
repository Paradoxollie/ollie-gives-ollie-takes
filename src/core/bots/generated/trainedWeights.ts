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
  name: "trained-bot-20260621-101530",
  trainedAt: "2026-06-21T10:15:30.694Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.2398,
    shieldDiff: 69.6346,
    drawBonusDiff: 18.6041,
    manaBonusDiff: 76.9546,
    poisonDiff: 87.9403,
    controlDiff: 15.425,
    boardStrengthDiff: 47.7617,
    boardManaDiff: 22.514,
    stackSynergyDiff: 1.4077,
    reserveStrengthDiff: 23.0825,
    handStrengthDiff: 45.0154,
    mobilityDiff: -0.0745,
    cornerControlDiff: 50.108,
    occupiedBoardDiff: 8.8326,
    imminentRoundDamageDiff: 48.8564,
    activeTurnTempo: 8.0255,
    specialCardValue: 3.5929,
    deckTrimValue: 8.1357,
    eliteRouteBias: -1.0784,
    restRouteBias: 11.6858,
    forgeRouteBias: 1.4841,
    treasureRouteBias: 6.2119,
    branchingRouteBias: 3.0721,
    riskTolerance: 1.3064,
    aggressionPlanBias: -8.6138,
    controlPlanBias: 7.5553,
    tempoPlanBias: 11.0274,
    fusionPlanBias: -9.4619,
    precisionPlanBias: -6.0998,
    uncommonCardBias: 9.0157,
    rareCardBias: -2.6222,
    charmSynergyBias: -1.1489,
    duplicateCardPenalty: 4.616,
    enemyProfileRespect: 5.4149,
  },
};
