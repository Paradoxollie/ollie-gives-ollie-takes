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
  name: "trained-bot-20261101-061109",
  trainedAt: "2026-11-01T06:11:09.635Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.4343,
    shieldDiff: 70.5387,
    drawBonusDiff: 23.5624,
    manaBonusDiff: 40.8667,
    poisonDiff: 75.9445,
    controlDiff: 92.7212,
    boardStrengthDiff: 23.4511,
    boardManaDiff: 14.4015,
    stackSynergyDiff: 109.1754,
    reserveStrengthDiff: 22.4665,
    handStrengthDiff: -0.3296,
    mobilityDiff: 16.3979,
    cornerControlDiff: 6.7889,
    occupiedBoardDiff: -34.7289,
    imminentRoundDamageDiff: 98.5424,
    activeTurnTempo: 24.1738,
    specialCardValue: 7.8635,
    deckTrimValue: 2.0348,
    eliteRouteBias: -7.006,
    restRouteBias: 4.2917,
    forgeRouteBias: 5.4234,
    treasureRouteBias: 12,
    branchingRouteBias: 8.6027,
    riskTolerance: 3.8272,
    aggressionPlanBias: -8.0412,
    controlPlanBias: -3.3612,
    tempoPlanBias: -6.8639,
    fusionPlanBias: 3.7039,
    precisionPlanBias: -12,
    uncommonCardBias: -0.6641,
    rareCardBias: 5.3577,
    charmSynergyBias: 8.8773,
    duplicateCardPenalty: 9.1141,
    enemyProfileRespect: 6.5035,
  },
};
