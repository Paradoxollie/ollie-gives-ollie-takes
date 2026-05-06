"use client";

import type { CSSProperties } from "react";

import type { AdventureNode } from "@/core/types";

type NodeKind = AdventureNode["kind"];

type EmblemStyle = {
  shellTop: string;
  shellBottom: string;
  rim: string;
  glow: string;
  mist: string;
  icon: string;
  iconFill: string;
  iconGlow: string;
};

const EMBLEM_STYLES: Record<NodeKind, EmblemStyle> = {
  combat: {
    shellTop: "#17312a",
    shellBottom: "#09110f",
    rim: "#5d9585",
    glow: "rgba(121, 244, 236, 0.3)",
    mist: "rgba(168, 255, 241, 0.14)",
    icon: "/vendor/game-icons/crossed-swords.svg",
    iconFill: "linear-gradient(180deg, #f9ffff 0%, #aaf7ff 50%, #67d8dc 100%)",
    iconGlow: "rgba(110, 239, 243, 0.26)",
  },
  elite: {
    shellTop: "#243225",
    shellBottom: "#0b1009",
    rim: "#92a36c",
    glow: "rgba(251, 221, 158, 0.24)",
    mist: "rgba(255, 238, 193, 0.12)",
    icon: "/vendor/game-icons/swords-emblem.svg",
    iconFill: "linear-gradient(180deg, #fff6d6 0%, #f6d88b 52%, #d49c4f 100%)",
    iconGlow: "rgba(247, 207, 120, 0.24)",
  },
  shop: {
    shellTop: "#1e3030",
    shellBottom: "#0a1010",
    rim: "#6a9189",
    glow: "rgba(146, 225, 255, 0.22)",
    mist: "rgba(198, 250, 255, 0.1)",
    icon: "/vendor/game-icons/sword-smithing.svg",
    iconFill: "linear-gradient(180deg, #f8ffff 0%, #d0ecf5 44%, #82d9ff 100%)",
    iconGlow: "rgba(126, 220, 255, 0.22)",
  },
  chest: {
    shellTop: "#34261d",
    shellBottom: "#110b08",
    rim: "#9c7547",
    glow: "rgba(244, 205, 137, 0.22)",
    mist: "rgba(123, 240, 255, 0.08)",
    icon: "/vendor/game-icons/locked-chest.svg",
    iconFill: "linear-gradient(180deg, #fff4df 0%, #f4cd86 45%, #cb8842 100%)",
    iconGlow: "rgba(255, 211, 143, 0.2)",
  },
  rest: {
    shellTop: "#1b3028",
    shellBottom: "#09100d",
    rim: "#6a977d",
    glow: "rgba(139, 235, 255, 0.24)",
    mist: "rgba(180, 255, 232, 0.12)",
    icon: "/vendor/game-icons/campfire.svg",
    iconFill: "linear-gradient(180deg, #f9ffff 0%, #8ef2ff 34%, #ffd98e 62%, #f09a57 100%)",
    iconGlow: "rgba(124, 239, 255, 0.2)",
  },
  boss: {
    shellTop: "#30211d",
    shellBottom: "#120907",
    rim: "#ab7363",
    glow: "rgba(140, 243, 255, 0.24)",
    mist: "rgba(255, 226, 191, 0.08)",
    icon: "/vendor/game-icons/crowned-skull.svg",
    iconFill: "linear-gradient(180deg, #fff5ea 0%, #f1dfc1 44%, #9defff 100%)",
    iconGlow: "rgba(139, 238, 255, 0.22)",
  },
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

export function PixelNodeEmblem({ kind }: { kind: NodeKind }) {
  const style = EMBLEM_STYLES[kind];
  const maskStyle = createMaskStyle(style.icon);

  return (
    <div className="relative h-full w-full rounded-[1.18rem]">
      <div
        className="absolute inset-0 rounded-[1.18rem] border"
        style={{
          borderColor: style.rim,
          background: `linear-gradient(180deg, ${style.shellTop}, ${style.shellBottom})`,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.44), 0 0 22px ${style.glow}`,
        }}
      />
      <div
        className="absolute inset-[0.15rem] rounded-[1rem] border border-white/8"
        style={{
          background: `radial-gradient(circle at 50% 28%, rgba(255,255,255,0.09), rgba(255,255,255,0) 42%), radial-gradient(circle at 50% 60%, ${style.mist}, rgba(255,255,255,0) 62%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.16))`,
        }}
      />
      <div className="absolute inset-[0.32rem] rounded-[0.88rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.22))]" />
      <div className="absolute inset-[0.68rem]">
        <div className="absolute inset-0 rounded-[0.8rem] bg-[radial-gradient(circle,rgba(255,255,255,0.05),rgba(255,255,255,0)_68%)]" />
        <div
          className="absolute inset-0 opacity-80 blur-[9px]"
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
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.38))",
          }}
        />
      </div>
    </div>
  );
}
