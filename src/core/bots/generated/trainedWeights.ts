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
  name: "trained-bot-20260527-045217",
  trainedAt: "2026-05-27T04:52:17.309Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 53.62356666666667,
    controlDiff: 16.742766666666668,
    boardStrengthDiff: 30.882233333333332,
    reserveStrengthDiff: 28.499899999999997,
    handStrengthDiff: 9.735533333333333,
    mobilityDiff: 8.007166666666668,
    cornerControlDiff: 30.492033333333335,
    occupiedBoardDiff: 14.754266666666666,
    imminentRoundDamageDiff: -25.34626666666667,
    activeTurnTempo: -28.772333333333332,
    specialCardValue: 3.316466666666667,
    deckTrimValue: -25.032866666666667,
    eliteRouteBias: -75.12063333333334,
    restRouteBias: -9.360033333333334,
    forgeRouteBias: 5.403266666666667,
    treasureRouteBias: 34.647999999999996,
    branchingRouteBias: 28.933633333333333,
    riskTolerance: 29.3947,
    aggressionPlanBias: 7.311566666666667,
    controlPlanBias: 22.626599999999996,
    tempoPlanBias: -5.299333333333333,
    fusionPlanBias: 23.39623333333333,
    precisionPlanBias: 20.112466666666666,
    uncommonCardBias: 16.7955,
    rareCardBias: 17.911133333333336,
    charmSynergyBias: 29.30243333333333,
    duplicateCardPenalty: -20.77253333333333,
    enemyProfileRespect: 18.72556666666667,
  },
};
