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
  name: "trained-bot-20260822-032520",
  trainedAt: "2026-08-22T03:25:20.653Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 89.8282,
    shieldDiff: 104.0012,
    drawBonusDiff: 53.4382,
    manaBonusDiff: 94.8041,
    poisonDiff: 70.8203,
    controlDiff: 82.7348,
    boardStrengthDiff: 7.993,
    boardManaDiff: 55.4033,
    stackSynergyDiff: 2.6915,
    reserveStrengthDiff: 4.4061,
    handStrengthDiff: 41.7887,
    mobilityDiff: 1.8007,
    cornerControlDiff: 8.5677,
    occupiedBoardDiff: 7.1273,
    imminentRoundDamageDiff: 75.745,
    activeTurnTempo: 57.844,
    specialCardValue: 12.0644,
    deckTrimValue: 10.248,
    eliteRouteBias: -5.3765,
    restRouteBias: 3.9106,
    forgeRouteBias: 7.2757,
    treasureRouteBias: 0.7011,
    branchingRouteBias: 0.9303,
    riskTolerance: 3.1479,
    aggressionPlanBias: 7.2881,
    controlPlanBias: 16.4819,
    tempoPlanBias: 4.0032,
    fusionPlanBias: -1.2455,
    precisionPlanBias: -8.1735,
    uncommonCardBias: 0.015,
    rareCardBias: -4,
    charmSynergyBias: 3.6744,
    duplicateCardPenalty: 3.7668,
    enemyProfileRespect: 4.2028,
  },
};
