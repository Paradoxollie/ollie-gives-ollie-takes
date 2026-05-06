"use client";

import { useState } from "react";

import { getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import type { AdventureCharmOfferState, LuckyCharmId } from "@/core/types";

import { GameSigilIcon } from "@/components/game-sigil-icon";

interface AdventureCharmOverlayProps {
  charmOffer: AdventureCharmOfferState;
  ownedCharmIds: LuckyCharmId[];
  onChooseCharm: (charmId: LuckyCharmId) => void;
  onSkip: () => void;
}

function rarityLabel(rarity: ReturnType<typeof getLuckyCharmDefinition>["rarity"]): string {
  switch (rarity) {
    case "common":
      return "Commun";
    case "rare":
      return "Rare";
    case "legendary":
      return "Legendaire";
  }
}

function rarityColors(rarity: ReturnType<typeof getLuckyCharmDefinition>["rarity"]) {
  switch (rarity) {
    case "common":
      return {
        border: "border-emerald-400/40",
        borderHover: "border-emerald-400/70",
        glow: "shadow-[0_0_60px_rgba(52,211,153,0.25),0_0_120px_rgba(52,211,153,0.1)]",
        badge: "bg-emerald-500/20 text-emerald-200 border-emerald-400/40",
        badgeGlow: "shadow-[0_0_12px_rgba(52,211,153,0.4)]",
        iconBg: "bg-emerald-500/10",
        iconBorder: "border-emerald-400/20",
        iconGlow: "shadow-[0_0_30px_rgba(52,211,153,0.2)]",
        btnBg: "bg-emerald-500/15 border-emerald-400/40 text-emerald-200",
        btnHover: "bg-emerald-500/30 border-emerald-400/70 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.3)]",
        radial: "rgba(52,211,153,0.12)",
        shimmer: "rgba(52,211,153,0.08)",
        particle: "bg-emerald-400",
      };
    case "rare":
      return {
        border: "border-cyan-400/40",
        borderHover: "border-cyan-400/70",
        glow: "shadow-[0_0_60px_rgba(79,195,247,0.3),0_0_120px_rgba(79,195,247,0.12)]",
        badge: "bg-cyan-500/20 text-cyan-200 border-cyan-400/40",
        badgeGlow: "shadow-[0_0_12px_rgba(79,195,247,0.4)]",
        iconBg: "bg-cyan-500/10",
        iconBorder: "border-cyan-400/20",
        iconGlow: "shadow-[0_0_30px_rgba(79,195,247,0.25)]",
        btnBg: "bg-cyan-500/15 border-cyan-400/40 text-cyan-200",
        btnHover: "bg-cyan-500/30 border-cyan-400/70 text-cyan-100 shadow-[0_0_20px_rgba(79,195,247,0.3)]",
        radial: "rgba(79,195,247,0.12)",
        shimmer: "rgba(79,195,247,0.08)",
        particle: "bg-cyan-400",
      };
    case "legendary":
      return {
        border: "border-amber-400/40",
        borderHover: "border-amber-400/70",
        glow: "shadow-[0_0_60px_rgba(251,191,36,0.3),0_0_120px_rgba(251,191,36,0.12)]",
        badge: "bg-amber-500/20 text-amber-200 border-amber-400/40",
        badgeGlow: "shadow-[0_0_12px_rgba(251,191,36,0.4)]",
        iconBg: "bg-amber-500/10",
        iconBorder: "border-amber-400/20",
        iconGlow: "shadow-[0_0_30px_rgba(251,191,36,0.25)]",
        btnBg: "bg-amber-500/15 border-amber-400/40 text-amber-200",
        btnHover: "bg-amber-500/30 border-amber-400/70 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.3)]",
        radial: "rgba(251,191,36,0.12)",
        shimmer: "rgba(251,191,36,0.1)",
        particle: "bg-amber-400",
      };
  }
}

/* ---------- tiny seeded‑random for particles ---------- */
function seededPositions(count: number) {
  const out: { x: number; y: number; size: number; delay: number; duration: number }[] = [];
  for (let i = 0; i < count; i++) {
    out.push({
      x: ((i * 37 + 13) % 100),
      y: ((i * 53 + 7) % 100),
      size: 2 + (i % 3),
      delay: (i * 0.7) % 6,
      duration: 4 + (i % 4),
    });
  }
  return out;
}

const PARTICLES = seededPositions(30);

export function AdventureCharmOverlay({
  charmOffer,
  ownedCharmIds,
  onChooseCharm,
  onSkip,
}: AdventureCharmOverlayProps) {
  const [hoveredId, setHoveredId] = useState<LuckyCharmId | null>(null);

  return (
    <>
      {/* ===================== CSS KEYFRAMES ===================== */}
      <style>{`
        @keyframes charm-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes charm-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes charm-pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes charm-breathe {
          0%, 100% {
            text-shadow: 0 0 20px rgba(79,195,247,0.3), 0 0 60px rgba(79,195,247,0.1);
          }
          50% {
            text-shadow: 0 0 30px rgba(79,195,247,0.6), 0 0 80px rgba(79,195,247,0.25), 0 4px 20px rgba(0,0,0,0.5);
          }
        }
        @keyframes charm-particle-drift {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.15;
          }
          25% {
            transform: translateY(-15px) translateX(5px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px) translateX(-3px);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-20px) translateX(8px);
            opacity: 0.5;
          }
        }
        @keyframes charm-radial-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes charm-badge-pulse {
          0%, 100% { box-shadow: 0 0 8px currentColor; }
          50% { box-shadow: 0 0 16px currentColor; }
        }
        @keyframes charm-card-entrance {
          0% { opacity: 0; transform: translateY(40px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes charm-title-entrance {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes charm-divider-expand {
          0% { width: 0; opacity: 0; }
          100% { width: 100%; opacity: 1; }
        }
        .charm-card-shimmer {
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(255,255,255,0.06) 45%,
            rgba(255,255,255,0.12) 50%,
            rgba(255,255,255,0.06) 55%,
            transparent 70%
          );
          background-size: 200% 100%;
        }
        .charm-card-shimmer:hover {
          animation: charm-shimmer 1.5s ease-in-out;
        }
      `}</style>

      <div className="relative flex h-full min-h-0 flex-col items-center justify-start overflow-y-auto overflow-x-hidden bg-black/80 p-3 backdrop-blur-md sm:p-4">

        {/* =================== CINEMATIC BACKDROP =================== */}
        {/* Primary radial glow - pulses */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(79,195,247,0.1), rgba(6,14,22,0.0) 70%)",
            animation: "charm-radial-pulse 4s ease-in-out infinite",
          }}
        />
        {/* Secondary warm underglow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(147,51,234,0.06), transparent 60%)",
          }}
        />
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* =================== PARTICLES =================== */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full bg-cyan-400/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `charm-particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}

        {/* =================== TITLE =================== */}
        <div
          className="relative z-10 mb-4 text-center sm:mb-5"
          style={{ animation: "charm-title-entrance 0.8s ease-out both" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-cyan-300/50">
            Debut de la run
          </p>
          <h2
            className="mt-2 font-serif text-[2.2rem] leading-none font-bold text-white sm:text-[3.1rem]"
            style={{ animation: "charm-breathe 3s ease-in-out infinite" }}
          >
            Choisis ton porte-bonheur
          </h2>
          {/* Decorative divider */}
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-cyan-400/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-cyan-400/60" />
            <div className="h-px w-20 bg-cyan-400/30" />
            <div className="h-1.5 w-1.5 rotate-45 bg-cyan-400/60" />
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-cyan-400/40" />
          </div>
          <p className="mt-3 max-w-[32rem] text-[0.8rem] leading-6 text-white/40">
            Chaque breloque te donne un avantage... et un prix a payer.
          </p>
        </div>

        {/* =================== CHARM CARDS =================== */}
        <div className="relative z-10 flex w-full max-w-[56rem] flex-col items-center gap-3 px-2 sm:flex-row sm:items-stretch sm:gap-4">
          {charmOffer.options.map((option, cardIndex) => {
            const charm = getLuckyCharmDefinition(option.charmId);
            const c = rarityColors(charm.rarity);
            const isHovered = hoveredId === option.charmId;

            return (
              <button
                key={option.charmId}
                type="button"
                data-testid={`adventure-charm-${option.charmId}`}
                onClick={() => onChooseCharm(option.charmId)}
                onMouseEnter={() => setHoveredId(option.charmId)}
                onMouseLeave={() => setHoveredId(null)}
                className={[
                  "charm-card-shimmer group relative flex w-full sm:w-0 sm:flex-1 flex-col overflow-hidden rounded-2xl border text-left",
                  "bg-[rgba(6,12,24,0.92)] backdrop-blur-sm",
                  "transition-all duration-500 ease-out",
                  isHovered ? `${c.borderHover} ${c.glow} -translate-y-3 scale-[1.05]` : `${c.border} shadow-[0_16px_50px_rgba(0,0,0,0.6)]`,
                ].join(" ")}
                style={{
                  animation: `charm-card-entrance 0.6s ease-out ${0.15 * cardIndex + 0.3}s both`,
                  perspective: "800px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* ---------- Card inner glow (top) ---------- */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${c.radial}, transparent 70%)`,
                    opacity: isHovered ? 1 : 0.3,
                  }}
                />

                {/* ---------- Animated border glow line ---------- */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: `inset 0 0 30px ${c.radial}`,
                    opacity: isHovered ? 0.8 : 0,
                    transition: "opacity 0.5s",
                  }}
                />

                {/* ---------- Card content ---------- */}
                <div className="relative z-10 flex flex-1 flex-col p-4">

                  {/* Rarity badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={[
                        "rounded-full border px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em]",
                        c.badge,
                        isHovered ? c.badgeGlow : "",
                      ].join(" ")}
                      style={{
                        animation: isHovered ? "charm-badge-pulse 1.5s ease-in-out infinite" : "none",
                      }}
                    >
                      {rarityLabel(charm.rarity)}
                    </span>
                    {/* Small decorative dots */}
                    <div className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <div
                          key={d}
                          className={`h-1 w-1 rounded-full ${c.particle} transition-opacity duration-500`}
                          style={{
                            opacity: isHovered ? 0.7 : 0.2,
                            animation: isHovered ? `charm-pulse-glow 2s ease-in-out ${d * 0.3}s infinite` : "none",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Icon container with float animation */}
                  <div
                    className={[
                      "mx-auto mt-4 flex h-[4.7rem] w-[4.7rem] items-center justify-center rounded-2xl border",
                      c.iconBg, c.iconBorder,
                      "transition-all duration-500",
                      isHovered ? c.iconGlow : "",
                    ].join(" ")}
                    style={{
                      animation: "charm-float 3s ease-in-out infinite",
                    }}
                  >
                    <GameSigilIcon id={charm.icon} className="h-10 w-10" />
                  </div>

                  {/* Charm name */}
                  <h3 className="mt-4 text-center font-serif text-[1.3rem] leading-tight font-semibold text-white transition-all duration-300">
                    {charm.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-center text-[0.78rem] leading-6 text-white/60">
                    {charm.description}
                  </p>

                  {/* ---------- Contrecoup (drawback) ---------- */}
                  <div className="mt-4 overflow-hidden rounded-xl border border-rose-500/20 bg-gradient-to-b from-rose-950/30 to-rose-950/10">
                    {/* Danger stripe top accent */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
                    <div className="px-3.5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-rose-400/70" style={{ animation: "charm-pulse-glow 2s ease-in-out infinite" }} />
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-rose-400/70">
                          Contrecoup
                        </p>
                      </div>
                      <p className="mt-1.5 text-[0.78rem] leading-5 text-rose-200/60">
                        {charm.drawback}
                      </p>
                    </div>
                  </div>

                  {/* ---------- CHOISIR button ---------- */}
                  <div className="mt-auto pt-4">
                    <div
                      className={[
                        "relative overflow-hidden rounded-xl border py-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.2em]",
                        "transition-all duration-400",
                        isHovered ? c.btnHover : c.btnBg,
                      ].join(" ")}
                    >
                      {/* Button shimmer on hover */}
                      {isHovered && (
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background: `linear-gradient(110deg, transparent 30%, ${c.shimmer} 50%, transparent 70%)`,
                            backgroundSize: "200% 100%",
                            animation: "charm-shimmer 2s ease-in-out infinite",
                          }}
                        />
                      )}
                      <span className="relative z-10">
                        {isHovered ? "Choisir" : "Selectionner"}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* =================== SKIP BUTTON =================== */}
        {charmOffer.canSkip ? (
          <button
            type="button"
            onClick={onSkip}
            className="relative z-10 mt-10 rounded-full border border-white/8 bg-white/[0.03] px-7 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.15em] text-white/30 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
            style={{ animation: "charm-card-entrance 0.6s ease-out 0.9s both" }}
          >
            Continuer sans porte-bonheur
          </button>
        ) : null}
      </div>
    </>
  );
}
