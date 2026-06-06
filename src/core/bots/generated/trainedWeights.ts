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
  name: "trained-bot-20260606-151312",
  trainedAt: "2026-06-06T15:13:12.220Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 90.8504,
    shieldDiff: 54.6005,
    drawBonusDiff: 73.2119,
    controlDiff: 7.7871,
    boardStrengthDiff: 39.7547,
    boardManaDiff: 4.7786,
    stackSynergyDiff: 5.8963,
    reserveStrengthDiff: 25.6716,
    handStrengthDiff: 24.026,
    mobilityDiff: 5.4744,
    cornerControlDiff: 47.3132,
    occupiedBoardDiff: 23.2615,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -7.6631,
    specialCardValue: 10.7206,
    deckTrimValue: 7.0291,
    eliteRouteBias: 6.0479,
    restRouteBias: 12,
    forgeRouteBias: 10.0828,
    treasureRouteBias: 12,
    branchingRouteBias: 9.4152,
    riskTolerance: -2.0295,
    aggressionPlanBias: 17.4564,
    controlPlanBias: 17.1891,
    tempoPlanBias: -2.7363,
    fusionPlanBias: 8.7276,
    precisionPlanBias: 9.1867,
    uncommonCardBias: 10,
    rareCardBias: 6.9881,
    charmSynergyBias: 14,
    duplicateCardPenalty: 6.4897,
    enemyProfileRespect: 5.3356,
  },
};
