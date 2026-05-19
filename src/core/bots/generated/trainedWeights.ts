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
  name: "trained-bot-20260519-123244",
  trainedAt: "2026-05-19T12:32:44.499Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 18.8368,
    controlDiff: 20.8364,
    boardStrengthDiff: 15.897,
    reserveStrengthDiff: 29.0254,
    handStrengthDiff: -14.2347,
    mobilityDiff: 14.4529,
    cornerControlDiff: 1.1844,
    occupiedBoardDiff: 5.4156,
    imminentRoundDamageDiff: 2.7355,
    activeTurnTempo: -13.6445,
    specialCardValue: -15.2007,
    deckTrimValue: -20.3371,
    eliteRouteBias: -39.0973,
    restRouteBias: 6.3524,
    forgeRouteBias: -22.367,
    treasureRouteBias: 23.8189,
    branchingRouteBias: 30.6325,
    riskTolerance: 12.6072,
    aggressionPlanBias: 21.4144,
    controlPlanBias: 20.6065,
    tempoPlanBias: -10.7085,
    fusionPlanBias: 18.3004,
    precisionPlanBias: 5.7832,
    uncommonCardBias: -6.8595,
    rareCardBias: 8.7257,
    charmSynergyBias: 37.8959,
    duplicateCardPenalty: -3.6873,
    enemyProfileRespect: 26.7036,
  },
};
