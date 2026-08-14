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
  name: "trained-bot-20260813-210708",
  trainedAt: "2026-08-13T21:07:08.672Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.95855,
    shieldDiff: 98.57509999999999,
    drawBonusDiff: 47.4114,
    manaBonusDiff: 85.686875,
    poisonDiff: 46.064025,
    controlDiff: 81.57425,
    boardStrengthDiff: 12.882725,
    boardManaDiff: 34.051175,
    stackSynergyDiff: 24.995525,
    reserveStrengthDiff: -10,
    handStrengthDiff: 38.227374999999995,
    mobilityDiff: 2.307375,
    cornerControlDiff: 7.322225,
    occupiedBoardDiff: 9.154800000000002,
    imminentRoundDamageDiff: 33.3541,
    activeTurnTempo: 36.055175,
    specialCardValue: 15.029425,
    deckTrimValue: 0.584075,
    eliteRouteBias: 5.068675,
    restRouteBias: 8.4329,
    forgeRouteBias: 4.691375,
    treasureRouteBias: 9.21225,
    branchingRouteBias: 8.918199999999999,
    riskTolerance: 1.2868,
    aggressionPlanBias: -0.2766749999999999,
    controlPlanBias: 8.800175,
    tempoPlanBias: -2.281675,
    fusionPlanBias: 17.84755,
    precisionPlanBias: 9.372924999999999,
    uncommonCardBias: 3.2093249999999998,
    rareCardBias: 11.18205,
    charmSynergyBias: 12.218,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.2318999999999996,
  },
};
