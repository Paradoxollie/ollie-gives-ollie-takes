import { describe, expect, it } from "vitest";

import { getDefaultCharacterLabDirection } from "@/lib/character-lab-direction";
import {
  applyCharacterLabRenderPresetDefaults,
  composeCharacterLabGenerationPrompts,
  extractCharacterLabUserNegativePrompt,
} from "@/lib/character-lab-presets";
import type { CharacterLabSettings } from "@/lib/character-lab-types";

const SETTINGS: CharacterLabSettings = {
  comfyUiUrl: "http://127.0.0.1:8188",
  renderPresetId: "game-pixel-scene",
  backgroundMode: "scene",
  width: 1024,
  height: 1536,
  referenceStrength: 0.28,
  batchSize: 1,
  steps: 26,
  guidanceScale: 5.5,
  samplerName: "dpmpp_2m",
  scheduler: "karras",
};

describe("character-lab-presets", () => {
  it("applies the recommended defaults when switching presets", () => {
    expect(applyCharacterLabRenderPresetDefaults(SETTINGS, "flux-concept-cutout")).toMatchObject({
      renderPresetId: "flux-concept-cutout",
      backgroundMode: "transparent-cutout",
      steps: 4,
      guidanceScale: 3.5,
      samplerName: "euler",
      scheduler: "simple",
    });
  });

  it("composes a cutout-friendly prompt for the pixel preset", () => {
    const composed = composeCharacterLabGenerationPrompts({
      renderPresetId: "game-pixel-cutout",
      backgroundMode: "transparent-cutout",
      subjectPrompt: "masterpiece, stylized 3D render, round forest hedgehog spirit, tiny leaf cape, standing on a shrine pedestal",
      negativePrompt: "horror, gore",
      direction: getDefaultCharacterLabDirection("stag"),
    });

    expect(composed.subjectPrompt).toBe("round forest hedgehog spirit, tiny leaf cape");
    expect(composed.removedSegments).toContain("stylized 3D render");
    expect(composed.prompt).toContain("handcrafted pixel art look");
    expect(composed.prompt).toContain("loop-friendly mascot design");
    expect(composed.prompt).toContain("background designed for easy cutout");
    expect(composed.negativePrompt).toContain("horror, gore");
    expect(composed.negativePrompt).toContain("forest, cave, mountain");
  });

  it("dedupes preset negatives and extracts only the user constraints from stored prompts", () => {
    const composed = composeCharacterLabGenerationPrompts({
      renderPresetId: "game-toon-cutout",
      backgroundMode: "transparent-cutout",
      subjectPrompt: "playful thorn kitten familiar, berry crown, curled tail",
      negativePrompt: "text, watermark, horror, horror",
      direction: getDefaultCharacterLabDirection("owl"),
    });
    const negativeSegments = composed.negativePrompt.split(",").map((segment) => segment.trim());

    expect(negativeSegments.filter((segment) => segment === "text")).toHaveLength(1);
    expect(negativeSegments.filter((segment) => segment === "horror")).toHaveLength(1);
    expect(extractCharacterLabUserNegativePrompt(composed.negativePrompt)).toBe("horror");
  });
});
