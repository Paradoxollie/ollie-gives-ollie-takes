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
  name: "trained-bot-20260913-174815",
  trainedAt: "2026-09-13T17:48:15.028Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.9363,
    shieldDiff: 108.0509,
    drawBonusDiff: 37.0409,
    manaBonusDiff: 88.4351,
    poisonDiff: 54.1173,
    controlDiff: 43.937,
    boardStrengthDiff: 4.0101,
    boardManaDiff: 56.0567,
    stackSynergyDiff: 32.2167,
    reserveStrengthDiff: 14.4619,
    handStrengthDiff: -4.7188,
    mobilityDiff: 18.2221,
    cornerControlDiff: 2.4194,
    occupiedBoardDiff: -19.859,
    imminentRoundDamageDiff: 59.7222,
    activeTurnTempo: 36.202,
    specialCardValue: 13.8171,
    deckTrimValue: 0,
    eliteRouteBias: 1.2277,
    restRouteBias: 12,
    forgeRouteBias: 5.5427,
    treasureRouteBias: 12,
    branchingRouteBias: 8.6041,
    riskTolerance: -2.7779,
    aggressionPlanBias: -9.7277,
    controlPlanBias: 16.0334,
    tempoPlanBias: 2.1735,
    fusionPlanBias: 0.1466,
    precisionPlanBias: 9.6819,
    uncommonCardBias: 10,
    rareCardBias: 4.8168,
    charmSynergyBias: -4,
    duplicateCardPenalty: 0.5158,
    enemyProfileRespect: 9.4659,
  },
};
