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
  name: "trained-bot-20261121-000019",
  trainedAt: "2026-11-21T00:00:19.258Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 53.845925,
    shieldDiff: 69.85045,
    drawBonusDiff: 31.865425,
    manaBonusDiff: 2.49245,
    poisonDiff: 81.574275,
    controlDiff: 125.4245,
    boardStrengthDiff: 18.856625,
    boardManaDiff: 15.394825,
    stackSynergyDiff: 109.705975,
    reserveStrengthDiff: 21.620224999999998,
    handStrengthDiff: 0.324425,
    mobilityDiff: 28.93395,
    cornerControlDiff: 8.5435,
    occupiedBoardDiff: -16.903075,
    imminentRoundDamageDiff: 77.868275,
    activeTurnTempo: 26.330675,
    specialCardValue: 1.76375,
    deckTrimValue: 1.58805,
    eliteRouteBias: -6.615775,
    restRouteBias: 10.4667,
    forgeRouteBias: 3.72215,
    treasureRouteBias: 9.74195,
    branchingRouteBias: 9.181075,
    riskTolerance: 5.50265,
    aggressionPlanBias: -11.40745,
    controlPlanBias: -10.3646,
    tempoPlanBias: -11.427724999999999,
    fusionPlanBias: 0.5249,
    precisionPlanBias: -8.529824999999999,
    uncommonCardBias: 5.72105,
    rareCardBias: 1.725225,
    charmSynergyBias: 13.74785,
    duplicateCardPenalty: 1.654975,
    enemyProfileRespect: 2.126775,
  },
};
