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
  name: "trained-bot-20260920-164735",
  trainedAt: "2026-09-20T16:47:35.756Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.4476,
    shieldDiff: 106.8987,
    drawBonusDiff: 36.8392,
    manaBonusDiff: 82.2102,
    poisonDiff: 37.218,
    controlDiff: 65.7143,
    boardStrengthDiff: 20.6056,
    boardManaDiff: 52.1703,
    stackSynergyDiff: 45.0787,
    reserveStrengthDiff: 22.7719,
    handStrengthDiff: -10,
    mobilityDiff: 26.5542,
    cornerControlDiff: 24.1623,
    occupiedBoardDiff: -26.8592,
    imminentRoundDamageDiff: 57.0084,
    activeTurnTempo: 22.2918,
    specialCardValue: 11.5392,
    deckTrimValue: 13.5568,
    eliteRouteBias: -5.1867,
    restRouteBias: 0.8847,
    forgeRouteBias: 2.1757,
    treasureRouteBias: 6.3161,
    branchingRouteBias: 0,
    riskTolerance: -1.5971,
    aggressionPlanBias: 6.1441,
    controlPlanBias: 18,
    tempoPlanBias: -5.3487,
    fusionPlanBias: -9.9575,
    precisionPlanBias: 8.6647,
    uncommonCardBias: 6.186,
    rareCardBias: 8.4769,
    charmSynergyBias: 11.7561,
    duplicateCardPenalty: 7.287,
    enemyProfileRespect: 2.687,
  },
};
