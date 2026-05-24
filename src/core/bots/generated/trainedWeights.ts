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
  name: "trained-bot-20260524-044233",
  trainedAt: "2026-05-24T04:42:33.740Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 35.4886,
    controlDiff: 14.2999,
    boardStrengthDiff: 24.4355,
    reserveStrengthDiff: 32.6292,
    handStrengthDiff: 23.026,
    mobilityDiff: 3.3612,
    cornerControlDiff: 20.485,
    occupiedBoardDiff: 16.9174,
    imminentRoundDamageDiff: -3.8832,
    activeTurnTempo: -17.8905,
    specialCardValue: -4.9325,
    deckTrimValue: -35.5065,
    eliteRouteBias: -45.7139,
    restRouteBias: -3.1679,
    forgeRouteBias: -6.0264,
    treasureRouteBias: 17.1227,
    branchingRouteBias: 24.2413,
    riskTolerance: 22.6218,
    aggressionPlanBias: 24.1886,
    controlPlanBias: 9.3343,
    tempoPlanBias: 7.8596,
    fusionPlanBias: 17.0562,
    precisionPlanBias: 7.7256,
    uncommonCardBias: 10.9771,
    rareCardBias: 24.865,
    charmSynergyBias: 40.0146,
    duplicateCardPenalty: -13.1054,
    enemyProfileRespect: 21.3102,
  },
};
