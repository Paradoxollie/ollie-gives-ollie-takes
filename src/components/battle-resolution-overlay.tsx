"use client";

import { animated, to, useSpring } from "@react-spring/web";

import type { BattleResolutionRecap } from "@/lib/battle-resolution";
import type { MatchOutcome, PlayerId } from "@/core/types";

interface BattleResolutionOverlayProps {
  recap: BattleResolutionRecap;
  onContinue: () => void;
  continueLabel?: string;
}

const OWNER_STYLES = {
  player: {
    name: "Joueur",
    panel:
      "border-cyan-200/18 bg-[linear-gradient(180deg,rgba(7,25,38,0.98),rgba(4,14,24,0.96))] shadow-[0_28px_88px_rgba(34,211,238,0.14)]",
    bar: "from-lime-500 via-lime-300 to-emerald-100",
    accent: "rgba(103,232,249,0.42)",
    slash: "from-transparent via-cyan-100/95 to-transparent",
    badge: "border-cyan-200/24 bg-cyan-200/12 text-cyan-50",
    badgeGlow: "0 0 24px rgba(103,232,249,0.32)",
    healthAsset: "/images/ui/hud/player-health-empty.png",
    healthAspect: "aspect-[1625/365]",
    healthTrack: "left-[16.6%] top-[34.1%] h-[27.2%] w-[74.9%]",
  },
  enemy: {
    name: "Rival",
    panel:
      "border-rose-200/18 bg-[linear-gradient(180deg,rgba(43,16,28,0.98),rgba(18,9,18,0.96))] shadow-[0_28px_88px_rgba(251,113,133,0.14)]",
    bar: "from-red-600 via-red-400 to-orange-100",
    accent: "rgba(251,113,133,0.38)",
    slash: "from-transparent via-rose-100/95 to-transparent",
    badge: "border-rose-200/24 bg-rose-200/12 text-rose-50",
    badgeGlow: "0 0 24px rgba(251,113,133,0.28)",
    healthAsset: "/images/ui/hud/enemy-health-empty.png",
    healthAspect: "aspect-[1648/418]",
    healthTrack: "left-[17.9%] top-[33.5%] h-[28.7%] w-[70.1%]",
  },
} as const;

function clampHealth(value: number): number {
  return Math.max(0, value);
}

function toPercent(current: number, max: number): number {
  if (max <= 0) {
    return 0;
  }

  return Math.max(0, Math.min(100, (clampHealth(current) / max) * 100));
}

function stateLabel(recap: BattleResolutionRecap): string {
  return recap.phase === "battle" ? "Fin du match" : `Fin du round ${recap.roundNumber}`;
}

function winnerLabel(recap: BattleResolutionRecap): string {
  const winner = recap.phase === "battle" ? recap.result?.winner ?? recap.roundWinner : recap.roundWinner;

  if (winner === "player") {
    return recap.phase === "battle" ? "Victoire" : "Ollie prend l'avantage";
  }

  if (winner === "enemy") {
    return recap.phase === "battle" ? "Defaite" : "Le rival prend l'avantage";
  }

  return recap.phase === "battle" ? "Fin neutre" : "Impact partage";
}

function getButtonTone(winner: MatchOutcome | null): string {
  if (winner === "enemy") {
    return "from-rose-300 via-fuchsia-200 to-violet-100";
  }

  if (winner === "draw") {
    return "from-amber-300 via-orange-200 to-yellow-100";
  }

  return "from-cyan-300 via-emerald-200 to-teal-100";
}

function defaultContinueLabel(recap: BattleResolutionRecap): string {
  if (recap.phase === "round") {
    return "Continuer le combat";
  }

  if (recap.result?.winner === "player") {
    return "Etape suivante";
  }

  return "Fin de match";
}

