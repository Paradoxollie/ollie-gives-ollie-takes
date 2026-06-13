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
  name: "trained-bot-20260612-213114",
  trainedAt: "2026-06-12T21:31:14.650Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.3427,
    shieldDiff: 52.0839,
    drawBonusDiff: 65.781,
    manaBonusDiff: 97.6953,
    poisonDiff: 97.1829,
    controlDiff: 9.4432,
    boardStrengthDiff: 57.1642,
    boardManaDiff: 9.0998,
    stackSynergyDiff: 14.4413,
    reserveStrengthDiff: 30,
    handStrengthDiff: 22.2523,
    mobilityDiff: 6.6158,
    cornerControlDiff: 56.3668,
    occupiedBoardDiff: 39.6644,
    imminentRoundDamageDiff: 18.053,
    activeTurnTempo: 0.9047,
    specialCardValue: 16.992,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 4.7213,
    forgeRouteBias: 11.7949,
    treasureRouteBias: 1.9955,
    branchingRouteBias: 10,
    riskTolerance: 2.3594,
    aggressionPlanBias: 10.814,
    controlPlanBias: 14.2811,
    tempoPlanBias: -4.2641,
    fusionPlanBias: 10.8966,
    precisionPlanBias: 0.1751,
    uncommonCardBias: 10,
    rareCardBias: -4,
    charmSynergyBias: 3.5278,
    duplicateCardPenalty: 3.386,
    enemyProfileRespect: 10,
  },
};
