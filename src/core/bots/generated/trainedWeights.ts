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
  name: "trained-bot-20260606-101729",
  trainedAt: "2026-06-06T10:17:29.576Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.9774,
    shieldDiff: 55.9054,
    drawBonusDiff: 70.635,
    controlDiff: 4.5128,
    boardStrengthDiff: 39.1447,
    boardManaDiff: 6.9276,
    stackSynergyDiff: 4.0621,
    reserveStrengthDiff: 25.0313,
    handStrengthDiff: 23.5541,
    mobilityDiff: 8.3853,
    cornerControlDiff: 46.1154,
    occupiedBoardDiff: 21.6815,
    imminentRoundDamageDiff: 1.9878,
    activeTurnTempo: -6.052,
    specialCardValue: 11.6184,
    deckTrimValue: 9.058,
    eliteRouteBias: 4.9543,
    restRouteBias: 9.3507,
    forgeRouteBias: 7.3728,
    treasureRouteBias: 9.051,
    branchingRouteBias: 10,
    riskTolerance: 0.8986,
    aggressionPlanBias: 13.9698,
    controlPlanBias: 15.9032,
    tempoPlanBias: -3.4452,
    fusionPlanBias: 12.9445,
    precisionPlanBias: 5.6507,
    uncommonCardBias: 10,
    rareCardBias: -0.8064,
    charmSynergyBias: 10.6713,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
