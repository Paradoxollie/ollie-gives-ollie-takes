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
  name: "trained-bot-20260601-052006",
  trainedAt: "2026-06-01T05:20:06.188Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 83.8235,
    controlDiff: 5.1274,
    boardStrengthDiff: 36.4693,
    reserveStrengthDiff: 61.594,
    handStrengthDiff: 3.4012,
    mobilityDiff: 8.9937,
    cornerControlDiff: 24.575,
    occupiedBoardDiff: 17.4642,
    imminentRoundDamageDiff: -11.4422,
    activeTurnTempo: -18.1029,
    specialCardValue: 6.6904,
    deckTrimValue: -5.8153,
    eliteRouteBias: -55.4149,
    restRouteBias: 11.8436,
    forgeRouteBias: 19.9778,
    treasureRouteBias: 31.7843,
    branchingRouteBias: 12.7031,
    riskTolerance: 36.6086,
    aggressionPlanBias: 22.1942,
    controlPlanBias: 22.68,
    tempoPlanBias: 3.6789,
    fusionPlanBias: 1.7257,
    precisionPlanBias: 2.4768,
    uncommonCardBias: 31.5619,
    rareCardBias: 41.0966,
    charmSynergyBias: 59.3488,
    duplicateCardPenalty: 3.3142,
    enemyProfileRespect: 4.0484,
  },
};
