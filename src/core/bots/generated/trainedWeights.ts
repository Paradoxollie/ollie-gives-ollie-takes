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
  name: "trained-bot-20260612-021743",
  trainedAt: "2026-06-12T02:17:43.562Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.5702,
    shieldDiff: 40.957,
    drawBonusDiff: 61.7608,
    manaBonusDiff: 104.7795,
    poisonDiff: 96.5714,
    controlDiff: 4.7135,
    boardStrengthDiff: 48.6395,
    boardManaDiff: 4.34,
    stackSynergyDiff: 2.682,
    reserveStrengthDiff: 26.2756,
    handStrengthDiff: 23.4953,
    mobilityDiff: 6.4932,
    cornerControlDiff: 52.7332,
    occupiedBoardDiff: 30.869,
    imminentRoundDamageDiff: 8.5187,
    activeTurnTempo: 3.6713,
    specialCardValue: 9.7,
    deckTrimValue: 2.2734,
    eliteRouteBias: 3.3203,
    restRouteBias: 5.8594,
    forgeRouteBias: 7.645,
    treasureRouteBias: 3.8439,
    branchingRouteBias: 6.1639,
    riskTolerance: 0.3065,
    aggressionPlanBias: 13.886,
    controlPlanBias: 17.4679,
    tempoPlanBias: -4.4001,
    fusionPlanBias: 15.7204,
    precisionPlanBias: -2.0093,
    uncommonCardBias: 10,
    rareCardBias: 0.5847,
    charmSynergyBias: 4.0554,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.6826,
  },
};
