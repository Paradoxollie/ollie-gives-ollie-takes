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
  name: "trained-bot-20261122-233821",
  trainedAt: "2026-11-22T23:38:21.061Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 35.7787,
    shieldDiff: 40.2739,
    drawBonusDiff: 48.6865,
    manaBonusDiff: 0,
    poisonDiff: 70.1372,
    controlDiff: 110.9133,
    boardStrengthDiff: 13.1683,
    boardManaDiff: 28.2135,
    stackSynergyDiff: 99.9455,
    reserveStrengthDiff: 17.1438,
    handStrengthDiff: -2.5772,
    mobilityDiff: 24.1957,
    cornerControlDiff: 6.2842,
    occupiedBoardDiff: -18.6442,
    imminentRoundDamageDiff: 81.6196,
    activeTurnTempo: 47.2356,
    specialCardValue: 12.5026,
    deckTrimValue: 3.7674,
    eliteRouteBias: 3.7479,
    restRouteBias: 7.5379,
    forgeRouteBias: 0.5103,
    treasureRouteBias: 10.7862,
    branchingRouteBias: 2.3116,
    riskTolerance: 8,
    aggressionPlanBias: -8.4571,
    controlPlanBias: 2.0671,
    tempoPlanBias: -10.4456,
    fusionPlanBias: 5.3368,
    precisionPlanBias: -9.7133,
    uncommonCardBias: 6.2107,
    rareCardBias: 9.1129,
    charmSynergyBias: 8.7531,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 8.1368,
  },
};
