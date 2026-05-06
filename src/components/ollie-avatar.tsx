"use client";

import Image from "next/image";

interface OllieAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const SIZE_MAP = {
  sm: 32,
  md: 56,
  lg: 92,
  xl: 124,
} as const;

export function OllieAvatar({ size = "md", className = "" }: OllieAvatarProps) {
  const px = SIZE_MAP[size];

  return (
    <div
      className={[
        "shrink-0 overflow-hidden rounded-full border-2 border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(79,195,247,0.2),transparent_50%),linear-gradient(180deg,rgba(6,18,22,0.96),rgba(2,10,14,0.97))] shadow-[0_0_32px_rgba(79,195,247,0.15),0_0_60px_rgba(79,195,247,0.06)]",
        className,
      ].join(" ")}
      style={{ width: px, height: px }}
    >
      <Image
        src="/ollie.png"
        alt="Ollie"
        width={px}
        height={px}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
