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
  name: "trained-bot-20261017-145353",
  trainedAt: "2026-10-17T14:53:53.585Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.8118,
    shieldDiff: 78.9095,
    drawBonusDiff: 0.9264,
    manaBonusDiff: 86.4949,
    poisonDiff: 54.9709,
    controlDiff: 69.745,
    boardStrengthDiff: 25.6345,
    boardManaDiff: 58.7837,
    stackSynergyDiff: 101.3975,
    reserveStrengthDiff: 26.0377,
    handStrengthDiff: 17.5132,
    mobilityDiff: 20.8865,
    cornerControlDiff: 0.8025,
    occupiedBoardDiff: -18.6951,
    imminentRoundDamageDiff: 74.2212,
    activeTurnTempo: 30.4795,
    specialCardValue: 12.5759,
    deckTrimValue: 0.7248,
    eliteRouteBias: 7.311,
    restRouteBias: 2.4186,
    forgeRouteBias: 9.5661,
    treasureRouteBias: 3.7831,
    branchingRouteBias: 9.4761,
    riskTolerance: -4,
    aggressionPlanBias: -6.8756,
    controlPlanBias: -5.6975,
    tempoPlanBias: -5.4911,
    fusionPlanBias: 14.0654,
    precisionPlanBias: -2.0953,
    uncommonCardBias: 2.4061,
    rareCardBias: 4.4393,
    charmSynergyBias: -1.4816,
    duplicateCardPenalty: 8.0826,
    enemyProfileRespect: 1.2976,
  },
};
