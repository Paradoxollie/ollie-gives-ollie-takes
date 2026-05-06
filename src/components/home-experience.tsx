"use client";

import Link from "next/link";
import Image from "next/image";
import { startTransition, useCallback, useEffect, useState } from "react";

import { AdventureClient } from "@/components/adventure-client";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

type Screen = "menu" | "intro" | "game";

interface HomeExperienceProps {
  initialLiveChampionProfile?: RuntimeLiveChampionProfile | null;
}

const STORY_PANELS = [
  {
    image: "/story-1.png",
    bubbles: [
      "Une annonce en ligne. Une vieille maison a la lisiere d'un bois, vendue pour presque rien.",
      "Les voisins ne la regardent jamais. Les oiseaux evitent le toit. Mais le prix est imbattable.",
      "A l'interieur, tout est couvert de poussiere. Sauf une table, au centre du salon, parfaitement propre.",
    ],
  },
  {
    image: "/story-2.png",
    bubbles: [
      "Sur la table, une boite de jeu de societe. Ancienne. Le bois est chaud au toucher, comme si quelqu'un venait de la poser.",
      "Sur le couvercle, grave dans le bois sombre : « Ollie Gives, Ollie Takes ».",
      "Les coins sont uses par des centaines de parties. Quelqu'un a joue ici. Longtemps. Seul.",
    ],
  },
  {
    image: "/story-3.png",
    bubbles: [
      "Le couvercle s'ouvre. Les cartes brillent faiblement, comme si elles attendaient ce moment depuis des annees.",
      "Dans le reflet du plateau, deux yeux noirs. Un petit chien. Un chihuahua. Il sourit.",
      "« Ah, enfin. J'ai cru que personne ne viendrait. Tu veux jouer ? Ou plutot... tu n'as pas vraiment le choix. »",
    ],
  },
  {
    image: "/story-4.png",
    bubbles: [
      "Le plateau s'illumine. Les murs de la maison s'effacent. Le sol disparait sous tes pieds.",
      "Tu es a l'interieur du jeu. La foret autour de toi est faite de cartes et de bois vivant.",
      "La voix d'Ollie resonne partout : « Pour sortir, il faudra me battre. Et je ne perds jamais. Enfin... presque. »",
    ],
  },
] as const;

function CodexOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[220] flex items-center justify-center bg-[rgba(2,7,15,0.78)] p-4 backdrop-blur-xl">
      <div className="ogot-book-shell w-full max-w-[62rem] p-3 text-[#e0f7fa] sm:p-5">
        <div className="ogot-book-spread grid gap-3 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <section className="ogot-book-page rounded-[1.8rem] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[0.54rem] uppercase tracking-[0.3em] text-[rgba(125,247,255,0.5)]">Le livre d'Ollie</p>
                <h2 className="mt-2 font-serif text-[2rem] leading-none text-[#e0f7fa] sm:text-[2.5rem]">Regles du piege</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-[1rem] border border-[rgba(79,195,247,0.22)] bg-[rgba(6,20,28,0.72)] px-4 py-2 text-sm font-semibold text-[#e0f7fa] transition hover:bg-[rgba(79,195,247,0.15)]"
              >
                Fermer
              </button>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <section className="ogot-book-panel rounded-[1.35rem] p-4">
                <p className="text-[0.5rem] uppercase tracking-[0.22em] text-[rgba(125,247,255,0.5)]">Ce que tu as trouve</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(224,247,250,0.72)]">
                  Une vieille boite de jeu t'a attendu dans la maison. Ollie, petit chien noir au sourire trop tranquille, en garde les regles.
                </p>
              </section>

              <section className="ogot-book-panel rounded-[1.35rem] p-4">
                <p className="text-[0.5rem] uppercase tracking-[0.22em] text-[rgba(125,247,255,0.5)]">La seule issue</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(224,247,250,0.72)]">
                  Traverser la carte, survivre aux affrontements, prendre les bons porte-bonheurs et vaincre Ollie. Sinon la maison te garde.
                </p>
              </section>

              <section className="ogot-book-panel rounded-[1.35rem] p-4">
                <p className="text-[0.5rem] uppercase tracking-[0.22em] text-[rgba(125,247,255,0.5)]">Conseil d'Ollie</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(224,247,250,0.72)]">
                  Observe les reflets, lis les bulles, et ne fais jamais confiance a un choix qui a l'air trop gentil.
                </p>
              </section>
            </div>
          </section>

          <aside className="ogot-book-page flex flex-col justify-between rounded-[1.8rem] p-5 sm:p-6">
            <div>
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-[rgba(125,247,255,0.5)]">Ollie</p>
              <h3 className="mt-2 font-serif text-[1.9rem] leading-none text-[#e0f7fa]">Tu peux encore reculer.</h3>
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-[rgba(79,195,247,0.16)] bg-[radial-gradient(circle_at_top,rgba(79,195,247,0.12),rgba(79,195,247,0)_42%),linear-gradient(180deg,rgba(6,24,36,0.94),rgba(2,8,14,0.96))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
              <div className="relative mx-auto aspect-[4/5] max-w-[14rem]">
                <Image src="/ollie.png" alt="Ollie" fill className="object-contain drop-shadow-[0_26px_36px_rgba(0,0,0,0.42)]" />
              </div>
            </div>

            <div className="ogot-comic-bubble mt-6 rounded-[1.45rem] px-4 py-4">
              <p className="text-[0.48rem] uppercase tracking-[0.26em] text-[rgba(125,247,255,0.5)]">Bulle d'Ollie</p>
              <p className="mt-2 text-[0.9rem] leading-7 text-[#e0f2f1]">
                "Si tu lis tout, tu sauras peut-etre comment sortir. Peut-etre."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function IntroSequence({
  onBack,
  onStart,
}: {
  onBack: () => void;
  onStart: () => void;
}) {
  const [panelIndex, setPanelIndex] = useState(0);
  const [visibleBubbles, setVisibleBubbles] = useState(0);
  const [imageReady, setImageReady] = useState(false);
  const panel = STORY_PANELS[panelIndex];
  const isLastPanel = panelIndex === STORY_PANELS.length - 1;
  const allBubblesShown = visibleBubbles >= panel.bubbles.length;

  // Reveal bubbles one by one with delay
  useEffect(() => {
    setVisibleBubbles(0);
    setImageReady(false);
    // Small delay for the image to settle, then start revealing
    const imgTimer = window.setTimeout(() => setImageReady(true), 600);
    return () => window.clearTimeout(imgTimer);
  }, [panelIndex]);

  useEffect(() => {
    if (!imageReady) return;
    if (visibleBubbles >= panel.bubbles.length) return;
    const timer = window.setTimeout(() => {
      setVisibleBubbles((v) => v + 1);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [imageReady, visibleBubbles, panel.bubbles.length]);

  const advance = useCallback(() => {
    if (!allBubblesShown) {
      // Skip animation — reveal all bubbles instantly
      setVisibleBubbles(panel.bubbles.length);
      return;
    }
    if (isLastPanel) {
      onStart();
      return;
    }
    setPanelIndex((i) => i + 1);
  }, [allBubblesShown, isLastPanel, onStart, panel.bubbles.length]);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Fullscreen image */}
      <div className="absolute inset-0">
        <Image
          key={panel.image}
          src={panel.image}
          alt=""
          fill
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: imageReady ? 1 : 0 }}
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Top bar */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/10"
        >
          Retour
        </button>
        <div className="flex items-center gap-2">
          {STORY_PANELS.map((_, i) => (
            <div
              key={i}
              className={[
                "h-1.5 rounded-full transition-all duration-500",
                i === panelIndex ? "w-8 bg-cyan-400" : i < panelIndex ? "w-3 bg-cyan-400/50" : "w-3 bg-white/20",
              ].join(" ")}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => onStart()}
          className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-semibold text-white/60 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
        >
          Passer
        </button>
      </div>

      {/* Speech bubbles - appear from bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-3 px-4 pb-24 sm:px-8 sm:pb-28">
        {panel.bubbles.map((text, i) => {
          const isOllieSpeaking = text.startsWith("«") || text.startsWith("\"");
          return (
            <div
              key={`${panelIndex}-${i}`}
              className={[
                "max-w-[38rem] transition-all duration-700",
                i < visibleBubbles
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0 pointer-events-none",
                isOllieSpeaking ? "ml-auto" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "rounded-[1.1rem] px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
                  isOllieSpeaking
                    ? "border border-cyan-400/30 bg-[rgba(4,20,30,0.92)] backdrop-blur-md"
                    : "border border-white/12 bg-[rgba(0,0,0,0.82)] backdrop-blur-md",
                ].join(" ")}
              >
                {isOllieSpeaking ? (
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan-300/70 mb-1.5">Ollie</p>
                ) : null}
                <p className={[
                  "text-[1rem] leading-7 sm:text-[1.08rem]",
                  isOllieSpeaking ? "text-cyan-50 italic" : "text-white/90",
                ].join(" ")}>
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom action button */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center sm:bottom-8">
        <button
          type="button"
          onClick={advance}
          className={[
            "rounded-full px-8 py-3.5 text-[0.85rem] font-bold uppercase tracking-[0.15em] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition",
            allBubblesShown && isLastPanel
              ? "border-2 border-cyan-400/50 bg-cyan-500/20 text-cyan-100 backdrop-blur-sm hover:bg-cyan-500/30"
              : "border border-white/20 bg-white/10 text-white/80 backdrop-blur-sm hover:bg-white/15",
          ].join(" ")}
        >
          {!allBubblesShown ? "..." : isLastPanel ? "Entrer dans le jeu" : "Continuer"}
        </button>
      </div>
    </div>
  );
}

function MainMenu({
  canContinue,
  onOpenCodex,
  onOpenIntro,
  onStartDirect,
}: {
  canContinue: boolean;
  onOpenCodex: () => void;
  onOpenIntro: () => void;
  onStartDirect: () => void;
}) {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[#020810] text-white">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image src="/images/story_comic_forest.png" alt="" fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[rgba(2,8,16,0.5)] to-[rgba(2,8,16,0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,8,16,0.8)] via-transparent to-[rgba(2,8,16,0.6)]" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 py-8">
        {/* Game Title */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-[3.2rem] leading-[0.9] text-white drop-shadow-[0_4px_24px_rgba(79,195,247,0.4)] sm:text-[5rem] lg:text-[6rem]">
            Ollie Gives,
            <br />
            Ollie Takes
          </h1>
          <p className="mt-4 text-[0.8rem] uppercase tracking-[0.4em] text-cyan-200/70">
            Un jeu de cartes. Un piege de chien.
          </p>
        </div>

        {/* Ollie character + speech bubble + menu */}
        <div className="flex w-full max-w-[64rem] flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center lg:gap-10">
          {/* Ollie character */}
          <div className="relative shrink-0">
            <div className="relative h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]">
              <Image src="/ollie.png" alt="Ollie" fill className="object-contain drop-shadow-[0_8px_40px_rgba(79,195,247,0.35)]" priority />
            </div>
            {/* Speech bubble */}
            <div className="ogot-bubble absolute -right-4 -top-2 max-w-[16rem] rounded-[1.2rem] px-4 py-3 sm:-right-8">
              <p className="text-[0.9rem] leading-6 text-[#e0f7fa]">
                "Tu peux partir quand tu veux. Il suffit juste de gagner."
              </p>
            </div>
          </div>

          {/* Menu buttons */}
          <div className="flex w-full max-w-[22rem] flex-col gap-3">
            <button
              type="button"
              onClick={onOpenIntro}
              className="group relative overflow-hidden rounded-[1rem] border-2 border-cyan-400/30 bg-[rgba(6,20,30,0.85)] px-5 py-4 text-left transition hover:border-cyan-300/50 hover:bg-[rgba(6,20,30,0.95)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="relative block font-serif text-[1.4rem] leading-none text-white">Nouvelle partie</span>
              <span className="relative mt-1.5 block text-[0.78rem] leading-5 text-cyan-100/60">Decouvre l'histoire depuis le debut</span>
            </button>

            <button
              type="button"
              onClick={onStartDirect}
              className="group relative overflow-hidden rounded-[1rem] border-2 border-emerald-400/25 bg-[rgba(6,24,20,0.85)] px-5 py-4 text-left transition hover:border-emerald-300/45 hover:bg-[rgba(6,24,20,0.95)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="relative block font-serif text-[1.4rem] leading-none text-white">{canContinue ? "Continuer" : "Jouer"}</span>
              <span className="relative mt-1.5 block text-[0.78rem] leading-5 text-emerald-100/60">Directement dans l'aventure</span>
            </button>

            <button
              type="button"
              onClick={onOpenCodex}
              className="group relative overflow-hidden rounded-[1rem] border border-white/15 bg-[rgba(6,14,22,0.75)] px-5 py-3 text-left transition hover:border-white/25 hover:bg-[rgba(6,14,22,0.9)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="relative block font-serif text-[1.15rem] leading-none text-white/90">Regles du jeu</span>
            </button>

            <Link
              href="/lab"
              className="group relative overflow-hidden rounded-[1rem] border border-white/10 bg-[rgba(6,14,22,0.6)] px-5 py-3 text-left transition hover:border-white/20 hover:bg-[rgba(6,14,22,0.8)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="relative block text-[0.85rem] leading-none text-white/60">Laboratoire IA</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function IngameOverlay({
  onOpenMenu,
}: {
  onOpenMenu: () => void;
}) {
  return (
    <div className="pointer-events-none fixed right-3 top-3 z-[210] flex items-start justify-end">
      <div className="pointer-events-auto ogot-book-page rounded-[1.15rem] px-2 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.24)]">
        <button
          type="button"
          onClick={onOpenMenu}
          className="rounded-[0.95rem] border border-[rgba(79,195,247,0.18)] bg-[rgba(6,20,28,0.76)] px-3 py-2 text-sm font-semibold text-[#e0f7fa] transition hover:bg-[rgba(79,195,247,0.15)]"
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export function HomeExperience({ initialLiveChampionProfile = null }: HomeExperienceProps) {
  const [screen, setScreen] = useState<Screen>("menu");
  const [sessionKey, setSessionKey] = useState(0);
  const [codexOpen, setCodexOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const canContinue = screen === "game" || sessionKey > 0;

  const launchDirect = () => {
    startTransition(() => {
      setSessionKey((current) => current + 1);
      setScreen("game");
      setMenuOpen(false);
    });
  };

  const openIntro = () => {
    startTransition(() => {
      setScreen("intro");
      setMenuOpen(false);
    });
  };

  const enterGame = () => {
    startTransition(() => {
      setSessionKey((current) => current + (screen === "game" ? 1 : 0));
      setScreen("game");
      setMenuOpen(false);
    });
  };

  if (screen === "menu") {
    return (
      <>
        <MainMenu canContinue={canContinue} onOpenCodex={() => setCodexOpen(true)} onOpenIntro={openIntro} onStartDirect={launchDirect} />
        {codexOpen ? <CodexOverlay onClose={() => setCodexOpen(false)} /> : null}
      </>
    );
  }

  if (screen === "intro") {
    return (
      <>
        <IntroSequence onBack={() => setScreen("menu")} onStart={enterGame} />
        {codexOpen ? <CodexOverlay onClose={() => setCodexOpen(false)} /> : null}
      </>
    );
  }

  return (
    <>
      <AdventureClient key={sessionKey} initialLiveChampionProfile={initialLiveChampionProfile} skipStoryIntro />
      <IngameOverlay onOpenMenu={() => setMenuOpen(true)} />
      {menuOpen ? (
        <div className="fixed inset-0 z-[220]">
          <MainMenu canContinue={canContinue} onOpenCodex={() => setCodexOpen(true)} onOpenIntro={openIntro} onStartDirect={launchDirect} />
        </div>
      ) : null}
      {codexOpen ? <CodexOverlay onClose={() => setCodexOpen(false)} /> : null}
    </>
  );
}
