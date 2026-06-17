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
  name: "trained-bot-20260617-144727",
  trainedAt: "2026-06-17T14:47:27.478Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.13465,
    shieldDiff: 84.06960000000001,
    drawBonusDiff: 29.0987,
    manaBonusDiff: 80.91125,
    poisonDiff: 106.80260000000001,
    controlDiff: 19.299300000000002,
    boardStrengthDiff: 39.95845,
    boardManaDiff: 17.520000000000003,
    stackSynergyDiff: 2.2748500000000003,
    reserveStrengthDiff: 14.9654,
    handStrengthDiff: 44.05845,
    mobilityDiff: -6.3754,
    cornerControlDiff: 61.08305,
    occupiedBoardDiff: 30.6374,
    imminentRoundDamageDiff: 24.33155,
    activeTurnTempo: 4.9899000000000004,
    specialCardValue: 18,
    deckTrimValue: 8.99815,
    eliteRouteBias: -3.65855,
    restRouteBias: 8.9936,
    forgeRouteBias: 12,
    treasureRouteBias: 9.53965,
    branchingRouteBias: 9.729800000000001,
    riskTolerance: -0.5009,
    aggressionPlanBias: -4.28555,
    controlPlanBias: 9.9215,
    tempoPlanBias: -5.86355,
    fusionPlanBias: -3.3366500000000006,
    precisionPlanBias: 1.45375,
    uncommonCardBias: 3.7838499999999997,
    rareCardBias: 9.0638,
    charmSynergyBias: 7.4007000000000005,
    duplicateCardPenalty: 3.4319,
    enemyProfileRespect: 1.40245,
  },
};
