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
  name: "trained-bot-20260619-214219",
  trainedAt: "2026-06-19T21:42:19.978Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.4879,
    shieldDiff: 85.532,
    drawBonusDiff: 13.4731,
    manaBonusDiff: 71.5035,
    poisonDiff: 93.7103,
    controlDiff: 8.7037,
    boardStrengthDiff: 50.3196,
    boardManaDiff: 29.5596,
    stackSynergyDiff: 2.0939,
    reserveStrengthDiff: 21.1334,
    handStrengthDiff: 42.2242,
    mobilityDiff: 17.171,
    cornerControlDiff: 61.0585,
    occupiedBoardDiff: 6.7811,
    imminentRoundDamageDiff: 54.3439,
    activeTurnTempo: 9.4812,
    specialCardValue: 11.7633,
    deckTrimValue: 3.7947,
    eliteRouteBias: 4.8642,
    restRouteBias: 6.1325,
    forgeRouteBias: 9.1985,
    treasureRouteBias: 6.1227,
    branchingRouteBias: 3.6501,
    riskTolerance: 4.2545,
    aggressionPlanBias: -7.1275,
    controlPlanBias: 6.1318,
    tempoPlanBias: -7.8343,
    fusionPlanBias: -2.8178,
    precisionPlanBias: 2.4584,
    uncommonCardBias: -2.049,
    rareCardBias: 1.6069,
    charmSynergyBias: 1.1629,
    duplicateCardPenalty: 6.0388,
    enemyProfileRespect: 0,
  },
};
