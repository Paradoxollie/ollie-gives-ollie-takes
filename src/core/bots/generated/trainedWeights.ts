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
  name: "trained-bot-20261109-005630",
  trainedAt: "2026-11-09T00:56:30.735Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 61.7937,
    shieldDiff: 85.79560000000001,
    drawBonusDiff: 0.4702,
    manaBonusDiff: 27.54895,
    poisonDiff: 74.548,
    controlDiff: 134.30865,
    boardStrengthDiff: 26.0808,
    boardManaDiff: 14.44415,
    stackSynergyDiff: 99.0621,
    reserveStrengthDiff: 27.9633,
    handStrengthDiff: -2.98395,
    mobilityDiff: 25.663449999999997,
    cornerControlDiff: 6.447900000000001,
    occupiedBoardDiff: -19.37785,
    imminentRoundDamageDiff: 98.3418,
    activeTurnTempo: 12.8478,
    specialCardValue: 8.8461,
    deckTrimValue: 2.34515,
    eliteRouteBias: 1.5162,
    restRouteBias: 11.39535,
    forgeRouteBias: 4.78055,
    treasureRouteBias: 2.1141,
    branchingRouteBias: 5.0333000000000006,
    riskTolerance: 0.014599999999999946,
    aggressionPlanBias: -4.3823,
    controlPlanBias: 12.13335,
    tempoPlanBias: -5.994400000000001,
    fusionPlanBias: 4.89345,
    precisionPlanBias: -6.4826500000000005,
    uncommonCardBias: 2.7051,
    rareCardBias: 6.665150000000001,
    charmSynergyBias: 10.342,
    duplicateCardPenalty: 6.30175,
    enemyProfileRespect: 1.9385,
  },
};
