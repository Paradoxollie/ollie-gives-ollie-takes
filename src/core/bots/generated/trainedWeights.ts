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
  name: "trained-bot-20260825-145113",
  trainedAt: "2026-08-25T14:51:13.617Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.7758,
    shieldDiff: 102.5203,
    drawBonusDiff: 49.6127,
    manaBonusDiff: 96.3883,
    poisonDiff: 64.9893,
    controlDiff: 89.5123,
    boardStrengthDiff: 33.7867,
    boardManaDiff: 48.3578,
    stackSynergyDiff: 14.1233,
    reserveStrengthDiff: 7.0333,
    handStrengthDiff: 30.4937,
    mobilityDiff: 13.1068,
    cornerControlDiff: 7.7062,
    occupiedBoardDiff: -4.3436,
    imminentRoundDamageDiff: 63.1936,
    activeTurnTempo: 31.6378,
    specialCardValue: 4.0169,
    deckTrimValue: 3.3884,
    eliteRouteBias: 0.4347,
    restRouteBias: 3.589,
    forgeRouteBias: 0,
    treasureRouteBias: 7.4891,
    branchingRouteBias: 6.9843,
    riskTolerance: 2.1398,
    aggressionPlanBias: 16.0642,
    controlPlanBias: 10.6321,
    tempoPlanBias: 18,
    fusionPlanBias: -8.2453,
    precisionPlanBias: 9.4083,
    uncommonCardBias: 9.4822,
    rareCardBias: -2.0527,
    charmSynergyBias: -4,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 1.2392,
  },
};
