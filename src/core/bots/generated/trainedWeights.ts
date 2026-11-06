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
  name: "trained-bot-20261105-234004",
  trainedAt: "2026-11-05T23:40:04.710Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.0187,
    shieldDiff: 88.3707,
    drawBonusDiff: 9.0719,
    manaBonusDiff: 27.4746,
    poisonDiff: 61.8772,
    controlDiff: 128.5298,
    boardStrengthDiff: 22.3729,
    boardManaDiff: 16.5418,
    stackSynergyDiff: 117.5405,
    reserveStrengthDiff: 22.1845,
    handStrengthDiff: -6.0554,
    mobilityDiff: 29.6021,
    cornerControlDiff: 16.345,
    occupiedBoardDiff: -23.9888,
    imminentRoundDamageDiff: 99.0658,
    activeTurnTempo: 22.27,
    specialCardValue: 18,
    deckTrimValue: 6.4006,
    eliteRouteBias: -2.9753,
    restRouteBias: 3.1343,
    forgeRouteBias: 3.0416,
    treasureRouteBias: 11.6149,
    branchingRouteBias: 4.0612,
    riskTolerance: 4.4048,
    aggressionPlanBias: -12,
    controlPlanBias: 18,
    tempoPlanBias: -3.2413,
    fusionPlanBias: 1.1333,
    precisionPlanBias: 0.7168,
    uncommonCardBias: 1.6658,
    rareCardBias: 8.8867,
    charmSynergyBias: 7.4303,
    duplicateCardPenalty: 2.8634,
    enemyProfileRespect: 7.1909,
  },
};
