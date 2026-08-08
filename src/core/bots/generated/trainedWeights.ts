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
  name: "trained-bot-20260807-201143",
  trainedAt: "2026-08-07T20:11:43.195Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.88315,
    shieldDiff: 81.6345,
    drawBonusDiff: 33.66585,
    manaBonusDiff: 82.10885,
    poisonDiff: 35.347899999999996,
    controlDiff: 69.21795,
    boardStrengthDiff: 8.232,
    boardManaDiff: 40.949749999999995,
    stackSynergyDiff: 23.019550000000002,
    reserveStrengthDiff: 16.2459,
    handStrengthDiff: 37.76305,
    mobilityDiff: 14.706700000000001,
    cornerControlDiff: 4.7645,
    occupiedBoardDiff: -4.14935,
    imminentRoundDamageDiff: 37.87625,
    activeTurnTempo: 25.04475,
    specialCardValue: 10.7079,
    deckTrimValue: 9.97045,
    eliteRouteBias: -6.5411,
    restRouteBias: 8.6693,
    forgeRouteBias: 12,
    treasureRouteBias: 10.2092,
    branchingRouteBias: 6.1331,
    riskTolerance: 0.2092,
    aggressionPlanBias: 15.09095,
    controlPlanBias: 16.98525,
    tempoPlanBias: 0.12815,
    fusionPlanBias: 8.45275,
    precisionPlanBias: 12.025400000000001,
    uncommonCardBias: 3.3378499999999995,
    rareCardBias: 5.0299499999999995,
    charmSynergyBias: 4.5165500000000005,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 10,
  },
};
