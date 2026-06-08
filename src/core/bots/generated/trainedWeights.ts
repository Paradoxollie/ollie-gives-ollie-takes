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
  name: "trained-bot-20260608-114220",
  trainedAt: "2026-06-08T11:42:20.113Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 87.7683,
    shieldDiff: 50.044,
    drawBonusDiff: 67.4552,
    manaBonusDiff: 102.3786,
    poisonDiff: 106.041,
    controlDiff: 9.5704,
    boardStrengthDiff: 56.1153,
    boardManaDiff: 3.1662,
    stackSynergyDiff: 13.3605,
    reserveStrengthDiff: 23.9902,
    handStrengthDiff: 12.4351,
    mobilityDiff: 10.3521,
    cornerControlDiff: 52.7433,
    occupiedBoardDiff: 27.2435,
    imminentRoundDamageDiff: 6.5918,
    activeTurnTempo: -13.2822,
    specialCardValue: 7.6595,
    deckTrimValue: 8.7378,
    eliteRouteBias: 1.3125,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 4.1834,
    branchingRouteBias: 7.8993,
    riskTolerance: 4.9304,
    aggressionPlanBias: 4.0971,
    controlPlanBias: 2.7214,
    tempoPlanBias: -12,
    fusionPlanBias: 2.763,
    precisionPlanBias: 0.4808,
    uncommonCardBias: 7.4515,
    rareCardBias: 8.1115,
    charmSynergyBias: 4.1368,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
