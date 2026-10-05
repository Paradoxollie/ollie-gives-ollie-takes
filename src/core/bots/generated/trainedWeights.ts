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
  name: "trained-bot-20261005-183212",
  trainedAt: "2026-10-05T18:32:12.212Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 64.218,
    shieldDiff: 84.9918,
    drawBonusDiff: 14.4092,
    manaBonusDiff: 74.3867,
    poisonDiff: 60.6675,
    controlDiff: 30.4219,
    boardStrengthDiff: 18.9592,
    boardManaDiff: 80,
    stackSynergyDiff: 89.983,
    reserveStrengthDiff: 11.1632,
    handStrengthDiff: 10.1688,
    mobilityDiff: -10,
    cornerControlDiff: 10.3703,
    occupiedBoardDiff: -10.7922,
    imminentRoundDamageDiff: 37.8499,
    activeTurnTempo: 11.486,
    specialCardValue: 15.8494,
    deckTrimValue: 0.838,
    eliteRouteBias: 4.2647,
    restRouteBias: 3.6499,
    forgeRouteBias: 12,
    treasureRouteBias: 4.0314,
    branchingRouteBias: 6.9227,
    riskTolerance: -4,
    aggressionPlanBias: -5.272,
    controlPlanBias: 5.9687,
    tempoPlanBias: -12,
    fusionPlanBias: -3.9138,
    precisionPlanBias: -6.0556,
    uncommonCardBias: -0.0772,
    rareCardBias: 9.854,
    charmSynergyBias: 6.3529,
    duplicateCardPenalty: 4.9213,
    enemyProfileRespect: 0,
  },
};
