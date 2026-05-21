import {
  chooseAdventureCampMode,
  chooseAdventureFamily,
  completeAdventureEncounter,
  createAdventureRun,
  enterAdventureNode,
  getAdventureCharmOptions,
  getAdventureDeckCards,
  getAdventureLocationsCleared,
  getAdventureNode,
  getAdventureRewardOptions,
  isCombatAdventureNode,
  leaveAdventureSite,
  listAvailableAdventureNodes,
  resolveAdventureCamp,
  resolveAdventureCharm,
  resolveAdventureDraft,
  resolveAdventureForge,
  resolveAdventureReward,
  resolveAdventureTreasure,
  toggleAdventureForgeSelection,
} from "@/core/adventure";
import {
  chooseAdventureCampForBot,
  chooseAdventureCharmForBot,
  chooseAdventureDraftCardsForBot,
  chooseAdventureFamilyForBot,
  chooseAdventureForgeForBot,
  chooseAdventureNodeForBot,
  chooseAdventureRewardForBot,
  chooseAdventureSiteContinueForBot,
  chooseAdventureSiteModeForBot,
} from "@/core/adventure-bot";
import { buildAdventureEnemyLoadout } from "@/core/adventure-enemy";
import { getBot } from "@/core/bots";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { TRAINED_BOT_PROFILE } from "@/core/bots/generated/trainedWeights";
import { DEFAULT_DECK_PRESET_ID, FAMILY_STARTER_DECK_CARD_COUNT, STARTER_DECK_FAMILIES } from "@/core/config/decks";
import { applyMove, createMatch, passTurn } from "@/core/engine";
import { applyAutomatedPlayerCharmActions } from "@/core/player-charms";
import type {
  AiLabAdventureModelSummary,
  AiLabAdventureNodeRecord,
  AiLabAdventureRunRecord,
  AiPlayerModel,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import type { Bot } from "@/core/bots";
import type {
  AdventureNode,
  AdventureNodeType,
  BattleResult,
  CardFamily,
  CardRarity,
  MatchState,
  TrainedBotWeights,
} from "@/core/types";
import { ADVENTURE_NODE_TYPES, CARD_FAMILIES, CARD_RARITIES } from "@/core/types";
import { mixSeed } from "@/core/utils/rng";

interface AdventureLabBotSpec {
  id: string;
  bot: Bot;
  searchDepth?: number;
  beamWidth?: number;
  weights?: TrainedBotWeights | null;
}

interface AdventureCombatTelemetry {
  result: BattleResult;
  turns: number;
  roundsCompleted: number;
  flips: number;
  deadTurns: number;
  reshuffles: number;
}

interface AdventureReportOptions {
  seed: number;
  models: AiPlayerModel[];
  runsPerModel: number;
}

function safeRate(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

function positiveModulo(value: number, length: number): number {
  return ((value % length) + length) % length;
}

function createZeroNodeCounts(): Record<AdventureNodeType, number> {
  return Object.fromEntries(ADVENTURE_NODE_TYPES.map((kind) => [kind, 0])) as Record<AdventureNodeType, number>;
}

function createZeroFamilyCounts(): Record<CardFamily, number> {
  return Object.fromEntries(CARD_FAMILIES.map((family) => [family, 0])) as Record<CardFamily, number>;
}

function createZeroRarityCounts(): Record<CardRarity, number> {
  return Object.fromEntries(CARD_RARITIES.map((rarity) => [rarity, 0])) as Record<CardRarity, number>;
}

function cloneWeights(weights: TrainedBotWeights): TrainedBotWeights {
  return { ...weights };
}

function getModelAdventureWeights(modelId: AiPlayerModelId): TrainedBotWeights | null {
  const trainedWeights = TRAINED_BOT_PROFILE.weights;
  const championWeights = LIVE_CHAMPION_PROFILE.weights ?? trainedWeights;

  if (modelId === "champion") {
    return cloneWeights(championWeights);
  }

  if (modelId === "expert") {
    return cloneWeights(trainedWeights);
  }

  if (modelId === "opportunist") {
    return {
      ...trainedWeights,
      riskTolerance: trainedWeights.riskTolerance + 3,
      aggressionPlanBias: trainedWeights.aggressionPlanBias + 4,
      controlPlanBias: trainedWeights.controlPlanBias - 2,
      tempoPlanBias: trainedWeights.tempoPlanBias + 2,
      fusionPlanBias: trainedWeights.fusionPlanBias - 1,
      rareCardBias: trainedWeights.rareCardBias + 3,
      uncommonCardBias: trainedWeights.uncommonCardBias + 1,
      deckTrimValue: trainedWeights.deckTrimValue - 2,
      duplicateCardPenalty: trainedWeights.duplicateCardPenalty - 2,
      eliteRouteBias: trainedWeights.eliteRouteBias + 2,
    };
  }

  if (modelId === "regular") {
    return {
      ...trainedWeights,
      riskTolerance: 0,
      aggressionPlanBias: 0,
      controlPlanBias: 1,
      tempoPlanBias: 1,
      fusionPlanBias: 0,
      precisionPlanBias: 1,
      uncommonCardBias: 0,
      rareCardBias: 0,
      charmSynergyBias: 0,
      duplicateCardPenalty: 0,
    };
  }

  return null;
}

function createModelSpec(model: AiPlayerModel): AdventureLabBotSpec {
  return {
    id: model.id,
    bot: getBot(model.botId),
    searchDepth: model.searchDepth,
    beamWidth: model.beamWidth,
    weights: getModelAdventureWeights(model.id),
  };
}

function createEnemySpec(loadout: ReturnType<typeof buildAdventureEnemyLoadout>): AdventureLabBotSpec {
  return {
    id: loadout.botId,
    bot: getBot(loadout.botId),
    searchDepth: loadout.searchDepth,
    beamWidth: loadout.beamWidth,
    weights: loadout.botId === "champion" ? LIVE_CHAMPION_PROFILE.weights : null,
  };
}

function chooseBeginnerEntry<T>(entries: T[], seed: number, label: string): T | null {
  if (entries.length === 0) {
    return null;
  }

  return entries[positiveModulo(mixSeed(seed, label), entries.length)] ?? null;
}

function chooseFamilyForModel(run: ReturnType<typeof createAdventureRun>, model: AiPlayerModel, weights: TrainedBotWeights | null) {
  if (model.id === "beginner") {
    return STARTER_DECK_FAMILIES[positiveModulo(mixSeed(run.seed, "beginner-family"), STARTER_DECK_FAMILIES.length)];
  }

  return chooseAdventureFamilyForBot(run, weights);
}

function chooseNodeForModel(
  run: ReturnType<typeof createAdventureRun>,
  model: AiPlayerModel,
  weights: TrainedBotWeights | null,
): AdventureNode | null {
  if (model.id === "beginner") {
    return chooseBeginnerEntry(listAvailableAdventureNodes(run), run.rngState, `beginner-node:${run.history.length}`);
  }

  return chooseAdventureNodeForBot(run, weights);
}

function chooseRewardForModel(
  run: ReturnType<typeof createAdventureRun>,
  model: AiPlayerModel,
  weights: TrainedBotWeights | null,
) {
  const options = getAdventureRewardOptions(run);
  if (options.length === 0) {
    return null;
  }

  if (model.id === "beginner") {
    return chooseBeginnerEntry(options, run.rngState, `beginner-reward:${run.rewardProgress.offersSeen}`);
  }

  return chooseAdventureRewardForBot(run, weights);
}

function chooseCharmForModel(
  run: ReturnType<typeof createAdventureRun>,
  model: AiPlayerModel,
  weights: TrainedBotWeights | null,
) {
  const options = getAdventureCharmOptions(run);
  if (options.length === 0) {
    return null;
  }

  if (model.id === "beginner") {
    return chooseBeginnerEntry(options, run.rngState, `beginner-charm:${run.charms.length}`);
  }

  return chooseAdventureCharmForBot(run, weights);
}

function chooseCampCardForModel(
  run: ReturnType<typeof createAdventureRun>,
  model: AiPlayerModel,
  weights: TrainedBotWeights | null,
) {
  if (model.id === "beginner") {
    return run.deck.cards[0] ?? null;
  }

  return chooseAdventureCampForBot(run, weights);
}

function chooseForgeCardForModel(
  run: ReturnType<typeof createAdventureRun>,
  model: AiPlayerModel,
  weights: TrainedBotWeights | null,
) {
  if (model.id === "beginner") {
    return run.deck.cards.find((card) => !run.siteState || run.siteState.kind !== "forge" || !run.siteState.selectedCardIds.includes(card.deckCardId)) ?? null;
  }

  return chooseAdventureForgeForBot(run, weights);
}

function createNodeRecord(node: AdventureNode, deckSize: number): AiLabAdventureNodeRecord {
  return {
    nodeId: node.id,
    depth: node.depth,
    lane: node.lane,
    kind: node.kind,
    title: node.title,
    playerDeckSizeBefore: deckSize,
    playerDeckSizeAfter: deckSize,
    combatWinner: null,
    combatTurns: 0,
    combatFlips: 0,
    enemyProfileId: null,
    enemyBotId: null,
    rewardOffered: 0,
    rewardClaimed: false,
    rewardSkipped: false,
    charmOffered: 0,
    charmClaimed: null,
    siteAction: "none",
  };
}

function updateLastPathRecord(
  path: AiLabAdventureNodeRecord[],
  update: Partial<AiLabAdventureNodeRecord>,
): void {
  const last = path[path.length - 1];
  if (!last) {
    return;
  }

  Object.assign(last, update);
}

function playAdventureCombat(options: {
  seed: number;
  playerCards: ReturnType<typeof getAdventureDeckCards>;
  playerCharmIds: ReturnType<typeof createAdventureRun>["charms"];
  enemyLoadout: ReturnType<typeof buildAdventureEnemyLoadout>;
  playerSpec: AdventureLabBotSpec;
}): AdventureCombatTelemetry {
  const enemySpec = createEnemySpec(options.enemyLoadout);
  let state: MatchState = createMatch({
    deckPresetId: DEFAULT_DECK_PRESET_ID,
    seed: options.seed,
    playerCards: options.playerCards.map((entry) => entry.card),
    playerCharmIds: options.playerCharmIds,
    enemyCards: options.enemyLoadout.cards,
    enemyProfile: options.enemyLoadout.profile,
  });

  while (!state.result) {
    if (state.turn.activePlayer === "player") {
      state = applyAutomatedPlayerCharmActions(state, options.playerSpec.weights ?? null);
    }

    if (state.turn.choices.length === 0) {
      state = passTurn(state);
      continue;
    }

    const activeSpec = state.turn.activePlayer === "player" ? options.playerSpec : enemySpec;
    const decision = activeSpec.bot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: state.rngState,
      searchDepth: activeSpec.searchDepth,
      beamWidth: activeSpec.beamWidth,
    });

    state = decision.move ? applyMove(state, decision.move) : passTurn(state);
  }

  return {
    result: state.result,
    turns: state.turn.index,
    roundsCompleted: state.metrics.roundsCompleted,
    flips: state.metrics.totalFlips,
    deadTurns: state.metrics.deadTurns,
    reshuffles: state.players.player.reshuffles + state.players.enemy.reshuffles,
  };
}

