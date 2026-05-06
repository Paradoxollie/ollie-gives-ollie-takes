"use client";

import type { BattleResult, ControlTotals, MatchState, PlayerId, PreviewMove } from "@/core/types";

interface GamePanelProps {
  match: MatchState;
  seed: number;
  preview: PreviewMove | null;
  control: ControlTotals;
  onSeedChange: (value: number) => void;
  onRestart: () => void;
}

function playerLabel(playerId: PlayerId): string {
  return playerId === "player" ? "Ollie" : "Rival";
}

function resultLabel(result: BattleResult | null): string {
  if (!result) {
    return "Combat en cours";
  }

  if (result.winner === "draw") {
    return result.reason === "double-ko" ? "Double KO" : "Egalite";
  }

  return `${playerLabel(result.winner)} gagne`;
}

export function GamePanel({ match, seed, preview, control, onSeedChange, onRestart }: GamePanelProps) {
  return (
    <aside className="flex h-full min-h-0 flex-col gap-2 overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,14,25,0.95),rgba(5,11,20,0.92))] p-2 text-white shadow-[0_24px_84px_rgba(5,12,24,0.42)] backdrop-blur-xl">
      <section className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-2.5">
        <p className="text-[0.5rem] uppercase tracking-[0.28em] text-cyan-100/52">Commandes</p>
        <div className="mt-2.5 grid gap-2">
          <div className="rounded-[1rem] border border-white/10 bg-black/16 px-3 py-1.5 text-sm text-white/80">
            <p className="text-[0.42rem] uppercase tracking-[0.22em] text-white/42">Deck</p>
            <p className="mt-1 font-medium text-white">Pool de draft</p>
          </div>
          <label className="space-y-1 text-sm text-white/75">
            <span className="block text-[0.74rem] font-medium uppercase tracking-[0.12em] text-white/66">Seed</span>
            <input
              type="number"
              value={seed}
              onChange={(event) => onSeedChange(Number(event.target.value))}
              className="w-full rounded-[1rem] border border-white/10 bg-white/7 px-3 py-1.5 text-sm text-white shadow-inner shadow-black/20 outline-none transition focus:border-cyan-200/60"
            />
          </label>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-[1rem] bg-[linear-gradient(90deg,rgba(45,212,191,0.92),rgba(34,211,238,0.92))] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-105"
            data-testid="restart-match"
          >
            Relancer
          </button>
          <div className="rounded-[0.95rem] border border-white/10 bg-black/14 px-3 py-2">
            <p className="text-[0.42rem] uppercase tracking-[0.18em] text-white/42">Etat</p>
            <p className="mt-1 text-[0.74rem] leading-5 text-white/72">{resultLabel(match.result)}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-2 rounded-[1.2rem] border border-white/10 bg-white/5 p-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-[1rem] border border-white/10 bg-black/14 p-2.5">
            <p className="text-[0.42rem] uppercase tracking-[0.22em] text-white/42">Round</p>
            <p className="mt-1 text-[1.48rem] font-semibold text-white">{match.round.number}</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-white/52">Tour {match.turn.index}</p>
          </div>
          <div className="rounded-[1rem] border border-white/10 bg-black/14 p-2.5">
            <p className="text-[0.42rem] uppercase tracking-[0.22em] text-white/42">Actif</p>
            <p className="mt-1 text-[1.22rem] font-semibold text-white">
              {match.result ? "Fin" : match.turn.activePlayer === "player" ? "Ollie" : "Rival"}
            </p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-white/52">Sous-tour {match.turn.roundTurn}</p>
          </div>
        </div>
        <div className="rounded-[1rem] border border-white/10 bg-black/14 p-2.5">
          <p className="text-[0.42rem] uppercase tracking-[0.22em] text-white/42">Premier</p>
          <p className="mt-1 text-[1rem] font-semibold text-white">{playerLabel(match.round.startingPlayer)}</p>
          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-white/52">
            Face {match.round.coinFace === "sun" ? "Soleil" : "Lune"}
          </p>
        </div>
      </section>
    </aside>
  );
}
