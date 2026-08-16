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
  name: "trained-bot-20260816-122910",
  trainedAt: "2026-08-16T12:29:10.394Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.9403,
    shieldDiff: 113.9747,
    drawBonusDiff: 42.2715,
    manaBonusDiff: 98.4071,
    poisonDiff: 57.358,
    controlDiff: 69.7148,
    boardStrengthDiff: 12.7153,
    boardManaDiff: 44.0395,
    stackSynergyDiff: 31.4314,
    reserveStrengthDiff: 0.8301,
    handStrengthDiff: 38.3863,
    mobilityDiff: -2.2276,
    cornerControlDiff: 10.9422,
    occupiedBoardDiff: 10.0456,
    imminentRoundDamageDiff: 67.9978,
    activeTurnTempo: 32.1266,
    specialCardValue: 9.4169,
    deckTrimValue: 6.7909,
    eliteRouteBias: 4.2311,
    restRouteBias: 8.8887,
    forgeRouteBias: 8.3781,
    treasureRouteBias: 10.0381,
    branchingRouteBias: 5.9941,
    riskTolerance: 0.3057,
    aggressionPlanBias: 17.3549,
    controlPlanBias: 12.7222,
    tempoPlanBias: -3.4291,
    fusionPlanBias: 6.9309,
    precisionPlanBias: 9.0539,
    uncommonCardBias: 6.646,
    rareCardBias: 4.5946,
    charmSynergyBias: 10.122,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 4.7521,
  },
};
