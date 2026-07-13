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
  name: "trained-bot-20260713-005716",
  trainedAt: "2026-07-13T00:57:16.952Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 107.6134,
    shieldDiff: 63.233,
    drawBonusDiff: 0,
    manaBonusDiff: 57.9247,
    poisonDiff: 62.9697,
    controlDiff: 34.8824,
    boardStrengthDiff: 35.2734,
    boardManaDiff: 7.9369,
    stackSynergyDiff: 19.8774,
    reserveStrengthDiff: 16.3801,
    handStrengthDiff: 13.5163,
    mobilityDiff: 20.6297,
    cornerControlDiff: 4.8824,
    occupiedBoardDiff: 33.0926,
    imminentRoundDamageDiff: 77.4976,
    activeTurnTempo: 11.8335,
    specialCardValue: 10.3547,
    deckTrimValue: 6.2564,
    eliteRouteBias: 2.5129,
    restRouteBias: 8.3044,
    forgeRouteBias: 8.4818,
    treasureRouteBias: 12,
    branchingRouteBias: 5.4454,
    riskTolerance: -3.6449,
    aggressionPlanBias: -12,
    controlPlanBias: 4.1825,
    tempoPlanBias: -6.9962,
    fusionPlanBias: -5.2688,
    precisionPlanBias: -8.0416,
    uncommonCardBias: -2.7816,
    rareCardBias: -1.5318,
    charmSynergyBias: 3.488,
    duplicateCardPenalty: 4.8508,
    enemyProfileRespect: 10,
  },
};
