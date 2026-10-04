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
  name: "trained-bot-20261004-165752",
  trainedAt: "2026-10-04T16:57:52.160Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 59.4445,
    shieldDiff: 89.5527,
    drawBonusDiff: 19.3961,
    manaBonusDiff: 67.7847,
    poisonDiff: 62.8775,
    controlDiff: 32.0872,
    boardStrengthDiff: 13.7271,
    boardManaDiff: 75.4915,
    stackSynergyDiff: 84.3506,
    reserveStrengthDiff: 16.9605,
    handStrengthDiff: 1.2945,
    mobilityDiff: -6.6703,
    cornerControlDiff: 6.6273,
    occupiedBoardDiff: -6.7137,
    imminentRoundDamageDiff: 34.1399,
    activeTurnTempo: 19.8429,
    specialCardValue: 9.3261,
    deckTrimValue: 4.9829,
    eliteRouteBias: -2.7622,
    restRouteBias: 6.5221,
    forgeRouteBias: 8.4606,
    treasureRouteBias: 7.0739,
    branchingRouteBias: 1.9399,
    riskTolerance: -3.0935,
    aggressionPlanBias: -9.4615,
    controlPlanBias: 2.2376,
    tempoPlanBias: -5.9683,
    fusionPlanBias: -12,
    precisionPlanBias: -0.8055,
    uncommonCardBias: 9.2572,
    rareCardBias: 8.4405,
    charmSynergyBias: 5.5592,
    duplicateCardPenalty: 9.1695,
    enemyProfileRespect: 4.0049,
  },
};
