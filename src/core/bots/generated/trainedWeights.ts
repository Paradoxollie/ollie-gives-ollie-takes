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
  name: "trained-bot-20260909-135624",
  trainedAt: "2026-09-09T13:56:24.798Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 70.3128,
    shieldDiff: 108.6577,
    drawBonusDiff: 62.8196,
    manaBonusDiff: 92.9569,
    poisonDiff: 44.5194,
    controlDiff: 67.9395,
    boardStrengthDiff: 6.0727,
    boardManaDiff: 66.927,
    stackSynergyDiff: 29.3635,
    reserveStrengthDiff: 25.8223,
    handStrengthDiff: -2.1012,
    mobilityDiff: 13.2127,
    cornerControlDiff: 26.029,
    occupiedBoardDiff: -12.4675,
    imminentRoundDamageDiff: 82.3121,
    activeTurnTempo: 35.8652,
    specialCardValue: 6.4545,
    deckTrimValue: 9.5503,
    eliteRouteBias: 8,
    restRouteBias: 3.8866,
    forgeRouteBias: 8.7622,
    treasureRouteBias: 9.8392,
    branchingRouteBias: 4.9798,
    riskTolerance: -2.9232,
    aggressionPlanBias: -11.4262,
    controlPlanBias: 17.674,
    tempoPlanBias: 1.7521,
    fusionPlanBias: 6.8026,
    precisionPlanBias: 2.8624,
    uncommonCardBias: 2.6513,
    rareCardBias: 5.0332,
    charmSynergyBias: 10.1644,
    duplicateCardPenalty: 0.1504,
    enemyProfileRespect: 0,
  },
};
