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
  name: "trained-bot-20260525-045630",
  trainedAt: "2026-05-25T04:56:30.074Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 48.3423,
    controlDiff: 21.0443,
    boardStrengthDiff: 22.9177,
    reserveStrengthDiff: 26.5632,
    handStrengthDiff: 18.0219,
    mobilityDiff: 6.436,
    cornerControlDiff: 28.634,
    occupiedBoardDiff: 23.3245,
    imminentRoundDamageDiff: -19.603,
    activeTurnTempo: -31.0577,
    specialCardValue: -4.6537,
    deckTrimValue: -34.3925,
    eliteRouteBias: -57.8061,
    restRouteBias: -8.6818,
    forgeRouteBias: 12.0403,
    treasureRouteBias: 23.2476,
    branchingRouteBias: 30.3474,
    riskTolerance: 34.627,
    aggressionPlanBias: 20.4434,
    controlPlanBias: 18.6385,
    tempoPlanBias: 5.4596,
    fusionPlanBias: 5.7204,
    precisionPlanBias: 12.6928,
    uncommonCardBias: 10.1881,
    rareCardBias: 16.5605,
    charmSynergyBias: 33.3549,
    duplicateCardPenalty: -20.1959,
    enemyProfileRespect: 23.9365,
  },
};
