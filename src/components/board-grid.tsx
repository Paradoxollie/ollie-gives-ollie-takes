"use client";

import { useEffect, useMemo, useState } from "react";

import { CardMotionShell, type CardMotionKind } from "@/components/card-motion-shell";
import { CardView } from "@/components/card-view";
import type { BoardCard, CombatImpact, Direction, LastMoveSummary, Position, PreviewMove } from "@/core/types";

interface BoardGridProps {
  board: Array<Array<BoardCard | null>>;
  selectedCardId: string | null;
  canInteract: boolean;
  hoveredPosition: Position | null;
  lastMove: LastMoveSummary | null;
  preview: PreviewMove | null;
  onCellClick: (position: Position) => void;
  onCellHover: (position: Position | null) => void;
}

function keyFor(position: Position): string {
  return `${position.row}-${position.col}`;
}

function samePosition(left: Position | null, right: Position | null): boolean {
  return Boolean(left && right && left.row === right.row && left.col === right.col);
}

function getImpactLabel(impact: CombatImpact): string {
  return impact.result === "flipped" ? "Flip" : "Bloc";
}

function getImpactValueLabel(impact: CombatImpact): string {
  return impact.result === "no-flip"
    ? `${impact.attackerValue} <= ${impact.defenderValue}`
    : `${impact.attackerValue} > ${impact.defenderValue}`;
}

function buildImpactMap(impacts: CombatImpact[]): Map<string, CombatImpact> {
  return new Map(impacts.map((impact) => [keyFor(impact.position), impact]));
}

function createLastMoveSignature(lastMove: LastMoveSummary | null): string | null {
  if (!lastMove) {
    return null;
  }

  const impactSignature = lastMove.impacts
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
    lastMove.roundEnded ? "round-end" : "still-open",
    impactSignature,
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
      motionKind: "idle" as CardMotionKind,
      motionKey: null,
      motionDirection: null,
      motionDelayMs: 0,
    };
  }

  if (cell.instanceId === lastMove.cardInstanceId) {
    return {
      motionKind: "placed" as CardMotionKind,
      motionKey: `placed:${lastMoveSignature}`,
      motionDirection: lastMove.playerId === "player" ? "bottom" : "top",
      motionDelayMs: 0,
    };
  }

  const impact = lastMove.impacts.find((entry) => entry.targetCardInstanceId === cell.instanceId);
  if (!impact) {
    return {
      motionKind: "idle" as CardMotionKind,
      motionKey: null,
      motionDirection: null,
      motionDelayMs: 0,
    };
  }

  return {
    motionKind: (impact.result === "flipped" ? "flipped" : "idle") as CardMotionKind,
    motionKey: impact.result === "flipped" ? `${impact.result}:${cell.instanceId}:${lastMoveSignature}` : null,
    motionDirection: impact.result === "flipped" ? impact.direction : null,
    motionDelayMs: impact.result === "flipped" && lastMove.playerId === "enemy" ? 120 : 0,
  };
}

function getFlippedImpacts(lastMove: LastMoveSummary | null): CombatImpact[] {
  if (!lastMove) {
    return [];
  }

  return lastMove.impacts.filter((impact) => impact.result === "flipped");
}

function getPreviewFooter(preview: PreviewMove): string {
  if (!preview.roundEnds) {
    return `${preview.flippedCount} flip${preview.flippedCount > 1 ? "s" : ""}`;
  }

  const round = preview.roundEndSummary;
  if (!round) {
    return `${preview.flippedCount} flip${preview.flippedCount > 1 ? "s" : ""}`;
  }

  return `${round.control.player}-${round.control.enemy} / -${round.damageApplied.player}|-${round.damageApplied.enemy}`;
}

function getPreviewHeader(preview: PreviewMove): string {
  if (preview.resultingWinner === "player") {
    return "Lethal";
  }

  if (preview.resultingWinner === "enemy") {
    return "Risque KO";
  }

  if (preview.resultingWinner === "draw") {
    return "Draw";
  }

  return preview.roundEnds ? "Fin round" : "Preview";
}

function getOccupiedCellTone(owner: BoardCard["owner"]): string {
  return owner === "player"
    ? "border-cyan-300/62 bg-[linear-gradient(180deg,rgba(34,211,238,0.28),rgba(6,12,18,0.08))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_12px_30px_rgba(3,7,12,0.24),0_0_0_1px_rgba(56,189,248,0.3)]"
    : "border-rose-300/62 bg-[linear-gradient(180deg,rgba(251,113,133,0.28),rgba(18,7,10,0.08))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_12px_30px_rgba(3,7,12,0.24),0_0_0_1px_rgba(251,113,133,0.3)]";
}

function getOccupiedGlow(owner: BoardCard["owner"]): string {
  return owner === "player" ? "bg-cyan-300/40" : "bg-rose-300/40";
}

