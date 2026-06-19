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
  name: "trained-bot-20260619-163759",
  trainedAt: "2026-06-19T16:37:59.196Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.4149,
    shieldDiff: 83.1,
    drawBonusDiff: 12.4775,
    manaBonusDiff: 72.5797,
    poisonDiff: 95.1772,
    controlDiff: 11.0844,
    boardStrengthDiff: 46.3524,
    boardManaDiff: 32.1985,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 19.9896,
    handStrengthDiff: 45.242,
    mobilityDiff: 4.5644,
    cornerControlDiff: 63.4503,
    occupiedBoardDiff: 11.2805,
    imminentRoundDamageDiff: 49.5654,
    activeTurnTempo: 8.814,
    specialCardValue: 9.272,
    deckTrimValue: 7.3903,
    eliteRouteBias: 2.7861,
    restRouteBias: 3.4291,
    forgeRouteBias: 12,
    treasureRouteBias: 5.6974,
    branchingRouteBias: 0.9232,
    riskTolerance: 1.2985,
    aggressionPlanBias: -3.9443,
    controlPlanBias: 8.9276,
    tempoPlanBias: -5.7239,
    fusionPlanBias: -3.1676,
    precisionPlanBias: 9.6859,
    uncommonCardBias: 0.6029,
    rareCardBias: 1.1469,
    charmSynergyBias: 0.5681,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
