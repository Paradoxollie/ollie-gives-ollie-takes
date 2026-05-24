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
  name: "trained-bot-20260524-140438",
  trainedAt: "2026-05-24T14:04:38.970Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 36.5411,
    controlDiff: 15.9738,
    boardStrengthDiff: 25.5132,
    reserveStrengthDiff: 38.0989,
    handStrengthDiff: 16.9503,
    mobilityDiff: 4.06,
    cornerControlDiff: 28.0056,
    occupiedBoardDiff: 21.2799,
    imminentRoundDamageDiff: -11.4035,
    activeTurnTempo: -18.3476,
    specialCardValue: -2.2619,
    deckTrimValue: -40.4086,
    eliteRouteBias: -53.1397,
    restRouteBias: -9.6133,
    forgeRouteBias: 6.4909,
    treasureRouteBias: 21.8135,
    branchingRouteBias: 26.9716,
    riskTolerance: 13.5657,
    aggressionPlanBias: 24.3752,
    controlPlanBias: 10.7145,
    tempoPlanBias: 1.2974,
    fusionPlanBias: 10.4759,
    precisionPlanBias: 5.2055,
    uncommonCardBias: 12.9318,
    rareCardBias: 25.7567,
    charmSynergyBias: 37.6843,
    duplicateCardPenalty: -16.4698,
    enemyProfileRespect: 27.4032,
  },
};
