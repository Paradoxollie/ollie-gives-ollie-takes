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
  name: "trained-bot-20260519-043626",
  trainedAt: "2026-05-19T04:36:26.776Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 2.9165,
    controlDiff: 9.4308,
    boardStrengthDiff: 7.0874,
    reserveStrengthDiff: 26.7783,
    handStrengthDiff: -22.4921,
    mobilityDiff: 10.447,
    cornerControlDiff: 5.7393,
    occupiedBoardDiff: 7.2925,
    imminentRoundDamageDiff: 9.4971,
    activeTurnTempo: -15.3354,
    specialCardValue: -10.5234,
    deckTrimValue: -24.9247,
    eliteRouteBias: -38.2924,
    restRouteBias: -4.8161,
    forgeRouteBias: -18.6761,
    treasureRouteBias: 18.1359,
    branchingRouteBias: 35.3424,
    riskTolerance: 8.8411,
    aggressionPlanBias: 22.1155,
    controlPlanBias: 17.3407,
    tempoPlanBias: -18.328,
    fusionPlanBias: 10.8125,
    precisionPlanBias: 5.6942,
    uncommonCardBias: -2.0584,
    rareCardBias: 8.6855,
    charmSynergyBias: 32.3042,
    duplicateCardPenalty: -5.4417,
    enemyProfileRespect: 25.2343,
  },
};
