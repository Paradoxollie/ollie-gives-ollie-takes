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
  name: "trained-bot-20260902-030701",
  trainedAt: "2026-09-02T03:07:01.882Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 78.7711,
    shieldDiff: 120,
    drawBonusDiff: 18.3538,
    manaBonusDiff: 98.0642,
    poisonDiff: 65.3995,
    controlDiff: 73.0433,
    boardStrengthDiff: 19.4553,
    boardManaDiff: 70.2344,
    stackSynergyDiff: 11.1099,
    reserveStrengthDiff: 16.8898,
    handStrengthDiff: 17.3908,
    mobilityDiff: 29.9902,
    cornerControlDiff: 12.85,
    occupiedBoardDiff: 0.6258,
    imminentRoundDamageDiff: 65.7668,
    activeTurnTempo: 51.7464,
    specialCardValue: 13.441,
    deckTrimValue: 2.3048,
    eliteRouteBias: -8,
    restRouteBias: 6.7343,
    forgeRouteBias: 7.4458,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: 2.7759,
    aggressionPlanBias: 15.9699,
    controlPlanBias: 2.9519,
    tempoPlanBias: 4.3677,
    fusionPlanBias: -10.8929,
    precisionPlanBias: 1.8883,
    uncommonCardBias: 5.3018,
    rareCardBias: -0.8137,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
