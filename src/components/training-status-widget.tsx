"use client";

import { startTransition, useEffect, useState } from "react";

import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";
import type {
  TrainingControlPayload,
  TrainingRecentRunStatus,
  TrainingStatusPayload,
} from "@/lib/training-status-types";

const REFRESH_INTERVAL_MS = 5_000;

function formatDuration(ms: number | null): string {
  if (!ms || ms <= 0) {
    return "--";
  }

  const totalSeconds = Math.round(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes.toString().padStart(2, "0")}m`;
  }

  if (minutes > 0) {
    return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
  }

  return `${seconds}s`;
}

function formatDateTime(value: string | null | undefined): string {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatSigned(value: number | null | undefined, fractionDigits = 2): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${value >= 0 ? "+" : ""}${value.toFixed(fractionDigits)}`;
}

function formatPercent(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${Math.round(value * 100)}%`;
}

function approvalTone(run: TrainingRecentRunStatus | null) {
  if (!run || run.approved === null) {
    return "border-white/12 bg-white/8 text-white/72";
  }

  return run.approved
    ? "border-emerald-300/25 bg-emerald-300/14 text-emerald-100"
    : "border-rose-300/25 bg-rose-300/14 text-rose-100";
}

function championTone(profile: RuntimeLiveChampionProfile | null) {
  if (!profile) {
    return "border-white/12 bg-white/8 text-white/72";
  }

  return profile.source === "trained"
    ? "border-emerald-300/25 bg-emerald-300/14 text-emerald-100"
    : "border-amber-300/25 bg-amber-300/14 text-amber-100";
}

async function fetchTrainingStatus(): Promise<TrainingStatusPayload> {
  const response = await fetch(`/api/training-status?ts=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to load training status (${response.status})`);
  }

  return response.json() as Promise<TrainingStatusPayload>;
}

async function postTrainingControl(action: "start" | "stop" | "restart"): Promise<TrainingControlPayload> {
  return postTrainingControlWithOptions(action, {});
}

async function postTrainingControlWithOptions(
  action: "start" | "stop" | "restart",
  options: {
    iterations?: number;
    matchesPerOpponent?: number;
    promotionMatchesPerOpponent?: number;
  },
): Promise<TrainingControlPayload> {
  const response = await fetch("/api/training-control", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action,
      iterations: options.iterations,
      matchesPerOpponent: options.matchesPerOpponent,
      promotionMatchesPerOpponent: options.promotionMatchesPerOpponent,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to control training (${response.status})`);
  }

  return response.json() as Promise<TrainingControlPayload>;
}

