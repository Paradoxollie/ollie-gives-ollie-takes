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
  name: "trained-bot-20261106-232320",
  trainedAt: "2026-11-06T23:23:20.290Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.4236,
    shieldDiff: 89.3834,
    drawBonusDiff: 6.2904,
    manaBonusDiff: 29.0357,
    poisonDiff: 65.0696,
    controlDiff: 129.7318,
    boardStrengthDiff: 25.8262,
    boardManaDiff: 13.9156,
    stackSynergyDiff: 111.7612,
    reserveStrengthDiff: 20.204,
    handStrengthDiff: -2.1739,
    mobilityDiff: 28.1238,
    cornerControlDiff: 17.2861,
    occupiedBoardDiff: -28.7944,
    imminentRoundDamageDiff: 102.9579,
    activeTurnTempo: 20.6916,
    specialCardValue: 11.3584,
    deckTrimValue: 5.0517,
    eliteRouteBias: -7.0528,
    restRouteBias: 4.2857,
    forgeRouteBias: 1.5917,
    treasureRouteBias: 9.6627,
    branchingRouteBias: 7.6356,
    riskTolerance: 2.2549,
    aggressionPlanBias: -8.8843,
    controlPlanBias: 15.308,
    tempoPlanBias: -0.9345,
    fusionPlanBias: 4.9479,
    precisionPlanBias: -4.0581,
    uncommonCardBias: 2.2214,
    rareCardBias: 7.7154,
    charmSynergyBias: 8.0101,
    duplicateCardPenalty: 0.8631,
    enemyProfileRespect: 7.1087,
  },
};
