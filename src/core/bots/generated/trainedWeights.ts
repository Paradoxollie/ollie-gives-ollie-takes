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
  name: "trained-bot-20260604-153607",
  trainedAt: "2026-06-04T15:36:07.222Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 104.9082,
    shieldDiff: 43.9743,
    drawBonusDiff: 84.2822,
    controlDiff: 4.2207,
    boardStrengthDiff: 43.6488,
    boardManaDiff: 26.0834,
    stackSynergyDiff: 31.43,
    reserveStrengthDiff: 24.4117,
    handStrengthDiff: 26.3675,
    mobilityDiff: 7.8796,
    cornerControlDiff: 35.211,
    occupiedBoardDiff: 23.9018,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -17.4833,
    specialCardValue: 17.6499,
    deckTrimValue: 5.1862,
    eliteRouteBias: 0.186,
    restRouteBias: 9.5202,
    forgeRouteBias: 9.5428,
    treasureRouteBias: 1.1827,
    branchingRouteBias: 10,
    riskTolerance: 3.3819,
    aggressionPlanBias: 14.7038,
    controlPlanBias: 12.6085,
    tempoPlanBias: -12,
    fusionPlanBias: -2.0206,
    precisionPlanBias: -1.9336,
    uncommonCardBias: 3.6309,
    rareCardBias: 10.9404,
    charmSynergyBias: 10.069,
    duplicateCardPenalty: 6.3255,
    enemyProfileRespect: 1.8791,
  },
};
