"use client";

import { OllieAvatar } from "@/components/ollie-avatar";
import type { ControlTotals, MatchState, PlayerId, PreviewMove } from "@/core/types";

interface ChampionPanelProps {
  owner: PlayerId;
  match: MatchState;
  control: ControlTotals;
  preview?: PreviewMove | null;
  compact?: boolean;
}

const OWNER_STYLES = {
  player: {
    panel:
      "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(4,22,28,0.94),rgba(2,14,18,0.88))] text-cyan-50 shadow-[0_20px_72px_rgba(79,195,247,0.16)]",
    bar: "from-cyan-300 via-teal-200 to-emerald-100",
    glow: "bg-cyan-200/20 text-cyan-50",
  },
  enemy: {
    panel:
      "border-rose-400/18 bg-[linear-gradient(180deg,rgba(30,8,18,0.94),rgba(18,6,14,0.88))] text-rose-50 shadow-[0_20px_72px_rgba(220,50,80,0.16)]",
    bar: "from-rose-400 via-pink-200 to-red-100",
    glow: "bg-rose-200/20 text-rose-50",
  },
} as const;

function championName(owner: PlayerId): string {
  return owner === "player" ? "Ollie" : "Rival";
}

function championRole(owner: PlayerId): string {
  return owner === "player" ? "Gardien-lanterne" : "Reflet d'epines";
}

function statusLabel(match: MatchState, owner: PlayerId): string {
  if (match.result) {
    if (match.result.winner === "draw") {
      return "Egalite";
    }

    return match.result.winner === owner ? "Victoire" : "Defaite";
  }

  return match.turn.activePlayer === owner ? "Joue" : "Attend";
}

export function ChampionPanel({ owner, match, control, preview = null, compact = false }: ChampionPanelProps) {
  const champion = match.champions[owner];
  const styles = OWNER_STYLES[owner];
  const isActiveTurn = !match.result && match.turn.activePlayer === owner;
  const currentHealth = Math.max(0, champion.health);
  const healthPercent = champion.maxHealth === 0 ? 0 : Math.max(0, (currentHealth / champion.maxHealth) * 100);
  const projectedControl = preview ? preview.control[owner] : control[owner];
  const stats = compact
    ? [
        { label: "Ctrl", value: String(control[owner]) },
        { label: "Preview", value: String(projectedControl) },
      ]
    : [
        { label: "Ctrl", value: String(control[owner]) },
        { label: "Pioche", value: String(match.players[owner].drawPile.length) },
        { label: "Defausse", value: String(match.players[owner].discardPile.length) },
        { label: "Melanges", value: String(match.players[owner].reshuffles) },
      ];

  if (compact) {
    return (
      <section className={["relative overflow-hidden rounded-[1.25rem] border px-2.5 py-1.5 backdrop-blur-xl sm:rounded-[1.75rem] sm:px-3 sm:py-2.5", styles.panel, isActiveTurn ? "ogot-panel-alive" : ""].join(" ")}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0)_46%)]" />

        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              {owner === "player" && (
                <div className="hidden sm:block">
                  <OllieAvatar size="md" className="h-10 w-10 border-cyan-300/28 shadow-[0_0_30px_rgba(79,195,247,0.28)]" />
                </div>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={["rounded-full px-1.5 py-0.5 text-[0.4rem] font-semibold uppercase tracking-[0.16em] sm:px-2 sm:py-1 sm:text-[0.46rem]", styles.glow].join(" ")}>
                    {statusLabel(match, owner)}
                  </span>
                </div>
                <h2 className="mt-0.5 text-[1.1rem] leading-none text-white sm:mt-1 sm:text-[1.45rem]">{championName(owner)}</h2>
                <p className="hidden text-[0.48rem] uppercase tracking-[0.18em] text-[rgba(125,247,255,0.4)] sm:block sm:mt-1 sm:text-[0.5rem]">{championRole(owner)}</p>
              </div>
            </div>

            <div className="min-w-[4.5rem] text-right sm:min-w-[6.2rem]">
              <p className="text-[0.42rem] uppercase tracking-[0.24em] text-white/50 sm:text-[0.48rem]">Vie</p>
              <p className="mt-0.5 text-[1.2rem] font-semibold leading-none text-white sm:mt-1 sm:text-[1.45rem]">
                {currentHealth}
                <span className="ml-1 text-[0.55rem] font-medium text-[rgba(125,247,255,0.4)] sm:text-[0.66rem]">/ {champion.maxHealth}</span>
              </p>
            </div>
          </div>

          <div className="mt-1.5 overflow-hidden rounded-full border border-white/10 bg-black/18 p-0.5 sm:mt-2 sm:p-1">
            <div className={["h-1.5 rounded-full bg-gradient-to-r transition-[width] duration-300 sm:h-2.5", styles.bar].join(" ")} style={{ width: `${healthPercent}%` }} />
          </div>

          <div className="mt-2 hidden grid-cols-2 gap-1.5 sm:mt-2.5 sm:grid">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1rem] border border-[rgba(79,195,247,0.1)] bg-[rgba(79,195,247,0.04)] px-2 py-1.5 text-center sm:py-2">
                <p className="text-[0.44rem] uppercase tracking-[0.16em] text-[rgba(125,247,255,0.4)]">{stat.label}</p>
                <p className="mt-0.5 text-[0.96rem] font-semibold text-white sm:mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={["relative overflow-hidden rounded-[1.95rem] border px-4 py-2.5 backdrop-blur-xl", styles.panel, isActiveTurn ? "ogot-panel-alive" : ""].join(" ")}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0)_46%)]" />

      <div className="relative grid gap-3 xl:grid-cols-[minmax(0,1fr)_11rem_14rem]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.5rem] uppercase tracking-[0.32em] text-white/50">Champion</p>
            <span className={["rounded-full px-2 py-1 text-[0.48rem] font-semibold uppercase tracking-[0.16em]", styles.glow].join(" ")}>
              {statusLabel(match, owner)}
            </span>
          </div>

          <h2 className="mt-1 text-[2.05rem] leading-none text-white">{championName(owner)}</h2>
          <p className="mt-1 text-[0.54rem] uppercase tracking-[0.18em] text-[rgba(125,247,255,0.4)]">{championRole(owner)}</p>
        </div>

        <div>
          <p className="text-[0.5rem] uppercase tracking-[0.24em] text-white/50">Vie</p>
          <p className="mt-1 text-[2rem] font-semibold leading-none text-white">
            {currentHealth}
            <span className="ml-1 text-[0.7rem] font-medium text-[rgba(125,247,255,0.4)]">/ {champion.maxHealth}</span>
          </p>
          <div className="mt-2 overflow-hidden rounded-full border border-white/10 bg-black/18 p-1">
            <div className={["h-2.5 rounded-full bg-gradient-to-r transition-[width] duration-300", styles.bar].join(" ")} style={{ width: `${healthPercent}%` }} />
          </div>
        </div>

        <div className={compact ? "grid grid-cols-2 gap-1.5" : "grid grid-cols-4 gap-1.5"}>
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1rem] border border-[rgba(79,195,247,0.1)] bg-[rgba(79,195,247,0.04)] px-2 py-2 text-center">
              <p className="text-[0.44rem] uppercase tracking-[0.16em] text-[rgba(125,247,255,0.4)]">{stat.label}</p>
              <p className="mt-1 text-[0.96rem] font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
