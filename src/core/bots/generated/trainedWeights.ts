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
  name: "trained-bot-20260919-192157",
  trainedAt: "2026-09-19T19:21:57.679Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.8135,
    shieldDiff: 116.3358,
    drawBonusDiff: 27.786,
    manaBonusDiff: 88.4924,
    poisonDiff: 48.0867,
    controlDiff: 65.2455,
    boardStrengthDiff: 23.6103,
    boardManaDiff: 49.2669,
    stackSynergyDiff: 50.1127,
    reserveStrengthDiff: 22.7669,
    handStrengthDiff: -10,
    mobilityDiff: 24.9015,
    cornerControlDiff: 24.0158,
    occupiedBoardDiff: -19.3055,
    imminentRoundDamageDiff: 56.4801,
    activeTurnTempo: 19.3245,
    specialCardValue: 13.0963,
    deckTrimValue: 9.5614,
    eliteRouteBias: -3.9151,
    restRouteBias: 2.5161,
    forgeRouteBias: 0.3461,
    treasureRouteBias: 0,
    branchingRouteBias: 1.7779,
    riskTolerance: -3.6148,
    aggressionPlanBias: -1.1462,
    controlPlanBias: 13.5094,
    tempoPlanBias: -7.9952,
    fusionPlanBias: -12,
    precisionPlanBias: 8.6147,
    uncommonCardBias: 10,
    rareCardBias: -2.1679,
    charmSynergyBias: 11.9807,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.6497,
  },
};
