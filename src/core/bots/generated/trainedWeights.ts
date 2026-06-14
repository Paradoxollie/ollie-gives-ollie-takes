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
  name: "trained-bot-20260614-103457",
  trainedAt: "2026-06-14T10:34:57.289Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 86.3964,
    shieldDiff: 55.0355,
    drawBonusDiff: 56.9119,
    manaBonusDiff: 81.1206,
    poisonDiff: 94.4643,
    controlDiff: 5.3677,
    boardStrengthDiff: 58.7224,
    boardManaDiff: 8.7512,
    stackSynergyDiff: 15.7309,
    reserveStrengthDiff: 26.8206,
    handStrengthDiff: 23.4328,
    mobilityDiff: -5.8044,
    cornerControlDiff: 54.4091,
    occupiedBoardDiff: 48.9173,
    imminentRoundDamageDiff: 10.9913,
    activeTurnTempo: 12.1141,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 1.2502,
    restRouteBias: 9.6989,
    forgeRouteBias: 3.5081,
    treasureRouteBias: 1.789,
    branchingRouteBias: 0,
    riskTolerance: -4,
    aggressionPlanBias: 0.641,
    controlPlanBias: 18,
    tempoPlanBias: -9.0006,
    fusionPlanBias: 14.5421,
    precisionPlanBias: -12,
    uncommonCardBias: 7.4258,
    rareCardBias: -4,
    charmSynergyBias: 4.0171,
    duplicateCardPenalty: 3.7653,
    enemyProfileRespect: 1.7711,
  },
};
