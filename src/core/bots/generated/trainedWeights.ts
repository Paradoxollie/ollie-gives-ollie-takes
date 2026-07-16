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
  name: "trained-bot-20260716-184539",
  trainedAt: "2026-07-16T18:45:39.613Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 129.8177,
    shieldDiff: 74.3045,
    drawBonusDiff: 20.8652,
    manaBonusDiff: 44.1174,
    poisonDiff: 69.2605,
    controlDiff: 40.813,
    boardStrengthDiff: 49.5198,
    boardManaDiff: 12.3311,
    stackSynergyDiff: 37.0551,
    reserveStrengthDiff: 20.1905,
    handStrengthDiff: 17.4134,
    mobilityDiff: 21.2826,
    cornerControlDiff: 6.8554,
    occupiedBoardDiff: 9.919,
    imminentRoundDamageDiff: 71.7259,
    activeTurnTempo: 35.0877,
    specialCardValue: 16.751,
    deckTrimValue: 11.1088,
    eliteRouteBias: 1.4018,
    restRouteBias: 8.3808,
    forgeRouteBias: 6.0423,
    treasureRouteBias: 6.7907,
    branchingRouteBias: 4.2991,
    riskTolerance: 3.2697,
    aggressionPlanBias: 4.0672,
    controlPlanBias: 4.5381,
    tempoPlanBias: -3.0515,
    fusionPlanBias: 9.0564,
    precisionPlanBias: -12,
    uncommonCardBias: 4.4006,
    rareCardBias: 0.0496,
    charmSynergyBias: 5.4398,
    duplicateCardPenalty: 5.5993,
    enemyProfileRespect: 10,
  },
};
