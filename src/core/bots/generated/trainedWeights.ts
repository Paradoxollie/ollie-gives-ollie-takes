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
  name: "trained-bot-20260907-165117",
  trainedAt: "2026-09-07T16:51:17.551Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.8115,
    shieldDiff: 108.7021,
    drawBonusDiff: 55.9459,
    manaBonusDiff: 90.8078,
    poisonDiff: 49.502,
    controlDiff: 68.054,
    boardStrengthDiff: 2.5958,
    boardManaDiff: 66.782,
    stackSynergyDiff: 39.5925,
    reserveStrengthDiff: 29.8947,
    handStrengthDiff: -7.2437,
    mobilityDiff: 19.7426,
    cornerControlDiff: 23.3317,
    occupiedBoardDiff: -24.2248,
    imminentRoundDamageDiff: 74.9793,
    activeTurnTempo: 35.7553,
    specialCardValue: 17.0122,
    deckTrimValue: 2.3546,
    eliteRouteBias: 7.8903,
    restRouteBias: 5.0375,
    forgeRouteBias: 7.9507,
    treasureRouteBias: 3.9352,
    branchingRouteBias: 0.6069,
    riskTolerance: -3.6414,
    aggressionPlanBias: -8.2032,
    controlPlanBias: 12.3762,
    tempoPlanBias: 7.4627,
    fusionPlanBias: 4.4767,
    precisionPlanBias: 6.6746,
    uncommonCardBias: 6.7284,
    rareCardBias: 10.0122,
    charmSynergyBias: 11.5333,
    duplicateCardPenalty: 8.1863,
    enemyProfileRespect: 2.7895,
  },
};
