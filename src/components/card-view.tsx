"use client";

import { getCardArtSrc, getCardSides } from "@/core/engine";
import type { BoardCard, CardInstance } from "@/core/types";

interface CardViewProps {
  card: CardInstance | BoardCard;
  ownerOverride?: BoardCard["owner"] | CardInstance["owner"];
  selected?: boolean;
  dimmed?: boolean;
  onClick?: () => void;
  layout?: "hand" | "board";
  highlightTone?: "placed" | "impact" | "preview" | "flipped";
  annotation?: string | null;
  testId?: string;
  className?: string;
}

const OWNER_STYLES = {
  player: {
    filter: "linear-gradient(180deg,rgba(79,195,247,0.2),rgba(125,247,255,0.1) 38%,rgba(4,16,22,0.18) 100%)",
    boardFilter: "linear-gradient(180deg,rgba(79,195,247,0.36),rgba(125,247,255,0.18) 42%,rgba(4,16,22,0.2) 100%)",
  },
  enemy: {
    filter: "linear-gradient(180deg,rgba(220,50,80,0.18),rgba(180,60,100,0.1) 38%,rgba(30,8,18,0.18) 100%)",
    boardFilter: "linear-gradient(180deg,rgba(220,50,80,0.34),rgba(180,60,100,0.18) 42%,rgba(30,8,18,0.22) 100%)",
  },
} as const;

const HIGHLIGHT_STYLES = {
  placed: "ring-2 ring-cyan-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(103,232,249,0.36)]",
  impact: "ring-2 ring-amber-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(251,191,36,0.34)]",
  preview: "ring-2 ring-violet-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(196,181,253,0.36)]",
  flipped: "ring-2 ring-emerald-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(110,231,183,0.36)]",
} as const;

function rarityFrameClass(card: CardInstance | BoardCard): string {
  if (card.sourceType === "fusion") {
    return "ring-1 ring-violet-200/80 shadow-[0_0_32px_rgba(196,181,253,0.24)]";
  }

  if (card.sourceType === "upgrade") {
    return "ring-1 ring-cyan-200/78 shadow-[0_0_28px_rgba(103,232,249,0.22)]";
  }

  if (card.sourceType === "charm") {
    return "ring-1 ring-fuchsia-200/76 shadow-[0_0_30px_rgba(232,121,249,0.22)]";
  }

  if (card.sourceType === "treasure" || card.rarity === "rare") {
    return "ring-1 ring-amber-200/82 shadow-[0_0_32px_rgba(251,191,36,0.24)]";
  }

  if (card.rarity === "uncommon" || card.sourceType === "reward" || card.sourceType === "enemy-upgrade") {
    return "ring-1 ring-emerald-200/76 shadow-[0_0_28px_rgba(110,231,183,0.2)]";
  }

  return "";
}

function sourceBadge(card: CardInstance | BoardCard): string | null {
  switch (card.sourceType) {
    case "draft":
      return null;
    case "reward":
      return card.rarity === "rare" ? "Rare" : card.rarity === "uncommon" ? "Inhab." : "Butin";
    case "treasure":
      return "Tresor";
    case "upgrade":
      return "+1";
    case "fusion":
      return "Fusion";
    case "enemy-upgrade":
      return card.rarity === "rare" ? "Elite rare" : "Elite";
    case "charm":
      return "Charme";
  }
}

function familyBadge(card: CardInstance | BoardCard): string {
  switch (card.family) {
    case "familiar":
      return "Familier";
    case "demon":
      return "Demon";
    case "human":
      return "Humain";
    case "automaton":
      return "Automate";
    case "revenant":
      return "Revenant";
    case "arcane":
      return "Arcane";
    case "dragon":
      return "Dragon";
    case "renegade":
      return "Renegat";
  }
}

