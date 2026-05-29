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
  name: "trained-bot-20260528-224740",
  trainedAt: "2026-05-28T22:47:40.836Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 50.5093,
    controlDiff: 21.8459,
    boardStrengthDiff: 44.0008,
    reserveStrengthDiff: 53.4925,
    handStrengthDiff: -13.5672,
    mobilityDiff: -5.2444,
    cornerControlDiff: 46.1826,
    occupiedBoardDiff: 28.2931,
    imminentRoundDamageDiff: -20.5884,
    activeTurnTempo: -22.0067,
    specialCardValue: 12.2694,
    deckTrimValue: -27.9051,
    eliteRouteBias: -57.5021,
    restRouteBias: -20.7003,
    forgeRouteBias: 28.0923,
    treasureRouteBias: 23.6564,
    branchingRouteBias: 18.5731,
    riskTolerance: 40.432,
    aggressionPlanBias: 2.7169,
    controlPlanBias: 35.1384,
    tempoPlanBias: -5.3276,
    fusionPlanBias: 5.0416,
    precisionPlanBias: 1.689,
    uncommonCardBias: 16.3744,
    rareCardBias: 36.7398,
    charmSynergyBias: 33.8963,
    duplicateCardPenalty: -9.1903,
    enemyProfileRespect: 18.3139,
  },
};
