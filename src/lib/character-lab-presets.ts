import type {
  CharacterLabBackgroundMode,
  CharacterLabDirection,
  CharacterLabRenderPresetId,
  CharacterLabSettings,
  CharacterLabWorkflowFamily,
} from "@/lib/character-lab-types";
import {
  buildCharacterLabDirectionPrompt,
  CHARACTER_LAB_ANIMATION_OPTIONS,
  CHARACTER_LAB_DETAIL_OPTIONS,
  CHARACTER_LAB_POSE_OPTIONS,
  CHARACTER_LAB_SILHOUETTE_OPTIONS,
} from "@/lib/character-lab-direction";
import { sanitizeCharacterLabSubjectPrompt } from "@/lib/character-lab-subject";

interface CharacterLabSdxlModelConfig {
  checkpointName: string;
  loraName?: string;
  loraStrength?: number;
}

interface CharacterLabFluxModelConfig {
  diffusionModelName: string;
  clipLName: string;
  t5Name: string;
  vaeName: string;
}

export interface CharacterLabPixelArtPostprocessConfig {
  shortestSide: number;
  paletteSize: number;
  subjectScale: number;
  alphaThreshold: number;
}

export interface CharacterLabRenderPreset {
  id: CharacterLabRenderPresetId;
  label: string;
  shortLabel: string;
  description: string;
  experimental?: boolean;
  workflowFamily: CharacterLabWorkflowFamily;
  modelSummary: string;
  defaultBackgroundMode: CharacterLabBackgroundMode;
  defaultWidth: number;
  defaultHeight: number;
  defaultSteps: number;
  defaultGuidanceScale: number;
  defaultSamplerName: string;
  defaultScheduler: string;
  promptPrefix: string;
  promptSuffix: string;
  negativePrompt: string;
  backgroundPrompts: Record<CharacterLabBackgroundMode, string>;
  backgroundNegativePrompts: Record<CharacterLabBackgroundMode, string>;
  sdxl?: CharacterLabSdxlModelConfig;
  flux?: CharacterLabFluxModelConfig;
  pixelArtPostprocess?: CharacterLabPixelArtPostprocessConfig;
}

const SHARED_NEGATIVE_PROMPT =
  "text, watermark, logo, signature, border, extra limbs, duplicate body, cropped body, cut off ears, cut off tail";

function splitPromptSegments(value: string): string[] {
  return value
    .split(",")
    .map((segment) => cleanSegment(segment))
    .filter(Boolean);
}

const PRESET_NEGATIVE_SEGMENTS = new Set<string>();

