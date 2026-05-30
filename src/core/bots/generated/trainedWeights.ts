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
  name: "trained-bot-20260530-221603",
  trainedAt: "2026-05-30T22:16:03.882Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 77.8287,
    controlDiff: 15.5168,
    boardStrengthDiff: 33.535,
    reserveStrengthDiff: 61.1313,
    handStrengthDiff: -2.7031,
    mobilityDiff: 1.9703,
    cornerControlDiff: 38.0236,
    occupiedBoardDiff: 26.8056,
    imminentRoundDamageDiff: -23.9641,
    activeTurnTempo: -22.6372,
    specialCardValue: 9.4089,
    deckTrimValue: -15.1013,
    eliteRouteBias: -64.0297,
    restRouteBias: -1.314,
    forgeRouteBias: 23.9566,
    treasureRouteBias: 23.2745,
    branchingRouteBias: 5.4934,
    riskTolerance: 39.4259,
    aggressionPlanBias: 26.056,
    controlPlanBias: 22.3843,
    tempoPlanBias: -1.9665,
    fusionPlanBias: -0.9688,
    precisionPlanBias: -1.8418,
    uncommonCardBias: 26.8232,
    rareCardBias: 41.0044,
    charmSynergyBias: 45.9085,
    duplicateCardPenalty: 6.661,
    enemyProfileRespect: 2.9531,
  },
};
