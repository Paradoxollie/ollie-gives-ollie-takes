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
  name: "trained-bot-20260826-164053",
  trainedAt: "2026-08-26T16:40:53.976Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.6713,
    shieldDiff: 105.9841,
    drawBonusDiff: 31.1732,
    manaBonusDiff: 94.4497,
    poisonDiff: 71.8022,
    controlDiff: 79.2632,
    boardStrengthDiff: 42.8979,
    boardManaDiff: 49.1039,
    stackSynergyDiff: 17.8476,
    reserveStrengthDiff: 14.2038,
    handStrengthDiff: 17.5344,
    mobilityDiff: 12.972,
    cornerControlDiff: 9.2686,
    occupiedBoardDiff: -9.9338,
    imminentRoundDamageDiff: 60.8416,
    activeTurnTempo: 38.7415,
    specialCardValue: 8.7133,
    deckTrimValue: 3.2482,
    eliteRouteBias: -0.5999,
    restRouteBias: 11.7763,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 0,
    riskTolerance: -2.402,
    aggressionPlanBias: 13.2047,
    controlPlanBias: 3.8183,
    tempoPlanBias: 17.2185,
    fusionPlanBias: 0.0019,
    precisionPlanBias: 6.9272,
    uncommonCardBias: 5.5554,
    rareCardBias: -2.1038,
    charmSynergyBias: 5.0334,
    duplicateCardPenalty: 0.7305,
    enemyProfileRespect: 0,
  },
};
