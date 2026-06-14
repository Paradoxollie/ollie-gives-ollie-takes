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
  name: "trained-bot-20260614-152746",
  trainedAt: "2026-06-14T15:27:46.904Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 86.8834,
    shieldDiff: 58.3172,
    drawBonusDiff: 58.539,
    manaBonusDiff: 74.849,
    poisonDiff: 94.9345,
    controlDiff: 7.2592,
    boardStrengthDiff: 54.0475,
    boardManaDiff: 4.936,
    stackSynergyDiff: 9.3546,
    reserveStrengthDiff: 24.0588,
    handStrengthDiff: 26.1261,
    mobilityDiff: -6.116,
    cornerControlDiff: 58.8529,
    occupiedBoardDiff: 50,
    imminentRoundDamageDiff: 16.7131,
    activeTurnTempo: 5.6233,
    specialCardValue: 15.7028,
    deckTrimValue: 2.0408,
    eliteRouteBias: 3.3926,
    restRouteBias: 7.9111,
    forgeRouteBias: 0,
    treasureRouteBias: 2.6729,
    branchingRouteBias: 0.348,
    riskTolerance: -2.685,
    aggressionPlanBias: 2.2369,
    controlPlanBias: 18,
    tempoPlanBias: 2.2879,
    fusionPlanBias: 16.1007,
    precisionPlanBias: -10.8622,
    uncommonCardBias: 4.4064,
    rareCardBias: -3.6126,
    charmSynergyBias: 11.4205,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0.3644,
  },
};
