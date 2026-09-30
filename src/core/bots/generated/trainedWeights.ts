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
  name: "trained-bot-20260930-200353",
  trainedAt: "2026-09-30T20:03:53.246Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 59.727,
    shieldDiff: 98.4134,
    drawBonusDiff: 18.1748,
    manaBonusDiff: 59.9959,
    poisonDiff: 59.6585,
    controlDiff: 31.267,
    boardStrengthDiff: 20.4288,
    boardManaDiff: 61.7,
    stackSynergyDiff: 59.8839,
    reserveStrengthDiff: 12.779,
    handStrengthDiff: -9.316,
    mobilityDiff: -5.4656,
    cornerControlDiff: 0,
    occupiedBoardDiff: -5.2397,
    imminentRoundDamageDiff: 44.5058,
    activeTurnTempo: 8.3989,
    specialCardValue: 3.9556,
    deckTrimValue: 0,
    eliteRouteBias: 7.1031,
    restRouteBias: 5.0485,
    forgeRouteBias: 0.1401,
    treasureRouteBias: 12,
    branchingRouteBias: 0.5613,
    riskTolerance: 2.1199,
    aggressionPlanBias: 2.8149,
    controlPlanBias: -12,
    tempoPlanBias: -7.1539,
    fusionPlanBias: -1.8429,
    precisionPlanBias: -5.0339,
    uncommonCardBias: -2.2302,
    rareCardBias: 12,
    charmSynergyBias: 1.9132,
    duplicateCardPenalty: 7.7473,
    enemyProfileRespect: 7.0522,
  },
};
