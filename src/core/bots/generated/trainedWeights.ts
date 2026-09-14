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
  name: "trained-bot-20260913-205312",
  trainedAt: "2026-09-13T20:53:12.091Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.5076,
    shieldDiff: 107.4864,
    drawBonusDiff: 36.272,
    manaBonusDiff: 82.0083,
    poisonDiff: 46.3304,
    controlDiff: 47.5745,
    boardStrengthDiff: 1.3011,
    boardManaDiff: 52.985,
    stackSynergyDiff: 29.9478,
    reserveStrengthDiff: 18.4605,
    handStrengthDiff: 0.8517,
    mobilityDiff: 17.7853,
    cornerControlDiff: 7.5812,
    occupiedBoardDiff: -18.2888,
    imminentRoundDamageDiff: 63.0755,
    activeTurnTempo: 44.3732,
    specialCardValue: 8.9063,
    deckTrimValue: 0,
    eliteRouteBias: 1.9991,
    restRouteBias: 10.4359,
    forgeRouteBias: 8.8482,
    treasureRouteBias: 12,
    branchingRouteBias: 2.9778,
    riskTolerance: -1.2981,
    aggressionPlanBias: -6.5365,
    controlPlanBias: 9.6844,
    tempoPlanBias: -1.6029,
    fusionPlanBias: -0.003,
    precisionPlanBias: 5.8415,
    uncommonCardBias: 5.0477,
    rareCardBias: 7.3177,
    charmSynergyBias: -1.2591,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 6.3515,
  },
};
