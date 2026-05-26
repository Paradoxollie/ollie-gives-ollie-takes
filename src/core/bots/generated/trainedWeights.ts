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
  name: "trained-bot-20260526-043747",
  trainedAt: "2026-05-26T04:37:47.048Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 55.675,
    controlDiff: 26.4868,
    boardStrengthDiff: 18.6503,
    reserveStrengthDiff: 25.9238,
    handStrengthDiff: 19.7753,
    mobilityDiff: 11.3047,
    cornerControlDiff: 24.3023,
    occupiedBoardDiff: 16.0378,
    imminentRoundDamageDiff: -21.1729,
    activeTurnTempo: -27.7924,
    specialCardValue: -2.7384,
    deckTrimValue: -33.5894,
    eliteRouteBias: -75.8206,
    restRouteBias: -8.8787,
    forgeRouteBias: 5.2276,
    treasureRouteBias: 17.8858,
    branchingRouteBias: 24.2367,
    riskTolerance: 32.4962,
    aggressionPlanBias: 8.8751,
    controlPlanBias: 11.8602,
    tempoPlanBias: -7.3065,
    fusionPlanBias: 11.2624,
    precisionPlanBias: 13.9876,
    uncommonCardBias: 12.8401,
    rareCardBias: 16.3317,
    charmSynergyBias: 29.4923,
    duplicateCardPenalty: -17.8218,
    enemyProfileRespect: 16.8585,
  },
};
