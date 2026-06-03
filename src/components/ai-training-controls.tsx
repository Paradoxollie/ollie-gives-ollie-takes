"use client";

import { startTransition, useEffect, useState } from "react";

import type { TrainingControlPayload, TrainingStatusPayload } from "@/lib/training-status-types";

interface AiTrainingControlsProps {
  initialStatus: TrainingStatusPayload | null;
  canControlTraining: boolean;
}

async function fetchTrainingStatus(): Promise<TrainingStatusPayload> {
  const response = await fetch(`/api/training-status?ts=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Training status failed (${response.status})`);
  }

  return response.json() as Promise<TrainingStatusPayload>;
}

async function postTrainingControl(
  action: "start" | "stop" | "restart",
  options: {
    iterations?: number;
    matchesPerOpponent?: number;
    promotionMatchesPerOpponent?: number;
  } = {},
): Promise<TrainingControlPayload> {
  const response = await fetch("/api/training-control", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action,
      ...options,
    }),
  });

  if (!response.ok) {
    throw new Error(`Training control failed (${response.status})`);
  }

  return response.json() as Promise<TrainingControlPayload>;
}

function formatPercent(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${Math.round(value * 100)}%`;
}

function formatSigned(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}`;
}

export function AiTrainingControls({ initialStatus, canControlTraining }: AiTrainingControlsProps) {
  const [status, setStatus] = useState<TrainingStatusPayload | null>(initialStatus);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<"quick" | "solid" | "stop" | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const nextStatus = await fetchTrainingStatus();
        if (!cancelled) {
          startTransition(() => {
            setStatus(nextStatus);
            setError(null);
          });
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Erreur de statut IA");
        }
      }
    };

    const interval = window.setInterval(() => {
      void load();
    }, 5_000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const runControl = async (mode: "quick" | "solid" | "stop") => {
    if (!canControlTraining) {
      return;
    }

    setPending(mode);
    try {
      const payload =
        mode === "stop"
          ? await postTrainingControl("stop")
          : await postTrainingControl(status?.isTraining ? "restart" : "start", {
              iterations: mode === "quick" ? 4 : 12,
              matchesPerOpponent: mode === "quick" ? 4 : 8,
              promotionMatchesPerOpponent: 28,
            });
      startTransition(() => {
        setStatus(payload.status);
        setMessage(payload.message);
        setError(null);
      });
    } catch (controlError) {
      setError(controlError instanceof Error ? controlError.message : "Erreur de pilotage IA");
    } finally {
      setPending(null);
    }
  };

  const activeRun = status?.activeRun ?? null;
  const latestRun = status?.latestRun ?? null;
  const progress = formatPercent(activeRun?.progressRatio);

  return (
    <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 text-white">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Apprentissage</p>
          <h2 className="mt-2 font-serif text-2xl text-white">
            {status?.isTraining ? "Run actif" : "Champion stable"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/64">
            {status?.isTraining
              ? activeRun?.phaseLabel ?? "Apprentissage en cours"
              : latestRun
                ? `Dernier run: ${latestRun.reportId}`
                : "Aucun run d'apprentissage local detecte."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!canControlTraining || pending !== null}
            onClick={() => void runControl("quick")}
            className="rounded-full border border-emerald-200/20 bg-emerald-300/12 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-300/18 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Run rapide
          </button>
          <button
            type="button"
            disabled={!canControlTraining || pending !== null}
            onClick={() => void runControl("solid")}
            className="rounded-full border border-cyan-200/20 bg-cyan-300/12 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/18 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Run solide
          </button>
          <button
            type="button"
            disabled={!canControlTraining || pending !== null || !status?.isTraining}
            onClick={() => void runControl("stop")}
            className="rounded-full border border-rose-200/20 bg-rose-300/12 px-4 py-2 text-sm font-semibold text-rose-50 transition hover:bg-rose-300/18 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Stop
          </button>
        </div>
      </div>

      {!canControlTraining ? (
        <p className="mt-4 rounded-[1rem] border border-amber-200/14 bg-amber-200/10 px-4 py-3 text-sm leading-6 text-amber-50/86">
          Les boutons d'apprentissage sont reserves au localhost. En ligne, GitHub Actions entraine automatiquement
          l'IA puis publie le dernier snapshot valide.
        </p>
      ) : null}

      {message ? (
        <p className="mt-4 rounded-[1rem] border border-cyan-200/14 bg-cyan-200/10 px-4 py-3 text-sm text-cyan-50">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="mt-4 rounded-[1rem] border border-rose-200/18 bg-rose-200/10 px-4 py-3 text-sm text-rose-50">
          {error}
        </p>
      ) : null}

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        <div className="rounded-[1rem] border border-white/10 bg-black/16 p-4">
          <p className="text-[0.54rem] uppercase tracking-[0.2em] text-white/42">Progression</p>
          <p className="mt-2 text-2xl font-semibold">{status?.isTraining ? progress : "0%"}</p>
        </div>
        <div className="rounded-[1rem] border border-white/10 bg-black/16 p-4">
          <p className="text-[0.54rem] uppercase tracking-[0.2em] text-white/42">Meilleur score</p>
          <p className="mt-2 text-2xl font-semibold">{formatSigned(activeRun?.bestScore ?? latestRun?.bestScore)}</p>
        </div>
        <div className="rounded-[1rem] border border-white/10 bg-black/16 p-4">
          <p className="text-[0.54rem] uppercase tracking-[0.2em] text-white/42">Vs heuristique</p>
          <p className="mt-2 text-2xl font-semibold">{formatPercent(latestRun?.winRateVsHeuristic)}</p>
        </div>
        <div className="rounded-[1rem] border border-white/10 bg-black/16 p-4">
          <p className="text-[0.54rem] uppercase tracking-[0.2em] text-white/42">Vs champion</p>
          <p className="mt-2 text-2xl font-semibold">{formatPercent(latestRun?.winRateVsChampion)}</p>
        </div>
      </div>
    </section>
  );
}
