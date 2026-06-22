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
  name: "trained-bot-20260622-065818",
  trainedAt: "2026-06-22T06:58:18.829Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.35985,
    shieldDiff: 63.1391,
    drawBonusDiff: 11.478349999999999,
    manaBonusDiff: 86.0094,
    poisonDiff: 92.90625,
    controlDiff: 18.16665,
    boardStrengthDiff: 47.0488,
    boardManaDiff: 5.767,
    stackSynergyDiff: 5.96505,
    reserveStrengthDiff: 30,
    handStrengthDiff: 49.76905,
    mobilityDiff: 9.92975,
    cornerControlDiff: 54.94495,
    occupiedBoardDiff: 4.34735,
    imminentRoundDamageDiff: 54.61265,
    activeTurnTempo: 7.894550000000001,
    specialCardValue: 15.188600000000001,
    deckTrimValue: 5.4293,
    eliteRouteBias: -2.9462,
    restRouteBias: 10.93035,
    forgeRouteBias: 0,
    treasureRouteBias: 9.5659,
    branchingRouteBias: 6.0091,
    riskTolerance: 8,
    aggressionPlanBias: -1.5050500000000002,
    controlPlanBias: 14.2265,
    tempoPlanBias: 13.318349999999999,
    fusionPlanBias: -9.06045,
    precisionPlanBias: 1.5168000000000001,
    uncommonCardBias: -0.027449999999999974,
    rareCardBias: -0.18305,
    charmSynergyBias: 4.9949,
    duplicateCardPenalty: 3.46535,
    enemyProfileRespect: 6.5261499999999995,
  },
};
