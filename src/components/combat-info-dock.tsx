"use client";

interface CombatInfoDockProps {
  currentStep: number;
  totalSteps: number;
  nodeKindLabel: string;
  nodeTitle: string;
  enemyName: string;
  enemyPlaystyle: string;
  enemyDeckCount: number;
  enemyMutations: number;
  spectatorMode: boolean;
  selectedCardName: string;
  selectedCardHint: string;
  playerShield: number;
  enemyShield: number;
  playerDrawBonus: number;
  enemyDrawBonus: number;
  playerManaBonus: number;
  enemyManaBonus: number;
  playerPoison: number;
  enemyPoison: number;
  lastEvent: string;
  onNewRun: () => void;
}

export function CombatInfoDock({
  currentStep,
  totalSteps,
  nodeKindLabel,
  nodeTitle,
  enemyName,
  enemyPlaystyle,
  enemyDeckCount,
  enemyMutations,
  spectatorMode,
  selectedCardName,
  selectedCardHint,
  playerShield,
  enemyShield,
  playerDrawBonus,
  enemyDrawBonus,
  playerManaBonus,
  enemyManaBonus,
  playerPoison,
  enemyPoison,
  lastEvent,
  onNewRun,
}: CombatInfoDockProps) {
  return (
    <aside className="w-full text-white">
      <div className="grid gap-1.5">
        {/* Enemy encounter info */}
        <section className="rounded-[0.8rem] border border-white/10 bg-[rgba(4,8,14,0.92)] p-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 flex-col items-center justify-center rounded-[0.6rem] border border-cyan-200/18 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),rgba(8,14,24,0.92)_74%)] text-center">
              <span className="text-[0.38rem] uppercase tracking-[0.12em] text-cyan-100/58">Etape</span>
              <span className="text-[0.8rem] font-semibold leading-none text-white">{currentStep}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/40">
                {nodeKindLabel} {currentStep}/{totalSteps}
              </p>
              <p className="mt-0.5 truncate text-[0.72rem] font-semibold text-white">{enemyName}</p>
            </div>
            <button
              type="button"
              onClick={onNewRun}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-[0.6rem] border border-white/10 bg-white/6 text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label="Nouvelle partie"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 3v4h-4" />
                <path d="M14 9A5 5 0 1 1 9 4c1.4 0 2.48.47 3.4 1.24L15 7.5" />
              </svg>
            </button>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1 text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-white/50">
            <span className="rounded-full border border-white/8 bg-white/5 px-2 py-0.5">Deck {enemyDeckCount}</span>
            <span className="rounded-full border border-white/8 bg-white/5 px-2 py-0.5">+{enemyMutations}</span>
            {spectatorMode ? <span className="rounded-full border border-cyan-200/15 bg-cyan-200/8 px-2 py-0.5 text-cyan-100">IA</span> : null}
          </div>
        </section>

        {/* Selected card */}
        <section className="rounded-[0.8rem] border border-white/8 bg-[rgba(4,8,14,0.88)] p-2.5 backdrop-blur-md">
          <p className="text-[0.38rem] uppercase tracking-[0.18em] text-white/40">Carte choisie</p>
          <p className="mt-0.5 text-[0.72rem] font-semibold text-white">{selectedCardName}</p>
          <p className="mt-0.5 text-[0.6rem] leading-4 text-white/55">{selectedCardHint}</p>
        </section>

        {/* Combat resources */}
        <section className="rounded-[0.8rem] border border-white/8 bg-[rgba(4,8,14,0.88)] p-2.5 backdrop-blur-md">
          <p className="text-[0.38rem] uppercase tracking-[0.18em] text-white/40">Ressources</p>
          <div className="mt-1.5 grid grid-cols-2 gap-1.5 text-[0.56rem] font-semibold text-white/68">
            <div className="rounded-[0.55rem] border border-cyan-100/10 bg-cyan-100/6 px-2 py-1">
              Ollie Bcl {playerShield} - Pioche +{playerDrawBonus} - En +{playerManaBonus} - Psn {playerPoison}
            </div>
            <div className="rounded-[0.55rem] border border-rose-100/10 bg-rose-100/6 px-2 py-1">
              Rival Bcl {enemyShield} - Pioche +{enemyDrawBonus} - En +{enemyManaBonus} - Psn {enemyPoison}
            </div>
          </div>
        </section>

        {/* Last event */}
        <section className="rounded-[0.8rem] border border-white/8 bg-[rgba(4,8,14,0.88)] p-2.5 backdrop-blur-md">
          <p className="text-[0.38rem] uppercase tracking-[0.18em] text-white/40">Dernier coup</p>
          <p className="mt-0.5 text-[0.6rem] leading-4 text-white/60">{lastEvent}</p>
        </section>
      </div>
    </aside>
  );
}
