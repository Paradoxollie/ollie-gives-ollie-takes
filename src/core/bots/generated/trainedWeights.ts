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
  name: "trained-bot-20260908-200705",
  trainedAt: "2026-09-08T20:07:05.261Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.9617,
    shieldDiff: 103.4321,
    drawBonusDiff: 64.7248,
    manaBonusDiff: 85.4221,
    poisonDiff: 43.0684,
    controlDiff: 68.6617,
    boardStrengthDiff: 2.1643,
    boardManaDiff: 63.4336,
    stackSynergyDiff: 29.271,
    reserveStrengthDiff: 28.5938,
    handStrengthDiff: -9.127,
    mobilityDiff: 19.7363,
    cornerControlDiff: 20.0636,
    occupiedBoardDiff: -17.0383,
    imminentRoundDamageDiff: 85.5792,
    activeTurnTempo: 32.8132,
    specialCardValue: 9.5728,
    deckTrimValue: 0,
    eliteRouteBias: 4.8038,
    restRouteBias: 9.477,
    forgeRouteBias: 0.0809,
    treasureRouteBias: 12,
    branchingRouteBias: 5.3864,
    riskTolerance: 3.8651,
    aggressionPlanBias: -7.3084,
    controlPlanBias: 14.0291,
    tempoPlanBias: 5.1121,
    fusionPlanBias: 5.722,
    precisionPlanBias: 10.0716,
    uncommonCardBias: 4.5944,
    rareCardBias: 9.6363,
    charmSynergyBias: 8.2164,
    duplicateCardPenalty: 2.6439,
    enemyProfileRespect: 1.9507,
  },
};
