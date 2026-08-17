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
  name: "trained-bot-20260817-150626",
  trainedAt: "2026-08-17T15:06:26.238Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.2124,
    shieldDiff: 113.682,
    drawBonusDiff: 40.5318,
    manaBonusDiff: 101.5103,
    poisonDiff: 63.7599,
    controlDiff: 76.1523,
    boardStrengthDiff: 9.329,
    boardManaDiff: 43.4427,
    stackSynergyDiff: 27.0486,
    reserveStrengthDiff: -6.1539,
    handStrengthDiff: 37.7852,
    mobilityDiff: -4.3206,
    cornerControlDiff: 9.3583,
    occupiedBoardDiff: 6.2326,
    imminentRoundDamageDiff: 71.3528,
    activeTurnTempo: 36.9168,
    specialCardValue: 7.9152,
    deckTrimValue: 0.6194,
    eliteRouteBias: 3.5487,
    restRouteBias: 5.5898,
    forgeRouteBias: 12,
    treasureRouteBias: 12,
    branchingRouteBias: 2.3522,
    riskTolerance: -0.8203,
    aggressionPlanBias: 11.9822,
    controlPlanBias: 18,
    tempoPlanBias: -0.2875,
    fusionPlanBias: 3.2854,
    precisionPlanBias: 3.9151,
    uncommonCardBias: 3.3165,
    rareCardBias: 4.6781,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.9602,
  },
};
