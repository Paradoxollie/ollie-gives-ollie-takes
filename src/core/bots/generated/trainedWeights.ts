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
  name: "trained-bot-20260813-102243",
  trainedAt: "2026-08-13T10:22:43.279Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.8792,
    shieldDiff: 96.3834,
    drawBonusDiff: 45.5652,
    manaBonusDiff: 87.7102,
    poisonDiff: 44.9586,
    controlDiff: 78.9584,
    boardStrengthDiff: 14.2449,
    boardManaDiff: 34.1631,
    stackSynergyDiff: 25.2914,
    reserveStrengthDiff: -10,
    handStrengthDiff: 37.8888,
    mobilityDiff: 1.9607,
    cornerControlDiff: 4.733,
    occupiedBoardDiff: 6.5344,
    imminentRoundDamageDiff: 36.8026,
    activeTurnTempo: 32.3612,
    specialCardValue: 17.574,
    deckTrimValue: 0.7912,
    eliteRouteBias: 4.9453,
    restRouteBias: 5.1808,
    forgeRouteBias: 1.1662,
    treasureRouteBias: 5.8754,
    branchingRouteBias: 10,
    riskTolerance: 3.5394,
    aggressionPlanBias: 3.8819,
    controlPlanBias: 11.3942,
    tempoPlanBias: -3.6329,
    fusionPlanBias: 18,
    precisionPlanBias: 4.8659,
    uncommonCardBias: 2.9109,
    rareCardBias: 10.0776,
    charmSynergyBias: 14,
    duplicateCardPenalty: 6.4563,
    enemyProfileRespect: 0,
  },
};
