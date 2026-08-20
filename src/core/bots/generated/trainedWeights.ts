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
  name: "trained-bot-20260819-230033",
  trainedAt: "2026-08-19T23:00:33.364Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 111.3563,
    shieldDiff: 100.1072,
    drawBonusDiff: 43.2907,
    manaBonusDiff: 103.5939,
    poisonDiff: 82.3521,
    controlDiff: 81.0423,
    boardStrengthDiff: 12.8547,
    boardManaDiff: 43.7257,
    stackSynergyDiff: 15.3685,
    reserveStrengthDiff: -8.8664,
    handStrengthDiff: 48.8875,
    mobilityDiff: -0.4555,
    cornerControlDiff: 16.2882,
    occupiedBoardDiff: 2.4292,
    imminentRoundDamageDiff: 62.1637,
    activeTurnTempo: 38.3306,
    specialCardValue: 6.2492,
    deckTrimValue: 0,
    eliteRouteBias: 3.4017,
    restRouteBias: 9.1029,
    forgeRouteBias: 6.3062,
    treasureRouteBias: 12,
    branchingRouteBias: 6.2297,
    riskTolerance: -1.535,
    aggressionPlanBias: -8.8273,
    controlPlanBias: 18,
    tempoPlanBias: 10.7954,
    fusionPlanBias: -0.248,
    precisionPlanBias: 0.3189,
    uncommonCardBias: -4,
    rareCardBias: -4,
    charmSynergyBias: 2.1642,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.154,
  },
};
