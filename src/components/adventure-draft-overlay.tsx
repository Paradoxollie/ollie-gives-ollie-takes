"use client";

import { useMemo } from "react";

import { CardView } from "@/components/card-view";
import {
  CARD_FAMILIES,
  CARD_FAMILY_DEFINITIONS,
  getCardArchetype,
} from "@/core";
import type { AdventureRunState, CardArchetype, CardFamily, CardInstance } from "@/core/types";

interface AdventureDraftOverlayProps {
  draft: NonNullable<AdventureRunState["draft"]>;
  spectatorMode: boolean;
  onToggleCard: (cardId: string) => void;
  onConfirm: () => void;
}

const FAMILY_TONE_CLASS: Record<CardFamily, string> = {
  familiar: "border-emerald-200/28 bg-emerald-200/10 text-emerald-50",
  demon: "border-rose-300/32 bg-rose-500/12 text-rose-50",
  human: "border-sky-200/30 bg-sky-300/10 text-sky-50",
  automaton: "border-zinc-200/28 bg-zinc-200/10 text-zinc-50",
  revenant: "border-violet-200/30 bg-violet-300/10 text-violet-50",
  arcane: "border-cyan-200/30 bg-cyan-300/10 text-cyan-50",
  dragon: "border-amber-200/34 bg-amber-300/12 text-amber-50",
  renegade: "border-fuchsia-200/30 bg-fuchsia-300/10 text-fuchsia-50",
};

function draftPreviewCard(card: CardArchetype): CardInstance {
  return {
    instanceId: `draft-${card.id}`,
    archetypeId: card.id,
    owner: "player",
    name: card.name,
    sides: card.sides,
    family: card.family,
    accent: card.accent,
    artSrc: card.artSrc,
    rarity: card.rarity,
    sourceType: card.sourceType,
    baseArchetypeId: card.baseArchetypeId,
    temporaryScope: card.temporaryScope ?? null,
    createdByCharmId: card.createdByCharmId ?? null,
    corruptedBy: null,
  };
}

function createFamilyCounts(cardIds: string[]): Record<CardFamily, number> {
  return cardIds.reduce(
    (counts, cardId) => {
      const family = getCardArchetype(cardId).family;
      counts[family] += 1;
      return counts;
    },
    Object.fromEntries(CARD_FAMILIES.map((family) => [family, 0])) as Record<CardFamily, number>,
  );
}

