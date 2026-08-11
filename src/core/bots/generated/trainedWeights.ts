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
  name: "trained-bot-20260811-152435",
  trainedAt: "2026-08-11T15:24:35.803Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.7807,
    shieldDiff: 95.3813,
    drawBonusDiff: 38.3758,
    manaBonusDiff: 92.5281,
    poisonDiff: 38.8254,
    controlDiff: 79.712,
    boardStrengthDiff: 22.9103,
    boardManaDiff: 39.287,
    stackSynergyDiff: 30.1468,
    reserveStrengthDiff: -9.8128,
    handStrengthDiff: 46.6313,
    mobilityDiff: 3.2856,
    cornerControlDiff: 10.7831,
    occupiedBoardDiff: 16.4707,
    imminentRoundDamageDiff: 39.7655,
    activeTurnTempo: 31.243,
    specialCardValue: 15.9546,
    deckTrimValue: 8.4484,
    eliteRouteBias: 2.35,
    restRouteBias: 4.4279,
    forgeRouteBias: 0,
    treasureRouteBias: 2.7599,
    branchingRouteBias: 0,
    riskTolerance: 7.8596,
    aggressionPlanBias: 2.4366,
    controlPlanBias: 7.2671,
    tempoPlanBias: -11.9416,
    fusionPlanBias: 0.8731,
    precisionPlanBias: 1.8618,
    uncommonCardBias: 1.2831,
    rareCardBias: 2.4382,
    charmSynergyBias: -0.4837,
    duplicateCardPenalty: 9.9491,
    enemyProfileRespect: 3.5651,
  },
};
