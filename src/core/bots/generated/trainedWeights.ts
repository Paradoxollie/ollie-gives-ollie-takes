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
  name: "trained-bot-20260604-202647",
  trainedAt: "2026-06-04T20:26:47.211Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.3651,
    shieldDiff: 45.1802,
    drawBonusDiff: 87.5652,
    controlDiff: 1.4608,
    boardStrengthDiff: 46.8773,
    boardManaDiff: 24.3115,
    stackSynergyDiff: 25.7168,
    reserveStrengthDiff: 25.2937,
    handStrengthDiff: 28.0054,
    mobilityDiff: 8.4166,
    cornerControlDiff: 32.0737,
    occupiedBoardDiff: 26.071,
    imminentRoundDamageDiff: 2.8252,
    activeTurnTempo: -16.8434,
    specialCardValue: 14.0289,
    deckTrimValue: 6.3801,
    eliteRouteBias: 3.059,
    restRouteBias: 12,
    forgeRouteBias: 11.2049,
    treasureRouteBias: 0,
    branchingRouteBias: 9.6803,
    riskTolerance: 8,
    aggressionPlanBias: 17.4995,
    controlPlanBias: 11.7599,
    tempoPlanBias: -8.657,
    fusionPlanBias: -0.2034,
    precisionPlanBias: 0.4167,
    uncommonCardBias: 5.6493,
    rareCardBias: 11.963,
    charmSynergyBias: 9.6651,
    duplicateCardPenalty: 6.5718,
    enemyProfileRespect: 4.124,
  },
};
