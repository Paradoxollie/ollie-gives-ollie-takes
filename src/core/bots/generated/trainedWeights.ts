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
  name: "trained-bot-20260531-163816",
  trainedAt: "2026-05-31T16:38:16.945Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 79.2547,
    controlDiff: 13.5914,
    boardStrengthDiff: 42.1914,
    reserveStrengthDiff: 62.1021,
    handStrengthDiff: -2.6578,
    mobilityDiff: 8.9134,
    cornerControlDiff: 37.7242,
    occupiedBoardDiff: 29.4823,
    imminentRoundDamageDiff: -12.0393,
    activeTurnTempo: -16.535,
    specialCardValue: 11.2088,
    deckTrimValue: -21.2909,
    eliteRouteBias: -63.5458,
    restRouteBias: 9.0403,
    forgeRouteBias: 22.006,
    treasureRouteBias: 28.6857,
    branchingRouteBias: 19.1004,
    riskTolerance: 44.5704,
    aggressionPlanBias: 18.8391,
    controlPlanBias: 25.2917,
    tempoPlanBias: -9.667,
    fusionPlanBias: -7.1938,
    precisionPlanBias: 0.9669,
    uncommonCardBias: 35.9292,
    rareCardBias: 40.2581,
    charmSynergyBias: 54.8971,
    duplicateCardPenalty: 5.0664,
    enemyProfileRespect: 0.5937,
  },
};
