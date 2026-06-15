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
  name: "trained-bot-20260615-053015",
  trainedAt: "2026-06-15T05:30:15.829Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.3483,
    shieldDiff: 70.353,
    drawBonusDiff: 46.2127,
    manaBonusDiff: 74.6694,
    poisonDiff: 103.3371,
    controlDiff: 3.0601,
    boardStrengthDiff: 49.1473,
    boardManaDiff: 14.942,
    stackSynergyDiff: 1.6576,
    reserveStrengthDiff: 13.2427,
    handStrengthDiff: 38.2839,
    mobilityDiff: -1.5207,
    cornerControlDiff: 61.6328,
    occupiedBoardDiff: 37.4713,
    imminentRoundDamageDiff: 31.9637,
    activeTurnTempo: -4.0468,
    specialCardValue: 11.1542,
    deckTrimValue: 1.6329,
    eliteRouteBias: -2.4256,
    restRouteBias: 10.5742,
    forgeRouteBias: 12,
    treasureRouteBias: 9.3668,
    branchingRouteBias: 7.592,
    riskTolerance: 3.7696,
    aggressionPlanBias: 6.035,
    controlPlanBias: 12.4803,
    tempoPlanBias: 0.2204,
    fusionPlanBias: -0.9277,
    precisionPlanBias: -2.6765,
    uncommonCardBias: 0.5908,
    rareCardBias: -1.696,
    charmSynergyBias: 3.6127,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.1421,
  },
};
