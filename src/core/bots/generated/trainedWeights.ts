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
  name: "trained-bot-20260801-023642",
  trainedAt: "2026-08-01T02:36:42.918Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 119.2078,
    shieldDiff: 63.9062,
    drawBonusDiff: 44.4173,
    manaBonusDiff: 58.5241,
    poisonDiff: 46.7626,
    controlDiff: 82.2633,
    boardStrengthDiff: 27.5058,
    boardManaDiff: 40.211,
    stackSynergyDiff: 18.5743,
    reserveStrengthDiff: 10.3397,
    handStrengthDiff: 27.0518,
    mobilityDiff: 17.0482,
    cornerControlDiff: 5.923,
    occupiedBoardDiff: 8.4663,
    imminentRoundDamageDiff: 44.0787,
    activeTurnTempo: 11.4083,
    specialCardValue: 15.2937,
    deckTrimValue: 0,
    eliteRouteBias: -3.1413,
    restRouteBias: 3.1986,
    forgeRouteBias: 8.0302,
    treasureRouteBias: 12,
    branchingRouteBias: 0,
    riskTolerance: 3.6955,
    aggressionPlanBias: 7.0461,
    controlPlanBias: 16.2237,
    tempoPlanBias: -0.6886,
    fusionPlanBias: 9.5243,
    precisionPlanBias: 13.6667,
    uncommonCardBias: 1.2631,
    rareCardBias: 5.7021,
    charmSynergyBias: 1.3674,
    duplicateCardPenalty: 5.1394,
    enemyProfileRespect: 10,
  },
};
