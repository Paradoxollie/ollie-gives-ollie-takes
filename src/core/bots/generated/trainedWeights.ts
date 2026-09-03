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
  name: "trained-bot-20260903-131447",
  trainedAt: "2026-09-03T13:14:47.941Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 78.3011,
    shieldDiff: 117.4826,
    drawBonusDiff: 28.8035,
    manaBonusDiff: 89.155,
    poisonDiff: 66.372,
    controlDiff: 75.243,
    boardStrengthDiff: 3.9612,
    boardManaDiff: 71.7981,
    stackSynergyDiff: 1.3648,
    reserveStrengthDiff: 14.2679,
    handStrengthDiff: 15.3897,
    mobilityDiff: 22.6707,
    cornerControlDiff: 12.6921,
    occupiedBoardDiff: -12.4197,
    imminentRoundDamageDiff: 71.9112,
    activeTurnTempo: 52.0276,
    specialCardValue: 17.505,
    deckTrimValue: 3.4886,
    eliteRouteBias: -7.633,
    restRouteBias: 0.1071,
    forgeRouteBias: 0,
    treasureRouteBias: 9.1261,
    branchingRouteBias: 0,
    riskTolerance: 2.0907,
    aggressionPlanBias: 18,
    controlPlanBias: 7.3946,
    tempoPlanBias: -12,
    fusionPlanBias: -6.9045,
    precisionPlanBias: 11.8252,
    uncommonCardBias: 8.6358,
    rareCardBias: 1.4251,
    charmSynergyBias: 8.3181,
    duplicateCardPenalty: 5.0562,
    enemyProfileRespect: 1.5245,
  },
};
