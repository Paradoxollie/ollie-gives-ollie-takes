"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { OllieAvatar } from "@/components/ollie-avatar";

const STORY_PANELS = [
  {
    image: "/story-1.png",
    alt: "Une vieille maison isolee au crepuscule",
    speaker: "Narrateur",
    speech:
      "Tu viens d'acheter une maison ancienne en bord de foret. Tout semble calme, mais le salon donne l'impression d'attendre quelque chose.",
  },
  {
    image: "/story-2.png",
    alt: "Une vieille boite de jeu trouvee dans le grenier",
    speaker: "Narrateur",
    speech:
      "Sous la poussiere du grenier repose un coffret de jeu. Sur le couvercle, une phrase gravee: Ollie Gives, Ollie Takes.",
  },
  {
    image: "/story-3.png",
    alt: "Ollie apparait dans un eclat mysterieux",
    speaker: "Ollie",
    speech:
      "\"Enfin quelqu'un. Je m'appelle Ollie. Si tu veux sortir d'ici, il va falloir jouer proprement.\"",
  },
  {
    image: "/story-4.png",
    alt: "Le joueur est aspire dans le plateau",
    speaker: "Ollie",
    speech:
      "Le plateau s'ouvre, la lumiere monte, la maison disparait. La seule porte de sortie se trouve au bout du jeu.",
  },
] as const;

const STORAGE_KEY = "ogot-story-seen";

export function StoryIntro({ onComplete }: { onComplete: () => void }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const markSeenAndExit = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage can be unavailable in some environments.
    }
    onComplete();
  }, [onComplete]);

  const goNext = useCallback(() => {
    if (transitioning) {
      return;
    }

    if (currentPanel >= STORY_PANELS.length - 1) {
      markSeenAndExit();
      return;
    }

    setTransitioning(true);
    window.setTimeout(() => {
      setCurrentPanel((panel) => panel + 1);
      setTransitioning(false);
    }, 220);
  }, [currentPanel, markSeenAndExit, transitioning]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        goNext();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        markSeenAndExit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, markSeenAndExit]);

  const panel = STORY_PANELS[currentPanel];

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden bg-[#020a0e]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,195,247,0.1),transparent_30%),radial-gradient(circle_at_20%_60%,rgba(105,240,174,0.05),transparent_30%),linear-gradient(180deg,rgba(4,16,22,0.96),rgba(2,10,14,0.98))]" />
      <div className="absolute inset-0 bg-[url('/images/story_comic_forest.png')] bg-cover bg-center opacity-18 mix-blend-screen" />

      <div className="relative z-10 flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="ogot-book-shell w-full max-w-[70rem] p-3 sm:p-5">
          <div className="ogot-book-spread grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
            <section className="ogot-book-page rounded-[1.8rem] p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.54rem] uppercase tracking-[0.28em] text-cyan-300/50">Chapitre 1</p>
                  <h2 className="mt-2 font-serif text-[2rem] leading-none text-[#e0f7fa] sm:text-[2.6rem]">La maison d'Ollie</h2>
                </div>
                <button
                  type="button"
                  onClick={markSeenAndExit}
                  className="rounded-[1rem] border border-cyan-400/18 bg-[rgba(6,20,28,0.7)] px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-[rgba(79,195,247,0.12)] hover:border-cyan-400/28"
                >
                  Passer
                </button>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-cyan-400/12 bg-[rgba(4,16,22,0.9)] shadow-[0_24px_72px_rgba(0,0,0,0.4),0_0_30px_rgba(79,195,247,0.04)]">
                <div
                  className={[
                    "relative aspect-[16/10] transition duration-200",
                    transitioning ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                >
                  <Image src={panel.image} alt={panel.alt} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(79,195,247,0.03),rgba(0,0,0,0.3))]" />
                </div>
              </div>

              <div className="ogot-comic-bubble mt-5 rounded-[1.5rem] px-5 py-4">
                <div className="flex items-center gap-3">
                  {panel.speaker === "Ollie" ? (
                    <OllieAvatar size="sm" />
                  ) : (
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-cyan-400/18 bg-[rgba(79,195,247,0.08)] text-[0.6rem] font-bold uppercase text-cyan-200">
                      N
                    </span>
                  )}
                  <p className="text-[0.54rem] uppercase tracking-[0.24em] text-cyan-300/50">{panel.speaker}</p>
                </div>
                <p className="mt-3 text-[1rem] leading-7 text-[#e0f7fa]">{panel.speech}</p>
              </div>
            </section>

            <aside className="ogot-book-page flex flex-col justify-between rounded-[1.8rem] p-4 sm:p-5">
              <div>
                <p className="text-[0.54rem] uppercase tracking-[0.28em] text-cyan-300/50">Progression</p>
                <h3 className="mt-2 font-serif text-[1.8rem] leading-none text-[#e0f7fa]">Le livre se referme vite.</h3>
              </div>

              <div className="mt-6 grid gap-2">
                {STORY_PANELS.map((_, index) => (
                  <div
                    key={index}
                    className={[
                      "rounded-[1rem] border px-4 py-3 transition",
                      index === currentPanel
                        ? "border-cyan-400/24 bg-[rgba(79,195,247,0.1)] text-[#e0f7fa] shadow-[0_0_16px_rgba(79,195,247,0.06)]"
                        : "border-cyan-400/10 bg-[rgba(79,195,247,0.04)] text-cyan-200/60",
                    ].join(" ")}
                  >
                    <p className="text-[0.46rem] uppercase tracking-[0.22em]">Planche {index + 1}</p>
                  </div>
                ))}
              </div>

              <div className="ogot-book-panel mt-6 rounded-[1.35rem] p-4">
                <p className="text-[0.48rem] uppercase tracking-[0.24em] text-cyan-300/50">Commandes</p>
                <p className="mt-2 text-sm leading-7 text-cyan-100/70">
                  `Espace` ou `Entree` pour tourner la page. `Echap` pour passer l'introduction.
                </p>
              </div>

              <button
                type="button"
                onClick={goNext}
                className="ogot-red-button mt-6 rounded-[1rem] px-5 py-3 text-[0.74rem]"
              >
                {currentPanel >= STORY_PANELS.length - 1 ? "Entrer dans le jeu" : "Tourner la page"}
              </button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useStoryIntro() {
  const [storySeen, setStorySeen] = useState(true);

  useEffect(() => {
    try {
      setStorySeen(Boolean(localStorage.getItem(STORAGE_KEY)));
    } catch {
      setStorySeen(true);
    }
  }, []);

  const markStorySeen = useCallback(() => {
    setStorySeen(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage failures.
    }
  }, []);

  return { storySeen, markStorySeen };
}
