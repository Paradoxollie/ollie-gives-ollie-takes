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
  name: "trained-bot-20260730-000212",
  trainedAt: "2026-07-30T00:02:12.505Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 129.0167,
    shieldDiff: 63.1983,
    drawBonusDiff: 42.9814,
    manaBonusDiff: 60.0429,
    poisonDiff: 58.3578,
    controlDiff: 81.3688,
    boardStrengthDiff: 33.3041,
    boardManaDiff: 22.7878,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 16.1126,
    handStrengthDiff: 17.7973,
    mobilityDiff: 27.1757,
    cornerControlDiff: 3.7631,
    occupiedBoardDiff: -8.6565,
    imminentRoundDamageDiff: 29.7012,
    activeTurnTempo: 24.4677,
    specialCardValue: 14.7187,
    deckTrimValue: 9.2891,
    eliteRouteBias: 3.3865,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 6.6032,
    branchingRouteBias: 9.9518,
    riskTolerance: 7.1519,
    aggressionPlanBias: -5.1575,
    controlPlanBias: 15.6884,
    tempoPlanBias: 0.559,
    fusionPlanBias: 17.6268,
    precisionPlanBias: 18,
    uncommonCardBias: -4,
    rareCardBias: -4,
    charmSynergyBias: 5.5923,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 8.5173,
  },
};
