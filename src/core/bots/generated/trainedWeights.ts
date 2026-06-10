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
  name: "trained-bot-20260609-205856",
  trainedAt: "2026-06-09T20:58:56.098Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.4284,
    shieldDiff: 53.9491,
    drawBonusDiff: 76.3648,
    manaBonusDiff: 101.7196,
    poisonDiff: 105.2192,
    controlDiff: 0,
    boardStrengthDiff: 62.8115,
    boardManaDiff: 11.3647,
    stackSynergyDiff: 8.8241,
    reserveStrengthDiff: 23.1753,
    handStrengthDiff: 14.2387,
    mobilityDiff: 14.9596,
    cornerControlDiff: 47.8904,
    occupiedBoardDiff: 34.9936,
    imminentRoundDamageDiff: 2.7096,
    activeTurnTempo: -2.5573,
    specialCardValue: 0,
    deckTrimValue: 7.3325,
    eliteRouteBias: 1.9567,
    restRouteBias: 10.4912,
    forgeRouteBias: 5.1285,
    treasureRouteBias: 7.4385,
    branchingRouteBias: 1.8177,
    riskTolerance: 4.9613,
    aggressionPlanBias: 2.3016,
    controlPlanBias: 18,
    tempoPlanBias: -12,
    fusionPlanBias: -5.0568,
    precisionPlanBias: 1.7614,
    uncommonCardBias: 4.2122,
    rareCardBias: 9.802,
    charmSynergyBias: 1.6636,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.9064,
  },
};
