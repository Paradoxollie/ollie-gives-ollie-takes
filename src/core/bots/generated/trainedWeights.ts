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
  name: "trained-bot-20260918-193422",
  trainedAt: "2026-09-18T19:34:22.651Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 70.0887,
    shieldDiff: 101.134,
    drawBonusDiff: 40.1083,
    manaBonusDiff: 93.8937,
    poisonDiff: 45.5008,
    controlDiff: 58.617,
    boardStrengthDiff: 20.1869,
    boardManaDiff: 43.2617,
    stackSynergyDiff: 42.9466,
    reserveStrengthDiff: 22.9794,
    handStrengthDiff: -7.1594,
    mobilityDiff: 19.9395,
    cornerControlDiff: 22.1195,
    occupiedBoardDiff: -17.6516,
    imminentRoundDamageDiff: 51.8943,
    activeTurnTempo: 24.6088,
    specialCardValue: 16.0996,
    deckTrimValue: 1.7103,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 4.7915,
    branchingRouteBias: 3.3937,
    riskTolerance: -4,
    aggressionPlanBias: -2.6387,
    controlPlanBias: 7.27,
    tempoPlanBias: -2.0344,
    fusionPlanBias: 0.1831,
    precisionPlanBias: 7.2011,
    uncommonCardBias: 6.3202,
    rareCardBias: -4,
    charmSynergyBias: 4.6381,
    duplicateCardPenalty: 7.9973,
    enemyProfileRespect: 3.3611,
  },
};
