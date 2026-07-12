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
  name: "trained-bot-20260712-035948",
  trainedAt: "2026-07-12T03:59:48.271Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.9445,
    shieldDiff: 56.1564,
    drawBonusDiff: 0,
    manaBonusDiff: 64.1433,
    poisonDiff: 63.9862,
    controlDiff: 22.2347,
    boardStrengthDiff: 37.231,
    boardManaDiff: 0.5423,
    stackSynergyDiff: 6.0125,
    reserveStrengthDiff: 13.6564,
    handStrengthDiff: 9.7582,
    mobilityDiff: 18.5791,
    cornerControlDiff: 3.3991,
    occupiedBoardDiff: 44.951,
    imminentRoundDamageDiff: 78.3454,
    activeTurnTempo: 25.7586,
    specialCardValue: 13.6035,
    deckTrimValue: 5.2117,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 7.959,
    branchingRouteBias: 4.3247,
    riskTolerance: -2.3739,
    aggressionPlanBias: -11.2056,
    controlPlanBias: 15.5854,
    tempoPlanBias: -7.6273,
    fusionPlanBias: -6.1023,
    precisionPlanBias: 7.5949,
    uncommonCardBias: 7.0103,
    rareCardBias: 3.1477,
    charmSynergyBias: 14,
    duplicateCardPenalty: 2.8692,
    enemyProfileRespect: 1.1487,
  },
};
