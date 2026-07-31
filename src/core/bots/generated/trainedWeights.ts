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
  name: "trained-bot-20260731-002804",
  trainedAt: "2026-07-31T00:28:04.387Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 130.5583,
    shieldDiff: 57.1853,
    drawBonusDiff: 41.3847,
    manaBonusDiff: 60.7839,
    poisonDiff: 52.0347,
    controlDiff: 82.2145,
    boardStrengthDiff: 30.551,
    boardManaDiff: 33.4039,
    stackSynergyDiff: 16.5408,
    reserveStrengthDiff: 15.4195,
    handStrengthDiff: 30.7248,
    mobilityDiff: 23.2015,
    cornerControlDiff: 1.5303,
    occupiedBoardDiff: 6.2955,
    imminentRoundDamageDiff: 37.8663,
    activeTurnTempo: 23.756,
    specialCardValue: 16.2359,
    deckTrimValue: 0,
    eliteRouteBias: -2.4885,
    restRouteBias: 12,
    forgeRouteBias: 9.1949,
    treasureRouteBias: 12,
    branchingRouteBias: 5.8561,
    riskTolerance: 8,
    aggressionPlanBias: 0.8279,
    controlPlanBias: 18,
    tempoPlanBias: 0.3111,
    fusionPlanBias: 18,
    precisionPlanBias: 16.7705,
    uncommonCardBias: -1.3922,
    rareCardBias: 3.2651,
    charmSynergyBias: 4.0907,
    duplicateCardPenalty: 8.6631,
    enemyProfileRespect: 1.7224,
  },
};
