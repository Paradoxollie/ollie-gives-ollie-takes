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
  name: "trained-bot-20260705-165407",
  trainedAt: "2026-07-05T16:54:07.372Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 104.9274,
    shieldDiff: 53.6514,
    drawBonusDiff: 0,
    manaBonusDiff: 82.2294,
    poisonDiff: 48.9494,
    controlDiff: 13.3076,
    boardStrengthDiff: 27.7137,
    boardManaDiff: 9.2158,
    stackSynergyDiff: 8.9948,
    reserveStrengthDiff: 21.0199,
    handStrengthDiff: 20.1148,
    mobilityDiff: 17.8595,
    cornerControlDiff: 4.7748,
    occupiedBoardDiff: 38.9149,
    imminentRoundDamageDiff: 61.3135,
    activeTurnTempo: 17.7968,
    specialCardValue: 13.6888,
    deckTrimValue: 13.3938,
    eliteRouteBias: -8,
    restRouteBias: 0.4683,
    forgeRouteBias: 5.4868,
    treasureRouteBias: 6.7806,
    branchingRouteBias: 9.8682,
    riskTolerance: 8,
    aggressionPlanBias: -6.6593,
    controlPlanBias: 18,
    tempoPlanBias: -3.4442,
    fusionPlanBias: 9.9409,
    precisionPlanBias: 7.9205,
    uncommonCardBias: 8.2895,
    rareCardBias: -1.3555,
    charmSynergyBias: 12.6242,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.6898,
  },
};
