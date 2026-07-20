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
  name: "trained-bot-20260720-143436",
  trainedAt: "2026-07-20T14:34:36.292Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 122.0478,
    shieldDiff: 63.0772,
    drawBonusDiff: 45.0369,
    manaBonusDiff: 67.5028,
    poisonDiff: 67.8638,
    controlDiff: 48.396,
    boardStrengthDiff: 43.743,
    boardManaDiff: 11.0496,
    stackSynergyDiff: 24.7394,
    reserveStrengthDiff: 19.8634,
    handStrengthDiff: 5.3293,
    mobilityDiff: 20.8188,
    cornerControlDiff: 16.3526,
    occupiedBoardDiff: 1.685,
    imminentRoundDamageDiff: 50.3857,
    activeTurnTempo: 31.9941,
    specialCardValue: 10.663,
    deckTrimValue: 8.5711,
    eliteRouteBias: 6.6161,
    restRouteBias: 12,
    forgeRouteBias: 8.2938,
    treasureRouteBias: 1.9744,
    branchingRouteBias: 2.0377,
    riskTolerance: 5.4928,
    aggressionPlanBias: 7.4149,
    controlPlanBias: 10.2755,
    tempoPlanBias: -11.5561,
    fusionPlanBias: 6.736,
    precisionPlanBias: -7.0847,
    uncommonCardBias: 7.5269,
    rareCardBias: -1.2858,
    charmSynergyBias: 0.2181,
    duplicateCardPenalty: 8.6636,
    enemyProfileRespect: 3.7225,
  },
};
