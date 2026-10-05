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
  name: "trained-bot-20261004-220755",
  trainedAt: "2026-10-04T22:07:55.318Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.2585,
    shieldDiff: 90.8439,
    drawBonusDiff: 14.2151,
    manaBonusDiff: 69.6204,
    poisonDiff: 62.8854,
    controlDiff: 33.9529,
    boardStrengthDiff: 11.2379,
    boardManaDiff: 80,
    stackSynergyDiff: 87.5666,
    reserveStrengthDiff: 12.6932,
    handStrengthDiff: 3.9366,
    mobilityDiff: -9.3998,
    cornerControlDiff: 11.335,
    occupiedBoardDiff: -6.0207,
    imminentRoundDamageDiff: 34.9527,
    activeTurnTempo: 16.903,
    specialCardValue: 12.3738,
    deckTrimValue: 0.4209,
    eliteRouteBias: -0.6022,
    restRouteBias: 8.5832,
    forgeRouteBias: 6.9399,
    treasureRouteBias: 0.7611,
    branchingRouteBias: 5.0161,
    riskTolerance: -4,
    aggressionPlanBias: -10.1958,
    controlPlanBias: 1.7728,
    tempoPlanBias: -9.1646,
    fusionPlanBias: -5.8864,
    precisionPlanBias: 0.8644,
    uncommonCardBias: 6.7219,
    rareCardBias: 8.0353,
    charmSynergyBias: 2.6477,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.3361,
  },
};
