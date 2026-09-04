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
  name: "trained-bot-20260904-012529",
  trainedAt: "2026-09-04T01:25:29.809Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.3454,
    shieldDiff: 116.1782,
    drawBonusDiff: 28.4406,
    manaBonusDiff: 90.1799,
    poisonDiff: 60.4377,
    controlDiff: 71.0064,
    boardStrengthDiff: 0,
    boardManaDiff: 74.1821,
    stackSynergyDiff: 7.3189,
    reserveStrengthDiff: 22.7643,
    handStrengthDiff: 14.6067,
    mobilityDiff: 19.2328,
    cornerControlDiff: 16.7494,
    occupiedBoardDiff: -17.8392,
    imminentRoundDamageDiff: 76.2703,
    activeTurnTempo: 59.7579,
    specialCardValue: 12.6486,
    deckTrimValue: 12.5288,
    eliteRouteBias: -0.5537,
    restRouteBias: 2.4269,
    forgeRouteBias: 0.3682,
    treasureRouteBias: 6.4273,
    branchingRouteBias: 4.3226,
    riskTolerance: -1.2454,
    aggressionPlanBias: 9.4032,
    controlPlanBias: 18,
    tempoPlanBias: -10.7563,
    fusionPlanBias: -0.2775,
    precisionPlanBias: 3.8936,
    uncommonCardBias: 4.5845,
    rareCardBias: 0.6716,
    charmSynergyBias: 8.931,
    duplicateCardPenalty: 9.542,
    enemyProfileRespect: 0.2075,
  },
};
