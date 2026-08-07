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
  name: "trained-bot-20260807-001745",
  trainedAt: "2026-08-07T00:17:45.658Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.755,
    shieldDiff: 84.3647,
    drawBonusDiff: 39.0529,
    manaBonusDiff: 82.1939,
    poisonDiff: 29.1022,
    controlDiff: 68.9099,
    boardStrengthDiff: 10.7284,
    boardManaDiff: 36.5413,
    stackSynergyDiff: 16.5951,
    reserveStrengthDiff: 12.0151,
    handStrengthDiff: 29.4353,
    mobilityDiff: 17.6594,
    cornerControlDiff: 11.6599,
    occupiedBoardDiff: -2.5828,
    imminentRoundDamageDiff: 37.3019,
    activeTurnTempo: 25.8343,
    specialCardValue: 18,
    deckTrimValue: 4.9511,
    eliteRouteBias: -8,
    restRouteBias: 12,
    forgeRouteBias: 9.7911,
    treasureRouteBias: 10.2098,
    branchingRouteBias: 0.348,
    riskTolerance: -2.9307,
    aggressionPlanBias: 12.7414,
    controlPlanBias: 13.7762,
    tempoPlanBias: 1.6506,
    fusionPlanBias: 10.9667,
    precisionPlanBias: 10.4828,
    uncommonCardBias: 6.5802,
    rareCardBias: 1.6546,
    charmSynergyBias: 3.7491,
    duplicateCardPenalty: 2.7447,
    enemyProfileRespect: 10,
  },
};
