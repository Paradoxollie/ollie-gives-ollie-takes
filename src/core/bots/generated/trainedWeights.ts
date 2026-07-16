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
  name: "trained-bot-20260716-024030",
  trainedAt: "2026-07-16T02:40:30.775Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 126.3557,
    shieldDiff: 77.2483,
    drawBonusDiff: 15.6941,
    manaBonusDiff: 55.9287,
    poisonDiff: 61.3967,
    controlDiff: 41.2623,
    boardStrengthDiff: 39.1685,
    boardManaDiff: 15.0656,
    stackSynergyDiff: 33.9721,
    reserveStrengthDiff: 18.7756,
    handStrengthDiff: 13.0702,
    mobilityDiff: 22.3514,
    cornerControlDiff: 12.8818,
    occupiedBoardDiff: 7.0146,
    imminentRoundDamageDiff: 70.6361,
    activeTurnTempo: 25.9557,
    specialCardValue: 11.1588,
    deckTrimValue: 3.2171,
    eliteRouteBias: -1.3139,
    restRouteBias: 8.1715,
    forgeRouteBias: 5.6933,
    treasureRouteBias: 8.6588,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -5.7451,
    controlPlanBias: -2.5884,
    tempoPlanBias: 1.2652,
    fusionPlanBias: 3.417,
    precisionPlanBias: -4.0085,
    uncommonCardBias: 3.4544,
    rareCardBias: 4.0796,
    charmSynergyBias: -0.3039,
    duplicateCardPenalty: 9.6609,
    enemyProfileRespect: 3.4518,
  },
};
