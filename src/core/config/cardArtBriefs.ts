export interface CardArtBrief {
  concept: string;
  subjectPrompt: string;
  prompt: string;
  negativePrompt: string;
  notes: string;
}

export const LEGACY_CARD_ART_SHARED_STYLE_PROMPT =
  "centered full-body fantasy creature character, readable silhouette, whimsical forest shrine, collectible card illustration, ornate magical details, soft cinematic lighting, rich colors, sharp focus, highly polished fantasy painting, no text, no border";

const SHARED_NEGATIVE_PROMPT =
  "text, letters, watermark, logo, frame, border, cropped body, cut off ears, cut off tail, duplicate character, duplicate limbs, extra fingers, extra arms, blurry, muddy colors, low contrast, horror gore, photorealistic human skin";

function buildPrompt(subjectPrompt: string): string {
  return `${subjectPrompt}, ${LEGACY_CARD_ART_SHARED_STYLE_PROMPT}`;
}

/**
 * Extracts the subject-only portion from the old painterly card-art prompt format.
 */
export function extractLegacySubjectPrompt(prompt: string): string {
  const normalizedPrompt = prompt.trim();
  const sharedSuffix = `, ${LEGACY_CARD_ART_SHARED_STYLE_PROMPT}`;

  if (normalizedPrompt.endsWith(sharedSuffix)) {
    return normalizedPrompt.slice(0, -sharedSuffix.length).trim();
  }

  if (normalizedPrompt.endsWith(LEGACY_CARD_ART_SHARED_STYLE_PROMPT)) {
    return normalizedPrompt.slice(0, -LEGACY_CARD_ART_SHARED_STYLE_PROMPT.length).replace(/[,\s]+$/, "");
  }

  return normalizedPrompt;
}

export const CARD_ART_BRIEFS: Readonly<Record<string, CardArtBrief>> = {
  sapling: {
    concept: "Dryade toxique joueuse",
    subjectPrompt:
      "cute poison dryad child, vine hair, thorn crown, glowing green spores, standing pose, mischievous smile, emerald and teal palette",
    prompt: buildPrompt(
      "cute poison dryad child, vine hair, thorn crown, glowing green spores, standing on an ancient stone sigil, mischievous smile, emerald and teal palette",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "Garder une silhouette simple. Le visage doit rester lisible meme en petit sur la carte.",
  },
  badger: {
    concept: "Poney runique robuste",
    subjectPrompt:
      "small rune-carved pony guardian, stout body, carved antler charms, leather harness with glowing symbols, standing proud, earth tones with cyan runes",
    prompt: buildPrompt(
      "small rune-carved pony guardian, stout body, carved antler charms, leather harness with glowing symbols, standing proud on a ritual pedestal, earth tones with cyan runes",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "Le cote tank doit se lire tout de suite. Eviter un cadrage trop serre sur la tete.",
  },
  heron: {
    concept: "Oiselle aubeplume elegante",
    subjectPrompt:
      "graceful dawn heron spirit, long neck, luminous feathers, poised on one leg, pastel blue and sunrise gold palette",
    prompt: buildPrompt(
      "graceful dawn heron spirit, long neck, luminous feathers, floating fireflies, poised on one leg over a moonlit rune platform, pastel blue and sunrise gold palette",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "Chercher une pose verticale claire avec de longues lignes pour differencier la carte du reste du deck.",
  },
  foxfire: {
    concept: "Requin runefer absurde",
    subjectPrompt:
      "enchanted iron shark familiar adapted to land, stout fins with metal runes, glowing ember jawline, absurd but lovable fantasy mascot, ember orange and steel blue palette",
    prompt: buildPrompt(
      "enchanted iron shark familiar adapted to land, stout fins with metal runes, glowing ember jawline, absurd but lovable fantasy mascot, posed on a shrine pedestal in a mystical grotto, ember orange and steel blue palette",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "Le design peut etre etrange, mais il faut un personnage attachant et pas une creature d'horreur.",
  },
  mole: {
    concept: "Ecureuil mineur obstine",
    subjectPrompt:
      "tiny mining squirrel adventurer, oversized satchel, crystal pickaxe, dusty cheeks, bright determined eyes, warm brown and gemstone teal palette",
    prompt: buildPrompt(
      "tiny mining squirrel adventurer, oversized satchel, crystal pickaxe, dusty cheeks, bright determined eyes, standing on a glowing earth sigil, warm brown and gemstone teal palette",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "Accentuer les accessoires de mineur pour que le role soit lisible sans texte.",
  },
  stag: {
    concept: "Herisson lumisylve adorable",
    subjectPrompt:
      "round forest hedgehog spirit, luminous quills, tiny leaf cape, sparkling eyes, moss green and moon blue palette",
    prompt: buildPrompt(
      "round forest hedgehog spirit, luminous quills, tiny leaf cape, sparkling eyes, seated on a magical shrine circle, bioluminescent mushrooms and waterfall behind, moss green and moon blue palette",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "C'est le plus mignon du lot. Il faut une lecture immediate et chaleureuse.",
  },
  owl: {
    concept: "Chaton des ronces malicieux",
    subjectPrompt:
      "playful thorn kitten familiar, berry crown, tiny fang smile, curled tail, cream fur with violet accents",
    prompt: buildPrompt(
      "playful thorn kitten familiar, berry crown, tiny fang smile, curled tail, sitting on a rune altar in an enchanted forest cave, magenta portal glow, cream fur with violet accents",
    ),
    negativePrompt: SHARED_NEGATIVE_PROMPT,
    notes: "Conserver l'energie malicieuse. Le personnage doit rester central et bien detoure.",
  },
};
