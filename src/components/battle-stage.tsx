"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import { CARD_FAMILY_DEFINITIONS, countBoardFamilies } from "@/core";
import type { BoardCard, CardFamily, CardInstance, ControlTotals, MatchState, PlayerId, Position, PreviewMove } from "@/core/types";
import { getUnitVisual, type UnitAnimationKey, type UnitVisualConfig } from "@/lib/unit-visuals";

interface BattleStageProps {
  match: MatchState;
  hand: CardInstance[];
  selectedCardId: string | null;
  selectedCard: CardInstance | null;
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
  onSelectCard: (cardInstanceId: string) => void;
  onFireflyReroll?: () => void;
  onReflectionCopy?: (cardInstanceId: string) => void;
}

const ARENA_FRAME_STYLE = {
  width: "min(100vw, 150dvh)",
  height: "min(100dvh, 66.6667vw)",
} as const;

type PointAnchor = {
  x: number;
  y: number;
};

type BoardCellLayout = {
  row: 0 | 1 | 2;
  col: 0 | 1 | 2;
  left: number;
  top: number;
  width: number;
  height: number;
  unit: PointAnchor & { size: number };
  points: {
    top: PointAnchor;
    right: PointAnchor;
    bottom: PointAnchor;
    left: PointAnchor;
  };
};

type UnitAnimationState = UnitAnimationKey;
type UnitBoardEvent = "causedFlip" | "wasFlipped";
type BoardEventDirection = "left" | "right" | "up" | "down";

const ACTIVE_FAMILIES = ["familiar", "demon", "human", "automaton", "revenant", "arcane"] satisfies CardFamily[];

const FAMILY_BADGE_CLASS: Record<CardFamily, string> = {
  familiar: "border-emerald-200/54 bg-emerald-300/14 text-emerald-50 shadow-[0_0_14px_rgba(110,231,183,0.14)]",
  demon: "border-rose-300/58 bg-rose-500/16 text-rose-50 shadow-[0_0_14px_rgba(251,113,133,0.14)]",
  human: "border-sky-200/56 bg-sky-300/14 text-sky-50 shadow-[0_0_14px_rgba(125,211,252,0.14)]",
  automaton: "border-zinc-200/54 bg-zinc-200/14 text-zinc-50 shadow-[0_0_14px_rgba(228,228,231,0.12)]",
  revenant: "border-violet-200/56 bg-violet-300/14 text-violet-50 shadow-[0_0_14px_rgba(196,181,253,0.14)]",
  arcane: "border-cyan-200/56 bg-cyan-300/14 text-cyan-50 shadow-[0_0_14px_rgba(103,232,249,0.14)]",
  dragon: "border-amber-200/58 bg-amber-300/14 text-amber-50 shadow-[0_0_14px_rgba(251,191,36,0.14)]",
  renegade: "border-fuchsia-200/56 bg-fuchsia-300/14 text-fuchsia-50 shadow-[0_0_14px_rgba(240,171,252,0.14)]",
};

function unitAnimationSrc(visual: UnitVisualConfig, state: UnitAnimationState): string {
  return visual.animations?.[state] ?? visual.uiAnimationSrc ?? visual.spriteSrc;
}

function unitAnimationFrameCount(visual: UnitVisualConfig, state: UnitAnimationState): number {
  return visual.animationFrames?.[state] ?? visual.frameCount;
}

function unitAnimationFrameRate(visual: UnitVisualConfig, state: UnitAnimationState): number {
  return visual.animationFrameRates?.[state] ?? visual.frameRate;
}

function causedFlipAnimationState(visual: UnitVisualConfig, direction: BoardEventDirection | null): UnitAnimationState {
  if (direction === "left" && visual.animations?.actionLeft) {
    return "actionLeft";
  }

  if (visual.animations?.action) {
    return "action";
  }

  return "happy";
}

