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
  name: "trained-bot-20260802-213617",
  trainedAt: "2026-08-02T21:36:17.520Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 117.0907,
    shieldDiff: 62.6224,
    drawBonusDiff: 43.9021,
    manaBonusDiff: 65.0754,
    poisonDiff: 36.9577,
    controlDiff: 72.931,
    boardStrengthDiff: 18.5223,
    boardManaDiff: 37.8753,
    stackSynergyDiff: 20.902,
    reserveStrengthDiff: 4.8858,
    handStrengthDiff: 25.5226,
    mobilityDiff: 3.6926,
    cornerControlDiff: 9.234,
    occupiedBoardDiff: 14.5159,
    imminentRoundDamageDiff: 37.4246,
    activeTurnTempo: 10.9311,
    specialCardValue: 15.5586,
    deckTrimValue: 5.1044,
    eliteRouteBias: -3.3166,
    restRouteBias: 7.7879,
    forgeRouteBias: 3.2025,
    treasureRouteBias: 3.4249,
    branchingRouteBias: 2.941,
    riskTolerance: -0.0754,
    aggressionPlanBias: 5.1748,
    controlPlanBias: 18,
    tempoPlanBias: -6.7352,
    fusionPlanBias: 11.1798,
    precisionPlanBias: -1.1979,
    uncommonCardBias: 5.2253,
    rareCardBias: 6.8899,
    charmSynergyBias: 0.2365,
    duplicateCardPenalty: 5.5085,
    enemyProfileRespect: 10,
  },
};
