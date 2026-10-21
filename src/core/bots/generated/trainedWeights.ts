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
  name: "trained-bot-20261020-214604",
  trainedAt: "2026-10-20T21:46:04.486Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 78.0765,
    shieldDiff: 89.4453,
    drawBonusDiff: 7.3851,
    manaBonusDiff: 74.213,
    poisonDiff: 63.6888,
    controlDiff: 77.4826,
    boardStrengthDiff: 20.3255,
    boardManaDiff: 48.3185,
    stackSynergyDiff: 96.0224,
    reserveStrengthDiff: 15.4362,
    handStrengthDiff: 9.254,
    mobilityDiff: 24.5963,
    cornerControlDiff: 16.7952,
    occupiedBoardDiff: -21.993,
    imminentRoundDamageDiff: 89.1045,
    activeTurnTempo: 15.3508,
    specialCardValue: 17.0334,
    deckTrimValue: 6.2276,
    eliteRouteBias: -5.3087,
    restRouteBias: 9.4985,
    forgeRouteBias: 3.5701,
    treasureRouteBias: 8.139,
    branchingRouteBias: 2.5999,
    riskTolerance: 2.3005,
    aggressionPlanBias: 7.3668,
    controlPlanBias: -1.6097,
    tempoPlanBias: -8.3301,
    fusionPlanBias: 10.7726,
    precisionPlanBias: -6.9338,
    uncommonCardBias: 2.2514,
    rareCardBias: 11.252,
    charmSynergyBias: 11.0459,
    duplicateCardPenalty: 2.8774,
    enemyProfileRespect: 10,
  },
};
