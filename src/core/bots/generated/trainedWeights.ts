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
  name: "trained-bot-20260731-111050",
  trainedAt: "2026-07-31T11:10:50.145Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 124.44220000000001,
    shieldDiff: 53.5328,
    drawBonusDiff: 41.5253,
    manaBonusDiff: 55.944975,
    poisonDiff: 54.415324999999996,
    controlDiff: 80.234,
    boardStrengthDiff: 27.52795,
    boardManaDiff: 34.640575,
    stackSynergyDiff: 20.190199999999997,
    reserveStrengthDiff: 14.496825,
    handStrengthDiff: 28.07775,
    mobilityDiff: 20.651525,
    cornerControlDiff: 0.217775,
    occupiedBoardDiff: 6.6136,
    imminentRoundDamageDiff: 41.722899999999996,
    activeTurnTempo: 21.244349999999997,
    specialCardValue: 18,
    deckTrimValue: 1.256775,
    eliteRouteBias: -1.0233499999999998,
    restRouteBias: 11.85215,
    forgeRouteBias: 5.590275,
    treasureRouteBias: 12,
    branchingRouteBias: 2.628225,
    riskTolerance: 7.062925,
    aggressionPlanBias: 1.46845,
    controlPlanBias: 13.743175,
    tempoPlanBias: 1.8044000000000002,
    fusionPlanBias: 17.2793,
    precisionPlanBias: 14.683150000000001,
    uncommonCardBias: -2.197125,
    rareCardBias: 3.0781,
    charmSynergyBias: 7.18005,
    duplicateCardPenalty: 7.399424999999999,
    enemyProfileRespect: 2.3803,
  },
};
