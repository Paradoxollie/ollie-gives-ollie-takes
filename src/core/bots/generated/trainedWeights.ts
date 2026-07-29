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
  name: "trained-bot-20260728-214746",
  trainedAt: "2026-07-28T21:47:46.587Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 134.8847,
    shieldDiff: 54.0456,
    drawBonusDiff: 41.3851,
    manaBonusDiff: 51.5259,
    poisonDiff: 55.6128,
    controlDiff: 74.6602,
    boardStrengthDiff: 32.9378,
    boardManaDiff: 21.3316,
    stackSynergyDiff: 4.8821,
    reserveStrengthDiff: 16.5641,
    handStrengthDiff: 21.4226,
    mobilityDiff: 26.3848,
    cornerControlDiff: 0.5864,
    occupiedBoardDiff: -5.4949,
    imminentRoundDamageDiff: 32.6321,
    activeTurnTempo: 16.5286,
    specialCardValue: 9.5814,
    deckTrimValue: 9.7593,
    eliteRouteBias: 1.8235,
    restRouteBias: 12,
    forgeRouteBias: 0.4758,
    treasureRouteBias: 6.524,
    branchingRouteBias: 10,
    riskTolerance: 0.3733,
    aggressionPlanBias: 5.221,
    controlPlanBias: 15.3082,
    tempoPlanBias: -3.8635,
    fusionPlanBias: 18,
    precisionPlanBias: 18,
    uncommonCardBias: -0.2738,
    rareCardBias: 6.3856,
    charmSynergyBias: 14,
    duplicateCardPenalty: 6.8305,
    enemyProfileRespect: 6.1273,
  },
};
