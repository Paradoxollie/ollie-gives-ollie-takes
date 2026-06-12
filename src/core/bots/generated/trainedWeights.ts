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
  name: "trained-bot-20260611-212755",
  trainedAt: "2026-06-11T21:27:55.304Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.5681,
    shieldDiff: 39.4163,
    drawBonusDiff: 63.1121,
    manaBonusDiff: 107.9039,
    poisonDiff: 97.8242,
    controlDiff: 5.375,
    boardStrengthDiff: 45.8223,
    boardManaDiff: 0,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 25.028,
    handStrengthDiff: 23.3874,
    mobilityDiff: 7.429,
    cornerControlDiff: 54.4613,
    occupiedBoardDiff: 36.3785,
    imminentRoundDamageDiff: 4.2897,
    activeTurnTempo: 9.906,
    specialCardValue: 8.5663,
    deckTrimValue: 0,
    eliteRouteBias: 2.7727,
    restRouteBias: 5.1947,
    forgeRouteBias: 8.8344,
    treasureRouteBias: 0,
    branchingRouteBias: 10,
    riskTolerance: 0.4712,
    aggressionPlanBias: 10.8056,
    controlPlanBias: 18,
    tempoPlanBias: -2.898,
    fusionPlanBias: 11.4492,
    precisionPlanBias: -1.6498,
    uncommonCardBias: 10,
    rareCardBias: 7.3818,
    charmSynergyBias: 4.2897,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.2535,
  },
};
