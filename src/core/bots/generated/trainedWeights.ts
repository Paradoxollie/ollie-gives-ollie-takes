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
  name: "trained-bot-20260623-043134",
  trainedAt: "2026-06-23T04:31:34.387Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 108.0888,
    shieldDiff: 60.7742,
    drawBonusDiff: 16.9416,
    manaBonusDiff: 87.6521,
    poisonDiff: 97.8721,
    controlDiff: 16.2349,
    boardStrengthDiff: 38.1183,
    boardManaDiff: 1.6067,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 30,
    handStrengthDiff: 44.3521,
    mobilityDiff: 6.8848,
    cornerControlDiff: 51.1485,
    occupiedBoardDiff: 4.5229,
    imminentRoundDamageDiff: 61.0033,
    activeTurnTempo: 10.7157,
    specialCardValue: 15.056,
    deckTrimValue: 13.9736,
    eliteRouteBias: 2.4989,
    restRouteBias: 2.7758,
    forgeRouteBias: 1.5576,
    treasureRouteBias: 5.4101,
    branchingRouteBias: 6.9949,
    riskTolerance: 8,
    aggressionPlanBias: -3.3239,
    controlPlanBias: 14.4057,
    tempoPlanBias: 13.9985,
    fusionPlanBias: -12,
    precisionPlanBias: -7.6695,
    uncommonCardBias: -2.8085,
    rareCardBias: -2.0362,
    charmSynergyBias: 5.1886,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
