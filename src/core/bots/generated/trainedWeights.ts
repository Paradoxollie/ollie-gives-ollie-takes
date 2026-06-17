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
  name: "trained-bot-20260616-224012",
  trainedAt: "2026-06-16T22:40:12.681Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.3551,
    shieldDiff: 83.0319,
    drawBonusDiff: 35.4301,
    manaBonusDiff: 80.4668,
    poisonDiff: 102.6366,
    controlDiff: 19.5395,
    boardStrengthDiff: 42.9499,
    boardManaDiff: 18.585,
    stackSynergyDiff: 5.3154,
    reserveStrengthDiff: 6.3478,
    handStrengthDiff: 45.5671,
    mobilityDiff: -7.8406,
    cornerControlDiff: 65.0924,
    occupiedBoardDiff: 33.6366,
    imminentRoundDamageDiff: 31.8816,
    activeTurnTempo: 10.5194,
    specialCardValue: 14.914,
    deckTrimValue: 14,
    eliteRouteBias: -5.2289,
    restRouteBias: 8.7972,
    forgeRouteBias: 9.2028,
    treasureRouteBias: 11.7176,
    branchingRouteBias: 9.5431,
    riskTolerance: 0.1619,
    aggressionPlanBias: -11.8427,
    controlPlanBias: 12.7836,
    tempoPlanBias: 1.655,
    fusionPlanBias: -2.3783,
    precisionPlanBias: -12,
    uncommonCardBias: -0.5164,
    rareCardBias: 8.3729,
    charmSynergyBias: 9.7117,
    duplicateCardPenalty: 4.2919,
    enemyProfileRespect: 0,
  },
};
