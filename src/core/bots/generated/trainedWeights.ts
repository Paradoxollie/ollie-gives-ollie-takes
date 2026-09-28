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
  name: "trained-bot-20260928-052809",
  trainedAt: "2026-09-28T05:28:09.342Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.7125,
    shieldDiff: 105.4126,
    drawBonusDiff: 18.6654,
    manaBonusDiff: 63.7044,
    poisonDiff: 61.7755,
    controlDiff: 33.6858,
    boardStrengthDiff: 24.8055,
    boardManaDiff: 60.0562,
    stackSynergyDiff: 70.513,
    reserveStrengthDiff: 5.7535,
    handStrengthDiff: -6.8041,
    mobilityDiff: 12.5768,
    cornerControlDiff: 9.9014,
    occupiedBoardDiff: -25.9597,
    imminentRoundDamageDiff: 29.8668,
    activeTurnTempo: 24.0605,
    specialCardValue: 16.352,
    deckTrimValue: 10.0999,
    eliteRouteBias: 2.3746,
    restRouteBias: 10.7503,
    forgeRouteBias: 0,
    treasureRouteBias: 8.3015,
    branchingRouteBias: 0.775,
    riskTolerance: 5.8927,
    aggressionPlanBias: 3.7,
    controlPlanBias: 3.4605,
    tempoPlanBias: -7.825,
    fusionPlanBias: -12,
    precisionPlanBias: -8.1393,
    uncommonCardBias: 10,
    rareCardBias: 4.8431,
    charmSynergyBias: -0.2212,
    duplicateCardPenalty: 9.9724,
    enemyProfileRespect: 0,
  },
};