function ImpactBar({
  owner,
  recap,
  delayMs,
}: {
  owner: PlayerId;
  recap: BattleResolutionRecap;
  delayMs: number;
}) {
  const style = OWNER_STYLES[owner];
  const before = recap.championsBefore[owner];
  const after = recap.championsAfter[owner];
  const damage = recap.damageApplied[owner];
  const beforePercent = toPercent(before.health, before.maxHealth);
  const afterPercent = toPercent(after.health, after.maxHealth);

  const [motion] = useSpring(
    () => ({
      reset: true,
      from: {
        fill: beforePercent,
        strike: 0,
        impact: 0,
        badgeOpacity: 0,
        badgeLift: 18,
        badgeScale: 0.86,
        introY: 22,
        introOpacity: 0,
        panelShift: 0,
        capGlow: 0,
      },
      to: async (next) => {
        await next({
          introY: 0,
          introOpacity: 1,
          config: {
            mass: 0.94,
            tension: 240,
            friction: 24,
          },
        });
        await next({
          strike: 1,
          impact: 1,
          badgeOpacity: damage > 0 ? 1 : 0,
          badgeLift: -12,
          badgeScale: 1,
          panelShift: owner === "player" ? -8 : 8,
          capGlow: 1,
          delay: delayMs,
          config: {
            mass: 0.72,
            tension: 360,
            friction: 18,
          },
        });
        await next({
          fill: afterPercent,
          panelShift: owner === "player" ? 2 : -2,
          config: {
            mass: 0.96,
            tension: 112,
            friction: 18,
          },
        });
        await next({
          strike: 1.08,
          impact: 0.18,
          panelShift: 0,
          badgeOpacity: damage > 0 ? 0.95 : 0,
          badgeLift: 0,
          badgeScale: 1,
          capGlow: 0.4,
          config: {
            mass: 0.9,
            tension: 180,
            friction: 20,
          },
        });
      },
    }),
    [recap.id, owner],
  );

  return (
    <animated.section
      className={[
        "relative overflow-hidden rounded-[2.2rem] border p-6 text-white backdrop-blur-xl [transform-style:preserve-3d]",
        style.panel,
      ].join(" ")}
      style={{
        opacity: motion.introOpacity,
        transform: to(
          [motion.introY, motion.impact, motion.panelShift],
          (introY, impact, panelShift) =>
            `translate3d(${panelShift}px, ${introY}px, 0) perspective(2200px) rotateX(${4 + impact * 3}deg) rotateY(${owner === "player" ? 7 : -7}deg) scale(${1 + impact * 0.01})`,
        ),
        boxShadow: motion.impact.to(
          (impact) =>
            `0 28px 88px rgba(0,0,0,0.34), 0 0 ${28 + impact * 34}px ${style.accent}`,
        ),
      }}
    >
      {/* Radial ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at top, ${style.accent}, rgba(255,255,255,0) 58%)`,
        }}
      />
      {/* Top gradient band matching player color */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[2.2rem]"
        style={{
          background: `linear-gradient(180deg, ${style.accent}, transparent)`,
          opacity: 0.35,
        }}
      />

      <animated.div
        className={["pointer-events-none absolute inset-y-[-18%] left-[-18%] w-[24%] bg-gradient-to-r blur-[1px]", style.slash].join(" ")}
        style={{
          opacity: motion.strike.to((value) => Math.max(0, 1 - Math.abs(value - 1)) * 0.96),
          transform: to([motion.strike], (value) => `translate3d(${value * 520}px,0,0) rotate(-14deg)`),
        }}
      />

      <animated.div
        className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-white/10"
        style={{
          opacity: motion.impact.to((value) => 0.16 + value * 0.26),
          transform: to([motion.impact], (value) => `scale(${1 + value * 0.01})`),
        }}
      />

      <div className="relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.5rem] uppercase tracking-[0.32em] text-white/42">
              {owner === "player" ? "Joueur" : "Rival"}
            </p>
            <h2 className="mt-2 font-serif text-[2.8rem] leading-none text-white">{style.name}</h2>
          </div>

          <div className="text-right">
            <p className="text-[0.5rem] uppercase tracking-[0.24em] text-white/40">Vie</p>
            <p className="mt-1 flex items-baseline justify-end leading-none text-white tabular-nums">
              <span className="text-[3.8rem] font-bold" style={{ textShadow: `0 0 18px ${style.accent}` }}>
                {clampHealth(after.health)}
              </span>
              <span className="ml-1.5 text-[0.82rem] font-medium text-white/32">/ {after.maxHealth}</span>
            </p>
          </div>
        </div>

        <div className="relative mt-5">
          <div className={["relative w-full overflow-visible", style.healthAspect].join(" ")}>
            <img
              src={style.healthAsset}
              alt=""
              className="absolute inset-0 h-full w-full select-none object-contain drop-shadow-[0_1.1rem_1.2rem_rgba(0,0,0,0.34)]"
              draggable={false}
            />
            <div
              className={[
                "absolute overflow-hidden rounded-[999px] bg-black/38 shadow-[inset_0_0_1rem_rgba(0,0,0,0.86)]",
                style.healthTrack,
              ].join(" ")}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-[999px] bg-white/12"
                style={{ width: `${beforePercent}%` }}
              />
              <animated.div
                className={["absolute inset-y-0 left-0 origin-left rounded-[999px] bg-gradient-to-r", style.bar].join(" ")}
                style={{
                  width: "100%",
                  transform: motion.fill.to((value) => `scaleX(${value / 100})`),
                  boxShadow: motion.capGlow.to(
                    (value) => `0 0 ${12 + value * 14}px rgba(255,255,255,${0.18 + value * 0.22})`,
                  ),
                }}
              />
              <animated.div
                className="absolute inset-y-[12%] w-[4.6%] rounded-full bg-white/80 blur-[3px]"
                style={{
                  opacity: motion.capGlow.to((value) => value * 0.7),
                  left: motion.fill.to((value) => `calc(${value}% - 2.3%)`),
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-[8%] font-serif text-[clamp(0.82rem,2vw,1.48rem)] font-black leading-none text-[#fff4cf] tabular-nums [text-shadow:0_2px_3px_rgba(0,0,0,0.92),0_0_10px_rgba(255,247,209,0.38)]">
                {clampHealth(after.health)} / {after.maxHealth}
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/54">
            <span>Avant {clampHealth(before.health)}</span>
            <span className="text-white/26">-&gt;</span>
            <span>Apres {clampHealth(after.health)}</span>
          </div>

          <animated.div
            className={["absolute -top-4 right-3 rounded-full border px-3.5 py-1.5 text-sm font-semibold tracking-[0.12em] shadow-[0_18px_32px_rgba(0,0,0,0.26)]", style.badge].join(" ")}
            style={{
              opacity: motion.badgeOpacity,
              boxShadow: style.badgeGlow,
              transform: to(
                [motion.badgeLift, motion.badgeScale],
                (badgeLift, badgeScale) => `translate3d(0, ${badgeLift}px, 0) scale(${badgeScale})`,
              ),
            }}
          >
            {damage > 0 ? `-${damage} PV` : "0 PV"}
          </animated.div>
        </div>
      </div>
    </animated.section>
  );
}

export function BattleResolutionOverlay({ recap, onContinue, continueLabel }: BattleResolutionOverlayProps) {
  const winner = recap.phase === "battle" ? recap.result?.winner ?? recap.roundWinner : recap.roundWinner;
  const buttonTone = getButtonTone(winner ?? null);

  const [intro] = useSpring(
    () => ({
      reset: true,
      from: { opacity: 0, y: 16, scale: 0.975 },
      to: { opacity: 1, y: 0, scale: 1 },
      config: {
        mass: 0.96,
        tension: 210,
        friction: 22,
      },
    }),
    [recap.id],
  );

  const [shockwave] = useSpring(
    () => ({
      reset: true,
      from: { ring: 0, glow: 0.18, slash: 0 },
      to: async (next) => {
        await next({
          ring: 0.46,
          glow: 0.48,
          slash: 1,
          delay: 120,
          config: {
            duration: 180,
          },
        });
        await next({
          ring: 1,
          glow: 0.14,
          slash: 0,
          config: {
            duration: 720,
          },
        });
      },
    }),
    [recap.id],
  );

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[rgba(2,7,15,0.68)] p-4 backdrop-blur-[8px]"
      data-testid="battle-resolution-overlay"
    >
      <animated.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          opacity: shockwave.glow,
          background:
            winner === "enemy"
              ? "radial-gradient(circle, rgba(251,113,133,0.22), rgba(2,7,15,0) 68%)"
              : winner === "draw"
                ? "radial-gradient(circle, rgba(251,191,36,0.2), rgba(2,7,15,0) 68%)"
                : "radial-gradient(circle, rgba(103,232,249,0.24), rgba(2,7,15,0) 68%)",
          transform: to([shockwave.ring], (ring) => `translate(-50%, -50%) scale(${0.78 + ring * 0.36})`),
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <animated.div
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] rounded-full border border-white/10"
          style={{
            opacity: shockwave.glow.to((value) => value * 0.9),
            transform: to(
              [shockwave.ring],
              (ring) => `translate(-50%, -50%) perspective(2200px) rotateX(78deg) scale(${0.88 + ring * 0.5})`,
            ),
          }}
        />
        <animated.div
          className="absolute left-1/2 top-1/2 h-[16rem] w-[72%] max-w-[48rem] -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: shockwave.slash.to((value) => value * 0.9),
            transform: to([shockwave.slash], (slash) => `translate(-50%, -50%) scaleX(${0.82 + slash * 0.24})`),
          }}
        >
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.82),rgba(255,255,255,0))] blur-md" />
        </animated.div>
      </div>

      <animated.div
        className="relative w-full max-w-[70rem]"
        style={{
          opacity: intro.opacity,
          transform: to(
            [intro.y, intro.scale],
            (y, scale) => `translate3d(0, ${y}px, 0) perspective(2200px) rotateX(3deg) scale(${scale})`,
          ),
        }}
      >
        <div className="mb-7 flex flex-col items-center justify-center gap-1 text-center text-white">
          <p className="text-[0.5rem] uppercase tracking-[0.42em] text-white/30 font-medium">{stateLabel(recap)}</p>
          <h2
            className="font-serif text-[4.2rem] leading-none text-white drop-shadow-lg"
            style={{
              textShadow:
                winner === "enemy"
                  ? "0 0 32px rgba(251,113,133,0.5), 0 0 64px rgba(251,113,133,0.25), 0 4px 12px rgba(0,0,0,0.6)"
                  : winner === "draw"
                    ? "0 0 32px rgba(251,191,36,0.45), 0 0 64px rgba(251,191,36,0.2), 0 4px 12px rgba(0,0,0,0.6)"
                    : "0 0 32px rgba(103,232,249,0.5), 0 0 64px rgba(103,232,249,0.25), 0 4px 12px rgba(0,0,0,0.6)",
            }}
          >
            {winnerLabel(recap)}
          </h2>
          {/* Decorative glowing divider */}
          <div className="relative mt-3 h-[2px] w-48">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  winner === "enemy"
                    ? "linear-gradient(90deg, transparent, rgba(251,113,133,0.7), transparent)"
                    : winner === "draw"
                      ? "linear-gradient(90deg, transparent, rgba(251,191,36,0.65), transparent)"
                      : "linear-gradient(90deg, transparent, rgba(103,232,249,0.7), transparent)",
                boxShadow:
                  winner === "enemy"
                    ? "0 0 12px rgba(251,113,133,0.4)"
                    : winner === "draw"
                      ? "0 0 12px rgba(251,191,36,0.35)"
                      : "0 0 12px rgba(103,232,249,0.4)",
              }}
            />
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <ImpactBar owner="player" recap={recap} delayMs={150} />
          <ImpactBar owner="enemy" recap={recap} delayMs={210} />
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={onContinue}
            className={[
              "rounded-[1.2rem] bg-gradient-to-r px-8 py-3.5 text-base font-semibold text-slate-950 shadow-[0_24px_54px_rgba(0,0,0,0.3)] transition hover:brightness-105",
              buttonTone,
            ].join(" ")}
            data-testid="battle-resolution-continue"
          >
            {continueLabel ?? defaultContinueLabel(recap)}
          </button>
        </div>
      </animated.div>
    </div>
  );
}
