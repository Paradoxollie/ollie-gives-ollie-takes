import "server-only";

import { execFile } from "node:child_process";
import type { ChildProcess } from "node:child_process";
import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { randomInt } from "node:crypto";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";
import { spawn } from "node:child_process";

import { BOT_TRAINING_CONFIG, TRAINED_BOT_PROFILE } from "@/core";

const execFileAsync = promisify(execFile);
const TRAINING_REPORTS_DIRECTORY = path.join(process.cwd(), "reports", "training");
const ACTIVE_TRAINING_CHILDREN = new Map<number, ChildProcess>();

export type TrainingControlAction = "start" | "stop" | "restart";

export interface TrainingControlResult {
  action: TrainingControlAction;
  ok: boolean;
  message: string;
  stoppedCount: number;
  started: boolean;
}

export interface TrainingLaunchOptions {
  iterations?: number;
  matchesPerOpponent?: number;
  promotionMatchesPerOpponent?: number;
}

interface TrainingProcessInfo {
  ProcessId: number;
  CommandLine?: string;
}

function clampInteger(value: number | undefined, fallback: number, min: number, max: number): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return fallback;
  }

  return Math.max(min, Math.min(max, Math.round(value)));
}

function normalizeLaunchOptions(options: TrainingLaunchOptions = {}) {
  const matchesPerOpponent = clampInteger(
    options.matchesPerOpponent,
    Math.max(4, Math.round(BOT_TRAINING_CONFIG.matchesPerOpponent / 2)),
    2,
    32,
  );

  return {
    iterations: clampInteger(options.iterations, BOT_TRAINING_CONFIG.iterations + 4, 2, 64),
    matchesPerOpponent,
    promotionMatchesPerOpponent: clampInteger(
      options.promotionMatchesPerOpponent,
      BOT_TRAINING_CONFIG.promotionMatchesPerOpponent,
      matchesPerOpponent,
      64,
    ),
  };
}

function buildTrainingCliArgs(seed: number, launchOptions: TrainingLaunchOptions): string[] {
  const normalized = normalizeLaunchOptions(launchOptions);
  const tsxDirectory = path.join(process.cwd(), "node_modules", "tsx", "dist");
  const preflightPath = path.join(tsxDirectory, "preflight.cjs");
  const loaderPath = pathToFileURL(path.join(tsxDirectory, "loader.mjs")).href;

  return [
    "--require",
    preflightPath,
    "--import",
    loaderPath,
    "scripts/train-bot.ts",
    "--seed",
    String(seed),
    "--iterations",
    String(normalized.iterations),
    "--population",
    String(BOT_TRAINING_CONFIG.populationSize),
    "--elite-count",
    String(BOT_TRAINING_CONFIG.eliteCount),
    "--matches-per-opponent",
    String(normalized.matchesPerOpponent),
    "--promotion-matches-per-opponent",
    String(normalized.promotionMatchesPerOpponent),
    "--search-depth",
    String(Math.max(TRAINED_BOT_PROFILE.searchDepth, BOT_TRAINING_CONFIG.defaultSearchDepth + 1)),
    "--beam-width",
    String(Math.max(TRAINED_BOT_PROFILE.beamWidth, BOT_TRAINING_CONFIG.defaultBeamWidth - 2)),
    "--apply",
    "--promote",
  ];
}

async function listTrainingProcesses(): Promise<TrainingProcessInfo[]> {
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
        "| Select-Object ProcessId, CommandLine",
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

async function stopTrainingProcesses(): Promise<number> {
  const processes = await listTrainingProcesses();
  const uniqueIds = Array.from(new Set(processes.map((processInfo) => processInfo.ProcessId)));

  for (const processId of uniqueIds) {
    try {
      await execFileAsync("taskkill.exe", ["/PID", String(processId), "/T", "/F"]);
    } catch {
      // Ignore already-exited processes.
    }
  }

  return uniqueIds.length;
}

async function startTrainingProcess(launchOptions: TrainingLaunchOptions = {}): Promise<void> {
  await mkdir(TRAINING_REPORTS_DIRECTORY, { recursive: true });

  const stdoutPath = path.join(TRAINING_REPORTS_DIRECTORY, "current-train.log");
  const stderrPath = path.join(TRAINING_REPORTS_DIRECTORY, "current-train.err");
  const args = buildTrainingCliArgs(randomInt(1, 2_147_483_646), launchOptions);
  const stdoutStream = createWriteStream(stdoutPath, { flags: "w" });
  const stderrStream = createWriteStream(stderrPath, { flags: "w" });
  const child = spawn(process.execPath, args, {
    cwd: process.cwd(),
    detached: false,
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });

  ACTIVE_TRAINING_CHILDREN.set(child.pid!, child);
  child.stdout.pipe(stdoutStream);
  child.stderr.pipe(stderrStream);
  child.once("exit", () => {
    ACTIVE_TRAINING_CHILDREN.delete(child.pid!);
    stdoutStream.end();
    stderrStream.end();
  });
}

/**
 * Starts, stops, or restarts the local self-play training process used by the
 * localhost dashboard. This is intentionally limited to local tooling.
 */
export async function controlTraining(
  action: TrainingControlAction,
  launchOptions: TrainingLaunchOptions = {},
): Promise<TrainingControlResult> {
  if (action === "stop") {
    const stoppedCount = await stopTrainingProcesses();
    return {
      action,
      ok: true,
      message: stoppedCount > 0 ? "Entrainement stoppe." : "Aucun entrainement a stopper.",
      stoppedCount,
      started: false,
    };
  }

  if (action === "restart") {
    const stoppedCount = await stopTrainingProcesses();
    await startTrainingProcess(launchOptions);
    return {
      action,
      ok: true,
      message: stoppedCount > 0 ? "Entrainement relance." : "Nouvel entrainement lance.",
      stoppedCount,
      started: true,
    };
  }

  const alreadyRunning = (await listTrainingProcesses()).length > 0;
  if (alreadyRunning) {
    return {
      action,
      ok: true,
      message: "Un entrainement est deja actif.",
      stoppedCount: 0,
      started: false,
    };
  }

  await startTrainingProcess(launchOptions);
  return {
    action,
    ok: true,
    message: "Nouvel entrainement lance.",
    stoppedCount: 0,
    started: true,
  };
}
