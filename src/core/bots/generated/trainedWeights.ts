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
  name: "trained-bot-20260804-102558",
  trainedAt: "2026-08-04T10:25:58.501Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 122.7981,
    shieldDiff: 75.1446,
    drawBonusDiff: 45.0101,
    manaBonusDiff: 70.1406,
    poisonDiff: 29.7615,
    controlDiff: 68.9108,
    boardStrengthDiff: 11.6662,
    boardManaDiff: 41.9086,
    stackSynergyDiff: 19.3715,
    reserveStrengthDiff: 1.5533,
    handStrengthDiff: 23.0498,
    mobilityDiff: 10.7258,
    cornerControlDiff: 1.2364,
    occupiedBoardDiff: -1.7414,
    imminentRoundDamageDiff: 39.4929,
    activeTurnTempo: 20.4958,
    specialCardValue: 18,
    deckTrimValue: 13.4444,
    eliteRouteBias: -8,
    restRouteBias: 8.6301,
    forgeRouteBias: 0,
    treasureRouteBias: 8.9945,
    branchingRouteBias: 10,
    riskTolerance: 4.1559,
    aggressionPlanBias: 14.1433,
    controlPlanBias: 18,
    tempoPlanBias: 3.5416,
    fusionPlanBias: 16.3217,
    precisionPlanBias: 5.2601,
    uncommonCardBias: 10,
    rareCardBias: 5.3319,
    charmSynergyBias: 6.1327,
    duplicateCardPenalty: 9.5796,
    enemyProfileRespect: 5.8801,
  },
};
