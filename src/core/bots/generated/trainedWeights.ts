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
  name: "trained-bot-20261028-054623",
  trainedAt: "2026-10-28T05:46:23.253Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.697,
    shieldDiff: 76.2023,
    drawBonusDiff: 25.6847,
    manaBonusDiff: 54.7362,
    poisonDiff: 90.38,
    controlDiff: 84.3759,
    boardStrengthDiff: 12.7098,
    boardManaDiff: 23.3671,
    stackSynergyDiff: 119.2602,
    reserveStrengthDiff: 18.2508,
    handStrengthDiff: -0.6628,
    mobilityDiff: 19.8829,
    cornerControlDiff: 7.6251,
    occupiedBoardDiff: -17.4469,
    imminentRoundDamageDiff: 93.6489,
    activeTurnTempo: 23.7642,
    specialCardValue: 6.003,
    deckTrimValue: 8.6583,
    eliteRouteBias: 0.2238,
    restRouteBias: 7.6473,
    forgeRouteBias: 4.7435,
    treasureRouteBias: 7.7149,
    branchingRouteBias: 0,
    riskTolerance: -2.0403,
    aggressionPlanBias: -9.1262,
    controlPlanBias: -7.8755,
    tempoPlanBias: -8.6443,
    fusionPlanBias: 12.9268,
    precisionPlanBias: -7.4896,
    uncommonCardBias: 1.978,
    rareCardBias: 2.2696,
    charmSynergyBias: 3.3751,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
