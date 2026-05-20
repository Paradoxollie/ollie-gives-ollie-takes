import type { BotId } from "@/core/bots";
import type {
  AdventureNodeType,
  AdventureOutcome,
  BattleResult,
  BoardPositionTag,
  CardEffectKind,
  CardFamily,
  CardRarity,
  CardRole,
  CardSourceType,
  LuckyCharmId,
  MatchOutcome,
  PlayerId,
} from "@/core/types";

export const AI_PLAYER_MODEL_IDS = ["beginner", "opportunist", "regular", "expert", "champion"] as const;
export const AI_LAB_SCENARIO_IDS = ["current-family-start"] as const;

export type AiPlayerModelId = (typeof AI_PLAYER_MODEL_IDS)[number];
export type AiLabScenarioId = (typeof AI_LAB_SCENARIO_IDS)[number];

export type AiLabInsightSeverity = "info" | "watch" | "problem";
export type AiLabPositionKind = "corner" | "edge" | "center" | "inner";
export type AiLabCardStatus = "healthy" | "overperformer" | "underperformer" | "ignored" | "risky";
export type AiLabRecommendationAction = "nerf" | "buff" | "watch" | "verify";
export type AiLabRecommendationTarget = "card" | "family" | "role" | "rarity" | "combo";
export type AiLabRecommendationConfidence = "low" | "medium" | "high";

export interface AiPlayerModel {
  id: AiPlayerModelId;
  label: string;
  skillLabel: string;
  rank: number;
  botId: BotId;
  searchDepth: number;
  beamWidth: number;
  description: string;
}

export interface AiLabRunConfig {
  matchesPerPairing: number;
  adventureRunsPerModel: number;
  seed: number;
  scenarioIds: AiLabScenarioId[];
  modelIds: AiPlayerModelId[];
}

export interface AiLabCardSnapshot {
  cardId: string;
  instanceId: string;
  archetypeId: string;
  name: string;
  family: CardFamily;
  rarity: CardRarity;
  role?: CardRole;
  sourceType: CardSourceType;
  manaCost: number;
  sideTotal: number;
  maxSide: number;
  minSide: number;
  effectKinds: CardEffectKind[];
  buildTags: string[];
  preferredPositions: BoardPositionTag[];
}

export interface AiLabEffectTally {
  kind: CardEffectKind;
  count: number;
  amount: number;
}

export interface AiLabMoveRecord {
  turn: number;
  round: number;
  roundTurn: number;
  modelId: AiPlayerModelId;
  playerId: PlayerId;
  row: number;
  col: number;
  positionKind: AiLabPositionKind;
  card: AiLabCardSnapshot;
  offeredCards: AiLabCardSnapshot[];
  ignoredCardIds: string[];
  adjacentFriendlyCount: number;
  adjacentEnemyCount: number;
  adjacentFriendlyFamilies: CardFamily[];
  adjacentEnemyFamilies: CardFamily[];
  flippedCount: number;
  failedImpactCount: number;
  flipMargins: number[];
  averageFlipMargin: number;
  effectEvents: AiLabEffectTally[];
  effectAmountTotal: number;
  damageDealt: number;
  damageTaken: number;
  roundWinner: MatchOutcome | null;
  roundControlDifference: number | null;
  roundEnded: boolean;
  matchEnded: boolean;
  lethal: boolean;
}

export interface AiLabMatchResult {
  matchIndex: number;
  scenarioId: AiLabScenarioId;
  scenarioLabel: string;
  startingDeckCardCount: number;
  matchup: [AiPlayerModelId, AiPlayerModelId];
  boardSize: number;
  modelBySeat: Record<PlayerId, AiPlayerModelId>;
  startingPlayer: PlayerId;
  winnerSeat: MatchOutcome;
  winnerModelId: AiPlayerModelId | "draw";
  reason: BattleResult["reason"];
  turns: number;
  rounds: number;
  roundsCompleted: number;
  totalFlips: number;
  totalReshuffles: number;
  deadTurns: number;
  finalChampionHealth: Record<PlayerId, number>;
  finalHpDifference: number;
  moveHistory: AiLabMoveRecord[];
  matchSeed: number;
  decisionSeed: number;
}

