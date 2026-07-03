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
  name: "trained-bot-20260702-212359",
  trainedAt: "2026-07-02T21:23:59.730Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 107.0082,
    shieldDiff: 58.2939,
    drawBonusDiff: 1.0678,
    manaBonusDiff: 86.7216,
    poisonDiff: 56.9193,
    controlDiff: 9.5166,
    boardStrengthDiff: 34.1843,
    boardManaDiff: 11.6941,
    stackSynergyDiff: 5.1537,
    reserveStrengthDiff: 11.3596,
    handStrengthDiff: 26.56,
    mobilityDiff: 7.3997,
    cornerControlDiff: 0,
    occupiedBoardDiff: 50,
    imminentRoundDamageDiff: 45.2145,
    activeTurnTempo: 20.7919,
    specialCardValue: 18,
    deckTrimValue: 7.9055,
    eliteRouteBias: -2.0784,
    restRouteBias: 11.2589,
    forgeRouteBias: 2.5829,
    treasureRouteBias: 7.7368,
    branchingRouteBias: 8.8999,
    riskTolerance: 2.205,
    aggressionPlanBias: -11.5372,
    controlPlanBias: 18,
    tempoPlanBias: -7.4861,
    fusionPlanBias: 18,
    precisionPlanBias: 10.4651,
    uncommonCardBias: 6.8515,
    rareCardBias: 12,
    charmSynergyBias: 9.1927,
    duplicateCardPenalty: 7.5047,
    enemyProfileRespect: 10,
  },
};
