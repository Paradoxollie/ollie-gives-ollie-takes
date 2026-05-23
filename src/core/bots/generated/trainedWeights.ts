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
  name: "trained-bot-20260523-041119",
  trainedAt: "2026-05-23T04:11:19.214Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 33.262766666666664,
    controlDiff: 16.589166666666667,
    boardStrengthDiff: 30.512566666666668,
    reserveStrengthDiff: 37.2883,
    handStrengthDiff: 18.049366666666668,
    mobilityDiff: -0.9122333333333333,
    cornerControlDiff: 25.876033333333336,
    occupiedBoardDiff: 19.6384,
    imminentRoundDamageDiff: -4.984766666666666,
    activeTurnTempo: -13.2087,
    specialCardValue: -18.418733333333332,
    deckTrimValue: -27.574866666666665,
    eliteRouteBias: -52.721466666666664,
    restRouteBias: -0.0679,
    forgeRouteBias: -2.4973666666666667,
    treasureRouteBias: 15.185666666666668,
    branchingRouteBias: 19.55973333333333,
    riskTolerance: 19.5218,
    aggressionPlanBias: 29.610266666666664,
    controlPlanBias: 16.7403,
    tempoPlanBias: 3.9012333333333338,
    fusionPlanBias: 16.87666666666667,
    precisionPlanBias: 3.275766666666667,
    uncommonCardBias: 3.639566666666667,
    rareCardBias: 19.3901,
    charmSynergyBias: 41.5061,
    duplicateCardPenalty: -16.825733333333336,
    enemyProfileRespect: 27.413933333333333,
  },
};
