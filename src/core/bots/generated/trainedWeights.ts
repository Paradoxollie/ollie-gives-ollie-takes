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
  name: "trained-bot-20261008-204237",
  trainedAt: "2026-10-08T20:42:37.674Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.1574,
    shieldDiff: 74.8458,
    drawBonusDiff: 19.8896,
    manaBonusDiff: 76.8972,
    poisonDiff: 62.2502,
    controlDiff: 35.571,
    boardStrengthDiff: 20.4953,
    boardManaDiff: 77.4668,
    stackSynergyDiff: 61.0371,
    reserveStrengthDiff: 27.0585,
    handStrengthDiff: 13.3773,
    mobilityDiff: -1.0336,
    cornerControlDiff: 5.5743,
    occupiedBoardDiff: -7.4758,
    imminentRoundDamageDiff: 48.4324,
    activeTurnTempo: 15.3632,
    specialCardValue: 11.5494,
    deckTrimValue: 0,
    eliteRouteBias: 1.3654,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 2.351,
    branchingRouteBias: 7.5939,
    riskTolerance: -4,
    aggressionPlanBias: -1.8638,
    controlPlanBias: 9.4784,
    tempoPlanBias: -7.1167,
    fusionPlanBias: 8.053,
    precisionPlanBias: 2.8338,
    uncommonCardBias: 10,
    rareCardBias: 0.8691,
    charmSynergyBias: -4,
    duplicateCardPenalty: 9.9133,
    enemyProfileRespect: 8.4328,
  },
};
