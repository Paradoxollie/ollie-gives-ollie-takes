import { randomInt } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";
import type { CharacterLabDirection, CharacterLabSettings } from "@/lib/character-lab-types";

export const dynamic = "force-dynamic";

function jsonError(message: string, status = 400) {
  return NextResponse.json(
    {
      error: message,
    },
    { status },
  );
}

function buildGenerationErrorMessage(error: unknown, settings: CharacterLabSettings): string {
  const fallback = error instanceof Error ? error.message : "La generation locale a echoue.";
  if (settings.renderPresetId !== "flux-concept-cutout") {
    return fallback;
  }

  if (fallback.includes("Impossible de joindre ComfyUI")) {
    return "FLUX est experimental sur cette machine et peut faire tomber ComfyUI pendant le chargement. Redemarre ComfyUI puis utilise 2D Toon Animable ou Pixel Art Jeu Video pour le rendu final.";
  }

  return `FLUX experimental: ${fallback}`;
}

export async function POST(request: NextRequest) {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const payload = (await request.json()) as {
    cardId?: string;
    subjectPrompt?: string;
    negativePrompt?: string;
    notes?: string;
    direction?: CharacterLabDirection;
    seed?: number | null;
    settings?: CharacterLabSettings;
  };

  if (
    typeof payload.cardId !== "string" ||
    typeof payload.subjectPrompt !== "string" ||
    typeof payload.negativePrompt !== "string" ||
    !payload.direction ||
    !payload.settings
  ) {
    return jsonError("Les donnees de generation sont incompletes.");
  }

  const settings = payload.settings;

  const resolvedSeed =
    typeof payload.seed === "number" && Number.isFinite(payload.seed)
      ? Math.max(0, Math.floor(payload.seed))
      : randomInt(1, 2_147_483_647);

  try {
    const [
      { removeBackgroundFromImageBuffer },
      { composeCharacterLabGenerationPrompts },
      { generateImagesWithComfyUi },
      { postprocessPixelArtImageBuffer },
      {
        loadCharacterLabReferenceImage,
        saveCharacterLabCard,
        saveGeneratedCharacterCandidates,
        saveCharacterLabSettings,
      },
    ] = await Promise.all([
      import("@/lib/background-removal"),
      import("@/lib/character-lab-presets"),
      import("@/lib/comfyui-client"),
      import("@/lib/pixel-art-postprocess"),
      import("@/lib/character-lab-store"),
    ]);

    await saveCharacterLabSettings(payload.settings);
    await saveCharacterLabCard({
      cardId: payload.cardId,
      subjectPrompt: payload.subjectPrompt,
      negativePrompt: payload.negativePrompt,
      notes: typeof payload.notes === "string" ? payload.notes : "",
      direction: payload.direction,
    });

    const composedPrompts = composeCharacterLabGenerationPrompts({
      renderPresetId: settings.renderPresetId,
      backgroundMode: settings.backgroundMode,
      subjectPrompt: payload.subjectPrompt,
      negativePrompt: payload.negativePrompt,
      direction: payload.direction,
    });

    const images = await generateImagesWithComfyUi(settings, {
      prompt: composedPrompts.prompt,
      negativePrompt: composedPrompts.negativePrompt,
      width: settings.width,
      height: settings.height,
      batchSize: settings.batchSize,
      referenceStrength: settings.referenceStrength,
      referenceImage: await loadCharacterLabReferenceImage(payload.cardId),
      steps: settings.steps,
      guidanceScale: settings.guidanceScale,
      samplerName: settings.samplerName,
      scheduler: settings.scheduler,
      seed: resolvedSeed,
      filenamePrefix: `character-lab/${payload.cardId}`,
    });

    const processedImages = await Promise.all(
      images.map(async (image) => {
        let nextBytes = image.bytes;

        if (settings.backgroundMode === "transparent-cutout") {
          nextBytes = await removeBackgroundFromImageBuffer(nextBytes);
        }

        if (composedPrompts.preset.pixelArtPostprocess) {
          nextBytes = await postprocessPixelArtImageBuffer(
            nextBytes,
            composedPrompts.preset.pixelArtPostprocess,
            settings.backgroundMode === "transparent-cutout",
          );
        }

        return nextBytes;
      }),
    );

    const nextState = await saveGeneratedCharacterCandidates({
      cardId: payload.cardId,
      subjectPrompt: payload.subjectPrompt,
      prompt: composedPrompts.prompt,
      negativePrompt: composedPrompts.negativePrompt,
      userNegativePrompt: payload.negativePrompt,
      seed: resolvedSeed,
      width: settings.width,
      height: settings.height,
      renderPresetId: settings.renderPresetId,
      backgroundMode: settings.backgroundMode,
      direction: payload.direction,
      hasTransparency: settings.backgroundMode === "transparent-cutout",
      images: processedImages.slice(0, settings.batchSize),
    });

    return NextResponse.json({
      seed: resolvedSeed,
      ...nextState,
    });
  } catch (error) {
    return jsonError(buildGenerationErrorMessage(error, settings), 500);
  }
}