function directionBetween(from: Position, to: Position): BoardEventDirection | null {
  if (to.col < from.col) {
    return "left";
  }
  if (to.col > from.col) {
    return "right";
  }
  if (to.row < from.row) {
    return "up";
  }
  if (to.row > from.row) {
    return "down";
  }
  return null;
}

function familyShortLabel(family: CardFamily): string {
  return CARD_FAMILY_DEFINITIONS[family].shortLabel;
}

function FamilyNameBadge({
  family,
  size = "bench",
}: {
  family: CardFamily;
  size?: "bench" | "board";
}) {
  return (
    <span
      className={[
        "inline-flex max-w-full items-center justify-center rounded-full border font-black uppercase leading-none tracking-[0.13em]",
        size === "board" ? "px-2 py-1 text-[clamp(0.42rem,0.56vw,0.58rem)]" : "px-2.5 py-1 text-[clamp(0.46rem,0.64vw,0.64rem)]",
        FAMILY_BADGE_CLASS[family],
      ].join(" ")}
    >
      <span className="truncate">{familyShortLabel(family)}</span>
    </span>
  );
}

function TraitRail({
  board,
  owner,
}: {
  board: MatchState["board"];
  owner: PlayerId;
}) {
  const counts = countBoardFamilies(board, owner);
  const totalControlled = board.flat().filter((card) => card?.owner === owner).length;
  const sideClass = owner === "player" ? "left-[1.4%]" : "right-[1.4%]";
  const title = owner === "player" ? "Tes familles" : "Adversaire";

  return (
    <aside
      className={[
        "pointer-events-none absolute top-[18.4%] z-30 flex max-h-[60%] w-[13.6%] flex-col gap-[1.1%] overflow-hidden rounded-xl border border-white/10 bg-[rgba(1,7,16,0.72)] p-[0.68%] text-white shadow-[0_18px_52px_rgba(0,0,0,0.42)] backdrop-blur-md",
        sideClass,
      ].join(" ")}
      aria-label={title}
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/8 pb-[5%]">
        <div className="min-w-0">
          <p className="truncate text-[clamp(0.48rem,0.62vw,0.62rem)] font-black uppercase tracking-[0.18em] text-cyan-100/62">
            {title}
          </p>
          <p className="mt-0.5 text-[clamp(0.46rem,0.56vw,0.56rem)] uppercase tracking-[0.12em] text-white/38">
            Board {totalControlled}/9
          </p>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-[1.25%]">
        {ACTIVE_FAMILIES.map((family) => {
          const definition = CARD_FAMILY_DEFINITIONS[family];
          const count = counts[family];
          const activeThreshold = [...definition.thresholds].reverse().find((threshold) => count >= threshold.count);
          const nextThreshold = definition.thresholds.find((threshold) => count < threshold.count);
          const displayedThreshold = activeThreshold ?? nextThreshold ?? definition.thresholds[definition.thresholds.length - 1];
          const isActive = Boolean(activeThreshold);

          return (
            <section
              key={`${owner}-${family}`}
              title={`${definition.label}: ${definition.identity} ${displayedThreshold.effect}`}
              className={[
                "min-h-0 rounded-lg border px-[5%] py-[4%]",
                isActive ? FAMILY_BADGE_CLASS[family] : "border-white/8 bg-black/22 text-white/48",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-[clamp(0.48rem,0.62vw,0.62rem)] font-black uppercase tracking-[0.13em]">
                  {definition.label}
                </p>
                <span className="grid h-[clamp(1rem,1.3vw,1.3rem)] min-w-[clamp(1rem,1.3vw,1.3rem)] place-items-center rounded-full border border-white/18 bg-black/28 px-1 text-[clamp(0.52rem,0.68vw,0.68rem)] font-black">
                  {count}
                </span>
              </div>
              <p className="mt-[3%] truncate text-[clamp(0.44rem,0.55vw,0.55rem)] font-black uppercase tracking-[0.12em] text-white/58">
                {displayedThreshold.count} - {displayedThreshold.label} {isActive ? "actif" : `${count}/${displayedThreshold.count}`}
              </p>
              <p className="mt-[2%] line-clamp-2 text-[clamp(0.46rem,0.58vw,0.58rem)] leading-[1.35] text-white/64">
                {displayedThreshold.effect}
              </p>
            </section>
          );
        })}
      </div>
    </aside>
  );
}

function useSpriteFrame(frameCount: number, frameRate: number, animationKey: string): number {
  const safeFrameCount = Math.max(1, frameCount);
  const safeFrameRate = Math.max(1, frameRate);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setFrame(0);
    if (safeFrameCount <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setFrame((currentFrame) => (currentFrame + 1) % safeFrameCount);
    }, Math.max(42, Math.round(1000 / safeFrameRate)));

    return () => window.clearInterval(interval);
  }, [animationKey, safeFrameCount, safeFrameRate]);

  return frame;
}

