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
  name: "trained-bot-20260928-211517",
  trainedAt: "2026-09-28T21:15:17.085Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 64.3606,
    shieldDiff: 113.408,
    drawBonusDiff: 20.3518,
    manaBonusDiff: 63.8372,
    poisonDiff: 60.7547,
    controlDiff: 34.6266,
    boardStrengthDiff: 23.6298,
    boardManaDiff: 62.786,
    stackSynergyDiff: 66.5175,
    reserveStrengthDiff: 5.7599,
    handStrengthDiff: -6.2897,
    mobilityDiff: 2.1327,
    cornerControlDiff: 5.9829,
    occupiedBoardDiff: -19.6857,
    imminentRoundDamageDiff: 34.5442,
    activeTurnTempo: 17.6538,
    specialCardValue: 16.0274,
    deckTrimValue: 8.0611,
    eliteRouteBias: 0.4957,
    restRouteBias: 7.9057,
    forgeRouteBias: 1.2424,
    treasureRouteBias: 12,
    branchingRouteBias: 8.227,
    riskTolerance: -0.1884,
    aggressionPlanBias: 1.1655,
    controlPlanBias: -6.024,
    tempoPlanBias: -10.2338,
    fusionPlanBias: -12,
    precisionPlanBias: -12,
    uncommonCardBias: 9.6431,
    rareCardBias: 7.5595,
    charmSynergyBias: 5.9847,
    duplicateCardPenalty: 6.8567,
    enemyProfileRespect: 2.9595,
  },
};
