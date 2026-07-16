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
  name: "trained-bot-20260716-132658",
  trainedAt: "2026-07-16T13:26:58.011Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 133.623,
    shieldDiff: 77.5639,
    drawBonusDiff: 21.2908,
    manaBonusDiff: 49.4581,
    poisonDiff: 64.7605,
    controlDiff: 38.3823,
    boardStrengthDiff: 43.8254,
    boardManaDiff: 10.5874,
    stackSynergyDiff: 35.9441,
    reserveStrengthDiff: 21.5884,
    handStrengthDiff: 14.1646,
    mobilityDiff: 17.5072,
    cornerControlDiff: 8.4098,
    occupiedBoardDiff: 4.3262,
    imminentRoundDamageDiff: 73.9396,
    activeTurnTempo: 33.9307,
    specialCardValue: 12.4823,
    deckTrimValue: 7.4354,
    eliteRouteBias: 3.7066,
    restRouteBias: 6.385,
    forgeRouteBias: 8.4591,
    treasureRouteBias: 6.2073,
    branchingRouteBias: 5.6298,
    riskTolerance: 1.1004,
    aggressionPlanBias: -5.7023,
    controlPlanBias: 9.1741,
    tempoPlanBias: 1.5867,
    fusionPlanBias: 8.5775,
    precisionPlanBias: -7.9475,
    uncommonCardBias: -0.3997,
    rareCardBias: -0.2249,
    charmSynergyBias: 2.9582,
    duplicateCardPenalty: 6.5214,
    enemyProfileRespect: 3.8487,
  },
};
