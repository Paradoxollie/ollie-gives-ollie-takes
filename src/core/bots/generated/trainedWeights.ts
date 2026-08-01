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
  name: "trained-bot-20260801-184022",
  trainedAt: "2026-08-01T18:40:22.201Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 122.8086,
    shieldDiff: 61.3435,
    drawBonusDiff: 44.8536,
    manaBonusDiff: 59.3136,
    poisonDiff: 43.1876,
    controlDiff: 78.89,
    boardStrengthDiff: 21.7081,
    boardManaDiff: 40.3292,
    stackSynergyDiff: 25.6304,
    reserveStrengthDiff: 2.315,
    handStrengthDiff: 26.346,
    mobilityDiff: 16.7503,
    cornerControlDiff: 9.1312,
    occupiedBoardDiff: 15.7821,
    imminentRoundDamageDiff: 38.2224,
    activeTurnTempo: 9.7472,
    specialCardValue: 17.1244,
    deckTrimValue: 0.0444,
    eliteRouteBias: -3.8611,
    restRouteBias: 7.4774,
    forgeRouteBias: 1.118,
    treasureRouteBias: 9.4945,
    branchingRouteBias: 0,
    riskTolerance: 6.5308,
    aggressionPlanBias: 3.8858,
    controlPlanBias: 18,
    tempoPlanBias: -4.5816,
    fusionPlanBias: 7.7129,
    precisionPlanBias: 3.4687,
    uncommonCardBias: 1.5921,
    rareCardBias: 5.5595,
    charmSynergyBias: 0.4083,
    duplicateCardPenalty: 9.8142,
    enemyProfileRespect: 7.6368,
  },
};
