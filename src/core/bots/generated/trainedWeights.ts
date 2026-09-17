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
  name: "trained-bot-20260917-125048",
  trainedAt: "2026-09-17T12:50:48.531Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.9861,
    shieldDiff: 98.3579,
    drawBonusDiff: 34.5829,
    manaBonusDiff: 90.1041,
    poisonDiff: 38.0433,
    controlDiff: 58.7022,
    boardStrengthDiff: 15.3329,
    boardManaDiff: 48.0232,
    stackSynergyDiff: 40.9611,
    reserveStrengthDiff: 19.2629,
    handStrengthDiff: -5.8613,
    mobilityDiff: 27.3128,
    cornerControlDiff: 24.5858,
    occupiedBoardDiff: -35.2439,
    imminentRoundDamageDiff: 45.6068,
    activeTurnTempo: 27.4851,
    specialCardValue: 11.9364,
    deckTrimValue: 2.21,
    eliteRouteBias: -0.467,
    restRouteBias: 11.743,
    forgeRouteBias: 12,
    treasureRouteBias: 7.0925,
    branchingRouteBias: 5.0846,
    riskTolerance: -0.4926,
    aggressionPlanBias: 6.6063,
    controlPlanBias: 15.8454,
    tempoPlanBias: 4.5664,
    fusionPlanBias: -0.3192,
    precisionPlanBias: -3.1186,
    uncommonCardBias: 2.8041,
    rareCardBias: 1.0492,
    charmSynergyBias: 10.0205,
    duplicateCardPenalty: 5.7478,
    enemyProfileRespect: 3.8691,
  },
};
