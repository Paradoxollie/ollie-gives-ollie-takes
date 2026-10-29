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
  name: "trained-bot-20261029-142641",
  trainedAt: "2026-10-29T14:26:41.756Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.09495,
    shieldDiff: 80.87450000000001,
    drawBonusDiff: 23.70955,
    manaBonusDiff: 53.545249999999996,
    poisonDiff: 88.0806,
    controlDiff: 88.84305,
    boardStrengthDiff: 17.53805,
    boardManaDiff: 19.675849999999997,
    stackSynergyDiff: 112.1216,
    reserveStrengthDiff: 27.29905,
    handStrengthDiff: 1.8492500000000003,
    mobilityDiff: 15.75375,
    cornerControlDiff: 16.028750000000002,
    occupiedBoardDiff: -17.16305,
    imminentRoundDamageDiff: 84.54665,
    activeTurnTempo: 16.6996,
    specialCardValue: 8.85755,
    deckTrimValue: 0.9792,
    eliteRouteBias: -5.2318999999999996,
    restRouteBias: 3.3888499999999997,
    forgeRouteBias: 0,
    treasureRouteBias: 3.17175,
    branchingRouteBias: 5.82275,
    riskTolerance: 0.63435,
    aggressionPlanBias: -10.346350000000001,
    controlPlanBias: -4.3934,
    tempoPlanBias: -9.81555,
    fusionPlanBias: 8.266300000000001,
    precisionPlanBias: -1.49775,
    uncommonCardBias: 8.867049999999999,
    rareCardBias: -1.5714000000000001,
    charmSynergyBias: 4.53045,
    duplicateCardPenalty: 9.78605,
    enemyProfileRespect: 7.77905,
  },
};
