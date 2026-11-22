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
  name: "trained-bot-20261122-065422",
  trainedAt: "2026-11-22T06:54:22.988Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 44.4469,
    shieldDiff: 43.1699,
    drawBonusDiff: 41.7671,
    manaBonusDiff: 0,
    poisonDiff: 73.6475,
    controlDiff: 115.7135,
    boardStrengthDiff: 15.3034,
    boardManaDiff: 25.7142,
    stackSynergyDiff: 107.0121,
    reserveStrengthDiff: 20.3192,
    handStrengthDiff: -9.2152,
    mobilityDiff: 30,
    cornerControlDiff: 6.5101,
    occupiedBoardDiff: -20.4506,
    imminentRoundDamageDiff: 85.5166,
    activeTurnTempo: 35.5232,
    specialCardValue: 6.0555,
    deckTrimValue: 0.3549,
    eliteRouteBias: -0.0552,
    restRouteBias: 3.6572,
    forgeRouteBias: 10.6548,
    treasureRouteBias: 12,
    branchingRouteBias: 7.7559,
    riskTolerance: 5.3507,
    aggressionPlanBias: -6.3747,
    controlPlanBias: -5.4987,
    tempoPlanBias: -12,
    fusionPlanBias: -0.6437,
    precisionPlanBias: -2.8266,
    uncommonCardBias: 7.0506,
    rareCardBias: 11.1275,
    charmSynergyBias: 7.1112,
    duplicateCardPenalty: 3.6804,
    enemyProfileRespect: 2.6767,
  },
};