function countFinalDeckFamilies(run: ReturnType<typeof createAdventureRun>): Record<CardFamily, number> {
  const counts = createZeroFamilyCounts();
  for (const entry of run.deck.cards) {
    counts[entry.card.family] += 1;
  }

  return counts;
}

function countFinalDeckRarities(run: ReturnType<typeof createAdventureRun>): Record<CardRarity, number> {
  const counts = createZeroRarityCounts();
  for (const entry of run.deck.cards) {
    counts[entry.card.rarity] += 1;
  }

  return counts;
}

function hasReachedBoss(run: ReturnType<typeof createAdventureRun>): boolean {
  return run.outcome === "victory" || run.activeNodeId === run.map.bossNodeId || run.history.includes(run.map.bossNodeId);
}

function simulateAdventureRunForModel(options: {
  model: AiPlayerModel;
  runIndex: number;
  seed: number;
}): AiLabAdventureRunRecord {
  const spec = createModelSpec(options.model);
  let run = createAdventureRun({ seed: options.seed });
  const nodeCounts = createZeroNodeCounts();
  const rewardsClaimedByRarity = createZeroRarityCounts();
  const path: AiLabAdventureNodeRecord[] = [];
  const countedSiteKeys = new Set<string>();

  let startingDeckCardCount = 0;
  let guard = 0;
  let combatCount = 0;
  let combatWins = 0;
  let combatLosses = 0;
  let totalCombatTurns = 0;
  let totalCombatFlips = 0;
  let totalDeadTurns = 0;
  let totalReshuffles = 0;
  let rewardOffersSeen = 0;
  let rewardsClaimed = 0;
  let rewardsSkipped = 0;
  let stealRewardsOffered = 0;
  let stealRewardsClaimed = 0;
  let charmOffersSeen = 0;
  let campVisits = 0;
  let upgrades = 0;
  let removals = 0;
  let forgeVisits = 0;
  let fusions = 0;
  let treasures = 0;

  while (run.phase !== "finished" && guard < 160) {
    if (run.phase === "draft") {
      run = resolveAdventureDraft(run, chooseAdventureDraftCardsForBot(run, spec.weights));
      startingDeckCardCount = run.deck.cards.length;
      guard += 1;
      continue;
    }

    if (run.phase === "family") {
      run = chooseAdventureFamily(run, chooseFamilyForModel(run, options.model, spec.weights ?? null));
      startingDeckCardCount = run.deck.cards.length;
      if (startingDeckCardCount !== FAMILY_STARTER_DECK_CARD_COUNT) {
        throw new Error(
          `AI lab expected the current starter deck to contain ${FAMILY_STARTER_DECK_CARD_COUNT} cards, got ${startingDeckCardCount}.`,
        );
      }
      guard += 1;
      continue;
    }

    if (run.phase === "charm") {
      const optionsBeforeChoice = getAdventureCharmOptions(run);
      const selectedCharm = chooseCharmForModel(run, options.model, spec.weights ?? null);
      charmOffersSeen += optionsBeforeChoice.length > 0 ? 1 : 0;
      updateLastPathRecord(path, {
        charmOffered: optionsBeforeChoice.length,
        charmClaimed: selectedCharm?.charmId ?? null,
      });
      run = resolveAdventureCharm(run, selectedCharm?.charmId);
      updateLastPathRecord(path, { playerDeckSizeAfter: run.deck.cards.length });
      guard += 1;
      continue;
    }

    if (run.phase === "map") {
      const node = chooseNodeForModel(run, options.model, spec.weights ?? null);
      if (!node) {
        throw new Error(`AI lab model ${options.model.id} could not choose a reachable adventure node.`);
      }

      nodeCounts[node.kind] += 1;
      path.push(createNodeRecord(node, run.deck.cards.length));
      run = enterAdventureNode(run, node.id);
      guard += 1;
      continue;
    }

    if (run.phase === "encounter" && run.activeNodeId) {
      const node = getAdventureNode(run, run.activeNodeId);
      if (!isCombatAdventureNode(node.kind)) {
        run = completeAdventureEncounter(run);
        updateLastPathRecord(path, { playerDeckSizeAfter: run.deck.cards.length });
        guard += 1;
        continue;
      }

      const loadout = buildAdventureEnemyLoadout(run, node);
      const combat = playAdventureCombat({
        seed: run.encounter?.battleSeed ?? mixSeed(run.seed, `encounter:${node.id}`),
        playerCards: getAdventureDeckCards(run),
        playerCharmIds: run.charms,
        enemyLoadout: loadout,
        playerSpec: spec,
      });

      combatCount += 1;
      combatWins += combat.result.winner === "player" ? 1 : 0;
      combatLosses += combat.result.winner === "player" ? 0 : 1;
      totalCombatTurns += combat.turns;
      totalCombatFlips += combat.flips;
      totalDeadTurns += combat.deadTurns;
      totalReshuffles += combat.reshuffles;
      updateLastPathRecord(path, {
        combatWinner: combat.result.winner,
        combatTurns: combat.turns,
        combatFlips: combat.flips,
        enemyProfileId: loadout.profile.id,
        enemyBotId: loadout.botId,
      });
      run = completeAdventureEncounter(run, combat.result, combat.result.winner === "player" ? loadout.cards : []);
      updateLastPathRecord(path, { playerDeckSizeAfter: run.deck.cards.length });
      guard += 1;
      continue;
    }

    if (run.phase === "reward") {
      const rewardOptions = getAdventureRewardOptions(run);
      const selectedReward = chooseRewardForModel(run, options.model, spec.weights ?? null);
      const offeredStealCount = rewardOptions.filter((option) => option.rewardType === "steal").length;
      rewardOffersSeen += rewardOptions.length > 0 ? 1 : 0;
      stealRewardsOffered += offeredStealCount;
      updateLastPathRecord(path, {
        rewardOffered: rewardOptions.length,
        rewardClaimed: Boolean(selectedReward),
        rewardSkipped: !selectedReward,
      });

      if (selectedReward) {
        rewardsClaimed += 1;
        rewardsClaimedByRarity[selectedReward.rarity] += 1;
        stealRewardsClaimed += selectedReward.rewardType === "steal" ? 1 : 0;
      } else {
        rewardsSkipped += rewardOptions.length > 0 ? 1 : 0;
      }

      run = resolveAdventureReward(run, selectedReward?.rewardId);
      updateLastPathRecord(path, { playerDeckSizeAfter: run.deck.cards.length });
      guard += 1;
      continue;
    }

    if (run.phase === "site" && run.siteState) {
      const siteKey = `${run.activeNodeId ?? "queued"}:${run.siteState.kind}:${run.siteState.kind === "camp" ? run.siteState.origin ?? "node" : "node"}`;

      if (!countedSiteKeys.has(siteKey)) {
        countedSiteKeys.add(siteKey);
        if (run.siteState.kind === "camp") {
          campVisits += 1;
        } else if (run.siteState.kind === "forge") {
          forgeVisits += 1;
        } else if (run.siteState.kind === "treasure") {
          treasures += 1;
        }
      }

      if (run.siteState.kind === "camp") {
        if (!run.siteState.selectedMode) {
          const mode = options.model.id === "beginner" ? "upgrade" : chooseAdventureSiteModeForBot(run, spec.weights);
          run = chooseAdventureCampMode(run, mode);
          guard += 1;
          continue;
        }

        const selectedCard = chooseCampCardForModel(run, options.model, spec.weights ?? null);
        if (!selectedCard) {
          run = leaveAdventureSite(run);
          updateLastPathRecord(path, { siteAction: "skip", playerDeckSizeAfter: run.deck.cards.length });
          guard += 1;
          continue;
        }

        const mode = run.siteState.selectedMode;
        run = resolveAdventureCamp(run, selectedCard.deckCardId);
        if (mode === "remove") {
          removals += 1;
        } else {
          upgrades += 1;
        }
        updateLastPathRecord(path, {
          siteAction: mode === "remove" ? "camp-remove" : "camp-upgrade",
          playerDeckSizeAfter: run.deck.cards.length,
        });
        guard += 1;
        continue;
      }

      if (run.siteState.kind === "forge") {
        if (run.siteState.selectedCardIds.length < 2) {
          const selectedCard = chooseForgeCardForModel(run, options.model, spec.weights ?? null);
          if (!selectedCard) {
            run = leaveAdventureSite(run);
            updateLastPathRecord(path, { siteAction: "skip", playerDeckSizeAfter: run.deck.cards.length });
            guard += 1;
            continue;
          }

          run = toggleAdventureForgeSelection(run, selectedCard.deckCardId);
          guard += 1;
          continue;
        }

        run = resolveAdventureForge(run);
        fusions += 1;
        updateLastPathRecord(path, { siteAction: "forge-fusion", playerDeckSizeAfter: run.deck.cards.length });
        guard += 1;
        continue;
      }

      run = chooseAdventureSiteContinueForBot(run) ? resolveAdventureTreasure(run) : leaveAdventureSite(run);
      updateLastPathRecord(path, { siteAction: "treasure", playerDeckSizeAfter: run.deck.cards.length });
      guard += 1;
      continue;
    }

    throw new Error(`Unhandled adventure lab phase ${run.phase} for model ${options.model.id}.`);
  }

  if (guard >= 160 && run.phase !== "finished") {
    throw new Error(`AI lab full adventure exceeded safety guard for ${options.model.id} seed ${options.seed}.`);
  }

  const finalDeckCardCount = run.deck.cards.length;

  return {
    runIndex: options.runIndex,
    modelId: options.model.id,
    seed: options.seed,
    selectedFamily: run.selectedFamily,
    startingDeckCardCount,
    finalDeckCardCount,
    deckDelta: finalDeckCardCount - startingDeckCardCount,
    outcome: run.outcome,
    victory: run.outcome === "victory",
    bossReached: hasReachedBoss(run),
    locationsCleared: getAdventureLocationsCleared(run),
    combatCount,
    combatWins,
    combatLosses,
    totalCombatTurns,
    totalCombatFlips,
    totalDeadTurns,
    totalReshuffles,
    rewardOffersSeen,
    rewardsClaimed,
    rewardsSkipped,
    rewardsClaimedByRarity,
    stealRewardsOffered,
    stealRewardsClaimed,
    charmOffersSeen,
    charmsClaimed: [...run.charms],
    campVisits,
    upgrades,
    removals,
    forgeVisits,
    fusions,
    treasures,
    nodeCounts,
    finalDeckFamilies: countFinalDeckFamilies(run),
    finalDeckRarities: countFinalDeckRarities(run),
    path,
  };
}

