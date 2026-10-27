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
  name: "trained-bot-20261027-082347",
  trainedAt: "2026-10-27T08:23:47.585Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 110.8441,
    shieldDiff: 76.4363,
    drawBonusDiff: 21.4811,
    manaBonusDiff: 51.0519,
    poisonDiff: 85.6693,
    controlDiff: 88.8762,
    boardStrengthDiff: 7.0172,
    boardManaDiff: 23.0954,
    stackSynergyDiff: 104.8035,
    reserveStrengthDiff: 10.4716,
    handStrengthDiff: 3.2349,
    mobilityDiff: 21.074,
    cornerControlDiff: 9.7211,
    occupiedBoardDiff: -9.4533,
    imminentRoundDamageDiff: 91.7617,
    activeTurnTempo: 25.7456,
    specialCardValue: 8.1805,
    deckTrimValue: 8.9648,
    eliteRouteBias: -2.6137,
    restRouteBias: 0,
    forgeRouteBias: 3.9853,
    treasureRouteBias: 9.8499,
    branchingRouteBias: 0,
    riskTolerance: 0.4018,
    aggressionPlanBias: -6.0589,
    controlPlanBias: -4.5397,
    tempoPlanBias: -7.2858,
    fusionPlanBias: 11.0518,
    precisionPlanBias: 3.3126,
    uncommonCardBias: 7.2501,
    rareCardBias: -0.3146,
    charmSynergyBias: 4.1285,
    duplicateCardPenalty: 9.8385,
    enemyProfileRespect: 5.2472,
  },
};
