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
  name: "trained-bot-20261101-001409",
  trainedAt: "2026-11-01T00:14:09.161Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.2903,
    shieldDiff: 71.3344,
    drawBonusDiff: 25.6228,
    manaBonusDiff: 40.7648,
    poisonDiff: 78.9618,
    controlDiff: 95.0639,
    boardStrengthDiff: 22.8458,
    boardManaDiff: 12.283,
    stackSynergyDiff: 109.9929,
    reserveStrengthDiff: 27.7801,
    handStrengthDiff: 7.9082,
    mobilityDiff: 20.3789,
    cornerControlDiff: 8.0075,
    occupiedBoardDiff: -29.5037,
    imminentRoundDamageDiff: 96.2829,
    activeTurnTempo: 25.0258,
    specialCardValue: 6.3236,
    deckTrimValue: 1.7084,
    eliteRouteBias: -6.6424,
    restRouteBias: 12,
    forgeRouteBias: 4.008,
    treasureRouteBias: 11.8761,
    branchingRouteBias: 10,
    riskTolerance: 6.414,
    aggressionPlanBias: -9.5143,
    controlPlanBias: -8.1076,
    tempoPlanBias: -12,
    fusionPlanBias: 4.4312,
    precisionPlanBias: -12,
    uncommonCardBias: -4,
    rareCardBias: 3.2908,
    charmSynergyBias: 9.2049,
    duplicateCardPenalty: 9.974,
    enemyProfileRespect: 8.6839,
  },
};
