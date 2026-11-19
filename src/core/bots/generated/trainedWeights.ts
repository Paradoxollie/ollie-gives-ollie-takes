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
  name: "trained-bot-20261119-161642",
  trainedAt: "2026-11-19T16:16:42.275Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 45.6615,
    shieldDiff: 74.2265,
    drawBonusDiff: 23.6834,
    manaBonusDiff: 3.0809,
    poisonDiff: 79.703,
    controlDiff: 122.5908,
    boardStrengthDiff: 12.2799,
    boardManaDiff: 26.3434,
    stackSynergyDiff: 120,
    reserveStrengthDiff: 26.4112,
    handStrengthDiff: 2.346,
    mobilityDiff: 30,
    cornerControlDiff: 10.7601,
    occupiedBoardDiff: -26.4719,
    imminentRoundDamageDiff: 77.8465,
    activeTurnTempo: 16.2115,
    specialCardValue: 2.6132,
    deckTrimValue: 4.4835,
    eliteRouteBias: -8,
    restRouteBias: 12,
    forgeRouteBias: 5.5435,
    treasureRouteBias: 6.3654,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: -10.0392,
    controlPlanBias: -9.259,
    tempoPlanBias: -11.0641,
    fusionPlanBias: -4.1918,
    precisionPlanBias: -7.8001,
    uncommonCardBias: 2.0103,
    rareCardBias: 5.4631,
    charmSynergyBias: 10.572,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 4.5226,
  },
};
