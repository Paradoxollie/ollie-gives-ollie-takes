"use client";

function SpiritWisp({ top, left, size, delay, duration, color }: { top: string; left: string; size: number; delay: number; duration: number; color: string }) {
  return (
    <span
      className="absolute rounded-full"
      style={{
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`,
        animation: `ogotFireflyFloat ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function SpiritBeam() {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40rem] h-[60%] pointer-events-none opacity-[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(79,195,247,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(125,247,255,0.2),transparent_36%)]" />
    </div>
  );
}

function ForestCanopy() {
  return (
    <>
      {/* Deep background trees */}
      <div className="absolute left-[-6%] bottom-0 h-[52%] w-[28rem] rounded-t-[100%] bg-[linear-gradient(180deg,rgba(3,14,12,0),rgba(4,16,14,0.85)_40%,rgba(2,10,10,0.98)_100%)] opacity-70" />
      <div className="absolute left-[8%] bottom-0 h-[58%] w-[22rem] rounded-t-[100%] bg-[linear-gradient(180deg,rgba(3,14,12,0),rgba(4,16,14,0.88)_44%,rgba(2,10,10,0.98)_100%)] opacity-75" />
      <div className="absolute left-[22%] bottom-0 h-[42%] w-[20rem] rounded-t-[100%] bg-[linear-gradient(180deg,rgba(3,14,12,0),rgba(3,14,12,0.84)_46%,rgba(2,8,8,0.98)_100%)] opacity-65" />
      <div className="absolute right-[-6%] bottom-0 h-[54%] w-[28rem] rounded-t-[100%] bg-[linear-gradient(180deg,rgba(3,14,12,0),rgba(4,16,14,0.85)_40%,rgba(2,10,10,0.98)_100%)] opacity-70" />
      <div className="absolute right-[7%] bottom-0 h-[60%] w-[23rem] rounded-t-[100%] bg-[linear-gradient(180deg,rgba(3,14,12,0),rgba(4,16,14,0.88)_44%,rgba(2,10,10,0.98)_100%)] opacity-75" />
      <div className="absolute right-[25%] bottom-0 h-[40%] w-[19rem] rounded-t-[100%] bg-[linear-gradient(180deg,rgba(3,14,12,0),rgba(3,14,12,0.84)_46%,rgba(2,8,8,0.98)_100%)] opacity-65" />

      {/* Foreground tree trunks with bioluminescent moss */}
      <div className="absolute left-[5%] bottom-[10%] h-[32%] w-[14rem] opacity-50">
        <div className="absolute bottom-0 left-[10%] h-[85%] w-[1.1rem] rounded-full bg-[#04100e]" />
        <div className="absolute bottom-[40%] left-0 h-[5.5rem] w-[5.5rem] rounded-[50%_50%_45%_45%] bg-[#061412]" />
        {/* Bioluminescent spots */}
        <div className="absolute bottom-[30%] left-[14%] h-2 w-2 rounded-full bg-[rgba(105,240,174,0.3)] shadow-[0_0_8px_rgba(105,240,174,0.4)] animate-[ogotOllieEyesGlow_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[50%] left-[8%] h-1.5 w-1.5 rounded-full bg-[rgba(79,195,247,0.25)] shadow-[0_0_6px_rgba(79,195,247,0.35)] animate-[ogotOllieEyesGlow_5s_ease-in-out_1s_infinite]" />
      </div>
      <div className="absolute right-[6%] bottom-[8%] h-[34%] w-[15rem] opacity-50">
        <div className="absolute bottom-0 right-[12%] h-[87%] w-[1.1rem] rounded-full bg-[#04100e]" />
        <div className="absolute bottom-[42%] right-0 h-[5.8rem] w-[5.8rem] rounded-[50%_50%_45%_45%] bg-[#061412]" />
        <div className="absolute bottom-[35%] right-[16%] h-2 w-2 rounded-full bg-[rgba(105,240,174,0.25)] shadow-[0_0_8px_rgba(105,240,174,0.35)] animate-[ogotOllieEyesGlow_4.5s_ease-in-out_0.5s_infinite]" />
        <div className="absolute bottom-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-[rgba(179,136,255,0.2)] shadow-[0_0_6px_rgba(179,136,255,0.3)] animate-[ogotOllieEyesGlow_5.5s_ease-in-out_2s_infinite]" />
      </div>
    </>
  );
}

export function BattleAmbience() {
  const wisps = [
    // Spirit blue wisps
    { top: "12%", left: "10%", size: 5, delay: 0.2, duration: 5.8, color: "rgba(79,195,247,0.7)" },
    { top: "20%", left: "26%", size: 4, delay: 1.4, duration: 6.4, color: "rgba(125,247,255,0.6)" },
    { top: "16%", left: "78%", size: 5, delay: 0.8, duration: 5.1, color: "rgba(79,195,247,0.65)" },
    { top: "36%", left: "86%", size: 4, delay: 1.6, duration: 6.8, color: "rgba(125,247,255,0.55)" },
    // Spirit green wisps
    { top: "54%", left: "6%", size: 5, delay: 0.4, duration: 5.5, color: "rgba(105,240,174,0.6)" },
    { top: "62%", left: "20%", size: 4, delay: 1.9, duration: 7.2, color: "rgba(185,246,202,0.5)" },
    { top: "68%", left: "76%", size: 5, delay: 1.1, duration: 5.9, color: "rgba(105,240,174,0.55)" },
    // Golden wisps (Ori-style)
    { top: "80%", left: "90%", size: 4, delay: 0.6, duration: 6.3, color: "rgba(255,204,128,0.6)" },
    { top: "76%", left: "44%", size: 5, delay: 1.2, duration: 5.4, color: "rgba(255,204,128,0.5)" },
    // Purple mist wisps
    { top: "28%", left: "50%", size: 3, delay: 2.1, duration: 7.8, color: "rgba(179,136,255,0.4)" },
    { top: "44%", left: "14%", size: 3, delay: 0.9, duration: 8.2, color: "rgba(179,136,255,0.35)" },
    { top: "48%", left: "64%", size: 4, delay: 1.7, duration: 6.6, color: "rgba(206,147,216,0.4)" },
    // Extra tiny spirit particles
    { top: "8%", left: "42%", size: 2, delay: 0.3, duration: 9.1, color: "rgba(125,247,255,0.45)" },
    { top: "32%", left: "36%", size: 2, delay: 2.4, duration: 8.5, color: "rgba(105,240,174,0.4)" },
    { top: "72%", left: "52%", size: 2, delay: 1.5, duration: 7.9, color: "rgba(79,195,247,0.4)" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#020e0c_0%,#041410_28%,#031210_56%,#020a08_100%)]">
      {/* Atmospheric glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,rgba(79,195,247,0.1),transparent_24%),radial-gradient(circle_at_78%_12%,rgba(179,136,255,0.06),transparent_20%),radial-gradient(circle_at_16%_58%,rgba(105,240,174,0.06),transparent_24%),radial-gradient(circle_at_50%_50%,rgba(79,195,247,0.03),transparent_40%)]" />

      {/* Spirit tree beam from above */}
      <SpiritBeam />

      {/* Subtle grid pattern (like spirit energy veins) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,rgba(79,195,247,0.1)_0_1px,transparent_1px_60px),repeating-linear-gradient(90deg,rgba(79,195,247,0.1)_0_1px,transparent_1px_60px)]" />

      {/* Ground fog */}
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent,rgba(3,14,12,0.5)_30%,rgba(2,10,10,0.95)_100%)]" />
      <div className="absolute inset-x-0 bottom-[10%] h-[30%] bg-[radial-gradient(ellipse_at_center,rgba(79,195,247,0.05),transparent_50%),radial-gradient(ellipse_at_40%_80%,rgba(105,240,174,0.04),transparent_40%)]" />

      {/* Forest canopy and trees */}
      <ForestCanopy />

      {/* Spirit wisps */}
      {wisps.map((wisp, index) => (
        <SpiritWisp
          key={`${wisp.left}-${wisp.top}-${index}`}
          top={wisp.top}
          left={wisp.left}
          size={wisp.size}
          delay={wisp.delay}
          duration={wisp.duration}
          color={wisp.color}
        />
      ))}
    </div>
  );
}
