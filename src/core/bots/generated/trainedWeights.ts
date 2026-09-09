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
  name: "trained-bot-20260909-031708",
  trainedAt: "2026-09-09T03:17:08.455Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 67.9479,
    shieldDiff: 107.8487,
    drawBonusDiff: 64.7353,
    manaBonusDiff: 90.9908,
    poisonDiff: 42.0109,
    controlDiff: 67.751,
    boardStrengthDiff: 8.6325,
    boardManaDiff: 62.2739,
    stackSynergyDiff: 19.673,
    reserveStrengthDiff: 22.0491,
    handStrengthDiff: -2.8688,
    mobilityDiff: 12.8811,
    cornerControlDiff: 25.3137,
    occupiedBoardDiff: -9.4746,
    imminentRoundDamageDiff: 87.0445,
    activeTurnTempo: 38.7626,
    specialCardValue: 5.3924,
    deckTrimValue: 6.3463,
    eliteRouteBias: 8,
    restRouteBias: 3.7732,
    forgeRouteBias: 8.3085,
    treasureRouteBias: 12,
    branchingRouteBias: 6.1061,
    riskTolerance: -2.6489,
    aggressionPlanBias: -12,
    controlPlanBias: 18,
    tempoPlanBias: 5.5965,
    fusionPlanBias: 0.2324,
    precisionPlanBias: 5.5461,
    uncommonCardBias: 1.4073,
    rareCardBias: 3.1305,
    charmSynergyBias: 8.8079,
    duplicateCardPenalty: 1.8795,
    enemyProfileRespect: 2.785,
  },
};
