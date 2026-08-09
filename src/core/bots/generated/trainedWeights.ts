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
  name: "trained-bot-20260809-035159",
  trainedAt: "2026-08-09T03:51:59.803Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.4382,
    shieldDiff: 98.2884,
    drawBonusDiff: 26.7109,
    manaBonusDiff: 79.7978,
    poisonDiff: 28.1027,
    controlDiff: 64.0959,
    boardStrengthDiff: 6.4298,
    boardManaDiff: 28.0448,
    stackSynergyDiff: 32.3117,
    reserveStrengthDiff: 11.0806,
    handStrengthDiff: 36.5861,
    mobilityDiff: 8.7718,
    cornerControlDiff: 7.398,
    occupiedBoardDiff: 7.951,
    imminentRoundDamageDiff: 29.6124,
    activeTurnTempo: 26.1416,
    specialCardValue: 17.3958,
    deckTrimValue: 11.1186,
    eliteRouteBias: -8,
    restRouteBias: 4.2427,
    forgeRouteBias: 5.1724,
    treasureRouteBias: 10.4696,
    branchingRouteBias: 3.9584,
    riskTolerance: 6.7892,
    aggressionPlanBias: 11.9135,
    controlPlanBias: 13.4622,
    tempoPlanBias: -3.6705,
    fusionPlanBias: 16.6209,
    precisionPlanBias: 6.8463,
    uncommonCardBias: 10,
    rareCardBias: 0.0091,
    charmSynergyBias: 4.5966,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 8.0961,
  },
};
