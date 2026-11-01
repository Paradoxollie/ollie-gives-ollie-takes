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
  name: "trained-bot-20261031-191934",
  trainedAt: "2026-10-31T19:19:34.831Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.54625,
    shieldDiff: 75.8063,
    drawBonusDiff: 22.2016,
    manaBonusDiff: 40.024550000000005,
    poisonDiff: 77.8442,
    controlDiff: 93.75450000000001,
    boardStrengthDiff: 18.578000000000003,
    boardManaDiff: 11.66185,
    stackSynergyDiff: 111.2722,
    reserveStrengthDiff: 28.11675,
    handStrengthDiff: 12.1571,
    mobilityDiff: 20.847,
    cornerControlDiff: 10.520299999999999,
    occupiedBoardDiff: -24.69455,
    imminentRoundDamageDiff: 95.91755,
    activeTurnTempo: 24.596449999999997,
    specialCardValue: 16.8823,
    deckTrimValue: 0.0105,
    eliteRouteBias: -6.8662,
    restRouteBias: 12,
    forgeRouteBias: 1.1748,
    treasureRouteBias: 8.6891,
    branchingRouteBias: 7.41065,
    riskTolerance: 6.190049999999999,
    aggressionPlanBias: -6.6673,
    controlPlanBias: -10.5863,
    tempoPlanBias: -12,
    fusionPlanBias: 8.6997,
    precisionPlanBias: -9.432,
    uncommonCardBias: 2.2778,
    rareCardBias: 1.58165,
    charmSynergyBias: 9.63475,
    duplicateCardPenalty: 6.9759,
    enemyProfileRespect: 4.8864,
  },
};
