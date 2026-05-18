import { DECK_PRESET_IDS } from "@/core/types";
import { summarizeAiLabDeck, summarizeAiLabPairing } from "@/core/ai-lab/aggregate";
import { AI_PLAYER_MODELS, getAiPlayerModel, getDefaultAiLadderPairings } from "@/core/ai-lab/models";
import { simulateAiLabSeries } from "@/core/ai-lab/match";
import type {
  AiLabDeckSummary,
  AiLabInsight,
  AiLabModelSummary,
  AiLabPairingSummary,
  AiLabReport,
  AiLabRunConfig,
  AiPlayerModel,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import type { DeckPresetId } from "@/core/types";

export interface BuildAiLabReportOptions {
  matchesPerPairing?: number;
  seed?: number;
  deckPresetIds?: DeckPresetId[];
  models?: AiPlayerModel[];
  reportId?: string;
  generatedAt?: string;
}

function safeRate(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

function formatAverage(value: number): string {
  return value.toFixed(2);
}

function getModelSummary(summary: AiLabPairingSummary, modelId: AiPlayerModelId): AiLabModelSummary {
  const modelSummary = summary.modelSummaries.find((entry) => entry.modelId === modelId);
  if (!modelSummary) {
    throw new Error(`Missing model summary for ${modelId}.`);
  }

  return modelSummary;
}

function aggregateSkillSummaries(
  modelIds: AiPlayerModelId[],
  ladderPairings: AiLabPairingSummary[],
): AiLabModelSummary[] {
  const totals = new Map<AiPlayerModelId, AiLabModelSummary>(
    modelIds.map((modelId) => [
      modelId,
      {
        modelId,
        games: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        winRate: 0,
        averageHpEdge: 0,
      },
    ]),
  );

  for (const pairing of ladderPairings) {
    for (const modelSummary of pairing.modelSummaries) {
      const total = totals.get(modelSummary.modelId);
      if (!total) {
        continue;
      }

      total.games += modelSummary.games;
      total.wins += modelSummary.wins;
      total.losses += modelSummary.losses;
      total.draws += modelSummary.draws;
      total.averageHpEdge += modelSummary.averageHpEdge * modelSummary.games;
    }
  }

  return Array.from(totals.values()).map((summary) => ({
    ...summary,
    winRate: safeRate(summary.wins, summary.games),
    averageHpEdge: safeRate(summary.averageHpEdge, summary.games),
  }));
}

function severityRank(severity: AiLabInsight["severity"]): number {
  return severity === "problem" ? 0 : severity === "watch" ? 1 : 2;
}

/**
 * Builds concise design diagnostics from deterministic AI-lab summaries.
 */
export function createAiLabInsights(report: Pick<AiLabReport, "deckSummaries" | "ladderPairings">): AiLabInsight[] {
  const insights: AiLabInsight[] = [];

  for (const deck of report.deckSummaries) {
    if (deck.status === "problem") {
      insights.push({
        id: `deck-${deck.deckPresetId}-problem`,
        severity: "problem",
        title: `${deck.deckPresetId} sort de la zone saine`,
        detail: deck.notes.join(" "),
        recommendation: "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles.",
      });
    } else if (deck.status === "watch") {
      insights.push({
        id: `deck-${deck.deckPresetId}-watch`,
        severity: "watch",
        title: `${deck.deckPresetId} a un signal a surveiller`,
        detail: deck.notes.join(" "),
        recommendation: "Relancer le rapport avec un echantillon plus grand avant de changer les cartes.",
      });
    }
  }

  const turnSpread =
    Math.max(...report.deckSummaries.map((entry) => entry.averages.turns)) -
    Math.min(...report.deckSummaries.map((entry) => entry.averages.turns));
  if (turnSpread >= 4) {
    insights.push({
      id: "deck-turn-spread",
      severity: "watch",
      title: "La taille de deck change fortement le rythme",
      detail: `Ecart de ${formatAverage(turnSpread)} tours moyens entre les presets.`,
      recommendation: "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut.",
    });
  }

  for (const pairing of report.ladderPairings) {
    const [leftModelId, rightModelId] = pairing.matchup;
    const left = getAiPlayerModel(leftModelId);
    const right = getAiPlayerModel(rightModelId);
    const lower = left.rank <= right.rank ? left : right;
    const higher = left.rank <= right.rank ? right : left;
    const lowerSummary = getModelSummary(pairing, lower.id);
    const higherSummary = getModelSummary(pairing, higher.id);

    if (lowerSummary.winRate > higherSummary.winRate + 0.08) {
      insights.push({
        id: `skill-inversion-${pairing.deckPresetId}-${lower.id}-vs-${higher.id}`,
        severity: "problem",
        title: "Inversion de niveau detectee",
        detail: `${lower.label} bat ${higher.label} sur ${pairing.deckPresetId} (${formatPercent(
          lowerSummary.winRate,
        )} contre ${formatPercent(higherSummary.winRate)}).`,
        recommendation: "Regarder les cartes ou situations qui recompensent trop le jeu immediat.",
      });
    }

    if (higher.id === "champion" && higherSummary.winRate < 0.5 && pairing.totalGames >= 8) {
      insights.push({
        id: `champion-underperforms-${pairing.deckPresetId}`,
        severity: "watch",
        title: "Le champion ne depasse pas l'expert",
        detail: `${higher.label} gagne ${formatPercent(higherSummary.winRate)} contre ${lower.label} sur ${pairing.deckPresetId}.`,
        recommendation: "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion.",
      });
    }
  }

  if (insights.length === 0) {
    insights.push({
      id: "baseline-healthy",
      severity: "info",
      title: "Aucun probleme fort sur cet echantillon",
      detail: "Les presets restent dans les seuils de base du labo IA.",
      recommendation: "Augmenter le nombre de matchs pour confirmer avant d'ajuster le design.",
    });
  }

  return insights.sort((left, right) => severityRank(left.severity) - severityRank(right.severity));
}

function createReportId(generatedAt: string): string {
  const date = new Date(generatedAt);
  if (Number.isNaN(date.getTime())) {
    return "ai-lab-manual";
  }

  return [
    "ai-lab-",
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
    "-",
    String(date.getUTCHours()).padStart(2, "0"),
    String(date.getUTCMinutes()).padStart(2, "0"),
    String(date.getUTCSeconds()).padStart(2, "0"),
  ].join("");
}

/**
 * Runs the full deterministic AI lab benchmark without touching React or local files.
 */
export function buildAiLabReport(options: BuildAiLabReportOptions = {}): AiLabReport {
  const generatedAt = options.generatedAt ?? new Date().toISOString();
  const playerModels = [...(options.models ?? AI_PLAYER_MODELS)].sort((left, right) => left.rank - right.rank);
  const deckPresetIds = options.deckPresetIds ?? [...DECK_PRESET_IDS];
  const matchesPerPairing = options.matchesPerPairing ?? 24;
  const seed = options.seed ?? 1701;
  const ladderPairs = getDefaultAiLadderPairings(playerModels);
  const ladderPairings: AiLabPairingSummary[] = [];
  const deckSummaries: AiLabDeckSummary[] = [];

  for (const deckPresetId of deckPresetIds) {
    const mirrorModelId = playerModels.find((model) => model.id === "regular")?.id ?? playerModels[0].id;
    const mirrorSummary = summarizeAiLabPairing(
      simulateAiLabSeries({
        deckPresetId,
        seed,
        matchup: [mirrorModelId, mirrorModelId],
        matches: matchesPerPairing,
      }),
    );
    deckSummaries.push(summarizeAiLabDeck(deckPresetId, mirrorModelId, mirrorSummary));

    for (const matchup of ladderPairs) {
      ladderPairings.push(
        summarizeAiLabPairing(
          simulateAiLabSeries({
            deckPresetId,
            seed,
            matchup,
            matches: matchesPerPairing,
          }),
        ),
      );
    }
  }

  const config: AiLabRunConfig = {
    matchesPerPairing,
    seed,
    deckPresetIds,
    modelIds: playerModels.map((model) => model.id),
  };
  const partialReport = {
    deckSummaries,
    ladderPairings,
  };

  return {
    reportId: options.reportId ?? createReportId(generatedAt),
    generatedAt,
    config,
    playerModels,
    skillSummaries: aggregateSkillSummaries(config.modelIds, ladderPairings),
    deckSummaries,
    ladderPairings,
    insights: createAiLabInsights(partialReport),
  };
}

/**
 * Formats the AI lab report as a compact Markdown artifact for design review.
 */
export function createAiLabMarkdownReport(report: AiLabReport): string {
  const insightLines = report.insights
    .map((insight) => `- [${insight.severity}] ${insight.title}: ${insight.detail} ${insight.recommendation}`)
    .join("\n");
  const modelRows = report.skillSummaries
    .map((summary) => {
      const model = getAiPlayerModel(summary.modelId);
      return `| ${model.label} | ${summary.games} | ${summary.wins} | ${summary.losses} | ${summary.draws} | ${formatPercent(
        summary.winRate,
      )} | ${formatAverage(summary.averageHpEdge)} |`;
    })
    .join("\n");
  const deckRows = report.deckSummaries
    .map(
      (deck) =>
        `| ${deck.deckPresetId} | ${deck.status} | ${formatPercent(deck.startingPlayerWinRate)} | ${formatPercent(
          deck.drawRate,
        )} | ${formatAverage(deck.averages.turns)} | ${formatAverage(deck.averages.flipsPerTurn)} | ${formatPercent(
          deck.deadTurnFrequency,
        )} | ${deck.notes.join(" ")} |`,
    )
    .join("\n");
  const pairingRows = report.ladderPairings
    .map((pairing) => {
      const [left, right] = pairing.matchup;
      const leftSummary = getModelSummary(pairing, left);
      const rightSummary = getModelSummary(pairing, right);
      return `| ${pairing.deckPresetId} | ${getAiPlayerModel(left).label} vs ${getAiPlayerModel(right).label} | ${formatPercent(
        leftSummary.winRate,
      )} | ${formatPercent(rightSummary.winRate)} | ${formatPercent(pairing.drawRate)} | ${formatAverage(
        pairing.averages.flipsPerTurn,
      )} |`;
    })
    .join("\n");

  return `# Rapport AI Lab

- ID: \`${report.reportId}\`
- Genere le: ${report.generatedAt}
- Matchs par pairing: ${report.config.matchesPerPairing}
- Seed: ${report.config.seed}

## Signaux

${insightLines}

## Echelle de joueurs

| Modele | Games | Wins | Losses | Draws | Win rate | Edge PV |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
${modelRows}

## Decks

| Deck | Statut | Premier joueur | Draw | Tours | Flips/tour | Tours morts | Notes |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
${deckRows}

## Pairings de progression

| Deck | Pairing | Gauche | Droite | Draw | Flips/tour |
| --- | --- | ---: | ---: | ---: | ---: |
${pairingRows}
`;
}

/**
 * Formats a generated TypeScript module so the deployed lab can show the last
 * committed benchmark even when `/reports` is not present on the server.
 */
export function formatAiLabReportModule(report: AiLabReport): string {
  return [
    'import type { AiLabReport } from "@/core/ai-lab/types";',
    "",
    `export const LATEST_AI_LAB_REPORT: AiLabReport = ${JSON.stringify(report, null, 2)};`,
    "",
  ].join("\n");
}
