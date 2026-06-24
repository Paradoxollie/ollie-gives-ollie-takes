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
  name: "trained-bot-20260623-200339",
  trainedAt: "2026-06-23T20:03:39.685Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 111.6827,
    shieldDiff: 58.1557,
    drawBonusDiff: 9.6519,
    manaBonusDiff: 84.2881,
    poisonDiff: 95.6675,
    controlDiff: 12.6519,
    boardStrengthDiff: 31.1394,
    boardManaDiff: 14.369,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 26.8788,
    handStrengthDiff: 50,
    mobilityDiff: 12.0252,
    cornerControlDiff: 46.7179,
    occupiedBoardDiff: 8.0593,
    imminentRoundDamageDiff: 63.2385,
    activeTurnTempo: 8.4819,
    specialCardValue: 18,
    deckTrimValue: 9.1447,
    eliteRouteBias: 8,
    restRouteBias: 1.5952,
    forgeRouteBias: 7.9818,
    treasureRouteBias: 5.4467,
    branchingRouteBias: 4.1724,
    riskTolerance: 2.2004,
    aggressionPlanBias: -0.9829,
    controlPlanBias: 17.3325,
    tempoPlanBias: 16.8638,
    fusionPlanBias: -6.9731,
    precisionPlanBias: -2.2767,
    uncommonCardBias: 4.3981,
    rareCardBias: -2.1897,
    charmSynergyBias: 3.2412,
    duplicateCardPenalty: 3.675,
    enemyProfileRespect: 1.0154,
  },
};
