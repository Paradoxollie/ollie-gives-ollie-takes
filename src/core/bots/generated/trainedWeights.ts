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
  name: "trained-bot-20260525-122800",
  trainedAt: "2026-05-25T12:28:00.850Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 49.35993333333332,
    controlDiff: 21.28343333333333,
    boardStrengthDiff: 25.464033333333333,
    reserveStrengthDiff: 27.4071,
    handStrengthDiff: 16.126833333333334,
    mobilityDiff: 6.884533333333334,
    cornerControlDiff: 29.437366666666666,
    occupiedBoardDiff: 20.13393333333333,
    imminentRoundDamageDiff: -18.159200000000002,
    activeTurnTempo: -29.9226,
    specialCardValue: -2.9701,
    deckTrimValue: -36.800066666666666,
    eliteRouteBias: -61.994400000000006,
    restRouteBias: -9.697966666666666,
    forgeRouteBias: 12.350633333333333,
    treasureRouteBias: 23.959466666666668,
    branchingRouteBias: 27.096266666666665,
    riskTolerance: 35.96103333333333,
    aggressionPlanBias: 20.437466666666666,
    controlPlanBias: 17.626133333333332,
    tempoPlanBias: 4.7694,
    fusionPlanBias: 9.3101,
    precisionPlanBias: 11.038733333333333,
    uncommonCardBias: 10.880733333333334,
    rareCardBias: 14.751933333333334,
    charmSynergyBias: 28.1669,
    duplicateCardPenalty: -23.5714,
    enemyProfileRespect: 24.23636666666667,
  },
};
