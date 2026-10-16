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
  name: "trained-bot-20261016-175243",
  trainedAt: "2026-10-16T17:52:43.059Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.1845,
    shieldDiff: 76.8003,
    drawBonusDiff: 0,
    manaBonusDiff: 88.5758,
    poisonDiff: 52.136,
    controlDiff: 65.7342,
    boardStrengthDiff: 31.4774,
    boardManaDiff: 52.591,
    stackSynergyDiff: 95.3658,
    reserveStrengthDiff: 30,
    handStrengthDiff: 19.6393,
    mobilityDiff: 22.4908,
    cornerControlDiff: 0,
    occupiedBoardDiff: -23.5832,
    imminentRoundDamageDiff: 63.8003,
    activeTurnTempo: 32.4214,
    specialCardValue: 16.5739,
    deckTrimValue: 1.6182,
    eliteRouteBias: 7.4769,
    restRouteBias: 0,
    forgeRouteBias: 1.2261,
    treasureRouteBias: 6.2184,
    branchingRouteBias: 4.1458,
    riskTolerance: -2.8054,
    aggressionPlanBias: -2.1326,
    controlPlanBias: -0.2738,
    tempoPlanBias: -3.8656,
    fusionPlanBias: 17.806,
    precisionPlanBias: -12,
    uncommonCardBias: -0.2164,
    rareCardBias: 11.3506,
    charmSynergyBias: 0.936,
    duplicateCardPenalty: 6.2993,
    enemyProfileRespect: 3.6786,
  },
};
