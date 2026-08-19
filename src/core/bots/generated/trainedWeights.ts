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
  name: "trained-bot-20260819-093759",
  trainedAt: "2026-08-19T09:37:59.693Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 117.2671,
    shieldDiff: 105.3521,
    drawBonusDiff: 47.0852,
    manaBonusDiff: 100.7747,
    poisonDiff: 76.0987,
    controlDiff: 91.685,
    boardStrengthDiff: 18.4828,
    boardManaDiff: 42.4684,
    stackSynergyDiff: 14.5841,
    reserveStrengthDiff: -10,
    handStrengthDiff: 48.0294,
    mobilityDiff: -8.7405,
    cornerControlDiff: 8.6038,
    occupiedBoardDiff: 0.728,
    imminentRoundDamageDiff: 58.7744,
    activeTurnTempo: 34.3725,
    specialCardValue: 18,
    deckTrimValue: 1.9154,
    eliteRouteBias: 0.7936,
    restRouteBias: 9.1309,
    forgeRouteBias: 8.8773,
    treasureRouteBias: 12,
    branchingRouteBias: 2.1046,
    riskTolerance: 0.4817,
    aggressionPlanBias: -3.8877,
    controlPlanBias: 14.5879,
    tempoPlanBias: 11.0004,
    fusionPlanBias: 9.9343,
    precisionPlanBias: -1.4059,
    uncommonCardBias: -0.7961,
    rareCardBias: -2.2294,
    charmSynergyBias: 5.7354,
    duplicateCardPenalty: 5.7916,
    enemyProfileRespect: 10,
  },
};
