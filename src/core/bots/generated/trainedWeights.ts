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
  name: "trained-bot-20260520-044022",
  trainedAt: "2026-05-20T04:40:22.713Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 19.0462,
    controlDiff: 12.4901,
    boardStrengthDiff: 18.573,
    reserveStrengthDiff: 30.1434,
    handStrengthDiff: -7.1231,
    mobilityDiff: 10.6989,
    cornerControlDiff: 13.0004,
    occupiedBoardDiff: -0.2182,
    imminentRoundDamageDiff: -6.0494,
    activeTurnTempo: -26.6502,
    specialCardValue: -7.8608,
    deckTrimValue: -11.1781,
    eliteRouteBias: -37.6548,
    restRouteBias: 3.9145,
    forgeRouteBias: -13.9783,
    treasureRouteBias: 28.4388,
    branchingRouteBias: 27.4568,
    riskTolerance: 7.5218,
    aggressionPlanBias: 23.4623,
    controlPlanBias: 20.8132,
    tempoPlanBias: -7.3218,
    fusionPlanBias: 21.2738,
    precisionPlanBias: 2.6402,
    uncommonCardBias: -11.2281,
    rareCardBias: 3.3046,
    charmSynergyBias: 34.8815,
    duplicateCardPenalty: -2.0289,
    enemyProfileRespect: 23.7355,
  },
};
