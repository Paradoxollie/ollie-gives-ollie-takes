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
  name: "trained-bot-20260809-181313",
  trainedAt: "2026-08-09T18:13:13.037Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.9607,
    shieldDiff: 93.5519,
    drawBonusDiff: 28.4766,
    manaBonusDiff: 87.4508,
    poisonDiff: 38.9622,
    controlDiff: 67.573,
    boardStrengthDiff: 2.3714,
    boardManaDiff: 34.735,
    stackSynergyDiff: 28.5715,
    reserveStrengthDiff: 5.6943,
    handStrengthDiff: 38.2296,
    mobilityDiff: 6.2147,
    cornerControlDiff: 6.4292,
    occupiedBoardDiff: 21.8972,
    imminentRoundDamageDiff: 38.4144,
    activeTurnTempo: 26.4306,
    specialCardValue: 8.1991,
    deckTrimValue: 14,
    eliteRouteBias: -6.7159,
    restRouteBias: 12,
    forgeRouteBias: 10.417,
    treasureRouteBias: 6.4442,
    branchingRouteBias: 8.6519,
    riskTolerance: 8,
    aggressionPlanBias: 6.9528,
    controlPlanBias: 18,
    tempoPlanBias: -5.4604,
    fusionPlanBias: 15.2294,
    precisionPlanBias: 7.7111,
    uncommonCardBias: 4.8229,
    rareCardBias: 2.0101,
    charmSynergyBias: 0.3978,
    duplicateCardPenalty: 2.1833,
    enemyProfileRespect: 4.0234,
  },
};
