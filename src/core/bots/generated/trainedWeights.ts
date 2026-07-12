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
  name: "trained-bot-20260712-090213",
  trainedAt: "2026-07-12T09:02:13.404Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.6828,
    shieldDiff: 57.7188,
    drawBonusDiff: 0,
    manaBonusDiff: 61.5071,
    poisonDiff: 69.47,
    controlDiff: 28.284,
    boardStrengthDiff: 37.3474,
    boardManaDiff: 0,
    stackSynergyDiff: 5.9091,
    reserveStrengthDiff: 13.0232,
    handStrengthDiff: 17.5646,
    mobilityDiff: 18.7462,
    cornerControlDiff: 4.8418,
    occupiedBoardDiff: 46.9935,
    imminentRoundDamageDiff: 79.0308,
    activeTurnTempo: 26.8341,
    specialCardValue: 14.1496,
    deckTrimValue: 5.2297,
    eliteRouteBias: -3.6909,
    restRouteBias: 7.332,
    forgeRouteBias: 11.2926,
    treasureRouteBias: 9.6337,
    branchingRouteBias: 8.3997,
    riskTolerance: -4,
    aggressionPlanBias: -10.489,
    controlPlanBias: 13.8156,
    tempoPlanBias: -8.0308,
    fusionPlanBias: -4.8048,
    precisionPlanBias: 0.2962,
    uncommonCardBias: 2.4442,
    rareCardBias: -0.5642,
    charmSynergyBias: 14,
    duplicateCardPenalty: 8.5261,
    enemyProfileRespect: 2.1603,
  },
};