function AnimatedUnitSprite({
  visual,
  state,
  className = "",
  mirrored = false,
}: {
  visual: UnitVisualConfig;
  state: UnitAnimationState;
  className?: string;
  mirrored?: boolean;
}) {
  const src = unitAnimationSrc(visual, state);
  const frameCount = Math.max(1, unitAnimationFrameCount(visual, state));
  const frameRate = unitAnimationFrameRate(visual, state);
  const frame = useSpriteFrame(frameCount, frameRate, `${src}:${state}`);
  const visibleFrame = frame % frameCount;
  const viewportStyle: CSSProperties = mirrored ? { transform: "scaleX(-1)" } : {};
  const stripStyle: CSSProperties = {
    width: `${frameCount * 100}%`,
    height: "100%",
    maxWidth: "none",
    transform: `translateX(-${(visibleFrame / frameCount) * 100}%)`,
    imageRendering: visual.pixelated ? "pixelated" : "auto",
  };

  return (
    <div className={["relative h-full w-full overflow-hidden", className].join(" ")} style={viewportStyle}>
      <img
        src={src}
        alt=""
        className="block select-none"
        style={stripStyle}
        draggable={false}
      />
    </div>
  );
}

const ARENA_SOURCE_WIDTH = 1536;
const ARENA_SOURCE_HEIGHT = 1024;

function xPercent(pixel: number): number {
  return (pixel / ARENA_SOURCE_WIDTH) * 100;
}

function yPercent(pixel: number): number {
  return (pixel / ARENA_SOURCE_HEIGHT) * 100;
}

function boardCellFromPixels(
  row: BoardCellLayout["row"],
  col: BoardCellLayout["col"],
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  unit: PointAnchor & { size: number },
  points: BoardCellLayout["points"],
): BoardCellLayout {
  return {
    row,
    col,
    left: xPercent(x0),
    top: yPercent(y0),
    width: xPercent(x1 - x0),
    height: yPercent(y1 - y0),
    unit,
    points,
  };
}

const TOP_CELL_POINTS = {
  top: { x: 50, y: 6 },
  right: { x: 94, y: 49 },
  bottom: { x: 50, y: 94 },
  left: { x: 6, y: 49 },
} satisfies BoardCellLayout["points"];

const MIDDLE_CELL_POINTS = {
  top: { x: 50, y: 6 },
  right: { x: 94, y: 50 },
  bottom: { x: 50, y: 94 },
  left: { x: 6, y: 50 },
} satisfies BoardCellLayout["points"];

const BOTTOM_CELL_POINTS = {
  top: { x: 50, y: 7 },
  right: { x: 94, y: 49 },
  bottom: { x: 50, y: 93 },
  left: { x: 6, y: 49 },
} satisfies BoardCellLayout["points"];

