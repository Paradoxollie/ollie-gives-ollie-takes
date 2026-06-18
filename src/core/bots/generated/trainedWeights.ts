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
  name: "trained-bot-20260618-155830",
  trainedAt: "2026-06-18T15:58:30.632Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.0839,
    shieldDiff: 80.2997,
    drawBonusDiff: 22.6591,
    manaBonusDiff: 82.31,
    poisonDiff: 97.8208,
    controlDiff: 15.6849,
    boardStrengthDiff: 43.6749,
    boardManaDiff: 22.4969,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 17.2965,
    handStrengthDiff: 43.8718,
    mobilityDiff: -10,
    cornerControlDiff: 66.7931,
    occupiedBoardDiff: 19.8352,
    imminentRoundDamageDiff: 29.3382,
    activeTurnTempo: 3.2345,
    specialCardValue: 12.2288,
    deckTrimValue: 0,
    eliteRouteBias: -0.8435,
    restRouteBias: 9.79,
    forgeRouteBias: 4.8986,
    treasureRouteBias: 8.0778,
    branchingRouteBias: 5.4055,
    riskTolerance: 3.8566,
    aggressionPlanBias: -6.2328,
    controlPlanBias: 0.2303,
    tempoPlanBias: -5.5721,
    fusionPlanBias: -0.7717,
    precisionPlanBias: 8.0992,
    uncommonCardBias: -4,
    rareCardBias: 3.6958,
    charmSynergyBias: -2.4825,
    duplicateCardPenalty: 4.7767,
    enemyProfileRespect: 0.3497,
  },
};
