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
  name: "trained-bot-20260609-023135",
  trainedAt: "2026-06-09T02:31:35.878Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.7193125,
    shieldDiff: 54.974206249999995,
    drawBonusDiff: 72.80303125,
    manaBonusDiff: 101.78488125,
    poisonDiff: 102.2703375,
    controlDiff: 5.1997125,
    boardStrengthDiff: 57.43489375,
    boardManaDiff: 7.135999999999999,
    stackSynergyDiff: 7.07405,
    reserveStrengthDiff: 19.50818125,
    handStrengthDiff: 11.27579375,
    mobilityDiff: 16.789337500000002,
    cornerControlDiff: 48.092181249999996,
    occupiedBoardDiff: 27.78931875,
    imminentRoundDamageDiff: 11.59730625,
    activeTurnTempo: -8.46280625,
    specialCardValue: 0.8282875,
    deckTrimValue: 2.66405,
    eliteRouteBias: 4.071925,
    restRouteBias: 4.8684562499999995,
    forgeRouteBias: 0.1960375,
    treasureRouteBias: 7.1426125,
    branchingRouteBias: 5.15060625,
    riskTolerance: 5.3102374999999995,
    aggressionPlanBias: 4.38695,
    controlPlanBias: 11.1708875,
    tempoPlanBias: -9.781981250000001,
    fusionPlanBias: -3.7689874999999997,
    precisionPlanBias: 2.87106875,
    uncommonCardBias: 5.690156249999999,
    rareCardBias: 8.392912500000001,
    charmSynergyBias: 7.75251875,
    duplicateCardPenalty: 9.7713,
    enemyProfileRespect: 3.71464375,
  },
};
