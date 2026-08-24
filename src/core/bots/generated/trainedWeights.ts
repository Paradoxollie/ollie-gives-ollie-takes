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
  name: "trained-bot-20260824-012919",
  trainedAt: "2026-08-24T01:29:19.087Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 82.6928,
    shieldDiff: 105.3932,
    drawBonusDiff: 60.7815,
    manaBonusDiff: 105.855,
    poisonDiff: 70.7423,
    controlDiff: 92.6796,
    boardStrengthDiff: 12.1264,
    boardManaDiff: 65.1184,
    stackSynergyDiff: 9.0653,
    reserveStrengthDiff: 4.3526,
    handStrengthDiff: 37.0989,
    mobilityDiff: 4.6534,
    cornerControlDiff: 11.5822,
    occupiedBoardDiff: -2.6609,
    imminentRoundDamageDiff: 74.0913,
    activeTurnTempo: 52.3978,
    specialCardValue: 7.2684,
    deckTrimValue: 8.9242,
    eliteRouteBias: 2.2888,
    restRouteBias: 5.6106,
    forgeRouteBias: 6.0609,
    treasureRouteBias: 6.76,
    branchingRouteBias: 1.2753,
    riskTolerance: 3.0171,
    aggressionPlanBias: 7.6888,
    controlPlanBias: 4.8742,
    tempoPlanBias: 0.2822,
    fusionPlanBias: -3.55,
    precisionPlanBias: 8.0367,
    uncommonCardBias: -4,
    rareCardBias: 6.2191,
    charmSynergyBias: 1.2499,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0.227,
  },
};
