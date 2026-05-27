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
  name: "trained-bot-20260527-161448",
  trainedAt: "2026-05-27T16:14:48.781Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 57.7862,
    controlDiff: 17.582,
    boardStrengthDiff: 26.9073,
    reserveStrengthDiff: 29.3568,
    handStrengthDiff: 3.9259,
    mobilityDiff: -3.7941,
    cornerControlDiff: 45.0574,
    occupiedBoardDiff: 17.5113,
    imminentRoundDamageDiff: -25.679,
    activeTurnTempo: -29.188,
    specialCardValue: 1.6767,
    deckTrimValue: -26.2717,
    eliteRouteBias: -65.8794,
    restRouteBias: -18.0001,
    forgeRouteBias: 7.8206,
    treasureRouteBias: 24.1225,
    branchingRouteBias: 25.7029,
    riskTolerance: 34.1976,
    aggressionPlanBias: 6.3051,
    controlPlanBias: 28.9282,
    tempoPlanBias: 0.1028,
    fusionPlanBias: 12.4529,
    precisionPlanBias: 16.3131,
    uncommonCardBias: 12.5027,
    rareCardBias: 16.6159,
    charmSynergyBias: 35.778,
    duplicateCardPenalty: -22.4709,
    enemyProfileRespect: 19.3628,
  },
};
