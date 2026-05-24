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
  name: "trained-bot-20260524-161619",
  trainedAt: "2026-05-24T16:16:19.894Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 37.3145,
    controlDiff: 11.6739,
    boardStrengthDiff: 21.3576,
    reserveStrengthDiff: 36.2945,
    handStrengthDiff: 17.7603,
    mobilityDiff: 10.6765,
    cornerControlDiff: 26.2247,
    occupiedBoardDiff: 25.3066,
    imminentRoundDamageDiff: -14.7437,
    activeTurnTempo: -20.8455,
    specialCardValue: -3.0687,
    deckTrimValue: -38.0071,
    eliteRouteBias: -55.3268,
    restRouteBias: -9.4712,
    forgeRouteBias: 9.2855,
    treasureRouteBias: 17.4729,
    branchingRouteBias: 26.798,
    riskTolerance: 12.5769,
    aggressionPlanBias: 24.3947,
    controlPlanBias: 13.8548,
    tempoPlanBias: 4.0136,
    fusionPlanBias: 4.4745,
    precisionPlanBias: 3.1314,
    uncommonCardBias: 11.6851,
    rareCardBias: 26.3257,
    charmSynergyBias: 35.1537,
    duplicateCardPenalty: -14.8474,
    enemyProfileRespect: 23.5347,
  },
};
