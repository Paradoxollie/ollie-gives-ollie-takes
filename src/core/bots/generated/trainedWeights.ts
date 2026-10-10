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
  name: "trained-bot-20261010-090337",
  trainedAt: "2026-10-10T09:03:37.360Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 65.2153,
    shieldDiff: 63.2388,
    drawBonusDiff: 13.2017,
    manaBonusDiff: 81.8118,
    poisonDiff: 57.702,
    controlDiff: 43.4063,
    boardStrengthDiff: 23.101,
    boardManaDiff: 73.3525,
    stackSynergyDiff: 65.0663,
    reserveStrengthDiff: 30,
    handStrengthDiff: 18.9839,
    mobilityDiff: 1.3364,
    cornerControlDiff: 0,
    occupiedBoardDiff: -3.9745,
    imminentRoundDamageDiff: 47.929,
    activeTurnTempo: 17.7519,
    specialCardValue: 14.3671,
    deckTrimValue: 0,
    eliteRouteBias: -3.2147,
    restRouteBias: 2.3444,
    forgeRouteBias: 6.1331,
    treasureRouteBias: 1.7638,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: 7.9433,
    tempoPlanBias: -9.3448,
    fusionPlanBias: 5.3391,
    precisionPlanBias: -1.9213,
    uncommonCardBias: 1.9619,
    rareCardBias: 7.6226,
    charmSynergyBias: 5.7427,
    duplicateCardPenalty: 7.9191,
    enemyProfileRespect: 10,
  },
};
