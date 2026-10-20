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
  name: "trained-bot-20261020-075612",
  trainedAt: "2026-10-20T07:56:12.426Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.1256,
    shieldDiff: 92.6411,
    drawBonusDiff: 2.2292,
    manaBonusDiff: 78.9852,
    poisonDiff: 58.2138,
    controlDiff: 71.2408,
    boardStrengthDiff: 18.1859,
    boardManaDiff: 49.6649,
    stackSynergyDiff: 87.9826,
    reserveStrengthDiff: 11.7942,
    handStrengthDiff: 3.5674,
    mobilityDiff: 26.2087,
    cornerControlDiff: 15.3727,
    occupiedBoardDiff: -24.393,
    imminentRoundDamageDiff: 92.3486,
    activeTurnTempo: 28.8358,
    specialCardValue: 14.0533,
    deckTrimValue: 4.5916,
    eliteRouteBias: -1.3253,
    restRouteBias: 8.9207,
    forgeRouteBias: 0,
    treasureRouteBias: 6.2953,
    branchingRouteBias: 3.0975,
    riskTolerance: 1.2624,
    aggressionPlanBias: 7.6284,
    controlPlanBias: -6.3684,
    tempoPlanBias: -7.3816,
    fusionPlanBias: 16.624,
    precisionPlanBias: -11.0013,
    uncommonCardBias: -0.207,
    rareCardBias: 11.1706,
    charmSynergyBias: 4.2875,
    duplicateCardPenalty: 4.4919,
    enemyProfileRespect: 5.2362,
  },
};
