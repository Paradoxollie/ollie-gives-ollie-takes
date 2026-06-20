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
  name: "trained-bot-20260620-030103",
  trainedAt: "2026-06-20T03:01:03.673Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.9593,
    shieldDiff: 80.7955,
    drawBonusDiff: 19.9523,
    manaBonusDiff: 70.4483,
    poisonDiff: 87.7151,
    controlDiff: 9.0067,
    boardStrengthDiff: 50.8381,
    boardManaDiff: 30.6077,
    stackSynergyDiff: 2.0419,
    reserveStrengthDiff: 19.0145,
    handStrengthDiff: 39.0797,
    mobilityDiff: 16.9623,
    cornerControlDiff: 65.7119,
    occupiedBoardDiff: 7.8586,
    imminentRoundDamageDiff: 56.2563,
    activeTurnTempo: 5.0499,
    specialCardValue: 7.4827,
    deckTrimValue: 6.1165,
    eliteRouteBias: 8,
    restRouteBias: 6.6519,
    forgeRouteBias: 9.7328,
    treasureRouteBias: 4.1912,
    branchingRouteBias: 0,
    riskTolerance: 8,
    aggressionPlanBias: -9.1139,
    controlPlanBias: 10.8777,
    tempoPlanBias: -3.6686,
    fusionPlanBias: -4.5835,
    precisionPlanBias: 0.5903,
    uncommonCardBias: 1.6641,
    rareCardBias: 3.6225,
    charmSynergyBias: 0.0229,
    duplicateCardPenalty: 2.6438,
    enemyProfileRespect: 1.4469,
  },
};
