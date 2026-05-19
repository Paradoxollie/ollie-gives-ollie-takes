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
  name: "trained-bot-20260519-063622",
  trainedAt: "2026-05-19T06:36:22.735Z",
  iterations: 10,
  matchesPerOpponent: 12,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 10.9787,
    controlDiff: 12.6642,
    boardStrengthDiff: 6.5838,
    reserveStrengthDiff: 30.8205,
    handStrengthDiff: -22.361,
    mobilityDiff: 10.3293,
    cornerControlDiff: 1.1582,
    occupiedBoardDiff: 5.0661,
    imminentRoundDamageDiff: 3.7752,
    activeTurnTempo: -14.8755,
    specialCardValue: -13.0729,
    deckTrimValue: -27.626,
    eliteRouteBias: -43.4406,
    restRouteBias: 1.921,
    forgeRouteBias: -20.4617,
    treasureRouteBias: 17.1284,
    branchingRouteBias: 34.1688,
    riskTolerance: 8.4734,
    aggressionPlanBias: 18.7404,
    controlPlanBias: 16.9078,
    tempoPlanBias: -17.2813,
    fusionPlanBias: 16.311,
    precisionPlanBias: 0.8478,
    uncommonCardBias: -6.2515,
    rareCardBias: 5.7572,
    charmSynergyBias: 32.3119,
    duplicateCardPenalty: -3.0144,
    enemyProfileRespect: 23.5449,
  },
};
