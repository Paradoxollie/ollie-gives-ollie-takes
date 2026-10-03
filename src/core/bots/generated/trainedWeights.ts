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
  name: "trained-bot-20261003-174605",
  trainedAt: "2026-10-03T17:46:05.400Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 61.7379,
    shieldDiff: 88.5594,
    drawBonusDiff: 11.8677,
    manaBonusDiff: 56.2127,
    poisonDiff: 65.0226,
    controlDiff: 36.2065,
    boardStrengthDiff: 21.6506,
    boardManaDiff: 66.522,
    stackSynergyDiff: 84.8905,
    reserveStrengthDiff: 20.2185,
    handStrengthDiff: -5.1241,
    mobilityDiff: -0.6142,
    cornerControlDiff: 10.4112,
    occupiedBoardDiff: -9.6942,
    imminentRoundDamageDiff: 29.9518,
    activeTurnTempo: 14.6907,
    specialCardValue: 10.8812,
    deckTrimValue: 3.8811,
    eliteRouteBias: 4.3458,
    restRouteBias: 11.1033,
    forgeRouteBias: 5.4062,
    treasureRouteBias: 6.2258,
    branchingRouteBias: 9.4375,
    riskTolerance: -2.2743,
    aggressionPlanBias: -10.7408,
    controlPlanBias: 2.0157,
    tempoPlanBias: -5.0941,
    fusionPlanBias: -11.0538,
    precisionPlanBias: 4.0806,
    uncommonCardBias: 7.7828,
    rareCardBias: 12,
    charmSynergyBias: 8.3413,
    duplicateCardPenalty: 6.8586,
    enemyProfileRespect: 0.2959,
  },
};
