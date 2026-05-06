"use client";

import type { CSSProperties } from "react";

import type { RoundCoinFace } from "@/core/types";

type CoinStyle = {
  icon: string;
  plateTop: string;
  plateBottom: string;
  ring: string;
  ringSoft: string;
  glow: string;
  iconFill: string;
  iconGlow: string;
};

const COIN_STYLES: Record<RoundCoinFace, CoinStyle> = {
  sun: {
    icon: "/vendor/game-icons/sun.svg",
    plateTop: "#4d3719",
    plateBottom: "#1a1208",
    ring: "#e4bd68",
    ringSoft: "#8cf3df",
    glow: "rgba(245, 214, 126, 0.28)",
    iconFill: "linear-gradient(180deg, #fff8df 0%, #f4d37f 58%, #db9d47 100%)",
    iconGlow: "rgba(255, 226, 155, 0.28)",
  },
  moon: {
    icon: "/vendor/game-icons/moon.svg",
    plateTop: "#153445",
    plateBottom: "#091219",
    ring: "#93defe",
    ringSoft: "#e6fbff",
    glow: "rgba(139, 226, 255, 0.28)",
    iconFill: "linear-gradient(180deg, #f5fdff 0%, #c7f0ff 58%, #7ad7ff 100%)",
    iconGlow: "rgba(193, 246, 255, 0.24)",
  },
};

export const COIN_ICON_ASSETS: Record<RoundCoinFace, string> = {
  sun: COIN_STYLES.sun.icon,
  moon: COIN_STYLES.moon.icon,
};

export const COIN_ICON_COLORS: Record<RoundCoinFace, string> = {
  sun: "#ffe7a6",
  moon: "#d8f7ff",
};

function createMaskStyle(icon: string): CSSProperties {
  return {
    WebkitMaskImage: `url(${icon})`,
    maskImage: `url(${icon})`,
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };
}

export function PixelCoinSigil({ face }: { face: RoundCoinFace }) {
  const style = COIN_STYLES[face];
  const maskStyle = createMaskStyle(style.icon);

  return (
    <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),rgba(255,255,255,0)_72%)] p-[0.08rem]">
      <div
        className="absolute inset-0 rounded-full border"
        style={{
          borderColor: style.ringSoft,
          boxShadow: `0 0 18px ${style.glow}`,
        }}
      />
      <div
        className="absolute inset-[0.1rem] rounded-full"
        style={{
          background: `linear-gradient(180deg, ${style.plateTop}, ${style.plateBottom})`,
        }}
      />
      <div className="absolute inset-[0.1rem] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0)_44%)]" />
      <div className="absolute inset-[0.16rem] rounded-full border" style={{ borderColor: style.ring, opacity: 0.86 }} />
      <div className="absolute inset-[0.31rem] rounded-full border" style={{ borderColor: style.ringSoft, opacity: 0.28 }} />
      <div className="absolute inset-[0.78rem]">
        <div
          className="absolute inset-0 opacity-85 blur-[8px]"
          style={{
            ...maskStyle,
            background: style.iconGlow,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            ...maskStyle,
            background: style.iconFill,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.36))",
          }}
        />
      </div>
    </div>
  );
}
