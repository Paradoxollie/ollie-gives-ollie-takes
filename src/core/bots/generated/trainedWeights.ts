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
  name: "trained-bot-20260531-141401",
  trainedAt: "2026-05-31T14:14:01.931Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 72.5319,
    controlDiff: 12.5217,
    boardStrengthDiff: 38.5084,
    reserveStrengthDiff: 58.3229,
    handStrengthDiff: 0.065,
    mobilityDiff: 10.6068,
    cornerControlDiff: 33.342,
    occupiedBoardDiff: 27.404,
    imminentRoundDamageDiff: -17.4582,
    activeTurnTempo: -14.9851,
    specialCardValue: 11.3747,
    deckTrimValue: -22.9578,
    eliteRouteBias: -63.922,
    restRouteBias: 4.1358,
    forgeRouteBias: 24.6666,
    treasureRouteBias: 23.8338,
    branchingRouteBias: 15.2248,
    riskTolerance: 42.6387,
    aggressionPlanBias: 19.4251,
    controlPlanBias: 24.0268,
    tempoPlanBias: -2.9346,
    fusionPlanBias: -6.229,
    precisionPlanBias: 1.2152,
    uncommonCardBias: 32.9435,
    rareCardBias: 38.671,
    charmSynergyBias: 55.4662,
    duplicateCardPenalty: 5.1876,
    enemyProfileRespect: 1.4597,
  },
};
