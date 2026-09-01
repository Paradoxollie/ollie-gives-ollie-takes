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
  name: "trained-bot-20260901-180851",
  trainedAt: "2026-09-01T18:08:51.719Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.4456,
    shieldDiff: 115.4778,
    drawBonusDiff: 21.5035,
    manaBonusDiff: 93.1505,
    poisonDiff: 63.8945,
    controlDiff: 69.2701,
    boardStrengthDiff: 28.0446,
    boardManaDiff: 72.1629,
    stackSynergyDiff: 15.5975,
    reserveStrengthDiff: 20.138,
    handStrengthDiff: 18.0872,
    mobilityDiff: 25.6538,
    cornerControlDiff: 12.3053,
    occupiedBoardDiff: -2.5014,
    imminentRoundDamageDiff: 67.024,
    activeTurnTempo: 51.2875,
    specialCardValue: 15.609,
    deckTrimValue: 5.536,
    eliteRouteBias: -7.7374,
    restRouteBias: 2.8026,
    forgeRouteBias: 7.2749,
    treasureRouteBias: 9.7801,
    branchingRouteBias: 10,
    riskTolerance: 0.576,
    aggressionPlanBias: 9.6914,
    controlPlanBias: -3.5958,
    tempoPlanBias: 2.6207,
    fusionPlanBias: -8.734,
    precisionPlanBias: -0.3056,
    uncommonCardBias: 4.0622,
    rareCardBias: -1.4956,
    charmSynergyBias: 12.4211,
    duplicateCardPenalty: 8.5538,
    enemyProfileRespect: 1.8672,
  },
};
