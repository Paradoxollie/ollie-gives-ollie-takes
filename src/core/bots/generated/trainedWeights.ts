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
  name: "trained-bot-20260808-225323",
  trainedAt: "2026-08-08T22:53:23.954Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.8653,
    shieldDiff: 98.6154,
    drawBonusDiff: 25.8742,
    manaBonusDiff: 80.6839,
    poisonDiff: 32.0006,
    controlDiff: 64.6582,
    boardStrengthDiff: 11.2554,
    boardManaDiff: 34.997,
    stackSynergyDiff: 29.7547,
    reserveStrengthDiff: 12.4617,
    handStrengthDiff: 39.7169,
    mobilityDiff: 5.8701,
    cornerControlDiff: 0,
    occupiedBoardDiff: 1.7129,
    imminentRoundDamageDiff: 30.7812,
    activeTurnTempo: 21.3749,
    specialCardValue: 15.7678,
    deckTrimValue: 6.2289,
    eliteRouteBias: -2.6416,
    restRouteBias: 4.916,
    forgeRouteBias: 7.5237,
    treasureRouteBias: 8.7452,
    branchingRouteBias: 1.8623,
    riskTolerance: 0.2156,
    aggressionPlanBias: 18,
    controlPlanBias: 11.7048,
    tempoPlanBias: -1.8429,
    fusionPlanBias: 18,
    precisionPlanBias: 7.6219,
    uncommonCardBias: 9.8446,
    rareCardBias: 12,
    charmSynergyBias: 12.271,
    duplicateCardPenalty: 4.2223,
    enemyProfileRespect: 7.4751,
  },
};
