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
  name: "trained-bot-20261009-200807",
  trainedAt: "2026-10-09T20:08:07.118Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 66.5512,
    shieldDiff: 68.985,
    drawBonusDiff: 18.5987,
    manaBonusDiff: 76.5525,
    poisonDiff: 55.9749,
    controlDiff: 39.7573,
    boardStrengthDiff: 27.2318,
    boardManaDiff: 75.4837,
    stackSynergyDiff: 70.0391,
    reserveStrengthDiff: 30,
    handStrengthDiff: 20.078,
    mobilityDiff: 1.4686,
    cornerControlDiff: 0,
    occupiedBoardDiff: -3.2406,
    imminentRoundDamageDiff: 47.7329,
    activeTurnTempo: 16.6385,
    specialCardValue: 15.2207,
    deckTrimValue: 0,
    eliteRouteBias: -3.1365,
    restRouteBias: 0,
    forgeRouteBias: 9.1766,
    treasureRouteBias: 5.4,
    branchingRouteBias: 6.0053,
    riskTolerance: -4,
    aggressionPlanBias: -10.6551,
    controlPlanBias: 1.8786,
    tempoPlanBias: -12,
    fusionPlanBias: 6.474,
    precisionPlanBias: -2.0196,
    uncommonCardBias: 5.7416,
    rareCardBias: 2.1677,
    charmSynergyBias: -0.6259,
    duplicateCardPenalty: 8.593,
    enemyProfileRespect: 9.0665,
  },
};
