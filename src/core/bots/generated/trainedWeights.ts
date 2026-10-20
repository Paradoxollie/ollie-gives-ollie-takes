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
  name: "trained-bot-20261019-203643",
  trainedAt: "2026-10-19T20:36:43.140Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 78.0442,
    shieldDiff: 91.7054,
    drawBonusDiff: 0,
    manaBonusDiff: 77.8998,
    poisonDiff: 57.4636,
    controlDiff: 65.181,
    boardStrengthDiff: 19.3344,
    boardManaDiff: 50.6191,
    stackSynergyDiff: 88.8659,
    reserveStrengthDiff: 12.8764,
    handStrengthDiff: 7.0268,
    mobilityDiff: 18.1715,
    cornerControlDiff: 12.9837,
    occupiedBoardDiff: -23.498,
    imminentRoundDamageDiff: 85.249,
    activeTurnTempo: 32.4073,
    specialCardValue: 13.2863,
    deckTrimValue: 9.7446,
    eliteRouteBias: 0.6081,
    restRouteBias: 7.4831,
    forgeRouteBias: 0.4639,
    treasureRouteBias: 2.3827,
    branchingRouteBias: 4.2277,
    riskTolerance: 3.4032,
    aggressionPlanBias: -0.4595,
    controlPlanBias: -3.3494,
    tempoPlanBias: -10.3694,
    fusionPlanBias: 16.6817,
    precisionPlanBias: -6.2027,
    uncommonCardBias: 2.26,
    rareCardBias: 6.8343,
    charmSynergyBias: 1.358,
    duplicateCardPenalty: 1.3486,
    enemyProfileRespect: 10,
  },
};
