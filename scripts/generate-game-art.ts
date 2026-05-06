import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { removeBackgroundFromImageBuffer } from "../src/lib/background-removal";

interface ComfyImage {
  filename: string;
  subfolder: string;
  type: string;
}

interface ComfyHistory {
  outputs?: Record<string, { images?: ComfyImage[] }>;
}

const COMFY_URL = "http://127.0.0.1:8188";
const CHECKPOINT = "sd_xl_base_1.0.safetensors";

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`${url} failed (${response.status}): ${await response.text()}`);
  }
  return (await response.json()) as T;
}

function buildSdxlImageWorkflow(options: {
  prompt: string;
  negativePrompt: string;
  width: number;
  height: number;
  steps: number;
  cfg: number;
  seed: number;
  filenamePrefix: string;
}) {
  return {
    "4": {
      class_type: "CheckpointLoaderSimple",
      inputs: { ckpt_name: CHECKPOINT },
    },
    "5": {
      class_type: "EmptyLatentImage",
      inputs: {
        width: options.width,
        height: options.height,
        batch_size: 1,
      },
    },
    "6": {
      class_type: "CLIPTextEncode",
      inputs: { text: options.prompt, clip: ["4", 1] },
    },
    "7": {
      class_type: "CLIPTextEncode",
      inputs: { text: options.negativePrompt, clip: ["4", 1] },
    },
    "8": {
      class_type: "KSampler",
      inputs: {
        seed: options.seed,
        steps: options.steps,
        cfg: options.cfg,
        sampler_name: "dpmpp_2m",
        scheduler: "karras",
        denoise: 1,
        model: ["4", 0],
        positive: ["6", 0],
        negative: ["7", 0],
        latent_image: ["5", 0],
      },
    },
    "9": {
      class_type: "VAEDecode",
      inputs: { samples: ["8", 0], vae: ["4", 2] },
    },
    "10": {
      class_type: "SaveImage",
      inputs: { filename_prefix: options.filenamePrefix, images: ["9", 0] },
    },
  };
}

async function runWorkflow(workflow: ReturnType<typeof buildSdxlImageWorkflow>): Promise<Buffer> {
  const queued = await fetchJson<{ prompt_id?: string; node_errors?: Record<string, unknown> }>(`${COMFY_URL}/prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: workflow }),
  });

  if (!queued.prompt_id) {
    throw new Error(`ComfyUI rejected workflow: ${JSON.stringify(queued.node_errors ?? {})}`);
  }

  const startedAt = Date.now();
  while (Date.now() - startedAt < 10 * 60 * 1000) {
    const history = await fetchJson<Record<string, ComfyHistory>>(`${COMFY_URL}/history/${queued.prompt_id}`, {
      cache: "no-store",
    });
    const images = Object.values(history[queued.prompt_id]?.outputs ?? {}).flatMap((output) => output.images ?? []);
    const image = images[0];

    if (image) {
      const params = new URLSearchParams({
        filename: image.filename,
        subfolder: image.subfolder,
        type: image.type,
      });
      const response = await fetch(`${COMFY_URL}/view?${params.toString()}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Could not download generated image ${image.filename}.`);
      }
      return Buffer.from(await response.arrayBuffer());
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  throw new Error("Timed out waiting for ComfyUI image generation.");
}

async function generateArena() {
  const prompt = [
    "premium top-down video game combat arena for an auto-battler tactics game",
    "original magical forest ruin amphitheater, not any existing IP",
    "central raised 3 by 3 tactical board with nine empty square stone tiles",
    "top and bottom team benches carved into the arena floor",
    "clear gameplay readable spaces, no UI overlay",
    "bioluminescent roots, mossy stone, blue spirit pools, warm torchlight",
    "hand-painted 2d environment art, polished game production quality",
    "bright enough for gameplay, strong silhouettes, rich material detail",
    "wide orthographic top-down perspective",
  ].join(", ");
  const negativePrompt = [
    "text",
    "letters",
    "logo",
    "watermark",
    "cards",
    "characters",
    "people",
    "creatures",
    "menu",
    "interface",
    "health bars",
    "dark muddy image",
    "low contrast",
    "photorealistic photograph",
    "sci-fi metal arena",
  ].join(", ");
  const image = await runWorkflow(
    buildSdxlImageWorkflow({
      prompt,
      negativePrompt,
      width: 1536,
      height: 1024,
      steps: 34,
      cfg: 6.2,
      seed: 42862417,
      filenamePrefix: "ollie-game/arena-autobattler-forest",
    }),
  );

  const outputDir = path.join(process.cwd(), "public", "images", "game");
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "arena-autobattler-forest.png"), image);
}

async function generateHedgehogUnit() {
  const prompt = [
    "single premium 2d game creature champion, full body, centered",
    "adorable forest hedgehog spirit, luminous leaf quills, tiny moss cloak, bright expressive eyes",
    "heroic idle pose, feet planted, clear readable silhouette",
    "beautiful hand-painted cel-shaded video game sprite, Ori-like softness but original design",
    "rounded charming mascot proportions, game-ready cutout, separated limbs, clean joints",
    "moss green, mint glow, moon blue accents, warm cheek highlights",
    "plain flat mint studio background for easy cutout",
    "no text, no frame, no border, one character only",
  ].join(", ");
  const negativePrompt = [
    "pixel art",
    "card frame",
    "trading card",
    "text",
    "letters",
    "logo",
    "watermark",
    "photorealism",
    "realistic fur strands",
    "muddy shading",
    "horror",
    "gore",
    "human",
    "multiple characters",
    "cropped body",
    "cut off ears",
    "cut off feet",
    "extra limbs",
    "duplicate body",
    "busy background",
    "forest scene",
  ].join(", ");
  const image = await runWorkflow(
    buildSdxlImageWorkflow({
      prompt,
      negativePrompt,
      width: 1024,
      height: 1536,
      steps: 32,
      cfg: 6,
      seed: 81842604,
      filenamePrefix: "ollie-game/units/lumisylve-hedgehog",
    }),
  );
  const cutout = await removeBackgroundFromImageBuffer(image);

  const outputDir = path.join(process.cwd(), "public", "images", "units", "lumisylve");
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "source.png"), image);
  await writeFile(path.join(outputDir, "idle-cutout.png"), cutout);
}

async function main() {
  const target = process.argv[2] ?? "all";
  if (target === "all" || target === "arena") {
    await generateArena();
  }
  if (target === "all" || target === "unit") {
    await generateHedgehogUnit();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
