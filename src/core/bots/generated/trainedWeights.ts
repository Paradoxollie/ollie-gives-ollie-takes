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
  name: "trained-bot-20260527-121950",
  trainedAt: "2026-05-27T12:19:50.502Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 55.3122,
    controlDiff: 16.367,
    boardStrengthDiff: 30.6106,
    reserveStrengthDiff: 31.7081,
    handStrengthDiff: 10.0177,
    mobilityDiff: -1.6626,
    cornerControlDiff: 38.4234,
    occupiedBoardDiff: 13.2869,
    imminentRoundDamageDiff: -27.0732,
    activeTurnTempo: -25.8468,
    specialCardValue: 3.6493,
    deckTrimValue: -29.1097,
    eliteRouteBias: -67.4537,
    restRouteBias: -10.9898,
    forgeRouteBias: 8.5883,
    treasureRouteBias: 24.085,
    branchingRouteBias: 25.5846,
    riskTolerance: 32.3149,
    aggressionPlanBias: 1.505,
    controlPlanBias: 24.1238,
    tempoPlanBias: -1.2512,
    fusionPlanBias: 15.2164,
    precisionPlanBias: 16.367,
    uncommonCardBias: 11.3856,
    rareCardBias: 15.0038,
    charmSynergyBias: 34.0987,
    duplicateCardPenalty: -23.9219,
    enemyProfileRespect: 19.0173,
  },
};