export function AdventureDraftOverlay({
  draft,
  spectatorMode,
  onToggleCard,
  onConfirm,
}: AdventureDraftOverlayProps) {
  const offerCards = useMemo(() => draft.offerCardIds.map((cardId) => getCardArchetype(cardId)), [draft.offerCardIds]);
  const selectedSet = useMemo(() => new Set(draft.selectedCardIds), [draft.selectedCardIds]);
  const selectedCounts = useMemo(() => createFamilyCounts(draft.selectedCardIds), [draft.selectedCardIds]);
  const offerCounts = useMemo(() => createFamilyCounts(draft.offerCardIds), [draft.offerCardIds]);
  const selectedCount = draft.selectedCardIds.length;
  const canConfirm = selectedCount === draft.pickCount && !spectatorMode;
  const visibleFamilies = CARD_FAMILIES.filter((family) => offerCounts[family] > 0 || selectedCounts[family] > 0);

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 p-2 text-white sm:p-4">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
        <div className="ogot-title-banner px-5 py-3 sm:px-8">
          <div>
            <p className="text-[0.52rem] uppercase tracking-[0.28em] text-[#ffe5bc]/74">Draft initial</p>
            <h2 className="mt-1 font-serif text-[1.45rem] leading-none sm:text-[2.25rem]">Choisis 7 cartes</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-[1rem] border border-white/12 bg-black/24 px-4 py-2 text-right">
            <p className="text-[0.5rem] uppercase tracking-[0.18em] text-white/44">Deck</p>
            <p className="mt-0.5 text-lg font-semibold text-white">{selectedCount}/{draft.pickCount}</p>
          </div>
          <button
            type="button"
            onClick={onConfirm}
            disabled={!canConfirm}
            data-testid="adventure-draft-confirm"
            className="ogot-red-button rounded-[1rem] px-5 py-3 text-[0.72rem] disabled:cursor-not-allowed disabled:opacity-45"
          >
            Valider le deck
          </button>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_23rem]">
        <section className="min-h-0 overflow-y-auto rounded-[1.6rem] border border-white/10 bg-black/18 p-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {offerCards.map((card) => {
              const selected = selectedSet.has(card.id);
              const selectionIndex = draft.selectedCardIds.indexOf(card.id);
              const maxReached = selectedCount >= draft.pickCount && !selected;

              return (
                <button
                  key={card.id}
                  type="button"
                  disabled={spectatorMode || maxReached}
                  onClick={() => onToggleCard(card.id)}
                  data-testid={`adventure-draft-card-${card.id}`}
                  className={[
                    "relative rounded-[1.35rem] border p-2 text-left transition",
                    selected
                      ? "border-amber-200/72 bg-amber-200/10 shadow-[0_0_34px_rgba(251,191,36,0.2)]"
                      : "border-white/10 bg-black/18 hover:border-cyan-200/34 hover:bg-white/8",
                    maxReached ? "opacity-45" : "",
                    spectatorMode ? "cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {selected ? (
                    <span className="absolute left-3 top-3 z-30 grid h-7 w-7 place-items-center rounded-full border border-amber-100/70 bg-amber-300 text-sm font-black text-slate-950 shadow-[0_10px_18px_rgba(0,0,0,0.28)]">
                      {selectionIndex + 1}
                    </span>
                  ) : null}
                  <div className="mx-auto aspect-[234/333] w-full max-w-[8.4rem]">
                    <CardView card={draftPreviewCard(card)} layout="hand" className="h-full w-full" selected={selected} />
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <span className={["rounded-full border px-2 py-1 text-[0.54rem] font-semibold uppercase tracking-[0.16em]", FAMILY_TONE_CLASS[card.family]].join(" ")}>
                      {CARD_FAMILY_DEFINITIONS[card.family].shortLabel}
                    </span>
                    <span className="text-[0.58rem] uppercase tracking-[0.16em] text-white/48">
                      {card.sides.top + card.sides.right + card.sides.bottom + card.sides.left}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <aside className="min-h-0 overflow-y-auto rounded-[1.6rem] border border-white/10 bg-black/24 p-4">
          <p className="text-[0.52rem] uppercase tracking-[0.28em] text-cyan-100/50">Familles et bonus</p>
          <div className="mt-3 grid gap-3">
            {visibleFamilies.map((family) => {
              const definition = CARD_FAMILY_DEFINITIONS[family];
              const count = selectedCounts[family];

              return (
                <section key={family} className={["rounded-[1.15rem] border p-3", FAMILY_TONE_CLASS[family]].join(" ")}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-serif text-[1.05rem] leading-none">{definition.label}</p>
                      <p className="mt-1 text-[0.68rem] leading-5 text-white/62">{definition.identity}</p>
                    </div>
                    <span className="grid h-8 min-w-8 place-items-center rounded-full border border-white/20 bg-black/22 px-2 text-sm font-bold">
                      {count}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-1.5">
                    {definition.thresholds.map((threshold) => {
                      const active = count >= threshold.count;
                      return (
                        <div
                          key={`${family}-${threshold.count}`}
                          className={[
                            "rounded-[0.85rem] border px-3 py-2",
                            active ? "border-amber-100/52 bg-amber-200/12 text-amber-50" : "border-white/10 bg-black/16 text-white/54",
                          ].join(" ")}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em]">
                              {threshold.count} - {threshold.label}
                            </span>
                            <span className="text-[0.56rem] uppercase tracking-[0.14em]">{active ? "Actif" : "Inactif"}</span>
                          </div>
                          <p className="mt-1 text-[0.66rem] leading-5">{threshold.effect}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
