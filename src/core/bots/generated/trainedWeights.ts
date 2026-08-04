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
  name: "trained-bot-20260803-233821",
  trainedAt: "2026-08-03T23:38:21.524Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 126.6028,
    shieldDiff: 72.5573,
    drawBonusDiff: 43.0189,
    manaBonusDiff: 71.5124,
    poisonDiff: 34.4251,
    controlDiff: 63.1165,
    boardStrengthDiff: 11.4416,
    boardManaDiff: 37.8576,
    stackSynergyDiff: 21.2744,
    reserveStrengthDiff: 8.4916,
    handStrengthDiff: 24.1369,
    mobilityDiff: 6.0006,
    cornerControlDiff: 1.3132,
    occupiedBoardDiff: 0.2184,
    imminentRoundDamageDiff: 37.0726,
    activeTurnTempo: 16.9682,
    specialCardValue: 17.2964,
    deckTrimValue: 10.7007,
    eliteRouteBias: -6.246,
    restRouteBias: 11.0331,
    forgeRouteBias: 1.6762,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: 10.5541,
    controlPlanBias: 16.9119,
    tempoPlanBias: 5.0458,
    fusionPlanBias: 13.856,
    precisionPlanBias: -1.2231,
    uncommonCardBias: 9.0541,
    rareCardBias: 6.7054,
    charmSynergyBias: 7.2259,
    duplicateCardPenalty: 8.2676,
    enemyProfileRespect: 0,
  },
};
