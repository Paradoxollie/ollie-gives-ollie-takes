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
  name: "trained-bot-20260908-013959",
  trainedAt: "2026-09-08T01:39:59.543Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.2914,
    shieldDiff: 103.1871,
    drawBonusDiff: 60.139,
    manaBonusDiff: 91.2577,
    poisonDiff: 49.4865,
    controlDiff: 67.4029,
    boardStrengthDiff: 3.2532,
    boardManaDiff: 63.5691,
    stackSynergyDiff: 37.4093,
    reserveStrengthDiff: 29.1234,
    handStrengthDiff: -10,
    mobilityDiff: 17.3899,
    cornerControlDiff: 23.8641,
    occupiedBoardDiff: -17.2004,
    imminentRoundDamageDiff: 75.6369,
    activeTurnTempo: 26.1497,
    specialCardValue: 14.5757,
    deckTrimValue: 0.5236,
    eliteRouteBias: 8,
    restRouteBias: 9.5543,
    forgeRouteBias: 1.3886,
    treasureRouteBias: 12,
    branchingRouteBias: 3.4422,
    riskTolerance: 0.0815,
    aggressionPlanBias: -7.8401,
    controlPlanBias: 15.1378,
    tempoPlanBias: 3.0009,
    fusionPlanBias: 5.7421,
    precisionPlanBias: 4.7444,
    uncommonCardBias: 9.6067,
    rareCardBias: 7.2176,
    charmSynergyBias: 11.6922,
    duplicateCardPenalty: 2.7856,
    enemyProfileRespect: 4.4744,
  },
};
