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
  name: "trained-bot-20260603-172011",
  trainedAt: "2026-06-03T17:20:11.829Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.2,
    shieldDiff: 43.7719,
    drawBonusDiff: 93.325,
    controlDiff: 3.0718,
    boardStrengthDiff: 34.1154,
    boardManaDiff: 17.9809,
    stackSynergyDiff: 42.2709,
    reserveStrengthDiff: 29.2125,
    handStrengthDiff: 16.8132,
    mobilityDiff: 9.3706,
    cornerControlDiff: 26.4818,
    occupiedBoardDiff: 19.8949,
    imminentRoundDamageDiff: 0.9063,
    activeTurnTempo: -18.9668,
    specialCardValue: 12.034,
    deckTrimValue: 1.0283,
    eliteRouteBias: -4.279,
    restRouteBias: 6.4312,
    forgeRouteBias: 11.4844,
    treasureRouteBias: 8.2131,
    branchingRouteBias: 6.6708,
    riskTolerance: 3.055,
    aggressionPlanBias: 16.3323,
    controlPlanBias: 17.1298,
    tempoPlanBias: -7.762,
    fusionPlanBias: -0.5176,
    precisionPlanBias: 1.4442,
    uncommonCardBias: 1.7613,
    rareCardBias: 12,
    charmSynergyBias: 10.9535,
    duplicateCardPenalty: 2.9514,
    enemyProfileRespect: 1.3347,
  },
};
