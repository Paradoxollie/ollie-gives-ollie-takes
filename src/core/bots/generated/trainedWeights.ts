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
  name: "trained-bot-20260726-142155",
  trainedAt: "2026-07-26T14:21:55.379Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 126.6181,
    shieldDiff: 75.5326,
    drawBonusDiff: 48.4288,
    manaBonusDiff: 63.141,
    poisonDiff: 64.7152,
    controlDiff: 68.7475,
    boardStrengthDiff: 40.214,
    boardManaDiff: 17.7237,
    stackSynergyDiff: 4.4633,
    reserveStrengthDiff: 20.9696,
    handStrengthDiff: 5.744,
    mobilityDiff: 27.5875,
    cornerControlDiff: 0,
    occupiedBoardDiff: -7.7021,
    imminentRoundDamageDiff: 38.0038,
    activeTurnTempo: 19.2485,
    specialCardValue: 16.2756,
    deckTrimValue: 8.0901,
    eliteRouteBias: -3.3846,
    restRouteBias: 11.0078,
    forgeRouteBias: 0.231,
    treasureRouteBias: 7.4286,
    branchingRouteBias: 10,
    riskTolerance: -0.7777,
    aggressionPlanBias: 12.4382,
    controlPlanBias: 18,
    tempoPlanBias: -2.1963,
    fusionPlanBias: 13.2975,
    precisionPlanBias: 3.6485,
    uncommonCardBias: -1.0027,
    rareCardBias: 10.9077,
    charmSynergyBias: 3.7035,
    duplicateCardPenalty: 1.4356,
    enemyProfileRespect: 4.2729,
  },
};