function familyAura(card: CardInstance | BoardCard): string {
  switch (card.family) {
    case "familiar":
      return "radial-gradient(circle at 30% 25%, rgba(110,231,183,0.34), transparent 38%), linear-gradient(160deg, rgba(22,163,74,0.16), transparent 62%)";
    case "demon":
      return "radial-gradient(circle at 34% 22%, rgba(251,113,133,0.42), transparent 38%), linear-gradient(160deg, rgba(127,29,29,0.28), transparent 62%)";
    case "human":
      return "radial-gradient(circle at 30% 24%, rgba(125,211,252,0.36), transparent 38%), linear-gradient(160deg, rgba(30,64,175,0.22), transparent 62%)";
    case "automaton":
      return "radial-gradient(circle at 32% 24%, rgba(228,228,231,0.34), transparent 38%), linear-gradient(160deg, rgba(82,82,91,0.24), transparent 62%)";
    case "revenant":
      return "radial-gradient(circle at 32% 24%, rgba(196,181,253,0.42), transparent 38%), linear-gradient(160deg, rgba(88,28,135,0.26), transparent 62%)";
    case "arcane":
      return "radial-gradient(circle at 32% 24%, rgba(103,232,249,0.42), transparent 38%), linear-gradient(160deg, rgba(14,116,144,0.24), transparent 62%)";
    case "dragon":
      return "radial-gradient(circle at 32% 24%, rgba(251,191,36,0.44), transparent 38%), linear-gradient(160deg, rgba(146,64,14,0.28), transparent 62%)";
    case "renegade":
      return "radial-gradient(circle at 32% 24%, rgba(217,70,239,0.42), transparent 38%), linear-gradient(160deg, rgba(112,26,117,0.26), transparent 62%)";
  }
}

function familyFrameShadow(card: CardInstance | BoardCard): string {
  switch (card.family) {
    case "familiar":
      return "inset 0 0 0 1px rgba(110,231,183,0.26), inset 0 0 36px rgba(16,185,129,0.18)";
    case "demon":
      return "inset 0 0 0 1px rgba(251,113,133,0.28), inset 0 0 36px rgba(225,29,72,0.2)";
    case "human":
      return "inset 0 0 0 1px rgba(125,211,252,0.26), inset 0 0 36px rgba(59,130,246,0.18)";
    case "automaton":
      return "inset 0 0 0 1px rgba(228,228,231,0.24), inset 0 0 36px rgba(113,113,122,0.18)";
    case "revenant":
      return "inset 0 0 0 1px rgba(196,181,253,0.28), inset 0 0 36px rgba(139,92,246,0.18)";
    case "arcane":
      return "inset 0 0 0 1px rgba(103,232,249,0.28), inset 0 0 36px rgba(6,182,212,0.18)";
    case "dragon":
      return "inset 0 0 0 1px rgba(251,191,36,0.3), inset 0 0 36px rgba(245,158,11,0.2)";
    case "renegade":
      return "inset 0 0 0 1px rgba(217,70,239,0.28), inset 0 0 36px rgba(192,38,211,0.18)";
  }
}

function valuePosition(layout: "hand" | "board", position: "top" | "right" | "bottom" | "left"): string {
  if (layout === "board") {
    switch (position) {
      case "top":
        return "top-[3.2%] left-1/2 -translate-x-1/2";
      case "right":
        return "top-1/2 right-[2.8%] -translate-y-1/2";
      case "bottom":
        return "bottom-[3.4%] left-1/2 -translate-x-1/2";
      case "left":
        return "top-1/2 left-[2.8%] -translate-y-1/2";
    }
  }

  switch (position) {
    case "top":
      return "top-[3.6%] left-1/2 -translate-x-1/2";
    case "right":
      return "top-1/2 right-[3%] -translate-y-1/2";
    case "bottom":
      return "bottom-[3.8%] left-1/2 -translate-x-1/2";
    case "left":
      return "top-1/2 left-[3%] -translate-y-1/2";
  }
}

