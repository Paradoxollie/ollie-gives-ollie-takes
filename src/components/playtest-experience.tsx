"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AdventureClient } from "@/components/adventure-client";

function requestFullscreen() {
  const root = document.documentElement;
  if (!document.fullscreenElement && root.requestFullscreen) {
    void root.requestFullscreen().catch(() => undefined);
  }
}

function PlaytestOrientationHint() {
  return (
    <div className="ogot-playtest-orientation fixed inset-x-3 bottom-3 z-[260] rounded-[1.15rem] border border-cyan-100/22 bg-[rgba(3,12,24,0.92)] px-4 py-3 text-center text-sm font-semibold text-cyan-50 shadow-[0_18px_54px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      Mode paysage conseille
    </div>
  );
}

export function PlaytestExperience() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      return;
    }

    window.render_game_to_text = () =>
      JSON.stringify({
        mode: "playtest-menu",
        title: "Ollie Gives, Ollie Takes",
      });

    return () => {
      window.render_game_to_text = undefined;
    };
  }, [started]);

  if (started) {
    return (
      <>
        <AdventureClient skipStoryIntro playtestMode />
        <PlaytestOrientationHint />
      </>
    );
  }

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[#020810] text-white" data-testid="playtest-menu">
      <div className="absolute inset-0">
        <Image src="/images/story_comic_forest.png" alt="" fill className="object-cover opacity-55" priority />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,16,0.62),rgba(2,8,16,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(103,232,249,0.18),rgba(2,8,16,0)_42%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[72rem] flex-col items-center justify-center px-4 py-8 text-center">
        <div className="relative h-[10rem] w-[10rem] sm:h-[13rem] sm:w-[13rem]">
          <Image src="/ollie.png" alt="Ollie" fill className="object-contain drop-shadow-[0_20px_54px_rgba(79,195,247,0.34)]" priority />
        </div>

        <p className="mt-5 text-[0.58rem] font-black uppercase tracking-[0.34em] text-cyan-100/58">Version test</p>
        <h1 className="mt-3 font-serif text-[3.4rem] leading-[0.88] text-white drop-shadow-[0_4px_24px_rgba(79,195,247,0.34)] sm:text-[5.4rem]">
          Ollie Gives,
          <br />
          Ollie Takes
        </h1>

        <div className="mt-8 flex w-full max-w-[24rem] flex-col gap-3">
          <button
            type="button"
            data-testid="playtest-start"
            onClick={() => {
              requestFullscreen();
              setStarted(true);
            }}
            className="rounded-[1.15rem] border-2 border-cyan-200/36 bg-[linear-gradient(90deg,rgba(45,212,191,0.92),rgba(34,211,238,0.92))] px-7 py-4 text-lg font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_24px_70px_rgba(8,145,178,0.28)] transition hover:brightness-105"
          >
            Jouer
          </button>

          <button
            type="button"
            onClick={requestFullscreen}
            className="rounded-[1rem] border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/12"
          >
            Plein ecran
          </button>
        </div>

        <p className="mt-6 max-w-[25rem] text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
          PC, tablette ou telephone en paysage
        </p>
      </div>

      <PlaytestOrientationHint />
    </main>
  );
}
