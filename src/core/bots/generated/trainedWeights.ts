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
  name: "trained-bot-20260607-205937",
  trainedAt: "2026-06-07T20:59:37.518Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.8169,
    shieldDiff: 54.5417,
    drawBonusDiff: 67.3477,
    manaBonusDiff: 95.4863,
    poisonDiff: 109.031,
    controlDiff: 0.4122,
    boardStrengthDiff: 57.733,
    boardManaDiff: 0.4604,
    stackSynergyDiff: 8.5004,
    reserveStrengthDiff: 25.9352,
    handStrengthDiff: 14.689,
    mobilityDiff: 9.3792,
    cornerControlDiff: 54.5632,
    occupiedBoardDiff: 24.3434,
    imminentRoundDamageDiff: 8.5657,
    activeTurnTempo: -17.8522,
    specialCardValue: 7.7363,
    deckTrimValue: 7.6036,
    eliteRouteBias: 3.4304,
    restRouteBias: 6.0068,
    forgeRouteBias: 12,
    treasureRouteBias: 8.5867,
    branchingRouteBias: 4.8993,
    riskTolerance: 6.1598,
    aggressionPlanBias: 5.7201,
    controlPlanBias: 1.1064,
    tempoPlanBias: -10.7917,
    fusionPlanBias: 3.6553,
    precisionPlanBias: 10.3283,
    uncommonCardBias: 5.8263,
    rareCardBias: 6.3901,
    charmSynergyBias: 10.143,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
