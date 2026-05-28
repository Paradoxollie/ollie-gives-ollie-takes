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
  name: "trained-bot-20260527-225300",
  trainedAt: "2026-05-27T22:53:00.319Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 58.3658,
    controlDiff: 14.3835,
    boardStrengthDiff: 29.7902,
    reserveStrengthDiff: 46.6418,
    handStrengthDiff: 2.94,
    mobilityDiff: -0.9531,
    cornerControlDiff: 39.4315,
    occupiedBoardDiff: 16.2559,
    imminentRoundDamageDiff: -24.8493,
    activeTurnTempo: -28.7941,
    specialCardValue: 6.7904,
    deckTrimValue: -27.0854,
    eliteRouteBias: -61.8738,
    restRouteBias: -9.0933,
    forgeRouteBias: 13.9173,
    treasureRouteBias: 15.8102,
    branchingRouteBias: 20.5356,
    riskTolerance: 41.8191,
    aggressionPlanBias: 10.5081,
    controlPlanBias: 32.2097,
    tempoPlanBias: -5.8934,
    fusionPlanBias: 15.161,
    precisionPlanBias: 6.7637,
    uncommonCardBias: 7.9511,
    rareCardBias: 32.7924,
    charmSynergyBias: 39.1777,
    duplicateCardPenalty: -21.4106,
    enemyProfileRespect: 18.2294,
  },
};
