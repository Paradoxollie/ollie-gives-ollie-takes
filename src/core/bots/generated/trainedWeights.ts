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
  name: "trained-bot-20260730-192003",
  trainedAt: "2026-07-30T19:20:03.324Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 134.834,
    shieldDiff: 62.3456,
    drawBonusDiff: 40.4567,
    manaBonusDiff: 58.1546,
    poisonDiff: 50.0573,
    controlDiff: 83.1594,
    boardStrengthDiff: 31.8883,
    boardManaDiff: 33.1298,
    stackSynergyDiff: 13.5159,
    reserveStrengthDiff: 10.4648,
    handStrengthDiff: 25.254,
    mobilityDiff: 23.2674,
    cornerControlDiff: 0,
    occupiedBoardDiff: -2.0556,
    imminentRoundDamageDiff: 39.6407,
    activeTurnTempo: 19.268,
    specialCardValue: 13.3161,
    deckTrimValue: 0,
    eliteRouteBias: 0.6727,
    restRouteBias: 11.6254,
    forgeRouteBias: 2.4574,
    treasureRouteBias: 12,
    branchingRouteBias: 6.8857,
    riskTolerance: 3.9837,
    aggressionPlanBias: 0.8454,
    controlPlanBias: 15.6021,
    tempoPlanBias: 1.5069,
    fusionPlanBias: 17.12,
    precisionPlanBias: 15.3081,
    uncommonCardBias: -4,
    rareCardBias: 2.5916,
    charmSynergyBias: 5.4578,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 8.1839,
  },
};
