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
  name: "trained-bot-20260627-025022",
  trainedAt: "2026-06-27T02:50:22.638Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.4314,
    shieldDiff: 56.4207,
    drawBonusDiff: 8.9835,
    manaBonusDiff: 79.225,
    poisonDiff: 73.8613,
    controlDiff: 6.6801,
    boardStrengthDiff: 21.3285,
    boardManaDiff: 12.9973,
    stackSynergyDiff: 8.3021,
    reserveStrengthDiff: 20.7984,
    handStrengthDiff: 36.2238,
    mobilityDiff: 16.379,
    cornerControlDiff: 28.7895,
    occupiedBoardDiff: 27.0314,
    imminentRoundDamageDiff: 50.3416,
    activeTurnTempo: 9.6214,
    specialCardValue: 10.1495,
    deckTrimValue: 0.4529,
    eliteRouteBias: 5.8167,
    restRouteBias: 5.4612,
    forgeRouteBias: 9.1025,
    treasureRouteBias: 4.8229,
    branchingRouteBias: 8.8145,
    riskTolerance: 2.7688,
    aggressionPlanBias: 10.0412,
    controlPlanBias: 16.2988,
    tempoPlanBias: 0.9504,
    fusionPlanBias: 1.9879,
    precisionPlanBias: 9.4125,
    uncommonCardBias: 9.4921,
    rareCardBias: 10.8425,
    charmSynergyBias: 9.8013,
    duplicateCardPenalty: 8.5772,
    enemyProfileRespect: 0,
  },
};
