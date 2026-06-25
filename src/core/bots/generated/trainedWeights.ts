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
  name: "trained-bot-20260625-061953",
  trainedAt: "2026-06-25T06:19:53.288Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.6423,
    shieldDiff: 46.4039,
    drawBonusDiff: 3.0486,
    manaBonusDiff: 77.0253,
    poisonDiff: 86.6982,
    controlDiff: 5.5717,
    boardStrengthDiff: 20.6607,
    boardManaDiff: 14.7286,
    stackSynergyDiff: 1.5775,
    reserveStrengthDiff: 22.6116,
    handStrengthDiff: 41.2348,
    mobilityDiff: 9.5549,
    cornerControlDiff: 37.0689,
    occupiedBoardDiff: 17.4618,
    imminentRoundDamageDiff: 62.9508,
    activeTurnTempo: 5.0843,
    specialCardValue: 13.4697,
    deckTrimValue: 3.2175,
    eliteRouteBias: -3.1468,
    restRouteBias: 5.9705,
    forgeRouteBias: 9.0864,
    treasureRouteBias: 5.6783,
    branchingRouteBias: 1.5305,
    riskTolerance: 5.6698,
    aggressionPlanBias: -3.9518,
    controlPlanBias: 16.0148,
    tempoPlanBias: 1.1683,
    fusionPlanBias: 6.1688,
    precisionPlanBias: 3.7312,
    uncommonCardBias: 4.1745,
    rareCardBias: 1.6805,
    charmSynergyBias: 9.7432,
    duplicateCardPenalty: 9.565,
    enemyProfileRespect: 0,
  },
};
