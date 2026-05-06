import { mkdir, readdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

import { CARD_ARCHETYPES } from "@/core/config/cardArchetypes";
import { CARD_ART_BRIEFS } from "@/core/config/cardArtBriefs";
import {
  buildCandidateFilename,
  CHARACTER_LAB_DEFAULT_BATCH_SIZE,
  CHARACTER_LAB_TARGET_SIZE,
  isSupportedGeneratedImage,
} from "@/lib/card-art";
import { getDefaultCharacterLabDirection, resolveCharacterLabDirection } from "@/lib/character-lab-direction";
import { loadCharacterLabServiceStatus } from "@/lib/comfyui-client";
import { extractCharacterLabUserNegativePrompt, getCharacterLabRenderPreset } from "@/lib/character-lab-presets";
import { sanitizeCharacterLabSubjectPrompt } from "@/lib/character-lab-subject";
import type {
  CharacterLabBackgroundMode,
  CharacterLabCandidate,
  CharacterLabData,
  CharacterLabEntry,
  CharacterLabDirection,
  CharacterLabRenderPresetId,
  CharacterLabServiceStatus,
  CharacterLabSettings,
  CharacterLabStoredCandidate,
  CharacterLabStoredCardState,
  CharacterLabStoredState,
} from "@/lib/character-lab-types";

const CHARACTER_LAB_STATE_DIR = path.join(process.cwd(), "reports", "character-lab");
const CHARACTER_LAB_STATE_PATH = path.join(CHARACTER_LAB_STATE_DIR, "state.json");
const REFERENCE_IMAGE_ROOT = path.join(CHARACTER_LAB_STATE_DIR, "references");
const GENERATED_IMAGE_ROOT = path.join(process.cwd(), "public", "images", "cards-generated");

export const DEFAULT_CHARACTER_LAB_SETTINGS: CharacterLabSettings = {
  comfyUiUrl: "http://127.0.0.1:8188",
  renderPresetId: "game-toon-cutout",
  backgroundMode: "transparent-cutout",
  width: CHARACTER_LAB_TARGET_SIZE.width,
  height: CHARACTER_LAB_TARGET_SIZE.height,
  referenceStrength: 0.28,
  batchSize: CHARACTER_LAB_DEFAULT_BATCH_SIZE,
  steps: 28,
  guidanceScale: 6,
  samplerName: "dpmpp_2m",
  scheduler: "karras",
};

export const CHARACTER_LAB_GUIDE = [
  "Aucun personnage genere n'est branche sur les cartes du jeu pour l'instant.",
  "Le studio separe maintenant le sujet, la direction 2D et le style de rendu pour eviter les generations molles ou trop carte illustree.",
  "Ajoute une image de base propre quand tu veux rester au plus pres d'un personnage existant. Le rendu utilisera alors cette image comme guide local.",
  "Le mode recommande est 2D Toon Animable avec fond transparent pour viser un vrai personnage de jeu plus facile a animer.",
  "Le pixel reste utile pour des mascottes simples, mais ce n'est plus le chemin par defaut pour un personnage cool en 2D.",
  "FLUX reste disponible en experimental pour chercher des silhouettes et des poses avant de revenir sur un preset final stable.",
  "Les candidats retenus restent confines au labo tant qu'on ne les valide pas ensemble.",
] as const;

const DEFAULT_SERVICE_STATUS: CharacterLabServiceStatus = {
  checkedAt: new Date(0).toISOString(),
  comfyUiUrl: DEFAULT_CHARACTER_LAB_SETTINGS.comfyUiUrl,
  reachable: false,
  error: "Aucune verification n'a encore ete lancee.",
};

function getDraftCards() {
  return CARD_ARCHETYPES.filter((card) => card.sourceType === "draft");
}

async function ensureStateDirectory() {
  await mkdir(CHARACTER_LAB_STATE_DIR, { recursive: true });
}

async function ensureCardImageDirectory(cardId: string) {
  await mkdir(path.join(GENERATED_IMAGE_ROOT, cardId), { recursive: true });
}

async function ensureReferenceImageDirectory() {
  await mkdir(REFERENCE_IMAGE_ROOT, { recursive: true });
}

async function readStoredState(): Promise<CharacterLabStoredState> {
  try {
    const raw = await readFile(CHARACTER_LAB_STATE_PATH, "utf8");
    const parsed = JSON.parse(raw) as CharacterLabStoredState;
    if (parsed && parsed.version === 1) {
      return parsed;
    }
  } catch {
    // Ignore missing or malformed local state; defaults are applied below.
  }

  return {
    version: 1,
    settings: {},
    cards: {},
  };
}

async function writeStoredState(state: CharacterLabStoredState) {
  await ensureStateDirectory();
  await writeFile(CHARACTER_LAB_STATE_PATH, JSON.stringify(state, null, 2), "utf8");
}

export function mergeCharacterLabSettings(
  storedSettings?: Partial<CharacterLabSettings>,
): CharacterLabSettings {
  const renderPresetId = storedSettings?.renderPresetId ?? DEFAULT_CHARACTER_LAB_SETTINGS.renderPresetId;
  const renderPreset = getCharacterLabRenderPreset(renderPresetId);

  return {
    ...DEFAULT_CHARACTER_LAB_SETTINGS,
    renderPresetId,
    backgroundMode: storedSettings?.backgroundMode ?? renderPreset.defaultBackgroundMode,
    ...storedSettings,
    width: Math.max(256, Math.round(storedSettings?.width ?? DEFAULT_CHARACTER_LAB_SETTINGS.width)),
    height: Math.max(256, Math.round(storedSettings?.height ?? DEFAULT_CHARACTER_LAB_SETTINGS.height)),
    referenceStrength: Math.min(
      0.85,
      Math.max(0.08, Number(storedSettings?.referenceStrength ?? DEFAULT_CHARACTER_LAB_SETTINGS.referenceStrength)),
    ),
    batchSize: Math.min(8, Math.max(1, Math.round(storedSettings?.batchSize ?? DEFAULT_CHARACTER_LAB_SETTINGS.batchSize))),
    steps: Math.min(60, Math.max(4, Math.round(storedSettings?.steps ?? renderPreset.defaultSteps))),
    guidanceScale: Math.min(
      20,
      Math.max(1, Number(storedSettings?.guidanceScale ?? renderPreset.defaultGuidanceScale)),
    ),
    samplerName: (storedSettings?.samplerName ?? renderPreset.defaultSamplerName).trim() || renderPreset.defaultSamplerName,
    scheduler: (storedSettings?.scheduler ?? renderPreset.defaultScheduler).trim() || renderPreset.defaultScheduler,
  };
}

function getDefaultStoredCardState(cardId: string): CharacterLabStoredCardState {
  const brief = CARD_ART_BRIEFS[cardId];
  if (!brief) {
    throw new Error(`Missing character lab brief for card ${cardId}.`);
  }

  return {
    subjectPrompt: brief.subjectPrompt,
    prompt: brief.prompt,
    negativePrompt: brief.negativePrompt,
    notes: brief.notes,
    direction: getDefaultCharacterLabDirection(cardId),
    referenceImageFilename: null,
    referenceImageUpdatedAt: null,
    selectedCandidateFilename: null,
    lastGeneratedAt: null,
    candidates: [],
  };
}

function toCandidatePublicSrc(cardId: string, filename: string): string {
  const params = new URLSearchParams({
    cardId,
    filename,
  });
  return `/api/character-lab/image?${params.toString()}`;
}

function toReferenceImagePublicSrc(cardId: string, updatedAt: string | null): string {
  const params = new URLSearchParams({
    cardId,
  });
  if (updatedAt) {
    params.set("t", updatedAt);
  }
  return `/api/character-lab/reference-image?${params.toString()}`;
}

async function readCardImageFiles(cardId: string): Promise<string[]> {
  const cardDirectory = path.join(GENERATED_IMAGE_ROOT, cardId);

  try {
    const entries = await readdir(cardDirectory, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && isSupportedGeneratedImage(entry.name))
      .map((entry) => entry.name)
      .sort((left, right) => right.localeCompare(left));
  } catch {
    return [];
  }
}

async function readReferenceImageFilename(cardId: string): Promise<string | null> {
  try {
    const entries = await readdir(REFERENCE_IMAGE_ROOT, { withFileTypes: true });
    return (
      entries
        .filter(
          (entry) => entry.isFile() && entry.name.startsWith(`reference-${cardId}.`) && isSupportedGeneratedImage(entry.name),
        )
        .map((entry) => entry.name)
        .sort((left, right) => right.localeCompare(left))[0] ?? null
    );
  } catch {
    return null;
  }
}

function mergeStoredCandidates(cardId: string, storedCard: CharacterLabStoredCardState, imageFiles: string[]): CharacterLabCandidate[] {
  const storedCandidatesByFilename = new Map(
    (storedCard.candidates ?? []).map((candidate) => [candidate.filename, candidate]),
  );

  return imageFiles.map((filename) => {
    const storedCandidate = storedCandidatesByFilename.get(filename);

    return {
      filename,
      src: toCandidatePublicSrc(cardId, filename),
      createdAt: storedCandidate?.createdAt ?? new Date(0).toISOString(),
      seed: storedCandidate?.seed ?? 0,
      width: storedCandidate?.width ?? DEFAULT_CHARACTER_LAB_SETTINGS.width,
      height: storedCandidate?.height ?? DEFAULT_CHARACTER_LAB_SETTINGS.height,
      prompt: storedCandidate?.prompt ?? storedCard.prompt ?? "",
      negativePrompt: storedCandidate?.negativePrompt ?? storedCard.negativePrompt ?? "",
      renderPresetId: storedCandidate?.renderPresetId ?? DEFAULT_CHARACTER_LAB_SETTINGS.renderPresetId,
      backgroundMode: storedCandidate?.backgroundMode ?? DEFAULT_CHARACTER_LAB_SETTINGS.backgroundMode,
      workflowFamily: storedCandidate?.workflowFamily ?? "sdxl",
      hasTransparency: storedCandidate?.hasTransparency ?? false,
      selected: storedCard.selectedCandidateFilename === filename,
    };
  });
}

function normalizeStoredCardState(cardId: string, storedCard: CharacterLabStoredCardState, imageFiles: string[]): CharacterLabStoredCardState {
  const defaults = getDefaultStoredCardState(cardId);
  const mergedCandidates = mergeStoredCandidates(cardId, { ...defaults, ...storedCard }, imageFiles);
  const sanitizedSubject = sanitizeCharacterLabSubjectPrompt(
    storedCard.subjectPrompt ?? storedCard.prompt ?? defaults.subjectPrompt ?? defaults.prompt ?? "",
  );

  return {
    subjectPrompt: sanitizedSubject.subjectPrompt,
    prompt: storedCard.prompt ?? defaults.prompt,
    negativePrompt: extractCharacterLabUserNegativePrompt(storedCard.negativePrompt ?? defaults.negativePrompt ?? ""),
    notes: storedCard.notes ?? defaults.notes,
    direction: resolveCharacterLabDirection(storedCard.direction, cardId),
    referenceImageFilename: storedCard.referenceImageFilename ?? defaults.referenceImageFilename ?? null,
    referenceImageUpdatedAt: storedCard.referenceImageUpdatedAt ?? defaults.referenceImageUpdatedAt ?? null,
    selectedCandidateFilename:
      storedCard.selectedCandidateFilename && imageFiles.includes(storedCard.selectedCandidateFilename)
        ? storedCard.selectedCandidateFilename
        : null,
    lastGeneratedAt: storedCard.lastGeneratedAt ?? null,
    candidates: mergedCandidates.map(
      (candidate) =>
        ({
          filename: candidate.filename,
          createdAt: candidate.createdAt,
          seed: candidate.seed,
          width: candidate.width,
          height: candidate.height,
          prompt: candidate.prompt,
          negativePrompt: candidate.negativePrompt,
          renderPresetId: candidate.renderPresetId,
          backgroundMode: candidate.backgroundMode,
          workflowFamily: candidate.workflowFamily,
          hasTransparency: candidate.hasTransparency,
        }) satisfies CharacterLabStoredCandidate,
    ),
  };
}

async function buildEntry(cardId: string, storedCard: CharacterLabStoredCardState): Promise<CharacterLabEntry> {
  const card = getDraftCards().find((entry) => entry.id === cardId);
  const brief = CARD_ART_BRIEFS[cardId];
  if (!card || !brief) {
    throw new Error(`Unknown character lab card: ${cardId}`);
  }

  const imageFiles = await readCardImageFiles(cardId);
  const normalizedCardState = normalizeStoredCardState(cardId, storedCard, imageFiles);
  const candidates = mergeStoredCandidates(cardId, normalizedCardState, imageFiles);
  const selectedCandidateSrc = normalizedCardState.selectedCandidateFilename
    ? toCandidatePublicSrc(cardId, normalizedCardState.selectedCandidateFilename)
    : null;
  const referenceImageSrc = normalizedCardState.referenceImageFilename
    ? toReferenceImagePublicSrc(cardId, normalizedCardState.referenceImageUpdatedAt ?? null)
    : null;

  return {
    id: card.id,
    name: card.name,
    concept: brief.concept,
    subjectPrompt: normalizedCardState.subjectPrompt ?? brief.subjectPrompt,
    negativePrompt: normalizedCardState.negativePrompt ?? brief.negativePrompt,
    notes: normalizedCardState.notes ?? brief.notes,
    direction: resolveCharacterLabDirection(normalizedCardState.direction, card.id),
    fallbackArtSrc: card.artSrc,
    referenceImageSrc,
    referenceImageUpdatedAt: normalizedCardState.referenceImageUpdatedAt ?? null,
    candidates,
    selectedCandidateFilename: normalizedCardState.selectedCandidateFilename ?? null,
    selectedCandidateSrc,
    candidateCount: candidates.length,
    lastGeneratedAt: normalizedCardState.lastGeneratedAt ?? candidates[0]?.createdAt ?? null,
  };
}

async function normalizeAndPersistState(
  storedState: CharacterLabStoredState,
): Promise<CharacterLabStoredState> {
  const normalizedCards: Record<string, CharacterLabStoredCardState> = {};

  for (const card of getDraftCards()) {
    const imageFiles = await readCardImageFiles(card.id);
    const referenceImageFilename = await readReferenceImageFilename(card.id);
    let referenceImageUpdatedAt: string | null = null;
    if (referenceImageFilename) {
      try {
        const referenceStats = await stat(path.join(REFERENCE_IMAGE_ROOT, referenceImageFilename));
        referenceImageUpdatedAt = referenceStats.mtime.toISOString();
      } catch {
        referenceImageUpdatedAt = null;
      }
    }
    normalizedCards[card.id] = normalizeStoredCardState(
      card.id,
      {
        ...(storedState.cards?.[card.id] ?? getDefaultStoredCardState(card.id)),
        referenceImageFilename,
        referenceImageUpdatedAt,
      },
      imageFiles,
    );
  }

  const normalizedState: CharacterLabStoredState = {
    version: 1,
    settings: mergeCharacterLabSettings(storedState.settings),
    cards: normalizedCards,
  };

  await writeStoredState(normalizedState);
  return normalizedState;
}

/**
 * Loads the full local character-lab state, including persisted prompts and current generated candidates.
 */
export async function loadCharacterLabData(): Promise<CharacterLabData> {
  const storedState = await normalizeAndPersistState(await readStoredState());
  const settings = mergeCharacterLabSettings(storedState.settings);
  const serviceStatus = await loadCharacterLabServiceStatus(settings);
  const entries = await Promise.all(
    getDraftCards().map((card) => buildEntry(card.id, storedState.cards?.[card.id] ?? getDefaultStoredCardState(card.id))),
  );

  return {
    guide: [...CHARACTER_LAB_GUIDE],
    warning: "Les candidats ci-dessous sont visibles uniquement dans le labo. Le combat principal continue d'utiliser les visuels actuels.",
    settings,
    serviceStatus,
    entries,
  };
}

async function updateStoredState(mutator: (state: CharacterLabStoredState) => void): Promise<CharacterLabStoredState> {
  const currentState = await readStoredState();
  const nextState: CharacterLabStoredState = {
    version: 1,
    settings: {
      ...currentState.settings,
    },
    cards: {
      ...currentState.cards,
    },
  };

  mutator(nextState);
  return normalizeAndPersistState(nextState);
}

export async function saveCharacterLabSettings(settings: CharacterLabSettings): Promise<CharacterLabData> {
  await updateStoredState((state) => {
    state.settings = mergeCharacterLabSettings(settings);
  });

  return loadCharacterLabData();
}

function sanitizeReferenceFilename(cardId: string, filename: string): string {
  const extension = path.extname(filename).toLowerCase();
  const safeExtension = isSupportedGeneratedImage(filename) ? extension : ".png";
  return `reference-${cardId}${safeExtension}`;
}

export async function loadCharacterLabReferenceImage(cardId: string): Promise<{ filename: string; bytes: Buffer } | null> {
  const filename = await readReferenceImageFilename(cardId);
  if (!filename) {
    return null;
  }

  try {
    const bytes = await readFile(path.join(REFERENCE_IMAGE_ROOT, filename));
    return { filename, bytes };
  } catch {
    return null;
  }
}

export async function saveCharacterLabReferenceImage(cardId: string, filename: string, bytes: Buffer): Promise<CharacterLabData> {
  await ensureReferenceImageDirectory();

  const existingFilename = await readReferenceImageFilename(cardId);
  if (existingFilename) {
    try {
      await unlink(path.join(REFERENCE_IMAGE_ROOT, existingFilename));
    } catch {
      // Ignore cleanup errors; the new reference still takes precedence.
    }
  }

  const nextFilename = sanitizeReferenceFilename(cardId, filename);
  await writeFile(path.join(REFERENCE_IMAGE_ROOT, nextFilename), bytes);
  const updatedAt = new Date().toISOString();

  await updateStoredState((state) => {
    const current = state.cards?.[cardId] ?? getDefaultStoredCardState(cardId);
    state.cards ??= {};
    state.cards[cardId] = {
      ...current,
      referenceImageFilename: nextFilename,
      referenceImageUpdatedAt: updatedAt,
    };
  });

  return loadCharacterLabData();
}

export async function clearCharacterLabReferenceImage(cardId: string): Promise<CharacterLabData> {
  const existingFilename = await readReferenceImageFilename(cardId);
  if (existingFilename) {
    try {
      await unlink(path.join(REFERENCE_IMAGE_ROOT, existingFilename));
    } catch {
      // Ignore cleanup errors; state normalization will reconcile the rest.
    }
  }

  await updateStoredState((state) => {
    const current = state.cards?.[cardId] ?? getDefaultStoredCardState(cardId);
    state.cards ??= {};
    state.cards[cardId] = {
      ...current,
      referenceImageFilename: null,
      referenceImageUpdatedAt: null,
    };
  });

  return loadCharacterLabData();
}

export async function saveCharacterLabCard(input: {
  cardId: string;
  subjectPrompt: string;
  negativePrompt: string;
  notes: string;
  direction: CharacterLabDirection;
}): Promise<CharacterLabData> {
  await updateStoredState((state) => {
    const current = state.cards?.[input.cardId] ?? getDefaultStoredCardState(input.cardId);
    const sanitizedSubject = sanitizeCharacterLabSubjectPrompt(input.subjectPrompt);
    state.cards ??= {};
    state.cards[input.cardId] = {
      ...current,
      subjectPrompt: sanitizedSubject.subjectPrompt,
      prompt: current.prompt,
      negativePrompt: extractCharacterLabUserNegativePrompt(input.negativePrompt),
      notes: input.notes.trim(),
      direction: resolveCharacterLabDirection(input.direction, input.cardId),
    };
  });

  return loadCharacterLabData();
}

export async function selectCharacterLabCandidate(cardId: string, filename: string | null): Promise<CharacterLabData> {
  await updateStoredState((state) => {
    const current = state.cards?.[cardId] ?? getDefaultStoredCardState(cardId);
    state.cards ??= {};
    state.cards[cardId] = {
      ...current,
      selectedCandidateFilename: filename,
    };
  });

  return loadCharacterLabData();
}

export async function deleteCharacterLabCandidate(cardId: string, filename: string): Promise<CharacterLabData> {
  const targetPath = path.join(GENERATED_IMAGE_ROOT, cardId, filename);

  try {
    await stat(targetPath);
    await unlink(targetPath);
  } catch {
    // Ignore missing files; the state normalization will reconcile the rest.
  }

  await updateStoredState((state) => {
    const current = state.cards?.[cardId] ?? getDefaultStoredCardState(cardId);
    state.cards ??= {};
    state.cards[cardId] = {
      ...current,
      selectedCandidateFilename:
        current.selectedCandidateFilename === filename ? null : current.selectedCandidateFilename ?? null,
      candidates: (current.candidates ?? []).filter((candidate) => candidate.filename !== filename),
    };
  });

  return loadCharacterLabData();
}

export async function saveGeneratedCharacterCandidates(options: {
  cardId: string;
  prompt: string;
  negativePrompt: string;
  userNegativePrompt: string;
  subjectPrompt: string;
  seed: number;
  width: number;
  height: number;
  renderPresetId: CharacterLabRenderPresetId;
  backgroundMode: CharacterLabBackgroundMode;
  direction: CharacterLabDirection;
  images: Buffer[];
  hasTransparency: boolean;
}): Promise<CharacterLabData> {
  const createdAt = new Date().toISOString();
  await ensureCardImageDirectory(options.cardId);
  const savedCandidates: CharacterLabStoredCandidate[] = [];

  for (const [index, imageBytes] of options.images.entries()) {
    const filename = buildCandidateFilename(options.cardId, createdAt, index);
    const absolutePath = path.join(GENERATED_IMAGE_ROOT, options.cardId, filename);
    await writeFile(absolutePath, imageBytes);
    savedCandidates.push({
      filename,
      createdAt,
      seed: options.seed + index,
      width: options.width,
      height: options.height,
      prompt: options.prompt,
      negativePrompt: options.negativePrompt,
      renderPresetId: options.renderPresetId,
      backgroundMode: options.backgroundMode,
      workflowFamily: getCharacterLabRenderPreset(options.renderPresetId).workflowFamily,
      hasTransparency: options.hasTransparency,
    });
  }

  await updateStoredState((state) => {
    const current = state.cards?.[options.cardId] ?? getDefaultStoredCardState(options.cardId);
    const sanitizedSubject = sanitizeCharacterLabSubjectPrompt(options.subjectPrompt);
    state.cards ??= {};
    state.cards[options.cardId] = {
      ...current,
      subjectPrompt: sanitizedSubject.subjectPrompt,
      prompt: options.prompt.trim(),
      negativePrompt: extractCharacterLabUserNegativePrompt(options.userNegativePrompt),
      lastGeneratedAt: createdAt,
      direction: resolveCharacterLabDirection(options.direction, options.cardId),
      candidates: [...savedCandidates, ...(current.candidates ?? [])],
    };
  });

  return loadCharacterLabData();
}
