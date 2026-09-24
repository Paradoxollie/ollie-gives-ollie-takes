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
  name: "trained-bot-20260924-021854",
  trainedAt: "2026-09-24T02:18:54.154Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.893,
    shieldDiff: 96.6427,
    drawBonusDiff: 31.3711,
    manaBonusDiff: 73.8987,
    poisonDiff: 45.6454,
    controlDiff: 53.1066,
    boardStrengthDiff: 22.5585,
    boardManaDiff: 70.9296,
    stackSynergyDiff: 51.2877,
    reserveStrengthDiff: 14.2838,
    handStrengthDiff: 2.3244,
    mobilityDiff: 30,
    cornerControlDiff: 26.3713,
    occupiedBoardDiff: -25.8944,
    imminentRoundDamageDiff: 49.6742,
    activeTurnTempo: 27.8103,
    specialCardValue: 13.3955,
    deckTrimValue: 2.9537,
    eliteRouteBias: -2.7323,
    restRouteBias: 0.8581,
    forgeRouteBias: 12,
    treasureRouteBias: 8.2644,
    branchingRouteBias: 2.6679,
    riskTolerance: -4,
    aggressionPlanBias: -0.2032,
    controlPlanBias: 18,
    tempoPlanBias: -4.9684,
    fusionPlanBias: 7.1313,
    precisionPlanBias: -7.1186,
    uncommonCardBias: 8.5592,
    rareCardBias: 4.5981,
    charmSynergyBias: 1.2575,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 8.2697,
  },
};
