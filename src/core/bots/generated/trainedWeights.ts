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
  name: "trained-bot-20260621-151136",
  trainedAt: "2026-06-21T15:11:36.097Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.4106,
    shieldDiff: 63.7929,
    drawBonusDiff: 15.5056,
    manaBonusDiff: 76.3914,
    poisonDiff: 89.2116,
    controlDiff: 18.7103,
    boardStrengthDiff: 46.0881,
    boardManaDiff: 17.8511,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 25.742,
    handStrengthDiff: 47.4931,
    mobilityDiff: 6.6373,
    cornerControlDiff: 49.5474,
    occupiedBoardDiff: 8.2119,
    imminentRoundDamageDiff: 53.1137,
    activeTurnTempo: 15.5528,
    specialCardValue: 8.9505,
    deckTrimValue: 6.0999,
    eliteRouteBias: -0.6084,
    restRouteBias: 11.6671,
    forgeRouteBias: 5.7755,
    treasureRouteBias: 9.1081,
    branchingRouteBias: 0,
    riskTolerance: 5.2663,
    aggressionPlanBias: -8.5287,
    controlPlanBias: 8.1511,
    tempoPlanBias: 10.2179,
    fusionPlanBias: -6.2531,
    precisionPlanBias: -5.3638,
    uncommonCardBias: 3.7438,
    rareCardBias: -0.927,
    charmSynergyBias: -0.5383,
    duplicateCardPenalty: 9.5759,
    enemyProfileRespect: 7.6747,
  },
};
