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
  name: "trained-bot-20260829-145410",
  trainedAt: "2026-08-29T14:54:10.888Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.7439,
    shieldDiff: 110.1685,
    drawBonusDiff: 20.3451,
    manaBonusDiff: 99.7595,
    poisonDiff: 72.1562,
    controlDiff: 81.361,
    boardStrengthDiff: 25.2667,
    boardManaDiff: 35.415,
    stackSynergyDiff: 24.4303,
    reserveStrengthDiff: 15.532,
    handStrengthDiff: 26.5739,
    mobilityDiff: 19.8222,
    cornerControlDiff: 18.2179,
    occupiedBoardDiff: -24.7659,
    imminentRoundDamageDiff: 70.8207,
    activeTurnTempo: 44.2795,
    specialCardValue: 14.1809,
    deckTrimValue: 0,
    eliteRouteBias: 4.7545,
    restRouteBias: 7.898,
    forgeRouteBias: 10.1347,
    treasureRouteBias: 2.976,
    branchingRouteBias: 4.7001,
    riskTolerance: 2.8919,
    aggressionPlanBias: 18,
    controlPlanBias: 4.3321,
    tempoPlanBias: 1.8902,
    fusionPlanBias: 5.7683,
    precisionPlanBias: 5.7859,
    uncommonCardBias: 2.8312,
    rareCardBias: 3.9437,
    charmSynergyBias: 3.9436,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 5.3728,
  },
};
