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
  name: "trained-bot-20260619-015447",
  trainedAt: "2026-06-19T01:54:47.447Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.0711,
    shieldDiff: 80.9082,
    drawBonusDiff: 17.3012,
    manaBonusDiff: 79.5853,
    poisonDiff: 99.8313,
    controlDiff: 13.0672,
    boardStrengthDiff: 47.0074,
    boardManaDiff: 23.431,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 23.8289,
    handStrengthDiff: 39.7403,
    mobilityDiff: -5.1789,
    cornerControlDiff: 61.8085,
    occupiedBoardDiff: 10.4117,
    imminentRoundDamageDiff: 39.2594,
    activeTurnTempo: 3.3349,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: -0.0035,
    restRouteBias: 12,
    forgeRouteBias: 0.935,
    treasureRouteBias: 8.5098,
    branchingRouteBias: 6.3874,
    riskTolerance: 0.4799,
    aggressionPlanBias: -4.0652,
    controlPlanBias: 3.8634,
    tempoPlanBias: -8.097,
    fusionPlanBias: -4.0574,
    precisionPlanBias: 3.2089,
    uncommonCardBias: 0.995,
    rareCardBias: -3.2051,
    charmSynergyBias: -3.2867,
    duplicateCardPenalty: 9.8956,
    enemyProfileRespect: 0,
  },
};