export const CHARACTER_LAB_RENDER_PRESETS: readonly CharacterLabRenderPreset[] = [
  {
    id: "game-toon-cutout",
    label: "2D Toon Animable",
    shortLabel: "Toon rig",
    description:
      "Le preset principal pour viser un personnage 2D cool, cel-shade, lisible et plus facile a animer qu'un rendu carte illustre.",
    workflowFamily: "sdxl",
    modelSummary: "SDXL base, cutout 2D, detail budget controle, aucun modele payant",
    defaultBackgroundMode: "transparent-cutout",
    defaultWidth: 1024,
    defaultHeight: 1536,
    defaultSteps: 28,
    defaultGuidanceScale: 6,
    defaultSamplerName: "dpmpp_2m",
    defaultScheduler: "karras",
    promptPrefix:
      "single premium 2d game creature character, full body, centered, clean cel-shaded illustration, hand-painted 2d look, bold silhouette, readable shapes, stylized fantasy creature design, cool but charming, colorful fantasy palette, simple costume blocks, animation-ready cutout",
    promptSuffix: "no text, no frame, no border, one character only",
    negativePrompt:
      "pixel art, glossy 3d render, painterly texture soup, photorealism, muddy shading, realistic fur strands, noisy gradients, overdesigned costume, plate armor, knight armor, giant shoulder pads, giant cape, monochrome, grayscale, desaturated palette, human child, human girl, adult human, realistic human skin, multiple characters",
    backgroundPrompts: {
      scene: "small restrained environment hint, character stays dominant, decor kept secondary",
      "flat-backdrop": "plain flat studio backdrop, one clean color field, character sheet presentation",
      "transparent-cutout":
        "plain flat mint backdrop, isolated character, single-color studio background for easy cutout, no floor clutter",
    },
    backgroundNegativePrompts: {
      scene: "epic panorama, giant environment, complex set dressing, cinematic vista",
      "flat-backdrop": "forest, cave, mountain, detailed scene, props, platform, shrine, frame",
      "transparent-cutout":
        "forest, cave, mountain, detailed scene, props, platform, shrine, shadowy environment, decorative frame",
    },
    sdxl: {
      checkpointName: "sd_xl_base_1.0.safetensors",
    },
  },
  {
    id: "game-pixel-cutout",
    label: "Pixel Art Jeu Video",
    shortLabel: "Pixel cute",
    description:
      "Le preset principal pour un personnage mignon, lisible, isole et directement exploitable dans un jeu video 2D.",
    workflowFamily: "sdxl",
    modelSummary: "SDXL base + Pixel Art XL LoRA + detourage + recentrage pixel",
    defaultBackgroundMode: "transparent-cutout",
    defaultWidth: 1024,
    defaultHeight: 1536,
    defaultSteps: 24,
    defaultGuidanceScale: 5.5,
    defaultSamplerName: "dpmpp_2m",
    defaultScheduler: "karras",
    promptPrefix:
      "single adorable video game creature, full body, centered, iconic silhouette, premium fantasy game sprite, handcrafted pixel art look, crisp pixel clusters, charming mascot design, cute but heroic, expressive eyes, animation-ready shapes, readable at card size",
    promptSuffix: "no text, no frame, no border, one character only",
    negativePrompt:
      "realistic shading, painterly brush strokes, photorealism, detailed landscape, cinematic illustration, busy background, blurry pixels, anti-aliased gradients, glossy 3d render, multiple characters, soft airbrush, splash art",
    backgroundPrompts: {
      scene: "simple playful game environment, restrained background, background stays secondary",
      "flat-backdrop": "plain flat pastel backdrop, one solid color background, studio asset sheet look",
      "transparent-cutout":
        "plain flat mint backdrop, single-color studio background, isolated character, background designed for easy cutout",
    },
    backgroundNegativePrompts: {
      scene: "crowded scene, huge scenery, detailed vista, dramatic environment",
      "flat-backdrop": "forest, cave, mountain, detailed scene, props, platform, shrine",
      "transparent-cutout":
        "forest, cave, mountain, detailed scene, props, platform, shrine, shadowy environment, decorative frame",
    },
    sdxl: {
      checkpointName: "sd_xl_base_1.0.safetensors",
      loraName: "pixel-art-xl.safetensors",
      loraStrength: 0.9,
    },
    pixelArtPostprocess: {
      shortestSide: 192,
      paletteSize: 40,
      subjectScale: 0.82,
      alphaThreshold: 80,
    },
  },
  {
    id: "game-pixel-scene",
    label: "Pixel Art Avec Decor",
    shortLabel: "Pixel scene",
    description: "La meme direction artistique, avec juste assez de decor pour juger l'ambiance avant de revenir au PNG final.",
    workflowFamily: "sdxl",
    modelSummary: "SDXL base + Pixel Art XL LoRA",
    defaultBackgroundMode: "scene",
    defaultWidth: 1024,
    defaultHeight: 1536,
    defaultSteps: 26,
    defaultGuidanceScale: 5.5,
    defaultSamplerName: "dpmpp_2m",
    defaultScheduler: "karras",
    promptPrefix:
      "single adorable video game creature, full body, centered, iconic silhouette, premium fantasy game sprite, handcrafted pixel art key art, cohesive palette, expressive face, strong gameplay readability",
    promptSuffix: "no text, no frame, no border, one character only",
    negativePrompt:
      "photorealism, painterly oil look, fuzzy pixels, detailed matte painting, realistic skin, multiple characters, poster layout, glossy 3d render",
    backgroundPrompts: {
      scene: "small game-like backdrop, compact environment vignette, decorative but simple background",
      "flat-backdrop": "plain flat pastel backdrop, one solid color background, studio asset sheet look",
      "transparent-cutout":
        "plain flat mint backdrop, single-color studio background, isolated character, background designed for easy cutout",
    },
    backgroundNegativePrompts: {
      scene: "epic wide landscape, sprawling panorama, huge architecture",
      "flat-backdrop": "forest, cave, mountain, detailed scene, props, platform, shrine",
      "transparent-cutout": "forest, cave, mountain, detailed scene, props, platform, shrine, decorative frame",
    },
    sdxl: {
      checkpointName: "sd_xl_base_1.0.safetensors",
      loraName: "pixel-art-xl.safetensors",
      loraStrength: 0.82,
    },
    pixelArtPostprocess: {
      shortestSide: 208,
      paletteSize: 48,
      subjectScale: 0.84,
      alphaThreshold: 72,
    },
  },
  {
    id: "flux-concept-cutout",
    label: "FLUX Concept Cutout",
    shortLabel: "Flux concept",
    description:
      "Pour explorer des silhouettes et des poses. Preset experimental: utile pour l'ideation, pas pour le rendu final pixel.",
    experimental: true,
    workflowFamily: "flux",
    modelSummary: "FLUX.1-schnell avec fond plat et detourage local",
    defaultBackgroundMode: "transparent-cutout",
    defaultWidth: 1024,
    defaultHeight: 1536,
    defaultSteps: 4,
    defaultGuidanceScale: 3.5,
    defaultSamplerName: "euler",
    defaultScheduler: "simple",
    promptPrefix:
      "single cute video game character concept, full body, centered, iconic silhouette, clean proportions, high readability, appealing game design, charming personality, one character only",
    promptSuffix: "no text, no frame, no border",
    negativePrompt:
      "busy background, realistic photography, multiple characters, painterly landscape, splash art composition, poster design, cropped body",
    backgroundPrompts: {
      scene: "simple restrained environment hint, character remains dominant",
      "flat-backdrop": "plain flat pastel backdrop, one solid color background, concept sheet look",
      "transparent-cutout": "plain flat mint backdrop, isolated character, single-color studio background for easy cutout",
    },
    backgroundNegativePrompts: {
      scene: "epic environment, giant landscape, complex scene",
      "flat-backdrop": "forest, cave, mountain, detailed scene, props, platform, shrine",
      "transparent-cutout": "forest, cave, mountain, detailed scene, props, platform, shrine, frame",
    },
    flux: {
      diffusionModelName: "flux1-schnell.safetensors",
      clipLName: "clip_l.safetensors",
      t5Name: "t5xxl_fp8_e4m3fn_scaled.safetensors",
      vaeName: "ae.safetensors",
    },
  },
] as const;