export function TrainingStatusWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<TrainingStatusPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [controlMessage, setControlMessage] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<"start" | "stop" | "restart" | null>(null);
  const [trainingIterations, setTrainingIterations] = useState(12);
  const [matchesPerOpponent, setMatchesPerOpponent] = useState(4);
  const [promotionMatches, setPromotionMatches] = useState(28);

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
          setError(loadError instanceof Error ? loadError.message : "Erreur de chargement");
        }
      }
    };

    void load();
    const interval = window.setInterval(() => {
      void load();
    }, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const isTraining = status?.isTraining ?? false;
  const activeRun = status?.activeRun ?? null;
  const latestRun = status?.latestRun ?? null;
  const liveChampion = status?.liveChampion ?? null;
  const progressPercent =
    typeof activeRun?.progressRatio === "number" && Number.isFinite(activeRun.progressRatio)
      ? Math.round(activeRun.progressRatio * 100)
      : 0;
  const activePhaseLabel =
    activeRun?.phaseLabel ??
    (activeRun?.phase === "promotion"
      ? "Benchmark final et promotion"
      : activeRun?.currentIteration && activeRun?.currentCandidateIndex && activeRun?.populationSize
        ? `Iteration ${activeRun.currentIteration}/${activeRun.totalIterations ?? "--"} - candidat ${activeRun.currentCandidateIndex}/${activeRun.populationSize}`
        : "Initialisation");

  const handleControl = async (action: "start" | "stop" | "restart") => {
    setPendingAction(action);

    try {
      const payload =
        action === "stop"
          ? await postTrainingControl(action)
          : await postTrainingControlWithOptions(action, {
              iterations: trainingIterations,
              matchesPerOpponent,
              promotionMatchesPerOpponent: promotionMatches,
            });
      startTransition(() => {
        setStatus(payload.status);
        setControlMessage(payload.message);
        setError(null);
      });
    } catch (controlError) {
      setError(controlError instanceof Error ? controlError.message : "Erreur de pilotage");
    } finally {
      setPendingAction(null);
    }
  };

  return (
    <>
      <div className="fixed right-4 top-4 z-[120] flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className={[
            "group flex items-center gap-3 rounded-full border px-4 py-3 text-left text-white shadow-[0_18px_40px_rgba(4,10,8,0.38)] backdrop-blur-xl transition",
            isTraining
              ? "border-emerald-300/24 bg-[linear-gradient(180deg,rgba(16,44,28,0.9),rgba(8,22,15,0.92))]"
              : "border-white/12 bg-[linear-gradient(180deg,rgba(10,20,36,0.9),rgba(7,14,26,0.92))]",
          ].join(" ")}
        >
          <span
            className={[
              "h-3 w-3 rounded-full",
              isTraining ? "animate-pulse bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.6)]" : "bg-cyan-200/80",
            ].join(" ")}
          />
          <span className="flex flex-col">
            <span className="text-[0.56rem] uppercase tracking-[0.24em] text-white/55">Pilotage IA</span>
            <span className="text-sm font-semibold">{isTraining ? "Entrainement actif" : "IA stable"}</span>
          </span>
          <span className="hidden text-xs text-white/52 sm:block">
            {isTraining ? `${progressPercent}%` : latestRun ? latestRun.reportId : "Aucun run"}
          </span>
        </button>
      </div>

      {open ? (
        <div className="fixed right-4 top-20 z-[120] w-[24rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,16,30,0.96),rgba(6,12,23,0.96))] text-white shadow-[0_28px_80px_rgba(5,12,24,0.48)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.26em] text-cyan-100/55">Localhost IA</p>
              <h2 className="mt-1 font-serif text-2xl text-white">Centre d'entrainement</h2>
              <p className="mt-1 text-xs text-white/48">Derniere verification: {formatDateTime(status?.checkedAt)}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-semibold text-white/82 transition hover:bg-white/12"
            >
              Fermer
            </button>
          </div>

          <div className="max-h-[70vh] space-y-4 overflow-y-auto px-5 py-4">
            {error ? (
              <div className="rounded-[1.3rem] border border-rose-300/24 bg-rose-300/12 p-4 text-sm text-rose-100">
                {error}
              </div>
            ) : null}

            {controlMessage ? (
              <div className="rounded-[1.3rem] border border-cyan-300/18 bg-cyan-300/10 p-4 text-sm text-cyan-50">
                {controlMessage}
              </div>
            ) : null}

            <section className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="space-y-1.5 text-sm text-white/75">
                  <span className="block text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Iterations</span>
                  <input
                    type="number"
                    min={2}
                    max={64}
                    value={trainingIterations}
                    onChange={(event) => setTrainingIterations(Number(event.target.value))}
                    className="w-full rounded-[0.95rem] border border-white/10 bg-black/18 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-200/50"
                  />
                </label>
                <label className="space-y-1.5 text-sm text-white/75">
                  <span className="block text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Matchs / opp.</span>
                  <input
                    type="number"
                    min={4}
                    max={32}
                    step={4}
                    value={matchesPerOpponent}
                    onChange={(event) => setMatchesPerOpponent(Number(event.target.value))}
                    className="w-full rounded-[0.95rem] border border-white/10 bg-black/18 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-200/50"
                  />
                </label>
                <label className="space-y-1.5 text-sm text-white/75">
                  <span className="block text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Benchmark promo</span>
                  <input
                    type="number"
                    min={4}
                    max={64}
                    step={4}
                    value={promotionMatches}
                    onChange={(event) => setPromotionMatches(Number(event.target.value))}
                    className="w-full rounded-[0.95rem] border border-white/10 bg-black/18 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-200/50"
                  />
                </label>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/48">
                Les matchs sont arrondis par groupes de 4 pour equilibrer les places et le joueur qui commence.
              </p>
            </section>

            <section className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Etat actuel</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {isTraining
                      ? `Run actif${status && status.activeTrainingCount > 1 ? ` (${status.activeTrainingCount})` : ""}`
                      : "Aucun entrainement en cours"}
                  </p>
                </div>
                <div className={["rounded-full border px-3 py-1 text-xs font-semibold", approvalTone(latestRun)].join(" ")}>
                  {isTraining ? "Live" : latestRun?.approved ? "Promu" : "Fallback"}
                </div>
              </div>

              {activeRun ? (
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-3 text-sm text-white/72">
                      <span>
                        {activeRun.phase === "promotion"
                          ? "Promotion finale"
                          : `Iterations ${activeRun.completedIterations}/${activeRun.totalIterations ?? "--"}`}
                      </span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-3 rounded-full bg-[linear-gradient(90deg,rgba(110,231,183,0.94),rgba(103,232,249,0.94))]"
                        style={{ width: `${progressPercent > 0 ? Math.max(8, progressPercent) : 0}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-white/56">{activePhaseLabel}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                      <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Temps ecoule</p>
                      <p className="mt-2 text-xl font-semibold text-white">{formatDuration(activeRun.elapsedMs)}</p>
                    </div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                      <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">ETA</p>
                      <p className="mt-2 text-xl font-semibold text-white">{formatDuration(activeRun.etaMs)}</p>
                      <p className="mt-1 text-xs text-white/46">Fin estimee {formatDateTime(activeRun.estimatedFinishAt)}</p>
                    </div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                      <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Meilleur score</p>
                      <p className="mt-2 text-xl font-semibold text-white">{formatSigned(activeRun.bestScore)}</p>
                      <p className="mt-1 text-xs text-white/46">{activeRun.bestRecord ?? "--"}</p>
                    </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Progression</p>
                    <p className="mt-2 text-xl font-semibold text-white">{formatSigned(activeRun.improvementSinceStart)}</p>
                    <p className="mt-1 text-xs text-white/46">
                      vs dernier termine {formatSigned(activeRun.improvementVsLatestCompleted)}
                    </p>
                  </div>
                </div>

                    <p className="rounded-[1rem] border border-white/8 bg-black/14 px-3 py-2 text-xs leading-5 text-white/56">
                    Le vrai progres n'est valide qu'au benchmark final: battre l'heuristique puis le champion live sur les duels, puis bien traverser des runs complets. La hausse de score en cours n'est qu'un signal intermediaire.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                      <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Campagne</p>
                      <p className="mt-2 text-xl font-semibold text-white">{formatSigned(activeRun.campaignAverageScore)}</p>
                      <p className="mt-1 text-xs text-white/46">score moyen de run complet</p>
                    </div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                      <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Boss atteint</p>
                      <p className="mt-2 text-xl font-semibold text-white">{formatPercent(activeRun.campaignBossReachRate)}</p>
                      <p className="mt-1 text-xs text-white/46">victoire run {formatPercent(activeRun.campaignVictoryRate)}</p>
                    </div>
                  </div>

                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Run</p>
                    <p className="mt-2 text-sm font-semibold text-white">{activeRun.reportId ?? "En attente du reportId"}</p>
                    <p className="mt-1 text-xs leading-5 text-white/50">Log {activeRun.logPath ?? "--"}</p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => handleControl("restart")}
                      disabled={pendingAction !== null}
                      className="rounded-[1rem] border border-cyan-300/18 bg-cyan-300/12 px-4 py-3 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/18 disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      {pendingAction === "restart" ? "Relance..." : "Relancer l'apprentissage"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleControl("stop")}
                      disabled={pendingAction !== null}
                      className="rounded-[1rem] border border-rose-300/18 bg-rose-300/12 px-4 py-3 text-sm font-semibold text-rose-50 transition hover:bg-rose-300/18 disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      {pendingAction === "stop" ? "Arret..." : "Stopper"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <p className="text-sm leading-6 text-white/62">
                    Aucun process d'entrainement detecte pour le moment. Le panneau reste branche sur les derniers rapports generes localement.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleControl("start")}
                    disabled={pendingAction !== null}
                    className="w-full rounded-[1rem] border border-emerald-300/18 bg-emerald-300/12 px-4 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-300/18 disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    {pendingAction === "start" ? "Lancement..." : "Lancer un apprentissage"}
                  </button>
                </div>
              )}
            </section>

            <section className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Modele live utilise</p>
                  <p className="mt-1 text-lg font-semibold text-white">{liveChampion?.name ?? "Inconnu"}</p>
                </div>
                <div className={["rounded-full border px-3 py-1 text-xs font-semibold", championTone(liveChampion)].join(" ")}>
                  {liveChampion?.source === "trained" ? "Bot entraine" : "Heuristique"}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                  <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Recherche</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {liveChampion?.searchDepth ?? "--"} / {liveChampion?.beamWidth ?? "--"}
                  </p>
                  <p className="mt-1 text-xs text-white/46">depth / beam</p>
                </div>
                <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                  <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Benchmark</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {liveChampion ? `${Math.round(liveChampion.winRateVsChampion * 100)}%` : "--"}
                  </p>
                  <p className="mt-1 text-xs text-white/46">vs champion live precedent</p>
                </div>
                <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                  <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Campagne</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {liveChampion ? formatSigned(liveChampion.campaignScoreVsChampion) : "--"}
                  </p>
                  <p className="mt-1 text-xs text-white/46">
                    boss atteint {liveChampion ? formatPercent(liveChampion.campaignBossReachVsChampion) : "--"}
                  </p>
                </div>
                <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3 sm:col-span-2">
                  <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Pourquoi ce modele</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {liveChampion?.selectionReason ?? "Aucune information disponible."}
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Dernier run termine</p>
                  <p className="mt-1 text-lg font-semibold text-white">{latestRun?.reportId ?? "Aucun run termine"}</p>
                </div>
                {latestRun ? (
                  <div className={["rounded-full border px-3 py-1 text-xs font-semibold", approvalTone(latestRun)].join(" ")}>
                    {latestRun.approved === null ? "Sans benchmark" : latestRun.approved ? "Promotion OK" : "Promotion refusee"}
                  </div>
                ) : null}
              </div>

              {latestRun ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Score</p>
                    <p className="mt-2 text-xl font-semibold text-white">{latestRun.bestScore.toFixed(3)}</p>
                    <p className="mt-1 text-xs text-white/46">{latestRun.record}</p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Recherche</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {latestRun.searchDepth} / {latestRun.beamWidth}
                    </p>
                    <p className="mt-1 text-xs text-white/46">depth / beam</p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Vs heuristique</p>
                    <p className="mt-2 text-xl font-semibold text-white">{formatPercent(latestRun.winRateVsHeuristic)}</p>
                    <p className="mt-1 text-xs text-white/46">edge PV {formatSigned(latestRun.averageHpEdgeVsHeuristic)}</p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Vs champion live</p>
                    <p className="mt-2 text-xl font-semibold text-white">{formatPercent(latestRun.winRateVsChampion)}</p>
                    <p className="mt-1 text-xs text-white/46">edge PV {formatSigned(latestRun.averageHpEdgeVsChampion)}</p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Run vs heuristique</p>
                    <p className="mt-2 text-xl font-semibold text-white">{formatSigned(latestRun.campaignScoreVsHeuristic)}</p>
                    <p className="mt-1 text-xs text-white/46">
                      boss atteint {formatPercent(latestRun.campaignBossReachVsHeuristic)}
                    </p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Run vs champion</p>
                    <p className="mt-2 text-xl font-semibold text-white">{formatSigned(latestRun.campaignScoreVsChampion)}</p>
                    <p className="mt-1 text-xs text-white/46">
                      boss atteint {formatPercent(latestRun.campaignBossReachVsChampion)}
                    </p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-black/14 p-3 sm:col-span-2">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-white/44">Verdict</p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      {latestRun.approved
                        ? "Ce profil a passe le benchmark et peut remplacer le champion live."
                        : latestRun.promotionReasons.length > 0
                          ? latestRun.promotionReasons.join(" ")
                          : "Pas encore de verdict de promotion."}
                    </p>
                  </div>
                </div>
              ) : null}
            </section>

            <section className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-4">
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Historique recent</p>
              <div className="mt-3 space-y-2.5">
                {status?.recentRuns.slice(0, 4).map((run) => (
                  <div
                    key={run.reportId}
                    className="flex items-start justify-between gap-3 rounded-[1rem] border border-white/8 bg-black/14 px-3 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{run.reportId}</p>
                      <p className="mt-1 text-xs text-white/48">
                        {formatDateTime(run.trainedAt)} | {run.record}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-white">{run.bestScore.toFixed(3)}</p>
                      <p className="mt-1 text-xs text-white/46">
                        {run.approved === null ? "sans verdict" : run.approved ? "promu" : "refuse"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
