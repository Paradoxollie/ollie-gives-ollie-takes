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
  name: "trained-bot-20260531-194327",
  trainedAt: "2026-05-31T19:43:27.021Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 80.9285,
    controlDiff: 8.0312,
    boardStrengthDiff: 40.2239,
    reserveStrengthDiff: 58.4139,
    handStrengthDiff: -1.5668,
    mobilityDiff: 10.131,
    cornerControlDiff: 33.5874,
    occupiedBoardDiff: 29.2246,
    imminentRoundDamageDiff: -10.4097,
    activeTurnTempo: -19.638,
    specialCardValue: 9.4269,
    deckTrimValue: -16.7187,
    eliteRouteBias: -57.7778,
    restRouteBias: 4.5057,
    forgeRouteBias: 19.4336,
    treasureRouteBias: 32.659,
    branchingRouteBias: 13.7671,
    riskTolerance: 43.8365,
    aggressionPlanBias: 20.8277,
    controlPlanBias: 20.6319,
    tempoPlanBias: -6.8557,
    fusionPlanBias: -7.3323,
    precisionPlanBias: 1.2532,
    uncommonCardBias: 34.1634,
    rareCardBias: 40.8867,
    charmSynergyBias: 62.2695,
    duplicateCardPenalty: 5.5266,
    enemyProfileRespect: 3.014,
  },
};
