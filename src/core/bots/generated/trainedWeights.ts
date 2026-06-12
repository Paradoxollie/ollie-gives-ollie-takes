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
  name: "trained-bot-20260612-162934",
  trainedAt: "2026-06-12T16:29:34.298Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.541,
    shieldDiff: 47.2836,
    drawBonusDiff: 61.9071,
    manaBonusDiff: 100.5253,
    poisonDiff: 99.5053,
    controlDiff: 15.5331,
    boardStrengthDiff: 60.5203,
    boardManaDiff: 7.1154,
    stackSynergyDiff: 9.9103,
    reserveStrengthDiff: 28.1889,
    handStrengthDiff: 18.3684,
    mobilityDiff: 6.1781,
    cornerControlDiff: 52.8939,
    occupiedBoardDiff: 39.2976,
    imminentRoundDamageDiff: 16.7596,
    activeTurnTempo: -3.952,
    specialCardValue: 14.3466,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 9.7729,
    forgeRouteBias: 12,
    treasureRouteBias: 7.5944,
    branchingRouteBias: 7.2081,
    riskTolerance: 1.2899,
    aggressionPlanBias: 11.0403,
    controlPlanBias: 9.9591,
    tempoPlanBias: -2.8433,
    fusionPlanBias: 9.1149,
    precisionPlanBias: 0.8875,
    uncommonCardBias: 4.9286,
    rareCardBias: -4,
    charmSynergyBias: 6.7721,
    duplicateCardPenalty: 2.9151,
    enemyProfileRespect: 9.1287,
  },
};
