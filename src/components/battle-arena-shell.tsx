"use client";

interface BattleArenaShellProps {
  embedded?: boolean;
}

function ArenaTorch({ className }: { className: string }) {
  return (
    <div className={["absolute h-16 w-10", className].join(" ")} aria-hidden="true">
      <div className="absolute bottom-0 left-1/2 h-9 w-4 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#4a3520,#22150e)] shadow-[0_8px_18px_rgba(0,0,0,0.35)]" />
      <div className="absolute bottom-7 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,236,180,0.95),rgba(255,191,86,0.72)_46%,rgba(255,145,31,0)_74%)] blur-[1px] animate-[ogotTorchFlicker_3.2s_ease-in-out_infinite]" />
      <div className="absolute bottom-8 left-1/2 h-10 w-12 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,92,0.42),rgba(255,145,31,0.18)_46%,rgba(255,145,31,0)_72%)] blur-md" />
    </div>
  );
}

function BenchSlotStrip({ tone }: { tone: "player" | "enemy" }) {
  const slotClass =
    tone === "player"
      ? "border-cyan-200/12 bg-[linear-gradient(180deg,rgba(17,54,54,0.38),rgba(5,18,20,0.28))]"
      : "border-rose-200/12 bg-[linear-gradient(180deg,rgba(60,24,36,0.36),rgba(18,7,12,0.3))]";

  return (
    <div className="absolute inset-x-[14%] top-[30%] grid h-[34%] grid-cols-4 gap-[5%]">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={`${tone}-bench-slot-${index}`}
          className={["rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_28px_rgba(0,0,0,0.12)]", slotClass].join(" ")}
        />
      ))}
    </div>
  );
}

/**
 * Draws the non-interactive combat room behind the Three.js board.
 */
export function BattleArenaShell({ embedded = false }: BattleArenaShellProps) {
  const frameClass = embedded
    ? "h-[min(62rem,100%)] w-full max-w-none"
    : "h-[100dvh] w-[100vw] max-w-none";

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
      <div className={["relative overflow-hidden", frameClass].join(" ")} aria-hidden="true">
        <div
          className="absolute inset-0 scale-[1.06] bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/images/game/arena-autobattler-forest.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(255,255,255,0.06),transparent_48%),radial-gradient(ellipse_at_center,transparent_54%,rgba(2,6,9,0.34)_100%),linear-gradient(180deg,rgba(2,8,9,0.04),rgba(2,5,8,0.22))]" />
        <div className="absolute inset-x-[3%] top-[6%] bottom-[3%] rounded-[2rem] border border-white/6 bg-[radial-gradient(ellipse_at_50%_42%,rgba(217,236,196,0.08),transparent_48%),linear-gradient(180deg,rgba(38,48,31,0.08),rgba(9,17,15,0.04))] shadow-[0_42px_100px_rgba(0,0,0,0.28)]" />

        <div className="absolute left-[28%] right-[28%] top-[11%] h-[7.2%] rounded-[1.1rem] border border-[#e6d3a820] bg-[linear-gradient(180deg,rgba(56,42,27,0.36),rgba(18,17,13,0.28))] shadow-[inset_0_1px_0_rgba(255,232,174,0.1),0_18px_34px_rgba(0,0,0,0.12)]">
          <BenchSlotStrip tone="enemy" />
          <div className="absolute inset-x-[10%] bottom-[10%] h-[12%] rounded-full bg-[linear-gradient(180deg,rgba(12,18,24,0.16),rgba(6,10,12,0.24))]" />
        </div>

        <div className="absolute left-[10%] right-[10%] top-[16%] bottom-[12%] rounded-[1.7rem] border border-[#e6d3a812] bg-[radial-gradient(ellipse_at_50%_50%,rgba(190,220,172,0.055),transparent_66%)] shadow-[inset_0_0_0_1px_rgba(255,232,174,0.05),0_30px_70px_rgba(0,0,0,0.12)]">
          <div className="absolute inset-[2.4%] rounded-[1.35rem] border border-white/4" />
          <div className="absolute inset-x-[12%] top-[50%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,236,180,0.16),transparent)]" />
        </div>

        <div className="absolute left-[12%] right-[12%] bottom-[1.5%] h-[13%] rounded-[1.2rem] border border-[#ffe8af20] bg-[linear-gradient(180deg,rgba(58,43,27,0.42),rgba(21,16,11,0.34))] shadow-[inset_0_1px_0_rgba(255,232,174,0.1),0_22px_46px_rgba(0,0,0,0.16)]">
          <BenchSlotStrip tone="player" />
          <div className="absolute inset-x-[10%] top-[12%] h-[12%] rounded-full bg-[linear-gradient(180deg,rgba(255,243,199,0.08),rgba(255,243,199,0.01))]" />
        </div>

        <ArenaTorch className="left-[17%] top-[10%]" />
        <ArenaTorch className="right-[17%] top-[10%]" />
        <ArenaTorch className="left-[14%] bottom-[8%]" />
        <ArenaTorch className="right-[14%] bottom-[8%]" />

        <div className="absolute left-[12%] right-[12%] bottom-[17%] h-[10%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,212,255,0.12),rgba(120,212,255,0.035)_42%,transparent_74%)] blur-xl" />
        <div className="absolute inset-x-[14%] top-[23%] h-[42%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035),transparent_70%)] blur-3xl" />
      </div>
    </div>
  );
}
