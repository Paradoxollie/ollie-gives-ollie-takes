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
  name: "trained-bot-20260923-044827",
  trainedAt: "2026-09-23T04:48:27.143Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.0554,
    shieldDiff: 95.5613,
    drawBonusDiff: 33.0467,
    manaBonusDiff: 71.3604,
    poisonDiff: 42.5691,
    controlDiff: 51.5053,
    boardStrengthDiff: 21.9537,
    boardManaDiff: 63.3884,
    stackSynergyDiff: 49.6013,
    reserveStrengthDiff: 16.7181,
    handStrengthDiff: 1.2814,
    mobilityDiff: 30,
    cornerControlDiff: 22.7194,
    occupiedBoardDiff: -31.4607,
    imminentRoundDamageDiff: 50.0978,
    activeTurnTempo: 25.9779,
    specialCardValue: 15.5408,
    deckTrimValue: 0,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 5.246,
    branchingRouteBias: 0,
    riskTolerance: -1.6358,
    aggressionPlanBias: 4.5288,
    controlPlanBias: 12.1381,
    tempoPlanBias: -9.9564,
    fusionPlanBias: 4.0026,
    precisionPlanBias: -9.4694,
    uncommonCardBias: 10,
    rareCardBias: 6.7742,
    charmSynergyBias: -3.9879,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 3.6311,
  },
};
