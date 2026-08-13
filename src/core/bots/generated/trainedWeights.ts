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
  name: "trained-bot-20260812-232810",
  trainedAt: "2026-08-12T23:28:10.070Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.6333,
    shieldDiff: 97.0464,
    drawBonusDiff: 42.0021,
    manaBonusDiff: 86.7047,
    poisonDiff: 35.5673,
    controlDiff: 80.7699,
    boardStrengthDiff: 20.6767,
    boardManaDiff: 31.4968,
    stackSynergyDiff: 27.1914,
    reserveStrengthDiff: -10,
    handStrengthDiff: 36.0479,
    mobilityDiff: -1.5139,
    cornerControlDiff: 5.5746,
    occupiedBoardDiff: 5.2343,
    imminentRoundDamageDiff: 41.8652,
    activeTurnTempo: 26.2146,
    specialCardValue: 17.7161,
    deckTrimValue: 4.0706,
    eliteRouteBias: 6.002,
    restRouteBias: 7.3894,
    forgeRouteBias: 6.1363,
    treasureRouteBias: 3.139,
    branchingRouteBias: 3.6563,
    riskTolerance: 1.2203,
    aggressionPlanBias: 2.2603,
    controlPlanBias: 7.2997,
    tempoPlanBias: -4.1591,
    fusionPlanBias: 13.4996,
    precisionPlanBias: 4.6327,
    uncommonCardBias: 4.93,
    rareCardBias: 7.3549,
    charmSynergyBias: 9.8961,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
