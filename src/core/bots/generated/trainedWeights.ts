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
  name: "trained-bot-20261121-101453",
  trainedAt: "2026-11-21T10:14:53.145Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 50.6674,
    shieldDiff: 63.5987,
    drawBonusDiff: 37.8955,
    manaBonusDiff: 0,
    poisonDiff: 72.416,
    controlDiff: 118.9598,
    boardStrengthDiff: 15.4925,
    boardManaDiff: 16.2259,
    stackSynergyDiff: 107.3321,
    reserveStrengthDiff: 25.8783,
    handStrengthDiff: -3.1535,
    mobilityDiff: 29.8966,
    cornerControlDiff: 3.6831,
    occupiedBoardDiff: -18.0938,
    imminentRoundDamageDiff: 71.9162,
    activeTurnTempo: 33.3128,
    specialCardValue: 0,
    deckTrimValue: 2.8002,
    eliteRouteBias: -0.6338,
    restRouteBias: 3.6096,
    forgeRouteBias: 8.3748,
    treasureRouteBias: 10.1844,
    branchingRouteBias: 8.6129,
    riskTolerance: 4.4984,
    aggressionPlanBias: -7.966,
    controlPlanBias: -12,
    tempoPlanBias: -5.8124,
    fusionPlanBias: 15.6796,
    precisionPlanBias: -5.0906,
    uncommonCardBias: 0.5627,
    rareCardBias: 4.5327,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 8.898,
  },
};
