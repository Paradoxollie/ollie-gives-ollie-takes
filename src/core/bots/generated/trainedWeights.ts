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
  name: "trained-bot-20260924-172808",
  trainedAt: "2026-09-24T17:28:08.294Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 78.6049,
    shieldDiff: 104.4861,
    drawBonusDiff: 27.6301,
    manaBonusDiff: 64.5622,
    poisonDiff: 55.3254,
    controlDiff: 50.9641,
    boardStrengthDiff: 21.5544,
    boardManaDiff: 65.771,
    stackSynergyDiff: 58.7858,
    reserveStrengthDiff: 8.3037,
    handStrengthDiff: 2.8,
    mobilityDiff: 21.1922,
    cornerControlDiff: 21.422,
    occupiedBoardDiff: -20.7028,
    imminentRoundDamageDiff: 42.0167,
    activeTurnTempo: 36.8153,
    specialCardValue: 11.6127,
    deckTrimValue: 6.7683,
    eliteRouteBias: -3.383,
    restRouteBias: 2.6089,
    forgeRouteBias: 9.6802,
    treasureRouteBias: 4.4289,
    branchingRouteBias: 0.9046,
    riskTolerance: -1.3703,
    aggressionPlanBias: 1.695,
    controlPlanBias: 6.0152,
    tempoPlanBias: -8.7836,
    fusionPlanBias: 7.341,
    precisionPlanBias: -9.1213,
    uncommonCardBias: 8.8966,
    rareCardBias: 1.2048,
    charmSynergyBias: -0.8839,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 3.7698,
  },
};
