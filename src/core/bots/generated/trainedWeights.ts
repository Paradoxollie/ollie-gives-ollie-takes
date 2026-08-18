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
  name: "trained-bot-20260818-174414",
  trainedAt: "2026-08-18T17:44:14.031Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 117.0364,
    shieldDiff: 113.7036,
    drawBonusDiff: 38.3995,
    manaBonusDiff: 102.166,
    poisonDiff: 76.0721,
    controlDiff: 92.8044,
    boardStrengthDiff: 10.66,
    boardManaDiff: 42.0379,
    stackSynergyDiff: 16.7493,
    reserveStrengthDiff: -10,
    handStrengthDiff: 49.6383,
    mobilityDiff: -10,
    cornerControlDiff: 11.2335,
    occupiedBoardDiff: 7.7308,
    imminentRoundDamageDiff: 64.5446,
    activeTurnTempo: 35.7593,
    specialCardValue: 18,
    deckTrimValue: 3.6916,
    eliteRouteBias: 6.1413,
    restRouteBias: 9.0532,
    forgeRouteBias: 10.308,
    treasureRouteBias: 11.8544,
    branchingRouteBias: 5.6619,
    riskTolerance: 2.1813,
    aggressionPlanBias: 0.6234,
    controlPlanBias: 10.4165,
    tempoPlanBias: 8.6968,
    fusionPlanBias: 7.6941,
    precisionPlanBias: 4.6432,
    uncommonCardBias: -3.0596,
    rareCardBias: 3.002,
    charmSynergyBias: 10.3287,
    duplicateCardPenalty: 4.0971,
    enemyProfileRespect: 9.2875,
  },
};
