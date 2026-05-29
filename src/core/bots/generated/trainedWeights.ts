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
  name: "trained-bot-20260529-121235",
  trainedAt: "2026-05-29T12:12:35.444Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 52.5514,
    controlDiff: 20.0859,
    boardStrengthDiff: 41.7538,
    reserveStrengthDiff: 47.0871,
    handStrengthDiff: -20.5637,
    mobilityDiff: 0.0235,
    cornerControlDiff: 45.7005,
    occupiedBoardDiff: 26.4748,
    imminentRoundDamageDiff: -13.7128,
    activeTurnTempo: -24.2354,
    specialCardValue: 0.9726,
    deckTrimValue: -24.0219,
    eliteRouteBias: -65.301,
    restRouteBias: -10.3745,
    forgeRouteBias: 23.8954,
    treasureRouteBias: 22.3527,
    branchingRouteBias: 15.6448,
    riskTolerance: 48.0372,
    aggressionPlanBias: 5.553,
    controlPlanBias: 33.8462,
    tempoPlanBias: -6.9127,
    fusionPlanBias: 4.0865,
    precisionPlanBias: 3.7672,
    uncommonCardBias: 22.4881,
    rareCardBias: 45.1207,
    charmSynergyBias: 36.934,
    duplicateCardPenalty: -10.2552,
    enemyProfileRespect: 20.585,
  },
};
