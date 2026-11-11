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
  name: "trained-bot-20261111-062855",
  trainedAt: "2026-11-11T06:28:55.897Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 59.0507,
    shieldDiff: 87.1881,
    drawBonusDiff: 1.5013,
    manaBonusDiff: 24.8022,
    poisonDiff: 82.186,
    controlDiff: 131.6371,
    boardStrengthDiff: 13.8022,
    boardManaDiff: 15.0931,
    stackSynergyDiff: 100.0105,
    reserveStrengthDiff: 30,
    handStrengthDiff: 0.4107,
    mobilityDiff: 30,
    cornerControlDiff: 11.7704,
    occupiedBoardDiff: -23.3843,
    imminentRoundDamageDiff: 99.4018,
    activeTurnTempo: 16.8776,
    specialCardValue: 0,
    deckTrimValue: 6.392,
    eliteRouteBias: 6.2315,
    restRouteBias: 7.454,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 6.2377,
    riskTolerance: -2.207,
    aggressionPlanBias: -10.3093,
    controlPlanBias: 7.9929,
    tempoPlanBias: -4.8284,
    fusionPlanBias: 0.8994,
    precisionPlanBias: -1.6966,
    uncommonCardBias: 0.2063,
    rareCardBias: 5.5574,
    charmSynergyBias: 8.2024,
    duplicateCardPenalty: 2.9711,
    enemyProfileRespect: 4.391,
  },
};
