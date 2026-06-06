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
  name: "trained-bot-20260606-054221",
  trainedAt: "2026-06-06T05:42:21.513Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.667,
    shieldDiff: 52.7665,
    drawBonusDiff: 73.7785,
    controlDiff: 4.1932,
    boardStrengthDiff: 37.0172,
    boardManaDiff: 14.3998,
    stackSynergyDiff: 10.5489,
    reserveStrengthDiff: 24.9045,
    handStrengthDiff: 22.8078,
    mobilityDiff: 8.0129,
    cornerControlDiff: 46.76,
    occupiedBoardDiff: 20.985,
    imminentRoundDamageDiff: 2.1507,
    activeTurnTempo: -5.3608,
    specialCardValue: 16.6161,
    deckTrimValue: 9.9098,
    eliteRouteBias: 6.6236,
    restRouteBias: 8.3955,
    forgeRouteBias: 9.1928,
    treasureRouteBias: 6.5231,
    branchingRouteBias: 9.602,
    riskTolerance: -1.3876,
    aggressionPlanBias: 17.1854,
    controlPlanBias: 13.5792,
    tempoPlanBias: -9.0909,
    fusionPlanBias: 12.7857,
    precisionPlanBias: 9.0345,
    uncommonCardBias: 10,
    rareCardBias: 0.7284,
    charmSynergyBias: 2.0393,
    duplicateCardPenalty: 7.9632,
    enemyProfileRespect: 1.0342,
  },
};
