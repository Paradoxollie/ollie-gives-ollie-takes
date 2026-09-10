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
  name: "trained-bot-20260910-154714",
  trainedAt: "2026-09-10T15:47:14.952Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 64.0843,
    shieldDiff: 111.6459,
    drawBonusDiff: 60.3417,
    manaBonusDiff: 96.3611,
    poisonDiff: 56.7249,
    controlDiff: 64.6186,
    boardStrengthDiff: 2.2036,
    boardManaDiff: 63.6291,
    stackSynergyDiff: 30.2235,
    reserveStrengthDiff: 24.6344,
    handStrengthDiff: -3.0306,
    mobilityDiff: 28.78,
    cornerControlDiff: 18.6713,
    occupiedBoardDiff: -14.5023,
    imminentRoundDamageDiff: 64.5752,
    activeTurnTempo: 52.3077,
    specialCardValue: 12.304,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 2.801,
    forgeRouteBias: 4.4845,
    treasureRouteBias: 9.7366,
    branchingRouteBias: 0,
    riskTolerance: 5.3885,
    aggressionPlanBias: -1.9503,
    controlPlanBias: 18,
    tempoPlanBias: 9.5192,
    fusionPlanBias: 6.7305,
    precisionPlanBias: -0.3561,
    uncommonCardBias: 3.2189,
    rareCardBias: 7.6405,
    charmSynergyBias: 4.1708,
    duplicateCardPenalty: 6.5667,
    enemyProfileRespect: 4.6657,
  },
};
