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
  name: "trained-bot-20260926-213049",
  trainedAt: "2026-09-26T21:30:49.133Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 71.6348,
    shieldDiff: 111.013,
    drawBonusDiff: 27.2493,
    manaBonusDiff: 63.7678,
    poisonDiff: 59.8562,
    controlDiff: 36.6585,
    boardStrengthDiff: 21.1775,
    boardManaDiff: 58.2036,
    stackSynergyDiff: 70.0063,
    reserveStrengthDiff: 8.4689,
    handStrengthDiff: -0.6955,
    mobilityDiff: 19.6151,
    cornerControlDiff: 14.4209,
    occupiedBoardDiff: -23.2065,
    imminentRoundDamageDiff: 32.3843,
    activeTurnTempo: 29.5438,
    specialCardValue: 15.2782,
    deckTrimValue: 10.6826,
    eliteRouteBias: 1.8077,
    restRouteBias: 9.7721,
    forgeRouteBias: 2.2882,
    treasureRouteBias: 9.3364,
    branchingRouteBias: 4.3292,
    riskTolerance: -0.5254,
    aggressionPlanBias: 2.5611,
    controlPlanBias: 4.3942,
    tempoPlanBias: -9.3128,
    fusionPlanBias: -8.7174,
    precisionPlanBias: -6.7086,
    uncommonCardBias: 10,
    rareCardBias: 4.499,
    charmSynergyBias: -4,
    duplicateCardPenalty: 7.7838,
    enemyProfileRespect: 0.1833,
  },
};
