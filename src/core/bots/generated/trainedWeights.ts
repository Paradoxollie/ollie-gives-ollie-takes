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
  name: "trained-bot-20260814-130638",
  trainedAt: "2026-08-14T13:06:38.209Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.7481,
    shieldDiff: 100.9244,
    drawBonusDiff: 46.4799,
    manaBonusDiff: 94.1454,
    poisonDiff: 45.2516,
    controlDiff: 75.0408,
    boardStrengthDiff: 18.4375,
    boardManaDiff: 35.2273,
    stackSynergyDiff: 19.6037,
    reserveStrengthDiff: -8.1616,
    handStrengthDiff: 32.0018,
    mobilityDiff: 1.2435,
    cornerControlDiff: 1.5235,
    occupiedBoardDiff: 14.3415,
    imminentRoundDamageDiff: 44.2691,
    activeTurnTempo: 31.3789,
    specialCardValue: 15.5067,
    deckTrimValue: 1.9524,
    eliteRouteBias: 8,
    restRouteBias: 10.021,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: -0.1343,
    aggressionPlanBias: 11.5872,
    controlPlanBias: 4.0417,
    tempoPlanBias: -6.616,
    fusionPlanBias: 11.9708,
    precisionPlanBias: 17.8782,
    uncommonCardBias: 5.0048,
    rareCardBias: 5.4735,
    charmSynergyBias: 6.7347,
    duplicateCardPenalty: 7.8399,
    enemyProfileRespect: 7.571,
  },
};
