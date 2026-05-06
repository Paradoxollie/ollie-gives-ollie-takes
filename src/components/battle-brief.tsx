"use client";

import { getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import type { CardInstance, MatchState, PreviewMove } from "@/core/types";

interface BattleBriefProps {
  match: MatchState;
  preview: PreviewMove | null;
  selectedCard: CardInstance | null;
  onFireflyReroll?: () => void;
  onReflectionCopy?: (cardInstanceId: string) => void;
}

function previewText(preview: PreviewMove | null): string {
  if (!preview) {
    return "Survole une case vide pour afficher les flips attendus.";
  }

  if (!preview.roundEnds || !preview.roundEndSummary) {
    return `${preview.flippedCount} flip immediat, controle projete ${preview.control.player}/${preview.control.enemy}.`;
  }

  return `Fin de round ${preview.roundEndSummary.control.player}/${preview.roundEndSummary.control.enemy}, degats -${preview.roundEndSummary.damageApplied.player}/-${preview.roundEndSummary.damageApplied.enemy}.`;
}

function lastActionText(match: MatchState): string {
  if (!match.lastMove) {
    return "Aucune action resolue pour le moment.";
  }

  const side = match.lastMove.playerId === "player" ? "Ollie" : "Rival";
  const flips = match.lastMove.impacts.filter((impact) => impact.result === "flipped").length;

  if (match.lastMove.roundEndSummary) {
    const round = match.lastMove.roundEndSummary;
    return `${side} a termine le round. Controle ${round.control.player}/${round.control.enemy}, degats -${round.damageApplied.player}/-${round.damageApplied.enemy}.`;
  }

  return `${side} a joue en ${match.lastMove.position.row},${match.lastMove.position.col} et a retourne ${flips} carte${flips > 1 ? "s" : ""}.`;
}

export function BattleBrief({ match, preview, selectedCard, onFireflyReroll, onReflectionCopy }: BattleBriefProps) {
  const charmDefinitions = match.playerCharms.map((charmId) => getLuckyCharmDefinition(charmId));
  const fireflyAction = match.playerCharms.includes("firefly-wing")
    ? !match.result && match.turn.activePlayer === "player" && match.turn.choices.length > 0 && !match.playerCharmState.fireflyRerollUsedThisRound
    : false;
  const reflectionAction = match.playerCharms.includes("reflection-ring")
    ? !match.result &&
      match.turn.activePlayer === "player" &&
      match.turn.choices.length > 0 &&
      !match.playerCharmState.reflectionCopyUsedThisCombat &&
      Boolean(selectedCard)
    : false;

  return (
    <aside className="flex h-full min-h-0 flex-col gap-2.5 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,25,0.95),rgba(5,11,20,0.92))] p-2.5 text-white shadow-[0_24px_84px_rgba(5,12,24,0.42)] backdrop-blur-xl">
      <section className="rounded-[1.4rem] border border-cyan-100/10 bg-[linear-gradient(180deg,rgba(10,21,34,0.9),rgba(8,16,27,0.72))] p-3">
        <p className="text-[0.48rem] uppercase tracking-[0.32em] text-cyan-100/48">Ollie Gives, Ollie Takes</p>
        <h1 className="mt-1.5 text-[1.65rem] leading-none text-white">Duel tactique</h1>
        <p className="mt-2 text-[0.74rem] leading-5 text-white/64">
          Retourne les cartes adjacentes plus faibles. Quand le plateau est plein, chaque carte controlee inflige 1 degat.
        </p>
      </section>

      <section className="grid gap-2">
        {match.enemyProfile ? (
          <div className="rounded-[1.2rem] border border-amber-200/14 bg-[linear-gradient(180deg,rgba(120,53,15,0.14),rgba(17,24,39,0.24))] p-3">
            <p className="text-[0.44rem] uppercase tracking-[0.24em] text-amber-100/70">Profil ennemi</p>
            <p className="mt-1.5 text-[1rem] font-semibold text-white">{match.enemyProfile.name}</p>
            <p className="mt-1 text-[0.7rem] leading-5 text-white/66">{match.enemyProfile.playstyle}</p>
            <p className="mt-2 text-[0.66rem] leading-5 text-amber-50/88">
              {match.enemyProfile.passivePowerName}: {match.enemyProfile.passivePowerDescription}
            </p>
            {match.enemyProfile.activePowerName ? (
              <p className="mt-1.5 text-[0.66rem] leading-5 text-white/72">
                {match.enemyProfile.activePowerName}: {match.enemyProfile.activePowerDescription}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[0.44rem] uppercase tracking-[0.24em] text-white/42">Carte choisie</p>
          <p className="mt-1.5 text-[1rem] font-semibold text-white">{selectedCard ? "Selection active" : "Aucune"}</p>
          <p className="mt-1 text-[0.72rem] leading-5 text-white/60">
            {selectedCard ? "Survole le plateau pour voir les flips attendus." : "Clique une carte de ta main."}
          </p>
        </div>

        {charmDefinitions.length > 0 ? (
          <div className="rounded-[1.2rem] border border-emerald-200/14 bg-[linear-gradient(180deg,rgba(6,78,59,0.18),rgba(17,24,39,0.2))] p-3">
            <p className="text-[0.44rem] uppercase tracking-[0.24em] text-emerald-100/72">Porte-bonheur</p>
            <div className="mt-2 flex flex-col gap-2">
              {charmDefinitions.map((charm) => (
                <div key={charm.id} className="rounded-[0.95rem] border border-white/10 bg-black/14 px-2.5 py-2">
                  <p className="text-[0.7rem] font-semibold text-white">{charm.shortLabel}</p>
                  <p className="mt-1 text-[0.62rem] leading-5 text-white/62">{charm.description}</p>
                </div>
              ))}
            </div>
            {(match.playerCharms.includes("firefly-wing") || match.playerCharms.includes("reflection-ring")) ? (
              <div className="mt-3 grid gap-2">
                {match.playerCharms.includes("firefly-wing") ? (
                  <button
                    type="button"
                    onClick={onFireflyReroll}
                    disabled={!fireflyAction}
                    className="rounded-[0.95rem] border border-emerald-200/22 bg-emerald-200/10 px-3 py-2 text-left text-[0.68rem] font-semibold text-emerald-50 transition hover:bg-emerald-200/16 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Reroll de manche
                  </button>
                ) : null}
                {match.playerCharms.includes("reflection-ring") ? (
                  <button
                    type="button"
                    onClick={() => (selectedCard ? onReflectionCopy?.(selectedCard.instanceId) : undefined)}
                    disabled={!reflectionAction}
                    className="rounded-[0.95rem] border border-cyan-200/22 bg-cyan-200/10 px-3 py-2 text-left text-[0.68rem] font-semibold text-cyan-50 transition hover:bg-cyan-200/16 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Copier la carte choisie
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="rounded-[1.2rem] border border-violet-200/12 bg-[linear-gradient(180deg,rgba(76,29,149,0.12),rgba(17,24,39,0.2))] p-3">
          <p className="text-[0.44rem] uppercase tracking-[0.24em] text-violet-100/68">Preview</p>
          <p className="mt-1.5 text-[0.72rem] leading-5 text-violet-50/90">{previewText(preview)}</p>
        </div>

        {match.playerCharms.includes("clearing-eye") && match.round.number <= 3 ? (
          <div className="rounded-[1.2rem] border border-cyan-200/14 bg-[linear-gradient(180deg,rgba(8,47,73,0.18),rgba(17,24,39,0.2))] p-3">
            <p className="text-[0.44rem] uppercase tracking-[0.24em] text-cyan-100/72">Vision</p>
            <p className="mt-1.5 text-[0.72rem] leading-5 text-white/74">
              {match.players.player.drawPile.slice(0, 2).length > 0
                ? match.players.player.drawPile
                    .slice(0, 2)
                    .map((card) => Object.values(card.sides).join("/"))
                    .join(" puis ")
                : "Plus aucune carte visible a l'avance."}
            </p>
          </div>
        ) : null}
      </section>

      <section className="min-h-0 flex-1 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-3">
        <p className="text-[0.44rem] uppercase tracking-[0.24em] text-white/42">Dernier evenement</p>
        <p className="mt-2 text-[0.72rem] leading-6 text-white/72">{lastActionText(match)}</p>
      </section>
    </aside>
  );
}
