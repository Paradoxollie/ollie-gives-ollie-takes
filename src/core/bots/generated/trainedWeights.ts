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
  name: "trained-bot-20261003-140437",
  trainedAt: "2026-10-03T14:04:37.929Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 61.8515,
    shieldDiff: 85.5766,
    drawBonusDiff: 17.638,
    manaBonusDiff: 53.4375,
    poisonDiff: 67.0544,
    controlDiff: 37.9542,
    boardStrengthDiff: 19.9982,
    boardManaDiff: 63.8266,
    stackSynergyDiff: 80.4873,
    reserveStrengthDiff: 17.0419,
    handStrengthDiff: 0.4115,
    mobilityDiff: -7.0534,
    cornerControlDiff: 6.7565,
    occupiedBoardDiff: -12.2664,
    imminentRoundDamageDiff: 27.2013,
    activeTurnTempo: 14.1505,
    specialCardValue: 7.4399,
    deckTrimValue: 0.2289,
    eliteRouteBias: 8,
    restRouteBias: 10.5444,
    forgeRouteBias: 8.1782,
    treasureRouteBias: 2.8023,
    branchingRouteBias: 8.5868,
    riskTolerance: -2.4978,
    aggressionPlanBias: -11.8157,
    controlPlanBias: -7.4962,
    tempoPlanBias: -7.1699,
    fusionPlanBias: -11.7137,
    precisionPlanBias: 3.924,
    uncommonCardBias: 9.9114,
    rareCardBias: 4.3669,
    charmSynergyBias: 7.813,
    duplicateCardPenalty: 8.9826,
    enemyProfileRespect: 3.7675,
  },
};
