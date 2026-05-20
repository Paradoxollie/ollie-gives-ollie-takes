"use client";

import { useEffect, useState } from "react";

import { BattleResolutionOverlay } from "@/components/battle-resolution-overlay";
import { BattleStage } from "@/components/battle-stage";
import { GamePanel } from "@/components/game-panel";
import { RoundCoinTossOverlay } from "@/components/round-coin-toss-overlay";
import { usePinnedLiveChampion } from "@/components/use-live-champion";
import { GAME_CONFIG } from "@/core";
import { useBattleController } from "@/components/use-battle-controller";
import { isLabSurfaceEnabled } from "@/lib/deployment-mode";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

interface BattleClientProps {
  labMode?: boolean;
  embedded?: boolean;
  initialLiveChampionProfile?: RuntimeLiveChampionProfile | null;
}

export function BattleClient({
  labMode = false,
  embedded = false,
  initialLiveChampionProfile = null,
}: BattleClientProps) {
  const [seed, setSeed] = useState(GAME_CONFIG.defaultSeed);
  const [restartVersion, setRestartVersion] = useState(0);
  const liveChampion = usePinnedLiveChampion(`lab:${seed}:${restartVersion}`, initialLiveChampionProfile, {
    refresh: isLabSurfaceEnabled(),
  });
  const controller = useBattleController({
    seed,
    enemyBot: liveChampion.bot,
    enemySearchDepth: liveChampion.profile.searchDepth,
    enemyBeamWidth: liveChampion.profile.beamWidth,
  });

  useEffect(() => {
    window.render_game_to_text = controller.renderText;
    window.advanceTime = controller.advanceTime;

    return () => {
      window.render_game_to_text = undefined;
      window.advanceTime = undefined;
    };
  }, [controller]);

  useEffect(() => {
    if (embedded && controller.roundCoinTossRecap && controller.roundCoinTossCanConfirm) {
      controller.dismissRoundCoinTossRecap();
    }
  }, [
    controller.dismissRoundCoinTossRecap,
    controller.roundCoinTossCanConfirm,
    controller.roundCoinTossRecap,
    embedded,
  ]);

  if (!controller.match) {
    return null;
  }

  return (
    <div className="relative">
      <BattleStage
        match={controller.match}
        hand={controller.hand}
        selectedCardId={controller.selectedCardId}
        selectedCardIds={controller.selectedCardIds}
        selectedCard={controller.selectedCard}
        selectedManaCost={controller.selectedManaCost}
        availableMana={controller.availableMana}
        hoveredPosition={controller.hoveredPosition}
        hoverPreview={controller.hoverPreview}
        canHumanInteract={controller.canHumanInteract}
        control={controller.control}
        labMode={labMode}
        embedded={embedded}
        debugState={controller.debugState}
        sidePanel={
          <GamePanel
            match={controller.match}
            seed={seed}
            preview={controller.hoverPreview}
            control={controller.control}
            onSeedChange={(value) => setSeed(Number.isFinite(value) ? value : GAME_CONFIG.defaultSeed)}
            onRestart={() => {
              setRestartVersion((current) => current + 1);
              controller.restart();
            }}
          />
        }
        onCellHover={controller.hoverCell}
        onCellClick={controller.placeCard}
        onSelectCard={controller.selectCard}
        onFireflyReroll={controller.triggerFireflyReroll}
        onReflectionCopy={controller.triggerReflectionCopy}
      />

      {controller.resolutionRecap ? (
        <BattleResolutionOverlay
          recap={controller.resolutionRecap}
          onContinue={controller.dismissResolutionRecap}
          continueLabel={controller.resolutionRecap.phase === "battle" ? "Fin de match" : undefined}
        />
      ) : null}

      {controller.roundCoinTossRecap && !embedded ? (
        <RoundCoinTossOverlay
          recap={controller.roundCoinTossRecap}
          canConfirm={controller.roundCoinTossCanConfirm}
          onConfirm={controller.dismissRoundCoinTossRecap}
        />
      ) : null}
    </div>
  );
}
