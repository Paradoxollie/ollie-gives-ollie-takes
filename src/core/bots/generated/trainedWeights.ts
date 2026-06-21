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
  name: "trained-bot-20260621-052009",
  trainedAt: "2026-06-21T05:20:09.287Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.1988,
    shieldDiff: 78.3007,
    drawBonusDiff: 19.922,
    manaBonusDiff: 77.1277,
    poisonDiff: 83.9716,
    controlDiff: 13.5268,
    boardStrengthDiff: 44.5463,
    boardManaDiff: 21.3106,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 20.2916,
    handStrengthDiff: 38.4745,
    mobilityDiff: 0.6906,
    cornerControlDiff: 51.6116,
    occupiedBoardDiff: 6.527,
    imminentRoundDamageDiff: 56.7385,
    activeTurnTempo: 7.4184,
    specialCardValue: 0,
    deckTrimValue: 8.799,
    eliteRouteBias: 3.8737,
    restRouteBias: 7.1402,
    forgeRouteBias: 8.9421,
    treasureRouteBias: 1.7863,
    branchingRouteBias: 1.5499,
    riskTolerance: 7.389,
    aggressionPlanBias: -5.4401,
    controlPlanBias: 6.4193,
    tempoPlanBias: 8.6275,
    fusionPlanBias: -12,
    precisionPlanBias: -6.6532,
    uncommonCardBias: 10,
    rareCardBias: 6.6203,
    charmSynergyBias: -0.4805,
    duplicateCardPenalty: 3.1748,
    enemyProfileRespect: 2.4456,
  },
};
