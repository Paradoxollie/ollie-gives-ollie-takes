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
  name: "trained-bot-20261105-065235",
  trainedAt: "2026-11-05T06:52:35.930Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.1691,
    shieldDiff: 78.292,
    drawBonusDiff: 16.0662,
    manaBonusDiff: 27.7784,
    poisonDiff: 55.7644,
    controlDiff: 127.5279,
    boardStrengthDiff: 26.4316,
    boardManaDiff: 10.7844,
    stackSynergyDiff: 117.7745,
    reserveStrengthDiff: 22.9176,
    handStrengthDiff: -4.923,
    mobilityDiff: 25.3473,
    cornerControlDiff: 25.3219,
    occupiedBoardDiff: -27.1756,
    imminentRoundDamageDiff: 90.3427,
    activeTurnTempo: 25.7051,
    specialCardValue: 15.8963,
    deckTrimValue: 0,
    eliteRouteBias: -1.2271,
    restRouteBias: 0,
    forgeRouteBias: 2.0672,
    treasureRouteBias: 7.9288,
    branchingRouteBias: 3.3169,
    riskTolerance: 1.4952,
    aggressionPlanBias: -7.1937,
    controlPlanBias: 18,
    tempoPlanBias: -7.3043,
    fusionPlanBias: 5.5665,
    precisionPlanBias: -4.9329,
    uncommonCardBias: -4,
    rareCardBias: 12,
    charmSynergyBias: 12.4199,
    duplicateCardPenalty: 5.6187,
    enemyProfileRespect: 10,
  },
};
