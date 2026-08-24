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
  name: "trained-bot-20260824-103916",
  trainedAt: "2026-08-24T10:39:16.149Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.257,
    shieldDiff: 105.8257,
    drawBonusDiff: 58.2338,
    manaBonusDiff: 104.1125,
    poisonDiff: 67.9959,
    controlDiff: 89.6479,
    boardStrengthDiff: 13.9848,
    boardManaDiff: 65.2496,
    stackSynergyDiff: 6.4882,
    reserveStrengthDiff: 7.3159,
    handStrengthDiff: 28.0196,
    mobilityDiff: 5.7747,
    cornerControlDiff: 5.9106,
    occupiedBoardDiff: -3.9549,
    imminentRoundDamageDiff: 77.0743,
    activeTurnTempo: 43.4401,
    specialCardValue: 8.3228,
    deckTrimValue: 6.7346,
    eliteRouteBias: 5.821,
    restRouteBias: 10.1396,
    forgeRouteBias: 5.0613,
    treasureRouteBias: 6.1669,
    branchingRouteBias: 0.5185,
    riskTolerance: 2.01,
    aggressionPlanBias: 13.0774,
    controlPlanBias: 6.4744,
    tempoPlanBias: 6.1147,
    fusionPlanBias: -8.683,
    precisionPlanBias: 6.9659,
    uncommonCardBias: -4,
    rareCardBias: -0.3015,
    charmSynergyBias: 5.2842,
    duplicateCardPenalty: 1.3448,
    enemyProfileRespect: 1.3384,
  },
};
