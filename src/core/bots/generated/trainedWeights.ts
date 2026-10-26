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
  name: "trained-bot-20261026-010815",
  trainedAt: "2026-10-26T01:08:15.893Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.23625,
    shieldDiff: 79.30825,
    drawBonusDiff: 14.4079,
    manaBonusDiff: 60.37805,
    poisonDiff: 83.39845,
    controlDiff: 81.982,
    boardStrengthDiff: 14.4286,
    boardManaDiff: 20.676949999999998,
    stackSynergyDiff: 91.4328,
    reserveStrengthDiff: 20.7631,
    handStrengthDiff: 2.81845,
    mobilityDiff: 17.6423,
    cornerControlDiff: 5.04955,
    occupiedBoardDiff: -20.4156,
    imminentRoundDamageDiff: 91.0455,
    activeTurnTempo: 22.66235,
    specialCardValue: 9.907699999999998,
    deckTrimValue: 2.6060999999999996,
    eliteRouteBias: -5.03425,
    restRouteBias: 4.06335,
    forgeRouteBias: 12,
    treasureRouteBias: 10.6769,
    branchingRouteBias: 9.98705,
    riskTolerance: 5.12305,
    aggressionPlanBias: -10.57635,
    controlPlanBias: -6.3594,
    tempoPlanBias: -4.34865,
    fusionPlanBias: 4.86095,
    precisionPlanBias: -10.0817,
    uncommonCardBias: 0.5061,
    rareCardBias: -1.7602,
    charmSynergyBias: 7.8796,
    duplicateCardPenalty: 5.4672,
    enemyProfileRespect: 2.9019000000000004,
  },
};
