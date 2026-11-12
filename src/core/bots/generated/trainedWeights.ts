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
  name: "trained-bot-20261112-155121",
  trainedAt: "2026-11-12T15:51:21.471Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 62.5244,
    shieldDiff: 86.3193,
    drawBonusDiff: 1.2742,
    manaBonusDiff: 14.1715,
    poisonDiff: 77.941,
    controlDiff: 130.7461,
    boardStrengthDiff: 11.0715,
    boardManaDiff: 16.4963,
    stackSynergyDiff: 100.1828,
    reserveStrengthDiff: 24.5331,
    handStrengthDiff: -3.6939,
    mobilityDiff: 26.9033,
    cornerControlDiff: 26.2165,
    occupiedBoardDiff: -22.0884,
    imminentRoundDamageDiff: 96.4178,
    activeTurnTempo: 17.0022,
    specialCardValue: 15.0592,
    deckTrimValue: 8.932,
    eliteRouteBias: 4.8601,
    restRouteBias: 6.2917,
    forgeRouteBias: 12,
    treasureRouteBias: 11.0546,
    branchingRouteBias: 6.6382,
    riskTolerance: -3.9785,
    aggressionPlanBias: -11.2868,
    controlPlanBias: 7.7622,
    tempoPlanBias: -3.4994,
    fusionPlanBias: 3.9024,
    precisionPlanBias: -7.6367,
    uncommonCardBias: 4.7661,
    rareCardBias: 12,
    charmSynergyBias: 11.3166,
    duplicateCardPenalty: 6.1445,
    enemyProfileRespect: 0.5138,
  },
};
