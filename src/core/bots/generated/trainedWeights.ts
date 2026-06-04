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
  name: "trained-bot-20260603-213145",
  trainedAt: "2026-06-03T21:31:45.875Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.9337,
    shieldDiff: 44.2165,
    drawBonusDiff: 86.174,
    controlDiff: 3.1938,
    boardStrengthDiff: 40.1532,
    boardManaDiff: 15.5995,
    stackSynergyDiff: 37.3862,
    reserveStrengthDiff: 24.2093,
    handStrengthDiff: 21.8205,
    mobilityDiff: 8.6417,
    cornerControlDiff: 30.3335,
    occupiedBoardDiff: 22.0741,
    imminentRoundDamageDiff: 6.9303,
    activeTurnTempo: -19.532,
    specialCardValue: 16.5429,
    deckTrimValue: 4.5108,
    eliteRouteBias: 0.8672,
    restRouteBias: 0.8453,
    forgeRouteBias: 12,
    treasureRouteBias: 2.5673,
    branchingRouteBias: 6.2717,
    riskTolerance: 6.6532,
    aggressionPlanBias: 18,
    controlPlanBias: 9.7352,
    tempoPlanBias: -10.0043,
    fusionPlanBias: 0.6201,
    precisionPlanBias: 4.8099,
    uncommonCardBias: 0.2703,
    rareCardBias: 9.5994,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 3.9492,
  },
};
