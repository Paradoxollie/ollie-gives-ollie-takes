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
  name: "trained-bot-20260801-233745",
  trainedAt: "2026-08-01T23:37:45.211Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 123.329,
    shieldDiff: 65.8087,
    drawBonusDiff: 41.6153,
    manaBonusDiff: 65.3509,
    poisonDiff: 35.0784,
    controlDiff: 74.858,
    boardStrengthDiff: 19.3984,
    boardManaDiff: 39.3799,
    stackSynergyDiff: 24.6108,
    reserveStrengthDiff: 2.8349,
    handStrengthDiff: 26.8751,
    mobilityDiff: 15.9056,
    cornerControlDiff: 4.7328,
    occupiedBoardDiff: 17.3271,
    imminentRoundDamageDiff: 37.4792,
    activeTurnTempo: 9.3154,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: -3.5704,
    restRouteBias: 5.4007,
    forgeRouteBias: 0,
    treasureRouteBias: 9.4253,
    branchingRouteBias: 0,
    riskTolerance: 8,
    aggressionPlanBias: 4.2987,
    controlPlanBias: 18,
    tempoPlanBias: -10.8515,
    fusionPlanBias: 9.9239,
    precisionPlanBias: -2.1355,
    uncommonCardBias: 7.2965,
    rareCardBias: 8.3323,
    charmSynergyBias: 0.9137,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 9.3206,
  },
};
