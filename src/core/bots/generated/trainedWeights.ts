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
  name: "trained-bot-20260519-224102",
  trainedAt: "2026-05-19T22:41:02.718Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 12.8107,
    controlDiff: 12.6725,
    boardStrengthDiff: 18.6139,
    reserveStrengthDiff: 26.1727,
    handStrengthDiff: -17.0908,
    mobilityDiff: 11.258,
    cornerControlDiff: 9.1298,
    occupiedBoardDiff: -2.7026,
    imminentRoundDamageDiff: -3.5659,
    activeTurnTempo: -24.2065,
    specialCardValue: -10.6984,
    deckTrimValue: -13.4436,
    eliteRouteBias: -36.3752,
    restRouteBias: 1.3891,
    forgeRouteBias: -19.8198,
    treasureRouteBias: 27.4606,
    branchingRouteBias: 29.6913,
    riskTolerance: 12.0941,
    aggressionPlanBias: 22.1474,
    controlPlanBias: 17.3738,
    tempoPlanBias: -9.3881,
    fusionPlanBias: 19.6199,
    precisionPlanBias: 8.4025,
    uncommonCardBias: -10.3017,
    rareCardBias: 6.4077,
    charmSynergyBias: 33.7472,
    duplicateCardPenalty: 6.5729,
    enemyProfileRespect: 28.3073,
  },
};
