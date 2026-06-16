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
  name: "trained-bot-20260616-123611",
  trainedAt: "2026-06-16T12:36:11.541Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.987,
    shieldDiff: 79.2859,
    drawBonusDiff: 37.5207,
    manaBonusDiff: 74.2276,
    poisonDiff: 101.2189,
    controlDiff: 17.7861,
    boardStrengthDiff: 44.8037,
    boardManaDiff: 16.6293,
    stackSynergyDiff: 0.5824,
    reserveStrengthDiff: 10.7887,
    handStrengthDiff: 43.7985,
    mobilityDiff: -4.3635,
    cornerControlDiff: 69.6163,
    occupiedBoardDiff: 27.4146,
    imminentRoundDamageDiff: 31.4846,
    activeTurnTempo: -0.0833,
    specialCardValue: 16.195,
    deckTrimValue: 14,
    eliteRouteBias: -8,
    restRouteBias: 7.4524,
    forgeRouteBias: 8.0443,
    treasureRouteBias: 12,
    branchingRouteBias: 6.4383,
    riskTolerance: 3.8426,
    aggressionPlanBias: -0.2275,
    controlPlanBias: 18,
    tempoPlanBias: 12.3907,
    fusionPlanBias: -1.2288,
    precisionPlanBias: -10.1106,
    uncommonCardBias: 4.4717,
    rareCardBias: 2.1969,
    charmSynergyBias: 12.2231,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0.5877,
  },
};
