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
  name: "trained-bot-20260804-155320",
  trainedAt: "2026-08-04T15:53:20.240Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 116.693,
    shieldDiff: 71.6942,
    drawBonusDiff: 41.5461,
    manaBonusDiff: 75.0782,
    poisonDiff: 35.0636,
    controlDiff: 63.1659,
    boardStrengthDiff: 14.3958,
    boardManaDiff: 41.2674,
    stackSynergyDiff: 17.8479,
    reserveStrengthDiff: 1.7984,
    handStrengthDiff: 23.7942,
    mobilityDiff: 11.8909,
    cornerControlDiff: 3.7822,
    occupiedBoardDiff: -1.4995,
    imminentRoundDamageDiff: 35.5583,
    activeTurnTempo: 19.716,
    specialCardValue: 16.7543,
    deckTrimValue: 13.5693,
    eliteRouteBias: -4.8932,
    restRouteBias: 10.0512,
    forgeRouteBias: 1.0186,
    treasureRouteBias: 7.8257,
    branchingRouteBias: 7.5661,
    riskTolerance: 5.0532,
    aggressionPlanBias: 18,
    controlPlanBias: 18,
    tempoPlanBias: 2.6402,
    fusionPlanBias: 18,
    precisionPlanBias: 10.2121,
    uncommonCardBias: 10,
    rareCardBias: 2.2501,
    charmSynergyBias: 4.2233,
    duplicateCardPenalty: 3.1592,
    enemyProfileRespect: 4.4308,
  },
};
