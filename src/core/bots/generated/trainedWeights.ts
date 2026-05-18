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
  name: "trained-bot-20260518-180731",
  trainedAt: "2026-05-18T18:07:31.707Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 8.8703,
    controlDiff: 4.1445,
    boardStrengthDiff: 7.2526,
    reserveStrengthDiff: 16.4436,
    handStrengthDiff: -24.8074,
    mobilityDiff: 7.8904,
    cornerControlDiff: 9.9344,
    occupiedBoardDiff: 5.2074,
    imminentRoundDamageDiff: 8.941,
    activeTurnTempo: -19.3675,
    specialCardValue: 2.1403,
    deckTrimValue: -22.1008,
    eliteRouteBias: -36.3246,
    restRouteBias: -7.8425,
    forgeRouteBias: -15.4362,
    treasureRouteBias: 13.2644,
    branchingRouteBias: 35.5468,
    riskTolerance: 5.5352,
    aggressionPlanBias: 16.0544,
    controlPlanBias: 11.8761,
    tempoPlanBias: -8.729,
    fusionPlanBias: 17.4445,
    precisionPlanBias: 2.8473,
    uncommonCardBias: -11.2376,
    rareCardBias: 14.6303,
    charmSynergyBias: 27.4185,
    duplicateCardPenalty: 0.298,
    enemyProfileRespect: 23.9106,
  },
};