function summarizeAdventureRunsForModel(modelId: AiPlayerModelId, runs: AiLabAdventureRunRecord[]): AiLabAdventureModelSummary {
  const nodeTotals = createZeroNodeCounts();
  const familyPicks = createZeroFamilyCounts();
  let totalPathNodes = 0;
  let victories = 0;
  let bossReached = 0;
  let locationsCleared = 0;
  let finalDeckSize = 0;
  let deckDelta = 0;
  let combatWins = 0;
  let combatCount = 0;
  let combatTurns = 0;
  let combatFlips = 0;
  let deadTurns = 0;
  let reshuffles = 0;
  let rewardsClaimed = 0;
  let rewardsSkipped = 0;
  let charms = 0;
  let upgrades = 0;
  let removals = 0;
  let fusions = 0;

  for (const run of runs) {
    victories += run.victory ? 1 : 0;
    bossReached += run.bossReached ? 1 : 0;
    locationsCleared += run.locationsCleared;
    finalDeckSize += run.finalDeckCardCount;
    deckDelta += run.deckDelta;
    combatWins += run.combatWins;
    combatCount += run.combatCount;
    combatTurns += run.totalCombatTurns;
    combatFlips += run.totalCombatFlips;
    deadTurns += run.totalDeadTurns;
    reshuffles += run.totalReshuffles;
    rewardsClaimed += run.rewardsClaimed;
    rewardsSkipped += run.rewardsSkipped;
    charms += run.charmsClaimed.length;
    upgrades += run.upgrades;
    removals += run.removals;
    fusions += run.fusions;
    if (run.selectedFamily) {
      familyPicks[run.selectedFamily] += 1;
    }

    for (const kind of ADVENTURE_NODE_TYPES) {
      nodeTotals[kind] += run.nodeCounts[kind];
      totalPathNodes += run.nodeCounts[kind];
    }
  }

  const notes: string[] = [];
  const runCount = runs.length;
  const averageCombatWinRate = safeRate(combatWins, combatCount);
  const victoryRate = safeRate(victories, runCount);
  const bossReachRate = safeRate(bossReached, runCount);

  if (runCount === 0) {
    notes.push("Aucun run complet simule.");
  } else {
    notes.push(
      `Flux complet: famille, deck ${FAMILY_STARTER_DECK_CARD_COUNT} cartes, route, combats, recompenses, charmes, camp, forge et boss.`,
    );
  }

  if (runCount > 0 && runs.some((run) => run.startingDeckCardCount !== FAMILY_STARTER_DECK_CARD_COUNT)) {
    notes.push(`Probleme: au moins un run ne demarre pas avec le starter actuel de ${FAMILY_STARTER_DECK_CARD_COUNT} cartes.`);
  }

  if (combatCount > 0 && averageCombatWinRate < 0.45) {
    notes.push("Les combats bloquent souvent la progression; verifier ennemis, recompenses et lisibilite des flips.");
  }

  if (modelId === "champion" && runCount > 0 && bossReachRate < 0.45) {
    notes.push("Le champion atteint trop rarement le boss sur cet echantillon; augmenter les runs et analyser les noeuds de defaite.");
  }

  return {
    modelId,
    runs: runCount,
    victories,
    bossReached,
    victoryRate,
    bossReachRate,
    averageLocationsCleared: safeRate(locationsCleared, runCount),
    averageFinalDeckSize: safeRate(finalDeckSize, runCount),
    averageDeckDelta: safeRate(deckDelta, runCount),
    averageCombatWinRate,
    averageCombatTurns: safeRate(combatTurns, combatCount),
    averageCombatFlips: safeRate(combatFlips, combatCount),
    averageDeadTurns: safeRate(deadTurns, combatCount),
    averageReshuffles: safeRate(reshuffles, combatCount),
    averageRewardsClaimed: safeRate(rewardsClaimed, runCount),
    averageRewardsSkipped: safeRate(rewardsSkipped, runCount),
    averageCharms: safeRate(charms, runCount),
    averageUpgrades: safeRate(upgrades, runCount),
    averageRemovals: safeRate(removals, runCount),
    averageFusions: safeRate(fusions, runCount),
    familyPickRates: Object.fromEntries(
      CARD_FAMILIES.filter((family) => familyPicks[family] > 0).map((family) => [family, safeRate(familyPicks[family], runCount)]),
    ) as Partial<Record<CardFamily, number>>,
    nodeMix: Object.fromEntries(
      ADVENTURE_NODE_TYPES.map((kind) => [kind, safeRate(nodeTotals[kind], totalPathNodes)]),
    ) as Record<AdventureNodeType, number>,
    notes,
  };
}

/**
 * Simulates full adventure runs through the same deterministic engine APIs used by the player UI.
 */
export function simulateAiLabAdventureRuns(options: AdventureReportOptions): {
  summaries: AiLabAdventureModelSummary[];
  runs: AiLabAdventureRunRecord[];
} {
  const runs: AiLabAdventureRunRecord[] = [];

  for (const model of options.models) {
    for (let runIndex = 0; runIndex < options.runsPerModel; runIndex += 1) {
      runs.push(
        simulateAdventureRunForModel({
          model,
          runIndex,
          seed: mixSeed(options.seed, `full-adventure:${model.id}:${runIndex}`),
        }),
      );
    }
  }

  return {
    summaries: options.models.map((model) =>
      summarizeAdventureRunsForModel(
        model.id,
        runs.filter((run) => run.modelId === model.id),
      ),
    ),
    runs,
  };
}
