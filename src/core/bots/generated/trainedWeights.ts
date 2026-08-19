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
  name: "trained-bot-20260818-230635",
  trainedAt: "2026-08-18T23:06:35.631Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 115.7466,
    shieldDiff: 110.2496,
    drawBonusDiff: 43.4118,
    manaBonusDiff: 102.7932,
    poisonDiff: 74.262,
    controlDiff: 89.582,
    boardStrengthDiff: 17.6408,
    boardManaDiff: 37.7433,
    stackSynergyDiff: 13.6115,
    reserveStrengthDiff: -10,
    handStrengthDiff: 50,
    mobilityDiff: -10,
    cornerControlDiff: 9.3383,
    occupiedBoardDiff: 5.6982,
    imminentRoundDamageDiff: 59.8016,
    activeTurnTempo: 33.4215,
    specialCardValue: 18,
    deckTrimValue: 5.9595,
    eliteRouteBias: 3.0819,
    restRouteBias: 6.689,
    forgeRouteBias: 8.2563,
    treasureRouteBias: 12,
    branchingRouteBias: 5.6496,
    riskTolerance: 3.993,
    aggressionPlanBias: -1.249,
    controlPlanBias: 8.2655,
    tempoPlanBias: 9.9964,
    fusionPlanBias: 7.1139,
    precisionPlanBias: 1.3637,
    uncommonCardBias: -4,
    rareCardBias: 1.7258,
    charmSynergyBias: 9.6176,
    duplicateCardPenalty: 8.9447,
    enemyProfileRespect: 6.1613,
  },
};
