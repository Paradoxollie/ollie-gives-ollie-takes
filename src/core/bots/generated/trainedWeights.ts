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
  name: "trained-bot-20260820-092921",
  trainedAt: "2026-08-20T09:29:21.821Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.1496,
    shieldDiff: 104.2943,
    drawBonusDiff: 44.6294,
    manaBonusDiff: 95.1063,
    poisonDiff: 81.2548,
    controlDiff: 81.8796,
    boardStrengthDiff: 15.9324,
    boardManaDiff: 41.6684,
    stackSynergyDiff: 11.5636,
    reserveStrengthDiff: -3.3149,
    handStrengthDiff: 47.7165,
    mobilityDiff: 2.892,
    cornerControlDiff: 24.279,
    occupiedBoardDiff: -2.8827,
    imminentRoundDamageDiff: 68.1331,
    activeTurnTempo: 32.5259,
    specialCardValue: 6.311,
    deckTrimValue: 1.0423,
    eliteRouteBias: -0.7628,
    restRouteBias: 8.9962,
    forgeRouteBias: 3.4001,
    treasureRouteBias: 5.5616,
    branchingRouteBias: 9.6427,
    riskTolerance: -2.5686,
    aggressionPlanBias: -6.896,
    controlPlanBias: 12.7282,
    tempoPlanBias: 7.1712,
    fusionPlanBias: -1.2496,
    precisionPlanBias: -3.5876,
    uncommonCardBias: 6.0891,
    rareCardBias: -0.6252,
    charmSynergyBias: 4.5672,
    duplicateCardPenalty: 9.5606,
    enemyProfileRespect: 7.0099,
  },
};
