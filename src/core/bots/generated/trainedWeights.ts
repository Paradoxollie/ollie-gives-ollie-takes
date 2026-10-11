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
  name: "trained-bot-20261011-162615",
  trainedAt: "2026-10-11T16:26:15.257Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.81245,
    shieldDiff: 64.922325,
    drawBonusDiff: 21.047775,
    manaBonusDiff: 80.201925,
    poisonDiff: 76.6463,
    controlDiff: 32.9096,
    boardStrengthDiff: 20.76665,
    boardManaDiff: 60.887475,
    stackSynergyDiff: 72.754425,
    reserveStrengthDiff: 29.51915,
    handStrengthDiff: 12.1905,
    mobilityDiff: 10.871925000000001,
    cornerControlDiff: 4.330325,
    occupiedBoardDiff: -1.390975,
    imminentRoundDamageDiff: 48.825649999999996,
    activeTurnTempo: 19.125925000000002,
    specialCardValue: 17.770975,
    deckTrimValue: 3.160775,
    eliteRouteBias: -0.97295,
    restRouteBias: 2.7522,
    forgeRouteBias: 6.897774999999999,
    treasureRouteBias: 3.45805,
    branchingRouteBias: 6.8931249999999995,
    riskTolerance: 2.376875,
    aggressionPlanBias: -6.776624999999999,
    controlPlanBias: -1.663625,
    tempoPlanBias: -3.831,
    fusionPlanBias: 9.726600000000001,
    precisionPlanBias: -8.46265,
    uncommonCardBias: 3.7607749999999998,
    rareCardBias: 6.444875,
    charmSynergyBias: -1.031275,
    duplicateCardPenalty: 5.9434000000000005,
    enemyProfileRespect: 5.2198,
  },
};
