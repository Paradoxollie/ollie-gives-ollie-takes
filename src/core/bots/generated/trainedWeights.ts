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
  name: "trained-bot-20260812-020423",
  trainedAt: "2026-08-12T02:04:23.073Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.4802,
    shieldDiff: 94.7082,
    drawBonusDiff: 37.8677,
    manaBonusDiff: 90.6134,
    poisonDiff: 36.7243,
    controlDiff: 87.2663,
    boardStrengthDiff: 23.8794,
    boardManaDiff: 35.4127,
    stackSynergyDiff: 31.75,
    reserveStrengthDiff: -7.892,
    handStrengthDiff: 42.0343,
    mobilityDiff: 1.5682,
    cornerControlDiff: 8.2797,
    occupiedBoardDiff: 13.6797,
    imminentRoundDamageDiff: 37.9432,
    activeTurnTempo: 32.4202,
    specialCardValue: 16.0794,
    deckTrimValue: 6.3932,
    eliteRouteBias: 3.3676,
    restRouteBias: 5.8652,
    forgeRouteBias: 0,
    treasureRouteBias: 0,
    branchingRouteBias: 2.5722,
    riskTolerance: 6.0487,
    aggressionPlanBias: 3.8996,
    controlPlanBias: 9.2339,
    tempoPlanBias: -5.644,
    fusionPlanBias: 8.7932,
    precisionPlanBias: 4.2468,
    uncommonCardBias: -0.1768,
    rareCardBias: 1.6354,
    charmSynergyBias: -0.0776,
    duplicateCardPenalty: 6.7508,
    enemyProfileRespect: 2.4194,
  },
};
