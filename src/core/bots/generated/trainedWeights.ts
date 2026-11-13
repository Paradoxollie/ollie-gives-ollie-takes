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
  name: "trained-bot-20261112-234021",
  trainedAt: "2026-11-12T23:40:21.293Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 54.6511,
    shieldDiff: 87.6296,
    drawBonusDiff: 2.7935,
    manaBonusDiff: 16.5171,
    poisonDiff: 81.2126,
    controlDiff: 130.5294,
    boardStrengthDiff: 7.6648,
    boardManaDiff: 19.2184,
    stackSynergyDiff: 103.2659,
    reserveStrengthDiff: 24.1782,
    handStrengthDiff: -3.5658,
    mobilityDiff: 29.0609,
    cornerControlDiff: 22.3912,
    occupiedBoardDiff: -23.637,
    imminentRoundDamageDiff: 96.5069,
    activeTurnTempo: 19.199,
    specialCardValue: 14.0387,
    deckTrimValue: 10.9829,
    eliteRouteBias: 8,
    restRouteBias: 5.0523,
    forgeRouteBias: 10.3307,
    treasureRouteBias: 12,
    branchingRouteBias: 6.0708,
    riskTolerance: -4,
    aggressionPlanBias: -9.9712,
    controlPlanBias: 5.0621,
    tempoPlanBias: -6.9171,
    fusionPlanBias: 3.8577,
    precisionPlanBias: -6.0405,
    uncommonCardBias: 1.7428,
    rareCardBias: 11.7892,
    charmSynergyBias: 14,
    duplicateCardPenalty: 6.7496,
    enemyProfileRespect: 2.7139,
  },
};
