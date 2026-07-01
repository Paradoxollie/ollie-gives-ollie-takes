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
  name: "trained-bot-20260701-021809",
  trainedAt: "2026-07-01T02:18:09.858Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.0041,
    shieldDiff: 62.9948,
    drawBonusDiff: 0,
    manaBonusDiff: 82.6543,
    poisonDiff: 51.2782,
    controlDiff: 13.8769,
    boardStrengthDiff: 27.9792,
    boardManaDiff: 8.2492,
    stackSynergyDiff: 5.461,
    reserveStrengthDiff: 13.4058,
    handStrengthDiff: 32.9886,
    mobilityDiff: 13.7348,
    cornerControlDiff: 0,
    occupiedBoardDiff: 39.2381,
    imminentRoundDamageDiff: 43.9765,
    activeTurnTempo: 10.7577,
    specialCardValue: 17.5696,
    deckTrimValue: 3.3946,
    eliteRouteBias: 4.2756,
    restRouteBias: 1.8984,
    forgeRouteBias: 10.6632,
    treasureRouteBias: 2.4162,
    branchingRouteBias: 9.0133,
    riskTolerance: -4,
    aggressionPlanBias: -2.2265,
    controlPlanBias: 7.5079,
    tempoPlanBias: -0.7162,
    fusionPlanBias: 9.5882,
    precisionPlanBias: 8.5557,
    uncommonCardBias: 2.8419,
    rareCardBias: 12,
    charmSynergyBias: 10.2313,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 6.9765,
  },
};
