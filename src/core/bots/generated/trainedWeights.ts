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
  name: "trained-bot-20260521-201350",
  trainedAt: "2026-05-21T20:13:50.748Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 32.9856,
    controlDiff: 12.4859,
    boardStrengthDiff: 21.7004,
    reserveStrengthDiff: 42.7637,
    handStrengthDiff: -7.63,
    mobilityDiff: 10.9687,
    cornerControlDiff: 28.7278,
    occupiedBoardDiff: 6.1597,
    imminentRoundDamageDiff: -10.9857,
    activeTurnTempo: -20.5881,
    specialCardValue: -22.9145,
    deckTrimValue: -22.0629,
    eliteRouteBias: -40.7307,
    restRouteBias: 5.135,
    forgeRouteBias: -10.0299,
    treasureRouteBias: 11.2344,
    branchingRouteBias: 23.127,
    riskTolerance: 9.263,
    aggressionPlanBias: 30.8351,
    controlPlanBias: 18.9102,
    tempoPlanBias: 2.1727,
    fusionPlanBias: 23.0613,
    precisionPlanBias: 2.4432,
    uncommonCardBias: 1.8776,
    rareCardBias: 6.5721,
    charmSynergyBias: 36.5505,
    duplicateCardPenalty: -9.861,
    enemyProfileRespect: 33.863,
  },
};
