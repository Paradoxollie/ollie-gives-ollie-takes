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
  name: "trained-bot-20260713-213720",
  trainedAt: "2026-07-13T21:37:20.271Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 114.671,
    shieldDiff: 65.5148,
    drawBonusDiff: 3.8216,
    manaBonusDiff: 59.5591,
    poisonDiff: 58.3834,
    controlDiff: 38.7218,
    boardStrengthDiff: 37.6195,
    boardManaDiff: 3.6247,
    stackSynergyDiff: 23.9545,
    reserveStrengthDiff: 14.4255,
    handStrengthDiff: 11.3595,
    mobilityDiff: 20.906,
    cornerControlDiff: 0,
    occupiedBoardDiff: 26.8609,
    imminentRoundDamageDiff: 76.6319,
    activeTurnTempo: 14.2732,
    specialCardValue: 16.6741,
    deckTrimValue: 1.8011,
    eliteRouteBias: 5.2125,
    restRouteBias: 5.5628,
    forgeRouteBias: 8.9053,
    treasureRouteBias: 12,
    branchingRouteBias: 4.4438,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: 10.6908,
    tempoPlanBias: -9.7303,
    fusionPlanBias: -8.0431,
    precisionPlanBias: -1.6105,
    uncommonCardBias: 2.1532,
    rareCardBias: -4,
    charmSynergyBias: -0.4928,
    duplicateCardPenalty: 7.8217,
    enemyProfileRespect: 8.5639,
  },
};
