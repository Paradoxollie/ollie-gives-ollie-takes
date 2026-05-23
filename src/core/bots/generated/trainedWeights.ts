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
  name: "trained-bot-20260523-194049",
  trainedAt: "2026-05-23T19:40:49.638Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 32.8679,
    controlDiff: 13.6836,
    boardStrengthDiff: 25.6007,
    reserveStrengthDiff: 38.6486,
    handStrengthDiff: 18.6106,
    mobilityDiff: 0.6098,
    cornerControlDiff: 18.1614,
    occupiedBoardDiff: 20.3051,
    imminentRoundDamageDiff: -2.72,
    activeTurnTempo: -16.0564,
    specialCardValue: -12.1922,
    deckTrimValue: -30.1485,
    eliteRouteBias: -47.7245,
    restRouteBias: -2.8404,
    forgeRouteBias: -2.2333,
    treasureRouteBias: 14.0394,
    branchingRouteBias: 19.9559,
    riskTolerance: 17.2674,
    aggressionPlanBias: 32.0576,
    controlPlanBias: 13.9565,
    tempoPlanBias: 5.8897,
    fusionPlanBias: 18.7156,
    precisionPlanBias: 5.9282,
    uncommonCardBias: 8.5358,
    rareCardBias: 19.1672,
    charmSynergyBias: 39.7459,
    duplicateCardPenalty: -17.2456,
    enemyProfileRespect: 23.2097,
  },
};
