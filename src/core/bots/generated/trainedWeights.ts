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
  name: "trained-bot-20261118-161548",
  trainedAt: "2026-11-18T16:15:48.108Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 50.9385,
    shieldDiff: 68.9221,
    drawBonusDiff: 26.0113,
    manaBonusDiff: 6.5272,
    poisonDiff: 81.8562,
    controlDiff: 117.4392,
    boardStrengthDiff: 16.0893,
    boardManaDiff: 22.6538,
    stackSynergyDiff: 118.549,
    reserveStrengthDiff: 22.955,
    handStrengthDiff: -1.3427,
    mobilityDiff: 29.9762,
    cornerControlDiff: 9.1657,
    occupiedBoardDiff: -31.6099,
    imminentRoundDamageDiff: 70.9014,
    activeTurnTempo: 15.325,
    specialCardValue: 9.7825,
    deckTrimValue: 4.1831,
    eliteRouteBias: -7.5933,
    restRouteBias: 12,
    forgeRouteBias: 9.0081,
    treasureRouteBias: 6.9328,
    branchingRouteBias: 10,
    riskTolerance: 7.9982,
    aggressionPlanBias: -11.6033,
    controlPlanBias: -8.3755,
    tempoPlanBias: -7.0401,
    fusionPlanBias: -8.1418,
    precisionPlanBias: -11.5756,
    uncommonCardBias: -4,
    rareCardBias: 5.8638,
    charmSynergyBias: 7.8506,
    duplicateCardPenalty: 2.0179,
    enemyProfileRespect: 0,
  },
};
