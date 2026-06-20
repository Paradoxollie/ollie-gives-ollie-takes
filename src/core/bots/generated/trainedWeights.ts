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
  name: "trained-bot-20260620-131858",
  trainedAt: "2026-06-20T13:18:58.930Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.7631,
    shieldDiff: 82.5775,
    drawBonusDiff: 17.9143,
    manaBonusDiff: 72.4591,
    poisonDiff: 86.6635,
    controlDiff: 10.4009,
    boardStrengthDiff: 50.5305,
    boardManaDiff: 26.0246,
    stackSynergyDiff: 1.1337,
    reserveStrengthDiff: 14.7005,
    handStrengthDiff: 41.2059,
    mobilityDiff: 14.2933,
    cornerControlDiff: 64.1447,
    occupiedBoardDiff: 5.4004,
    imminentRoundDamageDiff: 55.7356,
    activeTurnTempo: 6.8261,
    specialCardValue: 2.8905,
    deckTrimValue: 6.974,
    eliteRouteBias: 8,
    restRouteBias: 5.3376,
    forgeRouteBias: 10.7456,
    treasureRouteBias: 1.5483,
    branchingRouteBias: 0.9853,
    riskTolerance: 6.6616,
    aggressionPlanBias: -8.9325,
    controlPlanBias: 10.9423,
    tempoPlanBias: -4.3753,
    fusionPlanBias: -10.6356,
    precisionPlanBias: -5.5027,
    uncommonCardBias: -1.4125,
    rareCardBias: 0.5883,
    charmSynergyBias: 7.4145,
    duplicateCardPenalty: 0.0735,
    enemyProfileRespect: 0,
  },
};
