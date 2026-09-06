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
  name: "trained-bot-20260906-113602",
  trainedAt: "2026-09-06T11:36:02.901Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.3144,
    shieldDiff: 117.653,
    drawBonusDiff: 41.856,
    manaBonusDiff: 90.1617,
    poisonDiff: 48.2372,
    controlDiff: 55.7216,
    boardStrengthDiff: 1.5035,
    boardManaDiff: 67.1498,
    stackSynergyDiff: 30.2665,
    reserveStrengthDiff: 26.7477,
    handStrengthDiff: 9.4006,
    mobilityDiff: 30,
    cornerControlDiff: 29.9188,
    occupiedBoardDiff: -28.2398,
    imminentRoundDamageDiff: 84.7209,
    activeTurnTempo: 45.9441,
    specialCardValue: 9.599,
    deckTrimValue: 0,
    eliteRouteBias: 6.0849,
    restRouteBias: 9.2824,
    forgeRouteBias: 9.6545,
    treasureRouteBias: 7.726,
    branchingRouteBias: 0.4267,
    riskTolerance: -1.8324,
    aggressionPlanBias: 5.9418,
    controlPlanBias: 9.5145,
    tempoPlanBias: -4.7889,
    fusionPlanBias: 1.451,
    precisionPlanBias: -0.2471,
    uncommonCardBias: -1.0589,
    rareCardBias: 0.0874,
    charmSynergyBias: 14,
    duplicateCardPenalty: 1.4835,
    enemyProfileRespect: 6.2119,
  },
};
