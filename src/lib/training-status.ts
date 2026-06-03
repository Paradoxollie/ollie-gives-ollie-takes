import "server-only";

import { execFile } from "node:child_process";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

import { loadResolvedLiveChampionProfile } from "@/lib/live-champion";
import type { ActiveTrainingStatus, TrainingRecentRunStatus, TrainingStatusPayload } from "@/lib/training-status-types";

const execFileAsync = promisify(execFile);
const TRAINING_REPORTS_DIRECTORY = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "reports",
  "training",
);

interface TrainingReportFile {
  reportId: string;
  trainedAt: string;
  config?: {
    searchDepth?: number;
    beamWidth?: number;
  };
  best?: {
    score?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    averageHpEdge?: number;
  };
}

interface PromotionReportFile {
  reportId: string;
  approved: boolean;
  reasons: string[];
  benchmark?: {
    opponents?: Array<{
      opponentId: string;
      winRate: number;
      averageHpEdge: number;
    }>;
  };
  campaignBenchmark?: {
    opponents?: Array<{
      opponentId: string;
      averageScore: number;
      bossReachRate: number;
    }>;
  };
}

interface TrainingProcessInfo {
  ProcessId: number;
  CreationDate?: string;
  CommandLine?: string;
}

interface TrainingLogMeta {
  reportId?: string;
  startedAt?: string;
  config?: {
    iterations?: number;
  };
}

interface TrainingLogProgress {
  phase?: "candidate" | "promotion";
  phaseLabel?: string;
  iteration?: number;
  totalIterations?: number;
  candidateIndex?: number;
  populationSize?: number;
  startedUnits?: number;
  completedUnits?: number;
  totalUnits?: number;
  bestScore?: number;
  wins?: number;
  draws?: number;
  losses?: number;
  averageHpEdge?: number;
  campaignAverageScore?: number;
  campaignBossReachRate?: number;
  campaignVictoryRate?: number;
}

