"use client";

import { getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import type { LuckyCharmId } from "@/core/types";

import { GameSigilIcon } from "@/components/game-sigil-icon";

type EffectIconId = Parameters<typeof GameSigilIcon>[0]["id"];
type EffectTone = "legendary" | "rare" | "common" | "enemy-passive" | "enemy-active";

interface CharmBuffActionState {
  disabled?: boolean;
  onClick?: () => void;
  statusLabel?: string | null;
}

export interface BuffEntry {
  id: string;
  iconId: EffectIconId;
  name: string;
  description: string;
  secondaryText?: string | null;
  statusLabel?: string | null;
  tone?: EffectTone;
  disabled?: boolean;
  onClick?: () => void;
}

interface CharmBuffBarProps {
  charmIds?: LuckyCharmId[];
  actions?: Partial<Record<LuckyCharmId, CharmBuffActionState>>;
  entries?: BuffEntry[];
  className?: string;
  emptyLabel?: string;
  title?: string;
  tooltipSide?: "top" | "bottom";
  tooltipAlign?: "left" | "center";
}

function toneClass(tone: EffectTone): string {
  switch (tone) {
    case "legendary":
      return "border-amber-200/30 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),rgba(20,14,8,0.92)_72%)] text-amber-50";
    case "rare":
      return "border-cyan-200/26 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),rgba(7,16,30,0.92)_72%)] text-cyan-50";
    case "enemy-passive":
      return "border-fuchsia-200/28 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.18),rgba(18,10,28,0.94)_74%)] text-fuchsia-50";
    case "enemy-active":
      return "border-rose-200/28 bg-[radial-gradient(circle_at_top,rgba(251,113,133,0.18),rgba(26,10,14,0.94)_74%)] text-rose-50";
    default:
      return "border-emerald-200/24 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.16),rgba(8,18,20,0.92)_72%)] text-emerald-50";
  }
}

function tooltipClass(side: "top" | "bottom", align: "left" | "center"): string {
  const vertical =
    side === "top"
      ? "bottom-[calc(100%+0.75rem)] translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0"
      : "top-[calc(100%+0.75rem)] -translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0";
  const horizontal = align === "left" ? "left-0" : "left-1/2 -translate-x-1/2";
  return ["ogot-tooltip", "w-[18rem] max-w-[calc(100vw-2rem)]", horizontal, vertical, "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"].join(" ");
}

function resolveEntries(
  charmIds: LuckyCharmId[] | undefined,
  actions: Partial<Record<LuckyCharmId, CharmBuffActionState>>,
  entries: BuffEntry[] | undefined,
): BuffEntry[] {
  if (entries && entries.length > 0) {
    return entries;
  }

  return (charmIds ?? []).map((charmId) => {
    const charm = getLuckyCharmDefinition(charmId);
    const action = actions[charmId];

    return {
      id: charm.id,
      iconId: charm.icon,
      name: charm.name,
      description: charm.description,
      secondaryText: `Malus: ${charm.drawback}`,
      statusLabel: action?.statusLabel ?? charm.rarity,
      tone: charm.rarity,
      disabled: action?.disabled,
      onClick: action?.onClick,
    };
  });
}

export function CharmBuffBar({
  charmIds = [],
  actions = {},
  entries,
  className,
  emptyLabel = "Aucun effet actif",
  title = "Effets",
  tooltipSide = "bottom",
  tooltipAlign = "center",
}: CharmBuffBarProps) {
  const resolvedEntries = resolveEntries(charmIds, actions, entries);

  return (
    <section
      className={[
        "ogot-mmo-frame flex max-w-full flex-wrap items-center gap-2 rounded-[1.2rem] px-2.5 py-2 text-white shadow-[0_18px_56px_rgba(4,10,8,0.34)]",
        className ?? "",
      ].join(" ")}
    >
      <div className="mr-1 min-w-0 rounded-[1rem] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(6,20,28,0.94),rgba(2,10,14,0.94))] px-3 py-2 text-left shadow-[inset_0_1px_0_rgba(125,247,255,0.04)]">
        <p className="text-[0.42rem] uppercase tracking-[0.28em] text-cyan-200/50">{title}</p>
        <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white">
          {resolvedEntries.length > 0 ? `${resolvedEntries.length} actifs` : "Aucun"}
        </p>
      </div>

      <div className="flex max-w-full flex-wrap items-center gap-2 overflow-visible">
        {resolvedEntries.length > 0 ? (
          resolvedEntries.map((entry) => {
            const isInteractive = Boolean(entry.onClick);
            const content = (
              <>
                <span className={["ogot-buff-slot", toneClass(entry.tone ?? "common"), entry.disabled ? "opacity-55" : ""].join(" ")}>
                  <GameSigilIcon id={entry.iconId} className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span
                    className={[
                      "absolute right-1.5 top-1.5 h-2 w-2 rounded-full border border-black/20",
                      entry.disabled ? "bg-white/22" : isInteractive ? "bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.72)]" : "bg-emerald-200/80",
                    ].join(" ")}
                  />
                </span>
                <span className={tooltipClass(tooltipSide, tooltipAlign)}>
                  <span className="block text-[0.48rem] uppercase tracking-[0.22em] text-white/54">{entry.statusLabel ?? "Effet"}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{entry.name}</span>
                  <span className="mt-2 block text-[0.72rem] leading-5 text-white/86">{entry.description}</span>
                  {entry.secondaryText ? (
                    <span className="mt-2 block text-[0.72rem] leading-5 text-amber-50/82">{entry.secondaryText}</span>
                  ) : null}
                </span>
              </>
            );

            if (entry.onClick) {
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={entry.onClick}
                  disabled={entry.disabled}
                  className="group relative shrink-0 rounded-[1rem] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(6,20,28,0.92),rgba(2,10,14,0.94))] p-1.5 text-left backdrop-blur-md transition hover:border-cyan-200/30 hover:bg-white/8 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {content}
                </button>
              );
            }

            return (
              <div
                key={entry.id}
                className="group relative shrink-0 rounded-[1rem] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(6,20,28,0.92),rgba(2,10,14,0.94))] p-1.5 text-left backdrop-blur-md"
              >
                {content}
              </div>
            );
          })
        ) : (
          <div className="rounded-[1rem] border border-dashed border-white/12 bg-white/[0.04] px-3 py-2 text-[0.72rem] text-white/56">
            {emptyLabel}
          </div>
        )}
      </div>
    </section>
  );
}
