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
  name: "trained-bot-20261008-013233",
  trainedAt: "2026-10-08T01:32:33.512Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 59.1632,
    shieldDiff: 78.5191125,
    drawBonusDiff: 17.35735,
    manaBonusDiff: 76.8204,
    poisonDiff: 62.6503375,
    controlDiff: 29.1229625,
    boardStrengthDiff: 17.600299999999997,
    boardManaDiff: 72.09438750000001,
    stackSynergyDiff: 68.768875,
    reserveStrengthDiff: 24.658362500000003,
    handStrengthDiff: 10.894749999999998,
    mobilityDiff: -3.1252250000000004,
    cornerControlDiff: 6.437200000000001,
    occupiedBoardDiff: -13.49755,
    imminentRoundDamageDiff: 43.010887499999995,
    activeTurnTempo: 18.361962499999997,
    specialCardValue: 16.7543375,
    deckTrimValue: 1.1175875,
    eliteRouteBias: -8,
    restRouteBias: 0.0414,
    forgeRouteBias: 11.727924999999999,
    treasureRouteBias: 2.324625,
    branchingRouteBias: 8.812362499999999,
    riskTolerance: 0.08141250000000011,
    aggressionPlanBias: -0.509175,
    controlPlanBias: 13.512575000000002,
    tempoPlanBias: -11.770262500000001,
    fusionPlanBias: -0.3014375,
    precisionPlanBias: -2.0347375000000003,
    uncommonCardBias: 7.7886625,
    rareCardBias: 3.7147749999999995,
    charmSynergyBias: 6.890425,
    duplicateCardPenalty: 9.2238375,
    enemyProfileRespect: 0.073225,
  },
};
