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
  name: "trained-bot-20261005-081229",
  trainedAt: "2026-10-05T08:12:29.544Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 62.2212,
    shieldDiff: 89.8176,
    drawBonusDiff: 14.3029,
    manaBonusDiff: 70.49,
    poisonDiff: 57.3084,
    controlDiff: 33.1947,
    boardStrengthDiff: 14.626,
    boardManaDiff: 80,
    stackSynergyDiff: 87.9552,
    reserveStrengthDiff: 13.2941,
    handStrengthDiff: 6.7996,
    mobilityDiff: -5.1174,
    cornerControlDiff: 15.7243,
    occupiedBoardDiff: -10.1241,
    imminentRoundDamageDiff: 35.8805,
    activeTurnTempo: 10.8088,
    specialCardValue: 10.8973,
    deckTrimValue: 0,
    eliteRouteBias: 5.7321,
    restRouteBias: 5.206,
    forgeRouteBias: 5.0632,
    treasureRouteBias: 6.3941,
    branchingRouteBias: 5.7206,
    riskTolerance: -4,
    aggressionPlanBias: -6.0884,
    controlPlanBias: 2.7421,
    tempoPlanBias: -9.096,
    fusionPlanBias: -5.3619,
    precisionPlanBias: -3.486,
    uncommonCardBias: 1.7356,
    rareCardBias: 6.6437,
    charmSynergyBias: 2.8832,
    duplicateCardPenalty: 7.4816,
    enemyProfileRespect: 4.065,
  },
};
