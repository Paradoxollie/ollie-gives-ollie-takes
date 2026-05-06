"use client";

import type { AdventureRunState } from "@/core/types";

interface AdventureRouteChoiceRackProps {
  run: AdventureRunState;
  deckSize: number;
  spectatorMode: boolean;
  onSelectNode: (nodeId: string) => void;
}

export function AdventureRouteChoiceRack({
  run,
  deckSize: _deckSize,
  spectatorMode: _spectatorMode,
  onSelectNode: _onSelectNode,
}: AdventureRouteChoiceRackProps) {
  if (run.phase !== "map" || run.availableNodeIds.length === 0 || run.outcome !== "in-progress") {
    return null;
  }

  const nextFloor = Math.min(...run.availableNodeIds.map(() => run.history.length + 1));

  return (
    <div className="pointer-events-none absolute inset-x-3 top-3 z-20 flex justify-center sm:inset-x-5 sm:top-5">
      <div className="ogot-book-page w-full max-w-[20rem] rounded-[1.25rem] px-5 py-2.5 text-center shadow-[0_16px_34px_rgba(4,16,22,0.32)]">
        <p className="text-[0.48rem] uppercase tracking-[0.3em] text-[rgba(125,247,255,0.5)]">Etape {nextFloor}</p>
        <h2 className="mt-1 font-serif text-[1.15rem] leading-none text-[#e0f7fa] sm:text-[1.8rem]">Choisis ta voie</h2>
      </div>
    </div>
  );
}
