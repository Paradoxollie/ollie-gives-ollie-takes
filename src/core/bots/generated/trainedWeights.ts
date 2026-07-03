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
  name: "trained-bot-20260703-022730",
  trainedAt: "2026-07-03T02:27:30.991Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.7834,
    shieldDiff: 54.6455,
    drawBonusDiff: 0.6889,
    manaBonusDiff: 83.2483,
    poisonDiff: 56.58025,
    controlDiff: 10.43605,
    boardStrengthDiff: 35.7902,
    boardManaDiff: 9.584499999999998,
    stackSynergyDiff: 10.0668,
    reserveStrengthDiff: 8.41555,
    handStrengthDiff: 21.594949999999997,
    mobilityDiff: 11.818249999999999,
    cornerControlDiff: 4.812,
    occupiedBoardDiff: 50,
    imminentRoundDamageDiff: 47.4936,
    activeTurnTempo: 19.450499999999998,
    specialCardValue: 18,
    deckTrimValue: 8.933,
    eliteRouteBias: -1.1120499999999998,
    restRouteBias: 8.24485,
    forgeRouteBias: 0,
    treasureRouteBias: 7.135400000000001,
    branchingRouteBias: 6.93355,
    riskTolerance: 3.8744499999999995,
    aggressionPlanBias: -12,
    controlPlanBias: 17.837249999999997,
    tempoPlanBias: -9.24855,
    fusionPlanBias: 17.5312,
    precisionPlanBias: 12.88265,
    uncommonCardBias: 6.3271,
    rareCardBias: 10.20515,
    charmSynergyBias: 10.62975,
    duplicateCardPenalty: 8.2244,
    enemyProfileRespect: 8.95,
  },
};
