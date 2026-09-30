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
  name: "trained-bot-20260929-200129",
  trainedAt: "2026-09-29T20:01:29.673Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 65.0028,
    shieldDiff: 109.3605,
    drawBonusDiff: 23.4845,
    manaBonusDiff: 69.4087,
    poisonDiff: 62.3045,
    controlDiff: 42.4157,
    boardStrengthDiff: 12.685,
    boardManaDiff: 55.4802,
    stackSynergyDiff: 63.8498,
    reserveStrengthDiff: 7.1703,
    handStrengthDiff: -3.1743,
    mobilityDiff: -3.1318,
    cornerControlDiff: 0.4663,
    occupiedBoardDiff: -8.7531,
    imminentRoundDamageDiff: 36.4782,
    activeTurnTempo: 14.056,
    specialCardValue: 9.8314,
    deckTrimValue: 6.5918,
    eliteRouteBias: 1.3674,
    restRouteBias: 12,
    forgeRouteBias: 0.5398,
    treasureRouteBias: 10.3622,
    branchingRouteBias: 3.9212,
    riskTolerance: -3.3647,
    aggressionPlanBias: 7.2099,
    controlPlanBias: -10.8902,
    tempoPlanBias: -6.1358,
    fusionPlanBias: -4.5476,
    precisionPlanBias: -0.3676,
    uncommonCardBias: 2.26,
    rareCardBias: 8.6173,
    charmSynergyBias: 5.3324,
    duplicateCardPenalty: 6.6979,
    enemyProfileRespect: 0,
  },
};
