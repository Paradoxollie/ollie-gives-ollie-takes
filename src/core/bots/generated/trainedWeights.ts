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
  name: "trained-bot-20261003-225359",
  trainedAt: "2026-10-03T22:53:59.156Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 62.5967,
    shieldDiff: 88.2372,
    drawBonusDiff: 16.0715,
    manaBonusDiff: 59.2669,
    poisonDiff: 65.2872,
    controlDiff: 35.3143,
    boardStrengthDiff: 25.5866,
    boardManaDiff: 60.9706,
    stackSynergyDiff: 87.4747,
    reserveStrengthDiff: 14.9116,
    handStrengthDiff: -5.95,
    mobilityDiff: -1.5748,
    cornerControlDiff: 8.9958,
    occupiedBoardDiff: -12.1491,
    imminentRoundDamageDiff: 29.7103,
    activeTurnTempo: 17.5047,
    specialCardValue: 13.0481,
    deckTrimValue: 7.243,
    eliteRouteBias: 2.327,
    restRouteBias: 7.2358,
    forgeRouteBias: 12,
    treasureRouteBias: 8.1804,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -8.7709,
    controlPlanBias: 3.3823,
    tempoPlanBias: -5.468,
    fusionPlanBias: -5.6689,
    precisionPlanBias: 1.9009,
    uncommonCardBias: 10,
    rareCardBias: 12,
    charmSynergyBias: 5.8573,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
