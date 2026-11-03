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
  name: "trained-bot-20261103-010014",
  trainedAt: "2026-11-03T01:00:14.052Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.66640000000001,
    shieldDiff: 73.56344999999999,
    drawBonusDiff: 15.933050000000001,
    manaBonusDiff: 41.1407,
    poisonDiff: 72.4622,
    controlDiff: 94.57755,
    boardStrengthDiff: 21.381149999999998,
    boardManaDiff: 9.348600000000001,
    stackSynergyDiff: 113.1396,
    reserveStrengthDiff: 21.4543,
    handStrengthDiff: -0.46,
    mobilityDiff: 21.041449999999998,
    cornerControlDiff: 15.2582,
    occupiedBoardDiff: -39.2479,
    imminentRoundDamageDiff: 96.26859999999999,
    activeTurnTempo: 28.09985,
    specialCardValue: 12.1494,
    deckTrimValue: 0.5831,
    eliteRouteBias: -7.3223,
    restRouteBias: 4.4633,
    forgeRouteBias: 3.2662999999999998,
    treasureRouteBias: 12,
    branchingRouteBias: 4.032150000000001,
    riskTolerance: 5.58015,
    aggressionPlanBias: -4.848050000000001,
    controlPlanBias: 2.7576,
    tempoPlanBias: -8.5966,
    fusionPlanBias: 2.6529999999999996,
    precisionPlanBias: -8.5887,
    uncommonCardBias: 1.30435,
    rareCardBias: 1.3552499999999998,
    charmSynergyBias: 8.17295,
    duplicateCardPenalty: 3.817,
    enemyProfileRespect: 3.4775,
  },
};
