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
  name: "trained-bot-20260614-233140",
  trainedAt: "2026-06-14T23:31:40.924Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 88.8401,
    shieldDiff: 65.9495,
    drawBonusDiff: 45.9997,
    manaBonusDiff: 76.9734,
    poisonDiff: 93.5122,
    controlDiff: 8.98,
    boardStrengthDiff: 50.1625,
    boardManaDiff: 12.9478,
    stackSynergyDiff: 3.6845,
    reserveStrengthDiff: 10.5534,
    handStrengthDiff: 24.0206,
    mobilityDiff: -2.4444,
    cornerControlDiff: 63.216,
    occupiedBoardDiff: 37.5818,
    imminentRoundDamageDiff: 26.8998,
    activeTurnTempo: -3.172,
    specialCardValue: 18,
    deckTrimValue: 4.5422,
    eliteRouteBias: -3.7939,
    restRouteBias: 9.0155,
    forgeRouteBias: 12,
    treasureRouteBias: 11.4528,
    branchingRouteBias: 0,
    riskTolerance: 0.4127,
    aggressionPlanBias: 13.6808,
    controlPlanBias: 11.8412,
    tempoPlanBias: -4.3177,
    fusionPlanBias: -3.5573,
    precisionPlanBias: -9.6243,
    uncommonCardBias: -1.6597,
    rareCardBias: -4,
    charmSynergyBias: 6.319,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.6218,
  },
};
