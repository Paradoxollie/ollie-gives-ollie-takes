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
  name: "trained-bot-20260814-023356",
  trainedAt: "2026-08-14T02:33:56.506Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.0817,
    shieldDiff: 92.7662,
    drawBonusDiff: 50.8116,
    manaBonusDiff: 92.4285,
    poisonDiff: 49.8169,
    controlDiff: 79.1076,
    boardStrengthDiff: 11.9984,
    boardManaDiff: 29.446,
    stackSynergyDiff: 22.805,
    reserveStrengthDiff: -9.504,
    handStrengthDiff: 38.3738,
    mobilityDiff: 3.8171,
    cornerControlDiff: 3.4259,
    occupiedBoardDiff: 11.9785,
    imminentRoundDamageDiff: 41.781,
    activeTurnTempo: 39.4719,
    specialCardValue: 15.4878,
    deckTrimValue: 2.4653,
    eliteRouteBias: 2.837,
    restRouteBias: 11.684,
    forgeRouteBias: 0,
    treasureRouteBias: 7.3264,
    branchingRouteBias: 6.3394,
    riskTolerance: 4.2191,
    aggressionPlanBias: 4.9031,
    controlPlanBias: 5.086,
    tempoPlanBias: -5.9881,
    fusionPlanBias: 18,
    precisionPlanBias: 13.3192,
    uncommonCardBias: 2.9306,
    rareCardBias: 4.6302,
    charmSynergyBias: 11.1887,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.8824,
  },
};
