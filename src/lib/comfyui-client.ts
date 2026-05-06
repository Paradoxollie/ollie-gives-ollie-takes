import type { CharacterLabServiceStatus, CharacterLabSettings } from "@/lib/character-lab-types";
import { getCharacterLabRenderPreset } from "@/lib/character-lab-presets";

interface ComfyUiPromptResponse {
  prompt_id?: string;
  node_errors?: Record<string, unknown>;
}

interface ComfyUiHistoryImage {
  filename: string;
  subfolder: string;
  type: string;
}

interface ComfyUiHistoryNodeOutput {
  images?: ComfyUiHistoryImage[];
}

interface ComfyUiHistoryPrompt {
  outputs?: Record<string, ComfyUiHistoryNodeOutput>;
}

export interface ComfyUiGeneratedImage {
  filename: string;
  subfolder: string;
  type: string;
  bytes: Buffer;
}

export interface CharacterLabWorkflowInput {
  prompt: string;
  negativePrompt: string;
  width: number;
  height: number;
  batchSize: number;
  referenceStrength?: number;
  referenceImage?: {
    filename: string;
    bytes: Buffer;
  } | null;
  steps: number;
  guidanceScale: number;
  samplerName: string;
  scheduler: string;
  seed: number;
  filenamePrefix: string;
}

function normalizeBaseUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

async function fetchJson<T>(input: string, init?: RequestInit): Promise<T> {
  try {
    const response = await fetch(input, init);
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`ComfyUI request failed (${response.status}): ${body || response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw error;
    }

    throw new Error(`Impossible de joindre ComfyUI via ${input}.`);
  }
}

function buildSdxlWorkflow(settings: CharacterLabSettings, input: CharacterLabWorkflowInput) {
  const preset = getCharacterLabRenderPreset(settings.renderPresetId);
  if (!preset.sdxl) {
    throw new Error(`Le preset ${preset.id} n'est pas configure pour SDXL.`);
  }

  const clipSource = preset.sdxl.loraName ? "11" : "4";
  const modelSource = preset.sdxl.loraName ? "11" : "4";
  const usesReferenceImage = Boolean(input.referenceImage?.filename);
  const latentSource = usesReferenceImage ? "24" : "5";
  const denoise = usesReferenceImage ? input.referenceStrength ?? settings.referenceStrength : 1;

  return {
    "4": {
      class_type: "CheckpointLoaderSimple",
      inputs: {
        ckpt_name: preset.sdxl.checkpointName,
      },
    },
    ...(preset.sdxl.loraName
      ? {
          "11": {
            class_type: "LoraLoader",
            inputs: {
              model: ["4", 0],
              clip: ["4", 1],
              lora_name: preset.sdxl.loraName,
              strength_model: preset.sdxl.loraStrength ?? 1,
              strength_clip: preset.sdxl.loraStrength ?? 1,
            },
          },
        }
      : {}),
    ...(usesReferenceImage
      ? {
          "20": {
            class_type: "LoadImage",
            inputs: {
              image: input.referenceImage?.filename ?? "",
              upload: "image",
            },
          },
          "21": {
            class_type: "ImageScale",
            inputs: {
              image: ["20", 0],
              width: input.width,
              height: input.height,
              upscale_method: "bicubic",
              crop: "center",
            },
          },
          "24": {
            class_type: "VAEEncode",
            inputs: {
              pixels: ["21", 0],
              vae: ["4", 2],
            },
          },
        }
      : {
          "5": {
            class_type: "EmptyLatentImage",
            inputs: {
              width: input.width,
              height: input.height,
              batch_size: input.batchSize,
            },
          },
        }),
    "6": {
      class_type: "CLIPTextEncode",
      inputs: {
        text: input.prompt,
        clip: [clipSource, 1],
      },
    },
    "7": {
      class_type: "CLIPTextEncode",
      inputs: {
        text: input.negativePrompt,
        clip: [clipSource, 1],
      },
    },
    "8": {
      class_type: "KSampler",
      inputs: {
        seed: input.seed,
        steps: input.steps,
        cfg: input.guidanceScale,
        sampler_name: input.samplerName,
        scheduler: input.scheduler,
        denoise,
        model: [modelSource, 0],
        positive: ["6", 0],
        negative: ["7", 0],
        latent_image: [latentSource, 0],
      },
    },
    "9": {
      class_type: "VAEDecode",
      inputs: {
        samples: ["8", 0],
        vae: ["4", 2],
      },
    },
    "10": {
      class_type: "SaveImage",
      inputs: {
        filename_prefix: input.filenamePrefix,
        images: ["9", 0],
      },
    },
  };
}

