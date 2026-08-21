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
  name: "trained-bot-20260821-032531",
  trainedAt: "2026-08-21T03:25:31.130Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.4432,
    shieldDiff: 107.1907,
    drawBonusDiff: 54.0601,
    manaBonusDiff: 89.9885,
    poisonDiff: 77.9419,
    controlDiff: 85.8022,
    boardStrengthDiff: 4.3512,
    boardManaDiff: 43.2355,
    stackSynergyDiff: 7.4558,
    reserveStrengthDiff: 5.5949,
    handStrengthDiff: 46.0933,
    mobilityDiff: 6.5001,
    cornerControlDiff: 17.2698,
    occupiedBoardDiff: 2.747,
    imminentRoundDamageDiff: 70.2247,
    activeTurnTempo: 33.2916,
    specialCardValue: 0,
    deckTrimValue: 3.1032,
    eliteRouteBias: -2.4301,
    restRouteBias: 6.2593,
    forgeRouteBias: 1.6324,
    treasureRouteBias: 12,
    branchingRouteBias: 5.0144,
    riskTolerance: -2.1527,
    aggressionPlanBias: -5.8764,
    controlPlanBias: 13.749,
    tempoPlanBias: 6.6425,
    fusionPlanBias: -7.1212,
    precisionPlanBias: -12,
    uncommonCardBias: -3.6687,
    rareCardBias: -1.3696,
    charmSynergyBias: 1.8975,
    duplicateCardPenalty: 0.9581,
    enemyProfileRespect: 8.6042,
  },
};
