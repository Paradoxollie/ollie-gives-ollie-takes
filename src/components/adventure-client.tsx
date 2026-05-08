"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { AdventureMap } from "@/components/adventure-map";
import { AdventureCharmOverlay } from "@/components/adventure-charm-overlay";
import { AdventureDraftOverlay } from "@/components/adventure-draft-overlay";
import { AdventureRouteChoiceRack } from "@/components/adventure-route-choice-rack";
import { CharmBuffBar } from "@/components/charm-buff-bar";
import { AdventureRewardOverlay } from "@/components/adventure-reward-overlay";
import { BattleResolutionOverlay } from "@/components/battle-resolution-overlay";
import { BattleStage } from "@/components/battle-stage";
import { CardView } from "@/components/card-view";
import { CombatInfoDock } from "@/components/combat-info-dock";
import { ForestAtmosphere } from "@/components/forest-atmosphere";
import { GameDrawer } from "@/components/game-drawer";
import { OllieBubble } from "@/components/ollie-bubble";
import { OllieAvatar } from "@/components/ollie-avatar";
import { RoundCoinTossOverlay } from "@/components/round-coin-toss-overlay";
import { StoryIntro, useStoryIntro } from "@/components/story-intro";
import { useBattleController } from "@/components/use-battle-controller";
import { usePinnedLiveChampion } from "@/components/use-live-champion";
import {
  buildAdventureEnemyLoadout,
  chooseAdventureCampForBot,
  chooseAdventureCharmForBot,
  chooseAdventureDraftCardsForBot,
  chooseAdventureForgeForBot,
  chooseAdventureNodeForBot,
  chooseAdventureRewardForBot,
  chooseAdventureSiteContinueForBot,
  chooseAdventureSiteModeForBot,
  completeAdventureEncounter,
  createAdventureRun,
  chooseAdventureCampMode,
  enterAdventureNode,
  getAdventureDeckCards,
  getLuckyCharmDefinition,
  GAME_CONFIG,
  getAdventureLocationsCleared,
  getAdventureNode,
  isCombatAdventureNode,
  leaveAdventureSite,
  resolveAdventureReward,
  resolveAdventureCamp,
  resolveAdventureCharm,
  resolveAdventureDraft,
  resolveAdventureForge,
  resolveAdventureTreasure,
  serializeAdventureState,
  toggleAdventureDraftCard,
  toggleAdventureForgeSelection,
  greedyBot,
  heuristicBot,
} from "@/core";
import type { AdventureNode, AdventureRunState } from "@/core/types";
import { isLabSurfaceEnabled } from "@/lib/deployment-mode";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

function kindLabel(kind: AdventureNode["kind"]): string {
  switch (kind) {
    case "combat":
      return "Combat";
    case "elite":
      return "Elite";
    case "shop":
      return "Forge";
    case "chest":
      return "Coffre";
    case "rest":
      return "Camp";
    case "boss":
      return "Boss";
  }
}

function runStatusText(run: AdventureRunState): string {
  if (run.outcome === "victory") {
    return "Boss vaincu";
  }

  if (run.outcome === "defeat") {
    return "Run termine";
  }

  if (run.phase === "encounter") {
    return "Lieu en cours";
  }

  if (run.phase === "draft") {
    return "Draft initial";
  }

  if (run.phase === "reward") {
    return "Recompense";
  }

  if (run.phase === "charm") {
    return "Porte-bonheur";
  }

  if (run.phase === "site") {
    return "Lieu";
  }

  return "Choix de route";
}

function focusNode(run: AdventureRunState): AdventureNode | null {
  if (run.phase === "draft") {
    return null;
  }

  if (run.phase === "encounter" && run.activeNodeId) {
    return getAdventureNode(run, run.activeNodeId);
  }

  if (run.phase === "site" && run.activeNodeId) {
    return getAdventureNode(run, run.activeNodeId);
  }

  if (run.phase === "charm" && run.activeNodeId) {
    return getAdventureNode(run, run.activeNodeId);
  }

  if (run.availableNodeIds.length > 0) {
    return getAdventureNode(run, run.availableNodeIds[0]);
  }

  if (run.activeNodeId) {
    return getAdventureNode(run, run.activeNodeId);
  }

  return null;
}

function resultTitle(run: AdventureRunState): string {
  return run.outcome === "victory" ? "Le boss est tombe" : "La route s'arrete ici";
}

function battleContinueLabel(winner: "player" | "enemy" | "draw" | null): string | undefined {
  if (!winner) {
    return undefined;
  }

  return winner === "player" ? "Continuer l'aventure" : "Relancer une partie";
}

function sourceLabel(sourceType: AdventureRunState["deck"]["cards"][number]["card"]["sourceType"]): string {
  switch (sourceType) {
    case "draft":
      return "Draft";
    case "reward":
      return "Butin";
    case "treasure":
      return "Tresor";
    case "upgrade":
      return "Amelioree";
    case "fusion":
      return "Fusion";
    case "enemy-upgrade":
      return "Elite";
    case "charm":
      return "Porte-bonheur";
  }
}

