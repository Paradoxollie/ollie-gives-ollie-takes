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
  name: "trained-bot-20260828-200639",
  trainedAt: "2026-08-28T20:06:39.367Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.1916,
    shieldDiff: 109.7342,
    drawBonusDiff: 27.1035,
    manaBonusDiff: 102.7788,
    poisonDiff: 70.8323,
    controlDiff: 84.4819,
    boardStrengthDiff: 24.0702,
    boardManaDiff: 36.2603,
    stackSynergyDiff: 16.0854,
    reserveStrengthDiff: 18.3188,
    handStrengthDiff: 17.8904,
    mobilityDiff: 16.5683,
    cornerControlDiff: 18.8604,
    occupiedBoardDiff: -24.5291,
    imminentRoundDamageDiff: 70.722,
    activeTurnTempo: 38.858,
    specialCardValue: 16.1576,
    deckTrimValue: 0,
    eliteRouteBias: 7.8082,
    restRouteBias: 12,
    forgeRouteBias: 8.4033,
    treasureRouteBias: 0.2026,
    branchingRouteBias: 1.7363,
    riskTolerance: 2.8892,
    aggressionPlanBias: 16.3824,
    controlPlanBias: 3.5151,
    tempoPlanBias: 9.2025,
    fusionPlanBias: 4.2067,
    precisionPlanBias: 4.2151,
    uncommonCardBias: -1.3285,
    rareCardBias: 1.6686,
    charmSynergyBias: 5.5274,
    duplicateCardPenalty: 3.2633,
    enemyProfileRespect: 8.9581,
  },
};
