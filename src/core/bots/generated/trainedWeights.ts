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
  name: "trained-bot-20260605-202653",
  trainedAt: "2026-06-05T20:26:53.829Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.1828,
    shieldDiff: 55.303,
    drawBonusDiff: 78.5267,
    controlDiff: 6.0017,
    boardStrengthDiff: 50.5485,
    boardManaDiff: 16.6767,
    stackSynergyDiff: 11.3926,
    reserveStrengthDiff: 29.8118,
    handStrengthDiff: 26.9083,
    mobilityDiff: 10.6452,
    cornerControlDiff: 39.9998,
    occupiedBoardDiff: 25.6935,
    imminentRoundDamageDiff: 5.0606,
    activeTurnTempo: -11.4532,
    specialCardValue: 18,
    deckTrimValue: 11.129,
    eliteRouteBias: 6.9477,
    restRouteBias: 1.3144,
    forgeRouteBias: 7.9119,
    treasureRouteBias: 1.2983,
    branchingRouteBias: 10,
    riskTolerance: 2.6145,
    aggressionPlanBias: 15.7324,
    controlPlanBias: 7.846,
    tempoPlanBias: -10.8382,
    fusionPlanBias: 2.1161,
    precisionPlanBias: 10.1969,
    uncommonCardBias: 0.0046,
    rareCardBias: 4.6171,
    charmSynergyBias: 5.4785,
    duplicateCardPenalty: 2.863,
    enemyProfileRespect: 8.7245,
  },
};
