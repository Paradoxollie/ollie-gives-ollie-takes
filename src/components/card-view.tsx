"use client";

import { getCardArtSrc, getCardSides } from "@/core/engine";
import type { BoardCard, CardInstance, CardSides } from "@/core/types";

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

const HIGHLIGHT_STYLES = {
  placed: "ring-2 ring-cyan-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(103,232,249,0.36)]",
  impact: "ring-2 ring-amber-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(251,191,36,0.34)]",
  preview: "ring-2 ring-violet-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(196,181,253,0.36)]",
  flipped: "ring-2 ring-emerald-300/90 ring-offset-2 ring-offset-[#020a0e] shadow-[0_0_50px_rgba(110,231,183,0.36)]",
} as const;

const CARD_SIDE_POSITIONS = ["top", "right", "bottom", "left"] as const;

type CardSidePosition = (typeof CARD_SIDE_POSITIONS)[number];

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

function valuePosition(position: CardSidePosition): string {
  switch (position) {
    case "top":
      return "left-1/2 top-[6.05%] -translate-x-1/2 -translate-y-1/2";
    case "right":
      return "left-[91.35%] top-1/2 -translate-x-1/2 -translate-y-1/2";
    case "bottom":
      return "left-1/2 top-[93.7%] -translate-x-1/2 -translate-y-1/2";
    case "left":
      return "left-[8.65%] top-1/2 -translate-x-1/2 -translate-y-1/2";
  }
}

function valueTextClass(layout: "hand" | "board"): string {
  const isHand = layout === "hand";

  return [
    "font-serif font-black leading-none tabular-nums text-[#fff5c8]",
    isHand
      ? "[-webkit-text-stroke:1.85px_rgba(10,5,2,0.99)]"
      : "[-webkit-text-stroke:1.25px_rgba(20,10,3,0.96)]",
    "[paint-order:stroke_fill]",
    isHand
      ? "[text-shadow:0_1px_0_rgba(93,45,8,0.98),0_0_3px_rgba(0,0,0,0.96),0_0_7px_rgba(255,244,204,0.72),0_3px_8px_rgba(0,0,0,0.94)]"
      : "[text-shadow:0_1px_0_rgba(93,45,8,0.95),0_0_7px_rgba(255,244,204,0.66),0_3px_8px_rgba(0,0,0,0.92)]",
    layout === "board" ? "text-[clamp(0.72rem,1.15vw,1.08rem)]" : "text-[clamp(1.05rem,2.05vw,1.72rem)]",
  ].join(" ");
}

function sideValue(sides: CardSides, position: CardSidePosition): number {
  return sides[position];
}

export function CardView({
  card,
  selected = false,
  dimmed = false,
  onClick,
  layout = "hand",
  highlightTone,
  testId,
  className,
}: CardViewProps) {
  const sides = getCardSides(card);
  const artSrc = getCardArtSrc(card);
  const isBoardLayout = layout === "board";
  const ariaLabel = `${card.name} ${sides.top}-${sides.right}-${sides.bottom}-${sides.left}`;
  const cardClassName = [
    "group relative h-full w-full overflow-hidden bg-transparent text-left transition-[box-shadow,filter,opacity] duration-200",
    isBoardLayout ? "rounded-[1.15rem]" : "rounded-[1.55rem]",
    "shadow-[0_16px_34px_rgba(0,0,0,0.3)]",
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
    <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <img
        src={artSrc}
        alt=""
        className="ogot-card-art-image h-full w-full select-none object-cover"
        draggable={false}
      />

      {CARD_SIDE_POSITIONS.map((position) => (
        <span
          key={position}
          className={["pointer-events-none absolute z-20 grid min-h-[1.15em] min-w-[1.15em] place-items-center", valuePosition(position)].join(" ")}
        >
          <span className={valueTextClass(layout)}>{sideValue(sides, position)}</span>
        </span>
      ))}
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        data-testid={testId}
        className={cardClassName}
        aria-label={ariaLabel}
        aria-pressed={selected}
      >
        {content}
      </button>
    );
  }

  return (
    <div data-testid={testId} className={cardClassName} aria-label={ariaLabel} aria-pressed={selected}>
      {content}
    </div>
  );
}
