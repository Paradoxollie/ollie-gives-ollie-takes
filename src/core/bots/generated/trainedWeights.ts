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
  name: "trained-bot-20261013-094523",
  trainedAt: "2026-10-13T09:45:23.604Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.0306,
    shieldDiff: 65.5987,
    drawBonusDiff: 0.1965,
    manaBonusDiff: 74.982,
    poisonDiff: 70.5215,
    controlDiff: 46.1412,
    boardStrengthDiff: 32.9372,
    boardManaDiff: 64.5765,
    stackSynergyDiff: 77.1932,
    reserveStrengthDiff: 27.7115,
    handStrengthDiff: 12.5197,
    mobilityDiff: 12.8285,
    cornerControlDiff: 8.3766,
    occupiedBoardDiff: -9.6971,
    imminentRoundDamageDiff: 43.6732,
    activeTurnTempo: 13.5099,
    specialCardValue: 18,
    deckTrimValue: 1.2236,
    eliteRouteBias: 5.8801,
    restRouteBias: 4.0704,
    forgeRouteBias: 8.5886,
    treasureRouteBias: 0,
    branchingRouteBias: 2.1752,
    riskTolerance: -1.0979,
    aggressionPlanBias: -4.5016,
    controlPlanBias: 3.4283,
    tempoPlanBias: -10.0234,
    fusionPlanBias: 12.6954,
    precisionPlanBias: -5.7684,
    uncommonCardBias: 10,
    rareCardBias: 3.5141,
    charmSynergyBias: -3.1417,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 10,
  },
};
