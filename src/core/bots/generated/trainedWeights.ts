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
  name: "trained-bot-20261017-042004",
  trainedAt: "2026-10-17T04:20:04.099Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.0096,
    shieldDiff: 77.3394,
    drawBonusDiff: 1.6461,
    manaBonusDiff: 91.8837,
    poisonDiff: 56.4982,
    controlDiff: 66.6142,
    boardStrengthDiff: 33.4976,
    boardManaDiff: 50.8206,
    stackSynergyDiff: 102.2423,
    reserveStrengthDiff: 30,
    handStrengthDiff: 20.1242,
    mobilityDiff: 27.6122,
    cornerControlDiff: 1.3862,
    occupiedBoardDiff: -21.1128,
    imminentRoundDamageDiff: 66.1025,
    activeTurnTempo: 30.9299,
    specialCardValue: 18,
    deckTrimValue: 0.4091,
    eliteRouteBias: 8,
    restRouteBias: 0,
    forgeRouteBias: 1.9604,
    treasureRouteBias: 4.0859,
    branchingRouteBias: 4.2195,
    riskTolerance: -4,
    aggressionPlanBias: -0.2907,
    controlPlanBias: -2.6645,
    tempoPlanBias: -7.3608,
    fusionPlanBias: 12.86,
    precisionPlanBias: -7.127,
    uncommonCardBias: -4,
    rareCardBias: 6.4855,
    charmSynergyBias: -4,
    duplicateCardPenalty: 6.3774,
    enemyProfileRespect: 6.6404,
  },
};