function buildFluxWorkflow(settings: CharacterLabSettings, input: CharacterLabWorkflowInput) {
  const preset = getCharacterLabRenderPreset(settings.renderPresetId);
  if (!preset.flux) {
    throw new Error(`Le preset ${preset.id} n'est pas configure pour FLUX.`);
  }

  return {
    "27": {
      class_type: "EmptySD3LatentImage",
      inputs: {
        width: input.width,
        height: input.height,
        batch_size: input.batchSize,
      },
    },
    "31": {
      class_type: "KSampler",
      inputs: {
        seed: input.seed,
        steps: input.steps,
        cfg: 1,
        sampler_name: input.samplerName,
        scheduler: input.scheduler,
        denoise: 1,
        model: ["38", 0],
        positive: ["41", 0],
        negative: ["42", 0],
        latent_image: ["27", 0],
      },
    },
    "38": {
      class_type: "UNETLoader",
      inputs: {
        unet_name: preset.flux.diffusionModelName,
        weight_dtype: "default",
      },
    },
    "39": {
      class_type: "VAELoader",
      inputs: {
        vae_name: preset.flux.vaeName,
      },
    },
    "40": {
      class_type: "DualCLIPLoader",
      inputs: {
        clip_name1: preset.flux.clipLName,
        clip_name2: preset.flux.t5Name,
        type: "flux",
        device: "default",
      },
    },
    "41": {
      class_type: "CLIPTextEncodeFlux",
      inputs: {
        clip: ["40", 0],
        clip_l: input.prompt,
        t5xxl: input.prompt,
        guidance: input.guidanceScale,
      },
    },
    "42": {
      class_type: "ConditioningZeroOut",
      inputs: {
        conditioning: ["41", 0],
      },
    },
    "8": {
      class_type: "VAEDecode",
      inputs: {
        samples: ["31", 0],
        vae: ["39", 0],
      },
    },
    "9": {
      class_type: "SaveImage",
      inputs: {
        filename_prefix: input.filenamePrefix,
        images: ["8", 0],
      },
    },
  };
}

export function buildCharacterLabWorkflow(settings: CharacterLabSettings, input: CharacterLabWorkflowInput) {
  const preset = getCharacterLabRenderPreset(settings.renderPresetId);

  switch (preset.workflowFamily) {
    case "flux":
      return buildFluxWorkflow(settings, input);
    case "sdxl":
    default:
      return buildSdxlWorkflow(settings, input);
  }
}

export async function loadCharacterLabServiceStatus(settings: CharacterLabSettings): Promise<CharacterLabServiceStatus> {
  const comfyUiUrl = normalizeBaseUrl(settings.comfyUiUrl);
  const checkedAt = new Date().toISOString();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1800);

  try {
    await fetchJson<Record<string, unknown>>(`${comfyUiUrl}/system_stats`, {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeout);

    return {
      checkedAt,
      comfyUiUrl,
      reachable: true,
      error: null,
    };
  } catch (error) {
    clearTimeout(timeout);
    return {
      checkedAt,
      comfyUiUrl,
      reachable: false,
      error:
        error instanceof Error && error.name === "AbortError"
          ? "ComfyUI ne repond pas dans le delai attendu."
          : error instanceof Error
            ? error.message
            : "Connexion ComfyUI indisponible.",
    };
  }
}

