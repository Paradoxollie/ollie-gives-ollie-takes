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
  name: "trained-bot-20260815-103912",
  trainedAt: "2026-08-15T10:39:12.065Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.229,
    shieldDiff: 106.7786,
    drawBonusDiff: 47.3967,
    manaBonusDiff: 98.7482,
    poisonDiff: 48.7602,
    controlDiff: 67.7212,
    boardStrengthDiff: 17.7692,
    boardManaDiff: 41.0289,
    stackSynergyDiff: 24.2258,
    reserveStrengthDiff: -4.7889,
    handStrengthDiff: 28.1357,
    mobilityDiff: 4.0109,
    cornerControlDiff: 0.9992,
    occupiedBoardDiff: 13.1539,
    imminentRoundDamageDiff: 50.2584,
    activeTurnTempo: 26.0213,
    specialCardValue: 18,
    deckTrimValue: 1.2082,
    eliteRouteBias: 5.1731,
    restRouteBias: 10.7906,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 3.3098,
    riskTolerance: 3.0141,
    aggressionPlanBias: 12.3822,
    controlPlanBias: 18,
    tempoPlanBias: -8.9204,
    fusionPlanBias: 11.1854,
    precisionPlanBias: 9.1256,
    uncommonCardBias: 6.4887,
    rareCardBias: 4.3109,
    charmSynergyBias: 9.8684,
    duplicateCardPenalty: 5.5087,
    enemyProfileRespect: 10,
  },
};
