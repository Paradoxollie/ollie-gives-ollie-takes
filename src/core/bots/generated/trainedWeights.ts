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
  name: "trained-bot-20261020-171459",
  trainedAt: "2026-10-20T17:14:59.579Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.04235,
    shieldDiff: 89.78925,
    drawBonusDiff: 0.83855,
    manaBonusDiff: 77.311,
    poisonDiff: 60.68485,
    controlDiff: 75.6627,
    boardStrengthDiff: 19.80195,
    boardManaDiff: 47.62545,
    stackSynergyDiff: 93.74435,
    reserveStrengthDiff: 13.815,
    handStrengthDiff: 4.37015,
    mobilityDiff: 26.336550000000003,
    cornerControlDiff: 16.9324,
    occupiedBoardDiff: -18.3328,
    imminentRoundDamageDiff: 89.75450000000001,
    activeTurnTempo: 22.45095,
    specialCardValue: 10.14105,
    deckTrimValue: 7.5046,
    eliteRouteBias: -1.12735,
    restRouteBias: 10.899149999999999,
    forgeRouteBias: 0.72915,
    treasureRouteBias: 6.928649999999999,
    branchingRouteBias: 4.2555,
    riskTolerance: -0.3877999999999999,
    aggressionPlanBias: 8.6869,
    controlPlanBias: -5.058,
    tempoPlanBias: -9.65755,
    fusionPlanBias: 12.13915,
    precisionPlanBias: -8.4431,
    uncommonCardBias: -2.2984999999999998,
    rareCardBias: 12,
    charmSynergyBias: 10.37765,
    duplicateCardPenalty: 0.97605,
    enemyProfileRespect: 3.7124499999999996,
  },
};
