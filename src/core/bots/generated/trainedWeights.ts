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
  name: "trained-bot-20261108-194301",
  trainedAt: "2026-11-08T19:43:01.831Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 67.68075,
    shieldDiff: 86.1991,
    drawBonusDiff: 0,
    manaBonusDiff: 25.30875,
    poisonDiff: 73.4941,
    controlDiff: 131.40095,
    boardStrengthDiff: 22.53335,
    boardManaDiff: 14.1024,
    stackSynergyDiff: 101.30515,
    reserveStrengthDiff: 30,
    handStrengthDiff: -5.721,
    mobilityDiff: 28.3231,
    cornerControlDiff: 4.74775,
    occupiedBoardDiff: -21.494799999999998,
    imminentRoundDamageDiff: 96.39405,
    activeTurnTempo: 16.21295,
    specialCardValue: 9.049949999999999,
    deckTrimValue: 0.01525,
    eliteRouteBias: 1.9377499999999999,
    restRouteBias: 12,
    forgeRouteBias: 4.5961,
    treasureRouteBias: 5.13645,
    branchingRouteBias: 7.39335,
    riskTolerance: 3.8122499999999997,
    aggressionPlanBias: -4.1757,
    controlPlanBias: 17.29625,
    tempoPlanBias: -5.27675,
    fusionPlanBias: 5.5348999999999995,
    precisionPlanBias: -3.6464,
    uncommonCardBias: 0.4607,
    rareCardBias: 4.8497,
    charmSynergyBias: 10.79975,
    duplicateCardPenalty: 6.5512,
    enemyProfileRespect: 2.80435,
  },
};
