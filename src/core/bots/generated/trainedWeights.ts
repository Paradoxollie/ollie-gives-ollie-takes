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
  name: "trained-bot-20260628-153316",
  trainedAt: "2026-06-28T15:33:16.717Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.8249,
    shieldDiff: 58.8121,
    drawBonusDiff: 8.233,
    manaBonusDiff: 79.55,
    poisonDiff: 67.2048,
    controlDiff: 15.2927,
    boardStrengthDiff: 17.5436,
    boardManaDiff: 18.0471,
    stackSynergyDiff: 2.3568,
    reserveStrengthDiff: 18.3119,
    handStrengthDiff: 29.2709,
    mobilityDiff: 10.067,
    cornerControlDiff: 19.9163,
    occupiedBoardDiff: 35.054,
    imminentRoundDamageDiff: 46.9757,
    activeTurnTempo: 12.4485,
    specialCardValue: 16.7418,
    deckTrimValue: 0,
    eliteRouteBias: -5.5057,
    restRouteBias: 4.2426,
    forgeRouteBias: 4.6948,
    treasureRouteBias: 11.7559,
    branchingRouteBias: 2.8636,
    riskTolerance: 7.2997,
    aggressionPlanBias: 0.1214,
    controlPlanBias: 13.972,
    tempoPlanBias: -8.4083,
    fusionPlanBias: 5.9547,
    precisionPlanBias: 0.0033,
    uncommonCardBias: 10,
    rareCardBias: 6.0155,
    charmSynergyBias: 5.4661,
    duplicateCardPenalty: 8.0736,
    enemyProfileRespect: 2.757,
  },
};
