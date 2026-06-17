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
  name: "trained-bot-20260617-051827",
  trainedAt: "2026-06-17T05:18:27.271Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.6796,
    shieldDiff: 86.3445,
    drawBonusDiff: 31.1033,
    manaBonusDiff: 80.2398,
    poisonDiff: 104.2185,
    controlDiff: 19.2274,
    boardStrengthDiff: 43.0286,
    boardManaDiff: 16.7893,
    stackSynergyDiff: 5.3201,
    reserveStrengthDiff: 14.7831,
    handStrengthDiff: 45.77,
    mobilityDiff: -4.1246,
    cornerControlDiff: 63.8942,
    occupiedBoardDiff: 32.0857,
    imminentRoundDamageDiff: 26.8851,
    activeTurnTempo: 8.3709,
    specialCardValue: 18,
    deckTrimValue: 12.2496,
    eliteRouteBias: -4.6307,
    restRouteBias: 4.9301,
    forgeRouteBias: 8.9816,
    treasureRouteBias: 11.2654,
    branchingRouteBias: 10,
    riskTolerance: -2.2587,
    aggressionPlanBias: -5.7868,
    controlPlanBias: 7.4388,
    tempoPlanBias: -3.2651,
    fusionPlanBias: -1.7656,
    precisionPlanBias: -6.6117,
    uncommonCardBias: -1.1953,
    rareCardBias: 5.0718,
    charmSynergyBias: 7.5636,
    duplicateCardPenalty: 5.0244,
    enemyProfileRespect: 2.1796,
  },
};
