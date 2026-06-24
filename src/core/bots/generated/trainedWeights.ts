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
  name: "trained-bot-20260624-103718",
  trainedAt: "2026-06-24T10:37:18.498Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.3733,
    shieldDiff: 44.3014,
    drawBonusDiff: 5.6104,
    manaBonusDiff: 76.6929,
    poisonDiff: 93.5508,
    controlDiff: 6.0178,
    boardStrengthDiff: 34.036,
    boardManaDiff: 21.2844,
    stackSynergyDiff: 3.8696,
    reserveStrengthDiff: 16.4876,
    handStrengthDiff: 49.0655,
    mobilityDiff: 15.703,
    cornerControlDiff: 49.5429,
    occupiedBoardDiff: 10.8423,
    imminentRoundDamageDiff: 61.957,
    activeTurnTempo: 15.0089,
    specialCardValue: 18,
    deckTrimValue: 8.4048,
    eliteRouteBias: -0.0496,
    restRouteBias: 12,
    forgeRouteBias: 8.6957,
    treasureRouteBias: 1.4895,
    branchingRouteBias: 2.0661,
    riskTolerance: -1.4464,
    aggressionPlanBias: -12,
    controlPlanBias: 18,
    tempoPlanBias: 18,
    fusionPlanBias: -0.147,
    precisionPlanBias: 3.4751,
    uncommonCardBias: -0.0795,
    rareCardBias: -4,
    charmSynergyBias: 5.1275,
    duplicateCardPenalty: 8.8657,
    enemyProfileRespect: 10,
  },
};
