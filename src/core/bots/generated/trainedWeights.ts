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
  name: "trained-bot-20261113-171419",
  trainedAt: "2026-11-13T17:14:19.521Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 49.799,
    shieldDiff: 91.8618,
    drawBonusDiff: 7.1668,
    manaBonusDiff: 21.2034,
    poisonDiff: 83.0097,
    controlDiff: 128.8498,
    boardStrengthDiff: 4.6522,
    boardManaDiff: 24.8845,
    stackSynergyDiff: 108.8437,
    reserveStrengthDiff: 30,
    handStrengthDiff: 6.2473,
    mobilityDiff: 30,
    cornerControlDiff: 14.8821,
    occupiedBoardDiff: -30.5351,
    imminentRoundDamageDiff: 95.3002,
    activeTurnTempo: 23.0958,
    specialCardValue: 10.5264,
    deckTrimValue: 3.4205,
    eliteRouteBias: 4.7591,
    restRouteBias: 6.6253,
    forgeRouteBias: 6.8079,
    treasureRouteBias: 12,
    branchingRouteBias: 9.147,
    riskTolerance: -4,
    aggressionPlanBias: -11.2093,
    controlPlanBias: -4.0572,
    tempoPlanBias: -5.8382,
    fusionPlanBias: 2.6019,
    precisionPlanBias: -4.6757,
    uncommonCardBias: 0.6156,
    rareCardBias: 5.8321,
    charmSynergyBias: 14,
    duplicateCardPenalty: 2.8868,
    enemyProfileRespect: 0,
  },
};
