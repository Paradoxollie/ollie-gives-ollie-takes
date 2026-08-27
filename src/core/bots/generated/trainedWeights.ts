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
  name: "trained-bot-20260827-005523",
  trainedAt: "2026-08-27T00:55:23.008Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.3946,
    shieldDiff: 113.1254,
    drawBonusDiff: 23.9393,
    manaBonusDiff: 96.98475,
    poisonDiff: 68.9949,
    controlDiff: 83.60045,
    boardStrengthDiff: 29.7511,
    boardManaDiff: 40.6019,
    stackSynergyDiff: 9.1024,
    reserveStrengthDiff: 15.00575,
    handStrengthDiff: 13.0719,
    mobilityDiff: 16.073999999999998,
    cornerControlDiff: 15.848500000000001,
    occupiedBoardDiff: -19.802599999999998,
    imminentRoundDamageDiff: 72.50885,
    activeTurnTempo: 39.8776,
    specialCardValue: 9.61075,
    deckTrimValue: 9.4091,
    eliteRouteBias: 2.9896000000000003,
    restRouteBias: 11.265450000000001,
    forgeRouteBias: 2.7789,
    treasureRouteBias: 6.209849999999999,
    branchingRouteBias: 0.70465,
    riskTolerance: 1.13875,
    aggressionPlanBias: 17.1385,
    controlPlanBias: 1.4342,
    tempoPlanBias: 15.7867,
    fusionPlanBias: 1.51595,
    precisionPlanBias: 0.9491,
    uncommonCardBias: -4,
    rareCardBias: -2.7337,
    charmSynergyBias: -1.36905,
    duplicateCardPenalty: 3.42115,
    enemyProfileRespect: 6.27125,
  },
};
