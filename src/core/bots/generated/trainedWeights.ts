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
  name: "trained-bot-20261004-055812",
  trainedAt: "2026-10-04T05:58:12.222Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 57.8558,
    shieldDiff: 95.1783,
    drawBonusDiff: 17.5673,
    manaBonusDiff: 66.9051,
    poisonDiff: 65.2048,
    controlDiff: 39.2042,
    boardStrengthDiff: 20.0461,
    boardManaDiff: 70.0216,
    stackSynergyDiff: 90.8204,
    reserveStrengthDiff: 18.0047,
    handStrengthDiff: -4.8489,
    mobilityDiff: -0.5544,
    cornerControlDiff: 9.4447,
    occupiedBoardDiff: -12.6986,
    imminentRoundDamageDiff: 34.2763,
    activeTurnTempo: 19.3833,
    specialCardValue: 12.705,
    deckTrimValue: 4.5732,
    eliteRouteBias: 1.7227,
    restRouteBias: 5.9445,
    forgeRouteBias: 8.9386,
    treasureRouteBias: 8.8959,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -9.8259,
    controlPlanBias: 0.7399,
    tempoPlanBias: -5.4427,
    fusionPlanBias: -6.3171,
    precisionPlanBias: 0.0172,
    uncommonCardBias: 6.8141,
    rareCardBias: 8.2728,
    charmSynergyBias: 4.1219,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
