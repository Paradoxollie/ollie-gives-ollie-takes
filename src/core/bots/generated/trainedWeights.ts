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
  name: "trained-bot-20260710-142112",
  trainedAt: "2026-07-10T14:21:12.507Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.1648,
    shieldDiff: 53.6674,
    drawBonusDiff: 16.7225,
    manaBonusDiff: 63.8301,
    poisonDiff: 64.2982,
    controlDiff: 16.8784,
    boardStrengthDiff: 30.7471,
    boardManaDiff: 8.3279,
    stackSynergyDiff: 6.998,
    reserveStrengthDiff: 23.2858,
    handStrengthDiff: 15.1857,
    mobilityDiff: 27.6545,
    cornerControlDiff: 0,
    occupiedBoardDiff: 41.9303,
    imminentRoundDamageDiff: 79.0543,
    activeTurnTempo: 11.9943,
    specialCardValue: 15.3014,
    deckTrimValue: 10.4827,
    eliteRouteBias: -8,
    restRouteBias: 1.183,
    forgeRouteBias: 9.1126,
    treasureRouteBias: 12,
    branchingRouteBias: 0,
    riskTolerance: 4.1066,
    aggressionPlanBias: -7.3306,
    controlPlanBias: 6.8916,
    tempoPlanBias: -4.6047,
    fusionPlanBias: 0.7671,
    precisionPlanBias: 8.658,
    uncommonCardBias: 8.4687,
    rareCardBias: 2.8759,
    charmSynergyBias: 14,
    duplicateCardPenalty: 1.7754,
    enemyProfileRespect: 2.2547,
  },
};
