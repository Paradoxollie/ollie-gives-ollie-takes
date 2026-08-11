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
  name: "trained-bot-20260811-100931",
  trainedAt: "2026-08-11T10:09:31.451Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.0783,
    shieldDiff: 93.1358,
    drawBonusDiff: 40.2292,
    manaBonusDiff: 89.9976,
    poisonDiff: 41.3418,
    controlDiff: 75.5828,
    boardStrengthDiff: 18.5248,
    boardManaDiff: 35.2873,
    stackSynergyDiff: 32.5714,
    reserveStrengthDiff: -2.7038,
    handStrengthDiff: 47.2487,
    mobilityDiff: -0.0806,
    cornerControlDiff: 7.0742,
    occupiedBoardDiff: 16.5892,
    imminentRoundDamageDiff: 40.0241,
    activeTurnTempo: 26.8407,
    specialCardValue: 13.6563,
    deckTrimValue: 5.3328,
    eliteRouteBias: -2.0897,
    restRouteBias: 5.0879,
    forgeRouteBias: 1.9339,
    treasureRouteBias: 5.4415,
    branchingRouteBias: 1.1179,
    riskTolerance: 5.3549,
    aggressionPlanBias: 0.5581,
    controlPlanBias: 6.7533,
    tempoPlanBias: -9.1212,
    fusionPlanBias: -2.8159,
    precisionPlanBias: 5.0011,
    uncommonCardBias: 2.1366,
    rareCardBias: 1.981,
    charmSynergyBias: -2.7512,
    duplicateCardPenalty: 5.0727,
    enemyProfileRespect: 10,
  },
};
