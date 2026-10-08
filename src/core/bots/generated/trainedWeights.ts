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
  name: "trained-bot-20261007-203904",
  trainedAt: "2026-10-07T20:39:04.168Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 56.016400000000004,
    shieldDiff: 75.86892499999999,
    drawBonusDiff: 13.765,
    manaBonusDiff: 76.5248,
    poisonDiff: 62.386075,
    controlDiff: 26.876224999999998,
    boardStrengthDiff: 20.5676,
    boardManaDiff: 69.795175,
    stackSynergyDiff: 69.58455,
    reserveStrengthDiff: 19.838625,
    handStrengthDiff: 11.722999999999999,
    mobilityDiff: -5.5203500000000005,
    cornerControlDiff: 5.987,
    occupiedBoardDiff: -15.297700000000003,
    imminentRoundDamageDiff: 42.876475,
    activeTurnTempo: 16.545125,
    specialCardValue: 15.508675,
    deckTrimValue: 2.235175,
    eliteRouteBias: -8,
    restRouteBias: 0.0828,
    forgeRouteBias: 11.45585,
    treasureRouteBias: 2.78225,
    branchingRouteBias: 8.993025,
    riskTolerance: 1.1205250000000002,
    aggressionPlanBias: 0.3828499999999999,
    controlPlanBias: 15.627950000000002,
    tempoPlanBias: -11.540525,
    fusionPlanBias: -1.651075,
    precisionPlanBias: -4.008275,
    uncommonCardBias: 6.858625,
    rareCardBias: 4.853149999999999,
    charmSynergyBias: 7.571349999999999,
    duplicateCardPenalty: 8.447675,
    enemyProfileRespect: 0.14645,
  },
};
