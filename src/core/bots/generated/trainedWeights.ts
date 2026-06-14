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
  name: "trained-bot-20260613-233649",
  trainedAt: "2026-06-13T23:36:49.466Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.4618,
    shieldDiff: 58.2157,
    drawBonusDiff: 64.2968,
    manaBonusDiff: 92.3092,
    poisonDiff: 97.3041,
    controlDiff: 4.2398,
    boardStrengthDiff: 58.4324,
    boardManaDiff: 4.6278,
    stackSynergyDiff: 17.6332,
    reserveStrengthDiff: 30,
    handStrengthDiff: 18.4206,
    mobilityDiff: 2.5384,
    cornerControlDiff: 59.2653,
    occupiedBoardDiff: 50,
    imminentRoundDamageDiff: 11.9344,
    activeTurnTempo: 11.9799,
    specialCardValue: 18,
    deckTrimValue: 2.9687,
    eliteRouteBias: 1.1311,
    restRouteBias: 0.2523,
    forgeRouteBias: 0,
    treasureRouteBias: 0,
    branchingRouteBias: 10,
    riskTolerance: 2.453,
    aggressionPlanBias: 0.5797,
    controlPlanBias: 12.0656,
    tempoPlanBias: -7.4283,
    fusionPlanBias: 11.2393,
    precisionPlanBias: -8.9325,
    uncommonCardBias: 9.6716,
    rareCardBias: -1.0385,
    charmSynergyBias: 5.5042,
    duplicateCardPenalty: 6.212,
    enemyProfileRespect: 0.8322,
  },
};
