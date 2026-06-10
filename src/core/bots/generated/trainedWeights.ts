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
  name: "trained-bot-20260610-013932",
  trainedAt: "2026-06-10T01:39:32.453Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.8242,
    shieldDiff: 58.0384,
    drawBonusDiff: 74.3621,
    manaBonusDiff: 102.5646,
    poisonDiff: 107.2513,
    controlDiff: 0.9655,
    boardStrengthDiff: 62.977,
    boardManaDiff: 9.0211,
    stackSynergyDiff: 4.2787,
    reserveStrengthDiff: 25.9884,
    handStrengthDiff: 15.4759,
    mobilityDiff: 17.2368,
    cornerControlDiff: 45.1426,
    occupiedBoardDiff: 36.9476,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: 2.7695,
    specialCardValue: 0.8737,
    deckTrimValue: 8.1577,
    eliteRouteBias: 4.2554,
    restRouteBias: 10.4952,
    forgeRouteBias: 5.1359,
    treasureRouteBias: 9.2073,
    branchingRouteBias: 6.0638,
    riskTolerance: 5.0855,
    aggressionPlanBias: 6.6157,
    controlPlanBias: 14.9791,
    tempoPlanBias: -8.6363,
    fusionPlanBias: -9.9037,
    precisionPlanBias: 7.3477,
    uncommonCardBias: 9.8838,
    rareCardBias: 8.398,
    charmSynergyBias: -4,
    duplicateCardPenalty: 8.6458,
    enemyProfileRespect: 3.7903,
  },
};
