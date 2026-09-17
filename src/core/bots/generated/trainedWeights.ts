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
  name: "trained-bot-20260917-181113",
  trainedAt: "2026-09-17T18:11:13.105Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.038,
    shieldDiff: 99.3942,
    drawBonusDiff: 35.9565,
    manaBonusDiff: 89.2342,
    poisonDiff: 45.4543,
    controlDiff: 53.3025,
    boardStrengthDiff: 17.2994,
    boardManaDiff: 46.7589,
    stackSynergyDiff: 43.7904,
    reserveStrengthDiff: 22.3236,
    handStrengthDiff: -8.3074,
    mobilityDiff: 24.9413,
    cornerControlDiff: 27.4492,
    occupiedBoardDiff: -32.0214,
    imminentRoundDamageDiff: 48.3324,
    activeTurnTempo: 29.0511,
    specialCardValue: 14.255,
    deckTrimValue: 2.5806,
    eliteRouteBias: -3.6903,
    restRouteBias: 9.3933,
    forgeRouteBias: 10.8797,
    treasureRouteBias: 2.1669,
    branchingRouteBias: 1.7627,
    riskTolerance: -1.9981,
    aggressionPlanBias: 1.7742,
    controlPlanBias: 18,
    tempoPlanBias: 3.2081,
    fusionPlanBias: -0.7645,
    precisionPlanBias: 0.519,
    uncommonCardBias: 0.0617,
    rareCardBias: -2.0978,
    charmSynergyBias: 13.4346,
    duplicateCardPenalty: 4.8947,
    enemyProfileRespect: 4.9516,
  },
};
