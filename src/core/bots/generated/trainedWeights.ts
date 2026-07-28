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
  name: "trained-bot-20260728-013939",
  trainedAt: "2026-07-28T01:39:39.796Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 135.0226,
    shieldDiff: 60.3357,
    drawBonusDiff: 40.2809,
    manaBonusDiff: 58.2802,
    poisonDiff: 59.7648,
    controlDiff: 79.997,
    boardStrengthDiff: 36.6805,
    boardManaDiff: 22.8847,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 15.5768,
    handStrengthDiff: 19.2902,
    mobilityDiff: 28.9634,
    cornerControlDiff: 0,
    occupiedBoardDiff: -7.1533,
    imminentRoundDamageDiff: 31.7276,
    activeTurnTempo: 24.6523,
    specialCardValue: 14.3588,
    deckTrimValue: 13.4384,
    eliteRouteBias: 6.4565,
    restRouteBias: 12,
    forgeRouteBias: 5.2928,
    treasureRouteBias: 4.0076,
    branchingRouteBias: 7.7946,
    riskTolerance: 1.7228,
    aggressionPlanBias: 5.8706,
    controlPlanBias: 18,
    tempoPlanBias: -3.7673,
    fusionPlanBias: 9.9784,
    precisionPlanBias: 17.5092,
    uncommonCardBias: -4,
    rareCardBias: 2.3583,
    charmSynergyBias: 10.3607,
    duplicateCardPenalty: 7.4707,
    enemyProfileRespect: 2.5665,
  },
};
