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
  name: "trained-bot-20260606-012649",
  trainedAt: "2026-06-06T01:26:49.783Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.6475,
    shieldDiff: 49.4583,
    drawBonusDiff: 79.2251,
    controlDiff: 3.9904,
    boardStrengthDiff: 44.5875,
    boardManaDiff: 22.8437,
    stackSynergyDiff: 9.0641,
    reserveStrengthDiff: 30,
    handStrengthDiff: 27.0446,
    mobilityDiff: 11.6098,
    cornerControlDiff: 45.5664,
    occupiedBoardDiff: 20.6396,
    imminentRoundDamageDiff: 3.9126,
    activeTurnTempo: -10.1794,
    specialCardValue: 17.1599,
    deckTrimValue: 6.7142,
    eliteRouteBias: 8,
    restRouteBias: 5.6875,
    forgeRouteBias: 10.932,
    treasureRouteBias: 4.3947,
    branchingRouteBias: 9.3407,
    riskTolerance: 1.6305,
    aggressionPlanBias: 18,
    controlPlanBias: 9.8519,
    tempoPlanBias: -8.6304,
    fusionPlanBias: 7.3017,
    precisionPlanBias: 8.2529,
    uncommonCardBias: 8.064,
    rareCardBias: 3.581,
    charmSynergyBias: 1.8973,
    duplicateCardPenalty: 7.2184,
    enemyProfileRespect: 6.0884,
  },
};
