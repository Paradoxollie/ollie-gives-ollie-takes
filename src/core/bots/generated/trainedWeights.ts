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
  name: "trained-bot-20260902-164305",
  trainedAt: "2026-09-02T16:43:05.514Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.1981,
    shieldDiff: 118.8153,
    drawBonusDiff: 26.3093,
    manaBonusDiff: 94.8405,
    poisonDiff: 65.0642,
    controlDiff: 79.2127,
    boardStrengthDiff: 16.5341,
    boardManaDiff: 71.1991,
    stackSynergyDiff: 8.3759,
    reserveStrengthDiff: 11.26,
    handStrengthDiff: 9.9577,
    mobilityDiff: 24.0854,
    cornerControlDiff: 9.35,
    occupiedBoardDiff: 0.0049,
    imminentRoundDamageDiff: 65.3799,
    activeTurnTempo: 51.0833,
    specialCardValue: 10.9503,
    deckTrimValue: 5.6758,
    eliteRouteBias: 2.5678,
    restRouteBias: 0,
    forgeRouteBias: 6.9415,
    treasureRouteBias: 12,
    branchingRouteBias: 7.0162,
    riskTolerance: 5.9364,
    aggressionPlanBias: 17.928,
    controlPlanBias: 3.2897,
    tempoPlanBias: -2.7,
    fusionPlanBias: -7.1067,
    precisionPlanBias: 5.2265,
    uncommonCardBias: 2.7246,
    rareCardBias: -4,
    charmSynergyBias: 9.5057,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
