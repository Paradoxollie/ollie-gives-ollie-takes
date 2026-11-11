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
  name: "trained-bot-20261111-171200",
  trainedAt: "2026-11-11T17:12:00.605Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 62.5453,
    shieldDiff: 82.8017,
    drawBonusDiff: 2.5647,
    manaBonusDiff: 20.6021,
    poisonDiff: 84.6382,
    controlDiff: 138.2749,
    boardStrengthDiff: 13.2907,
    boardManaDiff: 12.2495,
    stackSynergyDiff: 103.9351,
    reserveStrengthDiff: 27.755,
    handStrengthDiff: -4.3151,
    mobilityDiff: 26.703,
    cornerControlDiff: 15.0641,
    occupiedBoardDiff: -21.6707,
    imminentRoundDamageDiff: 102.7229,
    activeTurnTempo: 17.1689,
    specialCardValue: 4.1213,
    deckTrimValue: 6.7759,
    eliteRouteBias: 8,
    restRouteBias: 12,
    forgeRouteBias: 1.7587,
    treasureRouteBias: 10.2599,
    branchingRouteBias: 4.3978,
    riskTolerance: -1.4294,
    aggressionPlanBias: -9.0094,
    controlPlanBias: 8.3649,
    tempoPlanBias: -3.7271,
    fusionPlanBias: 2.2084,
    precisionPlanBias: -1.0525,
    uncommonCardBias: -3.286,
    rareCardBias: 5.901,
    charmSynergyBias: 6.2395,
    duplicateCardPenalty: 6.8995,
    enemyProfileRespect: 4.0261,
  },
};
