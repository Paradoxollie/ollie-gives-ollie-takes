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
  name: "trained-bot-20260702-162442",
  trainedAt: "2026-07-02T16:24:42.036Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 109.5122,
    shieldDiff: 62.6524,
    drawBonusDiff: 0,
    manaBonusDiff: 83.5544,
    poisonDiff: 55.632,
    controlDiff: 6.4545,
    boardStrengthDiff: 34.9436,
    boardManaDiff: 10.7321,
    stackSynergyDiff: 7.2241,
    reserveStrengthDiff: 6.9713,
    handStrengthDiff: 29.1009,
    mobilityDiff: 10.2486,
    cornerControlDiff: 0,
    occupiedBoardDiff: 49.0141,
    imminentRoundDamageDiff: 43.3611,
    activeTurnTempo: 17.0169,
    specialCardValue: 18,
    deckTrimValue: 8.7277,
    eliteRouteBias: 0.9102,
    restRouteBias: 10.6284,
    forgeRouteBias: 7.2218,
    treasureRouteBias: 7.4548,
    branchingRouteBias: 5.9485,
    riskTolerance: -1.7105,
    aggressionPlanBias: -9.2036,
    controlPlanBias: 15.9688,
    tempoPlanBias: -12,
    fusionPlanBias: 17.8969,
    precisionPlanBias: 14.5829,
    uncommonCardBias: 9.2941,
    rareCardBias: 12,
    charmSynergyBias: 9.3759,
    duplicateCardPenalty: 6.5643,
    enemyProfileRespect: 8.9315,
  },
};
