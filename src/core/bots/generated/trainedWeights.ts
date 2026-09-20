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
  name: "trained-bot-20260920-055315",
  trainedAt: "2026-09-20T05:53:15.566Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.0011,
    shieldDiff: 112.6974,
    drawBonusDiff: 28.2674,
    manaBonusDiff: 79.7911,
    poisonDiff: 41.5444,
    controlDiff: 63.2088,
    boardStrengthDiff: 22.873,
    boardManaDiff: 49.913,
    stackSynergyDiff: 47.0473,
    reserveStrengthDiff: 26.0509,
    handStrengthDiff: -10,
    mobilityDiff: 23.7877,
    cornerControlDiff: 26.047,
    occupiedBoardDiff: -23.3041,
    imminentRoundDamageDiff: 55.6822,
    activeTurnTempo: 21.9892,
    specialCardValue: 12.4726,
    deckTrimValue: 14,
    eliteRouteBias: -8,
    restRouteBias: 3.3214,
    forgeRouteBias: 9.1187,
    treasureRouteBias: 5.5442,
    branchingRouteBias: 0,
    riskTolerance: -4,
    aggressionPlanBias: 2.7198,
    controlPlanBias: 16.5701,
    tempoPlanBias: -5.6331,
    fusionPlanBias: -5.0609,
    precisionPlanBias: 10.8791,
    uncommonCardBias: 9.4142,
    rareCardBias: 3.3639,
    charmSynergyBias: 13.6411,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.9672,
  },
};
