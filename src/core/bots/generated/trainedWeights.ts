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
  name: "trained-bot-20260803-024238",
  trainedAt: "2026-08-03T02:42:38.672Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 119.965,
    shieldDiff: 64.8042,
    drawBonusDiff: 43.8657,
    manaBonusDiff: 68.5901,
    poisonDiff: 36.6009,
    controlDiff: 66.8702,
    boardStrengthDiff: 13.1866,
    boardManaDiff: 42.9097,
    stackSynergyDiff: 18.0956,
    reserveStrengthDiff: 2.3231,
    handStrengthDiff: 25.9337,
    mobilityDiff: 1.6275,
    cornerControlDiff: 11.6875,
    occupiedBoardDiff: 11.7949,
    imminentRoundDamageDiff: 37.7957,
    activeTurnTempo: 16.3992,
    specialCardValue: 17.4996,
    deckTrimValue: 7.539,
    eliteRouteBias: -1.9978,
    restRouteBias: 5.8863,
    forgeRouteBias: 4.5575,
    treasureRouteBias: 8.6337,
    branchingRouteBias: 7.5762,
    riskTolerance: 6.9235,
    aggressionPlanBias: 9.75,
    controlPlanBias: 18,
    tempoPlanBias: -4.2732,
    fusionPlanBias: 17.7521,
    precisionPlanBias: -0.4141,
    uncommonCardBias: 9.1856,
    rareCardBias: 6.5555,
    charmSynergyBias: -2.5762,
    duplicateCardPenalty: 5.3267,
    enemyProfileRespect: 10,
  },
};
