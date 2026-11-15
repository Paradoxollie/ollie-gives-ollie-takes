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
  name: "trained-bot-20261115-063814",
  trainedAt: "2026-11-15T06:38:14.653Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 52.889,
    shieldDiff: 86.221,
    drawBonusDiff: 6.1573,
    manaBonusDiff: 12.9556,
    poisonDiff: 76.243,
    controlDiff: 118.9703,
    boardStrengthDiff: 8.9415,
    boardManaDiff: 26.694,
    stackSynergyDiff: 114.0508,
    reserveStrengthDiff: 30,
    handStrengthDiff: 5.8388,
    mobilityDiff: 24.3151,
    cornerControlDiff: 14.1523,
    occupiedBoardDiff: -29.1177,
    imminentRoundDamageDiff: 97.4994,
    activeTurnTempo: 17.4426,
    specialCardValue: 15.7366,
    deckTrimValue: 2.6347,
    eliteRouteBias: -2.7924,
    restRouteBias: 8.9745,
    forgeRouteBias: 7.9953,
    treasureRouteBias: 6.8281,
    branchingRouteBias: 9.7701,
    riskTolerance: -2.9822,
    aggressionPlanBias: -11.7938,
    controlPlanBias: -3.1725,
    tempoPlanBias: -12,
    fusionPlanBias: 0.3644,
    precisionPlanBias: 0.6896,
    uncommonCardBias: -3.2985,
    rareCardBias: 12,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
