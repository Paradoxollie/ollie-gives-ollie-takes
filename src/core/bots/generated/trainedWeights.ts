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
  name: "trained-bot-20260805-182255",
  trainedAt: "2026-08-05T18:22:55.152Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 108.337875,
    shieldDiff: 80.75395,
    drawBonusDiff: 41.466750000000005,
    manaBonusDiff: 76.6445,
    poisonDiff: 35.423024999999996,
    controlDiff: 62.896024999999995,
    boardStrengthDiff: 8.326675000000002,
    boardManaDiff: 36.1177,
    stackSynergyDiff: 17.047575000000002,
    reserveStrengthDiff: 7.2694,
    handStrengthDiff: 25.524475000000002,
    mobilityDiff: 10.12485,
    cornerControlDiff: 9.750125,
    occupiedBoardDiff: 8.74735,
    imminentRoundDamageDiff: 32.177499999999995,
    activeTurnTempo: 20.83045,
    specialCardValue: 15.7894,
    deckTrimValue: 1.6270250000000002,
    eliteRouteBias: -3.997275,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 9.832175,
    branchingRouteBias: 4.6293500000000005,
    riskTolerance: -0.2491,
    aggressionPlanBias: 11.561125,
    controlPlanBias: 18,
    tempoPlanBias: 3.747625,
    fusionPlanBias: 12.370375,
    precisionPlanBias: 7.450125,
    uncommonCardBias: 7.9275,
    rareCardBias: -1.19465,
    charmSynergyBias: 6.059225,
    duplicateCardPenalty: 0.347825,
    enemyProfileRespect: 7.5344,
  },
};
