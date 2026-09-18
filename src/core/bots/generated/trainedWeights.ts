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
  name: "trained-bot-20260917-232504",
  trainedAt: "2026-09-17T23:25:04.765Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.6863,
    shieldDiff: 100.873,
    drawBonusDiff: 35.4531,
    manaBonusDiff: 92.1133,
    poisonDiff: 43.3796,
    controlDiff: 52.4064,
    boardStrengthDiff: 16.005,
    boardManaDiff: 43.3487,
    stackSynergyDiff: 43.2378,
    reserveStrengthDiff: 25.4343,
    handStrengthDiff: -4.5133,
    mobilityDiff: 21.228,
    cornerControlDiff: 16.6317,
    occupiedBoardDiff: -29.2359,
    imminentRoundDamageDiff: 48.2838,
    activeTurnTempo: 24.2311,
    specialCardValue: 12.4499,
    deckTrimValue: 4.4988,
    eliteRouteBias: -2.1806,
    restRouteBias: 6.5025,
    forgeRouteBias: 7.257,
    treasureRouteBias: 3.6517,
    branchingRouteBias: 6.2507,
    riskTolerance: -0.9286,
    aggressionPlanBias: 0.1491,
    controlPlanBias: 17.7,
    tempoPlanBias: 1.4673,
    fusionPlanBias: 2.2649,
    precisionPlanBias: 8.7998,
    uncommonCardBias: -3.7639,
    rareCardBias: -4,
    charmSynergyBias: 10.056,
    duplicateCardPenalty: 5.4839,
    enemyProfileRespect: 1.4377,
  },
};
