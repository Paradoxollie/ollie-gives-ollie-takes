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
  name: "trained-bot-20261125-084034",
  trainedAt: "2026-11-25T08:40:34.411Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 51.2578,
    shieldDiff: 32.5193,
    drawBonusDiff: 49.3531,
    manaBonusDiff: 6.8345,
    poisonDiff: 71.457,
    controlDiff: 116.2471,
    boardStrengthDiff: 16.9728,
    boardManaDiff: 22.375,
    stackSynergyDiff: 105.0749,
    reserveStrengthDiff: 18.0957,
    handStrengthDiff: -1.8922,
    mobilityDiff: 30,
    cornerControlDiff: 11.9824,
    occupiedBoardDiff: -17.4242,
    imminentRoundDamageDiff: 88.8622,
    activeTurnTempo: 42.3592,
    specialCardValue: 14.4198,
    deckTrimValue: 1.9956,
    eliteRouteBias: 2.3278,
    restRouteBias: 7.8591,
    forgeRouteBias: 5.1371,
    treasureRouteBias: 3.1781,
    branchingRouteBias: 8.2351,
    riskTolerance: 1.6962,
    aggressionPlanBias: -3.5318,
    controlPlanBias: -0.4573,
    tempoPlanBias: -5.0612,
    fusionPlanBias: 17.5833,
    precisionPlanBias: -6.3681,
    uncommonCardBias: 2.0086,
    rareCardBias: 1.3243,
    charmSynergyBias: 4.8478,
    duplicateCardPenalty: 6.6698,
    enemyProfileRespect: 1.4039,
  },
};
