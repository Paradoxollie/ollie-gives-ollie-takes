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
  name: "trained-bot-20261011-204532",
  trainedAt: "2026-10-11T20:45:32.865Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.4084,
    shieldDiff: 60.9559,
    drawBonusDiff: 15.5594,
    manaBonusDiff: 81.2918,
    poisonDiff: 76.4032,
    controlDiff: 41.1342,
    boardStrengthDiff: 26.2283,
    boardManaDiff: 56.8065,
    stackSynergyDiff: 77.4486,
    reserveStrengthDiff: 30,
    handStrengthDiff: 12.4915,
    mobilityDiff: 16.4171,
    cornerControlDiff: 7.4515,
    occupiedBoardDiff: -1.5673,
    imminentRoundDamageDiff: 49.5193,
    activeTurnTempo: 22.6063,
    specialCardValue: 13.3873,
    deckTrimValue: 3.2914,
    eliteRouteBias: 2.13,
    restRouteBias: 4.179,
    forgeRouteBias: 11.9096,
    treasureRouteBias: 4.1264,
    branchingRouteBias: 0.2466,
    riskTolerance: 0.0106,
    aggressionPlanBias: -8.3492,
    controlPlanBias: -1.4356,
    tempoPlanBias: -6,
    fusionPlanBias: 18,
    precisionPlanBias: -7.3063,
    uncommonCardBias: 5.64,
    rareCardBias: 7.9442,
    charmSynergyBias: -4,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 9.8049,
  },
};
