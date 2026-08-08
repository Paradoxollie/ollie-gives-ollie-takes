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
  name: "trained-bot-20260808-013827",
  trainedAt: "2026-08-08T01:38:27.748Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.6817,
    shieldDiff: 86.3111,
    drawBonusDiff: 27.416,
    manaBonusDiff: 83.7213,
    poisonDiff: 36.5785,
    controlDiff: 69.7374,
    boardStrengthDiff: 10.1824,
    boardManaDiff: 40.8383,
    stackSynergyDiff: 24.6158,
    reserveStrengthDiff: 18.208,
    handStrengthDiff: 43.6547,
    mobilityDiff: 8.4422,
    cornerControlDiff: 2.1296,
    occupiedBoardDiff: 2.1849,
    imminentRoundDamageDiff: 35.5528,
    activeTurnTempo: 24.2413,
    specialCardValue: 12.4938,
    deckTrimValue: 11.8637,
    eliteRouteBias: -8,
    restRouteBias: 12,
    forgeRouteBias: 11.9854,
    treasureRouteBias: 12,
    branchingRouteBias: 7.9498,
    riskTolerance: -0.0997,
    aggressionPlanBias: 14.9868,
    controlPlanBias: 16.0995,
    tempoPlanBias: -0.0561,
    fusionPlanBias: 11.8396,
    precisionPlanBias: 13.6541,
    uncommonCardBias: 4.8633,
    rareCardBias: 6.937,
    charmSynergyBias: 6.7807,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 10,
  },
};
