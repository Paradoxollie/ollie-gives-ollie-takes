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
  name: "trained-bot-20261011-055827",
  trainedAt: "2026-10-11T05:58:27.768Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.2397,
    shieldDiff: 64.1089,
    drawBonusDiff: 21.0462,
    manaBonusDiff: 77.4135,
    poisonDiff: 73.9679,
    controlDiff: 33.5328,
    boardStrengthDiff: 19.7564,
    boardManaDiff: 61.9517,
    stackSynergyDiff: 70.7975,
    reserveStrengthDiff: 30,
    handStrengthDiff: 16.6862,
    mobilityDiff: 9.8997,
    cornerControlDiff: 4.5177,
    occupiedBoardDiff: -1.9469,
    imminentRoundDamageDiff: 46.2913,
    activeTurnTempo: 21.3118,
    specialCardValue: 17.2147,
    deckTrimValue: 0,
    eliteRouteBias: -2.9106,
    restRouteBias: 0,
    forgeRouteBias: 5.5797,
    treasureRouteBias: 2.4376,
    branchingRouteBias: 5.4259,
    riskTolerance: 1.878,
    aggressionPlanBias: -10.244,
    controlPlanBias: 1.1022,
    tempoPlanBias: -4.3332,
    fusionPlanBias: 12.1195,
    precisionPlanBias: -4.1663,
    uncommonCardBias: 0.3923,
    rareCardBias: 5.4674,
    charmSynergyBias: 2.7107,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.1432,
  },
};