async function readJsonFile<T>(filename: string): Promise<T | null> {
  try {
    const raw = await readFile(
      /* turbopackIgnore: true */ path.join(TRAINING_REPORTS_DIRECTORY, filename),
      "utf8",
    );
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

async function readRecentTrainingFiles(): Promise<string[]> {
  try {
    const files = await readdir(TRAINING_REPORTS_DIRECTORY);
    return files
      .filter((file) => file.endsWith(".json") && file.startsWith("trained-bot-") && !file.includes("-promotion"))
      .sort((left, right) => right.localeCompare(left));
  } catch {
    return [];
  }
}

async function readLatestLogFilePath(): Promise<string | null> {
  try {
    const files = await readdir(TRAINING_REPORTS_DIRECTORY, { withFileTypes: true });
    const logFilenames = files
      .filter((entry) => entry.isFile() && entry.name.endsWith(".log"))
      .map((entry) => entry.name);
    if (logFilenames.length === 0) {
      return null;
    }

    const logFiles = await Promise.all(
      logFilenames.map(async (filename) => ({
        filename,
        modifiedAt: (
          await stat(/* turbopackIgnore: true */ path.join(TRAINING_REPORTS_DIRECTORY, filename))
        ).mtimeMs,
      })),
    );

    const newest = logFiles.sort((left, right) => right.modifiedAt - left.modifiedAt)[0];
    return newest ? path.join(TRAINING_REPORTS_DIRECTORY, newest.filename) : null;
  } catch {
    return null;
  }
}

function parseStructuredLogLines(logText: string): {
  meta: TrainingLogMeta | null;
  progressEntries: TrainingLogProgress[];
} {
  const metaPrefix = "TRAINING_META ";
  const progressPrefix = "TRAINING_PROGRESS ";
  let meta: TrainingLogMeta | null = null;
  const progressEntries: TrainingLogProgress[] = [];

  for (const line of logText.split(/\r?\n/)) {
    if (line.startsWith(metaPrefix)) {
      try {
        meta = JSON.parse(line.slice(metaPrefix.length)) as TrainingLogMeta;
      } catch {
        // Ignore malformed progress lines.
      }
      continue;
    }

    if (line.startsWith(progressPrefix)) {
      try {
        progressEntries.push(JSON.parse(line.slice(progressPrefix.length)) as TrainingLogProgress);
      } catch {
        // Ignore malformed progress lines.
      }
    }
  }

  return {
    meta,
    progressEntries,
  };
}

async function readLatestLogSnapshot(): Promise<{
  logPath: string | null;
  meta: TrainingLogMeta | null;
  progressEntries: TrainingLogProgress[];
}> {
  const logPath = await readLatestLogFilePath();
  if (!logPath) {
    return {
      logPath: null,
      meta: null,
      progressEntries: [],
    };
  }

  try {
    const raw = await readFile(/* turbopackIgnore: true */ logPath, "utf8");
    const parsed = parseStructuredLogLines(raw);
    return {
      logPath,
      meta: parsed.meta,
      progressEntries: parsed.progressEntries,
    };
  } catch {
    return {
      logPath,
      meta: null,
      progressEntries: [],
    };
  }
}

async function listActiveTrainingProcesses(): Promise<TrainingProcessInfo[]> {
  if (process.platform !== "win32") {
    return [];
  }

  try {
    const { stdout } = await execFileAsync("powershell.exe", [
      "-NoProfile",
      "-Command",
      [
        "Get-CimInstance Win32_Process",
        "| Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -match 'train-bot\\.ts' }",
        "| Select-Object ProcessId, @{Name='CreationDate';Expression={$_.CreationDate.ToUniversalTime().ToString('o')}}, CommandLine",
        "| ConvertTo-Json -Compress",
      ].join(" "),
    ]);

    const trimmed = stdout.trim();
    if (!trimmed) {
      return [];
    }

    const parsed = JSON.parse(trimmed) as TrainingProcessInfo | TrainingProcessInfo[];
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
}

function formatRecord(report: TrainingReportFile | null): string {
  if (!report?.best) {
    return "0W / 0D / 0L";
  }

  return `${report.best.wins ?? 0}W / ${report.best.draws ?? 0}D / ${report.best.losses ?? 0}L`;
}

function extractFlagNumber(commandLine: string | undefined, flag: string): number | null {
  if (!commandLine) {
    return null;
  }

  const match = commandLine.match(new RegExp(`--${flag}\\s+(\\d+)`));
  if (!match) {
    return null;
  }

  return Number.parseInt(match[1], 10);
}

function dedupeTrainingProcesses(processes: TrainingProcessInfo[]): TrainingProcessInfo[] {
  const byRunKey = new Map<string, TrainingProcessInfo>();

  for (const processInfo of processes) {
    const seed = extractFlagNumber(processInfo.CommandLine, "seed") ?? -1;
    const iterations = extractFlagNumber(processInfo.CommandLine, "iterations") ?? -1;
    const searchDepth = extractFlagNumber(processInfo.CommandLine, "search-depth") ?? -1;
    const key = `${seed}:${iterations}:${searchDepth}`;
    const existing = byRunKey.get(key);

    if (!existing || (processInfo.CommandLine?.length ?? 0) > (existing.CommandLine?.length ?? 0)) {
      byRunKey.set(key, processInfo);
    }
  }

  return Array.from(byRunKey.values());
}

async function loadRecentRuns(): Promise<TrainingRecentRunStatus[]> {
  const trainingFiles = (await readRecentTrainingFiles()).slice(0, 6);

  return Promise.all(
    trainingFiles.map(async (filename) => {
      const report = await readJsonFile<TrainingReportFile>(filename);
      if (!report) {
        return null;
      }

      const promotion = await readJsonFile<PromotionReportFile>(`${report.reportId}-promotion.json`);

      return {
        reportId: report.reportId,
        trainedAt: report.trainedAt,
        bestScore: report.best?.score ?? 0,
        record: formatRecord(report),
        averageHpEdge: report.best?.averageHpEdge ?? 0,
        searchDepth: report.config?.searchDepth ?? 0,
        beamWidth: report.config?.beamWidth ?? 0,
        approved: promotion?.approved ?? null,
        promotionReasons: promotion?.reasons ?? [],
        winRateVsHeuristic: promotion?.benchmark?.opponents?.find((entry) => entry.opponentId === "heuristic")?.winRate ?? null,
        averageHpEdgeVsHeuristic:
          promotion?.benchmark?.opponents?.find((entry) => entry.opponentId === "heuristic")?.averageHpEdge ?? null,
        winRateVsChampion: promotion?.benchmark?.opponents?.find((entry) => entry.opponentId === "champion")?.winRate ?? null,
        averageHpEdgeVsChampion:
          promotion?.benchmark?.opponents?.find((entry) => entry.opponentId === "champion")?.averageHpEdge ?? null,
        campaignScoreVsHeuristic:
          promotion?.campaignBenchmark?.opponents?.find((entry) => entry.opponentId === "heuristic")?.averageScore ?? null,
        campaignScoreVsChampion:
          promotion?.campaignBenchmark?.opponents?.find((entry) => entry.opponentId === "champion")?.averageScore ?? null,
        campaignBossReachVsHeuristic:
          promotion?.campaignBenchmark?.opponents?.find((entry) => entry.opponentId === "heuristic")?.bossReachRate ?? null,
        campaignBossReachVsChampion:
          promotion?.campaignBenchmark?.opponents?.find((entry) => entry.opponentId === "champion")?.bossReachRate ?? null,
      } satisfies TrainingRecentRunStatus;
    }),
  ).then((runs) => runs.filter((run): run is TrainingRecentRunStatus => run !== null));
}

function buildActiveRun(options: {
  processInfo: TrainingProcessInfo | null;
  latestRun: TrainingRecentRunStatus | null;
  logPath: string | null;
  meta: TrainingLogMeta | null;
  progressEntries: TrainingLogProgress[];
}): ActiveTrainingStatus | null {
  if (!options.processInfo) {
    return null;
  }

  const startedAt = options.meta?.startedAt ?? options.processInfo.CreationDate ?? null;
  const lastProgress = options.progressEntries.at(-1) ?? null;
  const firstProgress = options.progressEntries[0] ?? null;
  const totalIterations =
    options.meta?.config?.iterations ?? lastProgress?.totalIterations ?? extractFlagNumber(options.processInfo.CommandLine, "iterations");
  const populationSize =
    lastProgress?.populationSize ?? extractFlagNumber(options.processInfo.CommandLine, "population");
  const totalUnits = lastProgress?.totalUnits ?? (totalIterations && populationSize ? totalIterations * populationSize + 1 : null);
  const completedUnits = lastProgress?.completedUnits ?? null;
  const startedUnits = lastProgress?.startedUnits ?? null;
  const completedIterations =
    !lastProgress
      ? 0
      : lastProgress.phase === "promotion"
        ? totalIterations ?? lastProgress.iteration ?? 0
        : Math.max(0, (lastProgress.iteration ?? 1) - (completedUnits === startedUnits ? 0 : 1));
  const elapsedMs =
    startedAt && Number.isFinite(Date.parse(startedAt)) ? Math.max(0, Date.now() - Date.parse(startedAt)) : null;
  const etaMs =
    elapsedMs && totalUnits && typeof completedUnits === "number" && completedUnits > 0
      ? Math.round((elapsedMs / completedUnits) * Math.max(0, totalUnits - completedUnits))
      : null;
  const progressRatio =
    totalUnits && typeof startedUnits === "number"
      ? Math.min(1, Math.max(0, startedUnits / totalUnits))
      : totalIterations && completedIterations > 0
        ? Math.min(1, completedIterations / totalIterations)
        : null;
  const latestBestScoreEntry =
    [...options.progressEntries].reverse().find((entry) => typeof entry.bestScore === "number") ?? null;
  const latestRecordEntry =
    [...options.progressEntries].reverse().find(
      (entry) =>
        typeof entry.wins === "number" &&
        typeof entry.draws === "number" &&
        typeof entry.losses === "number",
    ) ?? null;
  const latestAverageHpEdgeEntry =
    [...options.progressEntries].reverse().find((entry) => typeof entry.averageHpEdge === "number") ?? null;
  const latestCampaignAverageScoreEntry =
    [...options.progressEntries].reverse().find((entry) => typeof entry.campaignAverageScore === "number") ?? null;
  const latestCampaignBossReachEntry =
    [...options.progressEntries].reverse().find((entry) => typeof entry.campaignBossReachRate === "number") ?? null;
  const latestCampaignVictoryEntry =
    [...options.progressEntries].reverse().find((entry) => typeof entry.campaignVictoryRate === "number") ?? null;

  return {
    reportId: options.meta?.reportId ?? null,
    startedAt,
    commandLine: options.processInfo.CommandLine ?? null,
    logPath: options.logPath,
    totalIterations: totalIterations ?? null,
    completedIterations,
    progressRatio,
    phase: lastProgress?.phase ?? null,
    phaseLabel: lastProgress?.phaseLabel ?? null,
    currentIteration: lastProgress?.iteration ?? null,
    currentCandidateIndex: lastProgress?.candidateIndex ?? null,
    populationSize: populationSize ?? null,
    elapsedMs,
    etaMs,
    estimatedFinishAt: etaMs && elapsedMs && startedAt ? new Date(Date.parse(startedAt) + elapsedMs + etaMs).toISOString() : null,
    bestScore: latestBestScoreEntry?.bestScore ?? null,
    bestRecord:
      latestRecordEntry
        ? `${latestRecordEntry.wins ?? 0}W / ${latestRecordEntry.draws ?? 0}D / ${latestRecordEntry.losses ?? 0}L`
        : null,
    averageHpEdge: latestAverageHpEdgeEntry?.averageHpEdge ?? null,
    improvementSinceStart:
      typeof latestBestScoreEntry?.bestScore === "number" && typeof firstProgress?.bestScore === "number"
        ? latestBestScoreEntry.bestScore - firstProgress.bestScore
        : null,
    improvementVsLatestCompleted:
      typeof latestBestScoreEntry?.bestScore === "number" && options.latestRun
        ? latestBestScoreEntry.bestScore - options.latestRun.bestScore
        : null,
    campaignAverageScore: latestCampaignAverageScoreEntry?.campaignAverageScore ?? null,
    campaignBossReachRate: latestCampaignBossReachEntry?.campaignBossReachRate ?? null,
    campaignVictoryRate: latestCampaignVictoryEntry?.campaignVictoryRate ?? null,
  };
}

/**
 * Reads local training reports, log files, and active trainer processes so the
 * localhost UI can expose complete visibility into the bot-training pipeline.
 */
export async function loadTrainingStatus(): Promise<TrainingStatusPayload> {
  const [recentRuns, rawActiveProcesses, logSnapshot, liveChampion] = await Promise.all([
    loadRecentRuns(),
    listActiveTrainingProcesses(),
    readLatestLogSnapshot(),
    loadResolvedLiveChampionProfile(),
  ]);
  const activeProcesses = dedupeTrainingProcesses(rawActiveProcesses);
  const latestRun = recentRuns[0] ?? null;
  const activeProcess =
    activeProcesses.sort((left, right) => (right.CreationDate ?? "").localeCompare(left.CreationDate ?? ""))[0] ?? null;

  return {
    checkedAt: new Date().toISOString(),
    activeTrainingCount: activeProcesses.length,
    isTraining: activeProcesses.length > 0,
    activeRun: buildActiveRun({
      processInfo: activeProcess,
      latestRun,
      logPath: logSnapshot.logPath,
      meta: logSnapshot.meta,
      progressEntries: logSnapshot.progressEntries,
    }),
    latestRun,
    recentRuns,
    liveChampion,
  };
}
