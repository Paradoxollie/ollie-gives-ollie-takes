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
  name: "trained-bot-20260629-122321",
  trainedAt: "2026-06-29T12:23:21.215Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 108.2391,
    shieldDiff: 58.0855,
    drawBonusDiff: 4.5829,
    manaBonusDiff: 79.5107,
    poisonDiff: 64.8652,
    controlDiff: 12.247,
    boardStrengthDiff: 22.7191,
    boardManaDiff: 14.697,
    stackSynergyDiff: 4.7139,
    reserveStrengthDiff: 19.3436,
    handStrengthDiff: 32.0367,
    mobilityDiff: 14.9929,
    cornerControlDiff: 10.2038,
    occupiedBoardDiff: 34.9166,
    imminentRoundDamageDiff: 45.7668,
    activeTurnTempo: 11.1855,
    specialCardValue: 13.6444,
    deckTrimValue: 0,
    eliteRouteBias: -5.3039,
    restRouteBias: 8.31,
    forgeRouteBias: 0.6329,
    treasureRouteBias: 0.1988,
    branchingRouteBias: 5.5478,
    riskTolerance: 1.9693,
    aggressionPlanBias: 0.9572,
    controlPlanBias: 13.8727,
    tempoPlanBias: -9.4332,
    fusionPlanBias: 1.7201,
    precisionPlanBias: 9.5256,
    uncommonCardBias: 6.2341,
    rareCardBias: 12,
    charmSynergyBias: 4.094,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 8.777,
  },
};
