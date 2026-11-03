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
  name: "trained-bot-20261103-100549",
  trainedAt: "2026-11-03T10:05:49.064Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.2978,
    shieldDiff: 71.3588,
    drawBonusDiff: 8.4138,
    manaBonusDiff: 33.5495,
    poisonDiff: 67.0146,
    controlDiff: 96.189,
    boardStrengthDiff: 23.1334,
    boardManaDiff: 9.7357,
    stackSynergyDiff: 114.8953,
    reserveStrengthDiff: 21.5118,
    handStrengthDiff: 1.1118,
    mobilityDiff: 17.7132,
    cornerControlDiff: 18.9842,
    occupiedBoardDiff: -33.1928,
    imminentRoundDamageDiff: 101.8497,
    activeTurnTempo: 22.345,
    specialCardValue: 10.6893,
    deckTrimValue: 0,
    eliteRouteBias: -8,
    restRouteBias: 3.0974,
    forgeRouteBias: 4.7325,
    treasureRouteBias: 12,
    branchingRouteBias: 1.5788,
    riskTolerance: 2.623,
    aggressionPlanBias: -9.2451,
    controlPlanBias: 8.6926,
    tempoPlanBias: -11.5254,
    fusionPlanBias: 5.8915,
    precisionPlanBias: -11.4868,
    uncommonCardBias: -0.2522,
    rareCardBias: 2.5862,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
