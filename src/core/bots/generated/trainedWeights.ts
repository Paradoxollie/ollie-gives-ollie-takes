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
  name: "trained-bot-20260906-153429",
  trainedAt: "2026-09-06T15:34:29.031Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 66.3022,
    shieldDiff: 117.3634,
    drawBonusDiff: 45.5763,
    manaBonusDiff: 85.2422,
    poisonDiff: 54.2893,
    controlDiff: 59.7437,
    boardStrengthDiff: 0.1573,
    boardManaDiff: 66.013,
    stackSynergyDiff: 33.6678,
    reserveStrengthDiff: 27.2597,
    handStrengthDiff: 1.8107,
    mobilityDiff: 29.4127,
    cornerControlDiff: 29.5337,
    occupiedBoardDiff: -26.913,
    imminentRoundDamageDiff: 83.3077,
    activeTurnTempo: 36.3545,
    specialCardValue: 4.9943,
    deckTrimValue: 0,
    eliteRouteBias: 4.3175,
    restRouteBias: 7.5427,
    forgeRouteBias: 9.4533,
    treasureRouteBias: 11.2774,
    branchingRouteBias: 4.2944,
    riskTolerance: -4,
    aggressionPlanBias: -2.3857,
    controlPlanBias: 13.4782,
    tempoPlanBias: 2.6425,
    fusionPlanBias: -1.4312,
    precisionPlanBias: -1.2759,
    uncommonCardBias: -2.9579,
    rareCardBias: -2.7576,
    charmSynergyBias: 11.5057,
    duplicateCardPenalty: 7.7269,
    enemyProfileRespect: 10,
  },
};
