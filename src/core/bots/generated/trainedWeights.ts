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
  name: "trained-bot-20261009-020009",
  trainedAt: "2026-10-09T02:00:09.669Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 70.5522,
    shieldDiff: 72.6324,
    drawBonusDiff: 23.0216,
    manaBonusDiff: 77.5563,
    poisonDiff: 60.0293,
    controlDiff: 33.8701,
    boardStrengthDiff: 25.135,
    boardManaDiff: 76.1513,
    stackSynergyDiff: 67.9957,
    reserveStrengthDiff: 30,
    handStrengthDiff: 9.2834,
    mobilityDiff: 4.3367,
    cornerControlDiff: 3.9537,
    occupiedBoardDiff: -3.9996,
    imminentRoundDamageDiff: 47.3303,
    activeTurnTempo: 14.3674,
    specialCardValue: 15.9965,
    deckTrimValue: 0,
    eliteRouteBias: -1.4181,
    restRouteBias: 2.3808,
    forgeRouteBias: 12,
    treasureRouteBias: 1.4912,
    branchingRouteBias: 9.7904,
    riskTolerance: -2.1637,
    aggressionPlanBias: -4.9473,
    controlPlanBias: 3.1288,
    tempoPlanBias: -7.4007,
    fusionPlanBias: 5.6746,
    precisionPlanBias: 3.5041,
    uncommonCardBias: 10,
    rareCardBias: 4.2991,
    charmSynergyBias: -4,
    duplicateCardPenalty: 9.9456,
    enemyProfileRespect: 10,
  },
};
