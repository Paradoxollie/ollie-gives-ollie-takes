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
  name: "trained-bot-20260624-005835",
  trainedAt: "2026-06-24T00:58:35.574Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 107.6512,
    shieldDiff: 58.5536,
    drawBonusDiff: 7.6597,
    manaBonusDiff: 86.7945,
    poisonDiff: 90.9106,
    controlDiff: 14.0865,
    boardStrengthDiff: 34.847,
    boardManaDiff: 17.1167,
    stackSynergyDiff: 1.8048,
    reserveStrengthDiff: 27.0728,
    handStrengthDiff: 50,
    mobilityDiff: 12.4834,
    cornerControlDiff: 51.4275,
    occupiedBoardDiff: 7.034,
    imminentRoundDamageDiff: 64.6901,
    activeTurnTempo: 8.8392,
    specialCardValue: 16.6527,
    deckTrimValue: 3.7814,
    eliteRouteBias: 8,
    restRouteBias: 7.242,
    forgeRouteBias: 12,
    treasureRouteBias: 4.6782,
    branchingRouteBias: 4.1659,
    riskTolerance: -1.2358,
    aggressionPlanBias: -4.7848,
    controlPlanBias: 18,
    tempoPlanBias: 18,
    fusionPlanBias: -1.9589,
    precisionPlanBias: 0.1605,
    uncommonCardBias: -0.6326,
    rareCardBias: -2.1794,
    charmSynergyBias: 3.0996,
    duplicateCardPenalty: 4.4066,
    enemyProfileRespect: 5.8908,
  },
};
