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
  name: "trained-bot-20260903-023523",
  trainedAt: "2026-09-03T02:35:23.881Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.9674,
    shieldDiff: 120,
    drawBonusDiff: 24.1683,
    manaBonusDiff: 89.2203,
    poisonDiff: 58.8266,
    controlDiff: 77.4059,
    boardStrengthDiff: 10.9209,
    boardManaDiff: 69.2708,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 7.3394,
    handStrengthDiff: 14.8334,
    mobilityDiff: 30,
    cornerControlDiff: 13.0867,
    occupiedBoardDiff: -4.5184,
    imminentRoundDamageDiff: 70.6306,
    activeTurnTempo: 53.0519,
    specialCardValue: 16.286,
    deckTrimValue: 2.7119,
    eliteRouteBias: -2.5173,
    restRouteBias: 3.1891,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 0.7526,
    riskTolerance: 5.4823,
    aggressionPlanBias: 18,
    controlPlanBias: 5.8999,
    tempoPlanBias: -7.8454,
    fusionPlanBias: -2.193,
    precisionPlanBias: 12.8393,
    uncommonCardBias: 6.4085,
    rareCardBias: 0.4614,
    charmSynergyBias: 6.5704,
    duplicateCardPenalty: 3.4854,
    enemyProfileRespect: 0,
  },
};
