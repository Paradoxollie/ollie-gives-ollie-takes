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
  name: "trained-bot-20261121-071325",
  trainedAt: "2026-11-21T07:13:25.696Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 50.6636,
    shieldDiff: 69.0045,
    drawBonusDiff: 37.7873,
    manaBonusDiff: 0,
    poisonDiff: 76.2965,
    controlDiff: 124.5082,
    boardStrengthDiff: 16.2043,
    boardManaDiff: 15.5319,
    stackSynergyDiff: 108.088,
    reserveStrengthDiff: 24.2772,
    handStrengthDiff: -0.2043,
    mobilityDiff: 28.0888,
    cornerControlDiff: 6.8977,
    occupiedBoardDiff: -20.8436,
    imminentRoundDamageDiff: 75.3357,
    activeTurnTempo: 29.6884,
    specialCardValue: 3.9836,
    deckTrimValue: 0,
    eliteRouteBias: -7.0089,
    restRouteBias: 6.2932,
    forgeRouteBias: 8.6888,
    treasureRouteBias: 6.1805,
    branchingRouteBias: 6.9844,
    riskTolerance: 0.0551,
    aggressionPlanBias: -9.65,
    controlPlanBias: -11.4396,
    tempoPlanBias: -8.9783,
    fusionPlanBias: 1.1838,
    precisionPlanBias: -7.0517,
    uncommonCardBias: 4.1608,
    rareCardBias: 3.4628,
    charmSynergyBias: 11.1307,
    duplicateCardPenalty: 2.3088,
    enemyProfileRespect: 0.2623,
  },
};