const BOARD_CELLS = [
  boardCellFromPixels(0, 0, 423, 154, 627, 357, { x: 50, y: 53, size: 61 }, TOP_CELL_POINTS),
  boardCellFromPixels(0, 1, 666, 154, 870, 357, { x: 50, y: 53, size: 61 }, TOP_CELL_POINTS),
  boardCellFromPixels(0, 2, 909, 154, 1113, 357, { x: 50, y: 53, size: 61 }, TOP_CELL_POINTS),
  boardCellFromPixels(1, 0, 423, 374, 627, 581, { x: 50, y: 51, size: 60 }, MIDDLE_CELL_POINTS),
  boardCellFromPixels(1, 1, 665, 374, 870, 581, { x: 50, y: 51, size: 60 }, MIDDLE_CELL_POINTS),
  boardCellFromPixels(1, 2, 909, 374, 1114, 581, { x: 50, y: 51, size: 60 }, MIDDLE_CELL_POINTS),
  boardCellFromPixels(2, 0, 421, 604, 627, 814, { x: 44, y: 48, size: 59 }, BOTTOM_CELL_POINTS),
  boardCellFromPixels(2, 1, 663, 604, 870, 814, { x: 50, y: 48, size: 59 }, BOTTOM_CELL_POINTS),
  boardCellFromPixels(2, 2, 909, 604, 1115, 814, { x: 56, y: 48, size: 59 }, BOTTOM_CELL_POINTS),
] satisfies readonly BoardCellLayout[];

function GenericUnitMark({ tone = "player" }: { tone?: "player" | "enemy" | "neutral" }) {
  const accentColor =
    tone === "enemy"
      ? "linear-gradient(135deg, #ffe4e6, #fb7185 54%, #fed7aa)"
      : tone === "neutral"
        ? "linear-gradient(135deg, #fef3c7, #bef264 54%, #a5f3fc)"
        : "linear-gradient(135deg, #fef3c7, #5eead4 54%, #a7f3d0)";
  const glowColor =
    tone === "enemy"
      ? "0 0 22px rgba(251,113,133,0.26)"
      : tone === "neutral"
        ? "0 0 22px rgba(251,191,36,0.22)"
        : "0 0 22px rgba(125,247,255,0.24)";

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-[3%] rounded-full border-2 border-white/54"
        style={{
          background: `radial-gradient(circle at 35% 24%, rgba(255,255,255,0.95), transparent 24%), ${accentColor}`,
          boxShadow: `${glowColor}, inset 0 1px 0 rgba(255,255,255,0.4)`,
        }}
      />
      <div
        className="absolute left-1/2 top-[20%] h-[30%] w-[38%] -translate-x-1/2 rounded-full border border-white/42"
        style={{ background: accentColor, boxShadow: glowColor }}
      />
      <div className="absolute left-[30%] top-[58%] h-[13%] w-[13%] rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.22)]" />
      <div className="absolute left-[44%] top-[49%] h-[13%] w-[13%] rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.22)]" />
      <div className="absolute right-[30%] top-[58%] h-[13%] w-[13%] rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.22)]" />
      <div className="absolute left-1/2 top-[68%] h-[16%] w-[32%] -translate-x-1/2 rounded-full bg-white/72 shadow-[0_0_8px_rgba(255,255,255,0.18)]" />
      <div className="absolute left-1/2 top-[74%] h-[10%] w-[58%] -translate-x-1/2 rounded-full bg-black/30 blur-sm" />
    </div>
  );
}

function HandCommandArt({ card, selected }: { card: CardInstance; selected: boolean }) {
  const visual = getUnitVisual(card.archetypeId);

  if (visual) {
    const animationState: UnitAnimationState = selected ? "ready" : "idle";

    return (
      <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_72%,rgba(34,211,238,0.16),rgba(5,12,26,0.08)_68%)]">
        <div className="absolute bottom-[8%] h-[16%] w-[58%] rounded-full bg-cyan-200/14 blur-sm" />
        <div className={["ogot-unit-command-image relative h-full w-full", selected ? "ogot-unit-command-image--ready" : ""].join(" ")}>
          <AnimatedUnitSprite visual={visual} state={animationState} />
        </div>
        {selected ? <div className="absolute inset-0 rounded-md ring-2 ring-amber-200/75" /> : null}
      </div>
    );
  }

  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_70%,rgba(34,211,238,0.16),rgba(3,10,24,0.18)_66%)]">
      <div className="h-[84%] w-[84%]">
        <GenericUnitMark />
      </div>
      {selected ? <div className="absolute inset-0 rounded-md ring-2 ring-amber-200/75" /> : null}
    </div>
  );
}

