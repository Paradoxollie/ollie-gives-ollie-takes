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
  name: "trained-bot-20261006-062521",
  trainedAt: "2026-10-06T06:25:21.563Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 61.0501,
    shieldDiff: 84.5376,
    drawBonusDiff: 9.3591,
    manaBonusDiff: 76.7572,
    poisonDiff: 63.2606,
    controlDiff: 32.9314,
    boardStrengthDiff: 23.7219,
    boardManaDiff: 77.3934,
    stackSynergyDiff: 85.0187,
    reserveStrengthDiff: 8.5065,
    handStrengthDiff: 6.2259,
    mobilityDiff: -7.5122,
    cornerControlDiff: 11.408,
    occupiedBoardDiff: -12.7514,
    imminentRoundDamageDiff: 36.6677,
    activeTurnTempo: 12.3311,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 1.9686,
    restRouteBias: 6.4713,
    forgeRouteBias: 11.4077,
    treasureRouteBias: 3.6947,
    branchingRouteBias: 7.7151,
    riskTolerance: -2.2487,
    aggressionPlanBias: -1.7103,
    controlPlanBias: 9.19,
    tempoPlanBias: -12,
    fusionPlanBias: 0.5646,
    precisionPlanBias: -2.4153,
    uncommonCardBias: -1.208,
    rareCardBias: 7.8869,
    charmSynergyBias: 2.6328,
    duplicateCardPenalty: 4.8171,
    enemyProfileRespect: 0,
  },
};
