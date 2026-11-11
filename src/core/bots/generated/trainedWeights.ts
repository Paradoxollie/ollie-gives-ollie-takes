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
  name: "trained-bot-20261110-212838",
  trainedAt: "2026-11-10T21:28:38.252Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 56.5626,
    shieldDiff: 87.4378,
    drawBonusDiff: 0,
    manaBonusDiff: 24.2243,
    poisonDiff: 81.7328,
    controlDiff: 131.2695,
    boardStrengthDiff: 22.7941,
    boardManaDiff: 15.8367,
    stackSynergyDiff: 103.9484,
    reserveStrengthDiff: 27.4073,
    handStrengthDiff: -5.3163,
    mobilityDiff: 28.4808,
    cornerControlDiff: 10.601,
    occupiedBoardDiff: -24.3491,
    imminentRoundDamageDiff: 102.0338,
    activeTurnTempo: 9.7419,
    specialCardValue: 4.5284,
    deckTrimValue: 3.234,
    eliteRouteBias: 4.6043,
    restRouteBias: 11.5266,
    forgeRouteBias: 3.6548,
    treasureRouteBias: 12,
    branchingRouteBias: 4.4439,
    riskTolerance: -1.7401,
    aggressionPlanBias: -9.1341,
    controlPlanBias: 8.9454,
    tempoPlanBias: -2.2766,
    fusionPlanBias: -1.4308,
    precisionPlanBias: -7.0771,
    uncommonCardBias: 3.6638,
    rareCardBias: 8.1469,
    charmSynergyBias: 9.9707,
    duplicateCardPenalty: 9.2912,
    enemyProfileRespect: 5.0497,
  },
};
