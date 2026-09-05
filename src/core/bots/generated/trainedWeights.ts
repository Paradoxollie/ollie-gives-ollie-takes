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
  name: "trained-bot-20260904-215952",
  trainedAt: "2026-09-04T21:59:52.732Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.9627,
    shieldDiff: 119.1957,
    drawBonusDiff: 37.9105,
    manaBonusDiff: 90.0351,
    poisonDiff: 49.2823,
    controlDiff: 66.227,
    boardStrengthDiff: 4.2839,
    boardManaDiff: 65.0553,
    stackSynergyDiff: 12.0382,
    reserveStrengthDiff: 24.8805,
    handStrengthDiff: 8.6615,
    mobilityDiff: 26.4301,
    cornerControlDiff: 28.7071,
    occupiedBoardDiff: -26.6389,
    imminentRoundDamageDiff: 84.1087,
    activeTurnTempo: 49.4406,
    specialCardValue: 9.6474,
    deckTrimValue: 4.7065,
    eliteRouteBias: 3.5171,
    restRouteBias: 0,
    forgeRouteBias: 6.7767,
    treasureRouteBias: 12,
    branchingRouteBias: 1.9973,
    riskTolerance: 1.4096,
    aggressionPlanBias: 1.3038,
    controlPlanBias: 18,
    tempoPlanBias: -3.7566,
    fusionPlanBias: 2.6413,
    precisionPlanBias: -0.444,
    uncommonCardBias: 5.4353,
    rareCardBias: -3.0335,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.2335,
  },
};
