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
  name: "trained-bot-20260531-121348",
  trainedAt: "2026-05-31T12:13:48.172Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 73.2328,
    controlDiff: 12.8935,
    boardStrengthDiff: 34.4629,
    reserveStrengthDiff: 60.3446,
    handStrengthDiff: 1.8509,
    mobilityDiff: 4.8035,
    cornerControlDiff: 39.3093,
    occupiedBoardDiff: 28.9411,
    imminentRoundDamageDiff: -17.7609,
    activeTurnTempo: -16.4027,
    specialCardValue: 15.5995,
    deckTrimValue: -17.013,
    eliteRouteBias: -60.0415,
    restRouteBias: 1.3251,
    forgeRouteBias: 26.8577,
    treasureRouteBias: 26.3378,
    branchingRouteBias: 12.1456,
    riskTolerance: 42.1993,
    aggressionPlanBias: 28.3147,
    controlPlanBias: 23.2924,
    tempoPlanBias: -6.2824,
    fusionPlanBias: -6.1335,
    precisionPlanBias: -2.9281,
    uncommonCardBias: 29.2522,
    rareCardBias: 41.2901,
    charmSynergyBias: 53.1213,
    duplicateCardPenalty: 9.9978,
    enemyProfileRespect: 4.531,
  },
};
