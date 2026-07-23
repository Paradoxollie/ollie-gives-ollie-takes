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
  name: "trained-bot-20260723-053809",
  trainedAt: "2026-07-23T05:38:09.549Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 116.8,
    shieldDiff: 77.9559,
    drawBonusDiff: 40.5069,
    manaBonusDiff: 56.0379,
    poisonDiff: 71.1862,
    controlDiff: 64.4713,
    boardStrengthDiff: 33.0181,
    boardManaDiff: 3.6114,
    stackSynergyDiff: 8.2467,
    reserveStrengthDiff: 25.0741,
    handStrengthDiff: 8.6722,
    mobilityDiff: 19.4519,
    cornerControlDiff: 2.7622,
    occupiedBoardDiff: -3.8297,
    imminentRoundDamageDiff: 39.3234,
    activeTurnTempo: 21.4868,
    specialCardValue: 17.625,
    deckTrimValue: 4.3753,
    eliteRouteBias: 0.3333,
    restRouteBias: 8.7109,
    forgeRouteBias: 0.0135,
    treasureRouteBias: 9.5352,
    branchingRouteBias: 9.8775,
    riskTolerance: 4.902,
    aggressionPlanBias: 6.9706,
    controlPlanBias: 18,
    tempoPlanBias: -9.6636,
    fusionPlanBias: 9.287,
    precisionPlanBias: 7.8958,
    uncommonCardBias: 2.1455,
    rareCardBias: 12,
    charmSynergyBias: 2.9361,
    duplicateCardPenalty: 9.586,
    enemyProfileRespect: 5.742,
  },
};
