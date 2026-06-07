"use client";

import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";

import { CardMotionShell, type CardMotionKind } from "@/components/card-motion-shell";
import { CardView } from "@/components/card-view";
import { CharmBuffBar } from "@/components/charm-buff-bar";
import { GameSigilIcon } from "@/components/game-sigil-icon";
import { OllieAvatar } from "@/components/ollie-avatar";
import { CARD_FAMILY_DEFINITIONS, countBoardFamilies, countCardFamilies } from "@/core";
import { getFamilyCrestArtSrc } from "@/core/config/cardArt";
import type {
  BoardCard,
  CardFamily,
  CardInstance,
  CombatImpact,
  ControlTotals,
  Direction,
  LastMoveSummary,
  MatchState,
  PlayerId,
  Position,
  PreviewMove,
} from "@/core/types";

interface BattleStageProps {
  match: MatchState;
  hand: CardInstance[];
  selectedCardId: string | null;
  selectedCardIds: string[];
  selectedCard: CardInstance | null;
  selectedManaCost: number;
  availableMana: number;
  targetPosition: Position | null;
  canConfirmPlacement: boolean;
  hoveredPosition: Position | null;
  hoverPreview: PreviewMove | null;
  canHumanInteract: boolean;
  control: ControlTotals;
  sidePanel: ReactNode;
  labMode?: boolean;
  embedded?: boolean;
  debugState?: string;
  onCellHover: (position: Position | null) => void;
  onCellClick: (position: Position) => void;
  onConfirmPlacement: () => void;
  onSelectCard: (cardInstanceId: string) => void;
  onFireflyReroll?: () => void;
  onReflectionCopy?: (cardInstanceId: string) => void;
}

const ACTIVE_FAMILIES = ["familiar", "demon", "human", "automaton", "revenant", "arcane"] satisfies CardFamily[];

const OWNER_LABEL: Record<PlayerId, string> = {
  player: "Ollie",
  enemy: "Rival",
};

const OWNER_TONE: Record<PlayerId, string> = {
  player: "player",
  enemy: "enemy",
};

function keyFor(position: Position): string {
  return `${position.row}-${position.col}`;
}

function samePosition(left: Position | null | undefined, right: Position | null | undefined): boolean {
  return Boolean(left && right && left.row === right.row && left.col === right.col);
}

function buildImpactMap(impacts: CombatImpact[]): Map<string, CombatImpact> {
  return new Map(impacts.map((impact) => [keyFor(impact.position), impact]));
}

function getImpactLabel(impact: CombatImpact): string {
  return impact.result === "flipped" ? "Capture" : "Tient";
}

function getImpactValueLabel(impact: CombatImpact): string {
  return impact.result === "flipped"
    ? `${impact.attackerValue} > ${impact.defenderValue}`
    : `${impact.attackerValue} <= ${impact.defenderValue}`;
}

function createLastMoveSignature(lastMove: LastMoveSummary | null): string | null {
  if (!lastMove) {
    return null;
  }

  const impacts = lastMove.impacts
    .map((impact) =>
      [
        impact.position.row,
        impact.position.col,
        impact.targetCardInstanceId,
        impact.result,
        impact.targetOwnerBeforeImpact,
        impact.targetOwnerAfterImpact,
      ].join(":"),
    )
    .join("|");

  return [
    lastMove.playerId,
    lastMove.cardInstanceId,
    lastMove.position.row,
    lastMove.position.col,
    lastMove.roundNumberAfterMove,
    lastMove.roundEnded ? "round-end" : "open",
    impacts,
  ].join("::");
}

function getCardMotion(
  cell: BoardCard,
  lastMove: LastMoveSummary | null,
  lastMoveSignature: string | null,
): {
  motionKind: CardMotionKind;
  motionKey: string | null;
  motionDirection: Direction | null;
  motionDelayMs: number;
} {
  if (!lastMove || !lastMoveSignature) {
    return {
      motionKind: "idle",
      motionKey: null,
      motionDirection: null,
      motionDelayMs: 0,
    };
  }

  if (cell.instanceId === lastMove.cardInstanceId) {
    return {
      motionKind: "placed",
      motionKey: `placed:${lastMoveSignature}`,
      motionDirection: lastMove.playerId === "player" ? "bottom" : "top",
      motionDelayMs: 0,
    };
  }

  const impact = lastMove.impacts.find((entry) => entry.targetCardInstanceId === cell.instanceId);
  if (!impact || impact.result !== "flipped") {
    return {
      motionKind: "idle",
      motionKey: null,
      motionDirection: null,
      motionDelayMs: 0,
    };
  }

  return {
    motionKind: "flipped",
    motionKey: `flipped:${cell.instanceId}:${lastMoveSignature}`,
    motionDirection: impact.direction,
    motionDelayMs: lastMove.playerId === "enemy" ? 120 : 0,
  };
}

