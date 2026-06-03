import type {
  AiLabReport,
  AiLabTrendSignal,
  AiLabTrendSnapshot,
  AiLabTrendSummary,
} from "@/core/ai-lab/types";
import type { CardFamily } from "@/core/types";

const DEFAULT_TREND_WINDOW_SIZE = 12;
const MIN_STABLE_REPORTS = 4;

function safeRate(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

function average(values: number[]): number {
  return safeRate(values.reduce((sum, value) => sum + value, 0), values.length);
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function pairingKey(matchup: [string, string]): string {
  return `${matchup[0]}-vs-${matchup[1]}`;
}

/**
 * Creates a compact snapshot that can be retained without storing every raw match trace.
 */
export function createAiLabTrendSnapshot(report: AiLabReport): AiLabTrendSnapshot {
  const deck = report.deckSummaries[0];

  return {
    reportId: report.reportId,
    generatedAt: report.generatedAt,
    rulesetVersion: report.config.rulesetVersion ?? "legacy",
    startingPlayerWinRate: deck?.startingPlayerWinRate ?? 0,
    deckStatus: deck?.status ?? "healthy",
    higherModelWinRates: Object.fromEntries(
      report.ladderPairings.map((pairing) => {
        const higherModelId = pairing.matchup[1];
        const higherSummary = pairing.modelSummaries.find((summary) => summary.modelId === higherModelId);
        return [pairingKey(pairing.matchup), higherSummary?.winRate ?? 0];
      }),
    ),
    familyWinRates: Object.fromEntries(
      report.diagnostics.familyAnalytics.map((family) => [family.id, family.winRateWhenPlayed]),
    ) as Partial<Record<CardFamily, number>>,
    starterFamilyMatchupWinRates: Object.fromEntries(
      (report.starterFamilyMatchups ?? []).map((matchup) => [matchup.id, matchup.leftWinRate]),
    ),
    adventureBossReachRates: Object.fromEntries(
      report.adventureSummaries.map((summary) => [summary.modelId, summary.bossReachRate]),
    ),
    cardSignals: report.diagnostics.cardAnalytics
      .filter((card) => card.status !== "healthy")
      .map((card) => ({
        cardId: card.cardId,
        name: card.name,
        status: card.status,
        winRateWhenPlayed: card.winRateWhenPlayed,
      })),
  };
}

function stableOccurrenceCount(totalReports: number): number {
  return Math.max(3, Math.ceil(totalReports * 0.5));
}

function createInitiativeSignal(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal | null {
  const rates = snapshots.map((snapshot) => snapshot.startingPlayerWinRate);
  const averageRate = average(rates);
  const isSkewed = averageRate <= 0.42 || averageRate >= 0.58;
  if (!isSkewed) {
    return null;
  }

  const occurrences = rates.filter((rate) => rate <= 0.42 || rate >= 0.58).length;
  if (occurrences < stableOccurrenceCount(snapshots.length)) {
    return null;
  }

  return {
    id: "trend-initiative",
    kind: "initiative",
    severity: averageRate <= 0.38 || averageRate >= 0.62 ? "problem" : "watch",
    title: "Le biais d'ouverture persiste sur plusieurs rapports",
    detail: `${formatPercent(averageRate)} de victoires du premier joueur en moyenne sur ${snapshots.length} rapports.`,
    recommendation: "Ajuster l'ouverture uniquement si cette tendance reste stable apres les prochaines simulations.",
    reports: snapshots.length,
    occurrences,
    averageRate,
  };
}

function createSkillSignals(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal[] {
  const keys = new Set(snapshots.flatMap((snapshot) => Object.keys(snapshot.higherModelWinRates)));
  return [...keys].flatMap((key) => {
    const rates = snapshots
      .map((snapshot) => snapshot.higherModelWinRates[key])
      .filter((rate): rate is number => typeof rate === "number");
    const averageRate = average(rates);
    const occurrences = rates.filter((rate) => rate < 0.5).length;
    if (rates.length < MIN_STABLE_REPORTS || averageRate >= 0.48 || occurrences < stableOccurrenceCount(rates.length)) {
      return [];
    }

    return [{
      id: `trend-skill-${key}`,
      kind: "skill" as const,
      severity: averageRate < 0.44 ? "problem" as const : "watch" as const,
      title: `${key.replace("-vs-", " vs ")} ne respecte pas la progression`,
      detail: `Le modele superieur gagne ${formatPercent(averageRate)} en moyenne sur ${rates.length} rapports.`,
      recommendation: "Bloquer les promotions tant que le modele superieur ne depasse pas regulierement le niveau precedent.",
      reports: rates.length,
      occurrences,
      averageRate,
    }];
  });
}

function createFamilySignals(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal[] {
  const families = new Set(snapshots.flatMap((snapshot) => Object.keys(snapshot.familyWinRates)));
  return [...families].flatMap((family) => {
    const rates = snapshots
      .map((snapshot) => snapshot.familyWinRates[family as CardFamily])
      .filter((rate): rate is number => typeof rate === "number");
    const averageRate = average(rates);
    const isWeak = averageRate <= 0.45;
    const isStrong = averageRate >= 0.62;
    if (rates.length < MIN_STABLE_REPORTS || (!isWeak && !isStrong)) {
      return [];
    }

    const occurrences = rates.filter((rate) => (isWeak ? rate <= 0.45 : rate >= 0.62)).length;
    if (occurrences < stableOccurrenceCount(rates.length)) {
      return [];
    }

    return [{
      id: `trend-family-${family}`,
      kind: "family" as const,
      severity: averageRate <= 0.42 || averageRate >= 0.66 ? "problem" as const : "watch" as const,
      title: `${family} ${isWeak ? "reste trop faible" : "reste trop forte"}`,
      detail: `${formatPercent(averageRate)} de victoire moyenne quand ses cartes sont jouees sur ${rates.length} rapports.`,
      recommendation: "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
      reports: rates.length,
      occurrences,
      averageRate,
    }];
  });
}

function createStarterMatchupSignals(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal[] {
  const matchupIds = new Set(
    snapshots.flatMap((snapshot) => Object.keys(snapshot.starterFamilyMatchupWinRates ?? {})),
  );

  return [...matchupIds].flatMap((matchupId) => {
    const rates = snapshots
      .map((snapshot) => snapshot.starterFamilyMatchupWinRates?.[matchupId])
      .filter((rate): rate is number => typeof rate === "number");
    const averageRate = average(rates);
    const isSkewed = averageRate <= 0.35 || averageRate >= 0.65;
    if (rates.length < MIN_STABLE_REPORTS || !isSkewed) {
      return [];
    }

    const occurrences = rates.filter((rate) => rate <= 0.35 || rate >= 0.65).length;
    if (occurrences < stableOccurrenceCount(rates.length)) {
      return [];
    }

    return [{
      id: `trend-starter-matchup-${matchupId}`,
      kind: "family" as const,
      severity: averageRate <= 0.28 || averageRate >= 0.72 ? "problem" as const : "watch" as const,
      title: `${matchupId.replace("-vs-", " vs ")} reste desequilibre`,
      detail: `La famille de gauche gagne ${formatPercent(averageRate)} en moyenne sur ${rates.length} rapports.`,
      recommendation: "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
      reports: rates.length,
      occurrences,
      averageRate,
    }];
  });
}

function createCardSignals(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal[] {
  const cards = new Map<string, { name: string; statuses: string[]; rates: number[] }>();
  for (const snapshot of snapshots) {
    for (const card of snapshot.cardSignals) {
      const entry = cards.get(card.cardId) ?? { name: card.name, statuses: [], rates: [] };
      entry.statuses.push(card.status);
      entry.rates.push(card.winRateWhenPlayed);
      cards.set(card.cardId, entry);
    }
  }

  return [...cards.entries()].flatMap(([cardId, entry]) => {
    const occurrences = entry.statuses.length;
    if (occurrences < stableOccurrenceCount(snapshots.length)) {
      return [];
    }

    const underCount = entry.statuses.filter((status) => status === "underperformer" || status === "risky").length;
    const overCount = entry.statuses.filter((status) => status === "overperformer").length;
    const ignoredCount = entry.statuses.filter((status) => status === "ignored").length;
    const dominantStatus =
      underCount >= overCount && underCount >= ignoredCount
        ? "trop faible"
        : overCount >= ignoredCount
          ? "trop forte"
          : "trop souvent ignoree";
    const averageRate = average(entry.rates);

    return [{
      id: `trend-card-${cardId}`,
      kind: "card" as const,
      severity: occurrences >= Math.ceil(snapshots.length * 0.66) ? "problem" as const : "watch" as const,
      title: `${entry.name} reste ${dominantStatus}`,
      detail: `Signal present dans ${occurrences}/${snapshots.length} rapports, avec ${formatPercent(averageRate)} de victoire moyenne.`,
      recommendation: "Faire un ajustement cible et mesurer sa disparition sur plusieurs rapports.",
      reports: snapshots.length,
      occurrences,
      averageRate,
    }];
  });
}

function createAdventureSignals(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal[] {
  const rates = snapshots
    .map((snapshot) => snapshot.adventureBossReachRates.champion)
    .filter((rate): rate is number => typeof rate === "number");
  const averageRate = average(rates);
  const occurrences = rates.filter((rate) => rate < 0.45).length;
  if (rates.length < MIN_STABLE_REPORTS || averageRate >= 0.45 || occurrences < stableOccurrenceCount(rates.length)) {
    return [];
  }

  return [{
    id: "trend-adventure-champion-boss",
    kind: "adventure",
    severity: averageRate < 0.3 ? "problem" : "watch",
    title: "Le Champion atteint trop rarement le boss",
    detail: `${formatPercent(averageRate)} de boss atteints en moyenne sur ${rates.length} rapports.`,
    recommendation: "Analyser les routes, recompenses et sites avant de baisser la difficulte des combats.",
    reports: rates.length,
    occurrences,
    averageRate,
  }];
}

/**
 * Builds stable signals from a rolling series of compact AI-lab snapshots.
 */
export function createAiLabTrendSignals(snapshots: AiLabTrendSnapshot[]): AiLabTrendSignal[] {
  if (snapshots.length < MIN_STABLE_REPORTS) {
    return [];
  }

  return [
    createInitiativeSignal(snapshots),
    ...createSkillSignals(snapshots),
    ...createFamilySignals(snapshots),
    ...createStarterMatchupSignals(snapshots),
    ...createCardSignals(snapshots),
    ...createAdventureSignals(snapshots),
  ]
    .filter((signal): signal is AiLabTrendSignal => signal !== null)
    .sort((left, right) => {
      const severity = { problem: 0, watch: 1, info: 2 };
      return severity[left.severity] - severity[right.severity] || right.occurrences - left.occurrences;
    });
}

/**
 * Attaches a compact rolling history to a new report.
 */
export function attachAiLabTrend(
  report: AiLabReport,
  previousReports: AiLabReport[] = [],
  windowSize = DEFAULT_TREND_WINDOW_SIZE,
): AiLabReport {
  const previousSnapshots = previousReports.flatMap((previous) =>
    previous.trend?.snapshots.length ? previous.trend.snapshots : [createAiLabTrendSnapshot(previous)],
  );
  const currentSnapshot = createAiLabTrendSnapshot(report);
  const snapshots = [...previousSnapshots.filter((snapshot) => snapshot.rulesetVersion === currentSnapshot.rulesetVersion), currentSnapshot]
    .filter((snapshot, index, all) => all.findIndex((entry) => entry.reportId === snapshot.reportId) === index)
    .slice(-windowSize);
  const trend: AiLabTrendSummary = {
    windowSize,
    snapshots,
    signals: createAiLabTrendSignals(snapshots),
  };

  return {
    ...report,
    trend,
  };
}
