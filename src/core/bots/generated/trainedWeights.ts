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
  name: "trained-bot-20261022-060433",
  trainedAt: "2026-10-22T06:04:33.994Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.9488,
    shieldDiff: 77.3309,
    drawBonusDiff: 10.8714,
    manaBonusDiff: 66.4841,
    poisonDiff: 82.475,
    controlDiff: 77.5791,
    boardStrengthDiff: 20.7319,
    boardManaDiff: 32.1235,
    stackSynergyDiff: 90.9132,
    reserveStrengthDiff: 14.4427,
    handStrengthDiff: 9.4821,
    mobilityDiff: 25.9374,
    cornerControlDiff: 16.7895,
    occupiedBoardDiff: -17.5694,
    imminentRoundDamageDiff: 89.0253,
    activeTurnTempo: 20.5739,
    specialCardValue: 18,
    deckTrimValue: 2.7136,
    eliteRouteBias: -3.9557,
    restRouteBias: 0,
    forgeRouteBias: 5.3822,
    treasureRouteBias: 2.7206,
    branchingRouteBias: 9.1882,
    riskTolerance: -1.5204,
    aggressionPlanBias: -12,
    controlPlanBias: 3.7174,
    tempoPlanBias: -8.4192,
    fusionPlanBias: -12,
    precisionPlanBias: 0.7517,
    uncommonCardBias: 2.428,
    rareCardBias: 9.667,
    charmSynergyBias: 14,
    duplicateCardPenalty: 6.5693,
    enemyProfileRespect: 0,
  },
};
