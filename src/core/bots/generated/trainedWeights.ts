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
  name: "trained-bot-20260912-042156",
  trainedAt: "2026-09-12T04:21:56.877Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 67.048,
    shieldDiff: 110.2877,
    drawBonusDiff: 39.4032,
    manaBonusDiff: 90.7366,
    poisonDiff: 46.0224,
    controlDiff: 56.954,
    boardStrengthDiff: 0.7669,
    boardManaDiff: 54.6242,
    stackSynergyDiff: 30.5581,
    reserveStrengthDiff: 20.5814,
    handStrengthDiff: -4.4748,
    mobilityDiff: 26.6627,
    cornerControlDiff: 15.4336,
    occupiedBoardDiff: -5.4995,
    imminentRoundDamageDiff: 56.5759,
    activeTurnTempo: 47.1831,
    specialCardValue: 13.498,
    deckTrimValue: 0,
    eliteRouteBias: -8,
    restRouteBias: 6.5388,
    forgeRouteBias: 1.9499,
    treasureRouteBias: 2.0814,
    branchingRouteBias: 4.0075,
    riskTolerance: 0.4711,
    aggressionPlanBias: -11.8897,
    controlPlanBias: 13.7058,
    tempoPlanBias: 5.7857,
    fusionPlanBias: 2.0816,
    precisionPlanBias: 7.3031,
    uncommonCardBias: 5.236,
    rareCardBias: 5.6591,
    charmSynergyBias: -2.2287,
    duplicateCardPenalty: 3.9065,
    enemyProfileRespect: 2.2886,
  },
};
