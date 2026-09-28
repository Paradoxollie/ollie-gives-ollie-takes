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
  name: "trained-bot-20260928-161344",
  trainedAt: "2026-09-28T16:13:44.249Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.1382,
    shieldDiff: 109.1415,
    drawBonusDiff: 17.1019,
    manaBonusDiff: 65.9373,
    poisonDiff: 61.937,
    controlDiff: 33.9639,
    boardStrengthDiff: 23.6146,
    boardManaDiff: 60.491,
    stackSynergyDiff: 68.8075,
    reserveStrengthDiff: 2.7059,
    handStrengthDiff: -3.4053,
    mobilityDiff: 9.3562,
    cornerControlDiff: 6.4611,
    occupiedBoardDiff: -20.8131,
    imminentRoundDamageDiff: 32.8047,
    activeTurnTempo: 21.8583,
    specialCardValue: 14.6761,
    deckTrimValue: 14,
    eliteRouteBias: -1.2958,
    restRouteBias: 7.7782,
    forgeRouteBias: 4.3748,
    treasureRouteBias: 11.3117,
    branchingRouteBias: 4.8764,
    riskTolerance: 6.2362,
    aggressionPlanBias: -3.9487,
    controlPlanBias: -1.5863,
    tempoPlanBias: -12,
    fusionPlanBias: -8.7215,
    precisionPlanBias: -8.8258,
    uncommonCardBias: 10,
    rareCardBias: 2.2421,
    charmSynergyBias: -2.3589,
    duplicateCardPenalty: 7.6303,
    enemyProfileRespect: 1.7111,
  },
};
