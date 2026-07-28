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
  name: "trained-bot-20260728-163932",
  trainedAt: "2026-07-28T16:39:32.189Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 133.7898,
    shieldDiff: 53.2917,
    drawBonusDiff: 38.0611,
    manaBonusDiff: 55.2751,
    poisonDiff: 59.4976,
    controlDiff: 71.7717,
    boardStrengthDiff: 39.9573,
    boardManaDiff: 18.4122,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 17.6989,
    handStrengthDiff: 23.5554,
    mobilityDiff: 28.7395,
    cornerControlDiff: 0,
    occupiedBoardDiff: -11.9516,
    imminentRoundDamageDiff: 29.3264,
    activeTurnTempo: 21.7948,
    specialCardValue: 16.5262,
    deckTrimValue: 14,
    eliteRouteBias: 0.9443,
    restRouteBias: 12,
    forgeRouteBias: 0.8021,
    treasureRouteBias: 6.113,
    branchingRouteBias: 8.8532,
    riskTolerance: -4,
    aggressionPlanBias: 3.2628,
    controlPlanBias: 16.6115,
    tempoPlanBias: -3.7945,
    fusionPlanBias: 16.2075,
    precisionPlanBias: 18,
    uncommonCardBias: -4,
    rareCardBias: 8.0492,
    charmSynergyBias: 13.1446,
    duplicateCardPenalty: 7.5378,
    enemyProfileRespect: 5.0272,
  },
};