function valueBubbleClass(layout: "hand" | "board", position: "top" | "right" | "bottom" | "left"): string {
  if (layout === "board") {
    return position === "top" || position === "bottom"
      ? "h-[1.34rem] min-w-[1.34rem] rounded-full"
      : "h-[1.34rem] w-[1.34rem] rounded-full";
  }

  return position === "top" || position === "bottom"
    ? "h-[1.72rem] min-w-[1.72rem] rounded-full"
    : "h-[1.72rem] w-[1.72rem] rounded-full";
}

function valueTextClass(layout: "hand" | "board", position: "top" | "right" | "bottom" | "left"): string {
  const sizeClass =
    layout === "board"
      ? position === "top" || position === "bottom"
        ? "text-[1.08rem]"
        : "text-[1.1rem]"
      : position === "top" || position === "bottom"
        ? "text-[1.52rem]"
        : "text-[1.48rem]";

  return [
    "relative z-10 font-serif font-bold leading-none text-[#fff8df]",
    "drop-shadow-[0_0_10px_rgba(255,246,214,0.26)] drop-shadow-[0_3px_8px_rgba(0,0,0,0.88)]",
    "[-webkit-text-stroke:1.6px_rgba(18,10,6,0.98)] [paint-order:stroke_fill]",
    sizeClass,
  ].join(" ");
}

function valueBadgeToneClass(owner: BoardCard["owner"] | CardInstance["owner"]): string {
  return owner === "player"
    ? "rounded-[inherit] border border-cyan-200/66 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.34),rgba(79,195,247,0.96)_72%)] shadow-[0_8px_18px_rgba(0,0,0,0.34),0_0_0_1px_rgba(125,247,255,0.24)]"
    : "rounded-[inherit] border border-rose-200/66 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.34),rgba(220,50,80,0.96)_72%)] shadow-[0_8px_18px_rgba(0,0,0,0.34),0_0_0_1px_rgba(220,50,80,0.24)]";
}

function valueBadgeInnerClass(owner: BoardCard["owner"] | CardInstance["owner"]): string {
  return owner === "player"
    ? "rounded-[inherit] bg-[linear-gradient(180deg,rgba(125,247,255,0.18),rgba(4,16,22,0.08))]"
    : "rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,200,210,0.18),rgba(30,8,18,0.08))]";
}

function valueBadgeClass(layout: "hand" | "board", position: "top" | "right" | "bottom" | "left"): string {
  return [
    "absolute z-20 flex items-center justify-center",
    valuePosition(layout, position),
  ].join(" ");
}

