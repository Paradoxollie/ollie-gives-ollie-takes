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
  name: "trained-bot-20260714-183324",
  trainedAt: "2026-07-14T18:33:24.226Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 124.3505,
    shieldDiff: 66.2113,
    drawBonusDiff: 6.828,
    manaBonusDiff: 62.6124,
    poisonDiff: 58.2602,
    controlDiff: 37.6818,
    boardStrengthDiff: 38.8219,
    boardManaDiff: 2.3072,
    stackSynergyDiff: 30.0956,
    reserveStrengthDiff: 15.6265,
    handStrengthDiff: 12.41,
    mobilityDiff: 24.14,
    cornerControlDiff: 9.6377,
    occupiedBoardDiff: 19.2957,
    imminentRoundDamageDiff: 74.4204,
    activeTurnTempo: 21.9556,
    specialCardValue: 7.5823,
    deckTrimValue: 4.1098,
    eliteRouteBias: 4.6284,
    restRouteBias: 5.7154,
    forgeRouteBias: 5.3923,
    treasureRouteBias: 7.6782,
    branchingRouteBias: 2.1496,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: 4.8714,
    tempoPlanBias: -0.336,
    fusionPlanBias: -1.2516,
    precisionPlanBias: -4.5996,
    uncommonCardBias: -3.97,
    rareCardBias: 0.5177,
    charmSynergyBias: -4,
    duplicateCardPenalty: 7.0531,
    enemyProfileRespect: 9.3922,
  },
};
