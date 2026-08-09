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
  name: "trained-bot-20260809-130200",
  trainedAt: "2026-08-09T13:02:00.469Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.3061,
    shieldDiff: 89.8829,
    drawBonusDiff: 27.3533,
    manaBonusDiff: 79.0382,
    poisonDiff: 34.3298,
    controlDiff: 70.2598,
    boardStrengthDiff: 8.5884,
    boardManaDiff: 32.6873,
    stackSynergyDiff: 31.9494,
    reserveStrengthDiff: 2.3127,
    handStrengthDiff: 39.0831,
    mobilityDiff: 8.8112,
    cornerControlDiff: 6.7691,
    occupiedBoardDiff: 20.9973,
    imminentRoundDamageDiff: 34.3246,
    activeTurnTempo: 27.9342,
    specialCardValue: 12.0948,
    deckTrimValue: 14,
    eliteRouteBias: -4.5472,
    restRouteBias: 10.1149,
    forgeRouteBias: 8.6115,
    treasureRouteBias: 6.4959,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: 10.9468,
    controlPlanBias: 17.744,
    tempoPlanBias: -7.8608,
    fusionPlanBias: 18,
    precisionPlanBias: 8.074,
    uncommonCardBias: 7.2333,
    rareCardBias: 1.9391,
    charmSynergyBias: 7.4528,
    duplicateCardPenalty: 2.1224,
    enemyProfileRespect: 6.1207,
  },
};
