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
  name: "trained-bot-20260826-012020",
  trainedAt: "2026-08-26T01:20:20.089Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.5893,
    shieldDiff: 103.6324,
    drawBonusDiff: 39.6697,
    manaBonusDiff: 88.8285,
    poisonDiff: 68.8068,
    controlDiff: 78.6371,
    boardStrengthDiff: 37.9953,
    boardManaDiff: 50.847,
    stackSynergyDiff: 17.3183,
    reserveStrengthDiff: 12.9927,
    handStrengthDiff: 24.5972,
    mobilityDiff: 14.7642,
    cornerControlDiff: 9.6572,
    occupiedBoardDiff: -4.0996,
    imminentRoundDamageDiff: 60.8173,
    activeTurnTempo: 32.6902,
    specialCardValue: 4.9523,
    deckTrimValue: 2.3408,
    eliteRouteBias: -0.1713,
    restRouteBias: 3.8025,
    forgeRouteBias: 0.0324,
    treasureRouteBias: 5.2402,
    branchingRouteBias: 0.8555,
    riskTolerance: -1.9315,
    aggressionPlanBias: 18,
    controlPlanBias: 8.4962,
    tempoPlanBias: 13.5513,
    fusionPlanBias: -11.8345,
    precisionPlanBias: 8.6197,
    uncommonCardBias: 7.27,
    rareCardBias: -4,
    charmSynergyBias: -4,
    duplicateCardPenalty: 2.424,
    enemyProfileRespect: 0,
  },
};
