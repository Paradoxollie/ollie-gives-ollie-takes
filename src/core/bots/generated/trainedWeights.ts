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
  name: "trained-bot-20261104-022311",
  trainedAt: "2026-11-04T02:23:11.468Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.4996,
    shieldDiff: 66.7298,
    drawBonusDiff: 14.6363,
    manaBonusDiff: 29.2337,
    poisonDiff: 61.4191,
    controlDiff: 109.1481,
    boardStrengthDiff: 20.1043,
    boardManaDiff: 9.7062,
    stackSynergyDiff: 116.8352,
    reserveStrengthDiff: 21.3084,
    handStrengthDiff: -2.6103,
    mobilityDiff: 25.4567,
    cornerControlDiff: 21.5024,
    occupiedBoardDiff: -22.5753,
    imminentRoundDamageDiff: 100.8325,
    activeTurnTempo: 18.5403,
    specialCardValue: 16.1243,
    deckTrimValue: 0,
    eliteRouteBias: -0.0192,
    restRouteBias: 7.3227,
    forgeRouteBias: 4.3257,
    treasureRouteBias: 10.1715,
    branchingRouteBias: 2.3161,
    riskTolerance: 5.1281,
    aggressionPlanBias: -5.1251,
    controlPlanBias: 18,
    tempoPlanBias: -8.7569,
    fusionPlanBias: 4.4206,
    precisionPlanBias: -3.4059,
    uncommonCardBias: -0.4602,
    rareCardBias: 10.6947,
    charmSynergyBias: 10.3691,
    duplicateCardPenalty: 4.9168,
    enemyProfileRespect: 10,
  },
};
