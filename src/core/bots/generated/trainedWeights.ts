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
  name: "trained-bot-20260529-203933",
  trainedAt: "2026-05-29T20:39:33.350Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 55.1146,
    controlDiff: 10.8517,
    boardStrengthDiff: 41.6877,
    reserveStrengthDiff: 61.0587,
    handStrengthDiff: -20.7359,
    mobilityDiff: 3.2754,
    cornerControlDiff: 46.8855,
    occupiedBoardDiff: 22.7197,
    imminentRoundDamageDiff: -20.4701,
    activeTurnTempo: -30.015,
    specialCardValue: 0.6025,
    deckTrimValue: -21.6219,
    eliteRouteBias: -65.8466,
    restRouteBias: -8.3192,
    forgeRouteBias: 24.0259,
    treasureRouteBias: 17.648,
    branchingRouteBias: 15.1843,
    riskTolerance: 48.5896,
    aggressionPlanBias: 8.609,
    controlPlanBias: 38.2155,
    tempoPlanBias: -11.9643,
    fusionPlanBias: -0.1058,
    precisionPlanBias: -0.136,
    uncommonCardBias: 24.9825,
    rareCardBias: 46.686,
    charmSynergyBias: 38.3029,
    duplicateCardPenalty: -2.0838,
    enemyProfileRespect: 11.7163,
  },
};
