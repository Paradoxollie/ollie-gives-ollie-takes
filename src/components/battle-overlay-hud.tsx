"use client";

import { CharmBuffBar } from "@/components/charm-buff-bar";
import type { CardInstance, MatchState, PreviewMove } from "@/core/types";

interface BattleOverlayHudProps {
  match: MatchState;
  preview: PreviewMove | null;
  selectedCard: CardInstance | null;
  onFireflyReroll?: () => void;
  onReflectionCopy?: (cardInstanceId: string) => void;
}

export function BattleOverlayHud({
  match,
  preview: _preview,
  selectedCard,
  onFireflyReroll,
  onReflectionCopy,
}: BattleOverlayHudProps) {
  const fireflyAction =
    match.playerCharms.includes("firefly-wing") &&
    !match.result &&
    match.turn.activePlayer === "player" &&
    match.turn.choices.length > 0 &&
    !match.playerCharmState.fireflyRerollUsedThisRound;

  const reflectionAction =
    match.playerCharms.includes("reflection-ring") &&
    !match.result &&
    match.turn.activePlayer === "player" &&
    match.turn.choices.length > 0 &&
    !match.playerCharmState.reflectionCopyUsedThisCombat &&
    Boolean(selectedCard);

  if (match.playerCharms.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-auto relative overflow-visible">
      <CharmBuffBar
        charmIds={match.playerCharms}
        title="Buffs"
        className="max-w-[min(92vw,24rem)] rounded-[1.2rem] px-2 py-2"
        actions={{
          "firefly-wing": {
            onClick: onFireflyReroll,
            disabled: !fireflyAction,
            statusLabel: fireflyAction ? "Pret" : "Utilise",
          },
          "reflection-ring": {
            onClick: selectedCard ? () => onReflectionCopy?.(selectedCard.instanceId) : undefined,
            disabled: !reflectionAction,
            statusLabel: reflectionAction ? "Pret" : "Lie",
          },
        }}
      />
    </div>
  );
}
