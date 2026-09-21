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
  name: "trained-bot-20260921-160322",
  trainedAt: "2026-09-21T16:03:22.611Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.41895,
    shieldDiff: 106.5454,
    drawBonusDiff: 32.60325,
    manaBonusDiff: 80.14155,
    poisonDiff: 34.79175,
    controlDiff: 53.57325,
    boardStrengthDiff: 24.7256,
    boardManaDiff: 59.57185,
    stackSynergyDiff: 43.401399999999995,
    reserveStrengthDiff: 14.02075,
    handStrengthDiff: -9.104099999999999,
    mobilityDiff: 21.841949999999997,
    cornerControlDiff: 26.2731,
    occupiedBoardDiff: -23.296950000000002,
    imminentRoundDamageDiff: 50.218599999999995,
    activeTurnTempo: 21.647100000000002,
    specialCardValue: 16.7203,
    deckTrimValue: 12.76605,
    eliteRouteBias: -2.0063500000000003,
    restRouteBias: 1.0103,
    forgeRouteBias: 3.46695,
    treasureRouteBias: 0.53755,
    branchingRouteBias: 8.23285,
    riskTolerance: 5.6178,
    aggressionPlanBias: 7.984400000000001,
    controlPlanBias: 17.9902,
    tempoPlanBias: -7.47805,
    fusionPlanBias: -9.1867,
    precisionPlanBias: 13.62995,
    uncommonCardBias: 9.2584,
    rareCardBias: 10.499500000000001,
    charmSynergyBias: 3.8306,
    duplicateCardPenalty: 0.5051,
    enemyProfileRespect: 9.0182,
  },
};
