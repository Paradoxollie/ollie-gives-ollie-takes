import { extractLegacySubjectPrompt } from "@/core/config/cardArtBriefs";

const SEGMENT_DROP_PATTERNS = [
  /\bmasterpiece\b/i,
  /\bbest quality\b/i,
  /\b3d\b/i,
  /\b3d video game asset\b/i,
  /\bstylized 3d render\b/i,
  /\bunreal engine\b/i,
  /\boctane\b/i,
  /\boctane render\b/i,
  /\bray tracing\b/i,
  /\bvolumetric lighting\b/i,
  /\bethereal lighting\b/i,
  /\bsoft cinematic lighting\b/i,
  /\bcinematic lighting\b/i,
  /\bsharp focus\b/i,
  /\bhighly detailed\b/i,
  /\bsmooth 3d modeling\b/i,
  /\bcollectible card illustration\b/i,
  /\bvivid colors\b/i,
  /\bcrisp edges\b/i,
  /\bno text\b/i,
  /\bno border\b/i,
  /\bno frame\b/i,
  /\bone character only\b/i,
  /\bbackground\b/i,
  /\bbackdrop\b/i,
  /\bwaterfall\b/i,
  /\bgrotto\b/i,
  /\bbraziers?\b/i,
  /\bfireflies\b/i,
  /\bmushrooms?\b/i,
  /\bpedestal\b/i,
  /\baltar\b/i,
  /\bshrine\b/i,
  /\bplatform\b/i,
  /\bsigil\b/i,
  /\bportal glow\b/i,
];

const INLINE_STYLE_PATTERNS: Array<[RegExp, string]> = [
  [/\banime\b/gi, ""],
  [/\bkawaii\b/gi, ""],
  [/\bpixel art\b/gi, ""],
  [/\bsprite\b/gi, ""],
  [/\bvideo game\b/gi, ""],
  [/\brender\b/gi, ""],
  [/\bproduction-ready game asset\b/gi, ""],
  [/\bpolished modern\b/gi, ""],
  [/\bcute indie game\b/gi, ""],
];

const POSE_RECOVERY_PATTERNS: Array<[RegExp, string]> = [
  [/\b((?:standing|sitting|posed|perched|hovering|floating)(?: [a-z]+){1,2})\s+(?:on|over)\b.*$/i, "$1"],
  [/\b(poised on one leg)\s+(?:on|over)\b.*$/i, "$1"],
];

function cleanSegment(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .replace(/[.,\s]+$/g, "")
    .trim();
}

export interface CharacterLabSubjectSanitizationResult {
  subjectPrompt: string;
  removedSegments: string[];
}

/**
 * Keeps only the subject-level character description and drops legacy style/background clauses.
 */
export function sanitizeCharacterLabSubjectPrompt(prompt: string): CharacterLabSubjectSanitizationResult {
  const basePrompt = extractLegacySubjectPrompt(prompt)
    .replace(/\r/g, "")
    .replace(/\n+/g, ", ")
    .trim();

  if (!basePrompt) {
    return {
      subjectPrompt: "",
      removedSegments: [],
    };
  }

  const removedSegments: string[] = [];
  const keptSegments: string[] = [];

  for (const rawSegment of basePrompt.split(",")) {
    const originalSegment = cleanSegment(rawSegment);
    if (!originalSegment) {
      continue;
    }

    let cleanedSegment = originalSegment;

    for (const [pattern, replacement] of POSE_RECOVERY_PATTERNS) {
      cleanedSegment = cleanedSegment.replace(pattern, replacement);
    }

    for (const [pattern, replacement] of INLINE_STYLE_PATTERNS) {
      cleanedSegment = cleanedSegment.replace(pattern, replacement);
    }

    cleanedSegment = cleanSegment(cleanedSegment);

    if (!cleanedSegment || SEGMENT_DROP_PATTERNS.some((pattern) => pattern.test(cleanedSegment))) {
      removedSegments.push(originalSegment);
      continue;
    }

    if (keptSegments.includes(cleanedSegment)) {
      continue;
    }

    keptSegments.push(cleanedSegment);
  }

  const subjectPrompt = keptSegments.join(", ").trim() || cleanSegment(basePrompt);

  return {
    subjectPrompt,
    removedSegments,
  };
}
