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
  name: "trained-bot-20261028-143115",
  trainedAt: "2026-10-28T14:31:15.414Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.5541,
    shieldDiff: 83.4624,
    drawBonusDiff: 26.2093,
    manaBonusDiff: 55.4929,
    poisonDiff: 86.488,
    controlDiff: 89.8596,
    boardStrengthDiff: 12.5213,
    boardManaDiff: 20.7073,
    stackSynergyDiff: 120,
    reserveStrengthDiff: 23.4699,
    handStrengthDiff: 1.7574,
    mobilityDiff: 18.718,
    cornerControlDiff: 15.6433,
    occupiedBoardDiff: -19.9065,
    imminentRoundDamageDiff: 92.8594,
    activeTurnTempo: 18.3936,
    specialCardValue: 9.8877,
    deckTrimValue: 5.6104,
    eliteRouteBias: -1.5733,
    restRouteBias: 3.0176,
    forgeRouteBias: 3.5958,
    treasureRouteBias: 5.5019,
    branchingRouteBias: 0.8038,
    riskTolerance: 0.7708,
    aggressionPlanBias: -8.7241,
    controlPlanBias: -9.9456,
    tempoPlanBias: -6.4781,
    fusionPlanBias: 9.7285,
    precisionPlanBias: -3.9761,
    uncommonCardBias: 5.3652,
    rareCardBias: 3.5457,
    charmSynergyBias: 3.0694,
    duplicateCardPenalty: 9.678,
    enemyProfileRespect: 10,
  },
};
