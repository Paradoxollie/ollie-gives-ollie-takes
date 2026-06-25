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
  name: "trained-bot-20260625-165737",
  trainedAt: "2026-06-25T16:57:37.814Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.0866,
    shieldDiff: 45.3988,
    drawBonusDiff: 1.8558,
    manaBonusDiff: 83.0472,
    poisonDiff: 80.4848,
    controlDiff: 12.9828,
    boardStrengthDiff: 17.7362,
    boardManaDiff: 18.1142,
    stackSynergyDiff: 5.5956,
    reserveStrengthDiff: 28.6914,
    handStrengthDiff: 43.7451,
    mobilityDiff: 10.4636,
    cornerControlDiff: 28.278,
    occupiedBoardDiff: 27.4778,
    imminentRoundDamageDiff: 61.0673,
    activeTurnTempo: 6.5247,
    specialCardValue: 16.7695,
    deckTrimValue: 4.5263,
    eliteRouteBias: 0.975,
    restRouteBias: 6.1903,
    forgeRouteBias: 7.1986,
    treasureRouteBias: 9.7321,
    branchingRouteBias: 3.4628,
    riskTolerance: 6.6752,
    aggressionPlanBias: -2.697,
    controlPlanBias: 16.5014,
    tempoPlanBias: -3.3716,
    fusionPlanBias: -0.3231,
    precisionPlanBias: 4.5192,
    uncommonCardBias: 2.6916,
    rareCardBias: -0.6957,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
