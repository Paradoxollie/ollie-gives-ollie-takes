import type { BoardPositionTag, CardArchetype, CardEffect, CardFamily, CardRole, CardSides } from "@/core/types";
import { inferCardManaCost } from "@/core/card-costs";
import { ADVENTURE_REWARD_ARCHETYPES } from "@/core/config/adventureRewards";
import { getNeutralCardArtSrc } from "@/core/config/cardArt";
import { FAMILY_STARTER_DECKS } from "@/core/config/decks";

const STARTER_ROLE_BY_CARD_ID = new Map<string, CardRole>(
  Object.values(FAMILY_STARTER_DECKS).flatMap((deck) =>
    deck.cards.map((entry) => [entry.cardId, entry.role] as const),
  ),
);

const FAMILY_HYBRID_LINKS: Record<CardFamily, CardFamily[]> = {
  familiar: ["human", "automaton", "arcane"],
  demon: ["revenant", "arcane", "human"],
  human: ["familiar", "automaton", "arcane"],
  automaton: ["familiar", "human", "arcane"],
  revenant: ["demon", "human", "arcane"],
  arcane: ["familiar", "demon", "automaton"],
  dragon: ["arcane", "demon"],
  renegade: ["human", "revenant"],
};

const FAMILY_OBJECTIVES: Record<CardFamily, string> = {
  familiar: "Garder les allies proches pour proteger un moteur de meute.",
  demon: "Creer des flips agressifs puis convertir la pression en degats directs.",
  human: "Former des lignes fiables avec des roles distincts, puis completer une formation avant d'attaquer.",
  automaton: "Tenir les coins et assembler une machine de trois cartes capable de riposter.",
  revenant: "Rester au contact quand tu n'es pas devant, puis renverser la manche.",
  arcane: "Ancrer le centre, prolonger le reseau et completer un noyau de pile.",
  dragon: "Chercher une puissance rare de fin de run.",
  renegade: "Ajouter un paquet de contre et de tempo.",
};

const ROLE_OBJECTIVES: Record<CardRole, string> = {
  anchor: "Ouvre correctement une manche et donne une base au plan de famille.",
  attacker: "Menace un cote fort et cree des flips qui declenchent le moteur.",
  connector: "Prepare les conditions du deck et rend les prochains tours plus constants.",
  payoff: "Convertit le setup familial en avantage mesurable.",
  engine: "Ouvre une direction de build plus specialisee.",
  stabilizer: "Evite les mauvais departs et garde la run vivante.",
  finisher: "Sert de payoff tardif quand le deck a deja son setup.",
};

function inferPreferredPositions(effects: CardEffect[] | undefined): BoardPositionTag[] {
  const positions = new Set<BoardPositionTag>();
  for (const effect of effects ?? []) {
    if (effect.condition === "corner") positions.add("corner");
    if (effect.condition === "center") positions.add("center");
    if (effect.condition === "adjacent-ally" || effect.condition === "adjacent-enemy") positions.add("adjacent");
    if (effect.condition === "behind-on-board") positions.add("behind");
  }
  return [...positions];
}

function inferBuildTags(options: {
  family: CardFamily;
  role: CardRole;
  effects?: CardEffect[];
}): string[] {
  const tags = new Set<string>([options.family, options.role]);
  for (const effect of options.effects ?? []) {
    tags.add(effect.kind);
    if (effect.condition && effect.condition !== "always") {
      tags.add(effect.condition);
    }
    if (effect.requiredFamilyCount) {
      tags.add(`combo-${effect.requiredFamilyCount}`);
    }
    if (effect.requiredHybridFamily) {
      tags.add(`hybrid-${effect.requiredHybridFamily}`);
    }
    if ("minFlips" in effect && effect.minFlips) {
      tags.add(`flip-${effect.minFlips}`);
    }
  }
  return [...tags];
}

