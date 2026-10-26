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
  name: "trained-bot-20261026-045124",
  trainedAt: "2026-10-26T04:51:24.951Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.5275,
    shieldDiff: 77.5416,
    drawBonusDiff: 16.7873,
    manaBonusDiff: 57.9546,
    poisonDiff: 87.2397,
    controlDiff: 80.7046,
    boardStrengthDiff: 6.941,
    boardManaDiff: 20.8929,
    stackSynergyDiff: 94.2254,
    reserveStrengthDiff: 16.8982,
    handStrengthDiff: 10.6969,
    mobilityDiff: 21.2174,
    cornerControlDiff: 0.6127,
    occupiedBoardDiff: -18.3119,
    imminentRoundDamageDiff: 88.5548,
    activeTurnTempo: 21.4175,
    specialCardValue: 7.0961,
    deckTrimValue: 2.4588,
    eliteRouteBias: -2.0587,
    restRouteBias: 2.63,
    forgeRouteBias: 7.8163,
    treasureRouteBias: 11.8568,
    branchingRouteBias: 5.9292,
    riskTolerance: 5.2323,
    aggressionPlanBias: -10.6934,
    controlPlanBias: -9.7891,
    tempoPlanBias: -4.8554,
    fusionPlanBias: 5.7609,
    precisionPlanBias: -4.9024,
    uncommonCardBias: 3.5824,
    rareCardBias: 2.551,
    charmSynergyBias: 1.9766,
    duplicateCardPenalty: 3.283,
    enemyProfileRespect: 1.4388,
  },
};
