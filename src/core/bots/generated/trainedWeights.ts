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
  name: "trained-bot-20260527-203104",
  trainedAt: "2026-05-27T20:31:04.641Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 61.0954,
    controlDiff: 15.038,
    boardStrengthDiff: 27.2737,
    reserveStrengthDiff: 34.1267,
    handStrengthDiff: 3.8421,
    mobilityDiff: -2.3918,
    cornerControlDiff: 36.103,
    occupiedBoardDiff: 20.3162,
    imminentRoundDamageDiff: -28.0961,
    activeTurnTempo: -25.304,
    specialCardValue: 0.2691,
    deckTrimValue: -30.7629,
    eliteRouteBias: -65.4865,
    restRouteBias: -13.4822,
    forgeRouteBias: 9.5234,
    treasureRouteBias: 20.4702,
    branchingRouteBias: 20.2418,
    riskTolerance: 39.509,
    aggressionPlanBias: 10.8035,
    controlPlanBias: 27.0457,
    tempoPlanBias: -9.0137,
    fusionPlanBias: 15.8979,
    precisionPlanBias: 10.534,
    uncommonCardBias: 7.2264,
    rareCardBias: 24.935,
    charmSynergyBias: 37.2101,
    duplicateCardPenalty: -18.866,
    enemyProfileRespect: 20.4536,
  },
};
