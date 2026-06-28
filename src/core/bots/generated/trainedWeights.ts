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
  name: "trained-bot-20260628-103234",
  trainedAt: "2026-06-28T10:32:34.736Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.0367,
    shieldDiff: 61.0379,
    drawBonusDiff: 12.8118,
    manaBonusDiff: 76.6938,
    poisonDiff: 71.3617,
    controlDiff: 8.4259,
    boardStrengthDiff: 21.2369,
    boardManaDiff: 23.3732,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 18.4141,
    handStrengthDiff: 29.4424,
    mobilityDiff: 6.2845,
    cornerControlDiff: 18.9398,
    occupiedBoardDiff: 28.4676,
    imminentRoundDamageDiff: 48.312,
    activeTurnTempo: 10.8953,
    specialCardValue: 17.454,
    deckTrimValue: 3.1068,
    eliteRouteBias: -4.2206,
    restRouteBias: 3.8896,
    forgeRouteBias: 8.2559,
    treasureRouteBias: 11.4002,
    branchingRouteBias: 6.4339,
    riskTolerance: 8,
    aggressionPlanBias: 1.4637,
    controlPlanBias: 17.7074,
    tempoPlanBias: -0.7502,
    fusionPlanBias: 4.2319,
    precisionPlanBias: 6.6459,
    uncommonCardBias: 7.3666,
    rareCardBias: 10.1211,
    charmSynergyBias: 3.724,
    duplicateCardPenalty: 8.9817,
    enemyProfileRespect: 5.2597,
  },
};
