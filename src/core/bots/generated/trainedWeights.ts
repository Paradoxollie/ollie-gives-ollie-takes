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
  name: "trained-bot-20260717-150213",
  trainedAt: "2026-07-17T15:02:13.181Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 124.7663,
    shieldDiff: 62.93,
    drawBonusDiff: 34.0599,
    manaBonusDiff: 42.0086,
    poisonDiff: 65.5014,
    controlDiff: 40.6054,
    boardStrengthDiff: 42.6759,
    boardManaDiff: 7.9502,
    stackSynergyDiff: 37.4403,
    reserveStrengthDiff: 20.7189,
    handStrengthDiff: 19.0707,
    mobilityDiff: 29.5826,
    cornerControlDiff: 7.7327,
    occupiedBoardDiff: 5.1541,
    imminentRoundDamageDiff: 65.9544,
    activeTurnTempo: 32.3154,
    specialCardValue: 18,
    deckTrimValue: 12.5662,
    eliteRouteBias: 5.2111,
    restRouteBias: 12,
    forgeRouteBias: 6.2168,
    treasureRouteBias: 7.7235,
    branchingRouteBias: 10,
    riskTolerance: 3.2488,
    aggressionPlanBias: 4.7543,
    controlPlanBias: 5.6479,
    tempoPlanBias: -5.5521,
    fusionPlanBias: 4.695,
    precisionPlanBias: -12,
    uncommonCardBias: 6.1032,
    rareCardBias: 0.0763,
    charmSynergyBias: 1.4705,
    duplicateCardPenalty: 6.9492,
    enemyProfileRespect: 3.4656,
  },
};
