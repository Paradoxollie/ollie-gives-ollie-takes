import { describe, expect, it } from "vitest";

import { AI_PLAYER_MODELS } from "@/core/ai-lab/models";
import { buildAiLabReport, createAiLabInsights, createAiLabMarkdownReport } from "@/core/ai-lab/report";
import { FAMILY_STARTER_DECK_CARD_COUNT } from "@/core/config/decks";
import type { AiLabDeckSummary } from "@/core/ai-lab/types";

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
  it("builds deterministic model and deck summaries", { timeout: 20_000 }, () => {
    const options = {
      seed: 404,
      matchesPerPairing: 1,
      adventureRunsPerModel: 1,
      models: FAST_TEST_MODELS,
      generatedAt: "2026-05-18T00:00:00.000Z",
      reportId: "ai-lab-test",
    };

    const left = buildAiLabReport(options);
    const right = buildAiLabReport(options);

    expect(left).toEqual(right);
    expect(left.playerModels.map((model) => model.id)).toEqual(FAST_TEST_MODELS.map((model) => model.id));
    expect(left.deckSummaries).toHaveLength(1);
    expect(left.config.scenarioIds).toEqual(["current-family-start"]);
    expect(left.config.adventureRunsPerModel).toBe(1);
    expect(left.deckSummaries[0]?.startingDeckCardCount).toBe(FAMILY_STARTER_DECK_CARD_COUNT);
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
    expect(left.diagnostics.cardAnalytics[0]?.offered).toBeGreaterThanOrEqual(
      left.diagnostics.cardAnalytics[0]?.played ?? 0,
    );
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

  it("exports card, family, and combo diagnostics to markdown", { timeout: 20_000 }, () => {
    const report = buildAiLabReport({
      seed: 405,
      matchesPerPairing: 1,
      adventureRunsPerModel: 1,
      models: FAST_TEST_MODELS,
      generatedAt: "2026-05-18T00:00:00.000Z",
      reportId: "ai-lab-markdown-test",
    });
    const markdown = createAiLabMarkdownReport(report);

    expect(markdown).toContain("## Cartes");
    expect(markdown).toContain("## Familles");
    expect(markdown).toContain("## Combos detectes");
    expect(markdown).toContain("## Runs aventure complets");
  });
});
