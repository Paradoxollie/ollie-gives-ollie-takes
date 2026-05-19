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
  name: "trained-bot-20260519-200633",
  trainedAt: "2026-05-19T20:06:33.342Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 17.2101,
    controlDiff: 14.225,
    boardStrengthDiff: 14.6814,
    reserveStrengthDiff: 27.7923,
    handStrengthDiff: -13.5267,
    mobilityDiff: 18.3498,
    cornerControlDiff: 7.6735,
    occupiedBoardDiff: 3.1379,
    imminentRoundDamageDiff: -0.2281,
    activeTurnTempo: -22.8075,
    specialCardValue: -14.5706,
    deckTrimValue: -17.5466,
    eliteRouteBias: -36.8648,
    restRouteBias: 0.3419,
    forgeRouteBias: -17.4164,
    treasureRouteBias: 26.5283,
    branchingRouteBias: 29.3042,
    riskTolerance: 14.2179,
    aggressionPlanBias: 23.6676,
    controlPlanBias: 21.4459,
    tempoPlanBias: -8.2445,
    fusionPlanBias: 15.5639,
    precisionPlanBias: 6.5931,
    uncommonCardBias: -9.5253,
    rareCardBias: 6.093,
    charmSynergyBias: 34.0873,
    duplicateCardPenalty: 1.6923,
    enemyProfileRespect: 24.4753,
  },
};
