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
  name: "trained-bot-20260912-204032",
  trainedAt: "2026-09-12T20:40:32.223Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.5183,
    shieldDiff: 112.7679,
    drawBonusDiff: 34.9234,
    manaBonusDiff: 88.475,
    poisonDiff: 45.537,
    controlDiff: 57.2349,
    boardStrengthDiff: 0,
    boardManaDiff: 57.0554,
    stackSynergyDiff: 33.6311,
    reserveStrengthDiff: 21.0478,
    handStrengthDiff: -6.7037,
    mobilityDiff: 22.0453,
    cornerControlDiff: 12.8344,
    occupiedBoardDiff: -7.176,
    imminentRoundDamageDiff: 54.3993,
    activeTurnTempo: 42.1688,
    specialCardValue: 14.3953,
    deckTrimValue: 0,
    eliteRouteBias: -7.8897,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 0.2357,
    branchingRouteBias: 6.9851,
    riskTolerance: -1.4508,
    aggressionPlanBias: -4.8197,
    controlPlanBias: 8.9235,
    tempoPlanBias: 9.1075,
    fusionPlanBias: -1.7186,
    precisionPlanBias: 5.7003,
    uncommonCardBias: 4.0966,
    rareCardBias: 9.0299,
    charmSynergyBias: -4,
    duplicateCardPenalty: 8.4631,
    enemyProfileRespect: 5.8876,
  },
};
