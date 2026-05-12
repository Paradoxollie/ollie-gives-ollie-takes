"use client";

import { useMemo } from "react";

import {
  getCardArchetype,
  getCardFamilyDefinition,
  listAdventureFamilyStarterDecks,
} from "@/core";
import type { CardFamily } from "@/core/types";

interface AdventureFamilyOverlayProps {
  selectedFamily: CardFamily | null;
  spectatorMode: boolean;
  onChooseFamily: (family: CardFamily) => void;
}

function roleLabel(role: string): string {
  switch (role) {
    case "anchor":
      return "Ancre";
    case "attacker":
      return "Attaque";
    case "connector":
      return "Setup";
    case "payoff":
      return "Payoff";
    default:
      return role;
  }
}

export function AdventureFamilyOverlay({
  selectedFamily,
  spectatorMode,
  onChooseFamily,
}: AdventureFamilyOverlayProps) {
  const decks = useMemo(() => listAdventureFamilyStarterDecks(), []);

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden px-2 py-3 text-white sm:px-3 sm:py-5">
      <div className="ogot-vignette -z-10" />

      <div className="mx-auto flex h-full min-h-0 w-full max-w-[96rem] flex-col">
        <div className="ogot-ornate-panel flex h-full min-h-0 flex-col rounded-[2.4rem] px-4 py-5 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="ogot-title-banner px-6 py-4 sm:px-10">
              <div>
                <p className="text-[0.52rem] uppercase tracking-[0.34em] text-[#ffe5bc]/76">Debut de run</p>
                <h2 className="mt-1 font-serif text-[1.7rem] leading-none sm:text-[3rem]">Choisis une famille</h2>
              </div>
            </div>

            <div className="ogot-sheet-note max-w-[31rem] rounded-[1.2rem] px-4 py-3 text-sm leading-7 text-[#f8efdd]">
              Chaque famille commence avec 10 cartes: 4 cartes uniques et des copies. Ton premier objectif de deck est deja la.
            </div>
          </div>

          <div className="ogot-scroll mt-5 grid min-h-0 flex-1 gap-4 overflow-y-auto pr-1 md:grid-cols-2 xl:grid-cols-3">
            {decks.map((deck) => {
              const definition = getCardFamilyDefinition(deck.family);
              const selected = selectedFamily === deck.family;
              return (
                <section
                  key={deck.family}
                  className={[
                    "ogot-choice-card rounded-[1.8rem] border p-4 transition",
                    selected ? "border-[#ffd08a]/55 bg-[rgba(83,52,31,0.72)]" : "border-white/10 bg-black/18",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.5rem] uppercase tracking-[0.24em] text-white/42">{definition.shortLabel}</p>
                      <h3 className="mt-1 font-serif text-[1.8rem] leading-none">{deck.label}</h3>
                    </div>
                    <button
                      type="button"
                      data-testid={`adventure-family-${deck.family}`}
                      disabled={spectatorMode}
                      onClick={() => onChooseFamily(deck.family)}
                      className="rounded-full border border-amber-100/24 bg-amber-200/12 px-3 py-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#ffe0a6] transition hover:bg-amber-200/20 disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      Choisir
                    </button>
                  </div>

                  <p className="mt-3 text-[0.78rem] leading-5 text-white/72">{deck.objective}</p>
                  <p className="mt-2 hidden text-[0.68rem] leading-5 text-amber-100/58 2xl:block">{deck.weakness}</p>

                  <div className="mt-3 grid grid-cols-4 gap-1.5">
                    {deck.cards.map((entry) => {
                      const card = getCardArchetype(entry.cardId);
                      return (
                        <div
                          key={entry.cardId}
                          className="min-w-0 rounded-[0.75rem] border border-white/8 bg-black/20 px-1.5 py-1"
                        >
                          <div className="flex min-w-0 items-center gap-1">
                            <span className="shrink-0 rounded-full border border-amber-100/18 bg-amber-200/10 px-1.5 py-0.5 text-center text-[0.55rem] font-black text-[#ffe0a6]">
                              x{entry.copies}
                            </span>
                            <span className="truncate text-[0.58rem] font-semibold text-white/82">{card.name}</span>
                          </div>
                          <p className="mt-0.5 truncate text-[0.44rem] uppercase tracking-[0.08em] text-white/38">
                            {roleLabel(entry.role)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