function phaseNarrative(run: AdventureRunState, previewNode: AdventureNode | null, spectatorMode: boolean): string {
  if (run.outcome === "victory") {
    return "Ollie se couche enfin devant la porte ouverte. Le plateau te laisse repartir.";
  }

  if (run.outcome === "defeat") {
    return "La maison se tait, mais le jeu garde la trace de ton passage pour la prochaine tentative.";
  }

  if (run.phase === "charm") {
    return "La premiere decision donne deja une couleur a la run. Le ton du livre se fixe ici.";
  }

  if (run.phase === "draft") {
    return "Le pool est tire. Ton deck de depart se decide maintenant, avant que la carte du monde ne bouge.";
  }

  if (run.phase === "reward") {
    return "Le duel est termine. Ollie fait glisser une nouvelle carte entre les planches du plateau.";
  }

  if (run.phase === "site") {
    return "Le lieu actif suspend la carte du monde. Tu modifies ton deck avant de reprendre la route.";
  }

  if (run.phase === "encounter") {
    return "Le noeud choisi se referme sur toi. Le monde exterieur attend que le combat soit resolu.";
  }

  if (spectatorMode) {
    return "Le run se joue seul. Tu observes comment l'IA negocie les pieges d'Ollie.";
  }

  if (previewNode) {
    return `La prochaine etape probable est "${previewNode.title}". Le plateau t'observe et attend ton choix.`;
  }

  return "Dans la maison vide, le jeu de societe s'ouvre et t'aspire doucement vers son propre bois.";
}

function ollieQuote(run: AdventureRunState): string {
  if (run.outcome === "victory") {
    return "\"Tu vois ? Je rends parfois les clefs.\"";
  }

  if (run.outcome === "defeat") {
    return "\"Presque. On recommence ? J'adore les secondes entrees.\"";
  }

  if (run.phase === "charm") {
    return "\"Prends un talisman. Je prefere quand les regles mordent des le debut.\"";
  }

  if (run.phase === "draft") {
    return "\"Sept cartes. Pas une de plus. Le reste trouvera peut-etre un autre maitre.\"";
  }

  if (run.phase === "reward") {
    return "\"Tu as gagne quelque chose. Ce serait dommage de choisir timidement.\"";
  }

  if (run.phase === "site") {
    return "\"Le lieu est a toi... pour quelques secondes seulement.\"";
  }

  if (run.phase === "encounter") {
    return "\"Tu veux sortir ? Commence donc par gagner celui-la.\"";
  }

  return "\"La maison est a toi. Enfin... presque.\"";
}

function deckPreviewCard(
  deckCard: AdventureRunState["deck"]["cards"][number],
): {
  instanceId: string;
  archetypeId: string;
  owner: "player";
  name: string;
  sides: AdventureRunState["deck"]["cards"][number]["card"]["sides"];
  family: AdventureRunState["deck"]["cards"][number]["card"]["family"];
  accent: string;
  artSrc: string;
  rarity: AdventureRunState["deck"]["cards"][number]["card"]["rarity"];
  sourceType: AdventureRunState["deck"]["cards"][number]["card"]["sourceType"];
  baseArchetypeId: string | null;
  corruptedBy: null;
} {
  return {
    instanceId: deckCard.deckCardId,
    archetypeId: deckCard.card.id,
    owner: "player",
    name: deckCard.card.name,
    sides: deckCard.card.sides,
    family: deckCard.card.family,
    accent: deckCard.card.accent,
    artSrc: deckCard.card.artSrc,
    rarity: deckCard.card.rarity,
    sourceType: deckCard.card.sourceType,
    baseArchetypeId: deckCard.card.baseArchetypeId,
    corruptedBy: null,
  };
}

const SPECTATOR_FINAL_RECAP_DELAY_MS = 2_650;

function createRandomSeed(): number {
  if (typeof globalThis !== "undefined" && "crypto" in globalThis && globalThis.crypto?.getRandomValues) {
    const buffer = new Uint32Array(1);
    globalThis.crypto.getRandomValues(buffer);
    return (buffer[0] % 2_147_483_646) + 1;
  }

  return Math.floor(Math.random() * 2_147_483_646) + 1;
}

interface AdventureClientProps {
  initialLiveChampionProfile?: RuntimeLiveChampionProfile | null;
  skipStoryIntro?: boolean;
  playtestMode?: boolean;
}

