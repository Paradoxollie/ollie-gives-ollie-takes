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
  name: "trained-bot-20260901-003841",
  trainedAt: "2026-09-01T00:38:41.270Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.343,
    shieldDiff: 116.877,
    drawBonusDiff: 23.4793,
    manaBonusDiff: 88.8517,
    poisonDiff: 61.4113,
    controlDiff: 71.5301,
    boardStrengthDiff: 32.7574,
    boardManaDiff: 61.3181,
    stackSynergyDiff: 21.1333,
    reserveStrengthDiff: 12.8274,
    handStrengthDiff: 21.6647,
    mobilityDiff: 25.7906,
    cornerControlDiff: 6.5159,
    occupiedBoardDiff: -10.6059,
    imminentRoundDamageDiff: 66.3367,
    activeTurnTempo: 42.9378,
    specialCardValue: 17.8564,
    deckTrimValue: 0.4479,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 1.8484,
    treasureRouteBias: 9.006,
    branchingRouteBias: 9.6866,
    riskTolerance: 1.3544,
    aggressionPlanBias: 9.9021,
    controlPlanBias: -9.7839,
    tempoPlanBias: 7.3419,
    fusionPlanBias: -0.4252,
    precisionPlanBias: 0.6921,
    uncommonCardBias: 7.7157,
    rareCardBias: -4,
    charmSynergyBias: -2.7805,
    duplicateCardPenalty: 7.9845,
    enemyProfileRespect: 4.3,
  },
};
