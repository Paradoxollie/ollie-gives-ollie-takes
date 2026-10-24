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
  name: "trained-bot-20261024-122529",
  trainedAt: "2026-10-24T12:25:29.024Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.0889,
    shieldDiff: 81.5304,
    drawBonusDiff: 15.0326,
    manaBonusDiff: 68.1512,
    poisonDiff: 82.3991,
    controlDiff: 79.598,
    boardStrengthDiff: 14.9445,
    boardManaDiff: 23.9452,
    stackSynergyDiff: 89.2627,
    reserveStrengthDiff: 15.781,
    handStrengthDiff: -0.2413,
    mobilityDiff: 23.1514,
    cornerControlDiff: 15.3233,
    occupiedBoardDiff: -15.8092,
    imminentRoundDamageDiff: 96.3234,
    activeTurnTempo: 22.2985,
    specialCardValue: 11.6043,
    deckTrimValue: 1.7215,
    eliteRouteBias: -2.8323,
    restRouteBias: 0.9029,
    forgeRouteBias: 6.4982,
    treasureRouteBias: 1.7858,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: -2.5434,
    tempoPlanBias: -6.2944,
    fusionPlanBias: -8.8034,
    precisionPlanBias: -10.7413,
    uncommonCardBias: -4,
    rareCardBias: -1.1317,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 4.2637,
  },
};
