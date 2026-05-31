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
  name: "trained-bot-20260531-221714",
  trainedAt: "2026-05-31T22:17:14.545Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 87.8608,
    controlDiff: 3.1086,
    boardStrengthDiff: 38.9823,
    reserveStrengthDiff: 61.4636,
    handStrengthDiff: -0.195,
    mobilityDiff: 9.2309,
    cornerControlDiff: 28.5977,
    occupiedBoardDiff: 25.6492,
    imminentRoundDamageDiff: -10.8588,
    activeTurnTempo: -18.3679,
    specialCardValue: 9.9378,
    deckTrimValue: -10.4342,
    eliteRouteBias: -57.3318,
    restRouteBias: 8.9141,
    forgeRouteBias: 19.0782,
    treasureRouteBias: 33.0559,
    branchingRouteBias: 12.5353,
    riskTolerance: 40.4129,
    aggressionPlanBias: 20.8569,
    controlPlanBias: 19.4666,
    tempoPlanBias: 0.5474,
    fusionPlanBias: -6.1342,
    precisionPlanBias: -0.3761,
    uncommonCardBias: 32.804,
    rareCardBias: 38.629,
    charmSynergyBias: 59.527,
    duplicateCardPenalty: 5.7838,
    enemyProfileRespect: 4.837,
  },
};
