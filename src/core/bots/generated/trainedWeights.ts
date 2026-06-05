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
  name: "trained-bot-20260605-153225",
  trainedAt: "2026-06-05T15:32:25.152Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 104.7658,
    shieldDiff: 53.5241,
    drawBonusDiff: 80.5019,
    controlDiff: 0.4549,
    boardStrengthDiff: 48.5116,
    boardManaDiff: 19.8553,
    stackSynergyDiff: 18.6963,
    reserveStrengthDiff: 27.5436,
    handStrengthDiff: 22.3409,
    mobilityDiff: 11.812,
    cornerControlDiff: 42.463,
    occupiedBoardDiff: 23.9686,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -9.504,
    specialCardValue: 18,
    deckTrimValue: 7.6049,
    eliteRouteBias: 3.7732,
    restRouteBias: 0,
    forgeRouteBias: 0.8584,
    treasureRouteBias: 0,
    branchingRouteBias: 5.9927,
    riskTolerance: 8,
    aggressionPlanBias: 15.1848,
    controlPlanBias: 4.5552,
    tempoPlanBias: -12,
    fusionPlanBias: 6.1486,
    precisionPlanBias: 5.7955,
    uncommonCardBias: -1.2677,
    rareCardBias: 9.5048,
    charmSynergyBias: 8.5379,
    duplicateCardPenalty: 1.2007,
    enemyProfileRespect: 10,
  },
};
