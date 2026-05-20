import {
  chooseAdventureCampMode,
  chooseAdventureFamily,
  completeAdventureEncounter,
  createAdventureRun,
  enterAdventureNode,
  getAdventureDeckCards,
  getAdventureLocationsCleared,
  getAdventureNode,
  isCombatAdventureNode,
  leaveAdventureSite,
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
import { greedyBot, heuristicBot } from "@/core/bots";
import { DEFAULT_DECK_PRESET_ID } from "@/core/config/decks";
import { applyMove, createMatch, passTurn } from "@/core/engine";
import { applyAutomatedPlayerCharmActions } from "@/core/player-charms";
import type { BattleResult, MatchState, TrainedBotWeights } from "@/core/types";
import { mixSeed } from "@/core/utils/rng";
import type { ConfiguredBotSpec } from "@/core/training/benchmark";

function resolveEncounterOpponentSpec(
  enemyLoadout: ReturnType<typeof buildAdventureEnemyLoadout>,
  opponent: ConfiguredBotSpec,
): ConfiguredBotSpec {
  if (enemyLoadout.botId === "greedy") {
    return {
      id: "greedy",
      label: "Greedy",
      bot: greedyBot,
      searchDepth: 1,
      beamWidth: 12,
    };
  }

  if (enemyLoadout.botId === "heuristic") {
    return {
      id: "heuristic",
      label: "Heuristic",
      bot: heuristicBot,
      searchDepth: enemyLoadout.searchDepth,
      beamWidth: enemyLoadout.beamWidth,
    };
  }

  return {
    ...opponent,
    searchDepth: enemyLoadout.searchDepth,
    beamWidth: enemyLoadout.beamWidth,
  };
}

export interface AdventureCampaignRunResult {
  opponentId: string;
  seed: number;
  score: number;
  victory: boolean;
  bossReached: boolean;
  locationsCleared: number;
  rewardOffersSeen: number;
}

export interface AdventureCampaignSummary {
  opponentId: string;
  runs: number;
  victories: number;
  bossReached: number;
  victoryRate: number;
  bossReachRate: number;
  averageLocationsCleared: number;
  averageRewardOffersSeen: number;
  averageScore: number;
}

export interface AdventureBenchmarkSummary {
  candidateId: string;
  totalRuns: number;
  totalVictories: number;
  totalBossReached: number;
  overallVictoryRate: number;
  overallBossReachRate: number;
  averageLocationsCleared: number;
  averageScore: number;
  opponents: AdventureCampaignSummary[];
}

function playAdventureCombat(options: {
  seed: number;
  playerCards: ReturnType<typeof getAdventureDeckCards>;
  playerCharmIds: ReturnType<typeof createAdventureRun>["charms"];
  enemyLoadout: ReturnType<typeof buildAdventureEnemyLoadout>;
  candidate: ConfiguredBotSpec;
  opponent: ConfiguredBotSpec;
}): BattleResult {
  const enemySpec = resolveEncounterOpponentSpec(options.enemyLoadout, options.opponent);
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
      state = applyAutomatedPlayerCharmActions(state, options.candidate.weights ?? null);
    }

    if (state.turn.choices.length === 0) {
      state = passTurn(state);
      continue;
    }

    const activeSpec = state.turn.activePlayer === "player" ? options.candidate : enemySpec;
    const decision = activeSpec.bot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: state.rngState,
      searchDepth: activeSpec.searchDepth,
      beamWidth: activeSpec.beamWidth,
    });

    state = decision.move ? applyMove(state, decision.move) : passTurn(state);
  }

  return state.result;
}

function scoreAdventureRun(run: ReturnType<typeof createAdventureRun>): Omit<AdventureCampaignRunResult, "opponentId" | "seed"> {
  const locationsCleared = getAdventureLocationsCleared(run);
  const rewardOffersSeen = run.rewardProgress.offersSeen;
  const bossReached =
    run.outcome === "victory" || run.activeNodeId === run.map.bossNodeId || run.history.includes(run.map.bossNodeId);
  const victory = run.outcome === "victory";
  const score = locationsCleared * 10 + rewardOffersSeen * 6 + (bossReached ? 36 : 0) + (victory ? 80 : 0);

  return {
    score,
    victory,
    bossReached,
    locationsCleared,
    rewardOffersSeen,
  };
}

function resolveAdventureSiteForBot(run: ReturnType<typeof createAdventureRun>, weights?: TrainedBotWeights | null) {
  if (!run.siteState) {
    return leaveAdventureSite(run);
  }

  if (run.siteState.kind === "camp") {
    if (!run.siteState.selectedMode) {
      return chooseAdventureCampMode(run, chooseAdventureSiteModeForBot(run, weights));
    }

    const card = chooseAdventureCampForBot(run, weights);
    return card ? resolveAdventureCamp(run, card.deckCardId) : leaveAdventureSite(run);
  }

  if (run.siteState.kind === "forge") {
    if (run.siteState.selectedCardIds.length < 2) {
      const nextCard = chooseAdventureForgeForBot(run, weights);
      return nextCard ? toggleAdventureForgeSelection(run, nextCard.deckCardId) : leaveAdventureSite(run);
    }

    return resolveAdventureForge(run);
  }

  return chooseAdventureSiteContinueForBot(run) ? resolveAdventureTreasure(run) : leaveAdventureSite(run);
}

