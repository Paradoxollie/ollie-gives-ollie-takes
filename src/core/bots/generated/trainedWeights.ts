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
  name: "trained-bot-20261115-225151",
  trainedAt: "2026-11-15T22:51:51.835Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 51.5637,
    shieldDiff: 81.6468,
    drawBonusDiff: 12.4047,
    manaBonusDiff: 15.1074,
    poisonDiff: 78.1143,
    controlDiff: 116.8365,
    boardStrengthDiff: 13.4919,
    boardManaDiff: 26.6927,
    stackSynergyDiff: 112.3895,
    reserveStrengthDiff: 29.9231,
    handStrengthDiff: 10.7605,
    mobilityDiff: 23.4705,
    cornerControlDiff: 9.0749,
    occupiedBoardDiff: -29.2491,
    imminentRoundDamageDiff: 91.8024,
    activeTurnTempo: 17.0833,
    specialCardValue: 17.2594,
    deckTrimValue: 0.0947,
    eliteRouteBias: -8,
    restRouteBias: 12,
    forgeRouteBias: 6.9805,
    treasureRouteBias: 7.0064,
    branchingRouteBias: 8.264,
    riskTolerance: -3.9413,
    aggressionPlanBias: -10.1794,
    controlPlanBias: -6.5681,
    tempoPlanBias: -12,
    fusionPlanBias: 1.8806,
    precisionPlanBias: -1.2954,
    uncommonCardBias: -4,
    rareCardBias: 5.5929,
    charmSynergyBias: 7.7126,
    duplicateCardPenalty: 4.3687,
    enemyProfileRespect: 0,
  },
};
