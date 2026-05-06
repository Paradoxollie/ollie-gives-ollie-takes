"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";

import { CoinMesh } from "@/components/3d/coin-mesh";
import type { RoundCoinTossRecap } from "@/lib/round-coin-toss";

interface RoundCoinTossOverlayProps {
  recap: RoundCoinTossRecap;
  canConfirm: boolean;
  onConfirm?: () => void;
}

export function RoundCoinTossOverlay({ recap, canConfirm, onConfirm }: RoundCoinTossOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [recap.id]);

  const [intro] = useSpring(
    () => ({
      reset: true,
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { clamp: true, tension: 120, friction: 14 },
    }),
    [recap.id],
  );

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  const isSun = recap.coinFace === "sun";
  const starterName = recap.startingPlayer === "player" ? "Ollie" : "Le rival";
  
  return createPortal(
    <animated.div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(4,15,18,0.78),rgba(1,5,9,0.9)_76%)] backdrop-blur-sm"
      data-testid="round-coin-toss-overlay"
      style={{ opacity: intro.opacity }}
    >
      {/* 3D Coin Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2.5]} gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 1.8, 8.6]} fov={32} />
          
          <ambientLight intensity={0.58} />
          <spotLight position={[0, 10, 10]} intensity={3.3} color="#fef08a" castShadow penumbra={1} />
          <directionalLight position={[-5, 5, 5]} intensity={1.2} color="#38bdf8" />
          
          <Environment preset="night" blur={1} />
          
          <CoinMesh 
            result={recap.coinFace} 
            onLanded={() => setLanded(true)} 
          />
        </Canvas>
      </div>

      {/* HTML Result Text Layer */}
      <div className="absolute inset-x-0 bottom-[11%] z-10 flex flex-col items-center px-4 text-center">
        <div 
          className="w-full max-w-xl transition-all duration-700 ease-out"
          style={{ 
            opacity: landed ? 1 : 0, 
            transform: landed ? "translateY(0)" : "translateY(2rem)" 
          }}
        >
          <div className="rounded-[1.35rem] border border-cyan-100/16 bg-[linear-gradient(180deg,rgba(5,18,22,0.88),rgba(3,9,13,0.84))] px-5 py-5 shadow-[0_26px_70px_rgba(4,16,22,0.46),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:px-8 sm:py-6">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-cyan-100/64">
              Face {isSun ? "Soleil" : "Lune"}
            </p>
            <h2 className="mt-3 text-[2rem] font-black leading-none text-[#e0f7fa] sm:text-[2.55rem]">
              {starterName} joue en premier
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/62">
              La manche peut commencer.
            </p>

            <button
              type="button"
              onClick={onConfirm}
              disabled={!canConfirm || !landed}
              className={[
                "mt-6 w-full rounded-[0.95rem] border px-6 py-4 text-[0.9rem] font-extrabold uppercase tracking-[0.12em] transition-all sm:w-[80%]",
                (canConfirm && landed)
                  ? "cursor-pointer border-cyan-200/34 bg-[linear-gradient(180deg,rgba(88,220,206,0.28),rgba(18,114,121,0.44))] text-cyan-50 shadow-[0_0_22px_rgba(103,232,249,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-cyan-100/60 hover:bg-[linear-gradient(180deg,rgba(103,232,249,0.34),rgba(15,118,130,0.52))]"
                  : "cursor-default border-cyan-200/12 bg-[rgba(6,20,28,0.42)] text-cyan-200/40",
              ].join(" ")}
              data-testid="round-coin-toss-confirm"
            >
              {canConfirm && landed ? "Entrer dans la manche" : "Lecture du tirage..."}
            </button>
          </div>
        </div>
      </div>
    </animated.div>,
    document.body,
  );
}
