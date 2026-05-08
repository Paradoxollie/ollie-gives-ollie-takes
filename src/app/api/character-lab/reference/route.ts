import { NextRequest, NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

function jsonError(message: string, status = 400) {
  return NextResponse.json(
    {
      error: message,
    },
    { status },
  );
}

export async function POST(request: NextRequest) {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const formData = await request.formData();
  const cardId = formData.get("cardId");
  const file = formData.get("file");

  if (typeof cardId !== "string" || cardId.length === 0) {
    return jsonError("La carte cible est manquante.");
  }

  if (!(file instanceof File)) {
    return jsonError("L'image de reference est manquante.");
  }

  const { isSupportedGeneratedImage } = await import("@/lib/card-art");
  if (!isSupportedGeneratedImage(file.name)) {
    return jsonError("Format d'image non supporte. Utilise PNG, JPG ou WEBP.");
  }

  const { saveCharacterLabReferenceImage } = await import("@/lib/character-lab-store");
  const bytes = Buffer.from(await file.arrayBuffer());
  const nextState = await saveCharacterLabReferenceImage(cardId, file.name, bytes);
  return NextResponse.json(nextState);
}

export async function DELETE(request: NextRequest) {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const payload = (await request.json()) as {
    cardId?: string;
  };

  if (typeof payload.cardId !== "string" || payload.cardId.length === 0) {
    return jsonError("La carte cible est manquante.");
  }

  const { clearCharacterLabReferenceImage } = await import("@/lib/character-lab-store");
  const nextState = await clearCharacterLabReferenceImage(payload.cardId);
  return NextResponse.json(nextState);
}
