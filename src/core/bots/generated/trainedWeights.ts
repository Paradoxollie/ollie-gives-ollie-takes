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
  name: "trained-bot-20260716-234831",
  trainedAt: "2026-07-16T23:48:31.781Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 126.94525,
    shieldDiff: 68.5437,
    drawBonusDiff: 25.35635,
    manaBonusDiff: 44.48315,
    poisonDiff: 69.01625,
    controlDiff: 42.975449999999995,
    boardStrengthDiff: 51.57155,
    boardManaDiff: 10.31225,
    stackSynergyDiff: 37.52505,
    reserveStrengthDiff: 16.4459,
    handStrengthDiff: 20.45005,
    mobilityDiff: 23.48285,
    cornerControlDiff: 6.3431,
    occupiedBoardDiff: 6.3114,
    imminentRoundDamageDiff: 66.42485,
    activeTurnTempo: 34.34845,
    specialCardValue: 16.72985,
    deckTrimValue: 10.9022,
    eliteRouteBias: 2.366,
    restRouteBias: 10.9179,
    forgeRouteBias: 5.01135,
    treasureRouteBias: 9.9444,
    branchingRouteBias: 6.3401,
    riskTolerance: 3.59625,
    aggressionPlanBias: 5.0754,
    controlPlanBias: 4.3248,
    tempoPlanBias: -5.43755,
    fusionPlanBias: 8.628,
    precisionPlanBias: -10.62915,
    uncommonCardBias: 4.87045,
    rareCardBias: 0.6235999999999999,
    charmSynergyBias: 3.9593,
    duplicateCardPenalty: 5.7517499999999995,
    enemyProfileRespect: 9.059650000000001,
  },
};
