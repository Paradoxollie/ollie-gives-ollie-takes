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
  name: "trained-bot-20260624-053544",
  trainedAt: "2026-06-24T05:35:44.333Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.7701,
    shieldDiff: 53.7048,
    drawBonusDiff: 7.3522,
    manaBonusDiff: 85.5173,
    poisonDiff: 91.6138,
    controlDiff: 7.1495,
    boardStrengthDiff: 32.28,
    boardManaDiff: 16.6445,
    stackSynergyDiff: 3.9427,
    reserveStrengthDiff: 19.541,
    handStrengthDiff: 45.3818,
    mobilityDiff: 16.4765,
    cornerControlDiff: 51.8115,
    occupiedBoardDiff: 14.1202,
    imminentRoundDamageDiff: 67.6128,
    activeTurnTempo: 11.9369,
    specialCardValue: 16.677,
    deckTrimValue: 6.2846,
    eliteRouteBias: 0.8571,
    restRouteBias: 9.6534,
    forgeRouteBias: 11.3878,
    treasureRouteBias: 5.2847,
    branchingRouteBias: 2.3058,
    riskTolerance: -0.2912,
    aggressionPlanBias: -9.235,
    controlPlanBias: 17.2525,
    tempoPlanBias: 16.0108,
    fusionPlanBias: -2.0478,
    precisionPlanBias: 3.7934,
    uncommonCardBias: -0.4439,
    rareCardBias: -0.9784,
    charmSynergyBias: -3.0828,
    duplicateCardPenalty: 8.7287,
    enemyProfileRespect: 8.1341,
  },
};
