export const PLAYER_IDS = ["player", "enemy"] as const;
export const DIRECTIONS = ["top", "right", "bottom", "left"] as const;
export const DECK_PRESET_IDS = ["starter10", "starter12", "starter14"] as const;
export const ADVENTURE_NODE_TYPES = ["combat", "elite", "shop", "chest", "rest", "boss"] as const;
export const ADVENTURE_PHASES = ["draft", "charm", "map", "encounter", "reward", "site", "finished"] as const;
export const ADVENTURE_NODE_STATUSES = ["locked", "available", "active", "completed"] as const;
export const ROUND_COIN_FACES = ["sun", "moon"] as const;
export const CARD_RARITIES = ["common", "uncommon", "rare"] as const;
export const CARD_SOURCE_TYPES = ["draft", "reward", "treasure", "upgrade", "fusion", "enemy-upgrade", "charm"] as const;
export const CARD_FAMILIES = [
  "familiar",
  "demon",
  "human",
  "automaton",
  "revenant",
  "arcane",
  "dragon",
  "renegade",
] as const;
export const ENEMY_TIERS = ["normal", "elite", "boss"] as const;
export const LUCKY_CHARM_RARITIES = ["common", "rare", "legendary"] as const;
export const LUCKY_CHARM_IDS = [
  "first-breath",
  "watcher-stone",
  "spring-tear",
  "lantern-mushroom",
  "refuge-bark",
  "firefly-wing",
  "split-hazelnut",
  "double-knot-rune",
  "moss-dust",
  "old-bridge-stone",
  "balance-feather",
  "ancient-sap",
  "reflection-ring",
  "broken-bell",
  "clearing-eye",
] as const;
export const ENEMY_PROFILE_IDS = [
  "aggro",
  "fortress",
  "swarm",
  "trickster",
  "builder",
  "executioner",
  "bastion",
  "shaper",
  "ravager",
  "warden",
] as const;

export type PlayerId = (typeof PLAYER_IDS)[number];
export type Direction = (typeof DIRECTIONS)[number];
export type DeckPresetId = (typeof DECK_PRESET_IDS)[number];
export type MatchOutcome = PlayerId | "draw";
export type MatchEndSource = "round-end-control" | "direct-damage" | "stalemate";
export type CombatImpactResult = "no-flip" | "flipped";
export type AdventureNodeType = (typeof ADVENTURE_NODE_TYPES)[number];
export type AdventurePhase = (typeof ADVENTURE_PHASES)[number];
export type AdventureNodeStatus = (typeof ADVENTURE_NODE_STATUSES)[number];
export type AdventureEncounterStatus = "active" | "completed" | "failed";
export type AdventureOutcome = "in-progress" | "victory" | "defeat";
export type RoundCoinFace = (typeof ROUND_COIN_FACES)[number];
export type CardRarity = (typeof CARD_RARITIES)[number];
export type CardSourceType = (typeof CARD_SOURCE_TYPES)[number];
export type CardFamily = (typeof CARD_FAMILIES)[number];
export type AdventureCampMode = "remove" | "upgrade";
export type EnemyTier = (typeof ENEMY_TIERS)[number];
export type EnemyProfileId = (typeof ENEMY_PROFILE_IDS)[number];
export type LuckyCharmRarity = (typeof LUCKY_CHARM_RARITIES)[number];
export type LuckyCharmId = (typeof LUCKY_CHARM_IDS)[number];
export type AdventureCharmOfferSource = "start" | "chest" | "elite";
export type TemporaryCardScope = "round" | "combat";
export type PlayerCharmActionId = "firefly-reroll" | "reflection-copy";

export interface Position {
  row: number;
  col: number;
}

