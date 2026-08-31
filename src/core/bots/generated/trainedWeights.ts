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
  name: "trained-bot-20260831-205121",
  trainedAt: "2026-08-31T20:51:21.363Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.5262,
    shieldDiff: 115.4276,
    drawBonusDiff: 16.7365,
    manaBonusDiff: 97.3698,
    poisonDiff: 64.8881,
    controlDiff: 71.6552,
    boardStrengthDiff: 30.5223,
    boardManaDiff: 56.8195,
    stackSynergyDiff: 8.2288,
    reserveStrengthDiff: 17.6023,
    handStrengthDiff: 25.7983,
    mobilityDiff: 28.1281,
    cornerControlDiff: 7.4467,
    occupiedBoardDiff: -15.4618,
    imminentRoundDamageDiff: 65.0664,
    activeTurnTempo: 41.9909,
    specialCardValue: 14.4806,
    deckTrimValue: 0,
    eliteRouteBias: -3.4516,
    restRouteBias: 0.0828,
    forgeRouteBias: 6.1321,
    treasureRouteBias: 9.311,
    branchingRouteBias: 7.0618,
    riskTolerance: 1.0846,
    aggressionPlanBias: 10.8743,
    controlPlanBias: -8.9079,
    tempoPlanBias: 8.9243,
    fusionPlanBias: -1.4046,
    precisionPlanBias: 1.5274,
    uncommonCardBias: 4.7344,
    rareCardBias: -0.1507,
    charmSynergyBias: -3.0029,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.0572,
  },
};
