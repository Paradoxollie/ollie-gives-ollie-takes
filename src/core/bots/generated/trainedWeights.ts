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
  name: "trained-bot-20260722-091215",
  trainedAt: "2026-07-22T09:12:15.865Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 104.493,
    shieldDiff: 76.9346,
    drawBonusDiff: 35.5948,
    manaBonusDiff: 58.3103,
    poisonDiff: 68.3075,
    controlDiff: 65.0654,
    boardStrengthDiff: 41.0253,
    boardManaDiff: 9.2877,
    stackSynergyDiff: 17.809,
    reserveStrengthDiff: 24.4825,
    handStrengthDiff: 6.8097,
    mobilityDiff: 30,
    cornerControlDiff: 6.6361,
    occupiedBoardDiff: -3.038,
    imminentRoundDamageDiff: 40.9386,
    activeTurnTempo: 18.28,
    specialCardValue: 16.9693,
    deckTrimValue: 0,
    eliteRouteBias: -0.2598,
    restRouteBias: 10.6889,
    forgeRouteBias: 7.1101,
    treasureRouteBias: 1.7471,
    branchingRouteBias: 6.1901,
    riskTolerance: -4,
    aggressionPlanBias: 7.3556,
    controlPlanBias: 13.1048,
    tempoPlanBias: -3.5525,
    fusionPlanBias: 4.9107,
    precisionPlanBias: -7.0713,
    uncommonCardBias: 6.5966,
    rareCardBias: 6.8419,
    charmSynergyBias: 4.6371,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 2.3777,
  },
};
