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
  name: "trained-bot-20261011-001529",
  trainedAt: "2026-10-11T00:15:29.026Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.8611,
    shieldDiff: 63.173,
    drawBonusDiff: 19.0429,
    manaBonusDiff: 76.9166,
    poisonDiff: 77.8693,
    controlDiff: 37.1487,
    boardStrengthDiff: 18.1096,
    boardManaDiff: 66.0455,
    stackSynergyDiff: 66.1649,
    reserveStrengthDiff: 28.7786,
    handStrengthDiff: 19.7079,
    mobilityDiff: 4.2335,
    cornerControlDiff: 0,
    occupiedBoardDiff: -2.7829,
    imminentRoundDamageDiff: 49.759,
    activeTurnTempo: 21.442,
    specialCardValue: 18,
    deckTrimValue: 0.1842,
    eliteRouteBias: -0.7037,
    restRouteBias: 2.0486,
    forgeRouteBias: 2.653,
    treasureRouteBias: 1.6568,
    branchingRouteBias: 0,
    riskTolerance: 2.1004,
    aggressionPlanBias: -9.0667,
    controlPlanBias: 4.0949,
    tempoPlanBias: -2.8319,
    fusionPlanBias: 7.1919,
    precisionPlanBias: -1.6573,
    uncommonCardBias: -2.5755,
    rareCardBias: 7.2491,
    charmSynergyBias: 4.0578,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
