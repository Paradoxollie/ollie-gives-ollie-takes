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
  name: "trained-bot-20261023-223609",
  trainedAt: "2026-10-23T22:36:09.667Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.1698,
    shieldDiff: 84.1591,
    drawBonusDiff: 9.5811,
    manaBonusDiff: 72.9616,
    poisonDiff: 81.8798,
    controlDiff: 78.7988,
    boardStrengthDiff: 17.0236,
    boardManaDiff: 32.5294,
    stackSynergyDiff: 87.6305,
    reserveStrengthDiff: 17.6564,
    handStrengthDiff: -1.8844,
    mobilityDiff: 29.6735,
    cornerControlDiff: 19.7078,
    occupiedBoardDiff: -13.9228,
    imminentRoundDamageDiff: 92.0722,
    activeTurnTempo: 17.974,
    specialCardValue: 12.7202,
    deckTrimValue: 6.1029,
    eliteRouteBias: -4.646,
    restRouteBias: 1.7745,
    forgeRouteBias: 1.0246,
    treasureRouteBias: 1.8711,
    branchingRouteBias: 2.381,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: -7.2312,
    tempoPlanBias: -9.6126,
    fusionPlanBias: -12,
    precisionPlanBias: -3.8043,
    uncommonCardBias: -4,
    rareCardBias: 4.0587,
    charmSynergyBias: 11.049,
    duplicateCardPenalty: 6.6005,
    enemyProfileRespect: 2.8409,
  },
};
