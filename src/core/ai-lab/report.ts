import { summarizeAiLabDeck, summarizeAiLabPairing } from "@/core/ai-lab/aggregate";
import { simulateAiLabAdventureRuns } from "@/core/ai-lab/adventure";
import { summarizeAiLabDiagnostics } from "@/core/ai-lab/diagnostics";
import { AI_PLAYER_MODELS, getAiPlayerModel, getDefaultAiLadderPairings } from "@/core/ai-lab/models";
import { simulateAiLabSeries } from "@/core/ai-lab/match";
import { getAiLabScenario, getDefaultAiLabScenarioIds } from "@/core/ai-lab/scenarios";
import type {
  AiLabDeckSummary,
  AiLabInsight,
  AiLabMatchResult,
  AiLabModelSummary,
  AiLabPairingSummary,
  AiLabReport,
  AiLabRunConfig,
  AiLabScenarioId,
  AiPlayerModel,
  AiPlayerModelId,
} from "@/core/ai-lab/types";

export interface BuildAiLabReportOptions {
  matchesPerPairing?: number;
  adventureRunsPerModel?: number;
  seed?: number;
  scenarioIds?: AiLabScenarioId[];
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

function summaryLabel(summary: Pick<AiLabDeckSummary | AiLabPairingSummary, "scenarioLabel">): string {
  return summary.scenarioLabel;
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
export function createAiLabInsights(
  report: Pick<AiLabReport, "deckSummaries" | "ladderPairings"> &
    Partial<Pick<AiLabReport, "diagnostics" | "adventureSummaries">>,
): AiLabInsight[] {
  const insights: AiLabInsight[] = [];

  for (const deck of report.deckSummaries) {
    if (deck.status === "problem") {
      insights.push({
        id: `scenario-${deck.scenarioId}-problem`,
        severity: "problem",
        title: `${deck.scenarioLabel} sort de la zone saine`,
        detail: deck.notes.join(" "),
        recommendation: "Tester ce depart avec plus de matchs, puis ajuster familles, pioche ou valeurs faibles.",
      });
    } else if (deck.status === "watch") {
      insights.push({
        id: `scenario-${deck.scenarioId}-watch`,
        severity: "watch",
        title: `${deck.scenarioLabel} a un signal a surveiller`,
        detail: deck.notes.join(" "),
        recommendation: "Relancer le rapport avec un echantillon plus grand avant de changer les cartes.",
      });
    }
  }

  const turnSpread = report.deckSummaries.length > 1
    ? Math.max(...report.deckSummaries.map((entry) => entry.averages.turns)) -
      Math.min(...report.deckSummaries.map((entry) => entry.averages.turns))
    : 0;
  if (report.deckSummaries.length > 1 && turnSpread >= 4) {
    insights.push({
      id: "scenario-turn-spread",
      severity: "watch",
      title: "Les scenarios changent fortement le rythme",
      detail: `Ecart de ${formatAverage(turnSpread)} tours moyens entre les scenarios.`,
      recommendation: "Comparer les reshuffles et les tours morts avant de choisir le scenario de reference.",
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
        id: `skill-inversion-${pairing.scenarioId}-${lower.id}-vs-${higher.id}`,
        severity: "problem",
        title: "Inversion de niveau detectee",
        detail: `${lower.label} bat ${higher.label} sur ${pairing.scenarioLabel} (${formatPercent(
          lowerSummary.winRate,
        )} contre ${formatPercent(higherSummary.winRate)}).`,
        recommendation: "Regarder les cartes ou situations qui recompensent trop le jeu immediat.",
      });
    }

    if (higher.id === "champion" && higherSummary.winRate < 0.5 && pairing.totalGames >= 8) {
      insights.push({
        id: `champion-underperforms-${pairing.scenarioId}`,
        severity: "watch",
        title: "Le champion ne depasse pas l'expert",
        detail: `${higher.label} gagne ${formatPercent(higherSummary.winRate)} contre ${lower.label} sur ${pairing.scenarioLabel}.`,
        recommendation: "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion.",
      });
    }
  }

  for (const recommendation of report.diagnostics?.balanceRecommendations.slice(0, 4) ?? []) {
    insights.push({
      id: `diagnostic-${recommendation.id}`,
      severity: recommendation.severity,
      title: recommendation.title,
      detail: `${recommendation.detail} Confiance ${recommendation.confidence}, echantillon ${recommendation.sampleSize}.`,
      recommendation: recommendation.recommendation,
    });
  }

  for (const adventure of report.adventureSummaries ?? []) {
    const model = getAiPlayerModel(adventure.modelId);
    if (adventure.runs === 0) {
      continue;
    }

    if (model.rank >= 4 && adventure.bossReachRate < 0.45) {
      insights.push({
        id: `adventure-boss-reach-${adventure.modelId}`,
        severity: "watch",
        title: `${model.label} atteint peu le boss en run complet`,
        detail: `${model.label} atteint le boss dans ${formatPercent(adventure.bossReachRate)} des runs complets, avec ${formatPercent(
          adventure.averageCombatWinRate,
        )} de combats gagnes.`,
        recommendation: "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart.",
      });
    }

    if (model.rank >= 3 && adventure.averageCombatWinRate < 0.35) {
      insights.push({
        id: `adventure-combat-wall-${adventure.modelId}`,
        severity: "watch",
        title: `${model.label} se heurte aux combats de run`,
        detail: `Win rate combat ${formatPercent(adventure.averageCombatWinRate)} sur les runs complets.`,
        recommendation: "Verifier la difficulte des ennemis du chemin et les recompenses avant boss.",
      });
    }
  }

  if (insights.length === 0) {
    insights.push({
      id: "baseline-healthy",
      severity: "info",
      title: "Aucun probleme fort sur cet echantillon",
      detail: "Le depart reel actuel reste dans les seuils de base du labo IA.",
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
  const scenarioIds = options.scenarioIds ?? getDefaultAiLabScenarioIds();
  const matchesPerPairing = options.matchesPerPairing ?? 24;
  const adventureRunsPerModel = options.adventureRunsPerModel ?? Math.max(1, Math.ceil(matchesPerPairing / 16));
  const seed = options.seed ?? 1701;
  const ladderPairs = getDefaultAiLadderPairings(playerModels);
  const ladderPairings: AiLabPairingSummary[] = [];
  const deckSummaries: AiLabDeckSummary[] = [];
  const allResults: AiLabMatchResult[] = [];

  for (const scenarioId of scenarioIds) {
    getAiLabScenario(scenarioId);
    const mirrorModelId = playerModels.find((model) => model.id === "regular")?.id ?? playerModels[0].id;
    const mirrorResults = simulateAiLabSeries({
        scenarioId,
        seed,
        matchup: [mirrorModelId, mirrorModelId],
        matches: matchesPerPairing,
      });
    allResults.push(...mirrorResults);
    const mirrorSummary = summarizeAiLabPairing(mirrorResults);
    deckSummaries.push(summarizeAiLabDeck(mirrorModelId, mirrorSummary));

    for (const matchup of ladderPairs) {
      const pairingResults = simulateAiLabSeries({
        scenarioId,
        seed,
        matchup,
        matches: matchesPerPairing,
      });
      allResults.push(...pairingResults);
      ladderPairings.push(summarizeAiLabPairing(pairingResults));
    }
  }

  const config: AiLabRunConfig = {
    matchesPerPairing,
    adventureRunsPerModel,
    seed,
    scenarioIds,
    modelIds: playerModels.map((model) => model.id),
  };
  const adventureReport = simulateAiLabAdventureRuns({
    seed,
    models: playerModels,
    runsPerModel: adventureRunsPerModel,
  });
  const diagnostics = summarizeAiLabDiagnostics(allResults);
  const partialReport = {
    deckSummaries,
    ladderPairings,
    diagnostics,
    adventureSummaries: adventureReport.summaries,
  };

  return {
    reportId: options.reportId ?? createReportId(generatedAt),
    generatedAt,
    config,
    playerModels,
    skillSummaries: aggregateSkillSummaries(config.modelIds, ladderPairings),
    deckSummaries,
    ladderPairings,
    adventureSummaries: adventureReport.summaries,
    adventureRuns: adventureReport.runs,
    diagnostics,
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
        `| ${summaryLabel(deck)} | ${deck.startingDeckCardCount} | ${deck.status} | ${formatPercent(deck.startingPlayerWinRate)} | ${formatPercent(
          deck.drawRate,
        )} | ${formatAverage(deck.averages.turns)} | ${formatAverage(deck.averages.flipsPerTurn)} | ${formatPercent(
          deck.deadTurnFrequency,
        )} | ${deck.notes.join(" ")} |`,
    )
    .join("\n");
  const adventureRows = report.adventureSummaries
    .map((summary) => {
      const model = getAiPlayerModel(summary.modelId);
      const familyPicks =
        Object.entries(summary.familyPickRates)
          .map(([family, rate]) => `${family} ${formatPercent(rate ?? 0)}`)
          .join(", ") || "aucun";
      return `| ${model.label} | ${summary.runs} | ${formatPercent(summary.bossReachRate)} | ${formatPercent(
        summary.victoryRate,
      )} | ${formatAverage(summary.averageLocationsCleared)} | ${formatAverage(
        summary.averageFinalDeckSize,
      )} | ${formatPercent(summary.averageCombatWinRate)} | ${formatAverage(
        summary.averageRewardsClaimed,
      )} | ${formatAverage(summary.averageCharms)} | ${formatAverage(summary.averageUpgrades)} | ${formatAverage(
        summary.averageRemovals,
      )} | ${formatAverage(summary.averageFusions)} | ${familyPicks} | ${summary.notes.join(" ")} |`;
    })
    .join("\n");
  const adventureRunRows = report.adventureRuns
    .slice(0, 18)
    .map((run) => {
      const model = getAiPlayerModel(run.modelId);
      const path = run.path.map((node) => node.kind).join(" > ");
      return `| ${model.label} | ${run.seed} | ${run.selectedFamily ?? "aucune"} | ${run.outcome} | ${
        run.bossReached ? "oui" : "non"
      } | ${run.startingDeckCardCount}->${run.finalDeckCardCount} | ${run.rewardsClaimed}/${run.rewardOffersSeen} | ${
        run.charmsClaimed.length
      } | ${run.upgrades}/${run.removals}/${run.fusions} | ${path} |`;
    })
    .join("\n");
  const pairingRows = report.ladderPairings
    .map((pairing) => {
      const [left, right] = pairing.matchup;
      const leftSummary = getModelSummary(pairing, left);
      const rightSummary = getModelSummary(pairing, right);
      return `| ${summaryLabel(pairing)} | ${getAiPlayerModel(left).label} vs ${getAiPlayerModel(right).label} | ${formatPercent(
        leftSummary.winRate,
      )} | ${formatPercent(rightSummary.winRate)} | ${formatPercent(pairing.drawRate)} | ${formatAverage(
        pairing.averages.flipsPerTurn,
      )} |`;
    })
    .join("\n");
  const recommendationRows = report.diagnostics.balanceRecommendations
    .map(
      (recommendation) =>
        `| ${recommendation.severity} | ${recommendation.target} | ${recommendation.action} | ${recommendation.confidence} | ${recommendation.sampleSize} | ${recommendation.title} | ${recommendation.recommendation} |`,
    )
    .join("\n");
  const cardRows = report.diagnostics.cardAnalytics
    .slice(0, 18)
    .map(
      (card) =>
        `| ${card.name} | ${card.family} | ${card.role ?? "sans role"} | ${card.status} | ${card.played}/${card.offered} | ${formatPercent(
          card.selectionRate,
        )} | ${formatPercent(card.winRateWhenPlayed)} | ${formatAverage(card.averageFlips)} | ${formatAverage(
          card.averageNetDamage,
        )} | ${card.notes.join(" ")} |`,
    )
    .join("\n");
  const familyRows = report.diagnostics.familyAnalytics
    .map(
      (family) =>
        `| ${family.label} | ${family.status} | ${family.played}/${family.offered} | ${formatPercent(
          family.selectionRate,
        )} | ${formatPercent(family.winRateWhenPlayed)} | ${formatAverage(family.averageFlips)} | ${formatAverage(
          family.averageNetDamage,
        )} | ${family.topCards.map((card) => card.name).join(", ")} |`,
    )
    .join("\n");
  const comboRows = report.diagnostics.comboAnalytics
    .slice(0, 18)
    .map(
      (combo) =>
        `| ${combo.kind} | ${combo.label} | ${combo.count} | ${formatPercent(combo.winRate)} | ${formatAverage(
          combo.averageFlips,
        )} | ${formatAverage(combo.averageDamageDealt)} | ${combo.notes.join(" ")} |`,
    )
    .join("\n");

  return `# Rapport AI Lab

- ID: \`${report.reportId}\`
- Genere le: ${report.generatedAt}
- Matchs par pairing: ${report.config.matchesPerPairing}
- Runs aventure par modele: ${report.config.adventureRunsPerModel}
- Scenarios: ${report.config.scenarioIds.map((scenarioId) => getAiLabScenario(scenarioId).label).join(", ")}
- Seed: ${report.config.seed}

## Signaux

${insightLines}

## Recommandations design

| Severite | Cible | Action | Confiance | Sample | Signal | Proposition |
| --- | --- | --- | --- | ---: | --- | --- |
${recommendationRows}

## Echelle de joueurs

| Modele | Games | Wins | Losses | Draws | Win rate | Edge PV |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
${modelRows}

## Scenario actuel

| Scenario | Cartes depart | Statut | Premier joueur | Draw | Tours | Flips/tour | Tours morts | Notes |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
${deckRows}

## Runs aventure complets

| Modele | Runs | Boss | Victoire | Lieux | Deck final | Combat win | Rewards | Charmes | Upgrades | Removes | Fusions | Familles choisies | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
${adventureRows}

## Parcours recents

| Modele | Seed | Famille | Issue | Boss | Deck | Rewards | Charmes | Upgrade/Remove/Fusion | Route |
| --- | ---: | --- | --- | --- | --- | ---: | ---: | --- | --- |
${adventureRunRows}

## Cartes

| Carte | Famille | Role | Statut | Plays/offres | Selection | Win | Flips | Net PV | Notes |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
${cardRows}

## Familles

| Famille | Statut | Plays/offres | Selection | Win | Flips | Net PV | Cartes cle |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
${familyRows}

## Combos detectes

| Type | Combo | Occurrences | Win | Flips | Degats | Notes |
| --- | --- | ---: | ---: | ---: | ---: | --- |
${comboRows}

## Pairings de progression

| Scenario | Pairing | Gauche | Droite | Draw | Flips/tour |
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
