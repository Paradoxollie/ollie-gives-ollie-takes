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
  name: "trained-bot-20260626-170249",
  trainedAt: "2026-06-26T17:02:49.756Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.0218,
    shieldDiff: 47.0694,
    drawBonusDiff: 0.9832000000000001,
    manaBonusDiff: 83.78659999999999,
    poisonDiff: 79.29285,
    controlDiff: 12.23825,
    boardStrengthDiff: 22.04385,
    boardManaDiff: 17.5541,
    stackSynergyDiff: 4.49795,
    reserveStrengthDiff: 21.5749,
    handStrengthDiff: 35.60675,
    mobilityDiff: 18.9231,
    cornerControlDiff: 17.4107,
    occupiedBoardDiff: 32.0751,
    imminentRoundDamageDiff: 53.3806,
    activeTurnTempo: 7.6858,
    specialCardValue: 4.63685,
    deckTrimValue: 0,
    eliteRouteBias: 2.6303500000000004,
    restRouteBias: 1.39065,
    forgeRouteBias: 11.910499999999999,
    treasureRouteBias: 12,
    branchingRouteBias: 9.0198,
    riskTolerance: 2.8405,
    aggressionPlanBias: 2.5138,
    controlPlanBias: 15.668500000000002,
    tempoPlanBias: 1.6754,
    fusionPlanBias: -1.4847,
    precisionPlanBias: 8.65555,
    uncommonCardBias: 8.22275,
    rareCardBias: 9.524750000000001,
    charmSynergyBias: 12.374600000000001,
    duplicateCardPenalty: 3.5241,
    enemyProfileRespect: 1.95215,
  },
};
