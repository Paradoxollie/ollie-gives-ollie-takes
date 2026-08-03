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
  name: "trained-bot-20260803-133656",
  trainedAt: "2026-08-03T13:36:56.873Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 121.3171,
    shieldDiff: 70.1127,
    drawBonusDiff: 44.3552,
    manaBonusDiff: 72.7204,
    poisonDiff: 35.432,
    controlDiff: 66.3767,
    boardStrengthDiff: 19.6066,
    boardManaDiff: 40.2323,
    stackSynergyDiff: 17.9325,
    reserveStrengthDiff: 2.825,
    handStrengthDiff: 25.1334,
    mobilityDiff: -3.4648,
    cornerControlDiff: 8.7811,
    occupiedBoardDiff: 3.856,
    imminentRoundDamageDiff: 34.309,
    activeTurnTempo: 20.4314,
    specialCardValue: 18,
    deckTrimValue: 10.0622,
    eliteRouteBias: -1.4446,
    restRouteBias: 12,
    forgeRouteBias: 2.4645,
    treasureRouteBias: 10.1943,
    branchingRouteBias: 5.3948,
    riskTolerance: 8,
    aggressionPlanBias: 12.0003,
    controlPlanBias: 11.5471,
    tempoPlanBias: -4.6258,
    fusionPlanBias: 16.2479,
    precisionPlanBias: 0.9189,
    uncommonCardBias: 7.0172,
    rareCardBias: 10.2649,
    charmSynergyBias: -0.5657,
    duplicateCardPenalty: 2.2829,
    enemyProfileRespect: 6.0641,
  },
};
