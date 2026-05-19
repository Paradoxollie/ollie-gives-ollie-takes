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
  name: "trained-bot-20260519-112742",
  trainedAt: "2026-05-19T11:27:42.139Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 13.2251,
    controlDiff: 12.5042,
    boardStrengthDiff: 11.0933,
    reserveStrengthDiff: 31.32,
    handStrengthDiff: -19.1521,
    mobilityDiff: 12.5787,
    cornerControlDiff: 2.235,
    occupiedBoardDiff: 5.1935,
    imminentRoundDamageDiff: 3.8147,
    activeTurnTempo: -14.176,
    specialCardValue: -16.087,
    deckTrimValue: -25.6989,
    eliteRouteBias: -34.047,
    restRouteBias: 2.5547,
    forgeRouteBias: -25.6205,
    treasureRouteBias: 21.2963,
    branchingRouteBias: 28.1408,
    riskTolerance: 5.0553,
    aggressionPlanBias: 22.3776,
    controlPlanBias: 17.2056,
    tempoPlanBias: -15.3773,
    fusionPlanBias: 16.2859,
    precisionPlanBias: 4.2176,
    uncommonCardBias: -4.9583,
    rareCardBias: 7.8355,
    charmSynergyBias: 30.8916,
    duplicateCardPenalty: -6.2325,
    enemyProfileRespect: 20.4217,
  },
};
