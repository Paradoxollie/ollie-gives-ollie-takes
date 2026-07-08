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
  name: "trained-bot-20260708-031421",
  trainedAt: "2026-07-08T03:14:21.665Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.7788,
    shieldDiff: 61.0532,
    drawBonusDiff: 13.8796,
    manaBonusDiff: 72.0726,
    poisonDiff: 65.9295,
    controlDiff: 16.0668,
    boardStrengthDiff: 33.1512,
    boardManaDiff: 6.6211,
    stackSynergyDiff: 1.1993,
    reserveStrengthDiff: 26.7643,
    handStrengthDiff: 10.2258,
    mobilityDiff: 29.2841,
    cornerControlDiff: 8.1834,
    occupiedBoardDiff: 44.8411,
    imminentRoundDamageDiff: 64.0373,
    activeTurnTempo: 19.2727,
    specialCardValue: 17.9012,
    deckTrimValue: 11.8505,
    eliteRouteBias: -2.1682,
    restRouteBias: 5.5144,
    forgeRouteBias: 0,
    treasureRouteBias: 11.2437,
    branchingRouteBias: 10,
    riskTolerance: 5.4012,
    aggressionPlanBias: -0.3637,
    controlPlanBias: 3.9744,
    tempoPlanBias: -2.5685,
    fusionPlanBias: 4.3532,
    precisionPlanBias: 8.7525,
    uncommonCardBias: -0.0017,
    rareCardBias: 4.6614,
    charmSynergyBias: 14,
    duplicateCardPenalty: 7.7975,
    enemyProfileRespect: 0.3188,
  },
};
