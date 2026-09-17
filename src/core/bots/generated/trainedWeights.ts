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
  name: "trained-bot-20260916-210555",
  trainedAt: "2026-09-16T21:05:55.886Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.1078,
    shieldDiff: 99.6646,
    drawBonusDiff: 32.8245,
    manaBonusDiff: 92.4116,
    poisonDiff: 32.8354,
    controlDiff: 57.0404,
    boardStrengthDiff: 13.8854,
    boardManaDiff: 42.7108,
    stackSynergyDiff: 36.0322,
    reserveStrengthDiff: 16.6011,
    handStrengthDiff: -9.8527,
    mobilityDiff: 26.2505,
    cornerControlDiff: 19.5903,
    occupiedBoardDiff: -31.7215,
    imminentRoundDamageDiff: 47.8297,
    activeTurnTempo: 36.7938,
    specialCardValue: 15.0954,
    deckTrimValue: 10.8692,
    eliteRouteBias: 8,
    restRouteBias: 7.4589,
    forgeRouteBias: 2.2468,
    treasureRouteBias: 6.2499,
    branchingRouteBias: 2.5928,
    riskTolerance: -3.9512,
    aggressionPlanBias: -6.6371,
    controlPlanBias: 4.6924,
    tempoPlanBias: 0.7409,
    fusionPlanBias: 3.6018,
    precisionPlanBias: -1.0533,
    uncommonCardBias: 9.6435,
    rareCardBias: 3.2415,
    charmSynergyBias: -3.4976,
    duplicateCardPenalty: 1.5814,
    enemyProfileRespect: 0,
  },
};