function inferRole(id: string, effects: CardEffect[] | undefined): CardRole {
  const starterRole = STARTER_ROLE_BY_CARD_ID.get(id);
  if (starterRole) {
    return starterRole;
  }

  if ((effects ?? []).some((effect) => effect.kind === "deal-damage" || ("minFlips" in effect && effect.minFlips))) {
    return "attacker";
  }

  if ((effects ?? []).some((effect) => effect.requiredFamilyCount || effect.scaleWithFamilyCount)) {
    return "engine";
  }

  if ((effects ?? []).some((effect) => effect.kind === "gain-shield")) {
    return "stabilizer";
  }

  return "connector";
}

function draftCard(options: {
  id: string;
  name: string;
  sides: CardSides;
  family: CardFamily;
  accent: string;
  artSrc?: string;
  effects?: CardEffect[];
  manaCost?: number;
  role?: CardRole;
  buildTags?: string[];
  preferredPositions?: BoardPositionTag[];
  hybridLinks?: CardFamily[];
  deckbuildingObjective?: string;
  counterplay?: string;
}): CardArchetype {
  const role = options.role ?? inferRole(options.id, options.effects);
  const preferredPositions = options.preferredPositions ?? inferPreferredPositions(options.effects);
  return {
    id: options.id,
    name: options.name,
    sides: options.sides,
    manaCost: options.manaCost ?? inferCardManaCost({ sides: options.sides, rarity: "common", role, effects: options.effects }),
    family: options.family,
    accent: options.accent,
    artSrc: options.artSrc ?? getNeutralCardArtSrc(options.family),
    rarity: "common",
    role,
    buildTags: options.buildTags ?? inferBuildTags({ family: options.family, role, effects: options.effects }),
    preferredPositions,
    hybridLinks: options.hybridLinks ?? FAMILY_HYBRID_LINKS[options.family],
    deckbuildingObjective:
      options.deckbuildingObjective ?? `${ROLE_OBJECTIVES[role]} ${FAMILY_OBJECTIVES[options.family]}`,
    counterplay:
      options.counterplay ??
      (preferredPositions.includes("center")
        ? "Conteste le centre avant que cette carte ne devienne rentable."
        : preferredPositions.includes("corner")
          ? "Nie les coins ou force-la a jouer vers le centre."
          : preferredPositions.includes("adjacent")
            ? "Separe les cartes pour casser la condition d'adjacence."
            : "Retourne-la avant que le seuil familial ne soit actif."),
    sourceType: "draft",
    baseArchetypeId: null,
    effects: options.effects ?? [],
  };
}

