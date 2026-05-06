"use client";

import { useState } from "react";
import { OllieAvatar } from "@/components/ollie-avatar";

interface OllieBubbleProps {
  quote: string;
}

export function OllieBubble({ quote }: OllieBubbleProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div className="ogot-ollie-float">
        <button
          type="button"
          onClick={() => setDismissed(false)}
          className="transition hover:scale-105"
          aria-label="Afficher la bulle d'Ollie"
        >
          <OllieAvatar size="md" className="shadow-[0_0_36px_rgba(125,247,255,0.2)]" />
        </button>
      </div>
    );
  }

  return (
    <div className="ogot-ollie-float ogot-fade-in relative">
      <OllieAvatar size="md" className="ogot-avatar-bob shadow-[0_0_40px_rgba(125,247,255,0.2)] z-10 relative" />
      <div
        className="ogot-story-speech cursor-pointer !m-0 !mt-2 z-20"
        onClick={() => setDismissed(true)}
        role="button"
        tabIndex={0}
        title="Masquer la bulle"
      >
        <p className="mb-1 text-[0.48rem] uppercase font-bold tracking-[0.24em] text-cyan-200/60">Ollie</p>
        <p className="text-[0.9rem] leading-snug font-medium text-[#e0f2f1]">{quote}</p>
      </div>
    </div>
  );
}
