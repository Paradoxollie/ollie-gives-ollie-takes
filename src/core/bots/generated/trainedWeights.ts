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
  name: "trained-bot-20260922-060652",
  trainedAt: "2026-09-22T06:06:52.880Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.605,
    shieldDiff: 100.6828,
    drawBonusDiff: 28.1437,
    manaBonusDiff: 68.8601,
    poisonDiff: 42.805,
    controlDiff: 51.4858,
    boardStrengthDiff: 23.0781,
    boardManaDiff: 62.2658,
    stackSynergyDiff: 47.8503,
    reserveStrengthDiff: 18.8813,
    handStrengthDiff: -8.8859,
    mobilityDiff: 28.2224,
    cornerControlDiff: 27.7099,
    occupiedBoardDiff: -18.7742,
    imminentRoundDamageDiff: 45.9882,
    activeTurnTempo: 16.6764,
    specialCardValue: 16.5534,
    deckTrimValue: 4.1666,
    eliteRouteBias: -8,
    restRouteBias: 8.0563,
    forgeRouteBias: 4.0271,
    treasureRouteBias: 12,
    branchingRouteBias: 0.877,
    riskTolerance: 4.5276,
    aggressionPlanBias: 8.3357,
    controlPlanBias: 17.8274,
    tempoPlanBias: -10.7346,
    fusionPlanBias: -7.2155,
    precisionPlanBias: -0.0276,
    uncommonCardBias: 6.6458,
    rareCardBias: 10.7032,
    charmSynergyBias: -0.1241,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
