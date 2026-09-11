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
  name: "trained-bot-20260911-154749",
  trainedAt: "2026-09-11T15:47:49.078Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.2064,
    shieldDiff: 112.8776,
    drawBonusDiff: 50.2801,
    manaBonusDiff: 92.1639,
    poisonDiff: 50.3829,
    controlDiff: 64.8681,
    boardStrengthDiff: 3.3571,
    boardManaDiff: 47.8317,
    stackSynergyDiff: 22.3145,
    reserveStrengthDiff: 25.6171,
    handStrengthDiff: -10,
    mobilityDiff: 28.7148,
    cornerControlDiff: 15.6948,
    occupiedBoardDiff: -7.8432,
    imminentRoundDamageDiff: 59.0329,
    activeTurnTempo: 48.2849,
    specialCardValue: 11.9907,
    deckTrimValue: 0,
    eliteRouteBias: -2.6179,
    restRouteBias: 5.142,
    forgeRouteBias: 2.1119,
    treasureRouteBias: 7.9165,
    branchingRouteBias: 2.6577,
    riskTolerance: 3.9501,
    aggressionPlanBias: -10.4288,
    controlPlanBias: 11.5749,
    tempoPlanBias: 3.3787,
    fusionPlanBias: 8.5698,
    precisionPlanBias: 5.1113,
    uncommonCardBias: 6.4304,
    rareCardBias: 9.2765,
    charmSynergyBias: 5.2584,
    duplicateCardPenalty: 9.8174,
    enemyProfileRespect: 6.9521,
  },
};
