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
  name: "trained-bot-20260518-161433",
  trainedAt: "2026-05-18T16:14:33.944Z",
  iterations: 1,
  matchesPerOpponent: 2,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 12.6723,
    controlDiff: 8.9292,
    boardStrengthDiff: 9.1035,
    reserveStrengthDiff: 9.2908,
    handStrengthDiff: -17.4469,
    mobilityDiff: 3.8988,
    cornerControlDiff: 7.985,
    occupiedBoardDiff: 1.2439,
    imminentRoundDamageDiff: 8.6297,
    activeTurnTempo: -20.7953,
    specialCardValue: 3.4982,
    deckTrimValue: -25.5438,
    eliteRouteBias: -32.8698,
    restRouteBias: -2.7579,
    forgeRouteBias: -13.4301,
    treasureRouteBias: 10.2895,
    branchingRouteBias: 30.9324,
    riskTolerance: 6.7957,
    aggressionPlanBias: 14.3507,
    controlPlanBias: 16.2812,
    tempoPlanBias: -11.2612,
    fusionPlanBias: 12.7157,
    precisionPlanBias: 8.385,
    uncommonCardBias: -10.6453,
    rareCardBias: 15.1704,
    charmSynergyBias: 23.9237,
    duplicateCardPenalty: -0.5892,
    enemyProfileRespect: 21.4252,
  },
};
