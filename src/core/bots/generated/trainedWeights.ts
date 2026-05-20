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
  name: "trained-bot-20260520-160020",
  trainedAt: "2026-05-20T16:00:20.347Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 20.126,
    controlDiff: 22.2925,
    boardStrengthDiff: 18.6807,
    reserveStrengthDiff: 35.787,
    handStrengthDiff: -3.737,
    mobilityDiff: 8.8731,
    cornerControlDiff: 11.3987,
    occupiedBoardDiff: -0.9924,
    imminentRoundDamageDiff: -10.793,
    activeTurnTempo: -23.0356,
    specialCardValue: -11.4608,
    deckTrimValue: -20.2133,
    eliteRouteBias: -38.6,
    restRouteBias: 2.2086,
    forgeRouteBias: -12.816,
    treasureRouteBias: 16.9705,
    branchingRouteBias: 27.5507,
    riskTolerance: 4.5058,
    aggressionPlanBias: 22.3463,
    controlPlanBias: 18.1334,
    tempoPlanBias: -8.3227,
    fusionPlanBias: 27.4349,
    precisionPlanBias: -7.3111,
    uncommonCardBias: -10.1712,
    rareCardBias: -0.2146,
    charmSynergyBias: 38.8617,
    duplicateCardPenalty: -0.0412,
    enemyProfileRespect: 32.566,
  },
};
