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
  name: "trained-bot-20260727-161627",
  trainedAt: "2026-07-27T16:16:27.302Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 140,
    shieldDiff: 68.4343,
    drawBonusDiff: 42.8004,
    manaBonusDiff: 63.9602,
    poisonDiff: 63.9977,
    controlDiff: 80.1395,
    boardStrengthDiff: 43.8942,
    boardManaDiff: 20.1687,
    stackSynergyDiff: 1.6436,
    reserveStrengthDiff: 17.7153,
    handStrengthDiff: 12.3515,
    mobilityDiff: 24.9869,
    cornerControlDiff: 4.7848,
    occupiedBoardDiff: -10.336,
    imminentRoundDamageDiff: 37.5318,
    activeTurnTempo: 23.5386,
    specialCardValue: 16.433,
    deckTrimValue: 10.9693,
    eliteRouteBias: 2.8874,
    restRouteBias: 3.3233,
    forgeRouteBias: 1.7131,
    treasureRouteBias: 3.6875,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: 3.8724,
    controlPlanBias: 14.5299,
    tempoPlanBias: -3.3977,
    fusionPlanBias: 14.4738,
    precisionPlanBias: 15.8801,
    uncommonCardBias: -1.6848,
    rareCardBias: 12,
    charmSynergyBias: 6.365,
    duplicateCardPenalty: 5.3403,
    enemyProfileRespect: 6.5307,
  },
};
