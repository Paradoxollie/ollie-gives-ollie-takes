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
  name: "trained-bot-20260714-025806",
  trainedAt: "2026-07-14T02:58:06.950Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 115.6376,
    shieldDiff: 62.9314,
    drawBonusDiff: 10.8312,
    manaBonusDiff: 61.8003,
    poisonDiff: 60.701,
    controlDiff: 38.7785,
    boardStrengthDiff: 36.4799,
    boardManaDiff: 1.8025,
    stackSynergyDiff: 28.6734,
    reserveStrengthDiff: 13.947,
    handStrengthDiff: 10.9669,
    mobilityDiff: 21.2748,
    cornerControlDiff: 10.506,
    occupiedBoardDiff: 27.4611,
    imminentRoundDamageDiff: 72.2316,
    activeTurnTempo: 18.7989,
    specialCardValue: 9.1392,
    deckTrimValue: 3.0101,
    eliteRouteBias: 7.5397,
    restRouteBias: 3.8054,
    forgeRouteBias: 9.3773,
    treasureRouteBias: 8.8911,
    branchingRouteBias: 1.3506,
    riskTolerance: -4,
    aggressionPlanBias: -11.5556,
    controlPlanBias: 6.7481,
    tempoPlanBias: -6.5912,
    fusionPlanBias: -0.0247,
    precisionPlanBias: 1.9252,
    uncommonCardBias: -0.2002,
    rareCardBias: -2.033,
    charmSynergyBias: -1.82,
    duplicateCardPenalty: 7.7046,
    enemyProfileRespect: 10,
  },
};
