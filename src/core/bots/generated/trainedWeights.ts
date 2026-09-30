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
  name: "trained-bot-20260930-143202",
  trainedAt: "2026-09-30T14:32:02.507Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 59.2165,
    shieldDiff: 103.3101,
    drawBonusDiff: 20.967,
    manaBonusDiff: 62.5261,
    poisonDiff: 57.4328,
    controlDiff: 38.096,
    boardStrengthDiff: 19.186,
    boardManaDiff: 61.9014,
    stackSynergyDiff: 60.11,
    reserveStrengthDiff: 10.5479,
    handStrengthDiff: -1.0287,
    mobilityDiff: -2.9463,
    cornerControlDiff: 0,
    occupiedBoardDiff: -8.4274,
    imminentRoundDamageDiff: 40.5699,
    activeTurnTempo: 12.0551,
    specialCardValue: 3.6403,
    deckTrimValue: 4.6499,
    eliteRouteBias: -0.1775,
    restRouteBias: 7.8265,
    forgeRouteBias: 1.605,
    treasureRouteBias: 12,
    branchingRouteBias: 3.5069,
    riskTolerance: 4.3229,
    aggressionPlanBias: 4.0902,
    controlPlanBias: -12,
    tempoPlanBias: -3.3143,
    fusionPlanBias: -2.7038,
    precisionPlanBias: -2.1589,
    uncommonCardBias: 3.0504,
    rareCardBias: 12,
    charmSynergyBias: 1.1883,
    duplicateCardPenalty: 4.4445,
    enemyProfileRespect: 4.7151,
  },
};
