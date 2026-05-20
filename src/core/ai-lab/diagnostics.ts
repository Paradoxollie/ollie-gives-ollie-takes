import type {
  AiLabBalanceRecommendation,
  AiLabCardAnalysis,
  AiLabCardSnapshot,
  AiLabCardStatus,
  AiLabComboAnalysis,
  AiLabDesignDiagnostics,
  AiLabGroupAnalysis,
  AiLabMatchResult,
  AiLabMoveRecord,
  AiLabScenarioId,
  AiLabUsageByScenario,
  AiLabUsageByModel,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import type { PlayerId } from "@/core/types";

type MoveOutcome = "win" | "loss" | "draw";

interface OutcomeCounter {
  wins: number;
  losses: number;
  draws: number;
}

interface UseAccumulator extends OutcomeCounter {
  played: number;
}

interface ScenarioUseAccumulator extends UseAccumulator {
  scenarioLabel: string;
  startingDeckCardCount: number;
}

interface MetricAccumulator extends OutcomeCounter {
  offered: number;
  played: number;
  ignored: number;
  totalFlips: number;
  failedImpacts: number;
  totalImpacts: number;
  totalFlipMargin: number;
  flipMarginSamples: number;
  totalEffectAmount: number;
  totalDamageDealt: number;
  totalDamageTaken: number;
  lethalMoves: number;
  roundClosers: number;
  byModel: Map<AiPlayerModelId, UseAccumulator>;
  byScenario: Map<AiLabScenarioId, ScenarioUseAccumulator>;
  cardBreakdown: Map<string, { name: string; played: number; wins: number; losses: number; draws: number }>;
}

interface CardAccumulator extends MetricAccumulator {
  snapshot: AiLabCardSnapshot;
}

interface GroupAccumulator extends MetricAccumulator {
  id: string;
  label: string;
}

interface ComboAccumulator extends OutcomeCounter {
  id: string;
  kind: AiLabComboAnalysis["kind"];
  label: string;
  count: number;
  totalFlips: number;
  totalDamageDealt: number;
  totalEffectAmount: number;
}

const TOP_CARD_LIMIT = 36;
const TOP_GROUP_LIMIT = 24;
const TOP_COMBO_LIMIT = 24;
const TOP_RECOMMENDATION_LIMIT = 18;

const CARD_STATUS_PRIORITY: Record<AiLabCardStatus, number> = {
  overperformer: 0,
  ignored: 1,
  underperformer: 2,
  risky: 3,
  healthy: 4,
};

function safeRate(numerator: number, denominator: number): number {
  return denominator === 0 ? 0 : numerator / denominator;
}

function createMetricAccumulator(): MetricAccumulator {
  return {
    offered: 0,
    played: 0,
    ignored: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    totalFlips: 0,
    failedImpacts: 0,
    totalImpacts: 0,
    totalFlipMargin: 0,
    flipMarginSamples: 0,
    totalEffectAmount: 0,
    totalDamageDealt: 0,
    totalDamageTaken: 0,
    lethalMoves: 0,
    roundClosers: 0,
    byModel: new Map(),
    byScenario: new Map(),
    cardBreakdown: new Map(),
  };
}

function addOutcome(counter: OutcomeCounter, outcome: MoveOutcome): void {
  if (outcome === "win") {
    counter.wins += 1;
    return;
  }

  if (outcome === "loss") {
    counter.losses += 1;
    return;
  }

  counter.draws += 1;
}

function getMoveOutcome(result: AiLabMatchResult, move: AiLabMoveRecord): MoveOutcome {
  if (result.winnerSeat === "draw") {
    return "draw";
  }

  return result.winnerSeat === move.playerId ? "win" : "loss";
}

function getOrCreateUse<Key extends string>(map: Map<Key, UseAccumulator>, key: Key): UseAccumulator {
  const existing = map.get(key);
  if (existing) {
    return existing;
  }

  const next = { played: 0, wins: 0, losses: 0, draws: 0 };
  map.set(key, next);
  return next;
}

function getOrCreateScenarioUse(
  map: Map<AiLabScenarioId, ScenarioUseAccumulator>,
  result: AiLabMatchResult,
): ScenarioUseAccumulator {
  const existing = map.get(result.scenarioId);
  if (existing) {
    return existing;
  }

  const next = {
    played: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    scenarioLabel: result.scenarioLabel,
    startingDeckCardCount: result.startingDeckCardCount,
  };
  map.set(result.scenarioId, next);
  return next;
}

function getOrCreateCard(cards: Map<string, CardAccumulator>, snapshot: AiLabCardSnapshot): CardAccumulator {
  const existing = cards.get(snapshot.cardId);
  if (existing) {
    return existing;
  }

  const next = { snapshot, ...createMetricAccumulator() };
  cards.set(snapshot.cardId, next);
  return next;
}

function getOrCreateGroup(groups: Map<string, GroupAccumulator>, id: string, label: string): GroupAccumulator {
  const existing = groups.get(id);
  if (existing) {
    return existing;
  }

  const next = { id, label, ...createMetricAccumulator() };
  groups.set(id, next);
  return next;
}

function roleId(snapshot: AiLabCardSnapshot): string {
  return snapshot.role ?? "sans-role";
}

function roleLabel(snapshot: AiLabCardSnapshot): string {
  return snapshot.role ?? "sans role";
}

function recordOffer(
  snapshot: AiLabCardSnapshot,
  cards: Map<string, CardAccumulator>,
  families: Map<string, GroupAccumulator>,
  roles: Map<string, GroupAccumulator>,
  rarities: Map<string, GroupAccumulator>,
): void {
  getOrCreateCard(cards, snapshot).offered += 1;
  getOrCreateGroup(families, snapshot.family, snapshot.family).offered += 1;
  getOrCreateGroup(roles, roleId(snapshot), roleLabel(snapshot)).offered += 1;
  getOrCreateGroup(rarities, snapshot.rarity, snapshot.rarity).offered += 1;
}

function recordIgnored(
  snapshot: AiLabCardSnapshot,
  cards: Map<string, CardAccumulator>,
  families: Map<string, GroupAccumulator>,
  roles: Map<string, GroupAccumulator>,
  rarities: Map<string, GroupAccumulator>,
): void {
  getOrCreateCard(cards, snapshot).ignored += 1;
  getOrCreateGroup(families, snapshot.family, snapshot.family).ignored += 1;
  getOrCreateGroup(roles, roleId(snapshot), roleLabel(snapshot)).ignored += 1;
  getOrCreateGroup(rarities, snapshot.rarity, snapshot.rarity).ignored += 1;
}

function recordCardBreakdown(accumulator: MetricAccumulator, card: AiLabCardSnapshot, outcome: MoveOutcome): void {
  const existing = accumulator.cardBreakdown.get(card.cardId) ?? {
    name: card.name,
    played: 0,
    wins: 0,
    losses: 0,
    draws: 0,
  };
  existing.played += 1;
  addOutcome(existing, outcome);
  accumulator.cardBreakdown.set(card.cardId, existing);
}

function recordPlayedMove(
  accumulator: MetricAccumulator,
  result: AiLabMatchResult,
  move: AiLabMoveRecord,
  outcome: MoveOutcome,
): void {
  accumulator.played += 1;
  addOutcome(accumulator, outcome);
  accumulator.totalFlips += move.flippedCount;
  accumulator.failedImpacts += move.failedImpactCount;
  accumulator.totalImpacts += move.flippedCount + move.failedImpactCount;
  accumulator.totalFlipMargin += move.flipMargins.reduce((sum, margin) => sum + margin, 0);
  accumulator.flipMarginSamples += move.flipMargins.length;
  accumulator.totalEffectAmount += move.effectAmountTotal;
  accumulator.totalDamageDealt += move.damageDealt;
  accumulator.totalDamageTaken += move.damageTaken;
  accumulator.lethalMoves += move.lethal ? 1 : 0;
  accumulator.roundClosers += move.roundEnded ? 1 : 0;
  recordCardBreakdown(accumulator, move.card, outcome);

  const modelUse = getOrCreateUse(accumulator.byModel, move.modelId);
  modelUse.played += 1;
  addOutcome(modelUse, outcome);

  const scenarioUse = getOrCreateScenarioUse(accumulator.byScenario, result);
  scenarioUse.played += 1;
  addOutcome(scenarioUse, outcome);
}

function recordPlayed(
  result: AiLabMatchResult,
  move: AiLabMoveRecord,
  outcome: MoveOutcome,
  cards: Map<string, CardAccumulator>,
  families: Map<string, GroupAccumulator>,
  roles: Map<string, GroupAccumulator>,
  rarities: Map<string, GroupAccumulator>,
): void {
  recordPlayedMove(getOrCreateCard(cards, move.card), result, move, outcome);
  recordPlayedMove(getOrCreateGroup(families, move.card.family, move.card.family), result, move, outcome);
  recordPlayedMove(getOrCreateGroup(roles, roleId(move.card), roleLabel(move.card)), result, move, outcome);
  recordPlayedMove(getOrCreateGroup(rarities, move.card.rarity, move.card.rarity), result, move, outcome);
}

function classifyStatus(stats: {
  offered: number;
  played: number;
  selectionRate: number;
  winRateWhenPlayed: number;
  averageFlips: number;
  averageNetDamage: number;
  averageEffectAmount: number;
}): { status: AiLabCardStatus; notes: string[] } {
  if (stats.played >= 6 && stats.winRateWhenPlayed >= 0.68 && (stats.averageFlips >= 0.45 || stats.averageNetDamage >= 1.25)) {
    return { status: "overperformer", notes: ["Surperforme en victoire et impact immediat."] };
  }

  if (stats.offered >= 10 && stats.selectionRate <= 0.18) {
    return { status: "ignored", notes: ["Souvent propose, rarement choisi."] };
  }

  if (stats.played >= 6 && stats.winRateWhenPlayed <= 0.35) {
    return { status: "underperformer", notes: ["Perd trop souvent quand il est joue."] };
  }

  if (stats.played >= 6 && stats.averageNetDamage <= -1.25) {
    return { status: "risky", notes: ["Coute plus de PV qu'il n'en gagne."] };
  }

  if (stats.played >= 6 && stats.averageFlips < 0.18 && stats.averageNetDamage <= 0.15 && stats.averageEffectAmount < 0.75) {
    return { status: "underperformer", notes: ["Impact tactique faible."] };
  }

  return { status: "healthy", notes: ["Pas de derive forte sur cet echantillon."] };
}

function modelUsageRows(byModel: MetricAccumulator["byModel"]): AiLabUsageByModel[] {
  return Array.from(byModel.entries())
    .map(([modelId, usage]) => ({
      modelId,
      played: usage.played,
      winRate: safeRate(usage.wins, usage.played),
    }))
    .sort((left, right) => right.played - left.played || right.winRate - left.winRate);
}

function scenarioUsageRows(byScenario: MetricAccumulator["byScenario"]): AiLabUsageByScenario[] {
  return Array.from(byScenario.entries())
    .map(([scenarioId, usage]) => ({
      scenarioId,
      scenarioLabel: usage.scenarioLabel,
      startingDeckCardCount: usage.startingDeckCardCount,
      played: usage.played,
      winRate: safeRate(usage.wins, usage.played),
    }))
    .sort((left, right) => right.played - left.played || right.winRate - left.winRate);
}

function topCardRows(accumulator: MetricAccumulator): AiLabGroupAnalysis["topCards"] {
  return Array.from(accumulator.cardBreakdown.entries())
    .map(([cardId, entry]) => ({
      cardId,
      name: entry.name,
      played: entry.played,
      winRateWhenPlayed: safeRate(entry.wins, entry.played),
    }))
    .sort((left, right) => right.played - left.played || right.winRateWhenPlayed - left.winRateWhenPlayed)
    .slice(0, 5);
}

function finalizeCard(accumulator: CardAccumulator): AiLabCardAnalysis {
  const selectionRate = safeRate(accumulator.played, accumulator.offered);
  const winRateWhenPlayed = safeRate(accumulator.wins, accumulator.played);
  const averageFlips = safeRate(accumulator.totalFlips, accumulator.played);
  const averageDamageDealt = safeRate(accumulator.totalDamageDealt, accumulator.played);
  const averageDamageTaken = safeRate(accumulator.totalDamageTaken, accumulator.played);
  const averageNetDamage = averageDamageDealt - averageDamageTaken;
  const status = classifyStatus({
    offered: accumulator.offered,
    played: accumulator.played,
    selectionRate,
    winRateWhenPlayed,
    averageFlips,
    averageNetDamage,
    averageEffectAmount: safeRate(accumulator.totalEffectAmount, accumulator.played),
  });

  return {
    cardId: accumulator.snapshot.cardId,
    name: accumulator.snapshot.name,
    family: accumulator.snapshot.family,
    rarity: accumulator.snapshot.rarity,
    role: accumulator.snapshot.role,
    sourceType: accumulator.snapshot.sourceType,
    sideTotal: accumulator.snapshot.sideTotal,
    maxSide: accumulator.snapshot.maxSide,
    minSide: accumulator.snapshot.minSide,
    effectKinds: [...accumulator.snapshot.effectKinds],
    buildTags: [...accumulator.snapshot.buildTags],
    preferredPositions: [...accumulator.snapshot.preferredPositions],
    offered: accumulator.offered,
    played: accumulator.played,
    ignored: accumulator.ignored,
    selectionRate,
    wins: accumulator.wins,
    losses: accumulator.losses,
    draws: accumulator.draws,
    winRateWhenPlayed,
    averageFlips,
    failedImpactRate: safeRate(accumulator.failedImpacts, accumulator.totalImpacts),
    averageFlipMargin: safeRate(accumulator.totalFlipMargin, accumulator.flipMarginSamples),
    averageEffectAmount: safeRate(accumulator.totalEffectAmount, accumulator.played),
    averageDamageDealt,
    averageDamageTaken,
    averageNetDamage,
    lethalMoves: accumulator.lethalMoves,
    roundClosers: accumulator.roundClosers,
    byModel: modelUsageRows(accumulator.byModel),
    byScenario: scenarioUsageRows(accumulator.byScenario),
    status: status.status,
    notes: status.notes,
  };
}

function finalizeGroup(accumulator: GroupAccumulator): AiLabGroupAnalysis {
  const selectionRate = safeRate(accumulator.played, accumulator.offered);
  const winRateWhenPlayed = safeRate(accumulator.wins, accumulator.played);
  const averageFlips = safeRate(accumulator.totalFlips, accumulator.played);
  const averageDamageDealt = safeRate(accumulator.totalDamageDealt, accumulator.played);
  const averageNetDamage = averageDamageDealt - safeRate(accumulator.totalDamageTaken, accumulator.played);
  const status = classifyStatus({
    offered: accumulator.offered,
    played: accumulator.played,
    selectionRate,
    winRateWhenPlayed,
    averageFlips,
    averageNetDamage,
    averageEffectAmount: safeRate(accumulator.totalEffectAmount, accumulator.played),
  });

  return {
    id: accumulator.id,
    label: accumulator.label,
    offered: accumulator.offered,
    played: accumulator.played,
    ignored: accumulator.ignored,
    selectionRate,
    wins: accumulator.wins,
    losses: accumulator.losses,
    draws: accumulator.draws,
    winRateWhenPlayed,
    averageFlips,
    averageDamageDealt,
    averageNetDamage,
    topCards: topCardRows(accumulator),
    status: status.status,
    notes: status.notes,
  };
}

function getOrCreateCombo(
  combos: Map<string, ComboAccumulator>,
  id: string,
  kind: AiLabComboAnalysis["kind"],
  label: string,
): ComboAccumulator {
  const existing = combos.get(id);
  if (existing) {
    return existing;
  }

  const next: ComboAccumulator = {
    id,
    kind,
    label,
    count: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    totalFlips: 0,
    totalDamageDealt: 0,
    totalEffectAmount: 0,
  };
  combos.set(id, next);
  return next;
}

function recordCombo(combo: ComboAccumulator, move: AiLabMoveRecord, outcome: MoveOutcome, effectAmount = 0): void {
  combo.count += 1;
  addOutcome(combo, outcome);
  combo.totalFlips += move.flippedCount;
  combo.totalDamageDealt += move.damageDealt;
  combo.totalEffectAmount += effectAmount;
}

function comboNotes(combo: ComboAccumulator): string[] {
  const notes: string[] = [];
  if (combo.count >= 4 && safeRate(combo.wins, combo.count) >= 0.7) {
    notes.push("Combo gagnant frequent.");
  }

  if (combo.count >= 4 && safeRate(combo.totalFlips, combo.count) >= 0.6) {
    notes.push("Produit beaucoup de flips.");
  }

  if (combo.count >= 4 && safeRate(combo.totalDamageDealt, combo.count) >= 1.5) {
    notes.push("Convertit bien en degats.");
  }

  return notes.length > 0 ? notes : ["Signal descriptif a confirmer."];
}

function finalizeCombos(combos: Map<string, ComboAccumulator>): AiLabComboAnalysis[] {
  return Array.from(combos.values())
    .map((combo) => ({
      id: combo.id,
      kind: combo.kind,
      label: combo.label,
      count: combo.count,
      wins: combo.wins,
      losses: combo.losses,
      draws: combo.draws,
      winRate: safeRate(combo.wins, combo.count),
      averageFlips: safeRate(combo.totalFlips, combo.count),
      averageDamageDealt: safeRate(combo.totalDamageDealt, combo.count),
      averageEffectAmount: safeRate(combo.totalEffectAmount, combo.count),
      notes: comboNotes(combo),
    }))
    .sort(
      (left, right) =>
        right.count - left.count ||
        right.winRate - left.winRate ||
        right.averageFlips - left.averageFlips ||
        left.label.localeCompare(right.label),
    )
    .slice(0, TOP_COMBO_LIMIT);
}

function recommendationConfidence(sampleSize: number): "low" | "medium" | "high" {
  if (sampleSize >= 24) {
    return "high";
  }

  if (sampleSize >= 10) {
    return "medium";
  }

  return "low";
}

function recommendationRank(recommendation: AiLabBalanceRecommendation): number {
  const severity = recommendation.severity === "problem" ? 0 : recommendation.severity === "watch" ? 1 : 2;
  const confidence = recommendation.confidence === "high" ? 0 : recommendation.confidence === "medium" ? 1 : 2;
  const action = recommendation.action === "nerf" ? 0 : recommendation.action === "buff" ? 1 : 2;
  return severity * 100 + confidence * 10 + action;
}

function createCardRecommendation(card: AiLabCardAnalysis): AiLabBalanceRecommendation | null {
  const base = {
    target: "card" as const,
    confidence: recommendationConfidence(Math.max(card.played, card.offered)),
    sampleSize: Math.max(card.played, card.offered),
  };

  if (card.status === "overperformer") {
    return {
      ...base,
      id: `card-${card.cardId}-nerf`,
      severity: card.played >= 10 ? "problem" : "watch",
      action: "nerf",
      title: `${card.name} tire trop de valeur`,
      detail: `${card.played} plays, ${Math.round(card.winRateWhenPlayed * 100)}% win, ${card.averageFlips.toFixed(
        2,
      )} flips/play, net PV ${card.averageNetDamage.toFixed(2)}.`,
      recommendation: "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees.",
    };
  }

  if (card.status === "ignored") {
    const isLosingWhenPlayed = card.played >= 10 && (card.winRateWhenPlayed <= 0.46 || card.averageNetDamage <= -0.4);
    return {
      ...base,
      id: `card-${card.cardId}-ignored`,
      severity: card.offered >= 18 && isLosingWhenPlayed ? "problem" : "watch",
      action: "buff",
      title: `${card.name} est ignoree par les bots`,
      detail: `${card.offered} offres, ${Math.round(card.selectionRate * 100)}% selection, ${Math.round(
        card.winRateWhenPlayed * 100,
      )}% win quand jouee, role ${card.role ?? "sans role"}.`,
      recommendation: isLosingWhenPlayed
        ? "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
        : "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee.",
    };
  }

  if (card.status === "underperformer" || card.status === "risky") {
    return {
      ...base,
      id: `card-${card.cardId}-buff`,
      severity: card.played >= 10 ? "problem" : "watch",
      action: "buff",
      title: `${card.name} sous-performe`,
      detail: `${card.played} plays, ${Math.round(card.winRateWhenPlayed * 100)}% win, net PV ${card.averageNetDamage.toFixed(
        2,
      )}.`,
      recommendation: "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette.",
    };
  }

  return null;
}

function createGroupRecommendation(
  group: AiLabGroupAnalysis,
  target: AiLabBalanceRecommendation["target"],
): AiLabBalanceRecommendation | null {
  const base = {
    target,
    confidence: recommendationConfidence(Math.max(group.played, group.offered)),
    sampleSize: Math.max(group.played, group.offered),
  };

  if (group.status === "overperformer") {
    return {
      ...base,
      id: `${target}-${group.id}-nerf`,
      severity: group.played >= 14 ? "problem" : "watch",
      action: "watch",
      title: `${group.label} domine l'echantillon`,
      detail: `${group.played} plays, ${Math.round(group.winRateWhenPlayed * 100)}% win, net PV ${group.averageNetDamage.toFixed(2)}.`,
      recommendation: "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role.",
    };
  }

  if (group.status === "ignored" || group.status === "underperformer") {
    return {
      ...base,
      id: `${target}-${group.id}-buff`,
      severity: group.played >= 14 || group.offered >= 20 ? "watch" : "info",
      action: "verify",
      title: `${group.label} manque d'attraction`,
      detail: `${group.offered} offres, ${Math.round(group.selectionRate * 100)}% selection, ${Math.round(
        group.winRateWhenPlayed * 100,
      )}% win.`,
      recommendation: "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible.",
    };
  }

  return null;
}

function createComboRecommendation(combo: AiLabComboAnalysis): AiLabBalanceRecommendation | null {
  if (combo.count < 4 || (combo.winRate < 0.72 && combo.averageFlips < 0.75 && combo.averageDamageDealt < 1.75)) {
    return null;
  }

  return {
    id: `combo-${combo.id}`,
    severity: combo.kind === "effect" && combo.winRate >= 0.8 && combo.count >= 8 ? "problem" : "watch",
    target: "combo",
    action: "verify",
    confidence: recommendationConfidence(combo.count),
    sampleSize: combo.count,
    title: `${combo.label} ressort comme combo`,
    detail: `${combo.count} occurrences, ${Math.round(combo.winRate * 100)}% win, ${combo.averageFlips.toFixed(
      2,
    )} flips, ${combo.averageDamageDealt.toFixed(2)} degats.`,
    recommendation: "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff.",
  };
}

function createRecommendations(
  cards: AiLabCardAnalysis[],
  families: AiLabGroupAnalysis[],
  roles: AiLabGroupAnalysis[],
  rarities: AiLabGroupAnalysis[],
  combos: AiLabComboAnalysis[],
): AiLabBalanceRecommendation[] {
  return [
    ...cards.map(createCardRecommendation),
    ...families.map((group) => createGroupRecommendation(group, "family")),
    ...roles.map((group) => createGroupRecommendation(group, "role")),
    ...rarities.map((group) => createGroupRecommendation(group, "rarity")),
    ...combos.map(createComboRecommendation),
  ]
    .filter((recommendation): recommendation is AiLabBalanceRecommendation => recommendation !== null)
    .sort((left, right) => recommendationRank(left) - recommendationRank(right) || right.sampleSize - left.sampleSize)
    .slice(0, TOP_RECOMMENDATION_LIMIT);
}

function recordCombosForMatch(result: AiLabMatchResult, combos: Map<string, ComboAccumulator>): void {
  const lastMoveBySeat = new Map<PlayerId, AiLabMoveRecord>();

  for (const move of result.moveHistory) {
    const outcome = getMoveOutcome(result, move);
    const previousMove = lastMoveBySeat.get(move.playerId);
    if (previousMove && previousMove.round === move.round) {
      recordCombo(
        getOrCreateCombo(
          combos,
          `family-chain:${previousMove.card.family}->${move.card.family}`,
          "family-chain",
          `${previousMove.card.family} -> ${move.card.family}`,
        ),
        move,
        outcome,
      );
    }
    lastMoveBySeat.set(move.playerId, move);

    for (const family of move.adjacentFriendlyFamilies) {
      recordCombo(
        getOrCreateCombo(
          combos,
          `friendly-adjacent:${family}+${move.card.family}`,
          "friendly-adjacent",
          `${family} allie + ${move.card.family}`,
        ),
        move,
        outcome,
      );
    }

    for (const effect of move.effectEvents) {
      recordCombo(
        getOrCreateCombo(
          combos,
          `effect:${move.card.cardId}:${effect.kind}`,
          "effect",
          `${move.card.name} -> ${effect.kind}`,
        ),
        move,
        outcome,
        effect.amount,
      );
    }
  }
}

/**
 * Builds card, family, role, rarity, and combo diagnostics from raw AI-lab match traces.
 */
export function summarizeAiLabDiagnostics(results: AiLabMatchResult[]): AiLabDesignDiagnostics {
  const cards = new Map<string, CardAccumulator>();
  const families = new Map<string, GroupAccumulator>();
  const roles = new Map<string, GroupAccumulator>();
  const rarities = new Map<string, GroupAccumulator>();
  const combos = new Map<string, ComboAccumulator>();

  for (const result of results) {
    recordCombosForMatch(result, combos);

    for (const move of result.moveHistory) {
      const outcome = getMoveOutcome(result, move);
      for (const snapshot of move.offeredCards) {
        recordOffer(snapshot, cards, families, roles, rarities);
        if (snapshot.instanceId !== move.card.instanceId) {
          recordIgnored(snapshot, cards, families, roles, rarities);
        }
      }
      recordPlayed(result, move, outcome, cards, families, roles, rarities);
    }
  }

  const cardAnalytics = Array.from(cards.values())
    .map(finalizeCard)
    .sort(
      (left, right) =>
        CARD_STATUS_PRIORITY[left.status] - CARD_STATUS_PRIORITY[right.status] ||
        right.played - left.played ||
        right.winRateWhenPlayed - left.winRateWhenPlayed ||
        left.name.localeCompare(right.name),
    )
    .slice(0, TOP_CARD_LIMIT);
  const familyAnalytics = Array.from(families.values())
    .map(finalizeGroup)
    .sort((left, right) => right.played - left.played || right.winRateWhenPlayed - left.winRateWhenPlayed)
    .slice(0, TOP_GROUP_LIMIT);
  const roleAnalytics = Array.from(roles.values())
    .map(finalizeGroup)
    .sort((left, right) => right.played - left.played || right.winRateWhenPlayed - left.winRateWhenPlayed)
    .slice(0, TOP_GROUP_LIMIT);
  const rarityAnalytics = Array.from(rarities.values())
    .map(finalizeGroup)
    .sort((left, right) => right.played - left.played || right.winRateWhenPlayed - left.winRateWhenPlayed)
    .slice(0, TOP_GROUP_LIMIT);
  const comboAnalytics = finalizeCombos(combos);

  return {
    cardAnalytics,
    familyAnalytics,
    roleAnalytics,
    rarityAnalytics,
    comboAnalytics,
    balanceRecommendations: createRecommendations(
      cardAnalytics,
      familyAnalytics,
      roleAnalytics,
      rarityAnalytics,
      comboAnalytics,
    ),
  };
}