function playAdventureRun(options: {
  seed: number;
  candidate: ConfiguredBotSpec;
  opponent: ConfiguredBotSpec;
}): AdventureCampaignRunResult {
  let run = createAdventureRun({ seed: options.seed });
  let guard = 0;

  while (run.phase !== "finished" && guard < 96) {
    if (run.phase === "draft") {
      run = resolveAdventureDraft(run, chooseAdventureDraftCardsForBot(run, options.candidate.weights));
      guard += 1;
      continue;
    }

    if (run.phase === "family") {
      run = chooseAdventureFamily(run, chooseAdventureFamilyForBot(run, options.candidate.weights));
      guard += 1;
      continue;
    }

    if (run.phase === "map") {
      const node = chooseAdventureNodeForBot(run, options.candidate.weights);
      run = node ? enterAdventureNode(run, node.id) : run;
      guard += 1;
      continue;
    }

    if (run.phase === "encounter" && run.activeNodeId) {
      const node = getAdventureNode(run, run.activeNodeId);
      if (!isCombatAdventureNode(node.kind)) {
        run = completeAdventureEncounter(run);
        guard += 1;
        continue;
      }

      const loadout = buildAdventureEnemyLoadout(run, node);
      const battleResult = playAdventureCombat({
        seed: run.encounter?.battleSeed ?? mixSeed(run.seed, `encounter:${node.id}`),
        playerCards: getAdventureDeckCards(run),
        playerCharmIds: run.charms,
        enemyLoadout: loadout,
        candidate: options.candidate,
        opponent: options.opponent,
      });
      run = completeAdventureEncounter(run, battleResult, battleResult.winner === "player" ? loadout.cards : []);
      guard += 1;
      continue;
    }

    if (run.phase === "reward") {
      const reward = chooseAdventureRewardForBot(run, options.candidate.weights);
      run = resolveAdventureReward(run, reward?.rewardId);
      guard += 1;
      continue;
    }

    if (run.phase === "charm") {
      const charm = chooseAdventureCharmForBot(run, options.candidate.weights);
      run = resolveAdventureCharm(run, charm?.charmId);
      guard += 1;
      continue;
    }

    if (run.phase === "site") {
      run = resolveAdventureSiteForBot(run, options.candidate.weights);
      guard += 1;
      continue;
    }

    break;
  }

  if (guard >= 96 && run.phase !== "finished") {
    throw new Error(`Adventure benchmark exceeded safety guard for seed ${options.seed}.`);
  }

  return {
    opponentId: options.opponent.id,
    seed: options.seed,
    ...scoreAdventureRun(run),
  };
}

export function benchmarkAdventureAgainstOpponents(options: {
  seed: number;
  candidate: ConfiguredBotSpec;
  opponents: ConfiguredBotSpec[];
  runsPerOpponent: number;
}): AdventureBenchmarkSummary {
  const summaries: AdventureCampaignSummary[] = [];
  let totalVictories = 0;
  let totalBossReached = 0;
  let totalLocationsCleared = 0;
  let totalScore = 0;
  let totalRuns = 0;

  for (const opponent of options.opponents) {
    let victories = 0;
    let bossReached = 0;
    let locationsCleared = 0;
    let rewardOffersSeen = 0;
    let score = 0;

    for (let runIndex = 0; runIndex < options.runsPerOpponent; runIndex += 1) {
      const runSeed = mixSeed(options.seed, `adventure:${options.candidate.id}:vs:${opponent.id}:run:${runIndex}`);
      const result = playAdventureRun({
        seed: runSeed,
        candidate: options.candidate,
        opponent,
      });

      victories += result.victory ? 1 : 0;
      bossReached += result.bossReached ? 1 : 0;
      locationsCleared += result.locationsCleared;
      rewardOffersSeen += result.rewardOffersSeen;
      score += result.score;
    }

    totalRuns += options.runsPerOpponent;
    totalVictories += victories;
    totalBossReached += bossReached;
    totalLocationsCleared += locationsCleared;
    totalScore += score;

    summaries.push({
      opponentId: opponent.id,
      runs: options.runsPerOpponent,
      victories,
      bossReached,
      victoryRate: options.runsPerOpponent === 0 ? 0 : victories / options.runsPerOpponent,
      bossReachRate: options.runsPerOpponent === 0 ? 0 : bossReached / options.runsPerOpponent,
      averageLocationsCleared: options.runsPerOpponent === 0 ? 0 : locationsCleared / options.runsPerOpponent,
      averageRewardOffersSeen: options.runsPerOpponent === 0 ? 0 : rewardOffersSeen / options.runsPerOpponent,
      averageScore: options.runsPerOpponent === 0 ? 0 : score / options.runsPerOpponent,
    });
  }

  return {
    candidateId: options.candidate.id,
    totalRuns,
    totalVictories,
    totalBossReached,
    overallVictoryRate: totalRuns === 0 ? 0 : totalVictories / totalRuns,
    overallBossReachRate: totalRuns === 0 ? 0 : totalBossReached / totalRuns,
    averageLocationsCleared: totalRuns === 0 ? 0 : totalLocationsCleared / totalRuns,
    averageScore: totalRuns === 0 ? 0 : totalScore / totalRuns,
    opponents: summaries,
  };
}
