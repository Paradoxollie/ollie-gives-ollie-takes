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
  name: "trained-bot-20260830-052727",
  trainedAt: "2026-08-30T05:27:27.731Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.4548,
    shieldDiff: 110.9474,
    drawBonusDiff: 20.81905,
    manaBonusDiff: 98.60285,
    poisonDiff: 66.3028,
    controlDiff: 77.6289,
    boardStrengthDiff: 28.026400000000002,
    boardManaDiff: 40.38775,
    stackSynergyDiff: 21.66125,
    reserveStrengthDiff: 16.66135,
    handStrengthDiff: 29.0241,
    mobilityDiff: 28.84225,
    cornerControlDiff: 19.75065,
    occupiedBoardDiff: -27.0985,
    imminentRoundDamageDiff: 75.2906,
    activeTurnTempo: 46.90135,
    specialCardValue: 8.59445,
    deckTrimValue: 0,
    eliteRouteBias: -0.8219,
    restRouteBias: 12,
    forgeRouteBias: 9.2029,
    treasureRouteBias: 2.832,
    branchingRouteBias: 2.8664,
    riskTolerance: -0.30765,
    aggressionPlanBias: 17.519750000000002,
    controlPlanBias: 0.91405,
    tempoPlanBias: 4.50295,
    fusionPlanBias: -3.2236,
    precisionPlanBias: 7.47675,
    uncommonCardBias: 0.8226,
    rareCardBias: -1.05475,
    charmSynergyBias: 4.833,
    duplicateCardPenalty: 3.2832,
    enemyProfileRespect: 0.02305,
  },
};
