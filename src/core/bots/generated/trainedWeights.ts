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
  name: "trained-bot-20261123-212808",
  trainedAt: "2026-11-23T21:28:08.190Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 35.8121,
    shieldDiff: 33.2049,
    drawBonusDiff: 51.5641,
    manaBonusDiff: 7.3082,
    poisonDiff: 67.4979,
    controlDiff: 109.5017,
    boardStrengthDiff: 11.8851,
    boardManaDiff: 28.9931,
    stackSynergyDiff: 105.2497,
    reserveStrengthDiff: 10.2529,
    handStrengthDiff: 2.2664,
    mobilityDiff: 27.2275,
    cornerControlDiff: 12.3031,
    occupiedBoardDiff: -17.8247,
    imminentRoundDamageDiff: 85.7382,
    activeTurnTempo: 46.3781,
    specialCardValue: 12.6318,
    deckTrimValue: 0,
    eliteRouteBias: 0.538,
    restRouteBias: 7.6937,
    forgeRouteBias: 0,
    treasureRouteBias: 5.6802,
    branchingRouteBias: 7.7765,
    riskTolerance: 4.2873,
    aggressionPlanBias: -2.4719,
    controlPlanBias: 0.4169,
    tempoPlanBias: -11.8309,
    fusionPlanBias: 8.4666,
    precisionPlanBias: -9.9918,
    uncommonCardBias: 1.1443,
    rareCardBias: 6.2469,
    charmSynergyBias: 10.7399,
    duplicateCardPenalty: 6.8271,
    enemyProfileRespect: 0,
  },
};
