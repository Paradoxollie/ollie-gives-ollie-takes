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
  name: "trained-bot-20260820-182357",
  trainedAt: "2026-08-20T18:23:57.279Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.2992,
    shieldDiff: 101.665,
    drawBonusDiff: 54.8612,
    manaBonusDiff: 90.3398,
    poisonDiff: 83.2287,
    controlDiff: 84.2533,
    boardStrengthDiff: 13.4212,
    boardManaDiff: 36.0366,
    stackSynergyDiff: 4.4315,
    reserveStrengthDiff: -10,
    handStrengthDiff: 50,
    mobilityDiff: 6.375,
    cornerControlDiff: 18.7865,
    occupiedBoardDiff: -1.0149,
    imminentRoundDamageDiff: 69.3005,
    activeTurnTempo: 32.7485,
    specialCardValue: 4.2013,
    deckTrimValue: 0,
    eliteRouteBias: -2.0167,
    restRouteBias: 4.8932,
    forgeRouteBias: 5.2374,
    treasureRouteBias: 11.7117,
    branchingRouteBias: 6.5334,
    riskTolerance: -4,
    aggressionPlanBias: -6.7711,
    controlPlanBias: 18,
    tempoPlanBias: 10.9054,
    fusionPlanBias: -9.2812,
    precisionPlanBias: -9.5959,
    uncommonCardBias: 1.8047,
    rareCardBias: -4,
    charmSynergyBias: 4.269,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
