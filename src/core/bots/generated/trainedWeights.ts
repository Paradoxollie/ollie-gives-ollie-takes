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
  name: "trained-bot-20261121-164834",
  trainedAt: "2026-11-21T16:48:34.407Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 50.594,
    shieldDiff: 58.896,
    drawBonusDiff: 39.1566,
    manaBonusDiff: 4.9503,
    poisonDiff: 77.5604,
    controlDiff: 122.2572,
    boardStrengthDiff: 13.7918,
    boardManaDiff: 22.6977,
    stackSynergyDiff: 108.7385,
    reserveStrengthDiff: 26.2429,
    handStrengthDiff: -4.8858,
    mobilityDiff: 30,
    cornerControlDiff: 4.7542,
    occupiedBoardDiff: -24.1783,
    imminentRoundDamageDiff: 80.2014,
    activeTurnTempo: 32.2666,
    specialCardValue: 2.9035,
    deckTrimValue: 2.1201,
    eliteRouteBias: 0.5119,
    restRouteBias: 2.7456,
    forgeRouteBias: 5.3528,
    treasureRouteBias: 9.9571,
    branchingRouteBias: 6.2753,
    riskTolerance: 2.2493,
    aggressionPlanBias: -7.6948,
    controlPlanBias: -10.4792,
    tempoPlanBias: -6.9138,
    fusionPlanBias: 9.9009,
    precisionPlanBias: -6.0589,
    uncommonCardBias: 1.498,
    rareCardBias: 7.6975,
    charmSynergyBias: 10.6863,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 5.383,
  },
};