export interface AiLabModelSummary {
  modelId: AiPlayerModelId;
  games: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  averageHpEdge: number;
}

export interface AiLabStartingPlayerSummary {
  player: {
    games: number;
    wins: number;
    winRate: number;
  };
  enemy: {
    games: number;
    wins: number;
    winRate: number;
  };
  overallStartingPlayerWinRate: number;
}

export interface AiLabPairingSummary {
  scenarioId: AiLabScenarioId;
  scenarioLabel: string;
  startingDeckCardCount: number;
  matchup: [AiPlayerModelId, AiPlayerModelId];
  totalGames: number;
  drawRate: number;
  startingPlayer: AiLabStartingPlayerSummary;
  modelSummaries: AiLabModelSummary[];
  averages: {
    turns: number;
    rounds: number;
    flipsPerMatch: number;
    flipsPerTurn: number;
    reshuffles: number;
    deadTurns: number;
    finalHpDifference: number;
  };
  deadTurnFrequency: number;
}

export interface AiLabDeckSummary {
  scenarioId: AiLabScenarioId;
  scenarioLabel: string;
  startingDeckCardCount: number;
  mirrorModelId: AiPlayerModelId;
  totalGames: number;
  drawRate: number;
  startingPlayerWinRate: number;
  averages: {
    turns: number;
    rounds: number;
    flipsPerMatch: number;
    flipsPerTurn: number;
    reshuffles: number;
    deadTurns: number;
    finalHpDifference: number;
  };
  deadTurnFrequency: number;
  status: "healthy" | "watch" | "problem";
  notes: string[];
}

export interface AiLabAdventureNodeRecord {
  nodeId: string;
  depth: number;
  lane: number;
  kind: AdventureNodeType;
  title: string;
  playerDeckSizeBefore: number;
  playerDeckSizeAfter: number;
  combatWinner: MatchOutcome | null;
  combatTurns: number;
  combatFlips: number;
  enemyProfileId: string | null;
  enemyBotId: string | null;
  rewardOffered: number;
  rewardClaimed: boolean;
  rewardSkipped: boolean;
  charmOffered: number;
  charmClaimed: LuckyCharmId | null;
  siteAction: "none" | "camp-upgrade" | "camp-remove" | "forge-fusion" | "treasure" | "skip";
}

export interface AiLabAdventureRunRecord {
  runIndex: number;
  modelId: AiPlayerModelId;
  seed: number;
  selectedFamily: CardFamily | null;
  startingDeckCardCount: number;
  finalDeckCardCount: number;
  deckDelta: number;
  outcome: AdventureOutcome;
  victory: boolean;
  bossReached: boolean;
  locationsCleared: number;
  combatCount: number;
  combatWins: number;
  combatLosses: number;
  totalCombatTurns: number;
  totalCombatFlips: number;
  totalDeadTurns: number;
  totalReshuffles: number;
  rewardOffersSeen: number;
  rewardsClaimed: number;
  rewardsSkipped: number;
  rewardsClaimedByRarity: Record<CardRarity, number>;
  stealRewardsOffered: number;
  stealRewardsClaimed: number;
  charmOffersSeen: number;
  charmsClaimed: LuckyCharmId[];
  campVisits: number;
  upgrades: number;
  removals: number;
  forgeVisits: number;
  fusions: number;
  treasures: number;
  nodeCounts: Record<AdventureNodeType, number>;
  finalDeckFamilies: Record<CardFamily, number>;
  finalDeckRarities: Record<CardRarity, number>;
  path: AiLabAdventureNodeRecord[];
}