for (const preset of CHARACTER_LAB_RENDER_PRESETS) {
  for (const segment of splitPromptSegments(preset.negativePrompt)) {
    PRESET_NEGATIVE_SEGMENTS.add(segment.toLowerCase());
  }

  for (const backgroundNegativePrompt of Object.values(preset.backgroundNegativePrompts)) {
    for (const segment of splitPromptSegments(backgroundNegativePrompt)) {
      PRESET_NEGATIVE_SEGMENTS.add(segment.toLowerCase());
    }
  }
}

for (const segment of splitPromptSegments(SHARED_NEGATIVE_PROMPT)) {
  PRESET_NEGATIVE_SEGMENTS.add(segment.toLowerCase());
}

for (const option of [
  ...CHARACTER_LAB_SILHOUETTE_OPTIONS,
  ...CHARACTER_LAB_POSE_OPTIONS,
  ...CHARACTER_LAB_DETAIL_OPTIONS,
  ...CHARACTER_LAB_ANIMATION_OPTIONS,
]) {
  for (const segment of splitPromptSegments(option.negativePrompt ?? "")) {
    PRESET_NEGATIVE_SEGMENTS.add(segment.toLowerCase());
  }
}

export function getCharacterLabRenderPreset(renderPresetId: CharacterLabRenderPresetId): CharacterLabRenderPreset {
  return CHARACTER_LAB_RENDER_PRESETS.find((preset) => preset.id === renderPresetId) ?? CHARACTER_LAB_RENDER_PRESETS[0];
}

