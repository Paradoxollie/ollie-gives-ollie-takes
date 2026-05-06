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
  name: "trained-bot-20260506-170943",
  trainedAt: "2026-05-06T17:09:43.623Z",
  iterations: 12,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 16.559,
    controlDiff: 8.396,
    boardStrengthDiff: 4.8175,
    reserveStrengthDiff: 8.589,
    handStrengthDiff: -11.3868,
    mobilityDiff: 4.0708,
    cornerControlDiff: 10.4773,
    occupiedBoardDiff: -4.6395,
    imminentRoundDamageDiff: 15.1468,
    activeTurnTempo: -20.9587,
    specialCardValue: 1.7357,
    deckTrimValue: -24.1894,
    eliteRouteBias: -30.2542,
    restRouteBias: -1.433,
    forgeRouteBias: -11.1669,
    treasureRouteBias: 7.6757,
    branchingRouteBias: 26.3246,
    riskTolerance: 2.6007,
    aggressionPlanBias: 13.7661,
    controlPlanBias: 14.7727,
    tempoPlanBias: -10.0372,
    fusionPlanBias: 18.1493,
    precisionPlanBias: 6.507,
    uncommonCardBias: -6.6263,
    rareCardBias: 16.4795,
    charmSynergyBias: 27.2526,
    duplicateCardPenalty: 1.7974,
    enemyProfileRespect: 25.0056,
  },
};
