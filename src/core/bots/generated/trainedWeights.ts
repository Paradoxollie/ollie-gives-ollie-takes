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
  name: "trained-bot-20260607-053733",
  trainedAt: "2026-06-07T05:37:33.429Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.2337,
    shieldDiff: 55.8565,
    drawBonusDiff: 64.0626,
    manaBonusDiff: 95,
    poisonDiff: 110,
    controlDiff: 4.6435,
    boardStrengthDiff: 50.2991,
    boardManaDiff: 0.3363,
    stackSynergyDiff: 1.1849,
    reserveStrengthDiff: 29.9867,
    handStrengthDiff: 17.9651,
    mobilityDiff: 5.5564,
    cornerControlDiff: 57.8481,
    occupiedBoardDiff: 23.2026,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -15.8123,
    specialCardValue: 14.1253,
    deckTrimValue: 7.6929,
    eliteRouteBias: 4.1008,
    restRouteBias: 8.5984,
    forgeRouteBias: 8.8109,
    treasureRouteBias: 7.5934,
    branchingRouteBias: 2.3913,
    riskTolerance: 2.5045,
    aggressionPlanBias: 15.3706,
    controlPlanBias: 11.4493,
    tempoPlanBias: -10.0314,
    fusionPlanBias: 1.8141,
    precisionPlanBias: 7.1451,
    uncommonCardBias: 9.6224,
    rareCardBias: 12,
    charmSynergyBias: 14,
    duplicateCardPenalty: 8.8972,
    enemyProfileRespect: 2.1629,
  },
};
