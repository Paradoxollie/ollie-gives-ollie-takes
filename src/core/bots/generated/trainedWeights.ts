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
  name: "trained-bot-20260929-143522",
  trainedAt: "2026-09-29T14:35:22.028Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.9828,
    shieldDiff: 102.7439,
    drawBonusDiff: 22.151,
    manaBonusDiff: 58.6018,
    poisonDiff: 61.6351,
    controlDiff: 38.7836,
    boardStrengthDiff: 15.9246,
    boardManaDiff: 57.8612,
    stackSynergyDiff: 69.1751,
    reserveStrengthDiff: 7.7299,
    handStrengthDiff: -1.1894,
    mobilityDiff: 0.7265,
    cornerControlDiff: 6.4181,
    occupiedBoardDiff: -11.891,
    imminentRoundDamageDiff: 35.4173,
    activeTurnTempo: 15.2637,
    specialCardValue: 14.6621,
    deckTrimValue: 9.1069,
    eliteRouteBias: 0.7817,
    restRouteBias: 5.695,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 3.4726,
    riskTolerance: 1.7727,
    aggressionPlanBias: 4.6651,
    controlPlanBias: -5.7237,
    tempoPlanBias: -8.0624,
    fusionPlanBias: -5.4125,
    precisionPlanBias: -2.4879,
    uncommonCardBias: 2.6231,
    rareCardBias: 10.6459,
    charmSynergyBias: 3.8125,
    duplicateCardPenalty: 5.3056,
    enemyProfileRespect: 0,
  },
};
