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
  name: "trained-bot-20260621-203701",
  trainedAt: "2026-06-21T20:37:01.295Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.7153,
    shieldDiff: 65.6344,
    drawBonusDiff: 15.5034,
    manaBonusDiff: 73.7383,
    poisonDiff: 88.7252,
    controlDiff: 15.2909,
    boardStrengthDiff: 43.7227,
    boardManaDiff: 10.1697,
    stackSynergyDiff: 4.0471,
    reserveStrengthDiff: 28.1782,
    handStrengthDiff: 46.3035,
    mobilityDiff: 8.1242,
    cornerControlDiff: 53.015,
    occupiedBoardDiff: 7.6734,
    imminentRoundDamageDiff: 49.643,
    activeTurnTempo: 17.4083,
    specialCardValue: 13.7215,
    deckTrimValue: 0.6318,
    eliteRouteBias: -1.6271,
    restRouteBias: 12,
    forgeRouteBias: 9.1468,
    treasureRouteBias: 8.6422,
    branchingRouteBias: 4.2843,
    riskTolerance: 5.9263,
    aggressionPlanBias: -10.8971,
    controlPlanBias: 10.7213,
    tempoPlanBias: 10.8969,
    fusionPlanBias: -6.1517,
    precisionPlanBias: 0.916,
    uncommonCardBias: -0.3921,
    rareCardBias: -2.5089,
    charmSynergyBias: -3.8079,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.7384,
  },
};