export interface CardSides {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type CardEffectTrigger = "on-play" | "on-flip";
export type CardEffectCondition =
  | "always"
  | "adjacent-ally"
  | "adjacent-enemy"
  | "corner"
  | "center"
  | "behind-on-board";
export type CardEffectKind = "gain-shield" | "deal-damage" | "draw-next-turn" | "boost-self";
export type CardBoostDirectionMode = "all" | "strongest" | "weakest";

export type CardEffect =
  | {
      trigger: "on-play" | "on-flip";
      kind: "gain-shield" | "deal-damage" | "draw-next-turn";
      amount: number;
      condition?: CardEffectCondition;
      minFlips?: number;
      requiredFamilyCount?: number;
      scaleWithFamilyCount?: boolean;
      maxScale?: number;
    }
  | {
      trigger: "on-play";
      kind: "boost-self";
      amount: number;
      directions: CardBoostDirectionMode;
      condition?: CardEffectCondition;
      requiredFamilyCount?: number;
      scaleWithFamilyCount?: boolean;
      maxScale?: number;
    };

export interface CardEffectEvent {
  playerId: PlayerId;
  sourceCardInstanceId: string;
  kind: CardEffectKind;
  amount: number;
  description: string;
}

export interface CardArchetype {
  id: string;
  name: string;
  sides: CardSides;
  family: CardFamily;
  accent: string;
  artSrc: string;
  rarity: CardRarity;
  sourceType: CardSourceType;
  baseArchetypeId: string | null;
  temporaryScope?: TemporaryCardScope | null;
  createdByCharmId?: LuckyCharmId | null;
  effects?: CardEffect[];
}

export interface CardInstance {
  instanceId: string;
  archetypeId: string;
  owner: PlayerId;
  name: string;
  sides: CardSides;
  family: CardFamily;
  accent: string;
  artSrc: string;
  rarity: CardRarity;
  sourceType: CardSourceType;
  baseArchetypeId: string | null;
  temporaryScope?: TemporaryCardScope | null;
  createdByCharmId?: LuckyCharmId | null;
  corruptedBy?: PlayerId | null;
  effects?: CardEffect[];
}

export interface BoardCard extends CardInstance {
  row: number;
  col: number;
}

export interface ChampionState {
  health: number;
  maxHealth: number;
}

export interface PlayerState {
  id: PlayerId;
  drawPile: CardInstance[];
  discardPile: CardInstance[];
  reshuffles: number;
}

export interface PlayerCombatState {
  shield: number;
  nextTurnDrawBonus: number;
}

export interface TurnState {
  index: number;
  roundTurn: number;
  activePlayer: PlayerId;
  choices: CardInstance[];
}

export interface RoundState {
  number: number;
  startingPlayer: PlayerId;
  coinFace: RoundCoinFace;
}

export interface ControlTotals {
  player: number;
  enemy: number;
}

export interface CombatImpact {
  direction: Direction;
  position: Position;
  targetCardInstanceId: string;
  targetOwnerBeforeImpact: PlayerId;
  targetOwnerAfterImpact: PlayerId;
  attackerValue: number;
  defenderValue: number;
  margin: number;
  result: CombatImpactResult;
}

export interface RoundEndSummary {
  roundNumber: number;
  boardOccupancy: number;
  control: ControlTotals;
  controlDifference: number;
  roundWinner: MatchOutcome;
  damageApplied: Record<PlayerId, number>;
  championsAfterDamage: Record<PlayerId, ChampionState>;
}

export interface BattleResult {
  winner: MatchOutcome;
  reason: "champion-ko" | "double-ko" | "stalemate";
  endingSource: MatchEndSource;
  champions: Record<PlayerId, ChampionState>;
}

export interface MatchMetrics {
  totalFlips: number;
  totalRoundEndControlDifference: number;
  totalRoundEndDamage: number;
  totalControlledCardsBySide: Record<PlayerId, number>;
  deadTurns: number;
  roundsCompleted: number;
  totalRoundEndOccupancy: number;
}

export interface LastMoveSummary {
  playerId: PlayerId;
  cardInstanceId: string;
  position: Position;
  impacts: CombatImpact[];
  effectEvents: CardEffectEvent[];
  championsAfterMove: Record<PlayerId, ChampionState>;
  controlAfterCombat: ControlTotals;
  boardOccupancyAfterCombat: number;
  roundEnded: boolean;
  roundNumberAfterMove: number;
  roundEndSummary: RoundEndSummary | null;
}

export interface MatchConfig {
  boardSize: number;
  cardsPerTurn: number;
  aiDelayMs: number;
  defaultSeed: number;
  startingPlayer: PlayerId;
  championStartingHealth: number;
  roundDamagePerControlledCard: number;
  maxShieldPerPlayer: number;
  maxNextTurnDrawBonus: number;
  maxDirectDamagePerMove: number;
  maxCardSideValue: number;
}

export interface AdventureConfig {
  draftOfferSize: number;
  draftPickCount: number;
  depthCount: number;
  laneCount: number;
  minStartingNodes: number;
  maxStartingNodes: number;
  minNodesPerDepth: number;
  maxNodesPerDepth: number;
  maxLaneDrift: number;
  extraConnectionChance: number;
  combatWeight: number;
  eliteWeight: number;
  shopWeight: number;
  chestWeight: number;
  restWeight: number;
  preBossCombatWeight: number;
  preBossEliteWeight: number;
  preBossShopWeight: number;
  preBossChestWeight: number;
  preBossRestWeight: number;
}

export interface AdventureRewardConfig {
  offerSize: number;
  normalCommonWeight: number;
  normalUncommonWeight: number;
  normalRareWeight: number;
  eliteCommonWeight: number;
  eliteUncommonWeight: number;
  eliteRareWeight: number;
  treasureCommonWeight: number;
  treasureUncommonWeight: number;
  treasureRareWeight: number;
  rareUnlockOfferIndex: number;
  maxRareOffersPerRun: number;
  maxUncommonOffersPerRun: number;
  firstGuaranteedUncommonOfferIndex: number;
  secondGuaranteedUncommonOfferIndex: number;
}

export interface AdventureCharmConfig {
  offerSize: number;
  starterOfferSize: number;
  chestOfferSize: number;
  eliteOfferSize: number;
  eliteDropChance: number;
  chestCommonWeight: number;
  chestRareWeight: number;
  chestLegendaryWeight: number;
  eliteCommonWeight: number;
  eliteRareWeight: number;
  eliteLegendaryWeight: number;
}

export interface AdventureEnemyConfig {
  normalMaxReplacements: number;
  normalMaxAdds: number;
  eliteReplacementBonus: number;
  eliteAddBonus: number;
  bossReplacementCount: number;
  bossAddCount: number;
  playerUpgradePressure: number;
  playerUncommonPressure: number;
  playerRarePressure: number;
  uncommonUnlockLocation: number;
  rareUnlockLocation: number;
  eliteRareUnlockLocation: number;
  bossRareUnlockLocation: number;
  earlyNormalCommonWeight: number;
  earlyNormalUncommonWeight: number;
  earlyNormalRareWeight: number;
  midNormalCommonWeight: number;
  midNormalUncommonWeight: number;
  midNormalRareWeight: number;
  lateNormalCommonWeight: number;
  lateNormalUncommonWeight: number;
  lateNormalRareWeight: number;
  earlyEliteCommonWeight: number;
  earlyEliteUncommonWeight: number;
  earlyEliteRareWeight: number;
  lateEliteCommonWeight: number;
  lateEliteUncommonWeight: number;
  lateEliteRareWeight: number;
  bossCommonWeight: number;
  bossUncommonWeight: number;
  bossRareWeight: number;
}

export interface EnemyProfileBiases {
  aggression: number;
  balance: number;
  corner: number;
  edge: number;
  trick: number;
  fusion: number;
  consistency: number;
  risk: number;
}

export interface MatchEnemyProfile {
  id: EnemyProfileId;
  tier: EnemyTier;
  name: string;
  playstyle: string;
  passivePowerName: string;
  passivePowerDescription: string;
  activePowerName: string | null;
  activePowerDescription: string | null;
  biases: EnemyProfileBiases;
}

export interface LuckyCharmDefinition {
  id: LuckyCharmId;
  rarity: LuckyCharmRarity;
  name: string;
  shortLabel: string;
  description: string;
  drawback: string;
  starterEligible: boolean;
  icon: string;
  biases: {
    aggression: number;
    control: number;
    tempo: number;
    fusion: number;
    trim: number;
    precision: number;
  };
}

export interface EnemyPowerState {
  battleCryReady: boolean;
  secondChanceReady: boolean;
  roarReady: boolean;
  refineReady: boolean;
  relentlessControlBonus: number;
  lastRenewRound: number | null;
}

export interface TrainedBotWeights {
  hpDiff: number;
  controlDiff: number;
  boardStrengthDiff: number;
  reserveStrengthDiff: number;
  handStrengthDiff: number;
  mobilityDiff: number;
  cornerControlDiff: number;
  occupiedBoardDiff: number;
  imminentRoundDamageDiff: number;
  activeTurnTempo: number;
  specialCardValue: number;
  deckTrimValue: number;
  eliteRouteBias: number;
  restRouteBias: number;
  forgeRouteBias: number;
  treasureRouteBias: number;
  branchingRouteBias: number;
  riskTolerance: number;
  aggressionPlanBias: number;
  controlPlanBias: number;
  tempoPlanBias: number;
  fusionPlanBias: number;
  precisionPlanBias: number;
  uncommonCardBias: number;
  rareCardBias: number;
  charmSynergyBias: number;
  duplicateCardPenalty: number;
  enemyProfileRespect: number;
}

export interface BotTrainingConfig {
  populationSize: number;
  eliteCount: number;
  iterations: number;
  matchesPerOpponent: number;
  promotionMatchesPerOpponent: number;
  initialSigma: number;
  sigmaDecay: number;
  minSigma: number;
  defaultSearchDepth: number;
  defaultBeamWidth: number;
  heuristicBaselineBlend: number;
  campaignTrainingRunsPerOpponent: number;
  campaignPromotionRunsPerOpponent: number;
  campaignScoreWeight: number;
  promotionMinimumWinRateVsHeuristic: number;
  promotionMinimumWinRateVsChampion: number;
  promotionMinimumAverageHpEdge: number;
  promotionMinimumCampaignScoreVsHeuristic: number;
  promotionMinimumCampaignScoreVsChampion: number;
  promotionMinimumBossReachRateVsHeuristic: number;
  promotionMinimumBossReachRateVsChampion: number;
}

export interface MatchSettings {
  deckPresetId: DeckPresetId;
  seed: number;
  startingPlayer?: PlayerId;
  playerCardIds?: string[];
  enemyCardIds?: string[];
  playerCards?: CardArchetype[];
  enemyCards?: CardArchetype[];
  enemyProfile?: MatchEnemyProfile | null;
  playerCharmIds?: LuckyCharmId[];
}

export interface AdventureSettings {
  seed: number;
}

export interface MatchState {
  config: MatchConfig;
  deckPresetId: DeckPresetId;
  seed: number;
  rngState: number;
  board: Array<Array<BoardCard | null>>;
  players: Record<PlayerId, PlayerState>;
  champions: Record<PlayerId, ChampionState>;
  round: RoundState;
  turn: TurnState;
  combat: Record<PlayerId, PlayerCombatState>;
  playerCharms: LuckyCharmId[];
  playerCharmState: PlayerCharmState;
  enemyProfile: MatchEnemyProfile | null;
  enemyPowerState: EnemyPowerState | null;
  result: BattleResult | null;
  metrics: MatchMetrics;
  lastMove: LastMoveSummary | null;
  emptyTurnStreak: number;
}

export interface AdventureNode {
  id: string;
  depth: number;
  lane: number;
  kind: AdventureNodeType;
  title: string;
  description: string;
  nextNodeIds: string[];
}

export interface AdventureMap {
  depthCount: number;
  laneCount: number;
  bossNodeId: string;
  nodes: AdventureNode[];
}

export interface AdventureEncounterState {
  nodeId: string;
  kind: AdventureNodeType;
  status: AdventureEncounterStatus;
  battleSeed: number | null;
}

export interface PlayerCharmState {
  cardsPlayedThisRound: number;
  playerTurnsTakenThisRound: number;
  firstCombatDrawPenaltyApplied: boolean;
  fireflyRerollUsedThisRound: boolean;
  fireflyReshufflePenaltyPending: boolean;
  reflectionCopyUsedThisCombat: boolean;
  roundDamageBonus: number;
  enemyVirtualControlBonus: number;
}

export interface PlayerCharmActionAvailability {
  id: PlayerCharmActionId;
  label: string;
  description: string;
  available: boolean;
  requiresSelectedCard: boolean;
}

export interface AdventureDeckCard {
  deckCardId: string;
  card: CardArchetype;
}

export interface AdventureDeckState {
  cards: AdventureDeckCard[];
  nextDeckCardSequence: number;
  nextGeneratedCardSequence: number;
}

export interface AdventureDraftState {
  offerCardIds: string[];
  selectedCardIds: string[];
  pickCount: number;
}

export interface AdventureRewardProgress {
  offersSeen: number;
  offeredByRarity: Record<CardRarity, number>;
  claimedByRarity: Record<CardRarity, number>;
}

export interface AdventureRewardOption {
  rewardId: string;
  archetypeId: string;
  rarity: CardRarity;
}

export interface AdventureRewardState {
  sourceNodeId: string;
  sourceNodeKind: AdventureNodeType;
  options: AdventureRewardOption[];
}

export interface AdventureCharmOfferOption {
  charmId: LuckyCharmId;
}

export interface AdventureCharmOfferState {
  source: AdventureCharmOfferSource;
  sourceNodeId: string | null;
  title: string;
  subtitle: string;
  canSkip: boolean;
  options: AdventureCharmOfferOption[];
}

export interface AdventureCharmProgress {
  eliteCharmOffersSeen: number;
  normalVictoriesSinceHazelnutTrim: number;
}

export interface AdventureCampSiteState {
  kind: "camp";
  sourceNodeId: string;
  selectedMode: AdventureCampMode | null;
  origin?: "node" | "hazelnut";
}

export interface AdventureForgeSiteState {
  kind: "forge";
  sourceNodeId: string;
  selectedCardIds: string[];
  previewCard: CardArchetype | null;
}

export interface AdventureTreasureSiteState {
  kind: "treasure";
  sourceNodeId: string;
  grantedCard: AdventureDeckCard;
}

export type AdventureSiteState =
  | AdventureCampSiteState
  | AdventureForgeSiteState
  | AdventureTreasureSiteState;

export interface AdventureRunState {
  config: AdventureConfig;
  seed: number;
  rngState: number;
  map: AdventureMap;
  phase: AdventurePhase;
  outcome: AdventureOutcome;
  history: string[];
  activeNodeId: string | null;
  availableNodeIds: string[];
  encounter: AdventureEncounterState | null;
  draft: AdventureDraftState | null;
  deck: AdventureDeckState;
  charms: LuckyCharmId[];
  charmProgress: AdventureCharmProgress;
  rewardProgress: AdventureRewardProgress;
  rewardOffer: AdventureRewardState | null;
  charmOffer: AdventureCharmOfferState | null;
  siteState: AdventureSiteState | null;
  queuedCharmOffer: AdventureCharmOfferState | null;
  queuedSiteState: AdventureSiteState | null;
}

export interface MoveInput {
  cardInstanceId: string;
  position: Position;
}

export interface PreviewMove {
  move: MoveInput;
  flippedCount: number;
  control: ControlTotals;
  positionWeight: number;
  boardOccupancyAfterCombat: number;
  roundEnds: boolean;
  impacts: CombatImpact[];
  effectEvents: CardEffectEvent[];
  roundEndSummary: RoundEndSummary | null;
  resultingWinner: MatchOutcome | null;
}

export interface SerializedMatchState {
  mode: "playing" | "finished";
  coordinateSystem: string;
  activePlayer: PlayerId | null;
  turn: number;
  roundTurn: number;
  round: number;
  roundStarter: PlayerId;
  roundCoinFace: RoundCoinFace;
  enemyProfile:
    | {
        id: EnemyProfileId;
        tier: EnemyTier;
        name: string;
        playstyle: string;
        passivePowerName: string;
        passivePowerDescription: string;
        activePowerName: string | null;
        activePowerDescription: string | null;
      }
    | null;
  enemyPowerState: EnemyPowerState | null;
  playerCharms: Array<{
    id: LuckyCharmId;
    rarity: LuckyCharmRarity;
    name: string;
    shortLabel: string;
    description: string;
    drawback: string;
  }>;
  playerCharmState: PlayerCharmState;
  combat: Record<PlayerId, PlayerCombatState>;
  playerCharmActions: PlayerCharmActionAvailability[];
  nextDrawPreview: Array<{
    name: string;
    sides: CardSides;
    family: CardFamily;
    rarity: CardRarity;
    sourceType: CardSourceType;
    effects: CardEffect[];
  }>;
  champions: Record<PlayerId, ChampionState>;
  boardControl: ControlTotals;
  boardFamilies: Record<PlayerId, Record<CardFamily, number>>;
  board: Array<
    Array<
      | null
      | {
          owner: PlayerId;
          cardName: string;
          sides: CardSides;
          family: CardFamily;
          corruptedBy: PlayerId | null;
          rarity: CardRarity;
          sourceType: CardSourceType;
          effects: CardEffect[];
        }
    >
  >;
  hand: Array<{
    instanceId: string;
    name: string;
    sides: CardSides;
    family: CardFamily;
    rarity: CardRarity;
    sourceType: CardSourceType;
    effects: CardEffect[];
  }>;
  piles: Record<
    PlayerId,
    {
      draw: number;
      discard: number;
      reshuffles: number;
    }
  >;
  result: BattleResult | null;
  lastMove: LastMoveSummary | null;
}

export interface SerializedAdventureNode {
  id: string;
  depth: number;
  lane: number;
  kind: AdventureNodeType;
  title: string;
  description: string;
  nextNodeIds: string[];
  status: AdventureNodeStatus;
}

export interface SerializedAdventureRunState {
  mode: AdventurePhase;
  seed: number;
  outcome: AdventureOutcome;
  locationsCleared: number;
  totalLocationsBeforeBoss: number;
  activeNodeId: string | null;
  availableNodeIds: string[];
  currentNode:
    | {
        id: string;
        kind: AdventureNodeType;
        title: string;
        description: string;
      }
    | null;
  map: {
    depthCount: number;
    laneCount: number;
    bossNodeId: string;
    nodes: SerializedAdventureNode[];
  };
  deck: {
    size: number;
    draftCount: number;
    specialCount: number;
    byRarity: Record<CardRarity, number>;
    offeredByRarity: Record<CardRarity, number>;
    claimedByRarity: Record<CardRarity, number>;
  };
  draft:
    | {
        pickCount: number;
        selectedCardIds: string[];
        offer: Array<{
          archetypeId: string;
          name: string;
          family: CardFamily;
          rarity: CardRarity;
          sides: CardSides;
          effects: CardEffect[];
        }>;
      }
    | null;
  charms: Array<{
    id: LuckyCharmId;
    rarity: LuckyCharmRarity;
    name: string;
    shortLabel: string;
    description: string;
    drawback: string;
  }>;
  encounter:
    | {
        nodeId: string;
        kind: AdventureNodeType;
        status: AdventureEncounterStatus;
        battle: SerializedMatchState | null;
        enemyPlan:
          | {
              profile: {
                id: EnemyProfileId;
                tier: EnemyTier;
                name: string;
                playstyle: string;
                passivePowerName: string;
                passivePowerDescription: string;
                activePowerName: string | null;
                activePowerDescription: string | null;
              };
              botId: "greedy" | "heuristic" | "champion";
              deckSize: number;
              replacements: number;
              additions: number;
              searchDepth: number;
              rarityCounts: Record<CardRarity, number>;
            }
          | null;
      }
    | null;
  rewardOffer:
    | {
        sourceNodeId: string;
        sourceNodeKind: AdventureNodeType;
        options: Array<{
            rewardId: string;
            rarity: CardRarity;
            sides: CardSides;
            effects: CardEffect[];
          }>;
      }
    | null;
  charmOffer:
    | {
        source: AdventureCharmOfferSource;
        sourceNodeId: string | null;
        title: string;
        subtitle: string;
        canSkip: boolean;
        options: Array<{
          charmId: LuckyCharmId;
        }>;
      }
    | null;
  siteState:
    | {
        kind: "camp";
        sourceNodeId: string;
        selectedMode: AdventureCampMode | null;
        origin?: "node" | "hazelnut";
      }
    | {
        kind: "forge";
        sourceNodeId: string;
        selectedCardIds: string[];
        preview:
          | {
              sides: CardSides;
              rarity: CardRarity;
              effects: CardEffect[];
            }
          | null;
      }
    | {
        kind: "treasure";
        sourceNodeId: string;
        grantedCard: {
          rarity: CardRarity;
          sides: CardSides;
          sourceType: CardSourceType;
          effects: CardEffect[];
        };
      }
    | null;
}
