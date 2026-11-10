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
  name: "trained-bot-20261110-013453",
  trainedAt: "2026-11-10T01:34:53.230Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 56.53325,
    shieldDiff: 89.00245,
    drawBonusDiff: 0,
    manaBonusDiff: 28.261400000000002,
    poisonDiff: 77.07794999999999,
    controlDiff: 131.2816,
    boardStrengthDiff: 26.024,
    boardManaDiff: 10.496,
    stackSynergyDiff: 101.8474,
    reserveStrengthDiff: 29.131300000000003,
    handStrengthDiff: -3.5486999999999997,
    mobilityDiff: 27.175150000000002,
    cornerControlDiff: 10.637,
    occupiedBoardDiff: -22.426000000000002,
    imminentRoundDamageDiff: 98.10175000000001,
    activeTurnTempo: 14.3563,
    specialCardValue: 3.9758500000000003,
    deckTrimValue: 7.51975,
    eliteRouteBias: 0.38165000000000004,
    restRouteBias: 11.41935,
    forgeRouteBias: 3.4271,
    treasureRouteBias: 5.6799,
    branchingRouteBias: 4.7711500000000004,
    riskTolerance: 0.02565000000000006,
    aggressionPlanBias: -5.259449999999999,
    controlPlanBias: 7.704599999999999,
    tempoPlanBias: -5.95045,
    fusionPlanBias: 0.7190999999999999,
    precisionPlanBias: -3.7272499999999997,
    uncommonCardBias: 0.5941999999999998,
    rareCardBias: 6.9572,
    charmSynergyBias: 10.66515,
    duplicateCardPenalty: 8.74145,
    enemyProfileRespect: 2.42595,
  },
};