export function AdventureClient({
  initialLiveChampionProfile = null,
  skipStoryIntro = false,
  playtestMode = false,
}: AdventureClientProps) {
  const [seed, setSeed] = useState(GAME_CONFIG.defaultSeed);
  const [run, setRun] = useState<AdventureRunState>(() => createAdventureRun({ seed: GAME_CONFIG.defaultSeed }));
  const [spectatorMode, setSpectatorMode] = useState(false);
  const [spectatorPaused, setSpectatorPaused] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { storySeen, markStorySeen } = useStoryIntro();
  const toggleDrawer = useCallback(() => setDrawerOpen((o) => !o), []);

  useEffect(() => {
    setSeed((currentSeed) => (currentSeed === GAME_CONFIG.defaultSeed ? createRandomSeed() : currentSeed));
  }, []);

  useEffect(() => {
    setRun(createAdventureRun({ seed }));
  }, [seed]);

  const activeNode = run.activeNodeId ? getAdventureNode(run, run.activeNodeId) : null;
  const previewNode = useMemo(() => focusNode(run), [run]);
  const clearedLocations = getAdventureLocationsCleared(run);
  const route = run.history.map((nodeId) => getAdventureNode(run, nodeId));
  const recentRoute = route.slice(-6);
  const deckCards = useMemo(() => getAdventureDeckCards(run), [run]);
  const charmDefinitions = useMemo(() => run.charms.map((charmId) => getLuckyCharmDefinition(charmId)), [run.charms]);
  const progressRatio = run.config.depthCount > 0 ? clearedLocations / run.config.depthCount : 0;
  const immersiveAdventurePhase = run.phase === "draft" || run.phase === "charm" || run.phase === "reward" || run.phase === "site";
  const routeProgressLabel = run.phase === "draft" && run.draft
    ? `${run.draft.selectedCardIds.length}/${run.draft.pickCount}`
    : `${clearedLocations}/${run.config.depthCount}`;
  const deckHeaderLabel = run.phase === "draft" && run.draft ? `Pool ${run.draft.offerCardIds.length}` : `Deck ${run.deck.cards.length}`;
  const ollieLine = ollieQuote(run);
  const deckRarityCounts = useMemo(
    () =>
      deckCards.reduce(
        (counts, entry) => {
          counts[entry.card.rarity] += 1;
          return counts;
        },
        { common: 0, uncommon: 0, rare: 0 },
      ),
    [deckCards],
  );
  const campState = run.phase === "site" && run.siteState?.kind === "camp" ? run.siteState : null;
  const forgeState = run.phase === "site" && run.siteState?.kind === "forge" ? run.siteState : null;
  const treasureState = run.phase === "site" && run.siteState?.kind === "treasure" ? run.siteState : null;
  const isCombatEncounter = Boolean(run.phase === "encounter" && run.encounter && isCombatAdventureNode(run.encounter.kind));
  const enemyLoadout = useMemo(
    () => (activeNode && isCombatEncounter ? buildAdventureEnemyLoadout(run, activeNode) : null),
    [activeNode, isCombatEncounter, run],
  );
  const liveChampion = usePinnedLiveChampion(
    isCombatEncounter ? `adventure:${run.encounter?.battleSeed ?? seed}` : `map:${seed}`,
    initialLiveChampionProfile,
    { refresh: !playtestMode && isLabSurfaceEnabled() },
  );
  const resolvedEnemyBot = useMemo(() => {
    if (!enemyLoadout) {
      return liveChampion.bot;
    }

    if (enemyLoadout.botId === "greedy") {
      return greedyBot;
    }

    if (enemyLoadout.botId === "heuristic") {
      return heuristicBot;
    }

    return liveChampion.bot;
  }, [enemyLoadout, liveChampion.bot]);
  const battle = useBattleController({
    seed: run.encounter?.battleSeed ?? seed,
    enabled: isCombatEncounter,
    playerCards: deckCards.map((entry) => entry.card),
    playerCharmIds: run.charms,
    enemyCards: enemyLoadout?.cards,
    enemyProfile: enemyLoadout?.profile ?? null,
    playerBot: spectatorMode ? liveChampion.bot : null,
    playerWeights: spectatorMode ? liveChampion.profile.weights : null,
    playerSearchDepth: liveChampion.profile.searchDepth,
    playerBeamWidth: liveChampion.profile.beamWidth,
    enemyBot: resolvedEnemyBot,
    enemySearchDepth: enemyLoadout?.searchDepth ?? liveChampion.profile.searchDepth,
    enemyBeamWidth: enemyLoadout?.beamWidth ?? liveChampion.profile.beamWidth,
  });
  const startRandomRun = () => {
    setSpectatorMode(false);
    setSpectatorPaused(false);
    setSeed(createRandomSeed());
  };
  const startSpectatorRun = () => {
    setSpectatorMode(true);
    setSpectatorPaused(false);
    setSeed(createRandomSeed());
  };

  useEffect(() => {
    window.render_game_to_text = () =>
      JSON.stringify({
        ...serializeAdventureState(run, battle.match),
        ui: {
          spectatorMode,
          spectatorPaused,
        },
      });
    window.advanceTime = (ms: number) => {
      battle.advanceTime(ms);
    };

    return () => {
      window.render_game_to_text = undefined;
      window.advanceTime = undefined;
    };
  }, [battle, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || run.phase !== "draft") {
      return;
    }

    const timer = window.setTimeout(() => {
      setRun((current) => {
        if (current.phase !== "draft") {
          return current;
        }

        return resolveAdventureDraft(current, chooseAdventureDraftCardsForBot(current, liveChampion.profile.weights));
      });
    }, 850);

    return () => window.clearTimeout(timer);
  }, [liveChampion.profile.weights, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || run.phase !== "map" || run.outcome !== "in-progress") {
      return;
    }

    const timer = window.setTimeout(() => {
      setRun((current) => {
        if (current.phase !== "map" || current.outcome !== "in-progress") {
          return current;
        }

        const node = chooseAdventureNodeForBot(current, liveChampion.profile.weights);
        return node ? enterAdventureNode(current, node.id) : current;
      });
    }, 900);

    return () => window.clearTimeout(timer);
  }, [liveChampion.profile.weights, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || run.phase !== "charm") {
      return;
    }

    const timer = window.setTimeout(() => {
      setRun((current) => {
        if (current.phase !== "charm") {
          return current;
        }

        const option = chooseAdventureCharmForBot(current, liveChampion.profile.weights);
        return resolveAdventureCharm(current, option?.charmId);
      });
    }, 950);

    return () => window.clearTimeout(timer);
  }, [liveChampion.profile.weights, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || run.phase !== "reward") {
      return;
    }

    const timer = window.setTimeout(() => {
      setRun((current) => {
        if (current.phase !== "reward") {
          return current;
        }

        const option = chooseAdventureRewardForBot(current, liveChampion.profile.weights);
        return resolveAdventureReward(current, option?.rewardId);
      });
    }, 950);

    return () => window.clearTimeout(timer);
  }, [liveChampion.profile.weights, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || run.phase !== "site" || !run.siteState) {
      return;
    }

    const timer = window.setTimeout(() => {
      setRun((current) => {
        if (current.phase !== "site" || !current.siteState) {
          return current;
        }

        if (current.siteState.kind === "camp") {
          if (!current.siteState.selectedMode) {
            return chooseAdventureCampMode(current, chooseAdventureSiteModeForBot(current, liveChampion.profile.weights));
          }

          const deckCard = chooseAdventureCampForBot(current, liveChampion.profile.weights);
          return deckCard ? resolveAdventureCamp(current, deckCard.deckCardId) : leaveAdventureSite(current);
        }

        if (current.siteState.kind === "forge") {
          if (current.siteState.selectedCardIds.length < 2) {
            const nextCard = chooseAdventureForgeForBot(current, liveChampion.profile.weights);
            return nextCard ? toggleAdventureForgeSelection(current, nextCard.deckCardId) : leaveAdventureSite(current);
          }

          return resolveAdventureForge(current);
        }

        return chooseAdventureSiteContinueForBot(current) ? resolveAdventureTreasure(current) : leaveAdventureSite(current);
      });
    }, 900);

    return () => window.clearTimeout(timer);
  }, [liveChampion.profile.weights, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || run.phase !== "encounter" || isCombatEncounter) {
      return;
    }

    const timer = window.setTimeout(() => {
      setRun((current) =>
        current.phase === "encounter" && !current.encounter?.battleSeed ? completeAdventureEncounter(current) : current,
      );
    }, 1_000);

    return () => window.clearTimeout(timer);
  }, [isCombatEncounter, run, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (
      !spectatorMode ||
      spectatorPaused ||
      !battle.resolutionRecap ||
      battle.resolutionRecap.phase !== "round"
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      battle.dismissResolutionRecap();
    }, 1_150);

    return () => window.clearTimeout(timer);
  }, [battle, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (
      !spectatorMode ||
      spectatorPaused ||
      !isCombatEncounter ||
      !battle.resolutionRecap ||
      battle.resolutionRecap.phase !== "battle"
    ) {
      return;
    }

    const combatResult = battle.match?.result;
    if (!combatResult) {
      return;
    }

    const timer = window.setTimeout(() => {
      battle.dismissResolutionRecap();
      if (combatResult.winner === "player") {
        setRun((current) => completeAdventureEncounter(current, combatResult, enemyLoadout?.cards ?? []));
        return;
      }

      startRandomRun();
    }, SPECTATOR_FINAL_RECAP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [battle, enemyLoadout, isCombatEncounter, spectatorMode, spectatorPaused]);

  useEffect(() => {
    if (!spectatorMode || spectatorPaused || !battle.roundCoinTossRecap || !battle.roundCoinTossCanConfirm) {
      return;
    }

    const timer = window.setTimeout(() => {
      battle.dismissRoundCoinTossRecap();
    }, 420);

    return () => window.clearTimeout(timer);
  }, [battle, spectatorMode, spectatorPaused]);

  if (isCombatEncounter && activeNode && !battle.match) {
    return (
      <main className="relative mx-auto grid h-[100dvh] max-w-[1640px] place-items-center overflow-hidden px-3 py-3">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.6rem]">
          <ForestAtmosphere />
        </div>
        <div className="absolute inset-0 -z-10 rounded-[2.6rem] bg-[linear-gradient(180deg,rgba(4,9,18,0.82),rgba(6,12,24,0.92))]" />
        <div className="w-full max-w-[28rem] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(10,20,36,0.96),rgba(8,14,24,0.94))] p-6 text-white shadow-[0_30px_120px_rgba(5,12,24,0.48)] backdrop-blur-xl">
          <p className="text-[0.56rem] uppercase tracking-[0.32em] text-cyan-100/56">{kindLabel(activeNode.kind)}</p>
          <h2 className="mt-2 font-serif text-3xl text-white">{enemyLoadout?.profile.name ?? activeNode.title}</h2>
          <p className="mt-3 text-sm leading-7 text-white/70">
            {enemyLoadout ? `${enemyLoadout.profile.playstyle} · ${enemyLoadout.threatLabel}` : "Preparation du combat..."}
          </p>
        </div>
      </main>
    );
  }

  if (isCombatEncounter && activeNode && battle.match) {
    const combatResult = battle.match.result;
    const battlePreviewText = !battle.hoverPreview
      ? battle.selectedCard
        ? "Choisis maintenant une case vide du plateau."
        : "Choisis une carte dans ta main, puis une case vide."
      : battle.hoverPreview.roundEndSummary
        ? `${battle.hoverPreview.flippedCount} flips. Fin ${battle.hoverPreview.roundEndSummary.control.player}/${battle.hoverPreview.roundEndSummary.control.enemy}.`
        : `${battle.hoverPreview.flippedCount} flips attendus. Controle ${battle.hoverPreview.control.player}/${battle.hoverPreview.control.enemy}.`;
    const lastBattleEvent = !battle.match.lastMove
      ? "Ouverture de manche."
      : battle.match.lastMove.roundEndSummary
        ? `${battle.match.lastMove.playerId === "player" ? "Ollie" : "Le rival"} a cloture la manche.`
        : `${battle.match.lastMove.playerId === "player" ? "Ollie" : "Le rival"} vient de jouer en ${battle.match.lastMove.position.row},${battle.match.lastMove.position.col}.`;
    const handleAdventureBattleContinue = () => {
      battle.dismissResolutionRecap();
      if (!combatResult) {
        return;
      }

      if (combatResult.winner === "player") {
        setRun((current) => completeAdventureEncounter(current, combatResult, enemyLoadout?.cards ?? []));
        return;
      }

      startRandomRun();
    };

    return (
      <div className="relative">
        <BattleStage
          match={battle.match}
          hand={battle.hand}
          selectedCardId={battle.selectedCardId}
          selectedCard={battle.selectedCard}
          hoveredPosition={battle.hoveredPosition}
          hoverPreview={battle.hoverPreview}
          canHumanInteract={battle.canHumanInteract}
          control={battle.control}
          sidePanel={
            enemyLoadout ? (
              <CombatInfoDock
                currentStep={Math.min(clearedLocations + 1, run.config.depthCount)}
                totalSteps={run.config.depthCount}
                nodeKindLabel={kindLabel(activeNode.kind)}
                nodeTitle={activeNode.title}
                enemyName={enemyLoadout.profile.name}
                enemyPlaystyle={enemyLoadout.profile.playstyle}
                enemyDeckCount={enemyLoadout.cardIds.length}
                enemyMutations={enemyLoadout.replacements + enemyLoadout.additions}
                spectatorMode={spectatorMode}
                selectedCardName={battle.selectedCard ? battle.selectedCard.name : "Aucune carte"}
                selectedCardHint={battlePreviewText}
                lastEvent={lastBattleEvent}
                onNewRun={startRandomRun}
              />
            ) : null
          }
          onCellHover={battle.hoverCell}
          onCellClick={battle.placeCard}
          onSelectCard={battle.selectCard}
          onFireflyReroll={battle.triggerFireflyReroll}
          onReflectionCopy={battle.triggerReflectionCopy}
        />

        {battle.resolutionRecap ? (
          <BattleResolutionOverlay
            recap={battle.resolutionRecap}
            onContinue={handleAdventureBattleContinue}
            continueLabel={battleContinueLabel(combatResult?.winner ?? null)}
          />
          ) : null}

        {battle.roundCoinTossRecap ? (
          <RoundCoinTossOverlay
            recap={battle.roundCoinTossRecap}
            canConfirm={battle.roundCoinTossCanConfirm}
            onConfirm={battle.dismissRoundCoinTossRecap}
          />
        ) : null}
      </div>
    );
  }

  if (!skipStoryIntro && !storySeen) {
    return <StoryIntro onComplete={markStorySeen} />;
  }

  return (
    <main className="relative mx-auto flex h-[100dvh] max-w-[1640px] flex-col gap-2 overflow-hidden px-2 py-2 sm:px-3 sm:py-3">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.6rem]">
        <ForestAtmosphere />
      </div>
      <div className="absolute inset-0 -z-10 rounded-[2.6rem] bg-[linear-gradient(180deg,rgba(4,9,18,0.82),rgba(6,12,24,0.92))]" />

      <header className="ogot-hud flex shrink-0 items-center gap-3 rounded-[1.2rem] px-3 py-2 sm:px-4">
        <OllieAvatar size="sm" className="hidden sm:block" />
        <div className="min-w-0">
          <p className="text-[0.46rem] uppercase tracking-[0.28em] text-[#f4ddb4]/54">La maison d'Ollie</p>
          <h1 className="truncate font-serif text-[1rem] leading-none text-white sm:text-[1.2rem]">Ollie Gives, Ollie Takes</h1>
        </div>

        <div className="ml-2 hidden h-2 w-28 overflow-hidden rounded-full border border-white/10 bg-black/28 lg:block">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#f0c26a,#ff8b6f)]"
            style={{ width: `${Math.max(8, Math.round(progressRatio * 100))}%` }}
          />
        </div>

        <div className="ml-auto flex items-center gap-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.16em] sm:gap-2">
          <span className="ogot-chip rounded-full px-2 py-1 sm:px-3 sm:py-1.5">{runStatusText(run)}</span>
          <span className="ogot-chip hidden rounded-full px-2 py-1 sm:inline-flex sm:px-3 sm:py-1.5">
            {routeProgressLabel}
          </span>
          <span className="ogot-chip hidden rounded-full px-2 py-1 md:inline-flex sm:px-3 sm:py-1.5">
            {deckHeaderLabel}
          </span>
          <button type="button" onClick={toggleDrawer} className="ogot-icon-btn" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 5h12M3 9h12M3 13h12" />
            </svg>
          </button>
        </div>
      </header>

      {run.charms.length > 0 ? (
        <div className="shrink-0">
          <CharmBuffBar
            charmIds={run.charms}
            emptyLabel=""
            title="Buffs"
            className="ml-auto w-fit rounded-[1rem] px-2 py-1.5"
          />
        </div>
      ) : null}

      {/* ── Drawer with all controls ── */}
      <GameDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <section className="grid gap-3">
          <p className="text-[0.5rem] uppercase tracking-[0.3em] text-cyan-100/50">Controles</p>
          <button type="button" onClick={() => { startRandomRun(); setDrawerOpen(false); }} className="rounded-[1rem] bg-[linear-gradient(90deg,rgba(45,212,191,0.92),rgba(34,211,238,0.92))] px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-105">Nouvelle partie</button>
          {!playtestMode && isLabSurfaceEnabled() ? (
            <>
              <button type="button" onClick={() => { startSpectatorRun(); setDrawerOpen(false); }} className="rounded-[1rem] border border-cyan-200/22 bg-cyan-200/10 px-4 py-2.5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-200/16">Run IA auto</button>
              <button type="button" onClick={() => setSpectatorPaused((c) => !c)} disabled={!spectatorMode} className="rounded-[1rem] border border-white/12 bg-white/7 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12 disabled:cursor-not-allowed disabled:opacity-50">{spectatorPaused ? "Reprendre l'IA" : "Pause spectateur"}</button>
              <a href="/lab" className="rounded-[1rem] border border-amber-200/22 bg-amber-200/10 px-4 py-2.5 text-center text-sm font-semibold text-amber-50 transition hover:bg-amber-200/16">Entrainement IA</a>
              <label className="flex items-center gap-2 rounded-[1rem] border border-white/10 bg-black/14 px-3 py-2 text-sm text-white/72">
                <span className="text-[0.58rem] uppercase tracking-[0.18em] text-white/46">Seed</span>
                <input type="number" value={seed} onChange={(e) => setSeed(Number.isFinite(Number(e.target.value)) ? Number(e.target.value) : GAME_CONFIG.defaultSeed)} className="min-w-0 flex-1 bg-transparent text-right text-sm text-white outline-none" />
              </label>
            </>
          ) : null}
        </section>

        <section className="grid gap-2">
          <p className="text-[0.5rem] uppercase tracking-[0.3em] text-cyan-100/50">Info</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[1rem] border border-white/10 bg-black/14 p-2.5 text-center">
              <p className="text-[0.42rem] uppercase tracking-[0.18em] text-white/42">Lieux</p>
              <p className="mt-1 text-[1.2rem] font-semibold text-white">{clearedLocations}/{run.config.depthCount}</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-black/14 p-2.5 text-center">
              <p className="text-[0.42rem] uppercase tracking-[0.18em] text-white/42">Deck</p>
              <p className="mt-1 text-[1.2rem] font-semibold text-white">{run.deck.cards.length}</p>
              <p className="mt-0.5 text-[0.6rem] text-white/48">{deckRarityCounts.common}C · {deckRarityCounts.uncommon}I · {deckRarityCounts.rare}R</p>
            </div>
          </div>
          <div className="rounded-[1rem] border border-white/10 bg-black/14 p-2.5">
            <p className="text-[0.42rem] uppercase tracking-[0.18em] text-white/42">Mode</p>
            <p className="mt-1 text-sm font-semibold text-white">{spectatorMode ? "Spectateur IA" : "Exploration manuelle"}</p>
          </div>
        </section>

        {charmDefinitions.length > 0 ? (
          <section className="grid gap-2">
            <p className="text-[0.5rem] uppercase tracking-[0.3em] text-cyan-100/50">Porte-bonheur</p>
            {charmDefinitions.map((charm) => (
              <div key={charm.id} className="rounded-[1rem] border border-emerald-200/16 bg-emerald-200/8 px-3 py-2">
                <p className="text-[0.72rem] font-semibold text-white">{charm.shortLabel}</p>
                <p className="mt-1 text-[0.66rem] leading-5 text-white/62">{charm.description}</p>
              </div>
            ))}
          </section>
        ) : null}

        {recentRoute.length > 0 ? (
          <section className="grid gap-2">
            <p className="text-[0.5rem] uppercase tracking-[0.3em] text-cyan-100/50">Parcours</p>
            {recentRoute.map((node, i) => (
              <div key={node.id} className="rounded-[1rem] border border-white/10 bg-black/14 px-3 py-2">
                <p className="text-[0.42rem] uppercase tracking-[0.18em] text-white/42">{route.length - recentRoute.length + i + 1}. {kindLabel(node.kind)}</p>
                <p className="mt-1 text-[0.76rem] leading-5 text-white/78">{node.title}</p>
              </div>
            ))}
          </section>
        ) : null}
      </GameDrawer>

      {/* ── Ollie floating bubble ── */}
      {immersiveAdventurePhase || run.phase === "map" ? null : <OllieBubble quote={ollieLine} />}

      {/* ── Main content area ── */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <div className="h-full min-h-0">
          <section className="ogot-stage relative h-full min-h-0 rounded-[2rem] p-2 shadow-[0_28px_100px_rgba(5,12,24,0.42)] sm:p-3">
          {run.phase === "draft" && run.draft ? (
            <AdventureDraftOverlay
              draft={run.draft}
              spectatorMode={spectatorMode}
              onToggleCard={(cardId) => setRun((current) => toggleAdventureDraftCard(current, cardId))}
              onConfirm={() => setRun((current) => resolveAdventureDraft(current))}
            />
          ) : run.phase === "site" && activeNode && run.siteState ? (
            <div className="flex h-full flex-col justify-center">
              <div className="mx-auto w-full max-w-[86rem] rounded-[2.4rem] ogot-ornate-panel p-4 text-white sm:p-6">
                <div className="grid gap-5 xl:grid-cols-[19rem_minmax(0,1fr)]">
                  <aside className="ogot-choice-card flex flex-col justify-between rounded-[1.8rem] p-4">
                    <div>
                      <p className="text-[0.52rem] uppercase tracking-[0.3em] text-[#f5ddb5]/56">{kindLabel(activeNode.kind)}</p>
                      <h2 className="mt-3 font-serif text-[2rem] leading-none text-white">{activeNode.title}</h2>
                      <div className="ogot-sheet-note mt-4 rounded-[1.25rem] px-4 py-3">
                        <p className="text-[0.82rem] leading-7 text-[#f8efdd]">{activeNode.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-black/28 p-4">
                      <div className="flex items-end gap-3">
                        <OllieAvatar size="lg" className="shrink-0 border-amber-100/30 shadow-[0_0_48px_rgba(241,207,133,0.2)]" />
                        <div className="ogot-bubble min-h-[6.2rem] flex-1 rounded-[1.2rem] px-4 py-3">
                          <p className="text-[0.46rem] uppercase tracking-[0.26em] text-[rgba(255,244,214,0.58)]">Ollie</p>
                          <p className="mt-2 text-[0.82rem] leading-6 text-[var(--story-ink)]">{ollieLine}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setRun((current) => leaveAdventureSite(current))}
                      disabled={spectatorMode}
                      className="ogot-secondary-button mt-5 rounded-[1rem] text-[0.72rem] disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      Quitter le lieu
                    </button>
                  </aside>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="ogot-title-banner px-6 py-4 sm:px-10">
                          <div>
                            <p className="text-[0.52rem] uppercase tracking-[0.34em] text-[#ffe5bc]/76">{kindLabel(activeNode.kind)}</p>
                            <h2 className="mt-1 font-serif text-[1.7rem] leading-none sm:text-[2.8rem]">{activeNode.title}</h2>
                          </div>
                        </div>
                      </div>

                      <div className="ogot-sheet-note rounded-[1.2rem] px-4 py-3">
                        <p className="text-[0.46rem] uppercase tracking-[0.22em] text-white/44">Lieu actif</p>
                        <p className="mt-1 max-w-[18rem] text-sm leading-6 text-white/72">
                          Ajuste ton deck ici avant de retourner sur la route.
                        </p>
                      </div>
                    </div>

                {campState ? (
                  <>
                    {campState.origin !== "hazelnut" ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setRun((current) => chooseAdventureCampMode(current, "remove"))}
                          disabled={spectatorMode}
                          className={[
                            "rounded-[1rem] border px-4 py-2 text-sm font-semibold transition",
                            campState.selectedMode === "remove"
                              ? "border-[#d6a765]/45 bg-[rgba(75,37,25,0.72)] text-[#fff0ce]"
                              : "border-white/12 bg-white/7 text-white hover:bg-white/12",
                          ].join(" ")}
                        >
                          Retirer une carte
                        </button>
                        <button
                          type="button"
                          onClick={() => setRun((current) => chooseAdventureCampMode(current, "upgrade"))}
                          disabled={spectatorMode}
                          className={[
                            "rounded-[1rem] border px-4 py-2 text-sm font-semibold transition",
                            campState.selectedMode === "upgrade"
                              ? "border-[#d6a765]/45 bg-[rgba(75,37,25,0.72)] text-[#fff0ce]"
                              : "border-white/12 bg-white/7 text-white hover:bg-white/12",
                          ].join(" ")}
                        >
                          Ameliorer une carte
                        </button>
                      </div>
                    ) : null}
                    <p className="mt-4 text-sm leading-7 text-white/62">
                      {campState.origin === "hazelnut"
                        ? "Noisette Fendue: cette victoire debloque un retrait de carte gratuit."
                        : campState.selectedMode === "remove"
                        ? "Choisis une carte a retirer du deck."
                        : campState.selectedMode === "upgrade"
                          ? "Choisis une carte: une statistique aleatoire gagnera +1."
                          : "Choisis d'abord l'action du campement."}
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                      {deckCards.map((deckCard) => (
                        <button
                          key={deckCard.deckCardId}
                          type="button"
                          disabled={!campState.selectedMode || spectatorMode}
                          onClick={() => setRun((current) => resolveAdventureCamp(current, deckCard.deckCardId))}
                          className="ogot-choice-card rounded-[1.35rem] p-3 text-left disabled:cursor-not-allowed disabled:opacity-55"
                        >
                          <div className="mx-auto aspect-[2/3] w-full max-w-[8.4rem]">
                            <CardView card={deckPreviewCard(deckCard)} layout="hand" className="h-full w-full" />
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-3 text-[0.64rem] uppercase tracking-[0.18em] text-white/60">
                            <span>{sourceLabel(deckCard.card.sourceType)}</span>
                            <span>{deckCard.card.rarity}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {forgeState ? (
                  <>
                    <p className="mt-4 text-sm leading-7 text-white/62">
                      Choisis deux cartes a fusionner. La nouvelle carte garde deux cotes de l'une et deux cotes de l'autre.
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                      {deckCards.map((deckCard) => {
                        const selected = forgeState.selectedCardIds.includes(deckCard.deckCardId);
                        return (
                          <button
                            key={deckCard.deckCardId}
                            type="button"
                            disabled={spectatorMode}
                            onClick={() => setRun((current) => toggleAdventureForgeSelection(current, deckCard.deckCardId))}
                            className={[
                              "rounded-[1.35rem] border p-3 text-left transition",
                              selected
                                ? "ogot-choice-card border-[#d6a765]/45 bg-[rgba(75,37,25,0.72)]"
                                : "ogot-choice-card border-white/10 bg-black/16 hover:border-cyan-200/26 hover:bg-white/8",
                            ].join(" ")}
                          >
                            <div className="mx-auto aspect-[2/3] w-full max-w-[8.4rem]">
                              <CardView card={deckPreviewCard(deckCard)} layout="hand" className="h-full w-full" selected={selected} />
                            </div>
                            <div className="mt-3 flex items-center justify-between gap-3 text-[0.64rem] uppercase tracking-[0.18em] text-white/60">
                              <span>{sourceLabel(deckCard.card.sourceType)}</span>
                              <span>{selected ? "Selectionnee" : deckCard.card.rarity}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {forgeState.previewCard ? (
                      <div className="ogot-choice-card mt-6 rounded-[1.5rem] p-4">
                        <p className="text-[0.54rem] uppercase tracking-[0.24em] text-[#f5ddb5]/56">Resultat de la forge</p>
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                          <div className="aspect-[2/3] w-[8.4rem]">
                            <CardView
                              card={{
                                instanceId: "forge-preview",
                                archetypeId: forgeState.previewCard.id,
                                owner: "player",
                                name: forgeState.previewCard.name,
                                sides: forgeState.previewCard.sides,
                                family: forgeState.previewCard.family,
                                accent: forgeState.previewCard.accent,
                                artSrc: forgeState.previewCard.artSrc,
                                rarity: forgeState.previewCard.rarity,
                                sourceType: forgeState.previewCard.sourceType,
                                baseArchetypeId: forgeState.previewCard.baseArchetypeId,
                                corruptedBy: null,
                              }}
                              layout="hand"
                              className="h-full w-full"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => setRun((current) => resolveAdventureForge(current))}
                            disabled={spectatorMode}
                            className="ogot-red-button rounded-[1rem] text-[0.72rem] disabled:cursor-not-allowed disabled:opacity-55"
                          >
                            Forger la fusion
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : null}

                {treasureState ? (
                  <div className="ogot-choice-card mt-6 rounded-[1.5rem] p-5">
                    <p className="text-[0.54rem] uppercase tracking-[0.24em] text-[#f5ddb5]/56">Carte trouvee</p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                      <div className="aspect-[2/3] w-[8.8rem]">
                        <CardView card={deckPreviewCard(treasureState.grantedCard)} layout="hand" className="h-full w-full" />
                      </div>
                      <div className="max-w-[24rem]">
                        <p className="text-sm leading-7 text-white/72">
                          Le tresor ajoute directement une nouvelle carte au deck. Elle est deja conservee pour les prochains combats.
                        </p>
                        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-amber-100/58">
                          {sourceLabel(treasureState.grantedCard.card.sourceType)} | {treasureState.grantedCard.card.rarity}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRun((current) => resolveAdventureTreasure(current))}
                        disabled={spectatorMode}
                        className="ogot-red-button rounded-[1rem] text-[0.72rem] disabled:cursor-not-allowed disabled:opacity-55"
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : run.phase === "reward" && run.rewardOffer ? (
            <AdventureRewardOverlay
              rewardOffer={run.rewardOffer}
              deckSize={run.deck.cards.length}
              onChooseReward={(rewardId) => setRun((current) => resolveAdventureReward(current, rewardId))}
              onSkip={() => setRun((current) => resolveAdventureReward(current))}
            />
          ) : run.phase === "charm" && run.charmOffer ? (
            <AdventureCharmOverlay
              charmOffer={run.charmOffer}
              ownedCharmIds={run.charms}
              onChooseCharm={(charmId) => setRun((current) => resolveAdventureCharm(current, charmId))}
              onSkip={() => setRun((current) => resolveAdventureCharm(current))}
            />
          ) : (
            <div className="relative h-full min-h-[24rem]">
              <AdventureMap
                run={run}
                onSelectNode={(nodeId) => {
                  if (spectatorMode) {
                    return;
                  }
                  setRun((current) => enterAdventureNode(current, nodeId));
                }}
              />

              <AdventureRouteChoiceRack
                run={run}
                deckSize={run.deck.cards.length}
                spectatorMode={spectatorMode}
                onSelectNode={(nodeId) => {
                  if (spectatorMode) {
                    return;
                  }
                  setRun((current) => enterAdventureNode(current, nodeId));
                }}
              />

              {run.phase === "finished" ? (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[rgba(4,9,18,0.52)] p-6">
                  <div className="pointer-events-auto w-full max-w-[34rem] rounded-[2.2rem] ogot-ornate-panel p-6 text-white">
                    <div className="flex justify-center">
                      <div className="ogot-title-banner px-6 py-4 sm:px-10">
                        <div>
                          <p className="text-[0.52rem] uppercase tracking-[0.34em] text-[#ffe5bc]/76">{runStatusText(run)}</p>
                          <h2 className="mt-1 font-serif text-[1.7rem] leading-none sm:text-[2.6rem]">{resultTitle(run)}</h2>
                        </div>
                      </div>
                    </div>
                    <p className="mt-5 text-center text-sm leading-7 text-white/72">
                      {run.outcome === "victory"
                        ? "La carte a bien mene jusqu'au boss fixe apres 12 lieux resolves."
                        : "Le parcours garde la trace du dernier noeud atteint pour aider les prochains ajustements d'equilibrage."}
                    </p>
                    <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-black/24 p-4 text-sm text-white/72">
                      Progression finale: {clearedLocations}/{run.config.depthCount} lieux avant le boss.
                    </div>
                    <button
                      type="button"
                      onClick={startRandomRun}
                      className="ogot-red-button mt-6 w-full rounded-[1rem] text-[0.74rem]"
                    >
                      Relancer un nouveau run
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
          </section>
        </div>
      </div>
    </main>
  );
}
