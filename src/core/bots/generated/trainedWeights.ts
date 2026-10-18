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
  name: "trained-bot-20261018-153906",
  trainedAt: "2026-10-18T15:39:06.422Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.5586,
    shieldDiff: 85.429,
    drawBonusDiff: 0,
    manaBonusDiff: 84.3131,
    poisonDiff: 65.868,
    controlDiff: 64.5625,
    boardStrengthDiff: 24.4452,
    boardManaDiff: 54.6632,
    stackSynergyDiff: 92.4104,
    reserveStrengthDiff: 27.5589,
    handStrengthDiff: 17.2478,
    mobilityDiff: 22.9387,
    cornerControlDiff: 3.2503,
    occupiedBoardDiff: -21.9475,
    imminentRoundDamageDiff: 76.8794,
    activeTurnTempo: 37.2223,
    specialCardValue: 13.0266,
    deckTrimValue: 0,
    eliteRouteBias: 4.6389,
    restRouteBias: 1.8325,
    forgeRouteBias: 3.803,
    treasureRouteBias: 0,
    branchingRouteBias: 3.1033,
    riskTolerance: 2.7438,
    aggressionPlanBias: 0.0102,
    controlPlanBias: -5.0734,
    tempoPlanBias: -10.7503,
    fusionPlanBias: 17.4033,
    precisionPlanBias: -3.9744,
    uncommonCardBias: 2.634,
    rareCardBias: 6.2658,
    charmSynergyBias: -2.832,
    duplicateCardPenalty: 7.3208,
    enemyProfileRespect: 2.9269,
  },
};