function CombatPoint({
  direction,
  value,
  tone = "player",
  size = "bench",
  className = "",
}: {
  direction: string;
  value: number;
  tone?: "player" | "enemy" | "neutral";
  size?: "bench" | "board";
  className?: string;
}) {
  const toneClass =
    tone === "enemy"
      ? "border-rose-100/80 bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.28),rgba(244,63,94,0.44)_48%,rgba(24,5,11,0.96)_100%)] text-rose-50"
      : tone === "player"
        ? "border-cyan-100/82 bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.28),rgba(34,211,238,0.44)_48%,rgba(3,14,25,0.96)_100%)] text-cyan-50"
        : "border-amber-100/82 bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.28),rgba(251,191,36,0.40)_48%,rgba(24,18,5,0.96)_100%)] text-amber-50";

  return (
    <span
      className={[
        "grid place-items-center rounded-full border shadow-[0_8px_18px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.2)]",
        size === "board"
          ? "h-[clamp(1.55rem,2.08vw,2.16rem)] w-[clamp(1.55rem,2.08vw,2.16rem)]"
          : "h-[clamp(1.95rem,2.52vw,2.72rem)] w-[clamp(1.95rem,2.52vw,2.72rem)]",
        toneClass,
        className,
      ].join(" ")}
      aria-label={`${direction} ${value}`}
    >
      <span className={["font-black uppercase leading-none opacity-72", size === "board" ? "text-[clamp(0.36rem,0.46vw,0.46rem)]" : "text-[clamp(0.42rem,0.52vw,0.52rem)]"].join(" ")}>
        {direction}
      </span>
      <span className={["-mt-1 font-black leading-none tabular-nums", size === "board" ? "text-[clamp(0.74rem,0.94vw,0.96rem)]" : "text-[clamp(0.86rem,1.08vw,1.08rem)]"].join(" ")}>
        {value}
      </span>
    </span>
  );
}

