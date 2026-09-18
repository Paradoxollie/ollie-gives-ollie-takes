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
  name: "trained-bot-20260918-154038",
  trainedAt: "2026-09-18T15:40:38.486Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.2812,
    shieldDiff: 97.8472,
    drawBonusDiff: 37.5619,
    manaBonusDiff: 93.3701,
    poisonDiff: 44.8032,
    controlDiff: 55.5505,
    boardStrengthDiff: 15.7188,
    boardManaDiff: 46.1265,
    stackSynergyDiff: 39.7126,
    reserveStrengthDiff: 27.2648,
    handStrengthDiff: -4.1657,
    mobilityDiff: 17.8094,
    cornerControlDiff: 19.1683,
    occupiedBoardDiff: -26.5331,
    imminentRoundDamageDiff: 52.8941,
    activeTurnTempo: 26.8164,
    specialCardValue: 15.8217,
    deckTrimValue: 1.9255,
    eliteRouteBias: -8,
    restRouteBias: 4.3403,
    forgeRouteBias: 10.5491,
    treasureRouteBias: 0,
    branchingRouteBias: 3.9638,
    riskTolerance: -2.5636,
    aggressionPlanBias: -1.6456,
    controlPlanBias: 14.4055,
    tempoPlanBias: -3.0173,
    fusionPlanBias: 1.6796,
    precisionPlanBias: 3.7509,
    uncommonCardBias: 1.1099,
    rareCardBias: -4,
    charmSynergyBias: 4.7488,
    duplicateCardPenalty: 9.8242,
    enemyProfileRespect: 2.031,
  },
};
