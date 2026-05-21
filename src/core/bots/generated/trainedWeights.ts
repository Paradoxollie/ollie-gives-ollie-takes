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
  name: "trained-bot-20260520-231628",
  trainedAt: "2026-05-20T23:16:28.236Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 25.1208,
    controlDiff: 18.818,
    boardStrengthDiff: 22.9357,
    reserveStrengthDiff: 40.875,
    handStrengthDiff: -6.0985,
    mobilityDiff: 9.7475,
    cornerControlDiff: 17.6647,
    occupiedBoardDiff: 4.9949,
    imminentRoundDamageDiff: -14.5198,
    activeTurnTempo: -25.0742,
    specialCardValue: -11.901,
    deckTrimValue: -24.4251,
    eliteRouteBias: -37.1776,
    restRouteBias: 0.0022,
    forgeRouteBias: -12.5378,
    treasureRouteBias: 17.5329,
    branchingRouteBias: 26.7974,
    riskTolerance: 5.1638,
    aggressionPlanBias: 31.527,
    controlPlanBias: 20.155,
    tempoPlanBias: -4.5201,
    fusionPlanBias: 29.0177,
    precisionPlanBias: -6.664,
    uncommonCardBias: -8.8112,
    rareCardBias: 2.2793,
    charmSynergyBias: 36.5431,
    duplicateCardPenalty: -2.3074,
    enemyProfileRespect: 37.9113,
  },
};
