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
  name: "trained-bot-20260713-161853",
  trainedAt: "2026-07-13T16:18:53.927Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 112.10385,
    shieldDiff: 66.07315,
    drawBonusDiff: 5.89475,
    manaBonusDiff: 60.0466,
    poisonDiff: 61.6263,
    controlDiff: 39.087199999999996,
    boardStrengthDiff: 38.41265,
    boardManaDiff: 8.20235,
    stackSynergyDiff: 19.279249999999998,
    reserveStrengthDiff: 20.5679,
    handStrengthDiff: 13.21455,
    mobilityDiff: 18.749049999999997,
    cornerControlDiff: 1.7478,
    occupiedBoardDiff: 32.32465,
    imminentRoundDamageDiff: 76.14,
    activeTurnTempo: 12.2411,
    specialCardValue: 9.3294,
    deckTrimValue: 5.59995,
    eliteRouteBias: 5.47015,
    restRouteBias: 8.15225,
    forgeRouteBias: 9.72,
    treasureRouteBias: 10.9301,
    branchingRouteBias: 5.9694,
    riskTolerance: -2.9256,
    aggressionPlanBias: -12,
    controlPlanBias: 6.91935,
    tempoPlanBias: -6.1175,
    fusionPlanBias: -3.5527499999999996,
    precisionPlanBias: -0.8807500000000001,
    uncommonCardBias: -4,
    rareCardBias: -4,
    charmSynergyBias: 1.2745000000000002,
    duplicateCardPenalty: 6.776350000000001,
    enemyProfileRespect: 7.9578500000000005,
  },
};
