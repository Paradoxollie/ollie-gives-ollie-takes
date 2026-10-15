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
  name: "trained-bot-20261015-044647",
  trainedAt: "2026-10-15T04:46:47.498Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.2874,
    shieldDiff: 73.1274,
    drawBonusDiff: 7.8799,
    manaBonusDiff: 83.8223,
    poisonDiff: 55.8799,
    controlDiff: 55.2251,
    boardStrengthDiff: 31.41,
    boardManaDiff: 58.5439,
    stackSynergyDiff: 82.4411,
    reserveStrengthDiff: 29.4518,
    handStrengthDiff: 15.7167,
    mobilityDiff: 26.002,
    cornerControlDiff: 7.3362,
    occupiedBoardDiff: -14.5118,
    imminentRoundDamageDiff: 57.0121,
    activeTurnTempo: 18.1574,
    specialCardValue: 15.5206,
    deckTrimValue: 2.7614,
    eliteRouteBias: -1.0449,
    restRouteBias: 6.6744,
    forgeRouteBias: 1.0892,
    treasureRouteBias: 3.4554,
    branchingRouteBias: 0,
    riskTolerance: 3.1735,
    aggressionPlanBias: 0.9144,
    controlPlanBias: 4.3398,
    tempoPlanBias: -6.0999,
    fusionPlanBias: 18,
    precisionPlanBias: -6.2952,
    uncommonCardBias: 7.044,
    rareCardBias: 7.1877,
    charmSynergyBias: 3.0925,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.7056,
  },
};
