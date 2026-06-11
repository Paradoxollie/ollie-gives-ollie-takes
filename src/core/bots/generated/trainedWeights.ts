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
  name: "trained-bot-20260611-172136",
  trainedAt: "2026-06-11T17:21:36.557Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.2366,
    shieldDiff: 42.2732,
    drawBonusDiff: 68.1623,
    manaBonusDiff: 108.5423,
    poisonDiff: 98.8345,
    controlDiff: 6.2649,
    boardStrengthDiff: 45.6142,
    boardManaDiff: 3.644,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 26.232,
    handStrengthDiff: 18.7903,
    mobilityDiff: 7.9641,
    cornerControlDiff: 57.5321,
    occupiedBoardDiff: 41.343,
    imminentRoundDamageDiff: 5.6649,
    activeTurnTempo: 10.8825,
    specialCardValue: 7.5195,
    deckTrimValue: 1.4817,
    eliteRouteBias: 1.1878,
    restRouteBias: 3.8194,
    forgeRouteBias: 11.7547,
    treasureRouteBias: 0.5707,
    branchingRouteBias: 9.8928,
    riskTolerance: 5.4586,
    aggressionPlanBias: 9.4784,
    controlPlanBias: 18,
    tempoPlanBias: -2.7153,
    fusionPlanBias: 3.7008,
    precisionPlanBias: -1.7235,
    uncommonCardBias: 8.8002,
    rareCardBias: 11.1493,
    charmSynergyBias: -0.157,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.4382,
  },
};
