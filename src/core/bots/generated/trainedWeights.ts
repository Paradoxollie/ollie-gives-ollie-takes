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
  name: "trained-bot-20261108-010829",
  trainedAt: "2026-11-08T01:08:29.049Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.71404999999999,
    shieldDiff: 87.95585,
    drawBonusDiff: 0.3129,
    manaBonusDiff: 24.11825,
    poisonDiff: 74.4657,
    controlDiff: 128.7533,
    boardStrengthDiff: 24.9321,
    boardManaDiff: 13.89155,
    stackSynergyDiff: 110.5291,
    reserveStrengthDiff: 23.837699999999998,
    handStrengthDiff: -10,
    mobilityDiff: 30,
    cornerControlDiff: 5.0351,
    occupiedBoardDiff: -22.2059,
    imminentRoundDamageDiff: 95.726,
    activeTurnTempo: 16.6442,
    specialCardValue: 11.816749999999999,
    deckTrimValue: 0,
    eliteRouteBias: -4.4003,
    restRouteBias: 10.26415,
    forgeRouteBias: 6.5372,
    treasureRouteBias: 11.339,
    branchingRouteBias: 10,
    riskTolerance: 5.1472999999999995,
    aggressionPlanBias: -7.3233,
    controlPlanBias: 15.68095,
    tempoPlanBias: -2.74155,
    fusionPlanBias: 4.3519,
    precisionPlanBias: -4.368650000000001,
    uncommonCardBias: -4,
    rareCardBias: 8.92935,
    charmSynergyBias: 7.484450000000001,
    duplicateCardPenalty: 2.06595,
    enemyProfileRespect: 2.2019,
  },
};