async function submitPrompt(baseUrl: string, prompt: ReturnType<typeof buildCharacterLabWorkflow>): Promise<string> {
  const response = await fetchJson<ComfyUiPromptResponse>(`${baseUrl}/prompt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.prompt_id) {
    throw new Error(
      response.node_errors && Object.keys(response.node_errors).length > 0
        ? `ComfyUI a refuse le workflow: ${JSON.stringify(response.node_errors)}`
        : "ComfyUI n'a pas retourne de prompt_id.",
    );
  }

  return response.prompt_id;
}

async function uploadImage(baseUrl: string, image: { filename: string; bytes: Buffer }): Promise<string> {
  const formData = new FormData();
  formData.set("overwrite", "true");
  formData.set("image", new Blob([new Uint8Array(image.bytes)]), image.filename);

  const response = await fetchJson<{ name?: string }>(`${baseUrl}/upload/image`, {
    method: "POST",
    body: formData,
  });

  return response.name ?? image.filename;
}

async function waitForHistory(baseUrl: string, promptId: string, timeoutMs = 8 * 60 * 1000): Promise<ComfyUiHistoryPrompt> {
  const startedAt = Date.now();

  while (Date.now() - startedAt <= timeoutMs) {
    const history = await fetchJson<Record<string, ComfyUiHistoryPrompt>>(`${baseUrl}/history/${promptId}`, {
      cache: "no-store",
    });
    const promptHistory = history[promptId];
    if (promptHistory?.outputs && Object.keys(promptHistory.outputs).length > 0) {
      return promptHistory;
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  throw new Error("Le delai d'attente ComfyUI a expire.");
}

function collectImages(history: ComfyUiHistoryPrompt): ComfyUiHistoryImage[] {
  return Object.values(history.outputs ?? {}).flatMap((output) => output.images ?? []);
}

async function downloadImage(baseUrl: string, image: ComfyUiHistoryImage): Promise<Buffer> {
  const params = new URLSearchParams({
    filename: image.filename,
    subfolder: image.subfolder,
    type: image.type,
  });
  try {
    const response = await fetch(`${baseUrl}/view?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Impossible de telecharger ${image.filename} depuis ComfyUI.`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch {
    throw new Error(`Impossible de telecharger ${image.filename} depuis ComfyUI.`);
  }
}

/**
 * Runs a local ComfyUI workflow for the character lab and returns the generated images as bytes.
 */
export async function generateImagesWithComfyUi(
  settings: CharacterLabSettings,
  workflowInput: Omit<CharacterLabWorkflowInput, "filenamePrefix"> & { filenamePrefix?: string },
): Promise<ComfyUiGeneratedImage[]> {
  const baseUrl = normalizeBaseUrl(settings.comfyUiUrl);
  const uploadedReferenceFilename = workflowInput.referenceImage
    ? await uploadImage(baseUrl, workflowInput.referenceImage)
    : null;
  const prompt = buildCharacterLabWorkflow(settings, {
    ...workflowInput,
    batchSize: uploadedReferenceFilename ? 1 : workflowInput.batchSize,
    referenceImage: uploadedReferenceFilename
      ? {
          filename: uploadedReferenceFilename,
          bytes: workflowInput.referenceImage?.bytes ?? Buffer.alloc(0),
        }
      : null,
    filenamePrefix: workflowInput.filenamePrefix ?? "character-lab",
  });
  const promptId = await submitPrompt(baseUrl, prompt);
  const history = await waitForHistory(baseUrl, promptId);
  const images = collectImages(history);

  if (images.length === 0) {
    throw new Error("ComfyUI a termine sans image exploitable.");
  }

  return Promise.all(
    images.map(async (image) => ({
      ...image,
      bytes: await downloadImage(baseUrl, image),
    })),
  );
}
