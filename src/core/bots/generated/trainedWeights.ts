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
  name: "trained-bot-20260715-212222",
  trainedAt: "2026-07-15T21:22:22.620Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 128.1218,
    shieldDiff: 70.0968,
    drawBonusDiff: 16.2064,
    manaBonusDiff: 53.9726,
    poisonDiff: 65.9528,
    controlDiff: 42.313,
    boardStrengthDiff: 36.8834,
    boardManaDiff: 10.7834,
    stackSynergyDiff: 37.0327,
    reserveStrengthDiff: 14.1075,
    handStrengthDiff: 13.8273,
    mobilityDiff: 26.9089,
    cornerControlDiff: 11.3136,
    occupiedBoardDiff: 8.0422,
    imminentRoundDamageDiff: 71.2706,
    activeTurnTempo: 19.3946,
    specialCardValue: 9.508,
    deckTrimValue: 1.7664,
    eliteRouteBias: 8,
    restRouteBias: 8.45,
    forgeRouteBias: 8.3549,
    treasureRouteBias: 8.0295,
    branchingRouteBias: 5.1913,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: 0.9981,
    tempoPlanBias: 3.9851,
    fusionPlanBias: 4.6538,
    precisionPlanBias: -6.3535,
    uncommonCardBias: 3.3064,
    rareCardBias: 7.6588,
    charmSynergyBias: -4,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
