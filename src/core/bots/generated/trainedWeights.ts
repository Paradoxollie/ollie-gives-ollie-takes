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
  name: "trained-bot-20260914-015111",
  trainedAt: "2026-09-14T01:51:11.967Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 71.3773,
    shieldDiff: 106.44,
    drawBonusDiff: 35.4866,
    manaBonusDiff: 83.7469,
    poisonDiff: 39.8253,
    controlDiff: 53.4968,
    boardStrengthDiff: 4.6755,
    boardManaDiff: 47.8635,
    stackSynergyDiff: 27.3273,
    reserveStrengthDiff: 23.4881,
    handStrengthDiff: -2.5406,
    mobilityDiff: 24.9653,
    cornerControlDiff: 14.1324,
    occupiedBoardDiff: -22.2551,
    imminentRoundDamageDiff: 59.5583,
    activeTurnTempo: 42.2691,
    specialCardValue: 7.5041,
    deckTrimValue: 0,
    eliteRouteBias: -1.179,
    restRouteBias: 6.984,
    forgeRouteBias: 8.3619,
    treasureRouteBias: 9.7746,
    branchingRouteBias: 4.2148,
    riskTolerance: -4,
    aggressionPlanBias: -3.1956,
    controlPlanBias: 7.8127,
    tempoPlanBias: 0.2551,
    fusionPlanBias: -2.5983,
    precisionPlanBias: 0.2424,
    uncommonCardBias: 6.6975,
    rareCardBias: 4.4335,
    charmSynergyBias: -2.2174,
    duplicateCardPenalty: 9.2146,
    enemyProfileRespect: 9.416,
  },
};
