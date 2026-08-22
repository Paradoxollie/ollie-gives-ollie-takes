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
  name: "trained-bot-20260821-221235",
  trainedAt: "2026-08-21T22:12:35.174Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.5481,
    shieldDiff: 102.9989,
    drawBonusDiff: 57.1013,
    manaBonusDiff: 93.3285,
    poisonDiff: 70.7963,
    controlDiff: 84.763,
    boardStrengthDiff: 7.5334,
    boardManaDiff: 49.7019,
    stackSynergyDiff: 0,
    reserveStrengthDiff: -1.8328,
    handStrengthDiff: 42.7462,
    mobilityDiff: 5.919,
    cornerControlDiff: 7.4932,
    occupiedBoardDiff: 6.9222,
    imminentRoundDamageDiff: 76.867,
    activeTurnTempo: 59.6482,
    specialCardValue: 7.5402,
    deckTrimValue: 5.2078,
    eliteRouteBias: -8,
    restRouteBias: 11.0538,
    forgeRouteBias: 8.7549,
    treasureRouteBias: 3.186,
    branchingRouteBias: 2.6684,
    riskTolerance: 1.8292,
    aggressionPlanBias: 4.635,
    controlPlanBias: 15.6548,
    tempoPlanBias: 2.1361,
    fusionPlanBias: -1.525,
    precisionPlanBias: -10.4259,
    uncommonCardBias: 0.803,
    rareCardBias: -1.2192,
    charmSynergyBias: 4.1168,
    duplicateCardPenalty: 4.0695,
    enemyProfileRespect: 6.9039,
  },
};
