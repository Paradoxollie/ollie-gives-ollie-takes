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
  name: "trained-bot-20260904-062233",
  trainedAt: "2026-09-04T06:22:33.346Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.7875,
    shieldDiff: 115.2299,
    drawBonusDiff: 32.9472,
    manaBonusDiff: 93.0986,
    poisonDiff: 59.6754,
    controlDiff: 63.6651,
    boardStrengthDiff: 0,
    boardManaDiff: 65.0159,
    stackSynergyDiff: 7.2149,
    reserveStrengthDiff: 19.3683,
    handStrengthDiff: 18.6452,
    mobilityDiff: 16.7695,
    cornerControlDiff: 20.0684,
    occupiedBoardDiff: -24.9847,
    imminentRoundDamageDiff: 81.299,
    activeTurnTempo: 57.1364,
    specialCardValue: 15.4437,
    deckTrimValue: 7.149,
    eliteRouteBias: 2.7694,
    restRouteBias: 2.8055,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: 1.1673,
    aggressionPlanBias: 3.1817,
    controlPlanBias: 18,
    tempoPlanBias: -0.2149,
    fusionPlanBias: 0.2906,
    precisionPlanBias: 1.8513,
    uncommonCardBias: 3.2368,
    rareCardBias: 2.6843,
    charmSynergyBias: 7.448,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0.8483,
  },
};
