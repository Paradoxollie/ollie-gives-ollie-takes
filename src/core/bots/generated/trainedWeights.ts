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
  name: "trained-bot-20260911-225427",
  trainedAt: "2026-09-11T22:54:27.805Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.0025,
    shieldDiff: 115.1668,
    drawBonusDiff: 40.230000000000004,
    manaBonusDiff: 89.22,
    poisonDiff: 48.5363,
    controlDiff: 56.8483,
    boardStrengthDiff: 5.9741,
    boardManaDiff: 49.34165,
    stackSynergyDiff: 28.52235,
    reserveStrengthDiff: 22.81555,
    handStrengthDiff: -10,
    mobilityDiff: 28.60905,
    cornerControlDiff: 19.70975,
    occupiedBoardDiff: -7.5200499999999995,
    imminentRoundDamageDiff: 64.97465,
    activeTurnTempo: 49.5991,
    specialCardValue: 13.0426,
    deckTrimValue: 1.3365,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 0.3169,
    treasureRouteBias: 5.8336,
    branchingRouteBias: 3.8721499999999995,
    riskTolerance: 4.07555,
    aggressionPlanBias: -6.9990000000000006,
    controlPlanBias: 7.77325,
    tempoPlanBias: 5.0497,
    fusionPlanBias: 8.95925,
    precisionPlanBias: 2.08095,
    uncommonCardBias: 8.24475,
    rareCardBias: 8.55205,
    charmSynergyBias: -0.6374,
    duplicateCardPenalty: 9.55165,
    enemyProfileRespect: 1.2585,
  },
};
