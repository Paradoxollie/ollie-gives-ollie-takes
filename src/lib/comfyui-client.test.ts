import { describe, expect, it } from "vitest";

import { buildCharacterLabWorkflow } from "@/lib/comfyui-client";
import type { CharacterLabSettings } from "@/lib/character-lab-types";

type WorkflowNodeMap = Record<string, unknown>;

const BASE_SETTINGS: CharacterLabSettings = {
  comfyUiUrl: "http://127.0.0.1:8188",
  renderPresetId: "game-pixel-cutout",
  backgroundMode: "transparent-cutout",
  width: 1024,
  height: 1536,
  referenceStrength: 0.28,
  batchSize: 1,
  steps: 24,
  guidanceScale: 5.5,
  samplerName: "dpmpp_2m",
  scheduler: "karras",
};

describe("buildCharacterLabWorkflow", () => {
  it("creates an SDXL workflow with the pixel-art LoRA for the recommended game preset", () => {
    const workflow = buildCharacterLabWorkflow(BASE_SETTINGS, {
      prompt: "cute hedgehog spirit",
      negativePrompt: "text, watermark",
      width: 1024,
      height: 1536,
      batchSize: 2,
      steps: 24,
      guidanceScale: 5.5,
      samplerName: "dpmpp_2m",
      scheduler: "karras",
      seed: 1234,
      filenamePrefix: "character-lab/stag",
    }) as WorkflowNodeMap;

    expect(workflow["4"]).toEqual({
      class_type: "CheckpointLoaderSimple",
      inputs: {
        ckpt_name: "sd_xl_base_1.0.safetensors",
      },
    });
    expect(workflow["11"]).toEqual({
      class_type: "LoraLoader",
      inputs: {
        model: ["4", 0],
        clip: ["4", 1],
        lora_name: "pixel-art-xl.safetensors",
        strength_model: 0.9,
        strength_clip: 0.9,
      },
    });
    expect(workflow["8"]).toEqual({
      class_type: "KSampler",
      inputs: {
        seed: 1234,
        steps: 24,
        cfg: 5.5,
        sampler_name: "dpmpp_2m",
        scheduler: "karras",
        denoise: 1,
        model: ["11", 0],
        positive: ["6", 0],
        negative: ["7", 0],
        latent_image: ["5", 0],
      },
    });
  });

  it("switches to an img2img latent path when a reference image is provided", () => {
    const workflow = buildCharacterLabWorkflow(
      {
        ...BASE_SETTINGS,
        renderPresetId: "game-toon-cutout",
        guidanceScale: 6,
        steps: 28,
      },
      {
        prompt: "round forest hedgehog spirit, clean cel-shaded illustration",
        negativePrompt: "horror, text",
        width: 1024,
        height: 1536,
        batchSize: 1,
        referenceStrength: 0.22,
        referenceImage: {
          filename: "reference-stag.png",
          bytes: Buffer.from([1, 2, 3]),
        },
        steps: 28,
        guidanceScale: 6,
        samplerName: "dpmpp_2m",
        scheduler: "karras",
        seed: 999,
        filenamePrefix: "character-lab/stag",
      },
    ) as WorkflowNodeMap;

    expect(workflow["20"]).toEqual({
      class_type: "LoadImage",
      inputs: {
        image: "reference-stag.png",
        upload: "image",
      },
    });
    expect(workflow["21"]).toEqual({
      class_type: "ImageScale",
      inputs: {
        image: ["20", 0],
        width: 1024,
        height: 1536,
        upscale_method: "bicubic",
        crop: "center",
      },
    });
    expect(workflow["8"]).toEqual({
      class_type: "KSampler",
      inputs: {
        seed: 999,
        steps: 28,
        cfg: 6,
        sampler_name: "dpmpp_2m",
        scheduler: "karras",
        denoise: 0.22,
        model: ["4", 0],
        positive: ["6", 0],
        negative: ["7", 0],
        latent_image: ["24", 0],
      },
    });
  });

  it("creates a FLUX workflow for the concept preset", () => {
    const workflow = buildCharacterLabWorkflow(
      {
        ...BASE_SETTINGS,
        renderPresetId: "flux-concept-cutout",
        steps: 4,
        guidanceScale: 3.5,
        samplerName: "euler",
        scheduler: "simple",
      },
      {
        prompt: "cute thorn kitten familiar",
        negativePrompt: "busy background",
        width: 1024,
        height: 1536,
        batchSize: 1,
        steps: 4,
        guidanceScale: 3.5,
        samplerName: "euler",
        scheduler: "simple",
        seed: 777,
        filenamePrefix: "character-lab/owl",
      },
    ) as WorkflowNodeMap;

    expect(workflow["38"]).toEqual({
      class_type: "UNETLoader",
      inputs: {
        unet_name: "flux1-schnell.safetensors",
        weight_dtype: "default",
      },
    });
    expect(workflow["40"]).toEqual({
      class_type: "DualCLIPLoader",
      inputs: {
        clip_name1: "clip_l.safetensors",
        clip_name2: "t5xxl_fp8_e4m3fn_scaled.safetensors",
        type: "flux",
        device: "default",
      },
    });
    expect(workflow["41"]).toEqual({
      class_type: "CLIPTextEncodeFlux",
      inputs: {
        clip: ["40", 0],
        clip_l: "cute thorn kitten familiar",
        t5xxl: "cute thorn kitten familiar",
        guidance: 3.5,
      },
    });
    expect(workflow["31"]).toEqual({
      class_type: "KSampler",
      inputs: {
        seed: 777,
        steps: 4,
        cfg: 1,
        sampler_name: "euler",
        scheduler: "simple",
        denoise: 1,
        model: ["38", 0],
        positive: ["41", 0],
        negative: ["42", 0],
        latent_image: ["27", 0],
      },
    });
  });
});
