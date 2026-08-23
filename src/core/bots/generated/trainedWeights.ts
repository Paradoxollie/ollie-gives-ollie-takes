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
  name: "trained-bot-20260822-185842",
  trainedAt: "2026-08-22T18:58:42.396Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 88.3855,
    shieldDiff: 102.5177,
    drawBonusDiff: 60.6386,
    manaBonusDiff: 86.9632,
    poisonDiff: 77.1994,
    controlDiff: 87.0729,
    boardStrengthDiff: 11.846,
    boardManaDiff: 58.8172,
    stackSynergyDiff: 2.8007,
    reserveStrengthDiff: 0.7723,
    handStrengthDiff: 35.2711,
    mobilityDiff: 4.9224,
    cornerControlDiff: 13.0833,
    occupiedBoardDiff: 1.1227,
    imminentRoundDamageDiff: 74.1636,
    activeTurnTempo: 60,
    specialCardValue: 8.8054,
    deckTrimValue: 8.2241,
    eliteRouteBias: -1.5414,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 4.124,
    branchingRouteBias: 6.6461,
    riskTolerance: 4.0387,
    aggressionPlanBias: 5.3671,
    controlPlanBias: 11.7764,
    tempoPlanBias: 4.684,
    fusionPlanBias: 5.1485,
    precisionPlanBias: 5.0805,
    uncommonCardBias: -0.1617,
    rareCardBias: 2.5975,
    charmSynergyBias: 0.0671,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 1.8607,
  },
};
