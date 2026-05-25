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
  name: "trained-bot-20260525-200139",
  trainedAt: "2026-05-25T20:01:39.833Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 49.1686,
    controlDiff: 23.1965,
    boardStrengthDiff: 22.223,
    reserveStrengthDiff: 22.4101,
    handStrengthDiff: 20.1524,
    mobilityDiff: 9.2068,
    cornerControlDiff: 26.0107,
    occupiedBoardDiff: 18.2262,
    imminentRoundDamageDiff: -20.8398,
    activeTurnTempo: -24.9424,
    specialCardValue: 3.4149,
    deckTrimValue: -36.2309,
    eliteRouteBias: -66.6521,
    restRouteBias: -4.0863,
    forgeRouteBias: 8.6943,
    treasureRouteBias: 18.1846,
    branchingRouteBias: 29.6331,
    riskTolerance: 42.1902,
    aggressionPlanBias: 15.8006,
    controlPlanBias: 12.1245,
    tempoPlanBias: -1.7731,
    fusionPlanBias: 11.7392,
    precisionPlanBias: 5.9681,
    uncommonCardBias: 14.8475,
    rareCardBias: 15.9486,
    charmSynergyBias: 28.1366,
    duplicateCardPenalty: -14.4927,
    enemyProfileRespect: 24.9963,
  },
};
