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
  name: "trained-bot-20260904-113141",
  trainedAt: "2026-09-04T11:31:41.358Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.1647,
    shieldDiff: 117.3999,
    drawBonusDiff: 30.68275,
    manaBonusDiff: 89.78880000000001,
    poisonDiff: 59.443250000000006,
    controlDiff: 62.3639,
    boardStrengthDiff: 3.2588500000000002,
    boardManaDiff: 65.63485,
    stackSynergyDiff: 8.2066,
    reserveStrengthDiff: 21.482300000000002,
    handStrengthDiff: 15.996849999999998,
    mobilityDiff: 20.3532,
    cornerControlDiff: 22.53075,
    occupiedBoardDiff: -26.6695,
    imminentRoundDamageDiff: 74.97955,
    activeTurnTempo: 55.2391,
    specialCardValue: 13.90195,
    deckTrimValue: 6.061,
    eliteRouteBias: 0.5077,
    restRouteBias: 4.41235,
    forgeRouteBias: 2.3822,
    treasureRouteBias: 9.78245,
    branchingRouteBias: 5.6368,
    riskTolerance: 0.5673999999999999,
    aggressionPlanBias: 3.0256,
    controlPlanBias: 15.1554,
    tempoPlanBias: -0.4713999999999996,
    fusionPlanBias: 1.14025,
    precisionPlanBias: 0.68855,
    uncommonCardBias: 4.2576,
    rareCardBias: -1.4201,
    charmSynergyBias: 8.97335,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
