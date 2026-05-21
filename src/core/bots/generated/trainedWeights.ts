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
  name: "trained-bot-20260521-044824",
  trainedAt: "2026-05-21T04:48:24.372Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 26.15421111111111,
    controlDiff: 14.865244444444444,
    boardStrengthDiff: 20.9132,
    reserveStrengthDiff: 43.57935555555556,
    handStrengthDiff: -11.033700000000001,
    mobilityDiff: 9.112977777777777,
    cornerControlDiff: 19.76172222222222,
    occupiedBoardDiff: 4.955377777777778,
    imminentRoundDamageDiff: -12.825466666666665,
    activeTurnTempo: -26.151522222222223,
    specialCardValue: -11.902733333333332,
    deckTrimValue: -23.457055555555556,
    eliteRouteBias: -40.64267777777778,
    restRouteBias: 3.195611111111111,
    forgeRouteBias: -10.957655555555554,
    treasureRouteBias: 19.19311111111111,
    branchingRouteBias: 26.358544444444448,
    riskTolerance: 4.6201,
    aggressionPlanBias: 34.28986666666666,
    controlPlanBias: 18.737144444444443,
    tempoPlanBias: 0.9305222222222223,
    fusionPlanBias: 31.376000000000005,
    precisionPlanBias: -3.270177777777778,
    uncommonCardBias: -7.4081777777777775,
    rareCardBias: 4.063866666666667,
    charmSynergyBias: 34.74763333333333,
    duplicateCardPenalty: -5.586611111111111,
    enemyProfileRespect: 36.29804444444444,
  },
};
