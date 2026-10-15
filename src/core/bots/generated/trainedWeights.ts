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
  name: "trained-bot-20261015-002257",
  trainedAt: "2026-10-15T00:22:57.213Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.5841,
    shieldDiff: 71.0844,
    drawBonusDiff: 4.6977,
    manaBonusDiff: 76.9616,
    poisonDiff: 62.6233,
    controlDiff: 59.1369,
    boardStrengthDiff: 25.8808,
    boardManaDiff: 61.1694,
    stackSynergyDiff: 83.2364,
    reserveStrengthDiff: 28.5205,
    handStrengthDiff: 14.5709,
    mobilityDiff: 19.1884,
    cornerControlDiff: 5.1925,
    occupiedBoardDiff: -7.687,
    imminentRoundDamageDiff: 54.4312,
    activeTurnTempo: 22.9919,
    specialCardValue: 18,
    deckTrimValue: 6.3519,
    eliteRouteBias: 1.5996,
    restRouteBias: 2.0266,
    forgeRouteBias: 6.3085,
    treasureRouteBias: 3.9946,
    branchingRouteBias: 1.5468,
    riskTolerance: -4,
    aggressionPlanBias: 2.3277,
    controlPlanBias: 1.7955,
    tempoPlanBias: -5.0321,
    fusionPlanBias: 18,
    precisionPlanBias: -8.8157,
    uncommonCardBias: 10,
    rareCardBias: -0.6501,
    charmSynergyBias: -1.0721,
    duplicateCardPenalty: 7.858,
    enemyProfileRespect: 4.6441,
  },
};
