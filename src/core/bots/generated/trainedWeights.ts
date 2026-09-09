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
  name: "trained-bot-20260908-230253",
  trainedAt: "2026-09-08T23:02:53.250Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.4289,
    shieldDiff: 108.4515,
    drawBonusDiff: 65.1349,
    manaBonusDiff: 91.0876,
    poisonDiff: 41.2219,
    controlDiff: 68.4094,
    boardStrengthDiff: 2.8835,
    boardManaDiff: 65.1468,
    stackSynergyDiff: 21.6354,
    reserveStrengthDiff: 23.8174,
    handStrengthDiff: -6.0451,
    mobilityDiff: 13.6456,
    cornerControlDiff: 23.6758,
    occupiedBoardDiff: -15.427,
    imminentRoundDamageDiff: 86.6699,
    activeTurnTempo: 35.624,
    specialCardValue: 11.5135,
    deckTrimValue: 2.438,
    eliteRouteBias: 2.3474,
    restRouteBias: 3.6366,
    forgeRouteBias: 3.7154,
    treasureRouteBias: 12,
    branchingRouteBias: 4.6708,
    riskTolerance: -1.6933,
    aggressionPlanBias: -6.996,
    controlPlanBias: 15.1244,
    tempoPlanBias: 7.4654,
    fusionPlanBias: 1.626,
    precisionPlanBias: 7.9471,
    uncommonCardBias: 1.8979,
    rareCardBias: 9.8963,
    charmSynergyBias: 5.2104,
    duplicateCardPenalty: 3.5446,
    enemyProfileRespect: 3.1985,
  },
};
