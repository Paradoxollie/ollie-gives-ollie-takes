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
  name: "trained-bot-20261109-162629",
  trainedAt: "2026-11-09T16:26:29.205Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 56.9649,
    shieldDiff: 85.01315,
    drawBonusDiff: 0,
    manaBonusDiff: 28.1243,
    poisonDiff: 74.7664,
    controlDiff: 132.18255,
    boardStrengthDiff: 23.546349999999997,
    boardManaDiff: 10.9226,
    stackSynergyDiff: 97.0941,
    reserveStrengthDiff: 26.82625,
    handStrengthDiff: -3.18005,
    mobilityDiff: 29.8328,
    cornerControlDiff: 8.4655,
    occupiedBoardDiff: -22.3661,
    imminentRoundDamageDiff: 95.9195,
    activeTurnTempo: 14.73255,
    specialCardValue: 6.71115,
    deckTrimValue: 6.36385,
    eliteRouteBias: 0.7038,
    restRouteBias: 11.7056,
    forgeRouteBias: 0.50995,
    treasureRouteBias: 3.2449,
    branchingRouteBias: 4.2116,
    riskTolerance: 3.20935,
    aggressionPlanBias: -3.1374,
    controlPlanBias: 10.76475,
    tempoPlanBias: -4.0273,
    fusionPlanBias: 3.42815,
    precisionPlanBias: -7.5525,
    uncommonCardBias: 0.1811999999999998,
    rareCardBias: 7.37355,
    charmSynergyBias: 9.66865,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.45665,
  },
};
