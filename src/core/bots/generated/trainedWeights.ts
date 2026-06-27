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
  name: "trained-bot-20260626-220458",
  trainedAt: "2026-06-26T22:04:58.723Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 90.9777,
    shieldDiff: 52.3829,
    drawBonusDiff: 6.4511,
    manaBonusDiff: 80.0235,
    poisonDiff: 75.0968,
    controlDiff: 15.0929,
    boardStrengthDiff: 20.3934,
    boardManaDiff: 15.492,
    stackSynergyDiff: 4.3753,
    reserveStrengthDiff: 25.1839,
    handStrengthDiff: 36.5864,
    mobilityDiff: 16.0686,
    cornerControlDiff: 24.0669,
    occupiedBoardDiff: 25.2947,
    imminentRoundDamageDiff: 52.7241,
    activeTurnTempo: 7.2101,
    specialCardValue: 8.7482,
    deckTrimValue: 2.7765,
    eliteRouteBias: 6.833,
    restRouteBias: 1.1325,
    forgeRouteBias: 7.6485,
    treasureRouteBias: 4.1849,
    branchingRouteBias: 10,
    riskTolerance: 3.4552,
    aggressionPlanBias: 8.0788,
    controlPlanBias: 15.6118,
    tempoPlanBias: 0.754,
    fusionPlanBias: -0.9132,
    precisionPlanBias: 9.4983,
    uncommonCardBias: 7.6393,
    rareCardBias: 9.1496,
    charmSynergyBias: 11.9942,
    duplicateCardPenalty: 9.2524,
    enemyProfileRespect: 2.4571,
  },
};
