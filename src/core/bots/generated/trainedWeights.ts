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
  name: "trained-bot-20260913-123737",
  trainedAt: "2026-09-13T12:37:37.275Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 65.9704,
    shieldDiff: 111.746,
    drawBonusDiff: 32.5862,
    manaBonusDiff: 95.1466,
    poisonDiff: 45.6895,
    controlDiff: 47.5396,
    boardStrengthDiff: 0,
    boardManaDiff: 57.2745,
    stackSynergyDiff: 35.7962,
    reserveStrengthDiff: 18.4278,
    handStrengthDiff: -5.8512,
    mobilityDiff: 17.1431,
    cornerControlDiff: 9.7686,
    occupiedBoardDiff: -18.1859,
    imminentRoundDamageDiff: 63.4499,
    activeTurnTempo: 38.2531,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 1.8327,
    restRouteBias: 12,
    forgeRouteBias: 1.7019,
    treasureRouteBias: 12,
    branchingRouteBias: 6.6997,
    riskTolerance: 3.9328,
    aggressionPlanBias: -12,
    controlPlanBias: 11.6323,
    tempoPlanBias: 5.0281,
    fusionPlanBias: 2.2686,
    precisionPlanBias: 5.667,
    uncommonCardBias: 10,
    rareCardBias: 7.9948,
    charmSynergyBias: -3.3162,
    duplicateCardPenalty: 3.2639,
    enemyProfileRespect: 8.5153,
  },
};
