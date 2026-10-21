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
  name: "trained-bot-20261021-151906",
  trainedAt: "2026-10-21T15:19:06.280Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 79.7226,
    shieldDiff: 86.2982,
    drawBonusDiff: 8.0897,
    manaBonusDiff: 75.7827,
    poisonDiff: 71.7052,
    controlDiff: 74.7068,
    boardStrengthDiff: 20.1719,
    boardManaDiff: 42.4628,
    stackSynergyDiff: 93.5896,
    reserveStrengthDiff: 11.4699,
    handStrengthDiff: 7.9071,
    mobilityDiff: 24.527,
    cornerControlDiff: 15.1395,
    occupiedBoardDiff: -25.5652,
    imminentRoundDamageDiff: 90.7692,
    activeTurnTempo: 13.4178,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: -8,
    restRouteBias: 1.3758,
    forgeRouteBias: 12,
    treasureRouteBias: 10.2567,
    branchingRouteBias: 7.1154,
    riskTolerance: -1.4785,
    aggressionPlanBias: 1.1403,
    controlPlanBias: 4.4198,
    tempoPlanBias: -8.6137,
    fusionPlanBias: -3.7039,
    precisionPlanBias: -2.8036,
    uncommonCardBias: -2.5409,
    rareCardBias: 10.9549,
    charmSynergyBias: 12.4448,
    duplicateCardPenalty: 2.3909,
    enemyProfileRespect: 9.4784,
  },
};
