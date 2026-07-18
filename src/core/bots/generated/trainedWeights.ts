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
  name: "trained-bot-20260718-013332",
  trainedAt: "2026-07-18T01:33:32.271Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 133.3314,
    shieldDiff: 68.4597,
    drawBonusDiff: 38.3133,
    manaBonusDiff: 43.4046,
    poisonDiff: 72.6931,
    controlDiff: 43.5956,
    boardStrengthDiff: 46.7051,
    boardManaDiff: 12.6722,
    stackSynergyDiff: 32.2153,
    reserveStrengthDiff: 22.7316,
    handStrengthDiff: 17.3625,
    mobilityDiff: 28.2985,
    cornerControlDiff: 3.816,
    occupiedBoardDiff: 10.2979,
    imminentRoundDamageDiff: 60.3529,
    activeTurnTempo: 32.9531,
    specialCardValue: 18,
    deckTrimValue: 10.0503,
    eliteRouteBias: 3.6946,
    restRouteBias: 10.7691,
    forgeRouteBias: 0,
    treasureRouteBias: 4.6258,
    branchingRouteBias: 10,
    riskTolerance: 0.9275,
    aggressionPlanBias: 2.7821,
    controlPlanBias: 9.4162,
    tempoPlanBias: -10.4748,
    fusionPlanBias: 4.9429,
    precisionPlanBias: -12,
    uncommonCardBias: 4.0412,
    rareCardBias: -4,
    charmSynergyBias: 2.0648,
    duplicateCardPenalty: 6.1352,
    enemyProfileRespect: 0.7177,
  },
};
