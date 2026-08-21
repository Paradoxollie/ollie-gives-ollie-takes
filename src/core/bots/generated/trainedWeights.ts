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
  name: "trained-bot-20260821-130157",
  trainedAt: "2026-08-21T13:01:57.590Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.8911,
    shieldDiff: 105.8726,
    drawBonusDiff: 59.3529,
    manaBonusDiff: 94.4999,
    poisonDiff: 72.5023,
    controlDiff: 82.5947,
    boardStrengthDiff: 7.3415,
    boardManaDiff: 42.5045,
    stackSynergyDiff: 3.5854,
    reserveStrengthDiff: 6.7967,
    handStrengthDiff: 36.0889,
    mobilityDiff: 5.6575,
    cornerControlDiff: 13.0198,
    occupiedBoardDiff: 6.8731,
    imminentRoundDamageDiff: 75.0366,
    activeTurnTempo: 49.6963,
    specialCardValue: 4.5529,
    deckTrimValue: 0,
    eliteRouteBias: -3.9685,
    restRouteBias: 4.3498,
    forgeRouteBias: 0,
    treasureRouteBias: 8.5666,
    branchingRouteBias: 3.9172,
    riskTolerance: -4,
    aggressionPlanBias: -6.5136,
    controlPlanBias: 13.8676,
    tempoPlanBias: -2.0441,
    fusionPlanBias: -5.024,
    precisionPlanBias: -11.4057,
    uncommonCardBias: -0.0821,
    rareCardBias: 4.8644,
    charmSynergyBias: 5.9955,
    duplicateCardPenalty: 5.6437,
    enemyProfileRespect: 10,
  },
};
