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
  name: "trained-bot-20260629-230225",
  trainedAt: "2026-06-29T23:02:25.705Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 113.0539,
    shieldDiff: 63.3082,
    drawBonusDiff: 3.9793,
    manaBonusDiff: 78.1405,
    poisonDiff: 58.7356,
    controlDiff: 13.5537,
    boardStrengthDiff: 23.3069,
    boardManaDiff: 16.4566,
    stackSynergyDiff: 4.4955,
    reserveStrengthDiff: 10.6183,
    handStrengthDiff: 35.1251,
    mobilityDiff: 16.766,
    cornerControlDiff: 6.5715,
    occupiedBoardDiff: 33.4882,
    imminentRoundDamageDiff: 48.428,
    activeTurnTempo: 12.0481,
    specialCardValue: 17.5375,
    deckTrimValue: 4.3816,
    eliteRouteBias: -4.0308,
    restRouteBias: 4.4819,
    forgeRouteBias: 0,
    treasureRouteBias: 3.8839,
    branchingRouteBias: 10,
    riskTolerance: -1.2356,
    aggressionPlanBias: -2.2173,
    controlPlanBias: 7.5126,
    tempoPlanBias: -6.5083,
    fusionPlanBias: 2.8451,
    precisionPlanBias: 7.3857,
    uncommonCardBias: 3.5214,
    rareCardBias: 11.6477,
    charmSynergyBias: 1.1747,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 9.6174,
  },
};
