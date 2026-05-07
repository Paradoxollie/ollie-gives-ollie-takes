"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import { CardView } from "@/components/card-view";
import { CARD_FAMILY_DEFINITIONS, countBoardFamilies } from "@/core";
import { getFamilyCrestArtSrc } from "@/core/config/cardArt";
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

function SideAssetRail({
  board,
  owner,
  variant,
}: {
  board: MatchState["board"];
  owner: PlayerId;
  variant: "bonus" | "badges";
}) {
  const counts = countBoardFamilies(board, owner);
  const totalControlled = board.flat().filter((card) => card?.owner === owner).length;
  const sideClass = variant === "bonus" ? "left-[1.15%]" : "right-[1.15%]";
  const panelSrc = variant === "bonus" ? "/images/ui/panels/bonus-column.png" : "/images/ui/panels/badges-column.png";
  const title = variant === "bonus" ? "Bonus du joueur" : "Badges adverses";

  return (
    <aside
      className={[
        "ogot-trait-rail pointer-events-none absolute top-[17.2%] z-30 h-[64.5%] w-[17.1%] overflow-hidden text-white drop-shadow-[0_20px_28px_rgba(0,0,0,0.46)]",
        sideClass,
      ].join(" ")}
      aria-label={title}
    >
      <img src={panelSrc} alt="" className="absolute inset-0 h-full w-full select-none object-contain" draggable={false} />

      <div className="absolute left-[19%] right-[19%] top-[14.4%] bottom-[7.8%] flex flex-col justify-around gap-[0.8%]">
        {ACTIVE_FAMILIES.map((family) => {
          const definition = CARD_FAMILY_DEFINITIONS[family];
          const count = counts[family];
          const activeThreshold = [...definition.thresholds].reverse().find((threshold) => count >= threshold.count);
          const nextThreshold = definition.thresholds.find((threshold) => count < threshold.count);
          const displayedThreshold = activeThreshold ?? nextThreshold ?? definition.thresholds[definition.thresholds.length - 1];
          const isActive = Boolean(activeThreshold);
          const badgeSrc = getFamilyCrestArtSrc(family);

          return (
            <section
              key={`${owner}-${family}`}
              title={`${definition.label}: ${definition.identity}. ${displayedThreshold.effect}. Controle ${count}. Total ${totalControlled}/9.`}
              className={[
                "relative mx-auto grid h-[14.4%] w-full place-items-center transition-[filter,opacity,transform] duration-200",
                isActive ? "opacity-100 saturate-125" : "opacity-48 grayscale-[35%]",
              ].join(" ")}
            >
              <img
                src={badgeSrc}
                alt=""
                className="h-[94%] w-[94%] select-none object-contain drop-shadow-[0_0.45rem_0.35rem_rgba(0,0,0,0.48)]"
                draggable={false}
              />
              <span
                className={[
                  "absolute right-[7%] top-[8%] grid h-[clamp(1rem,1.35vw,1.45rem)] min-w-[clamp(1rem,1.35vw,1.45rem)] place-items-center rounded-full border px-[0.22rem] text-[clamp(0.52rem,0.72vw,0.8rem)] font-black leading-none tabular-nums shadow-[0_0.25rem_0.5rem_rgba(0,0,0,0.46)]",
                  isActive ? FAMILY_BADGE_CLASS[family] : "border-white/18 bg-black/54 text-white/68",
                ].join(" ")}
              >
                {count}
              </span>
              <span className="sr-only">
                {displayedThreshold.label} {count}/{displayedThreshold.count}
              </span>
            </section>
          );
        })}
      </div>
    </aside>
  );
}

