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
  name: "trained-bot-20260607-121606",
  trainedAt: "2026-06-07T12:16:06.447Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.9704,
    shieldDiff: 55.9102,
    drawBonusDiff: 65.6288,
    manaBonusDiff: 96.8418,
    poisonDiff: 107.1348,
    controlDiff: 3.643,
    boardStrengthDiff: 61.0124,
    boardManaDiff: 0,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 26.7412,
    handStrengthDiff: 17.4557,
    mobilityDiff: 4.0701,
    cornerControlDiff: 58.2055,
    occupiedBoardDiff: 24.1432,
    imminentRoundDamageDiff: 4.645,
    activeTurnTempo: -10.8175,
    specialCardValue: 14.1302,
    deckTrimValue: 10.0123,
    eliteRouteBias: 0.1898,
    restRouteBias: 7.4071,
    forgeRouteBias: 12,
    treasureRouteBias: 11.6201,
    branchingRouteBias: 1.1815,
    riskTolerance: 3.7952,
    aggressionPlanBias: 6.5093,
    controlPlanBias: 5.861,
    tempoPlanBias: -12,
    fusionPlanBias: 2.9438,
    precisionPlanBias: 10.4385,
    uncommonCardBias: 4.0009,
    rareCardBias: 11.8151,
    charmSynergyBias: 12.8923,
    duplicateCardPenalty: 9.3128,
    enemyProfileRespect: 0.6094,
  },
};
