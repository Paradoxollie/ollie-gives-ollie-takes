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
  name: "trained-bot-20260906-063420",
  trainedAt: "2026-09-06T06:34:20.905Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.4713,
    shieldDiff: 118.5144,
    drawBonusDiff: 36.5696,
    manaBonusDiff: 93.0703,
    poisonDiff: 45.8794,
    controlDiff: 67.3849,
    boardStrengthDiff: 0,
    boardManaDiff: 61.4422,
    stackSynergyDiff: 22.2313,
    reserveStrengthDiff: 25.1346,
    handStrengthDiff: 5.8001,
    mobilityDiff: 27.3056,
    cornerControlDiff: 27.926,
    occupiedBoardDiff: -28.4653,
    imminentRoundDamageDiff: 90.8794,
    activeTurnTempo: 51.6876,
    specialCardValue: 8.8787,
    deckTrimValue: 6.1396,
    eliteRouteBias: 6.1057,
    restRouteBias: 0,
    forgeRouteBias: 5.643,
    treasureRouteBias: 12,
    branchingRouteBias: 1.0888,
    riskTolerance: -0.7661,
    aggressionPlanBias: 5.9476,
    controlPlanBias: 16.552,
    tempoPlanBias: -3.9055,
    fusionPlanBias: 2.7735,
    precisionPlanBias: -4.2122,
    uncommonCardBias: -1.141,
    rareCardBias: -4,
    charmSynergyBias: 11.7059,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.7234,
  },
};
