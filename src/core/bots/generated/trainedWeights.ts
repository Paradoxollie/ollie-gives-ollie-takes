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
  name: "trained-bot-20261107-210936",
  trainedAt: "2026-11-07T21:09:36.086Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.8551,
    shieldDiff: 87.7488,
    drawBonusDiff: 0.6258,
    manaBonusDiff: 25.4676,
    poisonDiff: 74.398,
    controlDiff: 129.8497,
    boardStrengthDiff: 23.9311,
    boardManaDiff: 11.7622,
    stackSynergyDiff: 112.4036,
    reserveStrengthDiff: 22.8991,
    handStrengthDiff: -10,
    mobilityDiff: 30,
    cornerControlDiff: 4.3597,
    occupiedBoardDiff: -20.3989,
    imminentRoundDamageDiff: 95.6464,
    activeTurnTempo: 17.8942,
    specialCardValue: 10.1644,
    deckTrimValue: 0,
    eliteRouteBias: -5.8684,
    restRouteBias: 8.5283,
    forgeRouteBias: 6.4398,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: 2.6303,
    aggressionPlanBias: -7.8134,
    controlPlanBias: 18,
    tempoPlanBias: -2.0707,
    fusionPlanBias: 6.8206,
    precisionPlanBias: -4.1603,
    uncommonCardBias: -4,
    rareCardBias: 11.3874,
    charmSynergyBias: 8.1239,
    duplicateCardPenalty: 1.1777,
    enemyProfileRespect: 2.1444,
  },
};
