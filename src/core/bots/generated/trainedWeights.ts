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
  name: "trained-bot-20260817-102111",
  trainedAt: "2026-08-17T10:21:11.490Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 107.8726,
    shieldDiff: 116.1925,
    drawBonusDiff: 39.4229,
    manaBonusDiff: 103.5443,
    poisonDiff: 63.576,
    controlDiff: 73.3191,
    boardStrengthDiff: 15.675,
    boardManaDiff: 43.8348,
    stackSynergyDiff: 28.3895,
    reserveStrengthDiff: -1.8028,
    handStrengthDiff: 38.095,
    mobilityDiff: -3.1173,
    cornerControlDiff: 12.9012,
    occupiedBoardDiff: 8.305,
    imminentRoundDamageDiff: 67.1141,
    activeTurnTempo: 34.2855,
    specialCardValue: 5.806,
    deckTrimValue: 0.2753,
    eliteRouteBias: 0.9664,
    restRouteBias: 6.9661,
    forgeRouteBias: 11.017,
    treasureRouteBias: 12,
    branchingRouteBias: 3.2865,
    riskTolerance: 5.8171,
    aggressionPlanBias: 13.8201,
    controlPlanBias: 13.5731,
    tempoPlanBias: -5.9356,
    fusionPlanBias: 0.8679,
    precisionPlanBias: 1.8085,
    uncommonCardBias: 3,
    rareCardBias: 6.8971,
    charmSynergyBias: 11.7616,
    duplicateCardPenalty: 1.0311,
    enemyProfileRespect: 8.2593,
  },
};
