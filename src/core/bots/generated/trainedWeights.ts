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
  name: "trained-bot-20260530-194332",
  trainedAt: "2026-05-30T19:43:32.803Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 76.7063,
    controlDiff: 16.2483,
    boardStrengthDiff: 38.0371,
    reserveStrengthDiff: 62.2608,
    handStrengthDiff: 2.3068,
    mobilityDiff: -5.3958,
    cornerControlDiff: 36.6606,
    occupiedBoardDiff: 28.1042,
    imminentRoundDamageDiff: -24.5577,
    activeTurnTempo: -25.3253,
    specialCardValue: 7.2144,
    deckTrimValue: -16.2664,
    eliteRouteBias: -60.6874,
    restRouteBias: -6.2341,
    forgeRouteBias: 18.3841,
    treasureRouteBias: 22.5801,
    branchingRouteBias: 6.8628,
    riskTolerance: 39.3485,
    aggressionPlanBias: 18.0903,
    controlPlanBias: 24.8574,
    tempoPlanBias: -2.944,
    fusionPlanBias: -0.3401,
    precisionPlanBias: -2.4708,
    uncommonCardBias: 26.5158,
    rareCardBias: 41.4285,
    charmSynergyBias: 39.5421,
    duplicateCardPenalty: 9.4734,
    enemyProfileRespect: 1.2022,
  },
};