function getFlippedImpacts(lastMove: LastMoveSummary | null): CombatImpact[] {
  return lastMove ? lastMove.impacts.filter((impact) => impact.result === "flipped") : [];
}

function boardOccupancy(match: MatchState): number {
  return match.board.flat().filter(Boolean).length;
}

function getFamilyCountEntries(counts: Partial<Record<CardFamily, number>>) {
  return ACTIVE_FAMILIES.map((family) => ({
    family,
    count: counts[family] ?? 0,
    definition: CARD_FAMILY_DEFINITIONS[family],
  })).filter((entry) => entry.count > 0);
}

function getSelectedFamilyCounts(cards: CardInstance[]): Partial<Record<CardFamily, number>> {
  return cards.reduce<Partial<Record<CardFamily, number>>>((counts, card) => {
    counts[card.family] = (counts[card.family] ?? 0) + 1;
    return counts;
  }, {});
}

function getBestThresholdLabel(family: CardFamily, count: number): string | null {
  const definition = CARD_FAMILY_DEFINITIONS[family];
  const activeThreshold = [...definition.thresholds].reverse().find((threshold) => count >= threshold.count);
  return activeThreshold ? activeThreshold.label : null;
}

function getNextThresholdLabel(family: CardFamily, count: number): string {
  const definition = CARD_FAMILY_DEFINITIONS[family];
  const nextThreshold = definition.thresholds.find((threshold) => count < threshold.count);
  return nextThreshold ? `${nextThreshold.label} x${nextThreshold.count}` : "Bonus max";
}

function countActiveFamilyStacks(match: MatchState, owner: PlayerId): Partial<Record<CardFamily, number>> {
  const activeStacks: Partial<Record<CardFamily, number>> = {};

  for (const row of match.board) {
    for (const card of row) {
      if (!card || card.owner !== owner) {
        continue;
      }

      const counts = countCardFamilies(card);
      for (const family of ACTIVE_FAMILIES) {
        if ((counts[family] ?? 0) >= 2) {
          activeStacks[family] = (activeStacks[family] ?? 0) + 1;
        }
      }
    }
  }

  return activeStacks;
}

function getVisibleEnemyCards(match: MatchState): CardInstance[] {
  const cardsToShow = Math.max(match.config.cardsPerTurn, match.turn.activePlayer === "enemy" ? match.turn.choices.length : 0);

  if (match.turn.activePlayer === "enemy") {
    return match.turn.choices.slice(0, cardsToShow);
  }

  const drawPreview = match.players.enemy.drawPile.slice(0, cardsToShow);
  if (drawPreview.length >= cardsToShow) {
    return drawPreview;
  }

  return [...drawPreview, ...match.players.enemy.discardPile.slice(0, cardsToShow - drawPreview.length)];
}

function healthPercent(match: MatchState, owner: PlayerId): number {
  const champion = match.champions[owner];
  return champion.maxHealth <= 0 ? 0 : Math.max(0, Math.min(100, (champion.health / champion.maxHealth) * 100));
}

function activeTurnLabel(match: MatchState): string {
  if (match.result) {
    if (match.result.winner === "draw") {
      return "Egalite";
    }

    return `${OWNER_LABEL[match.result.winner]} gagne`;
  }

  return match.turn.activePlayer === "player" ? "A toi de jouer" : "Tour du rival";
}

function actionButtonLabel({
  selectedCount,
  hasTarget,
  canConfirm,
}: {
  selectedCount: number;
  hasTarget: boolean;
  canConfirm: boolean;
}): string {
  if (canConfirm) {
    return selectedCount > 1 ? "Fusionner et poser" : "Poser la carte";
  }

  if (selectedCount === 0) {
    return "Choisis une carte";
  }

  if (!hasTarget) {
    return "Choisis une case";
  }

  return "Placement impossible";
}

