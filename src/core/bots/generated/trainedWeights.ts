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
  name: "trained-bot-20260518-200459",
  trainedAt: "2026-05-18T20:04:59.487Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 6.181,
    controlDiff: 8.3691,
    boardStrengthDiff: 8.3752,
    reserveStrengthDiff: 24.0909,
    handStrengthDiff: -20.9731,
    mobilityDiff: 9.5078,
    cornerControlDiff: 14.2224,
    occupiedBoardDiff: 5.1454,
    imminentRoundDamageDiff: 5.7023,
    activeTurnTempo: -20.387,
    specialCardValue: -1.0093,
    deckTrimValue: -24.8921,
    eliteRouteBias: -31.5544,
    restRouteBias: -6.5282,
    forgeRouteBias: -13.95,
    treasureRouteBias: 12.7492,
    branchingRouteBias: 32.3647,
    riskTolerance: 8.8867,
    aggressionPlanBias: 19.5739,
    controlPlanBias: 14.8459,
    tempoPlanBias: -17.929,
    fusionPlanBias: 11.6196,
    precisionPlanBias: 1.0429,
    uncommonCardBias: -6.7832,
    rareCardBias: 14.0085,
    charmSynergyBias: 31.5045,
    duplicateCardPenalty: 3.7721,
    enemyProfileRespect: 22.2412,
  },
};
