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
  name: "trained-bot-20260929-013345",
  trainedAt: "2026-09-29T01:33:45.611Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.9069,
    shieldDiff: 111.6594,
    drawBonusDiff: 18.2777,
    manaBonusDiff: 64.8178,
    poisonDiff: 58.5277,
    controlDiff: 31.5164,
    boardStrengthDiff: 18.1131,
    boardManaDiff: 61.1435,
    stackSynergyDiff: 69.6535,
    reserveStrengthDiff: 10.4566,
    handStrengthDiff: -7.1402,
    mobilityDiff: 4.636,
    cornerControlDiff: 12.6577,
    occupiedBoardDiff: -14.4975,
    imminentRoundDamageDiff: 30.7068,
    activeTurnTempo: 13.8488,
    specialCardValue: 15.9002,
    deckTrimValue: 3.2493,
    eliteRouteBias: 2.3583,
    restRouteBias: 9.5051,
    forgeRouteBias: 0,
    treasureRouteBias: 6.8013,
    branchingRouteBias: 8.7754,
    riskTolerance: -4,
    aggressionPlanBias: 1.829,
    controlPlanBias: -8.1699,
    tempoPlanBias: -8.1852,
    fusionPlanBias: -11.9508,
    precisionPlanBias: -4.9081,
    uncommonCardBias: 4.2178,
    rareCardBias: 3.4143,
    charmSynergyBias: 1.4176,
    duplicateCardPenalty: 4.1747,
    enemyProfileRespect: 1.5914,
  },
};
