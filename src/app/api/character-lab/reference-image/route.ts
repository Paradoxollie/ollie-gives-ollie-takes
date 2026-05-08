import path from "node:path";
import { readFile, readdir } from "node:fs/promises";

import { NextRequest, NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

const REFERENCE_IMAGE_ROOT = path.join(process.cwd(), "reports", "character-lab", "references");

function contentTypeForFilename(filename: string) {
  const extension = path.extname(filename).toLowerCase();
  switch (extension) {
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    default:
      return "application/octet-stream";
  }
}

export async function GET(request: NextRequest) {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const cardId = request.nextUrl.searchParams.get("cardId") ?? "";

  if (!cardId || path.basename(cardId) !== cardId) {
    return NextResponse.json({ error: "Reference de labo invalide." }, { status: 400 });
  }

  const { isSupportedGeneratedImage } = await import("@/lib/card-art");
  try {
    const entries = await readdir(REFERENCE_IMAGE_ROOT, { withFileTypes: true });
    const filename =
      entries
        .filter(
          (entry) => entry.isFile() && entry.name.startsWith(`reference-${cardId}.`) && isSupportedGeneratedImage(entry.name),
        )
        .map((entry) => entry.name)
        .sort((left, right) => right.localeCompare(left))[0] ?? null;

    if (!filename) {
      return NextResponse.json({ error: "Reference introuvable." }, { status: 404 });
    }

    const bytes = await readFile(path.join(REFERENCE_IMAGE_ROOT, filename));
    return new NextResponse(bytes, {
      headers: {
        "Content-Type": contentTypeForFilename(filename),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Reference introuvable." }, { status: 404 });
  }
}
