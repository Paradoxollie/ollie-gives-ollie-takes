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
  name: "trained-bot-20261104-212034",
  trainedAt: "2026-11-04T21:20:34.743Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 82.82300000000001,
    shieldDiff: 70.61092500000001,
    drawBonusDiff: 10.044175,
    manaBonusDiff: 30.397149999999996,
    poisonDiff: 55.264925000000005,
    controlDiff: 118.122475,
    boardStrengthDiff: 27.197225000000003,
    boardManaDiff: 5.34995,
    stackSynergyDiff: 120,
    reserveStrengthDiff: 18.440275,
    handStrengthDiff: -8.692275,
    mobilityDiff: 30,
    cornerControlDiff: 22.894174999999997,
    occupiedBoardDiff: -21.73555,
    imminentRoundDamageDiff: 91.38875,
    activeTurnTempo: 24.725324999999998,
    specialCardValue: 13.729125,
    deckTrimValue: 0,
    eliteRouteBias: 0.29537499999999994,
    restRouteBias: 0.73185,
    forgeRouteBias: 7.055975,
    treasureRouteBias: 11.458375,
    branchingRouteBias: 2.0879250000000003,
    riskTolerance: 2.83425,
    aggressionPlanBias: -4.297825,
    controlPlanBias: 17.87855,
    tempoPlanBias: -9.98655,
    fusionPlanBias: 10.903125,
    precisionPlanBias: -3.707125,
    uncommonCardBias: -2.71345,
    rareCardBias: 9.792874999999999,
    charmSynergyBias: 10.009125000000001,
    duplicateCardPenalty: 8.020775,
    enemyProfileRespect: 6.4967,
  },
};