export const CARD_ARCHETYPES: ReadonlyArray<CardArchetype> = [
  draftCard({
    id: "sapling",
    name: "Floramie toxique",
    sides: { top: 2, right: 4, bottom: 4, left: 2 },
    family: "familiar",
    accent: "sprout",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 1, requiredFamilyCount: 2, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "badger",
    name: "Poney runique",
    sides: { top: 5, right: 3, bottom: 2, left: 2 },
    family: "familiar",
    accent: "earth",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 2, condition: "corner" }],
  }),
  draftCard({
    id: "heron",
    name: "Oiselle aubeplume",
    sides: { top: 4, right: 4, bottom: 2, left: 2 },
    family: "familiar",
    accent: "mist",
    effects: [{ trigger: "on-flip", kind: "draw-next-turn", amount: 1, minFlips: 1, requiredFamilyCount: 2 }],
  }),
  draftCard({
    id: "foxfire",
    name: "Requin runefer",
    sides: { top: 3, right: 2, bottom: 5, left: 2 },
    family: "familiar",
    accent: "ember",
    effects: [{ trigger: "on-flip", kind: "gain-shield", amount: 2, minFlips: 1, requiredFamilyCount: 2, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "mole",
    name: "Ecureuil mineur",
    sides: { top: 5, right: 2, bottom: 2, left: 3 },
    family: "familiar",
    accent: "stone",
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", condition: "adjacent-ally" }],
  }),
  draftCard({
    id: "stag",
    name: "Herisson lumisylve",
    sides: { top: 2, right: 2, bottom: 5, left: 3 },
    family: "familiar",
    accent: "grove",
    effects: [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "adjacent-ally" }],
  }),
  draftCard({
    id: "owl",
    name: "Chaton des ronces",
    sides: { top: 3, right: 4, bottom: 2, left: 3 },
    family: "familiar",
    accent: "glow",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 1 }],
  }),

  draftCard({
    id: "ember-imp",
    name: "Diablotin braise",
    sides: { top: 4, right: 5, bottom: 1, left: 2 },
    family: "demon",
    accent: "ember",
    effects: [{ trigger: "on-flip", kind: "deal-damage", amount: 2, minFlips: 1 }],
  }),
  draftCard({
    id: "hornling",
    name: "Cornu farceur",
    sides: { top: 3, right: 3, bottom: 4, left: 2 },
    family: "demon",
    accent: "demon",
    effects: [
      { trigger: "on-play", kind: "deal-damage", amount: 1, condition: "adjacent-enemy" },
      { trigger: "on-play", kind: "boost-self", amount: 1, directions: "strongest", condition: "adjacent-enemy", requiredHybridFamily: "revenant" },
    ],
  }),
  draftCard({
    id: "ash-whisper",
    name: "Murmure de cendre",
    sides: { top: 2, right: 3, bottom: 5, left: 2 },
    family: "demon",
    accent: "ember",
    effects: [{ trigger: "on-flip", kind: "draw-next-turn", amount: 1, minFlips: 1 }],
  }),
  draftCard({
    id: "pact-sprite",
    name: "Lutin a pacte",
    sides: { top: 3, right: 3, bottom: 3, left: 3 },
    family: "demon",
    accent: "demon",
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "strongest", condition: "adjacent-enemy", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "little-abyss",
    name: "Petit abysse",
    sides: { top: 5, right: 2, bottom: 3, left: 2 },
    family: "demon",
    accent: "void",
    effects: [{ trigger: "on-play", kind: "deal-damage", amount: 1, condition: "behind-on-board" }],
  }),
  draftCard({
    id: "cinder-grin",
    name: "Sourire de suie",
    sides: { top: 1, right: 5, bottom: 2, left: 3 },
    family: "demon",
    accent: "shadow",
    effects: [{ trigger: "on-flip", kind: "deal-damage", amount: 1, minFlips: 1, requiredFamilyCount: 2, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "brimstone-tot",
    name: "Bambin soufre",
    sides: { top: 4, right: 1, bottom: 3, left: 4 },
    family: "demon",
    accent: "ember",
    effects: [{ trigger: "on-play", kind: "deal-damage", amount: 2, condition: "center" }],
  }),

  draftCard({
    id: "field-knight",
    name: "Chevaliere des champs",
    sides: { top: 4, right: 2, bottom: 4, left: 2 },
    family: "human",
    accent: "steel",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 1, requiredFamilyCount: 2, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "rune-mage",
    name: "Mage des runes",
    sides: { top: 3, right: 4, bottom: 2, left: 2 },
    family: "human",
    accent: "mist",
    manaCost: 1,
    effects: [
      { trigger: "on-play", kind: "draw-next-turn", amount: 1, requiredFamilyCount: 2 },
      { trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", requiredFamilyCount: 2 },
    ],
  }),
  draftCard({
    id: "path-ranger",
    name: "Rodeuse du sentier",
    sides: { top: 5, right: 2, bottom: 2, left: 3 },
    family: "human",
    accent: "grove",
    preferredPositions: ["edge"],
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "strongest", condition: "edge", requiredFamilyCount: 2 }],
  }),
  draftCard({
    id: "quiet-monk",
    name: "Moine du seuil",
    sides: { top: 4, right: 3, bottom: 3, left: 2 },
    family: "human",
    accent: "sun",
    preferredPositions: ["edge"],
    manaCost: 1,
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", condition: "edge", requiredFamilyCount: 2 }],
  }),
  draftCard({
    id: "gate-thief",
    name: "Voleuse des portes",
    sides: { top: 2, right: 4, bottom: 2, left: 4 },
    family: "human",
    accent: "shadow",
    effects: [{ trigger: "on-flip", kind: "draw-next-turn", amount: 1, minFlips: 1 }],
  }),
  draftCard({
    id: "banner-squire",
    name: "Ecuyere banniere",
    sides: { top: 4, right: 3, bottom: 3, left: 2 },
    family: "human",
    accent: "steel",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 1, condition: "adjacent-ally", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "hearth-archer",
    name: "Archer du foyer",
    sides: { top: 3, right: 4, bottom: 1, left: 4 },
    family: "human",
    accent: "sun",
    effects: [{ trigger: "on-flip", kind: "deal-damage", amount: 1, minFlips: 1 }],
  }),

  draftCard({
    id: "clock-sentinel",
    name: "Sentinelle d'horloge",
    sides: { top: 5, right: 2, bottom: 3, left: 2 },
    family: "automaton",
    accent: "brass",
    preferredPositions: ["corner"],
    effects: [
      { trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest" },
      { trigger: "on-play", kind: "gain-shield", amount: 1, condition: "corner" },
    ],
  }),
  draftCard({
    id: "brass-rook",
    name: "Tour de laiton",
    sides: { top: 3, right: 5, bottom: 1, left: 3 },
    family: "automaton",
    accent: "brass",
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "gear-monk",
    name: "Moine engrene",
    sides: { top: 3, right: 3, bottom: 4, left: 2 },
    family: "automaton",
    accent: "steel",
    manaCost: 1,
    effects: [
      { trigger: "on-play", kind: "draw-next-turn", amount: 1 },
      { trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", requiredFamilyCount: 2, scaleWithFamilyCount: true, maxScale: 2 },
    ],
  }),
  draftCard({
    id: "tin-oracle",
    name: "Oracle de fer-blanc",
    sides: { top: 3, right: 4, bottom: 3, left: 2 },
    family: "automaton",
    accent: "arcane",
    preferredPositions: ["corner"],
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "all", condition: "corner", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "copper-beetle",
    name: "Scarabee cuivre",
    sides: { top: 4, right: 2, bottom: 2, left: 4 },
    family: "automaton",
    accent: "brass",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 1 }],
  }),
  draftCard({
    id: "glass-warden",
    name: "Gardien de verre",
    sides: { top: 3, right: 4, bottom: 3, left: 2 },
    family: "automaton",
    accent: "mist",
    effects: [{ trigger: "on-flip", kind: "gain-shield", amount: 2, minFlips: 1 }],
  }),
  draftCard({
    id: "spring-knave",
    name: "Valet ressort",
    sides: { top: 2, right: 3, bottom: 5, left: 2 },
    family: "automaton",
    accent: "steel",
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "strongest", condition: "behind-on-board" }],
  }),

  draftCard({
    id: "grave-child",
    name: "Enfant des tombes",
    sides: { top: 2, right: 2, bottom: 5, left: 3 },
    family: "revenant",
    accent: "shadow",
    effects: [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "behind-on-board", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "lantern-shade",
    name: "Ombre a lanterne",
    sides: { top: 4, right: 2, bottom: 3, left: 3 },
    family: "revenant",
    accent: "glow",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 2, condition: "behind-on-board" }],
  }),
  draftCard({
    id: "bone-choir",
    name: "Choeur d'os",
    sides: { top: 3, right: 4, bottom: 2, left: 3 },
    family: "revenant",
    accent: "mist",
    effects: [{ trigger: "on-flip", kind: "gain-shield", amount: 1, minFlips: 1 }],
  }),
  draftCard({
    id: "widow-knight",
    name: "Chevalier veuf",
    sides: { top: 4, right: 5, bottom: 2, left: 1 },
    family: "revenant",
    accent: "shadow",
    effects: [
      { trigger: "on-flip", kind: "deal-damage", amount: 2, minFlips: 1, requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 },
      { trigger: "on-play", kind: "gain-shield", amount: 1, requiredHybridFamily: "demon" },
    ],
  }),
  draftCard({
    id: "moth-ghost",
    name: "Fantome phalene",
    sides: { top: 4, right: 3, bottom: 3, left: 2 },
    family: "revenant",
    accent: "glow",
    effects: [
      { trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest" },
      { trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "behind-on-board", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 },
    ],
  }),
  draftCard({
    id: "hollow-page",
    name: "Page creux",
    sides: { top: 3, right: 3, bottom: 1, left: 5 },
    family: "revenant",
    accent: "shadow",
    effects: [{ trigger: "on-play", kind: "deal-damage", amount: 1, condition: "behind-on-board" }],
  }),
  draftCard({
    id: "veil-duelist",
    name: "Duelliste voile",
    sides: { top: 4, right: 4, bottom: 2, left: 2 },
    family: "revenant",
    accent: "mist",
    effects: [{ trigger: "on-flip", kind: "draw-next-turn", amount: 1, minFlips: 1 }],
  }),

  draftCard({
    id: "star-witch",
    name: "Sorciere d'etoiles",
    sides: { top: 3, right: 4, bottom: 3, left: 2 },
    family: "arcane",
    accent: "arcane",
    effects: [
      { trigger: "on-play", kind: "boost-self", amount: 2, directions: "all", requiredFamilyCount: 3 },
      { trigger: "on-play", kind: "draw-next-turn", amount: 1, requiredFamilyCount: 3 },
    ],
  }),
  draftCard({
    id: "rune-adept",
    name: "Adepte sigillaire",
    sides: { top: 4, right: 3, bottom: 2, left: 3 },
    family: "arcane",
    accent: "arcane",
    effects: [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "adjacent-ally" }],
  }),
  draftCard({
    id: "mirror-novice",
    name: "Novice miroir",
    sides: { top: 3, right: 2, bottom: 5, left: 2 },
    family: "arcane",
    accent: "mist",
    effects: [{ trigger: "on-flip", kind: "draw-next-turn", amount: 1, minFlips: 1 }],
  }),
  draftCard({
    id: "moon-scribe",
    name: "Scribe lunaire",
    sides: { top: 5, right: 1, bottom: 2, left: 4 },
    family: "arcane",
    accent: "arcane",
    effects: [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "strongest", condition: "adjacent-enemy" }],
  }),
  draftCard({
    id: "glass-oracle",
    name: "Oracle de verre",
    sides: { top: 1, right: 5, bottom: 4, left: 2 },
    family: "arcane",
    accent: "mist",
    effects: [{ trigger: "on-flip", kind: "deal-damage", amount: 1, minFlips: 1 }],
  }),
  draftCard({
    id: "wandering-glyph",
    name: "Glyphe errant",
    sides: { top: 4, right: 3, bottom: 3, left: 2 },
    family: "arcane",
    accent: "glow",
    effects: [{ trigger: "on-play", kind: "gain-shield", amount: 3, condition: "center", requiredFamilyCount: 1, scaleWithFamilyCount: true, maxScale: 2 }],
  }),
  draftCard({
    id: "blue-comet",
    name: "Comete bleue",
    sides: { top: 4, right: 2, bottom: 2, left: 4 },
    family: "arcane",
    accent: "arcane",
    effects: [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "adjacent-ally", requiredFamilyCount: 2, scaleWithFamilyCount: true, maxScale: 2 }],
  }),

  ...ADVENTURE_REWARD_ARCHETYPES,
];

export const CARD_ARCHETYPE_LOOKUP = Object.fromEntries(
  CARD_ARCHETYPES.map((card) => [card.id, card]),
) as Record<string, CardArchetype>;
