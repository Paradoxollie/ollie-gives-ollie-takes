import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

export interface TrainingRecentRunStatus {
  reportId: string;
  trainedAt: string;
  bestScore: number;
  record: string;
  averageHpEdge: number;
  searchDepth: number;
  beamWidth: number;
  approved: boolean | null;
  promotionReasons: string[];
  winRateVsHeuristic: number | null;
  averageHpEdgeVsHeuristic: number | null;
  winRateVsChampion: number | null;
  averageHpEdgeVsChampion: number | null;
  campaignScoreVsHeuristic: number | null;
  campaignScoreVsChampion: number | null;
  campaignBossReachVsHeuristic: number | null;
  campaignBossReachVsChampion: number | null;
}

export interface ActiveTrainingStatus {
  reportId: string | null;
  startedAt: string | null;
  commandLine: string | null;
  logPath: string | null;
  totalIterations: number | null;
  completedIterations: number;
  progressRatio: number | null;
  phase: "candidate" | "promotion" | null;
  phaseLabel: string | null;
  currentIteration: number | null;
  currentCandidateIndex: number | null;
  populationSize: number | null;
  elapsedMs: number | null;
  etaMs: number | null;
  estimatedFinishAt: string | null;
  bestScore: number | null;
  bestRecord: string | null;
  averageHpEdge: number | null;
  improvementSinceStart: number | null;
  improvementVsLatestCompleted: number | null;
  campaignAverageScore: number | null;
  campaignBossReachRate: number | null;
  campaignVictoryRate: number | null;
}

export interface TrainingStatusPayload {
  checkedAt: string;
  activeTrainingCount: number;
  isTraining: boolean;
  activeRun: ActiveTrainingStatus | null;
  latestRun: TrainingRecentRunStatus | null;
  recentRuns: TrainingRecentRunStatus[];
  liveChampion: RuntimeLiveChampionProfile;
}

export interface TrainingControlPayload {
  action: "start" | "stop" | "restart";
  ok: boolean;
  message: string;
  stoppedCount: number;
  started: boolean;
  status: TrainingStatusPayload;
}
