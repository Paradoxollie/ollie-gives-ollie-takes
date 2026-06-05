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
  name: "trained-bot-20260605-010637",
  trainedAt: "2026-06-05T01:06:37.901Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 104.6578,
    shieldDiff: 51.8465,
    drawBonusDiff: 83.8119,
    controlDiff: 0,
    boardStrengthDiff: 49.4177,
    boardManaDiff: 21.4318,
    stackSynergyDiff: 25.8336,
    reserveStrengthDiff: 24.4418,
    handStrengthDiff: 25.3643,
    mobilityDiff: 10.2775,
    cornerControlDiff: 35.8805,
    occupiedBoardDiff: 24.529,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -14.3756,
    specialCardValue: 12.7826,
    deckTrimValue: 7.0264,
    eliteRouteBias: 8,
    restRouteBias: 5.8209,
    forgeRouteBias: 10.6795,
    treasureRouteBias: 0,
    branchingRouteBias: 7.2955,
    riskTolerance: 8,
    aggressionPlanBias: 15.0963,
    controlPlanBias: 14.1824,
    tempoPlanBias: -10.8928,
    fusionPlanBias: 3.1286,
    precisionPlanBias: 1.497,
    uncommonCardBias: 4.0645,
    rareCardBias: 10.6075,
    charmSynergyBias: 11.322,
    duplicateCardPenalty: 1.9325,
    enemyProfileRespect: 2.9783,
  },
};
