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
  name: "trained-bot-20260717-050931",
  trainedAt: "2026-07-17T05:09:31.931Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 123.2159,
    shieldDiff: 62.92224999999999,
    drawBonusDiff: 30.8717,
    manaBonusDiff: 44.43745,
    poisonDiff: 66.144875,
    controlDiff: 43.68115,
    boardStrengthDiff: 46.8923,
    boardManaDiff: 11.64105,
    stackSynergyDiff: 36.0499,
    reserveStrengthDiff: 18.48065,
    handStrengthDiff: 20.85615,
    mobilityDiff: 27.62995,
    cornerControlDiff: 6.9752,
    occupiedBoardDiff: 6.97025,
    imminentRoundDamageDiff: 62.3284,
    activeTurnTempo: 31.575975,
    specialCardValue: 17.882325,
    deckTrimValue: 13.4294,
    eliteRouteBias: 3.292825,
    restRouteBias: 10.598025,
    forgeRouteBias: 5.957375,
    treasureRouteBias: 4.6635,
    branchingRouteBias: 6.82975,
    riskTolerance: 4.729125,
    aggressionPlanBias: 1.9907499999999998,
    controlPlanBias: 4.965624999999999,
    tempoPlanBias: -9.211649999999999,
    fusionPlanBias: 5.883925,
    precisionPlanBias: -11.06045,
    uncommonCardBias: 5.9247250000000005,
    rareCardBias: -0.67455,
    charmSynergyBias: 2.8374,
    duplicateCardPenalty: 8.398475,
    enemyProfileRespect: 7.172625,
  },
};
