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
  name: "trained-bot-20261126-033605",
  trainedAt: "2026-11-26T03:36:05.952Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 53.2454,
    shieldDiff: 29.0157,
    drawBonusDiff: 46.5849,
    manaBonusDiff: 2.4636,
    poisonDiff: 77.8785,
    controlDiff: 119.4986,
    boardStrengthDiff: 15.7547,
    boardManaDiff: 15.2386,
    stackSynergyDiff: 103.0974,
    reserveStrengthDiff: 15.9405,
    handStrengthDiff: -10,
    mobilityDiff: 26.8409,
    cornerControlDiff: 5.6937,
    occupiedBoardDiff: -13.6997,
    imminentRoundDamageDiff: 85.0223,
    activeTurnTempo: 34.4516,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: -3.6167,
    restRouteBias: 4.561,
    forgeRouteBias: 0.5557,
    treasureRouteBias: 0.9916,
    branchingRouteBias: 7.9602,
    riskTolerance: 7.4602,
    aggressionPlanBias: -3.558,
    controlPlanBias: 1.7234,
    tempoPlanBias: -2.1763,
    fusionPlanBias: 17.2735,
    precisionPlanBias: -9.4719,
    uncommonCardBias: -4,
    rareCardBias: 6.2028,
    charmSynergyBias: 0.0892,
    duplicateCardPenalty: 8.4596,
    enemyProfileRespect: 3.8475,
  },
};
