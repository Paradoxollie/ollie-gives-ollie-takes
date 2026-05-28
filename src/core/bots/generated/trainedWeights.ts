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
  name: "trained-bot-20260528-163539",
  trainedAt: "2026-05-28T16:35:39.897Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 55.9262,
    controlDiff: 23.5463,
    boardStrengthDiff: 36.433,
    reserveStrengthDiff: 51.2127,
    handStrengthDiff: -2.766,
    mobilityDiff: -9.2956,
    cornerControlDiff: 42.6534,
    occupiedBoardDiff: 25.7099,
    imminentRoundDamageDiff: -17.8264,
    activeTurnTempo: -30.053,
    specialCardValue: 6.5169,
    deckTrimValue: -26.0428,
    eliteRouteBias: -65.2442,
    restRouteBias: -10.7092,
    forgeRouteBias: 20.045,
    treasureRouteBias: 14.3095,
    branchingRouteBias: 22.8798,
    riskTolerance: 35.5042,
    aggressionPlanBias: 4.8747,
    controlPlanBias: 34.4981,
    tempoPlanBias: 0.3129,
    fusionPlanBias: 9.8566,
    precisionPlanBias: -1.5186,
    uncommonCardBias: 13.7249,
    rareCardBias: 37.7647,
    charmSynergyBias: 37.2546,
    duplicateCardPenalty: -16.5234,
    enemyProfileRespect: 13.8909,
  },
};
