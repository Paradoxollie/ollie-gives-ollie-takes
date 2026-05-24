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
  name: "trained-bot-20260523-221436",
  trainedAt: "2026-05-23T22:14:36.979Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 33.6807,
    controlDiff: 16.5817,
    boardStrengthDiff: 26.533,
    reserveStrengthDiff: 40.3012,
    handStrengthDiff: 19.723,
    mobilityDiff: 2.0977,
    cornerControlDiff: 20.0711,
    occupiedBoardDiff: 21.8337,
    imminentRoundDamageDiff: -1.783,
    activeTurnTempo: -17.788,
    specialCardValue: -4.6039,
    deckTrimValue: -32.483,
    eliteRouteBias: -47.708,
    restRouteBias: -3.6837,
    forgeRouteBias: -5.4929,
    treasureRouteBias: 15.3834,
    branchingRouteBias: 22.1643,
    riskTolerance: 22.4937,
    aggressionPlanBias: 24.5451,
    controlPlanBias: 12.5322,
    tempoPlanBias: 9.0427,
    fusionPlanBias: 17.1099,
    precisionPlanBias: 10.6664,
    uncommonCardBias: 4.2938,
    rareCardBias: 21.8859,
    charmSynergyBias: 38.6752,
    duplicateCardPenalty: -12.5984,
    enemyProfileRespect: 22.0626,
  },
};
