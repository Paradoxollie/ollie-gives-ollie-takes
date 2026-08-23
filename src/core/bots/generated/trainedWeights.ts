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
  name: "trained-bot-20260823-103231",
  trainedAt: "2026-08-23T10:32:31.872Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.3833,
    shieldDiff: 103.747,
    drawBonusDiff: 58.248,
    manaBonusDiff: 96.7112,
    poisonDiff: 74.926,
    controlDiff: 83.6244,
    boardStrengthDiff: 12.1881,
    boardManaDiff: 61.7501,
    stackSynergyDiff: 4.6232,
    reserveStrengthDiff: 7.1629,
    handStrengthDiff: 34.5123,
    mobilityDiff: 3.3989,
    cornerControlDiff: 10.1006,
    occupiedBoardDiff: -0.2265,
    imminentRoundDamageDiff: 75.3881,
    activeTurnTempo: 58.0661,
    specialCardValue: 11.6799,
    deckTrimValue: 7.5137,
    eliteRouteBias: -1.3659,
    restRouteBias: 7.1643,
    forgeRouteBias: 9.2332,
    treasureRouteBias: 8.0294,
    branchingRouteBias: 3.8847,
    riskTolerance: 4.0756,
    aggressionPlanBias: 3.6763,
    controlPlanBias: 14.4876,
    tempoPlanBias: 3.3991,
    fusionPlanBias: 2.7621,
    precisionPlanBias: 7.7103,
    uncommonCardBias: -4,
    rareCardBias: 5.1167,
    charmSynergyBias: 2.6049,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 2.7524,
  },
};
