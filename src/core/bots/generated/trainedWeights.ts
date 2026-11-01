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
  name: "trained-bot-20261101-165123",
  trainedAt: "2026-11-01T16:51:23.904Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 90.06365,
    shieldDiff: 72.16525,
    drawBonusDiff: 22.8078,
    manaBonusDiff: 40.7646,
    poisonDiff: 74.5227,
    controlDiff: 93.05525,
    boardStrengthDiff: 19.866500000000002,
    boardManaDiff: 10.94415,
    stackSynergyDiff: 109.0171,
    reserveStrengthDiff: 23.310299999999998,
    handStrengthDiff: -0.1779,
    mobilityDiff: 17.78105,
    cornerControlDiff: 10.25075,
    occupiedBoardDiff: -34.7833,
    imminentRoundDamageDiff: 95.57445,
    activeTurnTempo: 23.836750000000002,
    specialCardValue: 8.3964,
    deckTrimValue: 2.5389,
    eliteRouteBias: -4.37265,
    restRouteBias: 5.09145,
    forgeRouteBias: 4.96345,
    treasureRouteBias: 12,
    branchingRouteBias: 8.911750000000001,
    riskTolerance: 2.1261,
    aggressionPlanBias: -7.6395,
    controlPlanBias: -2.88995,
    tempoPlanBias: -6.65935,
    fusionPlanBias: 5.2067,
    precisionPlanBias: -9.29175,
    uncommonCardBias: -1.07765,
    rareCardBias: 8.67885,
    charmSynergyBias: 10.9526,
    duplicateCardPenalty: 8.5436,
    enemyProfileRespect: 4.70305,
  },
};
