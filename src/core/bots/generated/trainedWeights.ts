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
  name: "trained-bot-20260722-140040",
  trainedAt: "2026-07-22T14:00:40.970Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 111.934,
    shieldDiff: 72.4206,
    drawBonusDiff: 33.8648,
    manaBonusDiff: 51.3317,
    poisonDiff: 71.2603,
    controlDiff: 61.7134,
    boardStrengthDiff: 42.0198,
    boardManaDiff: 6.9849,
    stackSynergyDiff: 14.486,
    reserveStrengthDiff: 20.4577,
    handStrengthDiff: 7.7562,
    mobilityDiff: 23.9138,
    cornerControlDiff: 6.5826,
    occupiedBoardDiff: -6.6109,
    imminentRoundDamageDiff: 35.2423,
    activeTurnTempo: 20.4221,
    specialCardValue: 17.2209,
    deckTrimValue: 4.0691,
    eliteRouteBias: 2.4349,
    restRouteBias: 10.2795,
    forgeRouteBias: 2.1414,
    treasureRouteBias: 1.7248,
    branchingRouteBias: 4.3238,
    riskTolerance: 1.0441,
    aggressionPlanBias: 4.2857,
    controlPlanBias: 18,
    tempoPlanBias: -4.0725,
    fusionPlanBias: 3.1193,
    precisionPlanBias: -6.7193,
    uncommonCardBias: 9.1053,
    rareCardBias: 11.5559,
    charmSynergyBias: 2.5922,
    duplicateCardPenalty: 5.0829,
    enemyProfileRespect: 2.296,
  },
};
