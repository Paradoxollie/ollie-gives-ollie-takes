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
  name: "trained-bot-20260902-215512",
  trainedAt: "2026-09-02T21:55:12.162Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.6153,
    shieldDiff: 120,
    drawBonusDiff: 22.2899,
    manaBonusDiff: 93.3657,
    poisonDiff: 63.1735,
    controlDiff: 77.4289,
    boardStrengthDiff: 17.3207,
    boardManaDiff: 63.4052,
    stackSynergyDiff: 2.2959,
    reserveStrengthDiff: 4.0939,
    handStrengthDiff: 13.8692,
    mobilityDiff: 27.3988,
    cornerControlDiff: 11.5511,
    occupiedBoardDiff: 1.345,
    imminentRoundDamageDiff: 63.2979,
    activeTurnTempo: 54.0872,
    specialCardValue: 10.7873,
    deckTrimValue: 1.2577,
    eliteRouteBias: 1.1221,
    restRouteBias: 0,
    forgeRouteBias: 0,
    treasureRouteBias: 11.6834,
    branchingRouteBias: 4.2954,
    riskTolerance: 7.1631,
    aggressionPlanBias: 18,
    controlPlanBias: 7.5542,
    tempoPlanBias: -5.6839,
    fusionPlanBias: -5.3089,
    precisionPlanBias: 8.0137,
    uncommonCardBias: 5.0244,
    rareCardBias: -4,
    charmSynergyBias: 6.8162,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
