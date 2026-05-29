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
  name: "trained-bot-20260529-044647",
  trainedAt: "2026-05-29T04:46:47.349Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 50.9097,
    controlDiff: 27.1462,
    boardStrengthDiff: 46.3116,
    reserveStrengthDiff: 48.2003,
    handStrengthDiff: -14.4918,
    mobilityDiff: -8.3701,
    cornerControlDiff: 42.1444,
    occupiedBoardDiff: 26.9772,
    imminentRoundDamageDiff: -14.825,
    activeTurnTempo: -22.8837,
    specialCardValue: 9.6257,
    deckTrimValue: -23.1967,
    eliteRouteBias: -63.0125,
    restRouteBias: -16.1427,
    forgeRouteBias: 26.4635,
    treasureRouteBias: 24.5414,
    branchingRouteBias: 11.1338,
    riskTolerance: 42.7131,
    aggressionPlanBias: 5.1598,
    controlPlanBias: 31.0708,
    tempoPlanBias: -6.0636,
    fusionPlanBias: 0.9116,
    precisionPlanBias: 6.2058,
    uncommonCardBias: 16.3706,
    rareCardBias: 39.243,
    charmSynergyBias: 36.0435,
    duplicateCardPenalty: -9.7515,
    enemyProfileRespect: 20.2477,
  },
};
