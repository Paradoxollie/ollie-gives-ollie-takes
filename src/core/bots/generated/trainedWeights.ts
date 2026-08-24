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
  name: "trained-bot-20260823-204045",
  trainedAt: "2026-08-23T20:40:45.329Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.9665,
    shieldDiff: 104.757825,
    drawBonusDiff: 55.513999999999996,
    manaBonusDiff: 102.74185,
    poisonDiff: 73.928975,
    controlDiff: 86.95897500000001,
    boardStrengthDiff: 11.069275000000001,
    boardManaDiff: 62.572275000000005,
    stackSynergyDiff: 5.57805,
    reserveStrengthDiff: 6.5677,
    handStrengthDiff: 36.514700000000005,
    mobilityDiff: 2.89985,
    cornerControlDiff: 12.21445,
    occupiedBoardDiff: 0.7817500000000001,
    imminentRoundDamageDiff: 72.275925,
    activeTurnTempo: 54.2373,
    specialCardValue: 9.3703,
    deckTrimValue: 4.5253499999999995,
    eliteRouteBias: 2.69845,
    restRouteBias: 7.391274999999999,
    forgeRouteBias: 11.3083,
    treasureRouteBias: 5.612825000000001,
    branchingRouteBias: 4.6218,
    riskTolerance: 5.237475,
    aggressionPlanBias: 3.59445,
    controlPlanBias: 11.258925000000001,
    tempoPlanBias: 1.55615,
    fusionPlanBias: 0.20227500000000004,
    precisionPlanBias: 5.6426,
    uncommonCardBias: -3.752975,
    rareCardBias: 8.8508,
    charmSynergyBias: 3.71665,
    duplicateCardPenalty: 2.0974500000000003,
    enemyProfileRespect: 1.711375,
  },
};
