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
  name: "trained-bot-20260608-021100",
  trainedAt: "2026-06-08T02:11:00.238Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.73965000000001,
    shieldDiff: 54.35895,
    drawBonusDiff: 65.56955,
    manaBonusDiff: 95.525,
    poisonDiff: 107.84805,
    controlDiff: 1.8346,
    boardStrengthDiff: 56.66515,
    boardManaDiff: 3.88295,
    stackSynergyDiff: 7.08635,
    reserveStrengthDiff: 25.9397,
    handStrengthDiff: 16.4209,
    mobilityDiff: 11.28705,
    cornerControlDiff: 54.34555,
    occupiedBoardDiff: 26.2534,
    imminentRoundDamageDiff: 10.0876,
    activeTurnTempo: -15.7349,
    specialCardValue: 9.1176,
    deckTrimValue: 10.8018,
    eliteRouteBias: 5.7152,
    restRouteBias: 3.0034,
    forgeRouteBias: 12,
    treasureRouteBias: 7.10775,
    branchingRouteBias: 7.44965,
    riskTolerance: 4.1491,
    aggressionPlanBias: 5.18655,
    controlPlanBias: 3.3646499999999997,
    tempoPlanBias: -10.77645,
    fusionPlanBias: 2.6821,
    precisionPlanBias: 10.2415,
    uncommonCardBias: 6.0912500000000005,
    rareCardBias: 8.047550000000001,
    charmSynergyBias: 6.7877,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.62965,
  },
};
