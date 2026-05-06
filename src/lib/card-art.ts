export const GENERATED_CARD_ART_EXTENSIONS = ["png", "webp", "jpg", "jpeg"] as const;

export const CHARACTER_LAB_TARGET_SIZE = {
  width: 1024,
  height: 1536,
} as const;

export const CHARACTER_LAB_DEFAULT_BATCH_SIZE = 4;

/**
 * Returns the public directory used by the local character lab for one card.
 */
export function getCharacterLabPublicDir(cardId: string): string {
  return `/images/cards-generated/${cardId}`;
}

/**
 * Returns whether a filename is a supported generated image extension.
 */
export function isSupportedGeneratedImage(filename: string): boolean {
  return GENERATED_CARD_ART_EXTENSIONS.some((extension) => filename.toLowerCase().endsWith(`.${extension}`));
}

/**
 * Creates a stable candidate filename for locally generated character art.
 */
export function buildCandidateFilename(cardId: string, createdAt: string, variantIndex: number): string {
  const timestamp = createdAt.replace(/[-:.TZ]/g, "").slice(0, 14);
  return `candidate-${cardId}-${timestamp}-${String(variantIndex + 1).padStart(2, "0")}.png`;
}