function ResourcePips({
  total,
  spent,
  available,
}: {
  total: number;
  spent: number;
  available: number;
}) {
  if (total > 10) {
    const percent = Math.max(0, Math.min(100, (spent / total) * 100));
    return (
      <div className="ogot-resource-meter" aria-label={`Energie ${available}/${total}`}>
        <div className="ogot-resource-meter__bar" style={{ width: `${percent}%` }} />
      </div>
    );
  }

  return (
    <div className="ogot-energy-pips" aria-label={`Energie ${available}/${total}`}>
      {Array.from({ length: total }, (_, index) => (
        <span
          key={`energy-${index}`}
          className={[
            "ogot-energy-pip",
            index < spent ? "ogot-energy-pip--spent" : "ogot-energy-pip--ready",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function ChampionPlate({
  owner,
  match,
  control,
}: {
  owner: PlayerId;
  match: MatchState;
  control: ControlTotals;
}) {
  const champion = match.champions[owner];
  const combat = match.combat[owner];
  const tone = OWNER_TONE[owner];
  const percent = healthPercent(match, owner);
  const active = !match.result && match.turn.activePlayer === owner;

  return (
    <section className={["ogot-champion-plate", `ogot-champion-plate--${tone}`, active ? "is-active" : ""].join(" ")}>
      <div className="ogot-champion-portrait" aria-hidden="true">
        {owner === "player" ? (
          <OllieAvatar size="lg" className="h-full w-full" />
        ) : (
          <div className="ogot-rival-mark">
            <GameSigilIcon id={match.enemyProfile?.id ?? "trickster"} className="h-9 w-9" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="ogot-champion-header flex items-center justify-between gap-2">
          <p className="truncate text-[0.78rem] font-black uppercase tracking-[0.12em] text-white">
            {OWNER_LABEL[owner]}
          </p>
          <span className="ogot-turn-chip">{active ? "Actif" : "Attente"}</span>
        </div>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="text-[1.55rem] font-black leading-none text-white">
            {Math.max(0, champion.health)}
            <span className="ml-1 text-[0.68rem] font-bold text-white/48">/{champion.maxHealth}</span>
          </p>
          <div className="ogot-champion-stats flex flex-wrap justify-end gap-1.5 text-[0.66rem] font-black uppercase tracking-[0.1em] text-white/70">
            <span>Ctrl {control[owner]}</span>
            <span>Bcl {combat.shield}</span>
            {combat.nextTurnManaBonus > 0 ? <span>En+{combat.nextTurnManaBonus}</span> : null}
            {combat.poison > 0 ? <span>Psn {combat.poison}</span> : null}
          </div>
        </div>
        <div className="ogot-health-track mt-2">
          <div className="ogot-health-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </section>
  );
}

function CombatTopStrip({
  match,
  control,
  preview,
}: {
  match: MatchState;
  control: ControlTotals;
  preview: PreviewMove | null;
}) {
  const occupied = boardOccupancy(match);
  const displayControl = preview ? preview.control : control;

  return (
    <section className="ogot-combat-strip">
      <div>
        <p className="text-[0.54rem] font-black uppercase tracking-[0.22em] text-amber-100/54">Round {match.round.number}</p>
        <p className="mt-1 text-sm font-black text-white">{activeTurnLabel(match)}</p>
      </div>
      <div className="ogot-control-score" aria-label={`Controle Ollie ${displayControl.player}, Rival ${displayControl.enemy}`}>
        <span className="ogot-control-score__player">{displayControl.player}</span>
        <span className="text-white/30">/</span>
        <span className="ogot-control-score__enemy">{displayControl.enemy}</span>
      </div>
      <div className="text-right">
        <p className="text-[0.54rem] font-black uppercase tracking-[0.22em] text-amber-100/54">Plateau</p>
        <p className="mt-1 text-sm font-black text-white">{occupied}/{match.config.boardSize * match.config.boardSize}</p>
      </div>
    </section>
  );
}

function FamilyInventoryPanel({ match }: { match: MatchState }) {
  const playerCounts = countBoardFamilies(match.board, "player");
  const enemyCounts = countBoardFamilies(match.board, "enemy");
  const playerActiveStacks = countActiveFamilyStacks(match, "player");
  const enemyActiveStacks = countActiveFamilyStacks(match, "enemy");

  return (
    <section className="ogot-family-panel" aria-label="Familles sur le plateau">
      <div className="ogot-panel-heading">
        <span>Familles</span>
        <span>Ollie / Rival</span>
      </div>
      <div className="ogot-family-grid">
        {ACTIVE_FAMILIES.map((family) => {
          const definition = CARD_FAMILY_DEFINITIONS[family];
          const playerCount = playerCounts[family] ?? 0;
          const enemyCount = enemyCounts[family] ?? 0;
          const activeStacks = playerActiveStacks[family] ?? 0;
          const rivalActiveStacks = enemyActiveStacks[family] ?? 0;
          const bestThreshold = getBestThresholdLabel(family, playerCount);
          const visibleThreshold = activeStacks > 0 && bestThreshold ? bestThreshold : getNextThresholdLabel(family, playerCount);

          return (
            <div
              key={family}
              className={[
                "ogot-family-token",
                playerCount > 0 || enemyCount > 0 ? "is-present" : "",
                activeStacks > 0 ? "has-active-stack" : "",
              ].join(" ")}
              title={`${definition.label}: ${playerCount} pour Ollie, ${enemyCount} pour le rival. ${definition.identity}`}
            >
              <img src={getFamilyCrestArtSrc(family)} alt="" draggable={false} />
              <div>
                <p>{definition.shortLabel}</p>
                <span>{visibleThreshold}</span>
                {activeStacks > 0 || rivalActiveStacks > 0 ? (
                  <em>
                    {activeStacks} pile{activeStacks > 1 ? "s" : ""} active
                    {rivalActiveStacks > 0 ? ` / ${rivalActiveStacks} rival` : ""}
                  </em>
                ) : null}
              </div>
              <strong>
                {playerCount}
                <small>{enemyCount}</small>
              </strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BuffShelf({
  match,
  selectedCard,
  onFireflyReroll,
  onReflectionCopy,
}: {
  match: MatchState;
  selectedCard: CardInstance | null;
  onFireflyReroll?: () => void;
  onReflectionCopy?: (cardInstanceId: string) => void;
}) {
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
    return (
      <section className="ogot-empty-buff-shelf" aria-label="Buffs">
        <span>Buffs</span>
        <div>
          {Array.from({ length: 4 }, (_, index) => (
            <i key={`empty-buff-${index}`} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <CharmBuffBar
      charmIds={match.playerCharms}
      title="Buffs"
      emptyLabel="Aucun buff"
      tooltipAlign="left"
      className="ogot-buff-shelf"
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
  );
}

function FusionQueue({
  selectedCards,
  selectedManaCost,
  turnMana,
  maxCards,
  targetPosition,
}: {
  selectedCards: CardInstance[];
  selectedManaCost: number;
  turnMana: number;
  maxCards: number;
  targetPosition: Position | null;
}) {
  const count = selectedCards.length;
  const familyEntries = getFamilyCountEntries(getSelectedFamilyCounts(selectedCards));
  const activeFamilyLabels = familyEntries
    .map((entry) => getBestThresholdLabel(entry.family, entry.count))
    .filter(Boolean);

  return (
    <section className={["ogot-fusion-queue", count > 1 ? "is-fusing" : "", count > 0 ? "has-cards" : ""].join(" ")}>
      <div className="ogot-fusion-copy">
        <p>{count > 1 ? `Fusion x${count}` : count === 1 ? "Carte prete" : `Pile 0/${maxCards}`}</p>
        <span className="ogot-fusion-target-copy">
          {targetPosition ? `Case ${targetPosition.row + 1}.${targetPosition.col + 1}` : "Selectionne une case"}
        </span>
        {familyEntries.length > 0 ? (
          <div className="ogot-fusion-family-line" aria-label="Familles dans la fusion">
            {familyEntries.slice(0, 4).map((entry) => (
              <span
                key={entry.family}
                className={entry.count >= 2 ? "is-active" : ""}
                title={`${entry.definition.label} x${entry.count}`}
              >
                <img src={getFamilyCrestArtSrc(entry.family)} alt="" draggable={false} />
                <strong>x{entry.count}</strong>
              </span>
            ))}
          </div>
        ) : null}
        {activeFamilyLabels.length > 0 ? <small>{activeFamilyLabels.join(" + ")}</small> : null}
      </div>

      <div className="ogot-fusion-stack" aria-label={`${count} cartes selectionnees`}>
        {selectedCards.slice(0, 6).map((card, index) => (
          <div
            key={card.instanceId}
            className="ogot-fusion-mini-card"
            style={{
              "--mini-x": `${(index - (Math.min(selectedCards.length, 6) - 1) / 2) * 1.05}rem`,
              "--mini-rotate": `${(index - (Math.min(selectedCards.length, 6) - 1) / 2) * 5.5}deg`,
            } as CSSProperties}
          >
            <CardView card={card} layout="board" className="h-full w-full" />
          </div>
        ))}
        {count === 0 ? <div className="ogot-fusion-empty-core" /> : null}
      </div>

      <div className="ogot-fusion-mana">
        <strong>{selectedManaCost}</strong>
        <span>/{turnMana}</span>
      </div>
    </section>
  );
}

function CommandPanel({
  match,
  selectedCards,
  selectedCount,
  selectedManaCost,
  availableMana,
  targetPosition,
  canConfirmPlacement,
  canHumanInteract,
  hoverPreview,
  onConfirmPlacement,
}: {
  match: MatchState;
  selectedCards: CardInstance[];
  selectedCount: number;
  selectedManaCost: number;
  availableMana: number;
  targetPosition: Position | null;
  canConfirmPlacement: boolean;
  canHumanInteract: boolean;
  hoverPreview: PreviewMove | null;
  onConfirmPlacement: () => void;
}) {
  const label = canHumanInteract
    ? actionButtonLabel({
        selectedCount,
        hasTarget: Boolean(targetPosition),
        canConfirm: canConfirmPlacement,
      })
    : activeTurnLabel(match);

  return (
    <section className="ogot-command-panel">
      <div className="ogot-panel-heading">
        <span>Energie</span>
        <span>{availableMana} dispo</span>
      </div>
      <ResourcePips total={match.turn.availableMana} spent={selectedManaCost} available={availableMana} />
      {selectedCount > 0 || targetPosition ? (
        <CommandFusionSummary
          selectedCards={selectedCards}
          selectedManaCost={selectedManaCost}
          turnMana={match.turn.availableMana}
          maxCards={match.config.maxCardsPerMove}
          targetPosition={targetPosition}
        />
      ) : null}
      <div className="ogot-command-readout">
        <div>
          <span>Cartes</span>
          <strong>{selectedCount}/{match.config.maxCardsPerMove}</strong>
        </div>
        <div>
          <span>Case</span>
          <strong>{targetPosition ? `${targetPosition.row + 1}-${targetPosition.col + 1}` : "--"}</strong>
        </div>
        <div>
          <span>Flip</span>
          <strong>{hoverPreview ? hoverPreview.flippedCount : 0}</strong>
        </div>
      </div>
      <button
        type="button"
        className="ogot-primary-command"
        disabled={!canConfirmPlacement}
        onClick={onConfirmPlacement}
        data-testid="confirm-stack-button"
      >
        {label}
      </button>
    </section>
  );
}

function CommandFusionSummary({
  selectedCards,
  selectedManaCost,
  turnMana,
  maxCards,
  targetPosition,
}: {
  selectedCards: CardInstance[];
  selectedManaCost: number;
  turnMana: number;
  maxCards: number;
  targetPosition: Position | null;
}) {
  const count = selectedCards.length;
  const familyEntries = getFamilyCountEntries(getSelectedFamilyCounts(selectedCards));
  const activeFamilyLabels = familyEntries
    .map((entry) => getBestThresholdLabel(entry.family, entry.count))
    .filter(Boolean);

  return (
    <div className={["ogot-command-fusion-summary", count > 1 ? "is-fusing" : ""].join(" ")}>
      <div>
        <p>{count > 1 ? `Fusion x${count}` : count === 1 ? "Carte prete" : `Pile 0/${maxCards}`}</p>
        <span>{targetPosition ? `Case ${targetPosition.row + 1}.${targetPosition.col + 1}` : "Choisis une case"}</span>
      </div>
      <strong>
        {selectedManaCost}
        <small>/{turnMana}</small>
      </strong>
      {familyEntries.length > 0 ? (
        <div className="ogot-command-family-preview" aria-label="Familles selectionnees">
          {familyEntries.slice(0, 4).map((entry) => (
            <span key={entry.family} className={entry.count >= 2 ? "is-active" : ""}>
              <img src={getFamilyCrestArtSrc(entry.family)} alt="" draggable={false} />
              <b>x{entry.count}</b>
            </span>
          ))}
        </div>
      ) : null}
      {activeFamilyLabels.length > 0 ? <em>{activeFamilyLabels.join(" + ")}</em> : null}
    </div>
  );
}

function CardBack({ compact = false }: { compact?: boolean }) {
  return (
    <div className={["ogot-card-back", compact ? "ogot-card-back--compact" : ""].join(" ")}>
      <img src="/images/ui/bench-card-back.png" alt="" draggable={false} />
    </div>
  );
}

function HandRack({
  owner,
  hand,
  hiddenCount,
  selectedCardIds,
  selectedManaCost,
  turnMana,
  maxSelectedCards,
  canHumanInteract,
  onSelectCard,
}: {
  owner: PlayerId;
  hand: CardInstance[];
  hiddenCount: number;
  selectedCardIds: string[];
  selectedManaCost: number;
  turnMana: number;
  maxSelectedCards: number;
  canHumanInteract: boolean;
  onSelectCard: (cardInstanceId: string) => void;
}) {
  const isPlayer = owner === "player";
  const cardsToShow = hand;
  const backsToShow = isPlayer ? 0 : Math.max(0, hiddenCount - cardsToShow.length);
  const count = cardsToShow.length + backsToShow;

  return (
    <section
      className={[
        "ogot-hand-rack",
        isPlayer ? "ogot-hand-rack--player" : "ogot-hand-rack--enemy",
        count > 5 ? "is-dense" : "",
      ].join(" ")}
      aria-label={isPlayer ? "Main du joueur" : "Main du rival"}
    >
      {!isPlayer ? (
        <div className="ogot-hand-count-chip">
          Rival <strong>{count}</strong>
          <span>{cardsToShow.length > 0 ? "visibles" : "cartes"}</span>
        </div>
      ) : null}
      <div className="ogot-hand-track">
        {cardsToShow.map((card, index) => {
          const selected = selectedCardIds.includes(card.instanceId);
          const canAddToPile =
            selected ||
            (selectedCardIds.length < maxSelectedCards && selectedManaCost + card.manaCost <= turnMana);
          const fanOffset = index - (cardsToShow.length - 1) / 2;
          const interactive = isPlayer && canHumanInteract && canAddToPile;

          return (
            <button
              key={card.instanceId}
              type="button"
              className={[
                "ogot-hand-card-button",
                !isPlayer ? "is-enemy-revealed" : "",
                selected ? "is-selected" : "",
                isPlayer && !interactive ? "is-disabled" : "",
              ].join(" ")}
              style={{
                "--fan-rotate": `${isPlayer ? fanOffset * 2.2 : fanOffset * -1.2}deg`,
                "--fan-rotate-inverse": `${isPlayer ? fanOffset * -2.2 : fanOffset * 1.2}deg`,
                "--fan-y": `${Math.abs(fanOffset) * (isPlayer ? 0.1 : 0.04)}rem`,
                "--fan-z": index,
              } as CSSProperties}
              disabled={!interactive}
              onClick={() => {
                if (interactive) {
                  onSelectCard(card.instanceId);
                }
              }}
              data-testid={isPlayer ? "player-bench-card" : "enemy-bench-card"}
              aria-pressed={selected}
            >
              <CardView card={card} layout="hand" selected={selected} className="h-full w-full" />
            </button>
          );
        })}
        {Array.from({ length: backsToShow }, (_, index) => {
          const fanOffset = index - (backsToShow - 1) / 2;
          return (
            <div
              key={`${owner}-back-${index}`}
              className="ogot-hand-card-button ogot-hand-card-button--back"
              style={{
                "--fan-rotate": `${fanOffset * -1.8}deg`,
                "--fan-rotate-inverse": `${fanOffset * 1.8}deg`,
                "--fan-y": `${Math.abs(fanOffset) * 0.08}rem`,
                "--fan-z": index,
              } as CSSProperties}
            >
              <CardBack />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FusionBurst({ count, active }: { count: number; active: boolean }) {
  if (!active || count <= 1) {
    return null;
  }

  const particleCount = Math.min(10, Math.max(4, count * 2));

  return (
    <span className="ogot-fusion-burst" aria-hidden="true">
      {Array.from({ length: particleCount }, (_, index) => (
        <span
          key={`fusion-particle-${index}`}
          style={{
            "--particle-angle": `${(360 / particleCount) * index}deg`,
          } as CSSProperties}
        />
      ))}
    </span>
  );
}

function StackBadge({ card }: { card: BoardCard }) {
  const stackSize = card.stackSize ?? 1;

  if (stackSize <= 1) {
    return null;
  }

  return (
    <div className="ogot-stack-badge" aria-label={`${stackSize} cartes fusionnees`}>
      <span>Fusion</span>
      <strong>x{stackSize}</strong>
    </div>
  );
}

function StackFamilyMeter({ card, active }: { card: BoardCard; active: boolean }) {
  const entries = getFamilyCountEntries(countCardFamilies(card));

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className={["ogot-stack-family-meter", active ? "is-active" : ""].join(" ")} aria-label="Familles de la pile">
      {entries.slice(0, 4).map((entry) => {
        const thresholdLabel = getBestThresholdLabel(entry.family, entry.count);
        return (
          <span
            key={entry.family}
            className={thresholdLabel ? "has-bonus" : ""}
            title={`${entry.definition.shortLabel} x${entry.count}${thresholdLabel ? ` - ${thresholdLabel}` : ""}`}
          >
            <img src={getFamilyCrestArtSrc(entry.family)} alt="" draggable={false} />
            <strong>{entry.count}</strong>
          </span>
        );
      })}
    </div>
  );
}

function StackBonusToast({ card, active }: { card: BoardCard; active: boolean }) {
  if (!active) {
    return null;
  }

  const labels = getFamilyCountEntries(countCardFamilies(card))
    .map((entry) => getBestThresholdLabel(entry.family, entry.count))
    .filter(Boolean);

  if (labels.length === 0) {
    return null;
  }

  return <div className="ogot-stack-bonus-toast">{labels.slice(0, 2).join(" + ")}</div>;
}

function BoardCardLayer({
  card,
  ownerOverride,
  activeImpact,
  lastMove,
  lastMoveSignature,
  isLastPlaced,
}: {
  card: BoardCard;
  ownerOverride?: BoardCard["owner"];
  activeImpact: CombatImpact | null;
  lastMove: LastMoveSummary | null;
  lastMoveSignature: string | null;
  isLastPlaced: boolean;
}) {
  const { motionKind, motionKey, motionDirection, motionDelayMs } = getCardMotion(card, lastMove, lastMoveSignature);
  const stackSize = card.stackSize ?? 1;
  const highlightTone =
    isLastPlaced ? "placed" : activeImpact?.result === "flipped" ? "flipped" : activeImpact ? "impact" : undefined;

  return (
    <div className={["ogot-board-card-wrap", stackSize > 1 ? "is-stacked" : "", isLastPlaced ? "is-just-placed" : ""].join(" ")}>
      <CardMotionShell
        owner={card.owner}
        layout="board"
        motionKind={motionKind}
        motionKey={motionKey}
        motionDirection={motionDirection}
        motionDelayMs={motionDelayMs}
      >
        <CardView
          card={card}
          ownerOverride={ownerOverride}
          layout="board"
          className="h-full w-full"
          highlightTone={highlightTone}
          testId={`board-card-${card.instanceId}`}
        />
      </CardMotionShell>
      <StackBadge card={card} />
      <StackFamilyMeter card={card} active={isLastPlaced} />
      <StackBonusToast card={card} active={isLastPlaced} />
      <FusionBurst count={stackSize} active={isLastPlaced} />
    </div>
  );
}

function PendingPlacement({ preview }: { preview: PreviewMove }) {
  const stackSize = preview.placedCard.stackSize ?? 1;

  return (
    <div className="ogot-pending-placement">
      <CardView card={preview.placedCard} layout="board" className="h-full w-full" highlightTone="preview" />
      <StackFamilyMeter card={preview.placedCard} active={stackSize > 1} />
      <FusionBurst count={stackSize} active={stackSize > 1} />
      {stackSize > 1 ? (
        <div className="ogot-stack-badge">
          <span>Fusion</span>
          <strong>x{stackSize}</strong>
        </div>
      ) : null}
    </div>
  );
}

function ImpactPill({ impact }: { impact: CombatImpact }) {
  return (
    <div className={["ogot-impact-pill", impact.result === "flipped" ? "is-flip" : ""].join(" ")}>
      <span>{getImpactLabel(impact)}</span>
      <strong>{getImpactValueLabel(impact)}</strong>
    </div>
  );
}

function BattleBoard({
  match,
  selectedCardId,
  targetPosition,
  hoveredPosition,
  hoverPreview,
  canHumanInteract,
  onCellClick,
  onCellHover,
}: {
  match: MatchState;
  selectedCardId: string | null;
  targetPosition: Position | null;
  hoveredPosition: Position | null;
  hoverPreview: PreviewMove | null;
  canHumanInteract: boolean;
  onCellClick: (position: Position) => void;
  onCellHover: (position: Position | null) => void;
}) {
  const board = match.board;
  const boardSize = board.length;
  const previewImpactMap = hoverPreview ? buildImpactMap(hoverPreview.impacts) : new Map<string, CombatImpact>();
  const lastImpactMap = match.lastMove ? buildImpactMap(match.lastMove.impacts) : new Map<string, CombatImpact>();
  const lastMoveSignature = createLastMoveSignature(match.lastMove);
  const flippedImpacts = useMemo(() => getFlippedImpacts(match.lastMove), [match.lastMove]);
  const [revealedFlipIds, setRevealedFlipIds] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    if (!lastMoveSignature || flippedImpacts.length === 0 || !match.lastMove) {
      setRevealedFlipIds(new Set());
      return;
    }

    const targetIds = flippedImpacts.map((impact) => impact.targetCardInstanceId);
    if (match.lastMove.playerId !== "enemy") {
      setRevealedFlipIds(new Set(targetIds));
      return;
    }

    setRevealedFlipIds(new Set());
    const revealTimer = window.setTimeout(() => {
      setRevealedFlipIds(new Set(targetIds));
    }, 185);

    return () => window.clearTimeout(revealTimer);
  }, [flippedImpacts, lastMoveSignature, match.lastMove]);

  return (
    <section className="ogot-board-table" aria-label="Plateau de combat">
      <div className="ogot-board-table__rim" />
      <div
        className="ogot-board-grid"
        style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }}
        data-testid="board-grid"
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const position = { row: rowIndex, col: colIndex };
            const cellKey = keyFor(position);
            const isTargeted = samePosition(targetPosition, position);
            const isHovered = samePosition(hoveredPosition, position);
            const isPreviewCell = samePosition(hoverPreview?.move.position, position);
            const isLastPlaced = samePosition(match.lastMove?.position, position);
            const activeImpact = hoverPreview
              ? previewImpactMap.get(cellKey) ?? null
              : lastImpactMap.get(cellKey) ?? null;
            const canTarget = canHumanInteract && !cell;
            const pendingCard = !cell && isPreviewCell && hoverPreview ? hoverPreview : null;
            const flipImpact = cell
              ? match.lastMove?.impacts.find((impact) => impact.targetCardInstanceId === cell.instanceId)
              : null;
            const ownerOverride =
              cell && flipImpact && flipImpact.result === "flipped" && !revealedFlipIds.has(cell.instanceId)
                ? flipImpact.targetOwnerBeforeImpact
                : undefined;
            const visualOwner = ownerOverride ?? cell?.owner ?? null;

            return (
              <button
                key={cellKey}
                type="button"
                className={[
                  "ogot-board-cell",
                  visualOwner ? `ogot-board-cell--${visualOwner}` : "",
                  canTarget ? "can-target" : "",
                  isTargeted ? "is-targeted" : "",
                  isHovered ? "is-hovered" : "",
                  isPreviewCell ? "is-preview" : "",
                  isLastPlaced ? "is-last-placed" : "",
                  selectedCardId && canTarget ? "has-selected-card" : "",
                ].join(" ")}
                disabled={!canTarget}
                onClick={() => {
                  if (canTarget) {
                    onCellClick(position);
                  }
                }}
                onMouseEnter={() => onCellHover(position)}
                onMouseLeave={() => onCellHover(null)}
                data-testid="board-cell"
                data-row={rowIndex}
                data-col={colIndex}
                aria-label={`Case ${rowIndex + 1}-${colIndex + 1}`}
              >
                <span className="ogot-board-cell__inset" />
                <span className="ogot-board-cell__slot" />
                {cell ? (
                  <BoardCardLayer
                    card={cell}
                    ownerOverride={ownerOverride}
                    activeImpact={activeImpact}
                    lastMove={match.lastMove}
                    lastMoveSignature={lastMoveSignature}
                    isLastPlaced={isLastPlaced}
                  />
                ) : pendingCard ? (
                  <PendingPlacement preview={pendingCard} />
                ) : (
                  <span className="ogot-empty-slot-mark">
                    <span />
                  </span>
                )}
                {activeImpact ? <ImpactPill impact={activeImpact} /> : null}
              </button>
            );
          }),
        )}
      </div>
    </section>
  );
}

export function BattleStage({
  match,
  hand,
  selectedCardId,
  selectedCardIds,
  selectedCard,
  selectedManaCost,
  availableMana,
  targetPosition,
  canConfirmPlacement,
  hoveredPosition,
  hoverPreview,
  canHumanInteract,
  control,
  sidePanel,
  labMode = false,
  embedded = false,
  onCellHover,
  onCellClick,
  onConfirmPlacement,
  onSelectCard,
  onFireflyReroll,
  onReflectionCopy,
}: BattleStageProps) {
  const selectedCards = hand.filter((card) => selectedCardIds.includes(card.instanceId));
  const enemyVisibleCards = getVisibleEnemyCards(match);
  const turnMana = match.turn.availableMana;

  return (
    <main className={["ogot-battle-shell", embedded ? "ogot-battle-shell--embedded" : ""].join(" ")}>
      <div className="ogot-battle-backdrop" aria-hidden="true" />
      <div className="ogot-battle-vignette" aria-hidden="true" />

      <div className="ogot-battle-top-hand">
        <HandRack
          owner="enemy"
          hand={enemyVisibleCards}
          hiddenCount={enemyVisibleCards.length}
          selectedCardIds={[]}
          selectedManaCost={0}
          turnMana={turnMana}
          maxSelectedCards={match.config.maxCardsPerMove}
          canHumanInteract={false}
          onSelectCard={() => undefined}
        />
      </div>

      <div className="ogot-battle-strip-slot">
        <CombatTopStrip match={match} control={control} preview={hoverPreview} />
      </div>

      <aside className="ogot-battle-left-rail">
        <BuffShelf
          match={match}
          selectedCard={selectedCard}
          onFireflyReroll={onFireflyReroll}
          onReflectionCopy={onReflectionCopy}
        />
        <ChampionPlate owner="player" match={match} control={control} />
        <ChampionPlate owner="enemy" match={match} control={control} />
      </aside>

      <div className="ogot-battle-board-slot">
        <BattleBoard
          match={match}
          selectedCardId={selectedCardId}
          targetPosition={targetPosition}
          hoveredPosition={hoveredPosition}
          hoverPreview={hoverPreview}
          canHumanInteract={canHumanInteract}
          onCellClick={onCellClick}
          onCellHover={onCellHover}
        />
      </div>

      <aside className="ogot-battle-right-rail">
        <FamilyInventoryPanel match={match} />
        <CommandPanel
          match={match}
          selectedCards={selectedCards}
          selectedCount={selectedCards.length}
          selectedManaCost={selectedManaCost}
          availableMana={availableMana}
          targetPosition={targetPosition}
          canConfirmPlacement={canConfirmPlacement}
          canHumanInteract={canHumanInteract}
          hoverPreview={hoverPreview}
          onConfirmPlacement={onConfirmPlacement}
        />
      </aside>

      <div className="ogot-battle-bottom-hand">
        <HandRack
          owner="player"
          hand={hand}
          hiddenCount={0}
          selectedCardIds={selectedCardIds}
          selectedManaCost={selectedManaCost}
          turnMana={turnMana}
          maxSelectedCards={match.config.maxCardsPerMove}
          canHumanInteract={canHumanInteract}
          onSelectCard={onSelectCard}
        />
      </div>

      {labMode || embedded ? (
        <div className="ogot-lab-side-panel">
          {sidePanel}
        </div>
      ) : null}
    </main>
  );
}
