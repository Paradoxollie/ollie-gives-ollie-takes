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
  name: "trained-bot-20260831-020734",
  trainedAt: "2026-08-31T02:07:34.875Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.2337,
    shieldDiff: 110.9156,
    drawBonusDiff: 21.877,
    manaBonusDiff: 104.533,
    poisonDiff: 66.219,
    controlDiff: 73.5389,
    boardStrengthDiff: 24.3637,
    boardManaDiff: 46.8905,
    stackSynergyDiff: 23.774,
    reserveStrengthDiff: 15.6553,
    handStrengthDiff: 25.1833,
    mobilityDiff: 28.854,
    cornerControlDiff: 12.9819,
    occupiedBoardDiff: -24.107,
    imminentRoundDamageDiff: 70.3744,
    activeTurnTempo: 41.6946,
    specialCardValue: 18,
    deckTrimValue: 6.2433,
    eliteRouteBias: 1.0162,
    restRouteBias: 5.9487,
    forgeRouteBias: 11.6508,
    treasureRouteBias: 4.1646,
    branchingRouteBias: 7.6868,
    riskTolerance: -0.0721,
    aggressionPlanBias: 11.5544,
    controlPlanBias: 2.0535,
    tempoPlanBias: 7.2296,
    fusionPlanBias: 2.3496,
    precisionPlanBias: 7.158,
    uncommonCardBias: -2.0298,
    rareCardBias: -4,
    charmSynergyBias: 1.0082,
    duplicateCardPenalty: 5.6291,
    enemyProfileRespect: 0,
  },
};
