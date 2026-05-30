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
  name: "trained-bot-20260530-042931",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-30T04:29:31.420Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.6875,
  winRateVsChampion: 0.5,
  averageHpEdge: 6.166667,
  campaignScoreVsHeuristic: 69.666667,
  campaignScoreVsChampion: 70,
  campaignBossReachVsHeuristic: 0.333333,
  campaignBossReachVsChampion: 0.166667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 59.3083,
    controlDiff: 15.3364,
    boardStrengthDiff: 35.7638,
    reserveStrengthDiff: 57.4871,
    handStrengthDiff: -11.9191,
    mobilityDiff: -5.9716,
    cornerControlDiff: 42.1658,
    occupiedBoardDiff: 23.1812,
    imminentRoundDamageDiff: -24.0323,
    activeTurnTempo: -20.3369,
    specialCardValue: 5.5971,
    deckTrimValue: -21.3297,
    eliteRouteBias: -71.7885,
    restRouteBias: -9.1788,
    forgeRouteBias: 20.9537,
    treasureRouteBias: 22.8391,
    branchingRouteBias: 12.8335,
    riskTolerance: 45.6639,
    aggressionPlanBias: 15.3374,
    controlPlanBias: 34.3956,
    tempoPlanBias: -9.9534,
    fusionPlanBias: 2.0661,
    precisionPlanBias: 7.0165,
    uncommonCardBias: 27.7925,
    rareCardBias: 41.8159,
    charmSynergyBias: 35.0804,
    duplicateCardPenalty: 8.7358,
    enemyProfileRespect: 2.7164,
  },
};
