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
  name: "trained-bot-20260808-173200",
  trainedAt: "2026-08-08T17:32:00.195Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 90.2855,
    shieldDiff: 91.69535,
    drawBonusDiff: 24.64195,
    manaBonusDiff: 84.85725,
    poisonDiff: 32.0744,
    controlDiff: 66.83785,
    boardStrengthDiff: 8.138,
    boardManaDiff: 40.5608,
    stackSynergyDiff: 30.1592,
    reserveStrengthDiff: 12.7804,
    handStrengthDiff: 44.15505,
    mobilityDiff: 7.97035,
    cornerControlDiff: 0,
    occupiedBoardDiff: 0.20525,
    imminentRoundDamageDiff: 34.1917,
    activeTurnTempo: 17.908250000000002,
    specialCardValue: 15.33915,
    deckTrimValue: 7.500399999999999,
    eliteRouteBias: -1.4145,
    restRouteBias: 9.5779,
    forgeRouteBias: 6.3951,
    treasureRouteBias: 12,
    branchingRouteBias: 7.91515,
    riskTolerance: 1.3143,
    aggressionPlanBias: 16.703,
    controlPlanBias: 9.768650000000001,
    tempoPlanBias: -2.66075,
    fusionPlanBias: 18,
    precisionPlanBias: 11.38625,
    uncommonCardBias: 8.3562,
    rareCardBias: 10.3209,
    charmSynergyBias: 8.980550000000001,
    duplicateCardPenalty: 7.41165,
    enemyProfileRespect: 2.1910499999999997,
  },
};
