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
  name: "trained-bot-20261022-004739",
  trainedAt: "2026-10-22T00:47:39.277Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.1965,
    shieldDiff: 77.2463,
    drawBonusDiff: 7.833,
    manaBonusDiff: 70.6401,
    poisonDiff: 78.8582,
    controlDiff: 73.6022,
    boardStrengthDiff: 24.3067,
    boardManaDiff: 34.4423,
    stackSynergyDiff: 97.2882,
    reserveStrengthDiff: 13.2647,
    handStrengthDiff: 9.8655,
    mobilityDiff: 25.2808,
    cornerControlDiff: 13.6137,
    occupiedBoardDiff: -18.292,
    imminentRoundDamageDiff: 89.6071,
    activeTurnTempo: 27.4635,
    specialCardValue: 16.4831,
    deckTrimValue: 1.4514,
    eliteRouteBias: -4.6307,
    restRouteBias: 1.9442,
    forgeRouteBias: 11.7382,
    treasureRouteBias: 8.1576,
    branchingRouteBias: 10,
    riskTolerance: -2.6798,
    aggressionPlanBias: -12,
    controlPlanBias: 4.2862,
    tempoPlanBias: -5.7812,
    fusionPlanBias: -10.0326,
    precisionPlanBias: -1.667,
    uncommonCardBias: -3.6046,
    rareCardBias: 12,
    charmSynergyBias: 13.0659,
    duplicateCardPenalty: 5.055,
    enemyProfileRespect: 3.2756,
  },
};
