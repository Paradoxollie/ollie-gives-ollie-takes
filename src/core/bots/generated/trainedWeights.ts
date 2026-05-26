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
  name: "trained-bot-20260526-202733",
  trainedAt: "2026-05-26T20:27:33.073Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 56.0335,
    controlDiff: 21.999,
    boardStrengthDiff: 26.8855,
    reserveStrengthDiff: 25.0356,
    handStrengthDiff: 14.5903,
    mobilityDiff: 6.2874,
    cornerControlDiff: 25.2736,
    occupiedBoardDiff: 11.4796,
    imminentRoundDamageDiff: -22.4095,
    activeTurnTempo: -27.7007,
    specialCardValue: -0.7382,
    deckTrimValue: -32.076,
    eliteRouteBias: -74.7883,
    restRouteBias: -3.2151,
    forgeRouteBias: 5.846,
    treasureRouteBias: 30.1579,
    branchingRouteBias: 26.9855,
    riskTolerance: 30.8005,
    aggressionPlanBias: 11.7484,
    controlPlanBias: 22.2631,
    tempoPlanBias: -7.7445,
    fusionPlanBias: 18.4388,
    precisionPlanBias: 17.5329,
    uncommonCardBias: 12.1746,
    rareCardBias: 20.0921,
    charmSynergyBias: 28.1911,
    duplicateCardPenalty: -22.8655,
    enemyProfileRespect: 15.1186,
  },
};
