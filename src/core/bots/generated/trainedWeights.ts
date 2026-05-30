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
  name: "trained-bot-20260530-113432",
  trainedAt: "2026-05-30T11:34:32.814Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 65.9651,
    controlDiff: 12.7795,
    boardStrengthDiff: 32.8162,
    reserveStrengthDiff: 58.3951,
    handStrengthDiff: -3.5252,
    mobilityDiff: -2.71,
    cornerControlDiff: 37.7747,
    occupiedBoardDiff: 22.1761,
    imminentRoundDamageDiff: -24.4637,
    activeTurnTempo: -24.0211,
    specialCardValue: -0.0506,
    deckTrimValue: -11.1743,
    eliteRouteBias: -67.2917,
    restRouteBias: -8.2823,
    forgeRouteBias: 18.8504,
    treasureRouteBias: 18.6036,
    branchingRouteBias: 14.6732,
    riskTolerance: 41.9119,
    aggressionPlanBias: 11.8546,
    controlPlanBias: 32.3524,
    tempoPlanBias: -6.8894,
    fusionPlanBias: -2.0715,
    precisionPlanBias: 4.9037,
    uncommonCardBias: 31.9493,
    rareCardBias: 43.4736,
    charmSynergyBias: 34.4618,
    duplicateCardPenalty: 6.7427,
    enemyProfileRespect: -3.8094,
  },
};
