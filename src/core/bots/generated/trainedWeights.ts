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
  name: "trained-bot-20261018-232915",
  trainedAt: "2026-10-18T23:29:15.394Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.7821,
    shieldDiff: 92.0855,
    drawBonusDiff: 4.0953,
    manaBonusDiff: 81.0425,
    poisonDiff: 61.2052,
    controlDiff: 66.43,
    boardStrengthDiff: 16.0752,
    boardManaDiff: 57.9016,
    stackSynergyDiff: 94.9381,
    reserveStrengthDiff: 22.3439,
    handStrengthDiff: 10.6841,
    mobilityDiff: 20.4349,
    cornerControlDiff: 13.1527,
    occupiedBoardDiff: -21.1074,
    imminentRoundDamageDiff: 77.6276,
    activeTurnTempo: 34.6484,
    specialCardValue: 18,
    deckTrimValue: 8.3815,
    eliteRouteBias: 4.0479,
    restRouteBias: 7.7043,
    forgeRouteBias: 3.4448,
    treasureRouteBias: 6.8801,
    branchingRouteBias: 2.6741,
    riskTolerance: 2.7706,
    aggressionPlanBias: -1.3032,
    controlPlanBias: -0.935,
    tempoPlanBias: -12,
    fusionPlanBias: 15.3136,
    precisionPlanBias: -6.5033,
    uncommonCardBias: 4.1065,
    rareCardBias: 11.6026,
    charmSynergyBias: 4.0688,
    duplicateCardPenalty: 6.5907,
    enemyProfileRespect: 8.5905,
  },
};
