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
  name: "trained-bot-20260729-024826",
  trainedAt: "2026-07-29T02:48:26.738Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 135.6962,
    shieldDiff: 53.43745,
    drawBonusDiff: 42.53415,
    manaBonusDiff: 52.309349999999995,
    poisonDiff: 52.9304,
    controlDiff: 76.5096,
    boardStrengthDiff: 34.597750000000005,
    boardManaDiff: 20.71075,
    stackSynergyDiff: 5.3994,
    reserveStrengthDiff: 16.63815,
    handStrengthDiff: 18.46145,
    mobilityDiff: 28.18445,
    cornerControlDiff: 3.12025,
    occupiedBoardDiff: -5.67365,
    imminentRoundDamageDiff: 30.32635,
    activeTurnTempo: 16.06045,
    specialCardValue: 8.563500000000001,
    deckTrimValue: 7.23335,
    eliteRouteBias: 2.5996,
    restRouteBias: 12,
    forgeRouteBias: 0.6506000000000001,
    treasureRouteBias: 8.004950000000001,
    branchingRouteBias: 8.01505,
    riskTolerance: 4.0318,
    aggressionPlanBias: 4.6297,
    controlPlanBias: 14.648,
    tempoPlanBias: -2.1123000000000003,
    fusionPlanBias: 18,
    precisionPlanBias: 16.562649999999998,
    uncommonCardBias: -2.1369,
    rareCardBias: 1.2519500000000001,
    charmSynergyBias: 11.7318,
    duplicateCardPenalty: 7.304,
    enemyProfileRespect: 5.831799999999999,
  },
};