export function applyCharacterLabRenderPresetDefaults(
  settings: CharacterLabSettings,
  renderPresetId: CharacterLabRenderPresetId,
): CharacterLabSettings {
  const preset = getCharacterLabRenderPreset(renderPresetId);

  return {
    ...settings,
    renderPresetId: preset.id,
    backgroundMode: preset.defaultBackgroundMode,
    width: preset.defaultWidth,
    height: preset.defaultHeight,
    steps: preset.defaultSteps,
    guidanceScale: preset.defaultGuidanceScale,
    samplerName: preset.defaultSamplerName,
    scheduler: preset.defaultScheduler,
  };
}

function cleanSegment(value: string): string {
  return value.trim().replace(/\s+/g, " ").replace(/[,.]+$/g, "");
}

function dedupePromptSegments(segments: string[]): string[] {
  const keptSegments: string[] = [];
  const seenSegments = new Set<string>();

  for (const rawSegment of segments) {
    for (const segment of splitPromptSegments(rawSegment)) {
      const normalizedSegment = segment.toLowerCase();
      if (!normalizedSegment || seenSegments.has(normalizedSegment)) {
        continue;
      }

      keptSegments.push(segment);
      seenSegments.add(normalizedSegment);
    }
  }

  return keptSegments;
}

export function extractCharacterLabUserNegativePrompt(negativePrompt: string): string {
  const keptSegments: string[] = [];
  const seenSegments = new Set<string>();

  for (const segment of splitPromptSegments(negativePrompt)) {
    const normalizedSegment = segment.toLowerCase();
    if (PRESET_NEGATIVE_SEGMENTS.has(normalizedSegment) || seenSegments.has(normalizedSegment)) {
      continue;
    }

    keptSegments.push(segment);
    seenSegments.add(normalizedSegment);
  }

  return keptSegments.join(", ");
}

export function composeCharacterLabGenerationPrompts(options: {
  renderPresetId: CharacterLabRenderPresetId;
  backgroundMode: CharacterLabBackgroundMode;
  subjectPrompt: string;
  negativePrompt: string;
  direction: CharacterLabDirection;
}) {
  const preset = getCharacterLabRenderPreset(options.renderPresetId);
  const sanitizedSubject = sanitizeCharacterLabSubjectPrompt(options.subjectPrompt);
  const subjectPrompt = cleanSegment(sanitizedSubject.subjectPrompt);
  const userNegativePrompt = cleanSegment(options.negativePrompt);
  const directionPrompt = buildCharacterLabDirectionPrompt(options.direction);

  const prompt = dedupePromptSegments([
    subjectPrompt,
    preset.promptPrefix,
    ...directionPrompt.promptSegments,
    preset.backgroundPrompts[options.backgroundMode],
    preset.promptSuffix,
  ]).join(", ");

  const negativePrompt = dedupePromptSegments([
    userNegativePrompt,
    preset.negativePrompt,
    ...directionPrompt.negativePromptSegments,
    preset.backgroundNegativePrompts[options.backgroundMode],
    SHARED_NEGATIVE_PROMPT,
  ]).join(", ");

  return {
    subjectPrompt,
    removedSegments: sanitizedSubject.removedSegments,
    prompt,
    negativePrompt,
    preset,
  };
}