export interface AiLabAdventureModelSummary {
  modelId: AiPlayerModelId;
  runs: number;
  victories: number;
  bossReached: number;
  victoryRate: number;
  bossReachRate: number;
  averageLocationsCleared: number;
  averageFinalDeckSize: number;
  averageDeckDelta: number;
  averageCombatWinRate: number;
  averageCombatTurns: number;
  averageCombatFlips: number;
  averageDeadTurns: number;
  averageReshuffles: number;
  averageRewardsClaimed: number;
  averageRewardsSkipped: number;
  averageCharms: number;
  averageUpgrades: number;
  averageRemovals: number;
  averageFusions: number;
  familyPickRates: Partial<Record<CardFamily, number>>;
  nodeMix: Record<AdventureNodeType, number>;
  notes: string[];
}

export interface AiLabInsight {
  id: string;
  severity: AiLabInsightSeverity;
  title: string;
  detail: string;
  recommendation: string;
}

export interface AiLabUsageByModel {
  modelId: AiPlayerModelId;
  played: number;
  winRate: number;
}

export interface AiLabUsageByScenario {
  scenarioId: AiLabScenarioId;
  scenarioLabel: string;
  startingDeckCardCount: number;
  played: number;
  winRate: number;
}

export interface AiLabCardAnalysis {
  cardId: string;
  name: string;
  family: CardFamily;
  rarity: CardRarity;
  role?: CardRole;
  sourceType: CardSourceType;
  sideTotal: number;
  maxSide: number;
  minSide: number;
  effectKinds: CardEffectKind[];
  buildTags: string[];
  preferredPositions: BoardPositionTag[];
  offered: number;
  played: number;
  ignored: number;
  selectionRate: number;
  wins: number;
  losses: number;
  draws: number;
  winRateWhenPlayed: number;
  averageFlips: number;
  failedImpactRate: number;
  averageFlipMargin: number;
  averageEffectAmount: number;
  averageDamageDealt: number;
  averageDamageTaken: number;
  averageNetDamage: number;
  lethalMoves: number;
  roundClosers: number;
  byModel: AiLabUsageByModel[];
  byScenario: AiLabUsageByScenario[];
  status: AiLabCardStatus;
  notes: string[];
}

export interface AiLabGroupAnalysis {
  id: string;
  label: string;
  offered: number;
  played: number;
  ignored: number;
  selectionRate: number;
  wins: number;
  losses: number;
  draws: number;
  winRateWhenPlayed: number;
  averageFlips: number;
  averageDamageDealt: number;
  averageNetDamage: number;
  topCards: Array<{
    cardId: string;
    name: string;
    played: number;
    winRateWhenPlayed: number;
  }>;
  status: AiLabCardStatus;
  notes: string[];
}

export interface AiLabComboAnalysis {
  id: string;
  kind: "family-chain" | "friendly-adjacent" | "effect";
  label: string;
  count: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  averageFlips: number;
  averageDamageDealt: number;
  averageEffectAmount: number;
  notes: string[];
}

export interface AiLabBalanceRecommendation {
  id: string;
  severity: AiLabInsightSeverity;
  target: AiLabRecommendationTarget;
  action: AiLabRecommendationAction;
  confidence: AiLabRecommendationConfidence;
  sampleSize: number;
  title: string;
  detail: string;
  recommendation: string;
}

export interface AiLabDesignDiagnostics {
  cardAnalytics: AiLabCardAnalysis[];
  familyAnalytics: AiLabGroupAnalysis[];
  roleAnalytics: AiLabGroupAnalysis[];
  rarityAnalytics: AiLabGroupAnalysis[];
  comboAnalytics: AiLabComboAnalysis[];
  balanceRecommendations: AiLabBalanceRecommendation[];
}

export interface AiLabReport {
  reportId: string;
  generatedAt: string;
  config: AiLabRunConfig;
  playerModels: AiPlayerModel[];
  skillSummaries: AiLabModelSummary[];
  deckSummaries: AiLabDeckSummary[];
  ladderPairings: AiLabPairingSummary[];
  adventureSummaries: AiLabAdventureModelSummary[];
  adventureRuns: AiLabAdventureRunRecord[];
  diagnostics: AiLabDesignDiagnostics;
  insights: AiLabInsight[];
}