export function CardView({
  card,
  ownerOverride,
  selected = false,
  dimmed = false,
  onClick,
  layout = "hand",
  highlightTone,
  annotation,
  testId,
  className,
}: CardViewProps) {
  const sides = getCardSides(card);
  const artSrc = getCardArtSrc(card);
  const displayOwner = ownerOverride ?? card.owner;
  const ownerStyle = OWNER_STYLES[displayOwner];
  const isBoardLayout = layout === "board";
  const ownershipFilter = isBoardLayout ? ownerStyle.boardFilter : ownerStyle.filter;
  const autoAnnotation = sourceBadge(card);
  const traitAnnotation = card.corruptedBy === displayOwner ? `${familyBadge(card)} + Demon` : familyBadge(card);
  const artMaskStyle = {
    WebkitMaskImage: `url(${artSrc})`,
    maskImage: `url(${artSrc})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  } as const;
  const cardClassName = [
    "group relative h-full w-full overflow-hidden bg-transparent text-left transition-[box-shadow,filter,opacity] duration-200",
    isBoardLayout ? "rounded-[1.35rem]" : "rounded-[1.9rem]",
    "shadow-[0_16px_34px_rgba(0,0,0,0.28)]",
    selected
      ? isBoardLayout
        ? "scale-[1.01] ring-2 ring-amber-200/90 ring-offset-2 ring-offset-[#020a0e]"
        : "ring-2 ring-amber-200/90 ring-offset-2 ring-offset-[#020a0e]"
      : "",
    rarityFrameClass(card),
    highlightTone ? HIGHLIGHT_STYLES[highlightTone] : "",
    dimmed ? "opacity-55" : "",
    onClick ? "cursor-pointer" : "cursor-default",
    className ?? "",
  ].join(" ");

  const content = (
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
        <img
          src={artSrc}
          alt=""
          className="h-full w-full object-contain select-none pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 rounded-[inherit] mix-blend-screen"
          style={{ background: familyAura(card) }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ boxShadow: familyFrameShadow(card) }}
        />
        <div
          className="absolute inset-0 mix-blend-screen"
          style={{ ...artMaskStyle, backgroundImage: ownershipFilter }}
        />

        <span className={valueBadgeClass(layout, "top")}>
            <span className={["relative grid place-items-center", valueBubbleClass(layout, "top")].join(" ")}>
            <span className={["pointer-events-none absolute inset-0", valueBadgeToneClass(displayOwner)].join(" ")} />
            <span className={["pointer-events-none absolute inset-[8%]", valueBadgeInnerClass(displayOwner)].join(" ")} />
            <span className="relative z-10 -translate-y-[0.03em]">
              <span className={valueTextClass(layout, "top")}>{sides.top}</span>
            </span>
          </span>
        </span>
        <span className={valueBadgeClass(layout, "right")}>
          <span className={["relative grid place-items-center", valueBubbleClass(layout, "right")].join(" ")}>
            <span className={["pointer-events-none absolute inset-0", valueBadgeToneClass(displayOwner)].join(" ")} />
            <span className={["pointer-events-none absolute inset-[8%]", valueBadgeInnerClass(displayOwner)].join(" ")} />
            <span className="relative z-10 -translate-y-[0.03em]">
              <span className={valueTextClass(layout, "right")}>{sides.right}</span>
            </span>
          </span>
        </span>
        <span className={valueBadgeClass(layout, "bottom")}>
          <span className={["relative grid place-items-center", valueBubbleClass(layout, "bottom")].join(" ")}>
            <span className={["pointer-events-none absolute inset-0", valueBadgeToneClass(displayOwner)].join(" ")} />
            <span className={["pointer-events-none absolute inset-[8%]", valueBadgeInnerClass(displayOwner)].join(" ")} />
            <span className="relative z-10 -translate-y-[0.03em]">
              <span className={valueTextClass(layout, "bottom")}>{sides.bottom}</span>
            </span>
          </span>
        </span>
        <span className={valueBadgeClass(layout, "left")}>
          <span className={["relative grid place-items-center", valueBubbleClass(layout, "left")].join(" ")}>
            <span className={["pointer-events-none absolute inset-0", valueBadgeToneClass(displayOwner)].join(" ")} />
            <span className={["pointer-events-none absolute inset-[8%]", valueBadgeInnerClass(displayOwner)].join(" ")} />
            <span className="relative z-10 -translate-y-[0.03em]">
              <span className={valueTextClass(layout, "left")}>{sides.left}</span>
            </span>
          </span>
        </span>

        {!isBoardLayout ? (
          <div className="absolute right-[6%] top-[6%] z-20 rounded-full border border-[rgba(79,195,247,0.16)] bg-[rgba(4,16,22,0.7)] px-2.5 py-1 text-[0.4rem] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm">
            {annotation ?? autoAnnotation ?? traitAnnotation}
          </div>
        ) : null}

        {isBoardLayout ? (
          <div className="absolute left-[5.8%] top-[7%] z-20 rounded-full border border-[rgba(79,195,247,0.16)] bg-[rgba(4,16,22,0.7)] px-2 py-0.5 text-[0.34rem] font-semibold uppercase tracking-[0.16em] text-white/82 backdrop-blur-sm">
            {autoAnnotation ?? traitAnnotation}
          </div>
        ) : null}
      </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        data-testid={testId}
        className={cardClassName}
        aria-pressed={selected}
      >
        {content}
      </button>
    );
  }

  return (
    <div data-testid={testId} className={cardClassName} aria-pressed={selected}>
      {content}
    </div>
  );
}
