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
  name: "trained-bot-20260920-004040",
  trainedAt: "2026-09-20T00:40:40.432Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.0031,
    shieldDiff: 118.2118,
    drawBonusDiff: 28.8682,
    manaBonusDiff: 87.5002,
    poisonDiff: 42.9041,
    controlDiff: 63.7785,
    boardStrengthDiff: 23.7694,
    boardManaDiff: 50.7189,
    stackSynergyDiff: 51.7696,
    reserveStrengthDiff: 22.7949,
    handStrengthDiff: -10,
    mobilityDiff: 24.2441,
    cornerControlDiff: 23.0673,
    occupiedBoardDiff: -21.8062,
    imminentRoundDamageDiff: 55.737,
    activeTurnTempo: 20.4873,
    specialCardValue: 16.0029,
    deckTrimValue: 11.3127,
    eliteRouteBias: -7.2416,
    restRouteBias: 1.1145,
    forgeRouteBias: 3.2455,
    treasureRouteBias: 3.1312,
    branchingRouteBias: 0,
    riskTolerance: -2.9414,
    aggressionPlanBias: 3.2087,
    controlPlanBias: 18,
    tempoPlanBias: -6.7714,
    fusionPlanBias: -6.0527,
    precisionPlanBias: 9.7608,
    uncommonCardBias: 7.9006,
    rareCardBias: -2.2817,
    charmSynergyBias: 13.3612,
    duplicateCardPenalty: 9.3261,
    enemyProfileRespect: 7.6032,
  },
};
