"use client";

import { cloneCardEffects, formatCardEffect, formatCardEffects, getCardEffectIconLabel } from "@/core/card-effects";
import { getCardArtSrc, getCardSides } from "@/core/engine";
import type { BoardCard, CardEffect, CardInstance, CardSides } from "@/core/types";

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

function effectToneClass(effect: CardEffect): string {
  switch (effect.kind) {
    case "gain-shield":
      return "border-cyan-100/70 bg-cyan-300/22 text-cyan-50 shadow-[0_0_12px_rgba(125,211,252,0.32)]";
    case "deal-damage":
      return "border-rose-100/72 bg-rose-500/24 text-rose-50 shadow-[0_0_12px_rgba(251,113,133,0.3)]";
    case "draw-next-turn":
      return "border-emerald-100/72 bg-emerald-400/22 text-emerald-50 shadow-[0_0_12px_rgba(110,231,183,0.28)]";
    case "gain-mana-next-turn":
      return "border-amber-100/72 bg-amber-400/24 text-amber-50 shadow-[0_0_12px_rgba(251,191,36,0.3)]";
    case "apply-poison":
      return "border-lime-100/72 bg-lime-500/24 text-lime-50 shadow-[0_0_12px_rgba(163,230,53,0.3)]";
    case "boost-self":
      return "border-violet-100/72 bg-violet-400/24 text-violet-50 shadow-[0_0_12px_rgba(196,181,253,0.32)]";
  }
}

function CardEffectGlyph({ effect }: { effect: CardEffect }) {
  const strokeWidth = 2.15;

  if (effect.kind === "gain-shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[62%] w-[62%]">
        <path d="M12 3 19 6v5c0 4.5-2.7 7.6-7 10-4.3-2.4-7-5.5-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      </svg>
    );
  }

  if (effect.kind === "deal-damage") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[62%] w-[62%]">
        <path d="m14 3 7 7-3 1-7 7-5 2 2-5 7-7-1-5Z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
        <path d="m5 19 4-4" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
    );
  }

  if (effect.kind === "draw-next-turn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[62%] w-[62%]">
        <rect x="6" y="4" width="10" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M10 8h6M10 12h4M17 7l2 1v12H9" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (effect.kind === "gain-mana-next-turn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[62%] w-[62%]">
        <path d="m13 2-7 11h5l-1 9 8-12h-5l1-8Z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      </svg>
    );
  }

  if (effect.kind === "apply-poison") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[62%] w-[62%]">
        <path d="M12 3c3 4 5.5 6.9 5.5 10.1A5.5 5.5 0 0 1 12 18.6a5.5 5.5 0 0 1-5.5-5.5C6.5 9.9 9 7 12 3Z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
        <path d="M9.2 20.5h5.6M10 13h.01M14 13h.01" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[62%] w-[62%]">
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

function EffectIconTray({ effects }: { effects: CardEffect[] }) {
  if (effects.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-x-[9%] bottom-[7.2%] z-30 flex items-center justify-center gap-1">
      {effects.slice(0, 3).map((effect, index) => {
        const label = getCardEffectIconLabel(effect);
        const tooltip = formatCardEffect(effect);
        return (
          <span key={`${effect.kind}-${effect.trigger}-${index}`} className="group/effect relative">
            <span
              className={[
                "grid h-6 w-6 place-items-center rounded-full border backdrop-blur-sm transition-transform duration-150 group-hover/effect:scale-110 sm:h-7 sm:w-7",
                effectToneClass(effect),
              ].join(" ")}
              data-testid="card-effect-icon"
              title={tooltip}
              aria-label={tooltip}
            >
              <CardEffectGlyph effect={effect} />
            </span>
            {effect.requiredFamilyCount ? (
              <span className="pointer-events-none absolute -right-1 -top-1 rounded-full border border-amber-100/70 bg-[#211205] px-1 text-[0.42rem] font-black leading-3 text-amber-100 shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                C{effect.requiredFamilyCount}
              </span>
            ) : null}
            {"minFlips" in effect && effect.minFlips ? (
              <span className="pointer-events-none absolute -left-1 -top-1 rounded-full border border-white/60 bg-black/72 px-1 text-[0.42rem] font-black leading-3 text-white shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                {effect.minFlips}+
              </span>
            ) : null}
            <span className="ogot-effect-tooltip pointer-events-none absolute bottom-full left-1/2 mb-2 hidden text-center font-semibold leading-snug group-hover/effect:block">
              {tooltip}
            </span>
          </span>
        );
      })}
      {effects.length > 3 ? (
        <span className="grid h-6 w-6 place-items-center rounded-full border border-white/55 bg-black/62 text-[0.58rem] font-black text-white sm:h-7 sm:w-7">
          +{effects.length - 3}
        </span>
      ) : null}
    </div>
  );
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
  const effects = cloneCardEffects(card.effects);
  const effectText = formatCardEffects(card);
  const ariaLabel = `${card.name} ${sides.top}-${sides.right}-${sides.bottom}-${sides.left}${effectText ? `. ${effectText}` : ""}`;
  const cardClassName = [
    "group relative h-full w-full overflow-visible bg-transparent text-left transition-[box-shadow,filter,opacity] duration-200",
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
    <div className="absolute inset-0 overflow-visible rounded-[inherit]">
      <img
        src={artSrc}
        alt=""
        className="ogot-card-art-image h-full w-full select-none rounded-[inherit] object-cover"
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

      <span
        className={[
          "pointer-events-none absolute left-[7.5%] top-[7.5%] z-30 grid place-items-center rounded-full border border-sky-100/80 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.42),rgba(56,189,248,0.58)_48%,rgba(5,18,34,0.96)_100%)] font-black leading-none text-sky-50 shadow-[0_8px_18px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.28)]",
          isBoardLayout ? "h-6 w-6 text-[0.72rem]" : "h-8 w-8 text-[0.92rem]",
        ].join(" ")}
        title={`${card.manaCost} mana`}
      >
        {card.manaCost}
      </span>

      {!isBoardLayout ? <EffectIconTray effects={effects} /> : null}
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
