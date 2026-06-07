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
  name: "trained-bot-20260607-013230",
  trainedAt: "2026-06-07T01:32:30.461Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 89.9712,
    shieldDiff: 54.0689,
    drawBonusDiff: 69.8062,
    controlDiff: 3.3003,
    boardStrengthDiff: 44.2679,
    boardManaDiff: 0,
    stackSynergyDiff: 4.4195,
    reserveStrengthDiff: 28.6528,
    handStrengthDiff: 21.6352,
    mobilityDiff: 8.6859,
    cornerControlDiff: 50.619,
    occupiedBoardDiff: 24.6156,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -11.4391,
    specialCardValue: 13.8999,
    deckTrimValue: 4.677,
    eliteRouteBias: 3.89,
    restRouteBias: 12,
    forgeRouteBias: 11.3412,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: -3.3958,
    aggressionPlanBias: 18,
    controlPlanBias: 10.0196,
    tempoPlanBias: -4.4843,
    fusionPlanBias: 2.2542,
    precisionPlanBias: 7.8502,
    uncommonCardBias: 10,
    rareCardBias: 9.4746,
    charmSynergyBias: 8.5535,
    duplicateCardPenalty: 5.6949,
    enemyProfileRespect: 6.2935,
  },
};
