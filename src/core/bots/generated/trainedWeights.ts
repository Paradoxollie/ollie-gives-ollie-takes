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
  name: "trained-bot-20261006-224029",
  trainedAt: "2026-10-06T22:40:29.836Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 62.0946,
    shieldDiff: 81.2763,
    drawBonusDiff: 14.5334,
    manaBonusDiff: 74.554,
    poisonDiff: 59.7875,
    controlDiff: 30.6834,
    boardStrengthDiff: 23.8503,
    boardManaDiff: 73.8302,
    stackSynergyDiff: 83.378,
    reserveStrengthDiff: 15.0233,
    handStrengthDiff: 6.3171,
    mobilityDiff: -10,
    cornerControlDiff: 8.3729,
    occupiedBoardDiff: -11.0798,
    imminentRoundDamageDiff: 34.9245,
    activeTurnTempo: 9.8523,
    specialCardValue: 18,
    deckTrimValue: 1.6266,
    eliteRouteBias: -4.9787,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 7.3367,
    branchingRouteBias: 9.5919,
    riskTolerance: 3.4932,
    aggressionPlanBias: -3.9214,
    controlPlanBias: 10.0887,
    tempoPlanBias: -12,
    fusionPlanBias: -5.6248,
    precisionPlanBias: 0.9234,
    uncommonCardBias: 1.3735,
    rareCardBias: 8.7118,
    charmSynergyBias: 6.1333,
    duplicateCardPenalty: 8.1225,
    enemyProfileRespect: 0,
  },
};
