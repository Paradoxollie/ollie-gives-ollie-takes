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
  name: "trained-bot-20261117-035601",
  trainedAt: "2026-11-17T03:56:01.490Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 52.3868,
    shieldDiff: 77.4934,
    drawBonusDiff: 15.1863,
    manaBonusDiff: 12.2561,
    poisonDiff: 81.0304,
    controlDiff: 124.0068,
    boardStrengthDiff: 12.997,
    boardManaDiff: 22.5328,
    stackSynergyDiff: 117.1363,
    reserveStrengthDiff: 22.0641,
    handStrengthDiff: 5.1389,
    mobilityDiff: 23.1644,
    cornerControlDiff: 11.8534,
    occupiedBoardDiff: -29.2124,
    imminentRoundDamageDiff: 83.0791,
    activeTurnTempo: 13.2281,
    specialCardValue: 16.3489,
    deckTrimValue: 10.8046,
    eliteRouteBias: -7.1083,
    restRouteBias: 9.5735,
    forgeRouteBias: 8.1435,
    treasureRouteBias: 12,
    branchingRouteBias: 2.576,
    riskTolerance: -4,
    aggressionPlanBias: -6.3324,
    controlPlanBias: -2.0436,
    tempoPlanBias: -12,
    fusionPlanBias: -11.1787,
    precisionPlanBias: -8.5452,
    uncommonCardBias: -4,
    rareCardBias: 10.158,
    charmSynergyBias: 6.8837,
    duplicateCardPenalty: 5.6989,
    enemyProfileRespect: 0.7794,
  },
};
