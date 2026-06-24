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
  name: "trained-bot-20260624-155451",
  trainedAt: "2026-06-24T15:54:51.380Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.05165,
    shieldDiff: 47.2838,
    drawBonusDiff: 3.8073,
    manaBonusDiff: 78.5649,
    poisonDiff: 93.6414,
    controlDiff: 3.0089,
    boardStrengthDiff: 33.677400000000006,
    boardManaDiff: 19.951050000000002,
    stackSynergyDiff: 3.5745,
    reserveStrengthDiff: 20.15,
    handStrengthDiff: 48.98115,
    mobilityDiff: 17.57065,
    cornerControlDiff: 45.6463,
    occupiedBoardDiff: 15.862549999999999,
    imminentRoundDamageDiff: 62.73725,
    activeTurnTempo: 11.2463,
    specialCardValue: 18,
    deckTrimValue: 9.03575,
    eliteRouteBias: -0.81345,
    restRouteBias: 11.2981,
    forgeRouteBias: 9.0581,
    treasureRouteBias: 3.7003500000000003,
    branchingRouteBias: 2.3444000000000003,
    riskTolerance: -0.11954999999999993,
    aggressionPlanBias: -11.9041,
    controlPlanBias: 17.70895,
    tempoPlanBias: 18,
    fusionPlanBias: 1.5446000000000002,
    precisionPlanBias: 0.8583,
    uncommonCardBias: 1.3749,
    rareCardBias: -4,
    charmSynergyBias: 6.41855,
    duplicateCardPenalty: 8.15465,
    enemyProfileRespect: 7.21435,
  },
};
