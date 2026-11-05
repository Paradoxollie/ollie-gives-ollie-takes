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
  name: "trained-bot-20261105-172622",
  trainedAt: "2026-11-05T17:26:22.754Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.9318,
    shieldDiff: 81.4809,
    drawBonusDiff: 10.425,
    manaBonusDiff: 27.2006,
    poisonDiff: 57.1775,
    controlDiff: 128.6572,
    boardStrengthDiff: 22.7439,
    boardManaDiff: 14.6343,
    stackSynergyDiff: 120,
    reserveStrengthDiff: 21.1068,
    handStrengthDiff: -5.5041,
    mobilityDiff: 26.9833,
    cornerControlDiff: 19.6551,
    occupiedBoardDiff: -28.0169,
    imminentRoundDamageDiff: 93.3454,
    activeTurnTempo: 20.5958,
    specialCardValue: 14.3065,
    deckTrimValue: 0,
    eliteRouteBias: -4.3586,
    restRouteBias: 0,
    forgeRouteBias: 3.6837,
    treasureRouteBias: 8.9249,
    branchingRouteBias: 0,
    riskTolerance: -0.8876,
    aggressionPlanBias: -11.5108,
    controlPlanBias: 17.7172,
    tempoPlanBias: -1.7294,
    fusionPlanBias: 5.2733,
    precisionPlanBias: -1.6265,
    uncommonCardBias: -0.9203,
    rareCardBias: 10.5839,
    charmSynergyBias: 7.3939,
    duplicateCardPenalty: 4.2215,
    enemyProfileRespect: 6.3067,
  },
};
