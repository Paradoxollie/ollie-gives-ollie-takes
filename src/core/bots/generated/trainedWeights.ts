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
  name: "trained-bot-20260707-011551",
  trainedAt: "2026-07-07T01:15:51.663Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.7267,
    shieldDiff: 58.6261,
    drawBonusDiff: 2.8201,
    manaBonusDiff: 81.8213,
    poisonDiff: 49.0807,
    controlDiff: 13.4269,
    boardStrengthDiff: 26.3845,
    boardManaDiff: 12.5632,
    stackSynergyDiff: 4.2893,
    reserveStrengthDiff: 21.1068,
    handStrengthDiff: 17.8799,
    mobilityDiff: 22.6924,
    cornerControlDiff: 0.8733,
    occupiedBoardDiff: 46.7338,
    imminentRoundDamageDiff: 62.1748,
    activeTurnTempo: 22.1156,
    specialCardValue: 15.4481,
    deckTrimValue: 8.4395,
    eliteRouteBias: -3.8082,
    restRouteBias: 0.4339,
    forgeRouteBias: 6.3795,
    treasureRouteBias: 6.9905,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: -2.2537,
    controlPlanBias: 14.5421,
    tempoPlanBias: -6.3492,
    fusionPlanBias: 2.9988,
    precisionPlanBias: 11.1846,
    uncommonCardBias: 2.6031,
    rareCardBias: -2.5118,
    charmSynergyBias: 11.7755,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.6399,
  },
};
