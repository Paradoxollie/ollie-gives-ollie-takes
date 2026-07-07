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
  name: "trained-bot-20260707-112747",
  trainedAt: "2026-07-07T11:27:47.233Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.8569,
    shieldDiff: 62.2358,
    drawBonusDiff: 9.0099,
    manaBonusDiff: 79.5405,
    poisonDiff: 59.6243,
    controlDiff: 14.3382,
    boardStrengthDiff: 29.7341,
    boardManaDiff: 11.4405,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 20.8603,
    handStrengthDiff: 12.1538,
    mobilityDiff: 25.4341,
    cornerControlDiff: 4.675,
    occupiedBoardDiff: 43.5545,
    imminentRoundDamageDiff: 68.1141,
    activeTurnTempo: 25.9569,
    specialCardValue: 9.0662,
    deckTrimValue: 11.6225,
    eliteRouteBias: 0.1462,
    restRouteBias: 1.186,
    forgeRouteBias: 3.6414,
    treasureRouteBias: 2.9497,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: -4.29,
    controlPlanBias: 12.3833,
    tempoPlanBias: -3.0935,
    fusionPlanBias: 3.8344,
    precisionPlanBias: 13.5205,
    uncommonCardBias: -3.8522,
    rareCardBias: 0.7027,
    charmSynergyBias: 8.161,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 1.943,
  },
};
