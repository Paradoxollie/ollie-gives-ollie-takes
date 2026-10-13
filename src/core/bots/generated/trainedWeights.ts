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
  name: "trained-bot-20261013-004427",
  trainedAt: "2026-10-13T00:44:27.628Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.6316,
    shieldDiff: 59.1334,
    drawBonusDiff: 0,
    manaBonusDiff: 75.6594,
    poisonDiff: 67.0518,
    controlDiff: 40.4567,
    boardStrengthDiff: 30.54,
    boardManaDiff: 65.7895,
    stackSynergyDiff: 74.9573,
    reserveStrengthDiff: 27.1581,
    handStrengthDiff: 11.4731,
    mobilityDiff: 10.9221,
    cornerControlDiff: 5.2,
    occupiedBoardDiff: -11.3537,
    imminentRoundDamageDiff: 41.5576,
    activeTurnTempo: 17.1483,
    specialCardValue: 17.5929,
    deckTrimValue: 3.4409,
    eliteRouteBias: 6.8322,
    restRouteBias: 3.8778,
    forgeRouteBias: 11.9049,
    treasureRouteBias: 2.4637,
    branchingRouteBias: 4.367,
    riskTolerance: 0.2372,
    aggressionPlanBias: -4.4695,
    controlPlanBias: -5.4735,
    tempoPlanBias: -2.7273,
    fusionPlanBias: 10.9392,
    precisionPlanBias: -4.0727,
    uncommonCardBias: 9.5773,
    rareCardBias: 8.395,
    charmSynergyBias: -4,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 10,
  },
};
