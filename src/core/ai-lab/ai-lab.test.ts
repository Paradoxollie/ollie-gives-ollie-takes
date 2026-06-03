import { describe, expect, it } from "vitest";

import { getAiLabAdventureModelWeights } from "@/core/ai-lab/adventure";
import { simulateAiLabMatch, simulateAiLabSeries } from "@/core/ai-lab/match";
import { AI_PLAYER_MODELS, getDefaultAiLadderPairings } from "@/core/ai-lab/models";
import { buildAiLabReport, createAiLabInsights, createAiLabMarkdownReport } from "@/core/ai-lab/report";
import { getCurrentFamilyPairForAiLabMatch, getCurrentFamilyPairForAiLabSeries } from "@/core/ai-lab/scenarios";
import { attachAiLabTrend } from "@/core/ai-lab/trends";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { FAMILY_STARTER_DECK_CARD_COUNT } from "@/core/config/decks";
import { normalizeTrainedBotWeights } from "@/core/config/gameConfig";
import type {
  AiLabAdventureModelSummary,
  AiLabBalanceRecommendation,
  AiLabDeckSummary,
  AiLabDesignDiagnostics,
  AiPlayerModelId,
} from "@/core/ai-lab/types";

const FAST_TEST_MODELS = AI_PLAYER_MODELS.filter((model) => model.id === "beginner" || model.id === "opportunist");

function makeDeckSummary(overrides: Partial<AiLabDeckSummary> = {}): AiLabDeckSummary {
  return {
    scenarioId: "current-family-start",
    scenarioLabel: `Depart actuel - famille ${FAMILY_STARTER_DECK_CARD_COUNT} cartes`,
    startingDeckCardCount: FAMILY_STARTER_DECK_CARD_COUNT,
    mirrorModelId: "regular",
    totalGames: 20,
    drawRate: 0.25,
    startingPlayerWinRate: 0.7,
    averages: {
      turns: 18,
      rounds: 2,
      flipsPerMatch: 5,
      flipsPerTurn: 0.28,
      reshuffles: 1,
      deadTurns: 2,
      finalHpDifference: 4,
    },
    deadTurnFrequency: 0.13,
    status: "problem",
    notes: ["Avantage premier joueur tres marque.", "Tours morts frequents."],
    ...overrides,
  };
}

