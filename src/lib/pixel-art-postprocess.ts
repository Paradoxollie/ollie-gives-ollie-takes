import path from "node:path";
import { spawn } from "node:child_process";
import { access } from "node:fs/promises";

import type { CharacterLabPixelArtPostprocessConfig } from "@/lib/character-lab-presets";

const COMFYUI_PYTHON = "D:\\AI\\ComfyUI\\venv\\Scripts\\python.exe";
const PIXEL_ART_POSTPROCESS_SCRIPT = path.join(process.cwd(), "scripts", "postprocess_pixel_art.py");

async function ensureFileExists(targetPath: string) {
  try {
    await access(targetPath);
  } catch {
    throw new Error(`Fichier introuvable pour le post-traitement pixel art: ${targetPath}`);
  }
}

/**
 * Pixelizes, recenters, and quantizes a generated character image through a local Python helper.
 */
export async function postprocessPixelArtImageBuffer(
  imageBytes: Buffer,
  config: CharacterLabPixelArtPostprocessConfig,
  centerCutout: boolean,
): Promise<Buffer> {
  await ensureFileExists(COMFYUI_PYTHON);
  await ensureFileExists(PIXEL_ART_POSTPROCESS_SCRIPT);

  return new Promise<Buffer>((resolve, reject) => {
    const process = spawn(
      COMFYUI_PYTHON,
      [
        PIXEL_ART_POSTPROCESS_SCRIPT,
        "--shortest-side",
        String(config.shortestSide),
        "--palette-size",
        String(config.paletteSize),
        "--subject-scale",
        String(config.subjectScale),
        "--alpha-threshold",
        String(config.alphaThreshold),
        ...(centerCutout ? ["--center-cutout"] : []),
      ],
      {
        stdio: ["pipe", "pipe", "pipe"],
        windowsHide: true,
      },
    );

    const stdoutChunks: Buffer[] = [];
    const stderrChunks: Buffer[] = [];

    process.stdout.on("data", (chunk) => stdoutChunks.push(Buffer.from(chunk)));
    process.stderr.on("data", (chunk) => stderrChunks.push(Buffer.from(chunk)));
    process.on("error", (error) => reject(error));
    process.on("close", (code) => {
      if (code !== 0) {
        const details = Buffer.concat(stderrChunks).toString("utf8").trim();
        reject(new Error(details || "Le post-traitement pixel art a echoue."));
        return;
      }

      const output = Buffer.concat(stdoutChunks);
      if (output.length === 0) {
        reject(new Error("Le post-traitement pixel art n'a retourne aucune image."));
        return;
      }

      resolve(output);
    });

    process.stdin.write(imageBytes);
    process.stdin.end();
  });
}
