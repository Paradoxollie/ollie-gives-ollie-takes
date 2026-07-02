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
  name: "trained-bot-20260702-105454",
  trainedAt: "2026-07-02T10:54:54.047Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.7268,
    shieldDiff: 67.3199,
    drawBonusDiff: 4.2908,
    manaBonusDiff: 84.1182,
    poisonDiff: 53.1959,
    controlDiff: 14.011,
    boardStrengthDiff: 33.0078,
    boardManaDiff: 9.489,
    stackSynergyDiff: 10.5387,
    reserveStrengthDiff: 9.4704,
    handStrengthDiff: 33.0908,
    mobilityDiff: 14.2495,
    cornerControlDiff: 0.763,
    occupiedBoardDiff: 47.5044,
    imminentRoundDamageDiff: 45.1742,
    activeTurnTempo: 9.1827,
    specialCardValue: 13.0755,
    deckTrimValue: 4.9958,
    eliteRouteBias: 8,
    restRouteBias: 5.2465,
    forgeRouteBias: 3.3971,
    treasureRouteBias: 2.6437,
    branchingRouteBias: 8.2655,
    riskTolerance: -4,
    aggressionPlanBias: -9.301,
    controlPlanBias: 12.2598,
    tempoPlanBias: -6.7766,
    fusionPlanBias: 14.2467,
    precisionPlanBias: 9.8094,
    uncommonCardBias: 7.0189,
    rareCardBias: 12,
    charmSynergyBias: 7.9486,
    duplicateCardPenalty: 2.0811,
    enemyProfileRespect: 10,
  },
};
