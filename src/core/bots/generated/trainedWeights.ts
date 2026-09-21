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
  name: "trained-bot-20260921-074010",
  trainedAt: "2026-09-21T07:40:10.277Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.5852,
    shieldDiff: 106.8879,
    drawBonusDiff: 30.727,
    manaBonusDiff: 79.4084,
    poisonDiff: 33.465,
    controlDiff: 54.3446,
    boardStrengthDiff: 23.2146,
    boardManaDiff: 61.7864,
    stackSynergyDiff: 42.5017,
    reserveStrengthDiff: 13.2578,
    handStrengthDiff: -10,
    mobilityDiff: 20.4197,
    cornerControlDiff: 29.4609,
    occupiedBoardDiff: -21.7082,
    imminentRoundDamageDiff: 50.8418,
    activeTurnTempo: 22.5832,
    specialCardValue: 15.4406,
    deckTrimValue: 11.5321,
    eliteRouteBias: -3.5304,
    restRouteBias: 0.288,
    forgeRouteBias: 4.8459,
    treasureRouteBias: 0,
    branchingRouteBias: 9.0232,
    riskTolerance: 3.2356,
    aggressionPlanBias: 9.1164,
    controlPlanBias: 18,
    tempoPlanBias: -8.0509,
    fusionPlanBias: -11.1008,
    precisionPlanBias: 10.7762,
    uncommonCardBias: 8.5168,
    rareCardBias: 9.7141,
    charmSynergyBias: 3.9711,
    duplicateCardPenalty: 1.0102,
    enemyProfileRespect: 8.0364,
  },
};
