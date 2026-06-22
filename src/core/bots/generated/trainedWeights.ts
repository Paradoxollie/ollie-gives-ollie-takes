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
  name: "trained-bot-20260622-174355",
  trainedAt: "2026-06-22T17:43:55.600Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 111.1287,
    shieldDiff: 61.582,
    drawBonusDiff: 15.2142,
    manaBonusDiff: 85.2716,
    poisonDiff: 94.7517,
    controlDiff: 16.2953,
    boardStrengthDiff: 46.1294,
    boardManaDiff: 0.4901,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 29.3563,
    handStrengthDiff: 43.9461,
    mobilityDiff: 9.1605,
    cornerControlDiff: 49.6556,
    occupiedBoardDiff: 3.3005,
    imminentRoundDamageDiff: 57.1187,
    activeTurnTempo: 8.1338,
    specialCardValue: 14.1766,
    deckTrimValue: 6.0254,
    eliteRouteBias: 0.2057,
    restRouteBias: 5.5865,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: 4.8532,
    aggressionPlanBias: -1.1419,
    controlPlanBias: 16.7729,
    tempoPlanBias: 13.1139,
    fusionPlanBias: -8.2043,
    precisionPlanBias: 0.4925,
    uncommonCardBias: 2.576,
    rareCardBias: -0.9281,
    charmSynergyBias: 2.3954,
    duplicateCardPenalty: 5.3173,
    enemyProfileRespect: 4.591,
  },
};
