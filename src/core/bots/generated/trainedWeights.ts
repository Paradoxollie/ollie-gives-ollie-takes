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
  name: "trained-bot-20260805-233019",
  trainedAt: "2026-08-05T23:30:19.846Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.99,
    shieldDiff: 83.863,
    drawBonusDiff: 43.5885,
    manaBonusDiff: 79.2573,
    poisonDiff: 31.0888,
    controlDiff: 67.6723,
    boardStrengthDiff: 9.1707,
    boardManaDiff: 35.6397,
    stackSynergyDiff: 16.6344,
    reserveStrengthDiff: 9.3287,
    handStrengthDiff: 22.7174,
    mobilityDiff: 12.9881,
    cornerControlDiff: 18.1565,
    occupiedBoardDiff: -0.7375,
    imminentRoundDamageDiff: 37.3742,
    activeTurnTempo: 22.5777,
    specialCardValue: 12.176,
    deckTrimValue: 4.926,
    eliteRouteBias: -8,
    restRouteBias: 11.7395,
    forgeRouteBias: 8.5655,
    treasureRouteBias: 11.8074,
    branchingRouteBias: 3.1054,
    riskTolerance: -4,
    aggressionPlanBias: 9.3522,
    controlPlanBias: 14.9486,
    tempoPlanBias: 1.7325,
    fusionPlanBias: 7.6792,
    precisionPlanBias: 8.1314,
    uncommonCardBias: 10,
    rareCardBias: -3.5396,
    charmSynergyBias: 4.5035,
    duplicateCardPenalty: 5.4582,
    enemyProfileRespect: 8.5652,
  },
};
