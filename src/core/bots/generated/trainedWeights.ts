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
  name: "trained-bot-20260725-140334",
  trainedAt: "2026-07-25T14:03:34.202Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 120.6859,
    shieldDiff: 79.2045,
    drawBonusDiff: 48.6621,
    manaBonusDiff: 60.2335,
    poisonDiff: 68.8569,
    controlDiff: 68.9236,
    boardStrengthDiff: 39.5412,
    boardManaDiff: 8.9416,
    stackSynergyDiff: 4.394,
    reserveStrengthDiff: 17.8391,
    handStrengthDiff: 4.9487,
    mobilityDiff: 23.0287,
    cornerControlDiff: 0,
    occupiedBoardDiff: -2.3349,
    imminentRoundDamageDiff: 40.2929,
    activeTurnTempo: 27.4075,
    specialCardValue: 15.132,
    deckTrimValue: 9.1876,
    eliteRouteBias: -2.0986,
    restRouteBias: 4.9579,
    forgeRouteBias: 2.3416,
    treasureRouteBias: 6.5379,
    branchingRouteBias: 8.5663,
    riskTolerance: 3.6759,
    aggressionPlanBias: 6.2272,
    controlPlanBias: 18,
    tempoPlanBias: -2.5472,
    fusionPlanBias: 9.6576,
    precisionPlanBias: 10.0528,
    uncommonCardBias: -4,
    rareCardBias: 12,
    charmSynergyBias: 0.5545,
    duplicateCardPenalty: 1.7927,
    enemyProfileRespect: 5.1448,
  },
};
