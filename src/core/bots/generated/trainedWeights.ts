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
  name: "trained-bot-20260528-044443",
  trainedAt: "2026-05-28T04:44:43.460Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 59.7712,
    controlDiff: 16.8605,
    boardStrengthDiff: 30.1908,
    reserveStrengthDiff: 45.1403,
    handStrengthDiff: 1.418,
    mobilityDiff: -4.2317,
    cornerControlDiff: 36.1297,
    occupiedBoardDiff: 17.5371,
    imminentRoundDamageDiff: -25.1813,
    activeTurnTempo: -28.4142,
    specialCardValue: 10.4608,
    deckTrimValue: -31.3965,
    eliteRouteBias: -60.706,
    restRouteBias: -9.4251,
    forgeRouteBias: 18.223,
    treasureRouteBias: 18.999,
    branchingRouteBias: 22.8208,
    riskTolerance: 41.6126,
    aggressionPlanBias: 7.7589,
    controlPlanBias: 31.5164,
    tempoPlanBias: -5.8504,
    fusionPlanBias: 13.5157,
    precisionPlanBias: 3.8453,
    uncommonCardBias: 4.2999,
    rareCardBias: 29.7663,
    charmSynergyBias: 39.3895,
    duplicateCardPenalty: -22.6557,
    enemyProfileRespect: 13.5856,
  },
};
