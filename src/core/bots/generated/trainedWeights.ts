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
  name: "trained-bot-20260917-074733",
  trainedAt: "2026-09-17T07:47:33.803Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 78.912,
    shieldDiff: 98.4551,
    drawBonusDiff: 34.9515,
    manaBonusDiff: 87.5944,
    poisonDiff: 35.4466,
    controlDiff: 50.9754,
    boardStrengthDiff: 16.1665,
    boardManaDiff: 45.264,
    stackSynergyDiff: 44.5273,
    reserveStrengthDiff: 16.5674,
    handStrengthDiff: -10,
    mobilityDiff: 29.0738,
    cornerControlDiff: 25.8531,
    occupiedBoardDiff: -33.3651,
    imminentRoundDamageDiff: 48.2665,
    activeTurnTempo: 31.5164,
    specialCardValue: 17.259,
    deckTrimValue: 9.1816,
    eliteRouteBias: 1.592,
    restRouteBias: 12,
    forgeRouteBias: 4.6104,
    treasureRouteBias: 4.2557,
    branchingRouteBias: 2.225,
    riskTolerance: -3.5681,
    aggressionPlanBias: 0.5139,
    controlPlanBias: 9.5758,
    tempoPlanBias: 3.8401,
    fusionPlanBias: 2.8372,
    precisionPlanBias: -3.9144,
    uncommonCardBias: 8.6345,
    rareCardBias: 5.9159,
    charmSynergyBias: 7.8028,
    duplicateCardPenalty: 5.2808,
    enemyProfileRespect: 5.0649,
  },
};
