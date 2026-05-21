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
  name: "trained-bot-20260521-131626",
  trainedAt: "2026-05-21T13:16:26.832Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 28.5442,
    controlDiff: 8.9396,
    boardStrengthDiff: 18.7369,
    reserveStrengthDiff: 47.039,
    handStrengthDiff: -9.5186,
    mobilityDiff: 12.9694,
    cornerControlDiff: 24.7264,
    occupiedBoardDiff: 4.198,
    imminentRoundDamageDiff: -13.7726,
    activeTurnTempo: -26.4967,
    specialCardValue: -17.6637,
    deckTrimValue: -23.3747,
    eliteRouteBias: -44.739,
    restRouteBias: 2.5183,
    forgeRouteBias: -7.3836,
    treasureRouteBias: 18.6255,
    branchingRouteBias: 29.0671,
    riskTolerance: 9.7879,
    aggressionPlanBias: 31.0361,
    controlPlanBias: 17.4551,
    tempoPlanBias: 1.3151,
    fusionPlanBias: 26.2826,
    precisionPlanBias: -1.7084,
    uncommonCardBias: -2.8881,
    rareCardBias: 7.7324,
    charmSynergyBias: 36.14,
    duplicateCardPenalty: -4.9307,
    enemyProfileRespect: 36.3207,
  },
};
