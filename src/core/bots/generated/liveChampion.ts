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
  name: "trained-bot-20260323-092451",
  source: "trained",
  approved: true,
  promotedAt: "2026-03-23T09:24:51.422Z",
  benchmarkMatchesPerOpponent: 12,
  winRateVsHeuristic: 0.75,
  winRateVsChampion: 0.583333,
  averageHpEdge: 4.444444,
  campaignScoreVsHeuristic: 71,
  campaignScoreVsChampion: 80,
  campaignBossReachVsHeuristic: 0.166667,
  campaignBossReachVsChampion: 0,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 25.393,
    controlDiff: 21.6947,
    boardStrengthDiff: -2.1276,
    reserveStrengthDiff: 1.0458,
    handStrengthDiff: -3.5403,
    mobilityDiff: 8.3167,
    cornerControlDiff: 10.3269,
    occupiedBoardDiff: -8.8959,
    imminentRoundDamageDiff: 12.1134,
    activeTurnTempo: 12.14,
    specialCardValue: 26.7957,
    deckTrimValue: -5.232,
    eliteRouteBias: -17.3154,
    restRouteBias: -4.2055,
    forgeRouteBias: 8.0325,
    treasureRouteBias: -7.1457,
    branchingRouteBias: 9.1057,
    riskTolerance: 16.6833,
    aggressionPlanBias: 2.1163,
    controlPlanBias: 10.2151,
    tempoPlanBias: -5.6835,
    fusionPlanBias: 26.9092,
    precisionPlanBias: 1.4938,
    uncommonCardBias: -3.7492,
    rareCardBias: 14.2281,
    charmSynergyBias: 26.2578,
    duplicateCardPenalty: -7.8138,
    enemyProfileRespect: 7.7973,
  },
};