function ChampionHealthBar({
  match,
  owner,
}: {
  match: MatchState;
  owner: PlayerId;
}) {
  const champion = match.champions[owner];
  const maxHealth = Math.max(1, champion.maxHealth);
  const currentHealth = Math.max(0, champion.health);
  const healthPercent = Math.max(0, Math.min(100, (currentHealth / maxHealth) * 100));
  const isPlayer = owner === "player";
  const frameSrc = isPlayer ? "/images/ui/hud/player-health.png" : "/images/ui/hud/enemy-health.png";
  const sideClass = isPlayer ? "left-[1.65%]" : "right-[1.65%]";
  const fillClass = isPlayer
    ? "bg-[linear-gradient(90deg,#52d728,#b8ff54_58%,#f8ffd3)] shadow-[0_0_0.55rem_rgba(132,255,62,0.42)]"
    : "bg-[linear-gradient(90deg,#fa2727,#ff5858_58%,#ffd0b3)] shadow-[0_0_0.55rem_rgba(255,68,68,0.4)]";

  return (
    <div
      className={["ogot-health-hud pointer-events-none absolute top-[8.15%] z-40 w-[23.5%] drop-shadow-[0_0.65rem_0.8rem_rgba(0,0,0,0.38)]", sideClass].join(" ")}
      aria-label={`${isPlayer ? "Vie du joueur" : "Vie de l'ennemi"} ${currentHealth} sur ${maxHealth}`}
    >
      <img src={frameSrc} alt="" className="h-auto w-full select-none" draggable={false} />
      <div className="absolute left-[24.2%] top-[49.5%] h-[14.2%] w-[49.6%] overflow-hidden rounded-full bg-black/66 shadow-[inset_0_0_0.55rem_rgba(0,0,0,0.75)]">
        <div
          className={["h-full rounded-full transition-[width] duration-300", fillClass, currentHealth / maxHealth <= 0.25 ? "hp-low-pulse" : ""].join(" ")}
          style={{ width: `${healthPercent}%` }}
        />
      </div>
      <div className="absolute left-[74.4%] top-[35.8%] flex h-[29%] w-[22.5%] items-center justify-center rounded-[0.2rem] bg-[#141212]/95 px-[2%] font-serif text-[clamp(0.42rem,0.74vw,0.78rem)] font-black leading-none text-[#fff2d6] shadow-[inset_0_0_0.42rem_rgba(0,0,0,0.86)] [text-shadow:0_2px_3px_rgba(0,0,0,0.9)]">
        {currentHealth} / {maxHealth}
      </div>
    </div>
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

function FamilyCrestMark({
  family,
  tone = "player",
}: {
  family: CardFamily;
  tone?: "player" | "enemy" | "neutral";
}) {
  const accentColor =
    tone === "enemy"
      ? "linear-gradient(135deg, rgba(255,228,230,0.96), rgba(251,113,133,0.86) 54%, rgba(254,215,170,0.74))"
      : tone === "neutral"
        ? "linear-gradient(135deg, rgba(254,243,199,0.96), rgba(190,242,100,0.7) 54%, rgba(165,243,252,0.72))"
        : "linear-gradient(135deg, rgba(254,243,199,0.96), rgba(94,234,212,0.78) 54%, rgba(167,243,208,0.72))";
  const glowColor =
    tone === "enemy"
      ? "0 0 22px rgba(251,113,133,0.26)"
      : tone === "neutral"
        ? "0 0 22px rgba(251,191,36,0.22)"
        : "0 0 22px rgba(125,247,255,0.24)";
  const crestSrc = getFamilyCrestArtSrc(family);

  return (
    <div className="relative grid h-full w-full place-items-center">
      <div
        className="absolute inset-[6%] rounded-full border-2 border-white/42"
        style={{
          background: `radial-gradient(circle at 35% 24%, rgba(255,255,255,0.86), transparent 24%), ${accentColor}`,
          boxShadow: `${glowColor}, inset 0 1px 0 rgba(255,255,255,0.4)`,
        }}
      />
      <div
        className="absolute inset-[14%] rounded-full border border-black/35 bg-[radial-gradient(circle_at_50%_40%,rgba(8,12,18,0.22),rgba(4,6,10,0.72)_76%)]"
        style={{ boxShadow: "inset 0 0 18px rgba(0,0,0,0.5)" }}
      />
      <img
        src={crestSrc}
        alt=""
        className="relative z-10 h-[76%] w-[76%] select-none object-contain drop-shadow-[0_0.45rem_0.45rem_rgba(0,0,0,0.58)]"
        draggable={false}
      />
      <div className="absolute left-1/2 top-[77%] h-[12%] w-[58%] -translate-x-1/2 rounded-full bg-black/34 blur-sm" />
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
          <FamilyCrestMark family={card.family} tone={tone} />
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
        "ogot-hand-card relative h-full aspect-[2/3] min-w-0 overflow-visible rounded-[0.72rem] border p-[1.5%] transition duration-150",
        selected
          ? "ogot-hand-card--selected border-amber-100/88 bg-amber-200/10 shadow-[0_0_32px_rgba(253,230,138,0.28),0_12px_28px_rgba(0,0,0,0.42)]"
          : "border-cyan-100/22 bg-black/18 shadow-[0_10px_24px_rgba(0,0,0,0.34)]",
        canInteract ? "cursor-pointer hover:-translate-y-1 hover:border-cyan-100/64" : "cursor-default opacity-62",
      ].join(" ")}
      aria-label={`${card.name} ${card.sides.top}-${card.sides.right}-${card.sides.bottom}-${card.sides.left}`}
    >
      <CardView card={card} layout="board" className="h-full w-full" selected={selected} />
    </button>
  );
}

function EnemyBench({ count }: { count: number }) {
  return (
    <div className="ogot-enemy-bench absolute left-[25.4%] top-[2.5%] flex h-[8.7%] w-[49.2%] items-center justify-center gap-[2.1%]">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={`enemy-bench-${index}`}
          className="relative h-[90%] aspect-[2/3] overflow-hidden rounded-md border border-amber-100/28 bg-black/30 shadow-[0_8px_18px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)]"
        >
          <img src="/images/ui/bench-card-back.png" alt="" className="h-full w-full select-none object-cover" draggable={false} />
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
    <div className="ogot-player-bench absolute left-[15.8%] top-[82.65%] flex h-[14.15%] w-[68.4%] items-center justify-center gap-[1.25%]">
      {hand.map((card) => (
        <div key={card.instanceId} className="flex h-full min-w-0 flex-1 justify-center">
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
    <div className="ogot-arena-stage absolute inset-0 grid place-items-center overflow-hidden bg-[#020418]">
      <div className="ogot-arena-frame relative">
        <img
          src="/images/game/arena-ollie.png"
          alt=""
          className="absolute inset-0 h-full w-full select-none object-contain"
          draggable={false}
        />

        <ChampionHealthBar match={match} owner="player" />
        <ChampionHealthBar match={match} owner="enemy" />
        <EnemyBench count={enemyHandCount} />
        <SideAssetRail board={match.board} owner="player" variant="bonus" />
        <SideAssetRail board={match.board} owner="enemy" variant="badges" />

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
