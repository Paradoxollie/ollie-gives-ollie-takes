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
  name: "trained-bot-20260614-051049",
  trainedAt: "2026-06-14T05:10:49.391Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.5071,
    shieldDiff: 53.3816,
    drawBonusDiff: 60.6601,
    manaBonusDiff: 86.6401,
    poisonDiff: 96.8138,
    controlDiff: 7.9271,
    boardStrengthDiff: 61.178,
    boardManaDiff: 13.2415,
    stackSynergyDiff: 17.8177,
    reserveStrengthDiff: 28.4331,
    handStrengthDiff: 21.7666,
    mobilityDiff: -2.9843,
    cornerControlDiff: 60.4215,
    occupiedBoardDiff: 46.2422,
    imminentRoundDamageDiff: 12.5614,
    activeTurnTempo: 12.4573,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 2.6737,
    restRouteBias: 4.1704,
    forgeRouteBias: 0,
    treasureRouteBias: 0.7666,
    branchingRouteBias: 3.1951,
    riskTolerance: -3.2057,
    aggressionPlanBias: 3.1643,
    controlPlanBias: 17.2471,
    tempoPlanBias: -6.1211,
    fusionPlanBias: 14.4323,
    precisionPlanBias: -11.2903,
    uncommonCardBias: 8.2445,
    rareCardBias: -2.8203,
    charmSynergyBias: 4.6127,
    duplicateCardPenalty: 4.5614,
    enemyProfileRespect: 1.1986,
  },
};
