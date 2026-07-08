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
  name: "trained-bot-20260708-134538",
  trainedAt: "2026-07-08T13:45:38.625Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.3795,
    shieldDiff: 64.7371,
    drawBonusDiff: 16.9213,
    manaBonusDiff: 69.9428,
    poisonDiff: 66.6193,
    controlDiff: 19.3916,
    boardStrengthDiff: 23.859,
    boardManaDiff: 7.2103,
    stackSynergyDiff: 8.2646,
    reserveStrengthDiff: 24.4248,
    handStrengthDiff: 6.602,
    mobilityDiff: 25.8767,
    cornerControlDiff: 6.7136,
    occupiedBoardDiff: 41.6496,
    imminentRoundDamageDiff: 68.0357,
    activeTurnTempo: 14.9336,
    specialCardValue: 14.3954,
    deckTrimValue: 14,
    eliteRouteBias: -0.8022,
    restRouteBias: 5.739,
    forgeRouteBias: 2.4909,
    treasureRouteBias: 12,
    branchingRouteBias: 7.5842,
    riskTolerance: 6.5863,
    aggressionPlanBias: 0.9887,
    controlPlanBias: 4.0379,
    tempoPlanBias: -2.3459,
    fusionPlanBias: 4.9556,
    precisionPlanBias: 4.5459,
    uncommonCardBias: 6.6973,
    rareCardBias: -0.0499,
    charmSynergyBias: 12.4892,
    duplicateCardPenalty: 3.1721,
    enemyProfileRespect: 0,
  },
};
