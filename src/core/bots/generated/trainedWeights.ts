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
  name: "trained-bot-20261017-235914",
  trainedAt: "2026-10-17T23:59:14.280Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.2863,
    shieldDiff: 80.8217,
    drawBonusDiff: 5.3471,
    manaBonusDiff: 83.3924,
    poisonDiff: 64.4734,
    controlDiff: 63.7148,
    boardStrengthDiff: 25.2458,
    boardManaDiff: 54.959,
    stackSynergyDiff: 95.4957,
    reserveStrengthDiff: 23.066,
    handStrengthDiff: 20.0502,
    mobilityDiff: 16.343,
    cornerControlDiff: 3.6227,
    occupiedBoardDiff: -20.012,
    imminentRoundDamageDiff: 76.5972,
    activeTurnTempo: 35.1567,
    specialCardValue: 10.5386,
    deckTrimValue: 7.048,
    eliteRouteBias: 8,
    restRouteBias: 1.5769,
    forgeRouteBias: 4.2932,
    treasureRouteBias: 6.3876,
    branchingRouteBias: 4.8169,
    riskTolerance: -0.0393,
    aggressionPlanBias: -2.7245,
    controlPlanBias: -4.5994,
    tempoPlanBias: -10.8386,
    fusionPlanBias: 14.891,
    precisionPlanBias: -5.8799,
    uncommonCardBias: 7.0302,
    rareCardBias: -1.3776,
    charmSynergyBias: 0.5897,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.0986,
  },
};
