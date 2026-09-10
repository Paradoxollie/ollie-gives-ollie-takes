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
  name: "trained-bot-20260909-190433",
  trainedAt: "2026-09-09T19:04:33.233Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 70.0043,
    shieldDiff: 110.9709,
    drawBonusDiff: 56.5542,
    manaBonusDiff: 93.3004,
    poisonDiff: 48.9957,
    controlDiff: 72.302,
    boardStrengthDiff: 0,
    boardManaDiff: 65.7127,
    stackSynergyDiff: 29.8045,
    reserveStrengthDiff: 27.9867,
    handStrengthDiff: -2.6588,
    mobilityDiff: 14.0049,
    cornerControlDiff: 19.5009,
    occupiedBoardDiff: -15.0765,
    imminentRoundDamageDiff: 74.0739,
    activeTurnTempo: 41.4302,
    specialCardValue: 7.4459,
    deckTrimValue: 2.9945,
    eliteRouteBias: 6.0368,
    restRouteBias: 10.0067,
    forgeRouteBias: 5.497,
    treasureRouteBias: 9.6716,
    branchingRouteBias: 0.6519,
    riskTolerance: -1.9235,
    aggressionPlanBias: -10.2591,
    controlPlanBias: 16.241,
    tempoPlanBias: 0.0363,
    fusionPlanBias: 4.2957,
    precisionPlanBias: 1.7776,
    uncommonCardBias: 8.0822,
    rareCardBias: 8.6211,
    charmSynergyBias: 6.3268,
    duplicateCardPenalty: 0.8617,
    enemyProfileRespect: 0,
  },
};
