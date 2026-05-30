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
  name: "trained-bot-20260530-161758",
  trainedAt: "2026-05-30T16:17:58.017Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 74.6455,
    controlDiff: 11.3002,
    boardStrengthDiff: 32.0224,
    reserveStrengthDiff: 62.9466,
    handStrengthDiff: -1.6315,
    mobilityDiff: 3.2595,
    cornerControlDiff: 29.5709,
    occupiedBoardDiff: 25.0121,
    imminentRoundDamageDiff: -22.3522,
    activeTurnTempo: -28.0017,
    specialCardValue: 6.289,
    deckTrimValue: -13.3066,
    eliteRouteBias: -64.3417,
    restRouteBias: -7.2657,
    forgeRouteBias: 18.792,
    treasureRouteBias: 21.9545,
    branchingRouteBias: 10.9999,
    riskTolerance: 40.6809,
    aggressionPlanBias: 18.3313,
    controlPlanBias: 24.1093,
    tempoPlanBias: -4.8956,
    fusionPlanBias: -2.5807,
    precisionPlanBias: -2.4965,
    uncommonCardBias: 28.0084,
    rareCardBias: 41.7481,
    charmSynergyBias: 39.5388,
    duplicateCardPenalty: 7.8195,
    enemyProfileRespect: -1.5259,
  },
};
