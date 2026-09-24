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
  name: "trained-bot-20260924-073023",
  trainedAt: "2026-09-24T07:30:23.395Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 82.0108,
    shieldDiff: 95.2246,
    drawBonusDiff: 30.2069,
    manaBonusDiff: 67.1031,
    poisonDiff: 52.3665,
    controlDiff: 51.2739,
    boardStrengthDiff: 19.4234,
    boardManaDiff: 69.2878,
    stackSynergyDiff: 54.067,
    reserveStrengthDiff: 10.0915,
    handStrengthDiff: -0.6276,
    mobilityDiff: 26.8616,
    cornerControlDiff: 23.1859,
    occupiedBoardDiff: -25.7022,
    imminentRoundDamageDiff: 46.9091,
    activeTurnTempo: 33.5473,
    specialCardValue: 8.3589,
    deckTrimValue: 0,
    eliteRouteBias: -4.8327,
    restRouteBias: 3.4231,
    forgeRouteBias: 12,
    treasureRouteBias: 7.0557,
    branchingRouteBias: 2.6882,
    riskTolerance: -2.1054,
    aggressionPlanBias: 3.5156,
    controlPlanBias: 16.9071,
    tempoPlanBias: -8.682,
    fusionPlanBias: 6.3309,
    precisionPlanBias: -12,
    uncommonCardBias: 10,
    rareCardBias: 2.0637,
    charmSynergyBias: 1.7673,
    duplicateCardPenalty: 6.445,
    enemyProfileRespect: 10,
  },
};
