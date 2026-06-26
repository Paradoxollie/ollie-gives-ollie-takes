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
  name: "trained-bot-20260626-130850",
  trainedAt: "2026-06-26T13:08:50.281Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.4997,
    shieldDiff: 45.1637,
    drawBonusDiff: 1.3589,
    manaBonusDiff: 78.7966,
    poisonDiff: 77.9665,
    controlDiff: 12.2775,
    boardStrengthDiff: 23.6062,
    boardManaDiff: 17.6137,
    stackSynergyDiff: 3.8572,
    reserveStrengthDiff: 25.6334,
    handStrengthDiff: 35.7399,
    mobilityDiff: 16.3103,
    cornerControlDiff: 17.8245,
    occupiedBoardDiff: 32.5666,
    imminentRoundDamageDiff: 56.5658,
    activeTurnTempo: 8.4295,
    specialCardValue: 9.2737,
    deckTrimValue: 0,
    eliteRouteBias: 0.1919,
    restRouteBias: 1.5061,
    forgeRouteBias: 12,
    treasureRouteBias: 12,
    branchingRouteBias: 8.6515,
    riskTolerance: 3.2023,
    aggressionPlanBias: 2.1173,
    controlPlanBias: 15.2079,
    tempoPlanBias: 0.4631,
    fusionPlanBias: -1.0149,
    precisionPlanBias: 10.3048,
    uncommonCardBias: 7.5447,
    rareCardBias: 8.0183,
    charmSynergyBias: 13.6445,
    duplicateCardPenalty: 5.3087,
    enemyProfileRespect: 3.9043,
  },
};
