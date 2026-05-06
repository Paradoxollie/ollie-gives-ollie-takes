import path from "node:path";
import { spawn } from "node:child_process";
import { access } from "node:fs/promises";

const COMFYUI_PYTHON = "D:\\AI\\ComfyUI\\venv\\Scripts\\python.exe";
const REMOVE_BACKGROUND_SCRIPT = path.join(process.cwd(), "scripts", "remove_background.py");

async function ensureFileExists(targetPath: string) {
  try {
    await access(targetPath);
  } catch {
    throw new Error(`Fichier introuvable pour le detourage local: ${targetPath}`);
  }
}

/**
 * Removes the background from one generated image through the local Python helper.
 */
export async function removeBackgroundFromImageBuffer(imageBytes: Buffer): Promise<Buffer> {
  await ensureFileExists(COMFYUI_PYTHON);
  await ensureFileExists(REMOVE_BACKGROUND_SCRIPT);

  return new Promise<Buffer>((resolve, reject) => {
    const process = spawn(COMFYUI_PYTHON, [REMOVE_BACKGROUND_SCRIPT], {
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
    });

    const stdoutChunks: Buffer[] = [];
    const stderrChunks: Buffer[] = [];

    process.stdout.on("data", (chunk) => stdoutChunks.push(Buffer.from(chunk)));
    process.stderr.on("data", (chunk) => stderrChunks.push(Buffer.from(chunk)));
    process.on("error", (error) => reject(error));
    process.on("close", (code) => {
      if (code !== 0) {
        const details = Buffer.concat(stderrChunks).toString("utf8").trim();
        reject(new Error(details || "Le detourage local a echoue."));
        return;
      }

      const output = Buffer.concat(stdoutChunks);
      if (output.length === 0) {
        reject(new Error("Le detourage local n'a retourne aucune image."));
        return;
      }

      resolve(output);
    });

    process.stdin.write(imageBytes);
    process.stdin.end();
  });
}
