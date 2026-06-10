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
  name: "trained-bot-20260610-063238",
  trainedAt: "2026-06-10T06:32:38.419Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.9128,
    shieldDiff: 49.1215,
    drawBonusDiff: 76.7687,
    manaBonusDiff: 104.9549,
    poisonDiff: 112.339,
    controlDiff: 4.0367,
    boardStrengthDiff: 59.9608,
    boardManaDiff: 13.4835,
    stackSynergyDiff: 9.0653,
    reserveStrengthDiff: 28.2205,
    handStrengthDiff: 16.6781,
    mobilityDiff: 14.0486,
    cornerControlDiff: 50.65,
    occupiedBoardDiff: 34.7499,
    imminentRoundDamageDiff: 2.1712,
    activeTurnTempo: 11.9668,
    specialCardValue: 1.6259,
    deckTrimValue: 13.9779,
    eliteRouteBias: -0.496,
    restRouteBias: 10.0258,
    forgeRouteBias: 5.2479,
    treasureRouteBias: 3.8143,
    branchingRouteBias: 10,
    riskTolerance: 0.3402,
    aggressionPlanBias: 1.0618,
    controlPlanBias: 16.552,
    tempoPlanBias: -6.4404,
    fusionPlanBias: -6.2512,
    precisionPlanBias: 10.443,
    uncommonCardBias: 7.7961,
    rareCardBias: 8.0742,
    charmSynergyBias: -3.2824,
    duplicateCardPenalty: 4.8872,
    enemyProfileRespect: 6.3942,
  },
};
