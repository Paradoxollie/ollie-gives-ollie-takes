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
  name: "trained-bot-20260922-013101",
  trainedAt: "2026-09-22T01:31:01.454Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.9141,
    shieldDiff: 106.6971,
    drawBonusDiff: 31.8434,
    manaBonusDiff: 74.3518,
    poisonDiff: 37.5616,
    controlDiff: 54.8802,
    boardStrengthDiff: 26.3365,
    boardManaDiff: 56.6048,
    stackSynergyDiff: 45.4925,
    reserveStrengthDiff: 12.7845,
    handStrengthDiff: -10,
    mobilityDiff: 19.1295,
    cornerControlDiff: 31.7273,
    occupiedBoardDiff: -25.0254,
    imminentRoundDamageDiff: 44.5721,
    activeTurnTempo: 12.7159,
    specialCardValue: 12.9757,
    deckTrimValue: 11.6926,
    eliteRouteBias: -2.9672,
    restRouteBias: 5.3971,
    forgeRouteBias: 0,
    treasureRouteBias: 7.1263,
    branchingRouteBias: 6.5528,
    riskTolerance: 8,
    aggressionPlanBias: 10.8453,
    controlPlanBias: 18,
    tempoPlanBias: -12,
    fusionPlanBias: -6.5892,
    precisionPlanBias: 9.1609,
    uncommonCardBias: 7.778,
    rareCardBias: 4.8449,
    charmSynergyBias: 1.7993,
    duplicateCardPenalty: 1.2745,
    enemyProfileRespect: 2.4083,
  },
};
