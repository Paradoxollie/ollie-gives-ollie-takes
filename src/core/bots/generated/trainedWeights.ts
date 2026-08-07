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
  name: "trained-bot-20260807-093153",
  trainedAt: "2026-08-07T09:31:53.023Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.7166,
    shieldDiff: 84.0282,
    drawBonusDiff: 36.3055,
    manaBonusDiff: 79.5822,
    poisonDiff: 33.6658,
    controlDiff: 71.8309,
    boardStrengthDiff: 9.8021,
    boardManaDiff: 34.6311,
    stackSynergyDiff: 22.3897,
    reserveStrengthDiff: 12.6052,
    handStrengthDiff: 34.8262,
    mobilityDiff: 15.9775,
    cornerControlDiff: 5.9458,
    occupiedBoardDiff: -2.0448,
    imminentRoundDamageDiff: 35.4779,
    activeTurnTempo: 23.1959,
    specialCardValue: 15.7263,
    deckTrimValue: 11.8562,
    eliteRouteBias: -7.4454,
    restRouteBias: 12,
    forgeRouteBias: 12,
    treasureRouteBias: 9.0538,
    branchingRouteBias: 0,
    riskTolerance: -2.7294,
    aggressionPlanBias: 13.6702,
    controlPlanBias: 16.5891,
    tempoPlanBias: 0.3056,
    fusionPlanBias: 4.0942,
    precisionPlanBias: 12.3054,
    uncommonCardBias: 3.5552,
    rareCardBias: 9.3441,
    charmSynergyBias: 5.2049,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 10,
  },
};
