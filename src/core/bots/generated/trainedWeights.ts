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
  name: "trained-bot-20261013-204210",
  trainedAt: "2026-10-13T20:42:10.651Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.5446,
    shieldDiff: 66.5965,
    drawBonusDiff: 0,
    manaBonusDiff: 75.8086,
    poisonDiff: 63.8488,
    controlDiff: 50.0929,
    boardStrengthDiff: 32.8407,
    boardManaDiff: 57.7336,
    stackSynergyDiff: 77.2324,
    reserveStrengthDiff: 30,
    handStrengthDiff: 12.7321,
    mobilityDiff: 16.1587,
    cornerControlDiff: 4.2109,
    occupiedBoardDiff: -10.4555,
    imminentRoundDamageDiff: 43.2927,
    activeTurnTempo: 11.6035,
    specialCardValue: 18,
    deckTrimValue: 2.2802,
    eliteRouteBias: 3.8684,
    restRouteBias: 7.8689,
    forgeRouteBias: 3.0363,
    treasureRouteBias: 0,
    branchingRouteBias: 0,
    riskTolerance: -4,
    aggressionPlanBias: -4.5989,
    controlPlanBias: 5.7162,
    tempoPlanBias: -9.9973,
    fusionPlanBias: 11.4661,
    precisionPlanBias: -1.6643,
    uncommonCardBias: 10,
    rareCardBias: -3.5502,
    charmSynergyBias: -4,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 8.0573,
  },
};
