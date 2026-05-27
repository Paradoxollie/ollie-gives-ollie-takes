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
  name: "trained-bot-20260526-224214",
  trainedAt: "2026-05-26T22:42:14.097Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 53.0552,
    controlDiff: 19.2667,
    boardStrengthDiff: 30.3208,
    reserveStrengthDiff: 30.2714,
    handStrengthDiff: 8.8698,
    mobilityDiff: 9.5662,
    cornerControlDiff: 29.3218,
    occupiedBoardDiff: 14.6662,
    imminentRoundDamageDiff: -21.0619,
    activeTurnTempo: -28.1608,
    specialCardValue: 4.063,
    deckTrimValue: -26.2733,
    eliteRouteBias: -76.947,
    restRouteBias: -8.0538,
    forgeRouteBias: 4.5847,
    treasureRouteBias: 31.3973,
    branchingRouteBias: 28.5157,
    riskTolerance: 31.0694,
    aggressionPlanBias: 7.8534,
    controlPlanBias: 22.5797,
    tempoPlanBias: -5.7899,
    fusionPlanBias: 22.4429,
    precisionPlanBias: 19.8401,
    uncommonCardBias: 17.7196,
    rareCardBias: 18.1975,
    charmSynergyBias: 32.8192,
    duplicateCardPenalty: -22.5764,
    enemyProfileRespect: 18.074,
  },
};
