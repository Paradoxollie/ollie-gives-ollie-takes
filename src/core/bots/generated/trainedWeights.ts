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
  name: "trained-bot-20260829-195700",
  trainedAt: "2026-08-29T19:57:00.937Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.1166,
    shieldDiff: 111.0661,
    drawBonusDiff: 21.3427,
    manaBonusDiff: 98.9397,
    poisonDiff: 70.4623,
    controlDiff: 76.9453,
    boardStrengthDiff: 28.009,
    boardManaDiff: 39.5018,
    stackSynergyDiff: 22.0001,
    reserveStrengthDiff: 13.701,
    handStrengthDiff: 29.4026,
    mobilityDiff: 27.6845,
    cornerControlDiff: 18.9192,
    occupiedBoardDiff: -27.6209,
    imminentRoundDamageDiff: 72.696,
    activeTurnTempo: 47.4613,
    specialCardValue: 7.7328,
    deckTrimValue: 0,
    eliteRouteBias: 1.0416,
    restRouteBias: 12,
    forgeRouteBias: 6.5862,
    treasureRouteBias: 3.9236,
    branchingRouteBias: 3.8811,
    riskTolerance: 2.443,
    aggressionPlanBias: 17.7219,
    controlPlanBias: -0.358,
    tempoPlanBias: 5.8566,
    fusionPlanBias: -2.5161,
    precisionPlanBias: 7.1068,
    uncommonCardBias: 0.6841,
    rareCardBias: 0.1368,
    charmSynergyBias: 4.6127,
    duplicateCardPenalty: 2.1229,
    enemyProfileRespect: 0.0461,
  },
};
