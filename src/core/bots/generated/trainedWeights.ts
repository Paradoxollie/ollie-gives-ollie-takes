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
  name: "trained-bot-20260824-231537",
  trainedAt: "2026-08-24T23:15:37.800Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 88.4984,
    shieldDiff: 110.3528,
    drawBonusDiff: 53.6945,
    manaBonusDiff: 100.5598,
    poisonDiff: 65.9293,
    controlDiff: 87.7205,
    boardStrengthDiff: 30.766,
    boardManaDiff: 58.7431,
    stackSynergyDiff: 8.619,
    reserveStrengthDiff: 7.252,
    handStrengthDiff: 26.605,
    mobilityDiff: 9.2015,
    cornerControlDiff: 8.3013,
    occupiedBoardDiff: -0.1127,
    imminentRoundDamageDiff: 70.1553,
    activeTurnTempo: 32.7455,
    specialCardValue: 6.2014,
    deckTrimValue: 1.7433,
    eliteRouteBias: 8,
    restRouteBias: 4.6295,
    forgeRouteBias: 0.4526,
    treasureRouteBias: 3.3625,
    branchingRouteBias: 5.182,
    riskTolerance: 0.6259,
    aggressionPlanBias: 16.8764,
    controlPlanBias: 6.5328,
    tempoPlanBias: 18,
    fusionPlanBias: -11.2067,
    precisionPlanBias: 13.1813,
    uncommonCardBias: 3.2596,
    rareCardBias: 0.3677,
    charmSynergyBias: 1.9697,
    duplicateCardPenalty: 2.0014,
    enemyProfileRespect: 0.4276,
  },
};
