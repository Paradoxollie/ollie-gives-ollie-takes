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
  name: "trained-bot-20260906-204408",
  trainedAt: "2026-09-06T20:44:08.833Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.4946,
    shieldDiff: 115.5658,
    drawBonusDiff: 49.792,
    manaBonusDiff: 85.0421,
    poisonDiff: 46.7885,
    controlDiff: 56.8634,
    boardStrengthDiff: 0,
    boardManaDiff: 64.3363,
    stackSynergyDiff: 36.8202,
    reserveStrengthDiff: 27.7539,
    handStrengthDiff: 2.3154,
    mobilityDiff: 28.838,
    cornerControlDiff: 27.9162,
    occupiedBoardDiff: -26.8026,
    imminentRoundDamageDiff: 77.592,
    activeTurnTempo: 38.0288,
    specialCardValue: 7.4269,
    deckTrimValue: 0,
    eliteRouteBias: 3.7471,
    restRouteBias: 6.7034,
    forgeRouteBias: 8.3094,
    treasureRouteBias: 12,
    branchingRouteBias: 7.4135,
    riskTolerance: -4,
    aggressionPlanBias: -1.8713,
    controlPlanBias: 14.5784,
    tempoPlanBias: -2.429,
    fusionPlanBias: -1.1278,
    precisionPlanBias: 0.0206,
    uncommonCardBias: -4,
    rareCardBias: 1.5147,
    charmSynergyBias: 14,
    duplicateCardPenalty: 8.2601,
    enemyProfileRespect: 4.9775,
  },
};
