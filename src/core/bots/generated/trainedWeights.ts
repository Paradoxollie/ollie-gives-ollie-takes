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
  name: "trained-bot-20261030-143156",
  trainedAt: "2026-10-30T14:31:56.792Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.5496,
    shieldDiff: 81.6211,
    drawBonusDiff: 23.9367,
    manaBonusDiff: 50.3824,
    poisonDiff: 86.3332,
    controlDiff: 91.7636,
    boardStrengthDiff: 18.1477,
    boardManaDiff: 19.5731,
    stackSynergyDiff: 112.5162,
    reserveStrengthDiff: 28.4983,
    handStrengthDiff: 6.156,
    mobilityDiff: 17.7825,
    cornerControlDiff: 15.9806,
    occupiedBoardDiff: -20.9773,
    imminentRoundDamageDiff: 86.4545,
    activeTurnTempo: 14.118,
    specialCardValue: 14.9118,
    deckTrimValue: 0,
    eliteRouteBias: -1.0388,
    restRouteBias: 8.0653,
    forgeRouteBias: 0,
    treasureRouteBias: 0.915,
    branchingRouteBias: 6.3393,
    riskTolerance: 1.5203,
    aggressionPlanBias: -9.4209,
    controlPlanBias: -9.3075,
    tempoPlanBias: -12,
    fusionPlanBias: 9.4042,
    precisionPlanBias: -6.6263,
    uncommonCardBias: 6.4807,
    rareCardBias: 5.2038,
    charmSynergyBias: 7.5251,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.2666,
  },
};
