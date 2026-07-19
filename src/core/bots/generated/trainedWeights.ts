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
  name: "trained-bot-20260719-042703",
  trainedAt: "2026-07-19T04:27:03.547Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 136.9251,
    shieldDiff: 63.0711,
    drawBonusDiff: 36.1347,
    manaBonusDiff: 46.1699,
    poisonDiff: 63.4316,
    controlDiff: 41.2998,
    boardStrengthDiff: 51.8081,
    boardManaDiff: 6.6715,
    stackSynergyDiff: 29.5423,
    reserveStrengthDiff: 29.0549,
    handStrengthDiff: 9.4159,
    mobilityDiff: 26.3609,
    cornerControlDiff: 11.0249,
    occupiedBoardDiff: 14.9274,
    imminentRoundDamageDiff: 64.814,
    activeTurnTempo: 33.5724,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 6.1353,
    restRouteBias: 6.6471,
    forgeRouteBias: 2.0742,
    treasureRouteBias: 5.5802,
    branchingRouteBias: 10,
    riskTolerance: -0.4087,
    aggressionPlanBias: 2.6613,
    controlPlanBias: 4.5399,
    tempoPlanBias: -8.1056,
    fusionPlanBias: 2.5396,
    precisionPlanBias: -12,
    uncommonCardBias: 10,
    rareCardBias: -4,
    charmSynergyBias: 4.5524,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
