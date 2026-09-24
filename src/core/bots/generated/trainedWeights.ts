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
  name: "trained-bot-20260924-125206",
  trainedAt: "2026-09-24T12:52:06.894Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 79.003975,
    shieldDiff: 98.386,
    drawBonusDiff: 29.27585,
    manaBonusDiff: 64.81175,
    poisonDiff: 51.119025,
    controlDiff: 47.080025,
    boardStrengthDiff: 13.5961,
    boardManaDiff: 65.97607500000001,
    stackSynergyDiff: 50.417199999999994,
    reserveStrengthDiff: 9.07855,
    handStrengthDiff: 0.5109999999999999,
    mobilityDiff: 25.993975,
    cornerControlDiff: 25.2188,
    occupiedBoardDiff: -20.638825,
    imminentRoundDamageDiff: 42.8713,
    activeTurnTempo: 34.3778,
    specialCardValue: 12.534175000000001,
    deckTrimValue: 3.294025,
    eliteRouteBias: -4.794925,
    restRouteBias: 2.1263249999999996,
    forgeRouteBias: 8.204749999999999,
    treasureRouteBias: 7.526175,
    branchingRouteBias: 3.041975,
    riskTolerance: -1.002275,
    aggressionPlanBias: -0.25902499999999995,
    controlPlanBias: 10.277975000000001,
    tempoPlanBias: -9.0907,
    fusionPlanBias: 6.311425,
    precisionPlanBias: -11.292950000000001,
    uncommonCardBias: 9.98255,
    rareCardBias: 2.629825,
    charmSynergyBias: 1.826075,
    duplicateCardPenalty: 9.147475,
    enemyProfileRespect: 3.292175,
  },
};
