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
  name: "trained-bot-20260826-115524",
  trainedAt: "2026-08-26T11:55:24.043Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.35215,
    shieldDiff: 105.59360000000001,
    drawBonusDiff: 32.7857,
    manaBonusDiff: 87.49414999999999,
    poisonDiff: 70.13535,
    controlDiff: 79.016,
    boardStrengthDiff: 43.5447,
    boardManaDiff: 50.25175,
    stackSynergyDiff: 21.3382,
    reserveStrengthDiff: 14.277550000000002,
    handStrengthDiff: 21.44535,
    mobilityDiff: 15.643,
    cornerControlDiff: 10.403949999999998,
    occupiedBoardDiff: -5.11675,
    imminentRoundDamageDiff: 58.51445,
    activeTurnTempo: 35.11085,
    specialCardValue: 11.3736,
    deckTrimValue: 2.61305,
    eliteRouteBias: -1.214,
    restRouteBias: 9.17785,
    forgeRouteBias: 2.44695,
    treasureRouteBias: 11.020150000000001,
    branchingRouteBias: 0,
    riskTolerance: -2.1861,
    aggressionPlanBias: 13.8634,
    controlPlanBias: 4.8614,
    tempoPlanBias: 12.79165,
    fusionPlanBias: -9.2656,
    precisionPlanBias: 9.2421,
    uncommonCardBias: 10,
    rareCardBias: -2.9434,
    charmSynergyBias: 0.4668,
    duplicateCardPenalty: 0.2926,
    enemyProfileRespect: 2.0587999999999997,
  },
};
