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
  name: "trained-bot-20261001-202150",
  trainedAt: "2026-10-01T20:21:50.303Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 52.7086,
    shieldDiff: 100.6031,
    drawBonusDiff: 19.1005,
    manaBonusDiff: 56.6635,
    poisonDiff: 67.212,
    controlDiff: 35.4712,
    boardStrengthDiff: 23.9387,
    boardManaDiff: 48.8339,
    stackSynergyDiff: 58.2376,
    reserveStrengthDiff: 27.9027,
    handStrengthDiff: -1.5528,
    mobilityDiff: -6.5463,
    cornerControlDiff: 0,
    occupiedBoardDiff: -9.4228,
    imminentRoundDamageDiff: 37.8067,
    activeTurnTempo: 12.9282,
    specialCardValue: 1.9726,
    deckTrimValue: 1.6958,
    eliteRouteBias: 8,
    restRouteBias: 12,
    forgeRouteBias: 3.9668,
    treasureRouteBias: 4.4836,
    branchingRouteBias: 0,
    riskTolerance: 6.9843,
    aggressionPlanBias: -4.8252,
    controlPlanBias: -5.4906,
    tempoPlanBias: -6.7012,
    fusionPlanBias: -12,
    precisionPlanBias: -1.1726,
    uncommonCardBias: -1.5099,
    rareCardBias: 5.3328,
    charmSynergyBias: -4,
    duplicateCardPenalty: 5.5621,
    enemyProfileRespect: 3.6371,
  },
};
