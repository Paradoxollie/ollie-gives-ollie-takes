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
  name: "trained-bot-20260522-233607",
  trainedAt: "2026-05-22T23:36:07.719Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 31.8595,
    controlDiff: 12.0353,
    boardStrengthDiff: 30.2454,
    reserveStrengthDiff: 36.0799,
    handStrengthDiff: 19.8275,
    mobilityDiff: -2.5216,
    cornerControlDiff: 28.5684,
    occupiedBoardDiff: 15.5636,
    imminentRoundDamageDiff: -9.1618,
    activeTurnTempo: -15.597,
    specialCardValue: -20.9378,
    deckTrimValue: -23.8832,
    eliteRouteBias: -51.7757,
    restRouteBias: -1.2076,
    forgeRouteBias: -0.3447,
    treasureRouteBias: 13.6011,
    branchingRouteBias: 17.9766,
    riskTolerance: 18.8593,
    aggressionPlanBias: 30.302,
    controlPlanBias: 16.5374,
    tempoPlanBias: 3.8084,
    fusionPlanBias: 17.7232,
    precisionPlanBias: 2.1256,
    uncommonCardBias: 4.5453,
    rareCardBias: 20.1937,
    charmSynergyBias: 39.3323,
    duplicateCardPenalty: -15.0792,
    enemyProfileRespect: 27.1452,
  },
};
