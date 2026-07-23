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
  name: "trained-bot-20260723-162553",
  trainedAt: "2026-07-23T16:25:53.029Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 116.032,
    shieldDiff: 76.3409,
    drawBonusDiff: 38.4798,
    manaBonusDiff: 59.0936,
    poisonDiff: 73.113,
    controlDiff: 65.2934,
    boardStrengthDiff: 36.3001,
    boardManaDiff: 6.1191,
    stackSynergyDiff: 7.2906,
    reserveStrengthDiff: 18.0088,
    handStrengthDiff: 5.7657,
    mobilityDiff: 26.9696,
    cornerControlDiff: 3.3444,
    occupiedBoardDiff: -4.1627,
    imminentRoundDamageDiff: 35.1583,
    activeTurnTempo: 30.8474,
    specialCardValue: 18,
    deckTrimValue: 5.2767,
    eliteRouteBias: -1.5701,
    restRouteBias: 1.363,
    forgeRouteBias: 0.0809,
    treasureRouteBias: 4.1611,
    branchingRouteBias: 10,
    riskTolerance: 6.336,
    aggressionPlanBias: 4.8335,
    controlPlanBias: 17.1334,
    tempoPlanBias: -7.3687,
    fusionPlanBias: 12.915,
    precisionPlanBias: 4.7682,
    uncommonCardBias: 4.3216,
    rareCardBias: 12,
    charmSynergyBias: 0.6912,
    duplicateCardPenalty: 4.1953,
    enemyProfileRespect: 4.4052,
  },
};
