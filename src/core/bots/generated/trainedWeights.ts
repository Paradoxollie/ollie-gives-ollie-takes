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
  name: "trained-bot-20260618-052435",
  trainedAt: "2026-06-18T05:24:35.454Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.9977,
    shieldDiff: 85.3868,
    drawBonusDiff: 20.3881,
    manaBonusDiff: 80.3464,
    poisonDiff: 99.3193,
    controlDiff: 19.9827,
    boardStrengthDiff: 42.5535,
    boardManaDiff: 20.5953,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 19.4669,
    handStrengthDiff: 43.6627,
    mobilityDiff: -8.7828,
    cornerControlDiff: 67.586,
    occupiedBoardDiff: 21.1325,
    imminentRoundDamageDiff: 28.9049,
    activeTurnTempo: 10.026,
    specialCardValue: 14.4735,
    deckTrimValue: 0.4144,
    eliteRouteBias: -8,
    restRouteBias: 11.5911,
    forgeRouteBias: 8.2343,
    treasureRouteBias: 5.9151,
    branchingRouteBias: 7.3301,
    riskTolerance: 3.2557,
    aggressionPlanBias: -4.206,
    controlPlanBias: 1.4235,
    tempoPlanBias: -4.5939,
    fusionPlanBias: -2.9992,
    precisionPlanBias: 6.6918,
    uncommonCardBias: -4,
    rareCardBias: 1.6764,
    charmSynergyBias: 3.9774,
    duplicateCardPenalty: 7.7835,
    enemyProfileRespect: 3.9247,
  },
};
