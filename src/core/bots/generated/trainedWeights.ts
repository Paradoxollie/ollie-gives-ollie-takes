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
  name: "trained-bot-20260610-110915",
  trainedAt: "2026-06-10T11:09:15.874Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.7962,
    shieldDiff: 46.7221,
    drawBonusDiff: 72.8998,
    manaBonusDiff: 110.383,
    poisonDiff: 108.7539,
    controlDiff: 2.4382,
    boardStrengthDiff: 56.8901,
    boardManaDiff: 6.9164,
    stackSynergyDiff: 4.9813,
    reserveStrengthDiff: 30,
    handStrengthDiff: 18.6674,
    mobilityDiff: 11.6561,
    cornerControlDiff: 52.5339,
    occupiedBoardDiff: 29.1281,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: 12.1401,
    specialCardValue: 9.6617,
    deckTrimValue: 14,
    eliteRouteBias: -0.2849,
    restRouteBias: 12,
    forgeRouteBias: 8.1371,
    treasureRouteBias: 5.7738,
    branchingRouteBias: 10,
    riskTolerance: 2.7984,
    aggressionPlanBias: 1.5646,
    controlPlanBias: 18,
    tempoPlanBias: -5.6149,
    fusionPlanBias: -8.3253,
    precisionPlanBias: 12.9391,
    uncommonCardBias: 10,
    rareCardBias: 5.6868,
    charmSynergyBias: -1.2557,
    duplicateCardPenalty: 3.9376,
    enemyProfileRespect: 3.1775,
  },
};
