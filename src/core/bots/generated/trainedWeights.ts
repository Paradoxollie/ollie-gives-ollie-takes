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
  name: "trained-bot-20260730-100229",
  trainedAt: "2026-07-30T10:02:29.023Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 131.3518,
    shieldDiff: 65.4676,
    drawBonusDiff: 41.5593,
    manaBonusDiff: 59.8529,
    poisonDiff: 55.1437,
    controlDiff: 82.4532,
    boardStrengthDiff: 34.8456,
    boardManaDiff: 27.7982,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 16.8187,
    handStrengthDiff: 23.5139,
    mobilityDiff: 30,
    cornerControlDiff: 2.4161,
    occupiedBoardDiff: -3.2916,
    imminentRoundDamageDiff: 29.7927,
    activeTurnTempo: 27.0058,
    specialCardValue: 13.8833,
    deckTrimValue: 4.8962,
    eliteRouteBias: 0.5138,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 5.4152,
    branchingRouteBias: 10,
    riskTolerance: 6.3776,
    aggressionPlanBias: -2.9197,
    controlPlanBias: 16.8193,
    tempoPlanBias: -0.4101,
    fusionPlanBias: 15.9849,
    precisionPlanBias: 18,
    uncommonCardBias: -4,
    rareCardBias: -4,
    charmSynergyBias: 4.0263,
    duplicateCardPenalty: 3.3047,
    enemyProfileRespect: 10,
  },
};
