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
  name: "trained-bot-20260605-060928",
  trainedAt: "2026-06-05T06:09:28.613Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.112,
    shieldDiff: 53.9751,
    drawBonusDiff: 79.6582,
    controlDiff: 2.6483,
    boardStrengthDiff: 51.81935,
    boardManaDiff: 21.542749999999998,
    stackSynergyDiff: 24.1284,
    reserveStrengthDiff: 27.32305,
    handStrengthDiff: 26.07425,
    mobilityDiff: 9.29205,
    cornerControlDiff: 36.51235,
    occupiedBoardDiff: 21.73105,
    imminentRoundDamageDiff: 1.80855,
    activeTurnTempo: -11.3576,
    specialCardValue: 15.0231,
    deckTrimValue: 9.18695,
    eliteRouteBias: 6.3922,
    restRouteBias: 5.6812000000000005,
    forgeRouteBias: 9.6142,
    treasureRouteBias: 1.0145,
    branchingRouteBias: 5.64035,
    riskTolerance: 8,
    aggressionPlanBias: 15.1432,
    controlPlanBias: 10.5545,
    tempoPlanBias: -11.29945,
    fusionPlanBias: 7.024699999999999,
    precisionPlanBias: 2.6846,
    uncommonCardBias: 2.8458499999999995,
    rareCardBias: 9.3899,
    charmSynergyBias: 11.2349,
    duplicateCardPenalty: 4.1001,
    enemyProfileRespect: 1.883,
  },
};
