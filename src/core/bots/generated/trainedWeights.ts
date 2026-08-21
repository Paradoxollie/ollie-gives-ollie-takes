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
  name: "trained-bot-20260821-171221",
  trainedAt: "2026-08-21T17:12:21.794Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 87.5028,
    shieldDiff: 105.346,
    drawBonusDiff: 59.5248,
    manaBonusDiff: 94.9886,
    poisonDiff: 73.7166,
    controlDiff: 78.9624,
    boardStrengthDiff: 7.8636,
    boardManaDiff: 45.1425,
    stackSynergyDiff: 1.0231,
    reserveStrengthDiff: 4.0419,
    handStrengthDiff: 35.0267,
    mobilityDiff: 5.7534,
    cornerControlDiff: 10.1107,
    occupiedBoardDiff: 8.8993,
    imminentRoundDamageDiff: 79.0641,
    activeTurnTempo: 56.4896,
    specialCardValue: 10.0145,
    deckTrimValue: 3.1053,
    eliteRouteBias: -8,
    restRouteBias: 10.0683,
    forgeRouteBias: 5.764,
    treasureRouteBias: 4.9266,
    branchingRouteBias: 1.6396,
    riskTolerance: 1.0969,
    aggressionPlanBias: -0.4771,
    controlPlanBias: 18,
    tempoPlanBias: -4.6655,
    fusionPlanBias: -2.8307,
    precisionPlanBias: -9.0423,
    uncommonCardBias: 0.5209,
    rareCardBias: 7.821,
    charmSynergyBias: -0.2971,
    duplicateCardPenalty: 5.9534,
    enemyProfileRespect: 8.0487,
  },
};
