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
  name: "trained-bot-20261125-191926",
  trainedAt: "2026-11-25T19:19:26.387Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 51.335800000000006,
    shieldDiff: 30.51705,
    drawBonusDiff: 50.5063,
    manaBonusDiff: 7.8389,
    poisonDiff: 71.42465,
    controlDiff: 116.79159999999999,
    boardStrengthDiff: 19.0176,
    boardManaDiff: 19.651049999999998,
    stackSynergyDiff: 102.4439,
    reserveStrengthDiff: 16.0542,
    handStrengthDiff: -6.28595,
    mobilityDiff: 30,
    cornerControlDiff: 9.75985,
    occupiedBoardDiff: -14.7251,
    imminentRoundDamageDiff: 87.85075,
    activeTurnTempo: 39.809250000000006,
    specialCardValue: 17.9072,
    deckTrimValue: 1.3183,
    eliteRouteBias: -5.2793,
    restRouteBias: 6.3424,
    forgeRouteBias: 2.46845,
    treasureRouteBias: 1.58145,
    branchingRouteBias: 7.0769,
    riskTolerance: 0.0737000000000001,
    aggressionPlanBias: 1.2074000000000003,
    controlPlanBias: -4.90095,
    tempoPlanBias: -1.67885,
    fusionPlanBias: 17.66605,
    precisionPlanBias: -6.46235,
    uncommonCardBias: 0.6834,
    rareCardBias: 1.20505,
    charmSynergyBias: 1.57435,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.90485,
  },
};
