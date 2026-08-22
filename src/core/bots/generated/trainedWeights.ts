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
  name: "trained-bot-20260822-134246",
  trainedAt: "2026-08-22T13:42:46.361Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.4009,
    shieldDiff: 102.4931,
    drawBonusDiff: 57.9308,
    manaBonusDiff: 88.3199,
    poisonDiff: 81.2069,
    controlDiff: 91.634,
    boardStrengthDiff: 8.1694,
    boardManaDiff: 58.2898,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 5.0359,
    handStrengthDiff: 37.502,
    mobilityDiff: 4.4993,
    cornerControlDiff: 10.4181,
    occupiedBoardDiff: 0.5417,
    imminentRoundDamageDiff: 74.2409,
    activeTurnTempo: 60,
    specialCardValue: 11.1234,
    deckTrimValue: 14,
    eliteRouteBias: -8,
    restRouteBias: 4.5639,
    forgeRouteBias: 12,
    treasureRouteBias: 6.7011,
    branchingRouteBias: 8.6868,
    riskTolerance: 4.7919,
    aggressionPlanBias: 5.8663,
    controlPlanBias: 15.7678,
    tempoPlanBias: -1.6153,
    fusionPlanBias: 4.4829,
    precisionPlanBias: 1.5675,
    uncommonCardBias: -0.5272,
    rareCardBias: 2.9922,
    charmSynergyBias: -0.4789,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 2.1239,
  },
};
