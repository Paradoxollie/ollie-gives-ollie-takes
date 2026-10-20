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
  name: "trained-bot-20261020-124125",
  trainedAt: "2026-10-20T12:41:25.841Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.1851,
    shieldDiff: 91.9764,
    drawBonusDiff: 2.1684,
    manaBonusDiff: 75.9516,
    poisonDiff: 62.7985,
    controlDiff: 72.1536,
    boardStrengthDiff: 18.4266,
    boardManaDiff: 49.5482,
    stackSynergyDiff: 93.0994,
    reserveStrengthDiff: 14.623,
    handStrengthDiff: 2.0627,
    mobilityDiff: 26.28,
    cornerControlDiff: 12.4334,
    occupiedBoardDiff: -21.0988,
    imminentRoundDamageDiff: 90.2178,
    activeTurnTempo: 24.3505,
    specialCardValue: 14.3733,
    deckTrimValue: 4.0044,
    eliteRouteBias: -4.0063,
    restRouteBias: 11.2523,
    forgeRouteBias: 0.0948,
    treasureRouteBias: 6.9072,
    branchingRouteBias: 4.4186,
    riskTolerance: -0.3705,
    aggressionPlanBias: 11.3864,
    controlPlanBias: -3.9433,
    tempoPlanBias: -8.4982,
    fusionPlanBias: 13.3149,
    precisionPlanBias: -11.7261,
    uncommonCardBias: -1.4579,
    rareCardBias: 12,
    charmSynergyBias: 9.4548,
    duplicateCardPenalty: 0.428,
    enemyProfileRespect: 3.894,
  },
};
