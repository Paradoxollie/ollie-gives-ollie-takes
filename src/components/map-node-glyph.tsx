"use client";

import type { AdventureNode } from "@/core/types";

import { PixelNodeEmblem } from "@/components/pixel-node-emblem";

interface MapNodeGlyphProps {
  kind: AdventureNode["kind"];
}

export function MapNodeGlyph({ kind }: MapNodeGlyphProps) {
  return (
    <div className="relative h-[4.5rem] w-[4.5rem]">
      <div className="absolute inset-0 rounded-[1.2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),rgba(255,255,255,0)_60%)]" />
      <PixelNodeEmblem kind={kind} />
    </div>
  );
}
