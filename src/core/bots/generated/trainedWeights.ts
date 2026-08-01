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
  name: "trained-bot-20260801-133019",
  trainedAt: "2026-08-01T13:30:19.478Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 123.518,
    shieldDiff: 63.1179,
    drawBonusDiff: 43.9653,
    manaBonusDiff: 57.3456,
    poisonDiff: 48.5521,
    controlDiff: 72.5643,
    boardStrengthDiff: 21.5574,
    boardManaDiff: 38.1173,
    stackSynergyDiff: 21.3211,
    reserveStrengthDiff: 8.7022,
    handStrengthDiff: 29.8076,
    mobilityDiff: 18.179,
    cornerControlDiff: 5.1669,
    occupiedBoardDiff: 9.7541,
    imminentRoundDamageDiff: 44.4122,
    activeTurnTempo: 3.6542,
    specialCardValue: 14.8939,
    deckTrimValue: 0,
    eliteRouteBias: -7.2121,
    restRouteBias: 1.3387,
    forgeRouteBias: 1.6454,
    treasureRouteBias: 10.1337,
    branchingRouteBias: 3.2149,
    riskTolerance: 4.3208,
    aggressionPlanBias: 2.1064,
    controlPlanBias: 9.7076,
    tempoPlanBias: -0.8958,
    fusionPlanBias: 8.1793,
    precisionPlanBias: 4.5717,
    uncommonCardBias: -0.284,
    rareCardBias: 7.0747,
    charmSynergyBias: 2.8072,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