function BoardCombatPoint({
  anchor,
  direction,
  value,
  tone,
}: {
  anchor: PointAnchor;
  direction: string;
  value: number;
  tone: "player" | "enemy" | "neutral";
}) {
  return (
    <span
      className="pointer-events-none absolute z-20"
      style={{
        left: `${anchor.x}%`,
        top: `${anchor.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <CombatPoint direction={direction} value={value} tone={tone} size="board" />
    </span>
  );
}

function CombatPointCross({
  sides,
  tone,
}: {
  sides: CardInstance["sides"];
  tone: "player" | "enemy" | "neutral";
}) {
  return (
    <div className="relative h-[clamp(4.65rem,5.7vw,5.9rem)] w-[clamp(4.65rem,5.7vw,5.9rem)] shrink-0">
      <CombatPoint direction="N" value={sides.top} tone={tone} className="absolute left-1/2 top-0 -translate-x-1/2" />
      <CombatPoint direction="E" value={sides.right} tone={tone} className="absolute right-0 top-1/2 -translate-y-1/2" />
      <CombatPoint direction="S" value={sides.bottom} tone={tone} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
      <CombatPoint direction="O" value={sides.left} tone={tone} className="absolute left-0 top-1/2 -translate-y-1/2" />
    </div>
  );
}

function BoardUnitToken({
  card,
  event,
  eventKey,
  eventDirection,
  cell,
}: {
  card: BoardCard;
  event: UnitBoardEvent | null;
  eventKey: string | null;
  eventDirection: BoardEventDirection | null;
  cell: BoardCellLayout;
}) {
  const visual = getUnitVisual(card.archetypeId);
  const tone = card.owner === "enemy" ? "enemy" : "player";
  const [eventMotion, setEventMotion] = useState<UnitAnimationState | null>(null);
  const motionState: UnitAnimationState = eventMotion ?? "idle";
  const unitStyle = {
    left: `${cell.unit.x}%`,
    top: `${cell.unit.y}%`,
    width: `${cell.unit.size}%`,
    height: `${cell.unit.size}%`,
  };

  useEffect(() => {
    if (!visual) {
      setEventMotion(null);
      return;
    }

    if (event === "wasFlipped") {
      setEventMotion("hit");
      const timer = window.setTimeout(() => setEventMotion(null), 720);
      return () => window.clearTimeout(timer);
    }

    if (event === "causedFlip") {
      setEventMotion(causedFlipAnimationState(visual, eventDirection));
      const timer = window.setTimeout(() => setEventMotion(null), visual.animations?.action ? 900 : 760);
      return () => window.clearTimeout(timer);
    }

    setEventMotion(null);
  }, [card.instanceId, event, eventDirection, eventKey, visual]);

  const causedFlipMotion = eventMotion === "happy" || eventMotion === "action" || eventMotion === "actionLeft";

  return (
    <div className="absolute inset-0">
      <div
        className={[
          "absolute -translate-x-1/2 -translate-y-[43%] rounded-full",
          tone === "enemy"
            ? "bg-rose-950/34 shadow-[0_0_24px_rgba(251,113,133,0.2)]"
            : "bg-cyan-950/34 shadow-[0_0_24px_rgba(34,211,238,0.2)]",
        ].join(" ")}
        style={{
          left: `${cell.unit.x}%`,
          top: `${cell.unit.y + 5}%`,
          width: `${cell.unit.size * 0.94}%`,
          height: `${cell.unit.size * 0.55}%`,
        }}
      />
      {visual ? (
        <div
          className={[
            "ogot-board-unit absolute object-contain drop-shadow-[0_14px_16px_rgba(0,0,0,0.55)]",
            causedFlipMotion ? "ogot-board-unit--recent" : "",
            eventMotion === "hit" ? "ogot-board-unit--impact" : "",
          ].join(" ")}
          style={unitStyle}
        >
          <AnimatedUnitSprite visual={visual} state={motionState} />
        </div>
      ) : (
        <div className="ogot-board-unit absolute" style={unitStyle}>
          <GenericUnitMark tone={tone} />
        </div>
      )}
      <BoardCombatPoint anchor={cell.points.top} direction="N" value={card.sides.top} tone={tone} />
      <BoardCombatPoint anchor={cell.points.right} direction="E" value={card.sides.right} tone={tone} />
      <BoardCombatPoint anchor={cell.points.bottom} direction="S" value={card.sides.bottom} tone={tone} />
      <BoardCombatPoint anchor={cell.points.left} direction="O" value={card.sides.left} tone={tone} />
      <div className="pointer-events-none absolute left-1/2 top-[79%] z-30 w-[68%] -translate-x-1/2">
        <FamilyNameBadge family={card.family} size="board" />
      </div>
      {causedFlipMotion ? (
        <div className="absolute inset-[4%] rounded-[0.7rem] border-2 border-amber-200/84 shadow-[0_0_24px_rgba(253,230,138,0.38)]" />
      ) : null}
    </div>
  );
}

function HandBenchCard({
  card,
  selected,
  canInteract,
  onSelect,
}: {
  card: CardInstance;
  selected: boolean;
  canInteract: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!canInteract}
      onClick={onSelect}
      data-testid="player-bench-card"
      className={[
        "relative flex h-full w-full min-w-0 flex-col items-center justify-center gap-[2%] overflow-hidden rounded-lg border px-[3%] py-[2%] transition duration-150",
        selected
          ? "border-amber-100/86 bg-[linear-gradient(180deg,rgba(9,35,50,0.58),rgba(2,9,18,0.36))] shadow-[0_0_30px_rgba(253,230,138,0.25),inset_0_1px_0_rgba(255,255,255,0.11)]"
          : "border-cyan-100/24 bg-[linear-gradient(180deg,rgba(3,18,34,0.32),rgba(2,8,18,0.22))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
        canInteract ? "cursor-pointer hover:-translate-y-1 hover:border-cyan-100/62 hover:bg-cyan-300/10" : "cursor-default opacity-62",
      ].join(" ")}
      aria-label={`${card.name} ${card.sides.top}-${card.sides.right}-${card.sides.bottom}-${card.sides.left}`}
    >
      <div className="flex h-[78%] w-full min-h-0 items-center justify-center gap-[5%]">
        <div className="h-full w-[42%] shrink-0">
          <HandCommandArt card={card} selected={selected} />
        </div>
        <div className="grid h-full w-[46%] shrink-0 place-items-center rounded-md border border-cyan-100/20 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.16),rgba(2,8,18,0.28)_70%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <CombatPointCross sides={card.sides} tone="player" />
        </div>
      </div>
      <div className="flex h-[18%] w-full min-w-0 items-center justify-center">
        <FamilyNameBadge family={card.family} />
      </div>
    </button>
  );
}

function EnemyBench({ count }: { count: number }) {
  return (
    <div className="absolute left-[25.4%] top-[2.5%] flex h-[8.7%] w-[49.2%] items-center justify-center gap-[2.1%]">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={`enemy-bench-${index}`}
          className="relative h-[82%] w-[8.6%] overflow-hidden rounded-md border border-indigo-100/30 bg-[linear-gradient(135deg,rgba(57,39,132,0.72),rgba(5,12,45,0.82))] shadow-[0_8px_18px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.11)]"
        >
          <div className="absolute inset-[13%] rounded-full border border-cyan-100/20" />
          <div className="absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[0.12rem] bg-cyan-100/64 shadow-[0_0_14px_rgba(125,247,255,0.36)]" />
        </div>
      ))}
    </div>
  );
}

function PlayerBench({
  hand,
  selectedCardId,
  canInteract,
  onSelectCard,
}: {
  hand: CardInstance[];
  selectedCardId: string | null;
  canInteract: boolean;
  onSelectCard: (cardInstanceId: string) => void;
}) {
  return (
    <div className="absolute left-[15.8%] top-[83.25%] flex h-[13.25%] w-[68.4%] items-center justify-center gap-[1.15%]">
      {hand.map((card) => (
        <div key={card.instanceId} className="h-full min-w-0 flex-1">
          <HandBenchCard
            card={card}
            selected={selectedCardId === card.instanceId}
            canInteract={canInteract}
            onSelect={() => onSelectCard(card.instanceId)}
          />
        </div>
      ))}
    </div>
  );
}

function ArenaBattlefield({
  match,
  hand,
  selectedCardId,
  canHumanInteract,
  hoveredPosition,
  onCellHover,
  onCellClick,
  onSelectCard,
}: {
  match: MatchState;
  hand: CardInstance[];
  selectedCardId: string | null;
  canHumanInteract: boolean;
  hoveredPosition: Position | null;
  onCellHover: (position: Position | null) => void;
  onCellClick: (position: Position) => void;
  onSelectCard: (cardInstanceId: string) => void;
}) {
  const enemyHandCount =
    match.turn.activePlayer === "enemy"
      ? Math.max(1, match.turn.choices.length)
      : Math.max(2, match.config.cardsPerTurn);

  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden bg-[#020418]">
      <div className="relative" style={ARENA_FRAME_STYLE}>
        <img
          src="/images/game/arena-ollie.png"
          alt=""
          className="absolute inset-0 h-full w-full select-none object-contain"
          draggable={false}
        />

        <EnemyBench count={enemyHandCount} />
        <TraitRail board={match.board} owner="player" />
        <TraitRail board={match.board} owner="enemy" />

        {BOARD_CELLS.map((cell) => {
          const boardCard = match.board[cell.row][cell.col];
          const isHovered = hoveredPosition?.row === cell.row && hoveredPosition?.col === cell.col;
          const canTarget = canHumanInteract && selectedCardId !== null && !boardCard;
          const isLastMoveCell = match.lastMove?.position.row === cell.row && match.lastMove?.position.col === cell.col;
          const flippedImpacts = match.lastMove?.impacts.filter((impact) => impact.result === "flipped") ?? [];
          const didCauseFlip = Boolean(isLastMoveCell && flippedImpacts.length > 0);
          const wasFlipped = flippedImpacts.some((impact) => impact.position.row === cell.row && impact.position.col === cell.col);
          const boardEvent: UnitBoardEvent | null = wasFlipped ? "wasFlipped" : didCauseFlip ? "causedFlip" : null;
          const boardEventDirection =
            didCauseFlip && flippedImpacts[0]
              ? directionBetween({ row: cell.row, col: cell.col }, flippedImpacts[0].position)
              : null;
          const boardEventKey = match.lastMove
            ? `${match.lastMove.cardInstanceId}:${match.lastMove.position.row}:${match.lastMove.position.col}:${flippedImpacts
                .map((impact) => `${impact.position.row},${impact.position.col},${impact.targetOwnerAfterImpact}`)
                .join("|")}`
            : null;

          return (
            <button
              key={`${cell.row}-${cell.col}`}
              type="button"
              disabled={!canTarget}
              data-testid="board-cell"
              data-row={cell.row}
              data-col={cell.col}
              onClick={() => {
                if (canTarget) {
                  onCellClick({ row: cell.row, col: cell.col });
                }
              }}
              onMouseEnter={() => onCellHover({ row: cell.row, col: cell.col })}
              onMouseLeave={() => onCellHover(null)}
              className={[
                "absolute rounded-[0.6rem] transition duration-150",
                canTarget ? "cursor-pointer hover:bg-cyan-100/10" : "cursor-default",
                canTarget && isHovered ? "ring-2 ring-cyan-100/80 shadow-[0_0_26px_rgba(125,247,255,0.5)]" : "",
              ].join(" ")}
              style={{
                left: `${cell.left}%`,
                top: `${cell.top}%`,
                width: `${cell.width}%`,
                height: `${cell.height}%`,
              }}
              aria-label={`Case ${cell.row + 1}-${cell.col + 1}`}
            >
              {boardCard ? (
                <BoardUnitToken
                  card={boardCard}
                  cell={cell}
                  event={boardEvent}
                  eventKey={boardEventKey}
                  eventDirection={boardEventDirection}
                />
              ) : null}
            </button>
          );
        })}

        <PlayerBench hand={hand} selectedCardId={selectedCardId} canInteract={canHumanInteract} onSelectCard={onSelectCard} />
      </div>
    </div>
  );
}

export function BattleStage({
  match,
  hand,
  selectedCardId,
  hoveredPosition,
  canHumanInteract,
  sidePanel,
  labMode = false,
  embedded = false,
  onCellHover,
  onCellClick,
  onSelectCard,
}: BattleStageProps) {
  return (
    <main
      className={
        embedded
          ? "relative flex min-h-[42rem] flex-col overflow-hidden bg-[#020418]"
          : "relative flex h-[100dvh] w-full overflow-hidden bg-[#020418]"
      }
    >
      <ArenaBattlefield
        match={match}
        hand={hand}
        selectedCardId={selectedCardId}
        canHumanInteract={canHumanInteract}
        hoveredPosition={hoveredPosition}
        onCellHover={onCellHover}
        onCellClick={onCellClick}
        onSelectCard={onSelectCard}
      />

      {(labMode || embedded) ? (
        <div className="pointer-events-auto absolute right-3 top-3 z-30 max-h-[28vh] w-[20rem] overflow-y-auto rounded-lg border border-white/10 bg-black/60 p-2 text-white shadow-xl backdrop-blur-md">
          {sidePanel}
        </div>
      ) : null}
    </main>
  );
}
