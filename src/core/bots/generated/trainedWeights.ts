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
  name: "trained-bot-20260815-204827",
  trainedAt: "2026-08-15T20:48:27.417Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.1521,
    shieldDiff: 110.5887,
    drawBonusDiff: 45.6057,
    manaBonusDiff: 97.3986,
    poisonDiff: 50.6882,
    controlDiff: 70.7758,
    boardStrengthDiff: 12.5997,
    boardManaDiff: 50.3548,
    stackSynergyDiff: 24.3385,
    reserveStrengthDiff: -4.4228,
    handStrengthDiff: 38.3838,
    mobilityDiff: -3.7531,
    cornerControlDiff: 7.0692,
    occupiedBoardDiff: -0.1005,
    imminentRoundDamageDiff: 58.0165,
    activeTurnTempo: 36.3379,
    specialCardValue: 13.529,
    deckTrimValue: 2.4175,
    eliteRouteBias: 6.8017,
    restRouteBias: 7.6545,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 3.554,
    riskTolerance: 0.4186,
    aggressionPlanBias: 18,
    controlPlanBias: 13.7166,
    tempoPlanBias: -0.7936,
    fusionPlanBias: 17.0527,
    precisionPlanBias: 5.4157,
    uncommonCardBias: 3.3473,
    rareCardBias: 6.0891,
    charmSynergyBias: 4.7394,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.5282,
  },
};
