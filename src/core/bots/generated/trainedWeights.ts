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
  name: "trained-bot-20260711-005515",
  trainedAt: "2026-07-11T00:55:15.792Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.149,
    shieldDiff: 56.64745,
    drawBonusDiff: 16.5933,
    manaBonusDiff: 69.62115,
    poisonDiff: 64.08045,
    controlDiff: 15.279600000000002,
    boardStrengthDiff: 34.102850000000004,
    boardManaDiff: 8.22835,
    stackSynergyDiff: 9.77505,
    reserveStrengthDiff: 20.11155,
    handStrengthDiff: 17.106650000000002,
    mobilityDiff: 25.6218,
    cornerControlDiff: 1.7174999999999998,
    occupiedBoardDiff: 41.57925,
    imminentRoundDamageDiff: 78.85810000000001,
    activeTurnTempo: 15.66825,
    specialCardValue: 14.7264,
    deckTrimValue: 12.238900000000001,
    eliteRouteBias: -5.43,
    restRouteBias: 0.6083,
    forgeRouteBias: 8.270150000000001,
    treasureRouteBias: 7.829750000000001,
    branchingRouteBias: 1.3512,
    riskTolerance: 5.496650000000001,
    aggressionPlanBias: -5.133900000000001,
    controlPlanBias: 9.9164,
    tempoPlanBias: -7.90255,
    fusionPlanBias: -1.5134500000000002,
    precisionPlanBias: 7.63955,
    uncommonCardBias: 6.9404,
    rareCardBias: 5.74025,
    charmSynergyBias: 13.20225,
    duplicateCardPenalty: 2.51935,
    enemyProfileRespect: 0.14965,
  },
};
