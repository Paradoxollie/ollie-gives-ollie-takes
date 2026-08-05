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
  name: "trained-bot-20260804-204635",
  trainedAt: "2026-08-04T20:46:35.600Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 112.943,
    shieldDiff: 75.1665,
    drawBonusDiff: 44.5711,
    manaBonusDiff: 73.2455,
    poisonDiff: 33.5766,
    controlDiff: 62.8714,
    boardStrengthDiff: 10.0167,
    boardManaDiff: 36.7808,
    stackSynergyDiff: 17.0306,
    reserveStrengthDiff: 5.1963,
    handStrengthDiff: 27.3198,
    mobilityDiff: 11.2234,
    cornerControlDiff: 5.2052,
    occupiedBoardDiff: 2.3903,
    imminentRoundDamageDiff: 33.9938,
    activeTurnTempo: 17.1542,
    specialCardValue: 14.7678,
    deckTrimValue: 6.1706,
    eliteRouteBias: -0.6481,
    restRouteBias: 11.6291,
    forgeRouteBias: 0,
    treasureRouteBias: 10.2684,
    branchingRouteBias: 3.4406,
    riskTolerance: 0.582,
    aggressionPlanBias: 18,
    controlPlanBias: 15.7775,
    tempoPlanBias: 4.3569,
    fusionPlanBias: 13.7988,
    precisionPlanBias: 9.7068,
    uncommonCardBias: 9.261,
    rareCardBias: -4,
    charmSynergyBias: -0.1198,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.7843,
  },
};
