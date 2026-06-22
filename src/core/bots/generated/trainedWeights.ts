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
  name: "trained-bot-20260622-014437",
  trainedAt: "2026-06-22T01:44:37.508Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.5454,
    shieldDiff: 65.5613,
    drawBonusDiff: 14.7711,
    manaBonusDiff: 80.4071,
    poisonDiff: 89.4778,
    controlDiff: 19.6634,
    boardStrengthDiff: 44.8936,
    boardManaDiff: 8.2311,
    stackSynergyDiff: 7.2258,
    reserveStrengthDiff: 29.978,
    handStrengthDiff: 50,
    mobilityDiff: 8.8957,
    cornerControlDiff: 51.6835,
    occupiedBoardDiff: 8.5998,
    imminentRoundDamageDiff: 54.2289,
    activeTurnTempo: 13.356,
    specialCardValue: 15.1723,
    deckTrimValue: 1.9893,
    eliteRouteBias: -8,
    restRouteBias: 12,
    forgeRouteBias: 7.3068,
    treasureRouteBias: 5.2879,
    branchingRouteBias: 6.2577,
    riskTolerance: 8,
    aggressionPlanBias: -7.3551,
    controlPlanBias: 12.7513,
    tempoPlanBias: 11.4393,
    fusionPlanBias: -6.4615,
    precisionPlanBias: 2.9375,
    uncommonCardBias: -2.4541,
    rareCardBias: -2.1681,
    charmSynergyBias: -1.2279,
    duplicateCardPenalty: 3.4665,
    enemyProfileRespect: 8.9243,
  },
};
