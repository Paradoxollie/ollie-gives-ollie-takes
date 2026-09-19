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
  name: "trained-bot-20260919-003959",
  trainedAt: "2026-09-19T00:39:59.309Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.277,
    shieldDiff: 102.2826,
    drawBonusDiff: 31.2641,
    manaBonusDiff: 93.5225,
    poisonDiff: 52.8521,
    controlDiff: 55.3506,
    boardStrengthDiff: 20.1878,
    boardManaDiff: 45.4589,
    stackSynergyDiff: 47.5668,
    reserveStrengthDiff: 25.0095,
    handStrengthDiff: -6.9051,
    mobilityDiff: 20.547,
    cornerControlDiff: 24.1888,
    occupiedBoardDiff: -14.2152,
    imminentRoundDamageDiff: 55.9895,
    activeTurnTempo: 19.9841,
    specialCardValue: 17.6691,
    deckTrimValue: 2.7079,
    eliteRouteBias: -8,
    restRouteBias: 2.3357,
    forgeRouteBias: 12,
    treasureRouteBias: 0.0832,
    branchingRouteBias: 6.8832,
    riskTolerance: 0.4897,
    aggressionPlanBias: -10.2015,
    controlPlanBias: 9.2708,
    tempoPlanBias: -4.4777,
    fusionPlanBias: -3.7852,
    precisionPlanBias: 10.2536,
    uncommonCardBias: 10,
    rareCardBias: 0.6365,
    charmSynergyBias: 6.1138,
    duplicateCardPenalty: 8.0796,
    enemyProfileRespect: 5.0229,
  },
};
