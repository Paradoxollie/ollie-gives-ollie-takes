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
  name: "trained-bot-20261015-204501",
  trainedAt: "2026-10-15T20:45:01.276Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 79.02090000000001,
    shieldDiff: 72.4907,
    drawBonusDiff: 7.3497,
    manaBonusDiff: 80.6883,
    poisonDiff: 57.3779,
    controlDiff: 57.05005,
    boardStrengthDiff: 30.6237,
    boardManaDiff: 58.6995,
    stackSynergyDiff: 83.58185,
    reserveStrengthDiff: 29.7259,
    handStrengthDiff: 16.05255,
    mobilityDiff: 24.3018,
    cornerControlDiff: 5.38225,
    occupiedBoardDiff: -15.89115,
    imminentRoundDamageDiff: 58.63975,
    activeTurnTempo: 20.02955,
    specialCardValue: 15.56405,
    deckTrimValue: 5.33935,
    eliteRouteBias: -0.34709999999999996,
    restRouteBias: 6.6969,
    forgeRouteBias: 0.5446,
    treasureRouteBias: 4.883900000000001,
    branchingRouteBias: 0,
    riskTolerance: 3.42195,
    aggressionPlanBias: 3.19555,
    controlPlanBias: 1.5361000000000002,
    tempoPlanBias: -6.50845,
    fusionPlanBias: 18,
    precisionPlanBias: -7.3322,
    uncommonCardBias: 5.80645,
    rareCardBias: 8.07295,
    charmSynergyBias: 2.41995,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.3528,
  },
};
