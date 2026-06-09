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
  name: "trained-bot-20260608-212407",
  trainedAt: "2026-06-08T21:24:07.913Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.01615,
    shieldDiff: 51.050725,
    drawBonusDiff: 70.32102499999999,
    manaBonusDiff: 102.042725,
    poisonDiff: 103.80305,
    controlDiff: 3.06815,
    boardStrengthDiff: 54.152775,
    boardManaDiff: 7.9018,
    stackSynergyDiff: 10.012699999999999,
    reserveStrengthDiff: 19.981225,
    handStrengthDiff: 14.822375000000001,
    mobilityDiff: 18.10415,
    cornerControlDiff: 47.241125,
    occupiedBoardDiff: 30.245275,
    imminentRoundDamageDiff: 10.779125,
    activeTurnTempo: -9.237325,
    specialCardValue: 0.16755,
    deckTrimValue: 5.943,
    eliteRouteBias: 1.0381,
    restRouteBias: 5.283925,
    forgeRouteBias: 0.78415,
    treasureRouteBias: 8.10805,
    branchingRouteBias: 3.324725,
    riskTolerance: 5.6107499999999995,
    aggressionPlanBias: -0.035800000000000054,
    controlPlanBias: 8.81465,
    tempoPlanBias: -8.195325,
    fusionPlanBias: -3.5267500000000003,
    precisionPlanBias: 4.635375,
    uncommonCardBias: 2.898025,
    rareCardBias: 9.25025,
    charmSynergyBias: 11.169075,
    duplicateCardPenalty: 9.5857,
    enemyProfileRespect: 5.800775,
  },
};
