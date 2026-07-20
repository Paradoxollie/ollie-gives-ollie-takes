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
  name: "trained-bot-20260719-191052",
  trainedAt: "2026-07-19T19:10:52.696Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 126.0729,
    shieldDiff: 61.9879,
    drawBonusDiff: 46.7355,
    manaBonusDiff: 50.4342,
    poisonDiff: 67.0445,
    controlDiff: 44.0297,
    boardStrengthDiff: 44.1956,
    boardManaDiff: 12.5974,
    stackSynergyDiff: 33.5127,
    reserveStrengthDiff: 30,
    handStrengthDiff: 0.4794,
    mobilityDiff: 26.5682,
    cornerControlDiff: 6.2682,
    occupiedBoardDiff: 7.3532,
    imminentRoundDamageDiff: 65.494,
    activeTurnTempo: 27.022,
    specialCardValue: 13.434,
    deckTrimValue: 7.8216,
    eliteRouteBias: 6.0919,
    restRouteBias: 12,
    forgeRouteBias: 1.8972,
    treasureRouteBias: 12,
    branchingRouteBias: 8.4765,
    riskTolerance: -1.5369,
    aggressionPlanBias: 3.8596,
    controlPlanBias: 1.9958,
    tempoPlanBias: -12,
    fusionPlanBias: 1.6928,
    precisionPlanBias: -5.743,
    uncommonCardBias: 5.8793,
    rareCardBias: 1.0869,
    charmSynergyBias: 2.4666,
    duplicateCardPenalty: 4.3136,
    enemyProfileRespect: 0.8349,
  },
};
