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
  name: "trained-bot-20260709-055330",
  trainedAt: "2026-07-09T05:53:30.078Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.152,
    shieldDiff: 61.73425,
    drawBonusDiff: 16.6879,
    manaBonusDiff: 63.752449999999996,
    poisonDiff: 67.7692,
    controlDiff: 13.531649999999999,
    boardStrengthDiff: 25.7125,
    boardManaDiff: 4.9889,
    stackSynergyDiff: 9.64865,
    reserveStrengthDiff: 23.459600000000002,
    handStrengthDiff: 10.8777,
    mobilityDiff: 26.6939,
    cornerControlDiff: 5.08085,
    occupiedBoardDiff: 42.09535,
    imminentRoundDamageDiff: 75.02895,
    activeTurnTempo: 12.5351,
    specialCardValue: 15.0332,
    deckTrimValue: 10.85015,
    eliteRouteBias: -1.45785,
    restRouteBias: 0,
    forgeRouteBias: 1.4540000000000002,
    treasureRouteBias: 8.931750000000001,
    branchingRouteBias: 8.448550000000001,
    riskTolerance: 7.44575,
    aggressionPlanBias: -0.7919,
    controlPlanBias: 11.13505,
    tempoPlanBias: -7.4711,
    fusionPlanBias: 7.25345,
    precisionPlanBias: 8.876850000000001,
    uncommonCardBias: 8.83955,
    rareCardBias: 5.6021,
    charmSynergyBias: 13.478850000000001,
    duplicateCardPenalty: 1.4136,
    enemyProfileRespect: 1.7667,
  },
};
