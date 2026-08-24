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
  name: "trained-bot-20260824-185656",
  trainedAt: "2026-08-24T18:56:56.874Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 86.0495,
    shieldDiff: 110.7582,
    drawBonusDiff: 59.8179,
    manaBonusDiff: 104.9318,
    poisonDiff: 67.4319,
    controlDiff: 85.8356,
    boardStrengthDiff: 22.6996,
    boardManaDiff: 61.7158,
    stackSynergyDiff: 6.1231,
    reserveStrengthDiff: 4.9412,
    handStrengthDiff: 25.1574,
    mobilityDiff: 5.0128,
    cornerControlDiff: 4.8979,
    occupiedBoardDiff: -3.6182,
    imminentRoundDamageDiff: 67.0262,
    activeTurnTempo: 37.1446,
    specialCardValue: 4.1573,
    deckTrimValue: 4.7675,
    eliteRouteBias: 8,
    restRouteBias: 7.7372,
    forgeRouteBias: 0,
    treasureRouteBias: 0,
    branchingRouteBias: 1.9925,
    riskTolerance: 6.976,
    aggressionPlanBias: 18,
    controlPlanBias: 5.7559,
    tempoPlanBias: 12.869,
    fusionPlanBias: -10.1229,
    precisionPlanBias: 10.2795,
    uncommonCardBias: -3.1666,
    rareCardBias: 3.059,
    charmSynergyBias: 1.4244,
    duplicateCardPenalty: 1.661,
    enemyProfileRespect: 0,
  },
};
