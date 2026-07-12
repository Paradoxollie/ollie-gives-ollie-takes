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
  name: "trained-bot-20260712-141002",
  trainedAt: "2026-07-12T14:10:02.553Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.5044,
    shieldDiff: 63.8137,
    drawBonusDiff: 0.883,
    manaBonusDiff: 55.8301,
    poisonDiff: 67.0695,
    controlDiff: 29.9003,
    boardStrengthDiff: 32.8797,
    boardManaDiff: 5.1808,
    stackSynergyDiff: 8.6781,
    reserveStrengthDiff: 10.4632,
    handStrengthDiff: 16.1539,
    mobilityDiff: 21.7903,
    cornerControlDiff: 13.3247,
    occupiedBoardDiff: 39.5756,
    imminentRoundDamageDiff: 78.7605,
    activeTurnTempo: 24.8603,
    specialCardValue: 13.0184,
    deckTrimValue: 5.2721,
    eliteRouteBias: 1.2211,
    restRouteBias: 5.197,
    forgeRouteBias: 7.5353,
    treasureRouteBias: 12,
    branchingRouteBias: 6.1945,
    riskTolerance: -3.6034,
    aggressionPlanBias: -12,
    controlPlanBias: 9.6031,
    tempoPlanBias: -2.1018,
    fusionPlanBias: -8.4127,
    precisionPlanBias: 1.1019,
    uncommonCardBias: -1.4858,
    rareCardBias: -3.3844,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.062,
  },
};
