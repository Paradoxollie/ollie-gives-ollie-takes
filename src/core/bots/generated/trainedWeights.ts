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
  name: "trained-bot-20260529-161040",
  trainedAt: "2026-05-29T16:10:40.254Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 53.7807,
    controlDiff: 14.6967,
    boardStrengthDiff: 42.0927,
    reserveStrengthDiff: 51.0631,
    handStrengthDiff: -19.657,
    mobilityDiff: -2.369,
    cornerControlDiff: 47.3304,
    occupiedBoardDiff: 31.2381,
    imminentRoundDamageDiff: -17.7398,
    activeTurnTempo: -28.491,
    specialCardValue: -0.5673,
    deckTrimValue: -21.0633,
    eliteRouteBias: -64.5534,
    restRouteBias: -8.1249,
    forgeRouteBias: 26.324,
    treasureRouteBias: 21.302,
    branchingRouteBias: 12.6521,
    riskTolerance: 47.7205,
    aggressionPlanBias: 7.8135,
    controlPlanBias: 37.6888,
    tempoPlanBias: -8.5903,
    fusionPlanBias: 4.352,
    precisionPlanBias: 0.3554,
    uncommonCardBias: 23.8392,
    rareCardBias: 44.4041,
    charmSynergyBias: 40.568,
    duplicateCardPenalty: -6.7301,
    enemyProfileRespect: 19.0788,
  },
};
