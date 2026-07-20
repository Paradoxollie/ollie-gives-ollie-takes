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
  name: "trained-bot-20260720-052248",
  trainedAt: "2026-07-20T05:22:48.624Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 129.6112,
    shieldDiff: 59.2015,
    drawBonusDiff: 45.5414,
    manaBonusDiff: 63.0196,
    poisonDiff: 69.4918,
    controlDiff: 46.5257,
    boardStrengthDiff: 42.4079,
    boardManaDiff: 7.7381,
    stackSynergyDiff: 28.5243,
    reserveStrengthDiff: 30,
    handStrengthDiff: 2.2357,
    mobilityDiff: 23.5277,
    cornerControlDiff: 5.4995,
    occupiedBoardDiff: 5.9329,
    imminentRoundDamageDiff: 54.6564,
    activeTurnTempo: 33.6888,
    specialCardValue: 10.2643,
    deckTrimValue: 14,
    eliteRouteBias: 8,
    restRouteBias: 10.4268,
    forgeRouteBias: 2.5946,
    treasureRouteBias: 8.0354,
    branchingRouteBias: 5.4467,
    riskTolerance: 6.8219,
    aggressionPlanBias: 1.2267,
    controlPlanBias: 8.9645,
    tempoPlanBias: -9.6579,
    fusionPlanBias: 10.6684,
    precisionPlanBias: -6.1057,
    uncommonCardBias: 10,
    rareCardBias: 1.5606,
    charmSynergyBias: 2.5004,
    duplicateCardPenalty: 6.4176,
    enemyProfileRespect: 3.4271,
  },
};
