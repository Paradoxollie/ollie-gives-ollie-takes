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
  name: "trained-bot-20260526-161245",
  trainedAt: "2026-05-26T16:12:45.216Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 60.1178,
    controlDiff: 20.9158,
    boardStrengthDiff: 22.8139,
    reserveStrengthDiff: 26.5881,
    handStrengthDiff: 11.7472,
    mobilityDiff: 10.5444,
    cornerControlDiff: 21.1512,
    occupiedBoardDiff: 10.8939,
    imminentRoundDamageDiff: -24.202,
    activeTurnTempo: -27.1282,
    specialCardValue: -1.6151,
    deckTrimValue: -30.3656,
    eliteRouteBias: -71.3498,
    restRouteBias: -6.4672,
    forgeRouteBias: 6.749,
    treasureRouteBias: 21.3991,
    branchingRouteBias: 25.1721,
    riskTolerance: 29.6572,
    aggressionPlanBias: 9.3257,
    controlPlanBias: 12.576,
    tempoPlanBias: -7.4354,
    fusionPlanBias: 15.9981,
    precisionPlanBias: 16.5829,
    uncommonCardBias: 13.0016,
    rareCardBias: 24.4406,
    charmSynergyBias: 24.1984,
    duplicateCardPenalty: -20.4037,
    enemyProfileRespect: 14.955,
  },
};
