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
  name: "trained-bot-20260926-182817",
  trainedAt: "2026-09-26T18:28:17.276Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.4783,
    shieldDiff: 109.8859,
    drawBonusDiff: 26.7554,
    manaBonusDiff: 65.7826,
    poisonDiff: 55.3968,
    controlDiff: 41.8892,
    boardStrengthDiff: 20.6571,
    boardManaDiff: 61.3315,
    stackSynergyDiff: 66.7882,
    reserveStrengthDiff: 11.2996,
    handStrengthDiff: 0.1779,
    mobilityDiff: 17.942,
    cornerControlDiff: 9.8225,
    occupiedBoardDiff: -23.1016,
    imminentRoundDamageDiff: 30.228,
    activeTurnTempo: 31.3524,
    specialCardValue: 14.8864,
    deckTrimValue: 5.9488,
    eliteRouteBias: 2.6314,
    restRouteBias: 3.7523,
    forgeRouteBias: 1.1141,
    treasureRouteBias: 4.4189,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: 1.0809,
    controlPlanBias: -0.2008,
    tempoPlanBias: -6.9487,
    fusionPlanBias: -5.2566,
    precisionPlanBias: -10.4652,
    uncommonCardBias: 10,
    rareCardBias: 7.2179,
    charmSynergyBias: -3.9685,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.3614,
  },
};
