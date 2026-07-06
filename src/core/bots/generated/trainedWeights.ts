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
  name: "trained-bot-20260705-220700",
  trainedAt: "2026-07-05T22:07:00.139Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.8281,
    shieldDiff: 58.3625,
    drawBonusDiff: 0,
    manaBonusDiff: 84.2998,
    poisonDiff: 51.2695,
    controlDiff: 11.7183,
    boardStrengthDiff: 24.3858,
    boardManaDiff: 10.7533,
    stackSynergyDiff: 9.0227,
    reserveStrengthDiff: 21.8008,
    handStrengthDiff: 20.0444,
    mobilityDiff: 19.3774,
    cornerControlDiff: 6.5002,
    occupiedBoardDiff: 47.45,
    imminentRoundDamageDiff: 61.4958,
    activeTurnTempo: 23.2953,
    specialCardValue: 18,
    deckTrimValue: 9.686,
    eliteRouteBias: -6.3733,
    restRouteBias: 3.208,
    forgeRouteBias: 6.9874,
    treasureRouteBias: 6.3906,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: 0.8001,
    controlPlanBias: 17.9549,
    tempoPlanBias: -7.2714,
    fusionPlanBias: 8.6767,
    precisionPlanBias: 7.6729,
    uncommonCardBias: 10,
    rareCardBias: -1.1556,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.4333,
  },
};
