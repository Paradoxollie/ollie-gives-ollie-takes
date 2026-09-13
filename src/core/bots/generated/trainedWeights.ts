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
  name: "trained-bot-20260913-015557",
  trainedAt: "2026-09-13T01:55:57.423Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 66.9846,
    shieldDiff: 109.0355,
    drawBonusDiff: 32.438,
    manaBonusDiff: 93.6764,
    poisonDiff: 49.0068,
    controlDiff: 56.1863,
    boardStrengthDiff: 0,
    boardManaDiff: 54.2161,
    stackSynergyDiff: 36.4623,
    reserveStrengthDiff: 18.8819,
    handStrengthDiff: -7.4762,
    mobilityDiff: 16.7378,
    cornerControlDiff: 9.2955,
    occupiedBoardDiff: -9.4694,
    imminentRoundDamageDiff: 59.9458,
    activeTurnTempo: 39.9784,
    specialCardValue: 17.8077,
    deckTrimValue: 0.9682,
    eliteRouteBias: -1.4588,
    restRouteBias: 12,
    forgeRouteBias: 0.5509,
    treasureRouteBias: 7.2216,
    branchingRouteBias: 8.2533,
    riskTolerance: -1.7899,
    aggressionPlanBias: -8.9454,
    controlPlanBias: 10.2523,
    tempoPlanBias: 5.8229,
    fusionPlanBias: 1.1396,
    precisionPlanBias: 5.5428,
    uncommonCardBias: 8.5682,
    rareCardBias: 8.2952,
    charmSynergyBias: -3.8536,
    duplicateCardPenalty: 7.4985,
    enemyProfileRespect: 3.4011,
  },
};
