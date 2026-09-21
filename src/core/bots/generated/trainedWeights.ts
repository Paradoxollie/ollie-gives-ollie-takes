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
  name: "trained-bot-20260921-024151",
  trainedAt: "2026-09-21T02:41:51.188Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.5219,
    shieldDiff: 108.2202,
    drawBonusDiff: 29.3932,
    manaBonusDiff: 82.5201,
    poisonDiff: 36.5244,
    controlDiff: 62.9668,
    boardStrengthDiff: 22.3976,
    boardManaDiff: 56.5785,
    stackSynergyDiff: 45.6804,
    reserveStrengthDiff: 16.2916,
    handStrengthDiff: -5.2919,
    mobilityDiff: 24.5193,
    cornerControlDiff: 27.7241,
    occupiedBoardDiff: -23.7184,
    imminentRoundDamageDiff: 55.8043,
    activeTurnTempo: 23.1544,
    specialCardValue: 16.173,
    deckTrimValue: 11.5992,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 4.4875,
    treasureRouteBias: 8.4219,
    branchingRouteBias: 4.1115,
    riskTolerance: -0.2979,
    aggressionPlanBias: 5.2167,
    controlPlanBias: 15.7313,
    tempoPlanBias: -9.9646,
    fusionPlanBias: -6.4991,
    precisionPlanBias: 14.667,
    uncommonCardBias: 3.7124,
    rareCardBias: 7.8835,
    charmSynergyBias: 8.6844,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 2.8914,
  },
};
