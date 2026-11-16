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
  name: "trained-bot-20261116-193836",
  trainedAt: "2026-11-16T19:38:36.851Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 48.8548,
    shieldDiff: 82.0625,
    drawBonusDiff: 15.05425,
    manaBonusDiff: 17.077975000000002,
    poisonDiff: 82.9566,
    controlDiff: 117.55179999999999,
    boardStrengthDiff: 14.407575,
    boardManaDiff: 30.512700000000002,
    stackSynergyDiff: 115.493725,
    reserveStrengthDiff: 28.2454,
    handStrengthDiff: 8.201125,
    mobilityDiff: 25.431325,
    cornerControlDiff: 12.657900000000001,
    occupiedBoardDiff: -26.422425,
    imminentRoundDamageDiff: 87.22822500000001,
    activeTurnTempo: 12.292625000000001,
    specialCardValue: 18,
    deckTrimValue: 10.63925,
    eliteRouteBias: -7.108875,
    restRouteBias: 12,
    forgeRouteBias: 5.5455000000000005,
    treasureRouteBias: 9.901575000000001,
    branchingRouteBias: 7.065975,
    riskTolerance: -3.7495000000000003,
    aggressionPlanBias: -6.7768999999999995,
    controlPlanBias: -5.620725,
    tempoPlanBias: -9.3294,
    fusionPlanBias: -4.768775,
    precisionPlanBias: -5.682175000000001,
    uncommonCardBias: -1.21085,
    rareCardBias: 5.9711,
    charmSynergyBias: 8.0265,
    duplicateCardPenalty: 9.334800000000001,
    enemyProfileRespect: 1.7002,
  },
};
