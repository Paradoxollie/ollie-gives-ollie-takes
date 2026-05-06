import { describe, expect, it } from "vitest";

import {
  analyzeCharacterLabDirectionPlan,
  buildCharacterLabDirectionPrompt,
  getDefaultCharacterLabDirection,
  resolveCharacterLabDirection,
} from "@/lib/character-lab-direction";

describe("character-lab-direction", () => {
  it("merges sensible defaults for each card before applying overrides", () => {
    expect(getDefaultCharacterLabDirection("stag")).toEqual({
      silhouette: "compact",
      posePreset: "idle-front",
      detailBudget: "clean",
      animationGoal: "mascot-loop",
    });

    expect(
      resolveCharacterLabDirection(
        {
          detailBudget: "ornate",
        },
        "stag",
      ),
    ).toEqual({
      silhouette: "compact",
      posePreset: "idle-front",
      detailBudget: "ornate",
      animationGoal: "mascot-loop",
    });
  });

  it("adds animation-friendly prompt fragments for rig oriented characters", () => {
    const prompt = buildCharacterLabDirectionPrompt({
      silhouette: "balanced",
      posePreset: "idle-3q",
      detailBudget: "clean",
      animationGoal: "puppet-rig",
    });

    expect(prompt.promptSegments.join(", ")).toContain("separated limbs");
    expect(prompt.negativePromptSegments.join(", ")).toContain("hidden hands");
  });

  it("flags cluttered illustration prompts as risky for animation", () => {
    const diagnostics = analyzeCharacterLabDirectionPlan({
      subjectPrompt:
        "cute poison dryad child, thorn crown, holding a bottle, wearing a satchel, forest background, shrine pedestal",
      direction: {
        silhouette: "balanced",
        posePreset: "action-ready",
        detailBudget: "ornate",
        animationGoal: "frame-by-frame",
      },
      renderPresetId: "flux-concept-cutout",
      backgroundMode: "scene",
      experimental: true,
      removedSegments: ["stylized 3D render"],
    });

    expect(diagnostics.score).toBeLessThan(66);
    expect(diagnostics.sceneClutterCount).toBeGreaterThan(0);
    expect(diagnostics.accessoryCount).toBeGreaterThan(1);
    expect(diagnostics.risks.join(" ")).toContain("decor");
  });
});
