import path from "node:path";
import { readFile } from "node:fs/promises";

import { NextRequest, NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

const GENERATED_IMAGE_ROOT = path.join(process.cwd(), "public", "images", "cards-generated");

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
  const filename = request.nextUrl.searchParams.get("filename") ?? "";

  if (!cardId || !filename || path.basename(cardId) !== cardId || path.basename(filename) !== filename) {
    return NextResponse.json({ error: "Image de labo invalide." }, { status: 400 });
  }

  const { isSupportedGeneratedImage } = await import("@/lib/card-art");
  if (!isSupportedGeneratedImage(filename)) {
    return NextResponse.json({ error: "Format d'image non supporte." }, { status: 400 });
  }

  try {
    const absolutePath = path.join(GENERATED_IMAGE_ROOT, cardId, filename);
    const bytes = await readFile(absolutePath);
    return new NextResponse(bytes, {
      headers: {
        "Content-Type": contentTypeForFilename(filename),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Image de labo introuvable." }, { status: 404 });
  }
}
