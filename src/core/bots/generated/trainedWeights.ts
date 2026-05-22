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
  name: "trained-bot-20260522-132051",
  trainedAt: "2026-05-22T13:20:51.783Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 33.4696,
    controlDiff: 11.6716,
    boardStrengthDiff: 22.0423,
    reserveStrengthDiff: 40.8127,
    handStrengthDiff: 8.3761,
    mobilityDiff: 7.3111,
    cornerControlDiff: 32.7753,
    occupiedBoardDiff: 15.8635,
    imminentRoundDamageDiff: -6.981,
    activeTurnTempo: -16.5431,
    specialCardValue: -23.3611,
    deckTrimValue: -23.0211,
    eliteRouteBias: -48.8949,
    restRouteBias: 3.1082,
    forgeRouteBias: -4.2593,
    treasureRouteBias: 10.2399,
    branchingRouteBias: 19.6047,
    riskTolerance: 13.7534,
    aggressionPlanBias: 29.6406,
    controlPlanBias: 15.4163,
    tempoPlanBias: 1.2207,
    fusionPlanBias: 21.0329,
    precisionPlanBias: 6.6391,
    uncommonCardBias: 3.9483,
    rareCardBias: 16.7521,
    charmSynergyBias: 44.0087,
    duplicateCardPenalty: -7.1022,
    enemyProfileRespect: 36.699,
  },
};
