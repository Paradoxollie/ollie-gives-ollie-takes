import type { TrainedBotWeights } from "@/core/types";

export interface LiveChampionProfile {
  name: string;
  source: "heuristic" | "trained";
  approved: boolean;
  promotedAt: string;
  benchmarkMatchesPerOpponent: number;
  winRateVsHeuristic: number;
  winRateVsChampion: number;
  averageHpEdge: number;
  campaignScoreVsHeuristic: number;
  campaignScoreVsChampion: number;
  campaignBossReachVsHeuristic: number;
  campaignBossReachVsChampion: number;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights | null;
}

export const LIVE_CHAMPION_PROFILE: LiveChampionProfile = {
  name: "trained-bot-20260526-224214",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-26T22:42:14.097Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.625,
  winRateVsChampion: 0.6875,
  averageHpEdge: 7.979167,
  campaignScoreVsHeuristic: 72.666667,
  campaignScoreVsChampion: 75.666667,
  campaignBossReachVsHeuristic: 0.333333,
  campaignBossReachVsChampion: 0.333333,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 53.0552,
    controlDiff: 19.2667,
    boardStrengthDiff: 30.3208,
    reserveStrengthDiff: 30.2714,
    handStrengthDiff: 8.8698,
    mobilityDiff: 9.5662,
    cornerControlDiff: 29.3218,
    occupiedBoardDiff: 14.6662,
    imminentRoundDamageDiff: -21.0619,
    activeTurnTempo: -28.1608,
    specialCardValue: 4.063,
    deckTrimValue: -26.2733,
    eliteRouteBias: -76.947,
    restRouteBias: -8.0538,
    forgeRouteBias: 4.5847,
    treasureRouteBias: 31.3973,
    branchingRouteBias: 28.5157,
    riskTolerance: 31.0694,
    aggressionPlanBias: 7.8534,
    controlPlanBias: 22.5797,
    tempoPlanBias: -5.7899,
    fusionPlanBias: 22.4429,
    precisionPlanBias: 19.8401,
    uncommonCardBias: 17.7196,
    rareCardBias: 18.1975,
    charmSynergyBias: 32.8192,
    duplicateCardPenalty: -22.5764,
    enemyProfileRespect: 18.074,
  },
};
