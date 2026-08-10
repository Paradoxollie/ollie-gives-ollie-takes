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
  name: "trained-bot-20260810-030119",
  trainedAt: "2026-08-10T03:01:19.819Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.9621,
    shieldDiff: 94.0387,
    drawBonusDiff: 33.8086,
    manaBonusDiff: 86.0434,
    poisonDiff: 38.1126,
    controlDiff: 75.5417,
    boardStrengthDiff: 7.8843,
    boardManaDiff: 41.6215,
    stackSynergyDiff: 30.5032,
    reserveStrengthDiff: 2.4729,
    handStrengthDiff: 47.2421,
    mobilityDiff: 3.8191,
    cornerControlDiff: 6.1273,
    occupiedBoardDiff: 21.4227,
    imminentRoundDamageDiff: 40.478,
    activeTurnTempo: 26.6823,
    specialCardValue: 15.944,
    deckTrimValue: 14,
    eliteRouteBias: -6.1987,
    restRouteBias: 6.3558,
    forgeRouteBias: 12,
    treasureRouteBias: 7.2011,
    branchingRouteBias: 3.96,
    riskTolerance: 7.8001,
    aggressionPlanBias: -0.7663,
    controlPlanBias: 12.1486,
    tempoPlanBias: -12,
    fusionPlanBias: 4.3312,
    precisionPlanBias: 6.6167,
    uncommonCardBias: 6.7806,
    rareCardBias: 0.9603,
    charmSynergyBias: 1.444,
    duplicateCardPenalty: 4.7119,
    enemyProfileRespect: 2.3889,
  },
};
