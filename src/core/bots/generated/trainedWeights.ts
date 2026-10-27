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
  name: "trained-bot-20261027-014222",
  trainedAt: "2026-10-27T01:42:22.038Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 108.1692,
    shieldDiff: 75.0067,
    drawBonusDiff: 16.5959,
    manaBonusDiff: 50.4829,
    poisonDiff: 86.7315,
    controlDiff: 88.0399,
    boardStrengthDiff: 12.259,
    boardManaDiff: 24.5302,
    stackSynergyDiff: 103.2729,
    reserveStrengthDiff: 8.7118,
    handStrengthDiff: 6.3066,
    mobilityDiff: 21.808,
    cornerControlDiff: 12.7138,
    occupiedBoardDiff: -15.0255,
    imminentRoundDamageDiff: 93.9378,
    activeTurnTempo: 21.555,
    specialCardValue: 8.8865,
    deckTrimValue: 0,
    eliteRouteBias: -6.9209,
    restRouteBias: 1.3107,
    forgeRouteBias: 9.4735,
    treasureRouteBias: 12,
    branchingRouteBias: 5.5487,
    riskTolerance: 4.6853,
    aggressionPlanBias: -4.1729,
    controlPlanBias: -2.9204,
    tempoPlanBias: -2.6916,
    fusionPlanBias: 12.5232,
    precisionPlanBias: -2.7824,
    uncommonCardBias: 7.4141,
    rareCardBias: 2.1309,
    charmSynergyBias: 1.5691,
    duplicateCardPenalty: 6.0401,
    enemyProfileRespect: 5.2754,
  },
};
