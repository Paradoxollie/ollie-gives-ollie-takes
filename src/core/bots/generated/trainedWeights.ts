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
  name: "trained-bot-20261107-165619",
  trainedAt: "2026-11-07T16:56:19.952Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.6529,
    shieldDiff: 90.1872,
    drawBonusDiff: 1.4735,
    manaBonusDiff: 23.4029,
    poisonDiff: 72.6704,
    controlDiff: 131.766,
    boardStrengthDiff: 26.0808,
    boardManaDiff: 14.4222,
    stackSynergyDiff: 110.3875,
    reserveStrengthDiff: 18.4732,
    handStrengthDiff: -9.3299,
    mobilityDiff: 26.8917,
    cornerControlDiff: 3.0745,
    occupiedBoardDiff: -19.8325,
    imminentRoundDamageDiff: 98.5756,
    activeTurnTempo: 23.3107,
    specialCardValue: 13.3107,
    deckTrimValue: 0,
    eliteRouteBias: -4.3435,
    restRouteBias: 5.6606,
    forgeRouteBias: 11.2858,
    treasureRouteBias: 11.6362,
    branchingRouteBias: 10,
    riskTolerance: 4.3066,
    aggressionPlanBias: -8.2691,
    controlPlanBias: 15.3426,
    tempoPlanBias: -7.4854,
    fusionPlanBias: 0.9757,
    precisionPlanBias: -3.8982,
    uncommonCardBias: -4,
    rareCardBias: 4.4675,
    charmSynergyBias: 6.843,
    duplicateCardPenalty: 9.116,
    enemyProfileRespect: 5.2342,
  },
};
