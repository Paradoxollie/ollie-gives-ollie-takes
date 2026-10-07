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
  name: "trained-bot-20261007-060413",
  trainedAt: "2026-10-07T06:04:13.148Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 58.1663,
    shieldDiff: 82.9112,
    drawBonusDiff: 12.1689,
    manaBonusDiff: 76.088,
    poisonDiff: 63.2405,
    controlDiff: 25.3728,
    boardStrengthDiff: 22.2624,
    boardManaDiff: 69.2114,
    stackSynergyDiff: 74.9726,
    reserveStrengthDiff: 15.7977,
    handStrengthDiff: 9.09,
    mobilityDiff: -10,
    cornerControlDiff: 7.9734,
    occupiedBoardDiff: -14.9771,
    imminentRoundDamageDiff: 39.8396,
    activeTurnTempo: 13.2295,
    specialCardValue: 15.2723,
    deckTrimValue: 4.9369,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 3.9398,
    branchingRouteBias: 10,
    riskTolerance: 5.1492,
    aggressionPlanBias: -4.9132,
    controlPlanBias: 16.2189,
    tempoPlanBias: -10.1621,
    fusionPlanBias: -6.3859,
    precisionPlanBias: -1.2412,
    uncommonCardBias: 4.069,
    rareCardBias: 4.9689,
    charmSynergyBias: 6.9382,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0.5858,
  },
};
