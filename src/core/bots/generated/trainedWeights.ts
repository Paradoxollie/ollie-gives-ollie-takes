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
  name: "trained-bot-20260524-221402",
  trainedAt: "2026-05-24T22:14:02.369Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 38.998,
    controlDiff: 11.7701,
    boardStrengthDiff: 24.2978,
    reserveStrengthDiff: 25.8241,
    handStrengthDiff: 21.2476,
    mobilityDiff: 11.2829,
    cornerControlDiff: 28.7153,
    occupiedBoardDiff: 24.4139,
    imminentRoundDamageDiff: -21.5168,
    activeTurnTempo: -27.4186,
    specialCardValue: -0.0523,
    deckTrimValue: -39.6241,
    eliteRouteBias: -58.6218,
    restRouteBias: -4.4888,
    forgeRouteBias: 12.7037,
    treasureRouteBias: 21.8789,
    branchingRouteBias: 29.1192,
    riskTolerance: 25.5646,
    aggressionPlanBias: 16.9403,
    controlPlanBias: 14.4939,
    tempoPlanBias: 3.9697,
    fusionPlanBias: 4.4467,
    precisionPlanBias: 10.2767,
    uncommonCardBias: 11.0418,
    rareCardBias: 19.6046,
    charmSynergyBias: 28.8519,
    duplicateCardPenalty: -15.6775,
    enemyProfileRespect: 19.9714,
  },
};
