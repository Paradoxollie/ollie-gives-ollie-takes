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
  name: "trained-bot-20260525-221918",
  trainedAt: "2026-05-25T22:19:18.967Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 50.7222,
    controlDiff: 31.5394,
    boardStrengthDiff: 18.6592,
    reserveStrengthDiff: 23.8018,
    handStrengthDiff: 22.7878,
    mobilityDiff: 9.3102,
    cornerControlDiff: 26.6625,
    occupiedBoardDiff: 14.5541,
    imminentRoundDamageDiff: -22.781,
    activeTurnTempo: -23.9677,
    specialCardValue: 1.959,
    deckTrimValue: -34.9311,
    eliteRouteBias: -73.3309,
    restRouteBias: -8.5906,
    forgeRouteBias: 2.3191,
    treasureRouteBias: 17.7177,
    branchingRouteBias: 28.7845,
    riskTolerance: 40.8453,
    aggressionPlanBias: 9.6666,
    controlPlanBias: 13.5865,
    tempoPlanBias: -8.0829,
    fusionPlanBias: 13.5273,
    precisionPlanBias: 8.3051,
    uncommonCardBias: 12.6143,
    rareCardBias: 18.0125,
    charmSynergyBias: 30.1396,
    duplicateCardPenalty: -20.4459,
    enemyProfileRespect: 23.8635,
  },
};
