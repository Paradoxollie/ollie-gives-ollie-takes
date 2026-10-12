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
  name: "trained-bot-20261012-153149",
  trainedAt: "2026-10-12T15:31:49.102Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.8847,
    shieldDiff: 58.6436,
    drawBonusDiff: 6.8899,
    manaBonusDiff: 82.8073,
    poisonDiff: 68.0731,
    controlDiff: 43.9282,
    boardStrengthDiff: 33.9907,
    boardManaDiff: 63.2515,
    stackSynergyDiff: 72.1263,
    reserveStrengthDiff: 30,
    handStrengthDiff: 16.2598,
    mobilityDiff: 14.3509,
    cornerControlDiff: 10.3931,
    occupiedBoardDiff: -10.4384,
    imminentRoundDamageDiff: 47.0635,
    activeTurnTempo: 19.6511,
    specialCardValue: 14.0433,
    deckTrimValue: 0,
    eliteRouteBias: 0.8037,
    restRouteBias: 6.3349,
    forgeRouteBias: 12,
    treasureRouteBias: 0.7199,
    branchingRouteBias: 2.9952,
    riskTolerance: 0.8954,
    aggressionPlanBias: -9.4913,
    controlPlanBias: -1.0555,
    tempoPlanBias: 4.3096,
    fusionPlanBias: 12.9827,
    precisionPlanBias: -5.7891,
    uncommonCardBias: 8.0115,
    rareCardBias: 12,
    charmSynergyBias: -3.7541,
    duplicateCardPenalty: 6.8824,
    enemyProfileRespect: 10,
  },
};
