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
  name: "trained-bot-20260627-184718",
  trainedAt: "2026-06-27T18:47:18.994Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.6854,
    shieldDiff: 62.112,
    drawBonusDiff: 14.4903,
    manaBonusDiff: 78.7395,
    poisonDiff: 68.3122,
    controlDiff: 6.1682,
    boardStrengthDiff: 22.6142,
    boardManaDiff: 12.7637,
    stackSynergyDiff: 0.7285,
    reserveStrengthDiff: 25.5262,
    handStrengthDiff: 38.3867,
    mobilityDiff: 12.0391,
    cornerControlDiff: 26.519,
    occupiedBoardDiff: 21.8829,
    imminentRoundDamageDiff: 47.0246,
    activeTurnTempo: 7.3765,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: -0.5013,
    restRouteBias: 5.6886,
    forgeRouteBias: 8.7435,
    treasureRouteBias: 7.1872,
    branchingRouteBias: 0,
    riskTolerance: 0.3513,
    aggressionPlanBias: 9.9368,
    controlPlanBias: 15.2783,
    tempoPlanBias: 0.3128,
    fusionPlanBias: 6.3882,
    precisionPlanBias: 3.1517,
    uncommonCardBias: 10,
    rareCardBias: 6.8301,
    charmSynergyBias: 5.6875,
    duplicateCardPenalty: 8.3989,
    enemyProfileRespect: 1.2075,
  },
};
