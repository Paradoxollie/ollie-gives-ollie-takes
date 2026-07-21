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
  name: "trained-bot-20260720-194321",
  trainedAt: "2026-07-20T19:43:21.365Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 118.6928,
    shieldDiff: 63.0001,
    drawBonusDiff: 47.4863,
    manaBonusDiff: 61.9566,
    poisonDiff: 68.8857,
    controlDiff: 49.7492,
    boardStrengthDiff: 42.0204,
    boardManaDiff: 7.8178,
    stackSynergyDiff: 22.2669,
    reserveStrengthDiff: 24.1468,
    handStrengthDiff: 4.2665,
    mobilityDiff: 25.2751,
    cornerControlDiff: 14.2563,
    occupiedBoardDiff: 2.9518,
    imminentRoundDamageDiff: 45.4388,
    activeTurnTempo: 28.0165,
    specialCardValue: 10.5747,
    deckTrimValue: 11.3548,
    eliteRouteBias: 3.8663,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 4.8975,
    branchingRouteBias: 0,
    riskTolerance: 8,
    aggressionPlanBias: 6.574,
    controlPlanBias: 15.941,
    tempoPlanBias: -12,
    fusionPlanBias: 2.8853,
    precisionPlanBias: -2.6312,
    uncommonCardBias: 8.4933,
    rareCardBias: 4.2293,
    charmSynergyBias: 4.5151,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
