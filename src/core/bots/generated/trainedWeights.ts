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
  name: "trained-bot-20261025-162618",
  trainedAt: "2026-10-25T16:26:18.192Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.727,
    shieldDiff: 89.5502,
    drawBonusDiff: 15.5932,
    manaBonusDiff: 53.64075,
    poisonDiff: 81.7997,
    controlDiff: 81.9915,
    boardStrengthDiff: 18.33265,
    boardManaDiff: 20.30175,
    stackSynergyDiff: 91.99510000000001,
    reserveStrengthDiff: 17.19325,
    handStrengthDiff: -2.37125,
    mobilityDiff: 27.6306,
    cornerControlDiff: 3.9033,
    occupiedBoardDiff: -19.2681,
    imminentRoundDamageDiff: 94.36850000000001,
    activeTurnTempo: 16.98565,
    specialCardValue: 8.8814,
    deckTrimValue: 8.6495,
    eliteRouteBias: -6.464449999999999,
    restRouteBias: 6.5979,
    forgeRouteBias: 9.0755,
    treasureRouteBias: 9.62985,
    branchingRouteBias: 8.66335,
    riskTolerance: 6.29725,
    aggressionPlanBias: -12,
    controlPlanBias: -8.09155,
    tempoPlanBias: -3.34795,
    fusionPlanBias: -3.7034000000000002,
    precisionPlanBias: -6.5011,
    uncommonCardBias: 5.5064,
    rareCardBias: 0.5699,
    charmSynergyBias: 8.5277,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.2827,
  },
};
