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
  name: "trained-bot-20260530-140839",
  trainedAt: "2026-05-30T14:08:39.381Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 75.0159,
    controlDiff: 14.7891,
    boardStrengthDiff: 33.4205,
    reserveStrengthDiff: 59.5898,
    handStrengthDiff: -1.1534,
    mobilityDiff: -1.2231,
    cornerControlDiff: 38.4156,
    occupiedBoardDiff: 25.616,
    imminentRoundDamageDiff: -24.8827,
    activeTurnTempo: -28.7897,
    specialCardValue: 4.8745,
    deckTrimValue: -13.3018,
    eliteRouteBias: -65.0875,
    restRouteBias: -7.9237,
    forgeRouteBias: 19.569,
    treasureRouteBias: 18.3578,
    branchingRouteBias: 9.4559,
    riskTolerance: 40.1333,
    aggressionPlanBias: 14.4316,
    controlPlanBias: 27.7551,
    tempoPlanBias: -12.2238,
    fusionPlanBias: 3.2492,
    precisionPlanBias: 2.7258,
    uncommonCardBias: 26.7003,
    rareCardBias: 45.4461,
    charmSynergyBias: 40.3417,
    duplicateCardPenalty: 9.0194,
    enemyProfileRespect: -4.563,
  },
};