export function BoardGrid({
  board,
  selectedCardId,
  canInteract,
  hoveredPosition,
  lastMove,
  preview,
  onCellClick,
  onCellHover,
}: BoardGridProps) {
  const previewImpactMap = preview ? buildImpactMap(preview.impacts) : new Map<string, CombatImpact>();
  const lastImpactMap = lastMove ? buildImpactMap(lastMove.impacts) : new Map<string, CombatImpact>();
  const lastMoveSignature = createLastMoveSignature(lastMove);
  const [revealedFlipIds, setRevealedFlipIds] = useState<Set<string>>(() => new Set());
  const boardSize = board.length;
  const gridGap = "clamp(0.38rem, 0.85vw, 0.72rem)";
  const flippedImpacts = useMemo(() => getFlippedImpacts(lastMove), [lastMove]);

  useEffect(() => {
    if (!lastMoveSignature || flippedImpacts.length === 0 || !lastMove) {
      setRevealedFlipIds(new Set());
      return;
    }

    const targetIds = flippedImpacts.map((impact) => impact.targetCardInstanceId);
    if (lastMove.playerId !== "enemy") {
      setRevealedFlipIds(new Set(targetIds));
      return;
    }

    setRevealedFlipIds(new Set());
    const revealTimer = window.setTimeout(() => {
      setRevealedFlipIds(new Set(targetIds));
    }, 185);

    return () => window.clearTimeout(revealTimer);
  }, [flippedImpacts, lastMove, lastMoveSignature]);

  return (
    <div className="relative mx-auto h-full w-full overflow-hidden rounded-[1.8rem] border border-cyan-100/12 shadow-[0_32px_100px_rgba(5,12,24,0.5)] [transform-style:preserve-3d]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/board-arena.png')",
          backgroundPosition: "center 44%",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,225,160,0.14),rgba(246,225,160,0)_28%),linear-gradient(180deg,rgba(4,10,18,0.2),rgba(5,12,20,0.3))]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_120px_rgba(4,10,18,0.4)]" />
      <div
        className="pointer-events-none absolute inset-x-[14%] bottom-[4%] h-[16%] rounded-[999px] border border-cyan-100/10 bg-[radial-gradient(circle,rgba(153,246,228,0.18),rgba(14,116,144,0.04)_58%,rgba(0,0,0,0)_72%)] blur-[2px]"
        style={{ transform: "perspective(1400px) rotateX(80deg) translateZ(-20px)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-[18%] bottom-[8%] h-[22%] rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(20,35,52,0.42),rgba(7,13,22,0.02))] opacity-60"
        style={{ transform: "perspective(1600px) rotateX(78deg) translateZ(-36px)" }}
      />
      <div className="pointer-events-none absolute inset-x-10 bottom-3 h-10 rounded-[999px] bg-cyan-200/8 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-x-[32%] bottom-[7%] h-9 rounded-[999px] border border-cyan-100/10 bg-[radial-gradient(circle,rgba(125,211,252,0.16),rgba(125,211,252,0)_72%)]"
        style={{ transform: "perspective(1200px) rotateX(80deg)" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative aspect-square h-[78%] max-h-full"
          style={{ gap: gridGap, transform: "translateY(0%)" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.2)]" />
          <div className="pointer-events-none absolute inset-2 rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(11,18,27,0.06),rgba(6,12,18,0.04))]" />

          <div
            className="relative grid h-full w-full"
            style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`, gap: gridGap }}
            data-testid="board-grid"
          >
            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => {
                const position = { row: rowIndex, col: colIndex };
                const cellKey = keyFor(position);
                const activeImpact = preview ? previewImpactMap.get(cellKey) ?? null : lastImpactMap.get(cellKey) ?? null;
                const isPreviewCell = samePosition(preview?.move.position ?? null, position);
                const isLastPlacedCell = samePosition(lastMove?.position ?? null, position);
                const isHoveredCell = samePosition(hoveredPosition, position);

                const overlay = activeImpact ? (
                  <div className="pointer-events-none absolute inset-x-1 -top-1 z-30 flex flex-wrap justify-center gap-1">
                    <span className="rounded-full border border-white/10 bg-black/78 px-1.5 py-0.5 text-[0.42rem] font-semibold uppercase tracking-[0.12em] text-white/92 shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
                      {getImpactLabel(activeImpact)}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/88 px-1.5 py-0.5 text-[0.42rem] font-semibold uppercase tracking-[0.12em] text-slate-900 shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
                      {getImpactValueLabel(activeImpact)}
                    </span>
                  </div>
                ) : null;

                if (cell) {
                  const { motionKind, motionKey, motionDirection, motionDelayMs } = getCardMotion(
                    cell,
                    lastMove,
                    lastMoveSignature,
                  );
                  const flipImpact = lastMove ? lastMove.impacts.find((impact) => impact.targetCardInstanceId === cell.instanceId) : null;
                  const ownerOverride =
                    flipImpact && flipImpact.result === "flipped" && !revealedFlipIds.has(cell.instanceId)
                      ? flipImpact.targetOwnerBeforeImpact
                      : undefined;
                  const visualOwner = ownerOverride ?? cell.owner;

                  return (
                    <div
                      key={cellKey}
                      className={[
                        "relative aspect-square overflow-hidden rounded-[1.32rem] border p-1 backdrop-blur-[1px] transition",
                        getOccupiedCellTone(visualOwner),
                        isPreviewCell || isLastPlacedCell ? "bg-cyan-200/8" : "",
                      ].join(" ")}
                      data-testid={`board-cell-${rowIndex}-${colIndex}`}
                    >
                      <div
                        className={["pointer-events-none absolute inset-x-3 top-1.5 h-3 rounded-full blur-md", getOccupiedGlow(visualOwner)].join(" ")}
                      />
                      <div
                        className={["pointer-events-none absolute inset-x-5 bottom-1.5 h-3 rounded-full blur-md", getOccupiedGlow(visualOwner)].join(" ")}
                      />
                      <div className="flex h-full items-center justify-center">
                        <div className="aspect-[2/3] h-full max-h-full w-auto max-w-[96%]">
                          <CardMotionShell
                            owner={cell.owner}
                            layout="board"
                            motionKind={motionKind}
                            motionKey={motionKey}
                            motionDirection={motionDirection}
                            motionDelayMs={motionDelayMs}
                          >
                            <CardView
                              card={cell}
                              ownerOverride={ownerOverride}
                              layout="board"
                              className="h-full w-full"
                              highlightTone={
                                isPreviewCell
                                  ? "preview"
                                  : isLastPlacedCell
                                    ? "placed"
                                    : activeImpact?.result === "flipped"
                                      ? "flipped"
                                      : activeImpact
                                        ? "impact"
                                        : undefined
                              }
                              annotation={
                                isPreviewCell
                                  ? "Preview"
                                  : isLastPlacedCell
                                    ? "Posee"
                                    : activeImpact
                                      ? getImpactLabel(activeImpact)
                                      : null
                              }
                            />
                          </CardMotionShell>
                        </div>
                      </div>
                      {overlay}
                    </div>
                  );
                }

                const emptyCellLabel =
                  isPreviewCell && preview
                    ? getPreviewHeader(preview)
                    : isLastPlacedCell && lastMove?.roundEnded
                      ? "Round"
                      : activeImpact
                        ? getImpactLabel(activeImpact)
                        : canInteract && selectedCardId
                          ? "Poser"
                          : "Libre";

                return (
                  <button
                    key={cellKey}
                    type="button"
                    onClick={() => onCellClick(position)}
                    onMouseEnter={() => onCellHover(position)}
                    onMouseLeave={() => onCellHover(null)}
                    disabled={!canInteract || !selectedCardId}
                    className={[
                      "relative flex aspect-square min-h-0 flex-col items-center justify-center overflow-hidden rounded-[1.32rem] border px-2 py-2 text-center transition duration-150",
                      canInteract && selectedCardId
                        ? "border-cyan-200/28 bg-[linear-gradient(180deg,rgba(9,17,25,0.18),rgba(6,12,18,0.08))] text-white/84 hover:-translate-y-0.5 hover:border-cyan-200/52 hover:bg-cyan-200/10"
                        : "border-white/12 bg-[linear-gradient(180deg,rgba(8,16,24,0.12),rgba(6,12,18,0.06))] text-white/48",
                      isHoveredCell ? "border-violet-200/55 bg-violet-200/12 text-white" : "",
                      isPreviewCell || isLastPlacedCell ? "ring-2 ring-inset ring-cyan-200/60" : "",
                      activeImpact && !preview ? "bg-amber-200/10" : "",
                    ].join(" ")}
                    data-testid={`board-cell-${rowIndex}-${colIndex}`}
                  >
                    <div className="pointer-events-none absolute inset-3 rounded-[1.1rem] border border-dashed border-white/14" />
                    <div className="pointer-events-none absolute inset-x-6 top-4 h-8 rounded-full bg-white/6 blur-md" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/18 text-xl text-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.24)]">
                        +
                      </div>
                    </div>
                    {(isHoveredCell || isPreviewCell || isLastPlacedCell) && (
                      <span className="relative mt-auto rounded-full border border-white/10 bg-black/58 px-2 py-1 text-[0.42rem] font-semibold uppercase tracking-[0.18em] text-white/88">
                        {emptyCellLabel}
                      </span>
                    )}
                    {activeImpact ? (
                      <span className="relative mt-1.5 rounded-full border border-white/10 bg-black/55 px-1.5 py-0.5 text-[0.42rem] font-semibold uppercase tracking-[0.12em] text-white/90">
                        {getImpactValueLabel(activeImpact)}
                      </span>
                    ) : null}
                    {isPreviewCell && preview ? (
                      <span className="relative mt-1.5 rounded-full border border-violet-100/20 bg-violet-200/14 px-1.5 py-0.5 text-[0.42rem] font-semibold uppercase tracking-[0.12em] text-violet-50">
                        {getPreviewFooter(preview)}
                      </span>
                    ) : null}
                  </button>
                );
              }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