describe("AI lab report", () => {
  it("uses only an approved Champion profile for full-run decisions", () => {
    const championWeights = getAiLabAdventureModelWeights("champion");

    if (
      LIVE_CHAMPION_PROFILE.source === "trained" &&
      LIVE_CHAMPION_PROFILE.approved &&
      LIVE_CHAMPION_PROFILE.weights
    ) {
      expect(championWeights).toEqual(normalizeTrainedBotWeights(LIVE_CHAMPION_PROFILE.weights));
      return;
    }

    expect(championWeights).toEqual(getAiLabAdventureModelWeights("expert"));
  });

  it("balances one starter-family duel across seats and starting players", () => {
    const results = simulateAiLabSeries({
      seed: 406,
      matchup: ["beginner", "opportunist"],
      matches: 4,
    });
    const firstResult = results[0];

    expect(new Set(results.map((result) => result.matchSeed)).size).toBe(1);
    expect(results.every((result) => result.playerStarterFamily === firstResult.playerStarterFamily)).toBe(true);
    expect(results.every((result) => result.enemyStarterFamily === firstResult.enemyStarterFamily)).toBe(true);
    expect(results.filter((result) => result.modelBySeat.player === "beginner")).toHaveLength(2);
    expect(results.filter((result) => result.startingPlayer === "player")).toHaveLength(2);
  });

  it("reuses identical deterministic policies without changing the match result", () => {
    const series = simulateAiLabSeries({
      seed: 406,
      matchup: ["regular", "regular"],
      matches: 4,
    });
    const directSecondSeatRun = simulateAiLabMatch(
      {
        seed: 406,
        matchup: ["regular", "regular"],
      },
      1,
    );

    expect(series[1]).toEqual(directSecondSeatRun);
  });

  it("covers every starter family before repeating a family-pair offset", () => {
    const pairs = Array.from({ length: 6 }, (_, index) => getCurrentFamilyPairForAiLabMatch(index));

    expect(new Set(pairs.map((pair) => pair.playerFamily)).size).toBe(6);
    expect(pairs.every((pair) => pair.playerFamily !== pair.enemyFamily)).toBe(true);
  });

  it("covers all unique starter-family duels across the default ladder", () => {
    const pairings = getDefaultAiLadderPairings();
    const pairIds = pairings.flatMap((matchup) =>
      Array.from({ length: 6 }, (_, blockIndex) => {
        const pair = getCurrentFamilyPairForAiLabSeries(matchup, blockIndex * 4, 406);
        return [pair.playerFamily, pair.enemyFamily].sort().join("-vs-");
      }),
    );

    expect(new Set(pairIds).size).toBe(15);
  });

  it("covers every directed starter-family duel across the regular mirror and default ladder", () => {
    const series: Array<[AiPlayerModelId, AiPlayerModelId]> = [
      ["regular", "regular"],
      ...getDefaultAiLadderPairings(),
    ];
    const directedPairIds = series.flatMap((matchup) =>
      Array.from({ length: 6 }, (_, blockIndex) => {
        const pair = getCurrentFamilyPairForAiLabSeries(matchup, blockIndex * 4, 406);
        return `${pair.playerFamily}-vs-${pair.enemyFamily}`;
      }),
    );

    expect(new Set(directedPairIds).size).toBe(30);
  });

  it("rejects reports that cannot balance seats and starting player", () => {
    expect(() =>
      buildAiLabReport({
        matchesPerPairing: 3,
        adventureRunsPerModel: 1,
        models: FAST_TEST_MODELS,
      }),
    ).toThrowError("positive multiple of 4");
  });

  it("builds deterministic model and deck summaries", { timeout: 60_000 }, () => {
    const progressMessages: string[] = [];
    const options = {
      seed: 404,
      matchesPerPairing: 4,
      adventureRunsPerModel: 1,
      models: FAST_TEST_MODELS,
      generatedAt: "2026-05-18T00:00:00.000Z",
      reportId: "ai-lab-test",
      onProgress: (message: string) => progressMessages.push(message),
    };

    const left = buildAiLabReport(options);
    const right = buildAiLabReport(options);

    expect(left).toEqual(right);
    expect(left.playerModels.map((model) => model.id)).toEqual(FAST_TEST_MODELS.map((model) => model.id));
    expect(left.deckSummaries).toHaveLength(1);
    expect(left.config.scenarioIds).toEqual(["current-family-start"]);
    expect(left.config.adventureRunsPerModel).toBe(1);
    expect(left.deckSummaries[0]?.startingDeckCardCount).toBe(FAMILY_STARTER_DECK_CARD_COUNT);
    expect(left.starterFamilyMatchups?.length).toBeGreaterThan(0);
    expect(left.starterFamilyMatchups?.every((matchup) => matchup.games % 4 === 0)).toBe(true);
    expect(left.adventureSummaries).toHaveLength(FAST_TEST_MODELS.length);
    expect(left.adventureRuns).toHaveLength(FAST_TEST_MODELS.length);
    expect(left.adventureRuns.every((run) => run.startingDeckCardCount === FAMILY_STARTER_DECK_CARD_COUNT)).toBe(true);
    expect(left.adventureRuns.every((run) => run.selectedFamily !== null)).toBe(true);
    expect(left.adventureRuns.every((run) => run.path.length > 0)).toBe(true);
    expect(left.ladderPairings).toHaveLength(FAST_TEST_MODELS.length - 1);
    expect(left.skillSummaries.find((summary) => summary.modelId === "beginner")?.games).toBeGreaterThan(0);
    expect(left.diagnostics.cardAnalytics.length).toBeGreaterThan(0);
    expect(left.diagnostics.familyAnalytics.length).toBeGreaterThan(0);
    expect(left.diagnostics.comboAnalytics.length).toBeGreaterThan(0);
    expect(left.adventureDiagnostics?.comboAnalytics.length).toBeGreaterThan(0);
    expect(left.adventureDiagnostics?.baselineWinRate).toBeGreaterThanOrEqual(0);
    expect(
      left.adventureDiagnostics?.cardAnalytics
        .flatMap((card) => card.byModel.map((usage) => usage.modelId))
        .every((modelId) => FAST_TEST_MODELS.some((model) => model.id === modelId)),
    ).toBe(true);
    expect(left.diagnostics.cardAnalytics[0]?.offered).toBeGreaterThanOrEqual(
      left.diagnostics.cardAnalytics[0]?.played ?? 0,
    );
    expect(progressMessages.some((message) => message.includes("AI lab adventures: beginner complete"))).toBe(true);
    expect(progressMessages.some((message) => message.includes("Full adventure runs complete"))).toBe(true);

    const trended = attachAiLabTrend(
      {
        ...left,
        reportId: "ai-lab-test-next",
        generatedAt: "2026-05-19T00:00:00.000Z",
      },
      [left],
    );
    expect(trended.trend?.snapshots).toHaveLength(2);
  });

  it("creates actionable insights for unhealthy deck summaries", () => {
    const insights = createAiLabInsights({
      deckSummaries: [makeDeckSummary()],
      ladderPairings: [],
    });

    expect(insights[0]).toMatchObject({
      severity: "problem",
      id: "scenario-current-family-start-problem",
    });
  });

  it("keeps full-run recommendations exploratory until enough runs are available", () => {
    const recommendation = {
      id: "card-test-nerf",
      severity: "problem",
      target: "card",
      action: "nerf",
      confidence: "high",
      sampleSize: 40,
      title: "Carte test tire trop de valeur",
      detail: "40 plays, 80% win.",
      recommendation: "Baisser sa valeur.",
    } satisfies AiLabBalanceRecommendation;
    const diagnostics = {
      cardAnalytics: [],
      familyAnalytics: [],
      roleAnalytics: [],
      rarityAnalytics: [],
      comboAnalytics: [],
      balanceRecommendations: [recommendation],
    } satisfies AiLabDesignDiagnostics;
    const adventureSummary = {
      modelId: "beginner",
      runs: 4,
      bossReachRate: 0.5,
      averageCombatWinRate: 0.5,
    } as AiLabAdventureModelSummary;

    const insights = createAiLabInsights({
      deckSummaries: [],
      ladderPairings: [],
      adventureDiagnostics: diagnostics,
      adventureSummaries: [adventureSummary],
    });

    expect(insights[0]?.severity).toBe("watch");
    expect(insights[0]?.title).toContain("a confirmer");
  });

  it("exports card, family, and combo diagnostics to markdown", { timeout: 60_000 }, () => {
    const report = buildAiLabReport({
      seed: 405,
      matchesPerPairing: 4,
      adventureRunsPerModel: 1,
      models: FAST_TEST_MODELS,
      generatedAt: "2026-05-18T00:00:00.000Z",
      reportId: "ai-lab-markdown-test",
    });
    const markdown = createAiLabMarkdownReport(report);

    expect(markdown).toContain("## Cartes");
    expect(markdown).toContain("## Duels de starters");
    expect(markdown).toContain("## Cartes de run complet");
    expect(markdown).toContain("## Familles");
    expect(markdown).toContain("## Combos detectes");
    expect(markdown).toContain("## Combos de deckbuilding en run complet");
    expect(markdown).toContain("## Runs aventure complets");
    expect(markdown).toContain("## Tendances stables");
  });
});
