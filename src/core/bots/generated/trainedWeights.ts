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
  name: "trained-bot-20261117-164226",
  trainedAt: "2026-11-17T16:42:26.576Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 54.476,
    shieldDiff: 76.5308,
    drawBonusDiff: 16.5534,
    manaBonusDiff: 6.6385,
    poisonDiff: 80.5472,
    controlDiff: 121.1082,
    boardStrengthDiff: 16.5729,
    boardManaDiff: 20.4198,
    stackSynergyDiff: 116.4238,
    reserveStrengthDiff: 21.6811,
    handStrengthDiff: -2.4891,
    mobilityDiff: 27.1689,
    cornerControlDiff: 10.9306,
    occupiedBoardDiff: -35.138,
    imminentRoundDamageDiff: 73.1937,
    activeTurnTempo: 16.3973,
    specialCardValue: 18,
    deckTrimValue: 12.3218,
    eliteRouteBias: -7.076,
    restRouteBias: 9.9797,
    forgeRouteBias: 8.3074,
    treasureRouteBias: 12,
    branchingRouteBias: 2.5541,
    riskTolerance: -1.1098,
    aggressionPlanBias: -6.2433,
    controlPlanBias: -5.971,
    tempoPlanBias: -11.361,
    fusionPlanBias: -11.2794,
    precisionPlanBias: -7.9804,
    uncommonCardBias: -1.7129,
    rareCardBias: 12,
    charmSynergyBias: 8.448,
    duplicateCardPenalty: 4.6829,
    enemyProfileRespect: 0,
  },
};
